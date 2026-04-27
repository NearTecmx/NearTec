'use client'

import { useMemo, useState } from 'react'
import {
  CONTACT,
  SERVICE_OPTIONS,
  SCOPE_NEEDS,
  TIMBRES_PACKAGES,
  calculateNearTecQuote,
  formatMoney,
  getLeadQualification,
  getRecommendedModules,
  type BillingCycle,
  type CloudPlan,
  type NearTecQuoteInput,
  type ScopeNeed,
} from '@/lib/neartec-pricing'

const defaultInput: NearTecQuoteInput = {
  serviceFocus: 'compunegocio',
  seats: 3,
  billingCycle: 'monthly',
  includeImplementation: true,
  supportHours: 0,
  developmentHours: 0,
  cloudPlan: 'none',
  timbresPackage: 0,
  scopeNeeds: ['web', 'email'],
  companyName: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  customNeeds: '',
}

const seatOptions = [1, 3, 5, 8, 12]
const supportOptions = [0, 1, 2, 4, 8]
const developmentOptions = [0, 1, 2, 4, 8]

export default function CotizadorNearTec() {
  const [input, setInput] = useState<NearTecQuoteInput>(defaultInput)
  const quote = useMemo(() => calculateNearTecQuote(input), [input])
  const modules = useMemo(() => getRecommendedModules(input), [input])
  const lead = useMemo(() => getLeadQualification(input), [input])
  const service = SERVICE_OPTIONS.find((item) => item.value === input.serviceFocus)
  const timbres = TIMBRES_PACKAGES.find((item) => item.value === input.timbresPackage)

  function update<K extends keyof NearTecQuoteInput>(key: K, value: NearTecQuoteInput[K]) {
    setInput((current) => ({ ...current, [key]: value }))
  }

  function toggleScope(value: ScopeNeed) {
    setInput((current) => ({
      ...current,
      scopeNeeds: current.scopeNeeds.includes(value)
        ? current.scopeNeeds.filter((item) => item !== value)
        : [...current.scopeNeeds, value],
    }))
  }

  const summary = [
    'COTIZACIÓN INICIAL NEARTEC',
    'Rangos base sujetos a validación, alcance e IVA cuando aplique.',
    '',
    `Empresa: ${input.companyName || 'Pendiente'}`,
    `Contacto: ${input.contactName || 'Pendiente'}`,
    `WhatsApp: ${input.contactPhone || 'Pendiente'}`,
    `Correo: ${input.contactEmail || 'Pendiente'}`,
    '',
    `Servicio principal: ${service?.label || 'NearTec'}`,
    `Licencias/estaciones: ${input.seats}`,
    `Ciclo: ${input.billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
    `CN7/nube: ${input.cloudPlan === 'cn7_backup' ? 'CN7 servidor + respaldo' : input.cloudPlan === 'cn7_hosted' ? 'CN7 hospedado' : input.cloudPlan === 'backup_only' ? 'Respaldo automático' : 'No incluido por ahora'}`,
    `Implementación: ${input.includeImplementation ? 'Sí' : 'No'}`,
    `Timbres: ${timbres?.label || 'Sin timbres'}`,
    `Soporte: ${input.supportHours} h`,
    `Desarrollo: ${input.developmentHours} h`,
    '',
    `Recurrente MXN: ${quote.monthlyRecurringLabel || quote.annualRecurringLabel || '—'}`,
    `Recurrente USD: ${quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}`,
    `Cargo único MXN: ${quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}`,
    '',
    `Servicios sin precio público para revisar: ${input.scopeNeeds.length ? modules.join(', ') : 'Ninguno'}`,
    `Contexto: ${input.customNeeds || 'Sin comentarios adicionales.'}`,
  ].join('\n')

  function openPdf() {
    const rows = quote.items.map((item) => `<tr><td>${item.label}</td><td>${item.detail || ''}</td><td>${item.frequency === 'monthly' ? 'Mensual' : item.frequency === 'annual' ? 'Anual' : 'Único'}</td><td>${formatMoney(item.amount, item.currency)}</td></tr>`).join('')
    const scope = input.scopeNeeds.map((need) => SCOPE_NEEDS.find((item) => item.value === need)?.label || need).join(', ') || 'Ninguno'
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>Cotización NearTec</title><style>body{font-family:Arial,sans-serif;color:#101410;padding:36px}h1{font-size:32px;margin:0 0 8px}p{color:#4d574d;line-height:1.6}.brand{color:#6d991f;font-weight:800;text-transform:uppercase;letter-spacing:.12em}.box{border:1px solid #d8e6c5;border-radius:18px;padding:18px;margin:18px 0}table{width:100%;border-collapse:collapse;margin-top:14px}td,th{border-bottom:1px solid #e4edd7;text-align:left;padding:12px;font-size:13px}th{background:#f2f8e7}.total{font-size:20px;font-weight:900}.note{font-size:12px;color:#66705f}</style></head><body><div class="brand">NearTec · cotización inicial</div><h1>${input.companyName || 'Empresa'} — propuesta preliminar</h1><p>Documento generado desde el cotizador NearTec. Los precios mostrados son rangos base documentados; la propuesta final depende de alcance, configuración e IVA cuando aplique.</p><div class="box"><b>Contacto:</b> ${input.contactName || 'Pendiente'}<br><b>WhatsApp:</b> ${input.contactPhone || 'Pendiente'}<br><b>Correo:</b> ${input.contactEmail || 'Pendiente'}<br><b>Servicio principal:</b> ${service?.label || 'NearTec'}<br><b>Servicios a revisar:</b> ${scope}</div><table><thead><tr><th>Concepto</th><th>Detalle</th><th>Tipo</th><th>Importe</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Sin partidas con precio público. Requiere cotización manual.</td></tr>'}</tbody></table><div class="box"><p class="total">Recurrente MXN: ${quote.monthlyRecurringLabel || quote.annualRecurringLabel || '—'}</p><p class="total">Recurrente USD: ${quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</p><p class="total">Cargo único MXN: ${quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</p></div><div class="box"><b>Contexto:</b><p>${input.customNeeds || 'Sin comentarios adicionales.'}</p></div><p class="note">NearTec · ${CONTACT.email} · ${CONTACT.phoneDisplay} · ${CONTACT.address}</p><script>window.print()</script></body></html>`
    const win = window.open('', '_blank', 'width=900,height=900')
    if (!win) return
    win.document.write(html)
    win.document.close()
  }

  return (
    <section className="quote quote-v2" id="cotizador">
      <div className="quote-intro">
        <span className="eyebrow">Cotizador inteligente</span>
        <h2>Cotiza lo documentado y filtra lo que requiere propuesta.</h2>
        <p>
          Compunegocio, CN7, soporte, desarrollo, implementación y timbres tienen precios base. Web, hosting, VPS, FTP, correo, emailing y automatización se capturan como requerimiento para propuesta personalizada.
        </p>
      </div>

      <div className="quote-grid">
        <div className="quote-form">
          <div className="step">
            <h3>1. Datos del lead</h3>
            <div className="form-grid">
              <input value={input.companyName} onChange={(e) => update('companyName', e.target.value)} placeholder="Empresa" />
              <input value={input.contactName} onChange={(e) => update('contactName', e.target.value)} placeholder="Nombre" />
              <input value={input.contactPhone} onChange={(e) => update('contactPhone', e.target.value)} placeholder="WhatsApp" />
              <input value={input.contactEmail} onChange={(e) => update('contactEmail', e.target.value)} placeholder="Correo" />
            </div>
          </div>

          <div className="step">
            <h3>2. ¿Qué quieres cotizar primero?</h3>
            <div className="choice-grid">
              {SERVICE_OPTIONS.map((option) => (
                <button key={option.value} type="button" className={input.serviceFocus === option.value ? 'selected' : ''} onClick={() => update('serviceFocus', option.value)}>
                  <b>{option.label}</b>
                  <span>{option.description}</span>
                  <em>{option.priced ? 'Con precio base' : 'Requiere propuesta'}</em>
                </button>
              ))}
            </div>
          </div>

          <div className="step">
            <h3>3. Operación documentada</h3>
            <label>Licencias / estaciones CompuNegocio</label>
            <div className="pill-row">{seatOptions.map((seats) => <button key={seats} type="button" className={input.seats === seats ? 'selected' : ''} onClick={() => update('seats', seats)}>{seats === 12 ? '12+' : seats}</button>)}</div>
            <label>Ciclo</label>
            <div className="pill-row">{(['monthly', 'annual'] as BillingCycle[]).map((cycle) => <button key={cycle} type="button" className={input.billingCycle === cycle ? 'selected' : ''} onClick={() => update('billingCycle', cycle)}>{cycle === 'monthly' ? 'Mensual' : 'Anual'}</button>)}</div>
            <label>CN7 / nube</label>
            <div className="stack-options">
              {([
                ['none', 'Sin CN7 por ahora'],
                ['cn7_backup', 'CN7 servidor + respaldo — $99 USD/mes'],
                ['cn7_hosted', 'CN7 hospedado — $149 USD/mes'],
                ['backup_only', 'Respaldo automático — $99 USD/mes'],
              ] as Array<[CloudPlan, string]>).map(([value, label]) => <button key={value} type="button" className={input.cloudPlan === value ? 'selected' : ''} onClick={() => update('cloudPlan', value)}>{label}</button>)}
            </div>
            <label className="check-row"><input type="checkbox" checked={input.includeImplementation} onChange={(e) => update('includeImplementation', e.target.checked)} /><span>Implementación base — $1,500 MXN</span></label>
            <label>Paquete de timbres CN</label>
            <select value={input.timbresPackage} onChange={(e) => update('timbresPackage', Number(e.target.value))}>{TIMBRES_PACKAGES.map((item) => <option key={item.value} value={item.value}>{item.label}{item.priceMxn ? ` — ${formatMoney(item.priceMxn, 'MXN')}` : ''}</option>)}</select>
            <label>Horas de soporte</label>
            <div className="pill-row">{supportOptions.map((hours) => <button key={hours} type="button" className={input.supportHours === hours ? 'selected' : ''} onClick={() => update('supportHours', hours)}>{hours} h</button>)}</div>
            <label>Horas de desarrollo / ajustes</label>
            <div className="pill-row">{developmentOptions.map((hours) => <button key={hours} type="button" className={input.developmentHours === hours ? 'selected' : ''} onClick={() => update('developmentHours', hours)}>{hours} h</button>)}</div>
          </div>

          <div className="step">
            <h3>4. Servicios NearTec para propuesta</h3>
            <div className="scope-grid">
              {SCOPE_NEEDS.map((need) => (
                <button type="button" key={need.value} className={input.scopeNeeds.includes(need.value) ? 'selected' : ''} onClick={() => toggleScope(need.value)}>
                  <b>{need.label}</b><span>{need.description}</span>
                </button>
              ))}
            </div>
            <textarea value={input.customNeeds} onChange={(e) => update('customNeeds', e.target.value)} placeholder="Ejemplo: tengo 2 sucursales, necesito punto de venta, nube, correo empresarial y rediseñar mi sitio." />
          </div>
        </div>

        <aside className="quote-result">
          <span className={`lead-tag ${lead.tone}`}>{lead.label}</span>
          <h3>Recomendación inicial</h3>
          <p>{lead.note}</p>
          <div className="module-tags">{modules.map((module) => <span key={module}>{module}</span>)}</div>
          <div className="money-grid">
            <div><span>Recurrente MXN</span><b>{quote.monthlyRecurringLabel || quote.annualRecurringLabel || '—'}</b></div>
            <div><span>Recurrente USD</span><b>{quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</b></div>
            <div><span>Cargo único</span><b>{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</b></div>
          </div>
          <div className="base-notes">
            <b>Regla comercial</b>
            <ul>
              <li>Solo se suma al total lo que tiene precio público documentado.</li>
              <li>Servicios web, hosting, VPS, FTP, correo, emailing y automatización se mandan como requerimiento.</li>
              <li>Precios en MXN/USD, no incluyen IVA salvo que se indique lo contrario.</li>
            </ul>
          </div>
          <div className="quote-actions">
            <a className="btn btn-green" href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noreferrer">Enviar a WhatsApp</a>
            <button type="button" className="btn btn-dark" onClick={openPdf}>Descargar PDF</button>
            <a className="btn btn-outline" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Cotización NearTec')}&body=${encodeURIComponent(summary)}`}>Enviar por correo</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
