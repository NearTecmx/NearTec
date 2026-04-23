'use client'

import { useMemo, useState } from 'react'
import {
  CONTACT,
  SERVICE_OPTIONS,
  TIMBRES_PACKAGES,
  calculateNearTecQuote,
  formatMoney,
  getLeadQualification,
  getRecommendedModules,
  type BillingCycle,
  type CloudPlan,
  type NearTecQuoteInput,
  type ServiceFocus,
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
  customNeeds: '',
}

const seatOptions = [1, 3, 5, 8, 12]
const supportOptions = [0, 1, 2, 4]
const developmentOptions = [0, 2, 4, 8]

function serviceLabel(value: ServiceFocus) {
  return SERVICE_OPTIONS.find((item) => item.value === value)?.label ?? 'Servicio NearTec'
}

export default function CotizadorNearTec() {
  const [input, setInput] = useState<NearTecQuoteInput>(defaultInput)
  const quote = useMemo(() => calculateNearTecQuote(input), [input])
  const modules = useMemo(() => getRecommendedModules(input), [input])
  const lead = useMemo(() => getLeadQualification(input), [input])

  function update<K extends keyof NearTecQuoteInput>(key: K, value: NearTecQuoteInput[K]) {
    setInput((current) => ({ ...current, [key]: value }))
  }

  const whatsappText = useMemo(() => {
    return [
      'Hola, quiero una propuesta de NearTec.',
      '',
      `Servicio: ${serviceLabel(input.serviceFocus)}`,
      `Licencias/estaciones: ${input.seats}`,
      `Ciclo: ${input.billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
      `Nube: ${input.cloudPlan === 'cn7_backup' ? 'CN7 con respaldo' : input.cloudPlan === 'cn7_hosted' ? 'CN7 hospedado' : 'Sin CN7 por ahora'}`,
      `Implementación: ${input.includeImplementation ? 'Sí' : 'No'}`,
      `Timbres: ${TIMBRES_PACKAGES.find((item) => item.value === input.timbresPackage)?.label ?? 'Sin paquete'}`,
      `Soporte: ${input.supportHours} h`,
      `Desarrollo: ${input.developmentHours} h`,
      `Recurrente MXN: ${quote.monthlyRecurringLabel || quote.annualRecurringLabel || '—'}`,
      `Recurrente USD: ${quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}`,
      `Cargo único: ${quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}`,
      '',
      `Contexto: ${input.customNeeds || 'Sin comentarios adicionales.'}`,
    ].join('\n')
  }, [input, quote])

  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`

  return (
    <section className="ntx-quote" id="cotizador">
      <div className="ntx-quote__intro">
        <span className="ntx-badge">Cotizador</span>
        <h2>Cotiza rápido y llega a la propuesta correcta.</h2>
        <p>Elige lo que necesitas, revisa rangos base y envía el resumen por WhatsApp.</p>
      </div>

      <div className="ntx-quote__grid">
        <div className="ntx-quote__form">
          <div className="ntx-quote-step">
            <h3>1. ¿Qué necesitas?</h3>
            <div className="ntx-choice-grid">
              {SERVICE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`ntx-choice ${input.serviceFocus === option.value ? 'is-selected' : ''}`}
                  onClick={() => update('serviceFocus', option.value)}
                >
                  <strong>{option.label}</strong>
                  <span>{option.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ntx-quote-step">
            <h3>2. Tamaño y ciclo</h3>
            <label>Número de licencias / estaciones</label>
            <div className="ntx-pill-row">
              {seatOptions.map((seats) => (
                <button key={seats} type="button" className={input.seats === seats ? 'is-selected' : ''} onClick={() => update('seats', seats)}>
                  {seats === 12 ? '12+' : seats}
                </button>
              ))}
            </div>

            <label>Ciclo de pago</label>
            <div className="ntx-pill-row">
              {(['monthly', 'annual'] as BillingCycle[]).map((cycle) => (
                <button key={cycle} type="button" className={input.billingCycle === cycle ? 'is-selected' : ''} onClick={() => update('billingCycle', cycle)}>
                  {cycle === 'monthly' ? 'Mensual' : 'Anual'}
                </button>
              ))}
            </div>

            <label>CN7 / nube</label>
            <div className="ntx-stack-options">
              {([
                ['none', 'Sin CN7 por ahora'],
                ['cn7_backup', 'CN7 con respaldo — $99 USD/mes'],
                ['cn7_hosted', 'CN7 hospedado — $149 USD/mes'],
              ] as Array<[CloudPlan, string]>).map(([value, label]) => (
                <button key={value} type="button" className={input.cloudPlan === value ? 'is-selected' : ''} onClick={() => update('cloudPlan', value)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="ntx-quote-step">
            <h3>3. Extras</h3>
            <label className="ntx-check-row">
              <input type="checkbox" checked={input.includeImplementation} onChange={(event) => update('includeImplementation', event.target.checked)} />
              <span>Implementación base — $1,500 MXN</span>
            </label>

            <label>Paquete de timbres</label>
            <select value={input.timbresPackage} onChange={(event) => update('timbresPackage', Number(event.target.value))}>
              {TIMBRES_PACKAGES.map((item) => <option key={item.value} value={item.value}>{item.label}{item.priceMxn ? ` — ${formatMoney(item.priceMxn, 'MXN')}` : ''}</option>)}
            </select>

            <label>Soporte</label>
            <div className="ntx-pill-row">
              {supportOptions.map((hours) => <button key={hours} type="button" className={input.supportHours === hours ? 'is-selected' : ''} onClick={() => update('supportHours', hours)}>{hours} h</button>)}
            </div>

            <label>Desarrollo / ajustes</label>
            <div className="ntx-pill-row">
              {developmentOptions.map((hours) => <button key={hours} type="button" className={input.developmentHours === hours ? 'is-selected' : ''} onClick={() => update('developmentHours', hours)}>{hours} h</button>)}
            </div>

            <label>Contexto rápido</label>
            <textarea value={input.customNeeds} onChange={(event) => update('customNeeds', event.target.value)} placeholder="Ejemplo: tenemos 3 sucursales, necesitamos punto de venta, nube y soporte." />
          </div>
        </div>

        <aside className="ntx-quote__result">
          <span className={`ntx-lead-tag ntx-lead-tag--${lead.tone}`}>{lead.label}</span>
          <h3>Tu recomendación inicial</h3>
          <p>{lead.note}</p>

          <div className="ntx-module-tags">
            {modules.map((module) => <span key={module}>{module}</span>)}
          </div>

          <div className="ntx-money-card">
            <div><span>Recurrente MXN</span><strong>{quote.monthlyRecurringLabel || quote.annualRecurringLabel || '—'}</strong></div>
            <div><span>Recurrente USD</span><strong>{quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</strong></div>
            <div><span>Cargo único</span><strong>{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</strong></div>
          </div>

          <div className="ntx-base-notes">
            <strong>Rangos base</strong>
            <ul>
              <li>CompuNegocio desde $450 MXN/mes por estación.</li>
              <li>Implementación desde $1,500 MXN.</li>
              <li>Soporte $499 MXN/h y desarrollo $999 MXN/h.</li>
              <li>CN7 desde $99 USD/mes.</li>
              <li>Timbres desde 365 por $730 MXN.</li>
            </ul>
          </div>

          <div className="ntx-quote__actions">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="ntx-btn ntx-btn--green">Recibir por WhatsApp</a>
            <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Cotización NearTec')}&body=${encodeURIComponent(whatsappText)}`} className="ntx-btn ntx-btn--ghost">Enviar resumen</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
