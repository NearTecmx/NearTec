'use client'

import { useMemo, useState } from 'react'
import { CONTACT, SERVICE_OPTIONS, TIMBRES_PACKAGES, calculateNearTecQuote, formatMoney, getLeadQualification, getRecommendedModules, type BillingCycle, type CloudPlan, type NearTecQuoteInput } from '@/lib/neartec-pricing'

const defaultInput: NearTecQuoteInput = { serviceFocus: 'compunegocio', seats: 3, billingCycle: 'monthly', includeImplementation: true, supportHours: 0, developmentHours: 0, cloudPlan: 'none', timbresPackage: 0, customNeeds: '' }
const seatOptions = [1, 3, 5, 8, 12]
const supportOptions = [0, 1, 2, 4]
const developmentOptions = [0, 2, 4, 8]

export default function CotizadorNearTec() {
  const [input, setInput] = useState<NearTecQuoteInput>(defaultInput)
  const quote = useMemo(() => calculateNearTecQuote(input), [input])
  const modules = useMemo(() => getRecommendedModules(input), [input])
  const lead = useMemo(() => getLeadQualification(input), [input])
  const service = SERVICE_OPTIONS.find((item) => item.value === input.serviceFocus)
  const timbres = TIMBRES_PACKAGES.find((item) => item.value === input.timbresPackage)

  function update<K extends keyof NearTecQuoteInput>(key: K, value: NearTecQuoteInput[K]) { setInput((current) => ({ ...current, [key]: value })) }

  const summary = [
    'Hola, quiero una propuesta de NearTec.', '',
    `Servicio: ${service?.label || 'Servicio NearTec'}`,
    `Licencias/estaciones: ${input.seats}`,
    `Ciclo: ${input.billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
    `CN7/nube: ${input.cloudPlan === 'cn7_backup' ? 'CN7 con respaldo' : input.cloudPlan === 'cn7_hosted' ? 'CN7 hospedado' : 'Sin CN7 por ahora'}`,
    `Implementación: ${input.includeImplementation ? 'Sí' : 'No'}`,
    `Timbres: ${timbres?.label || 'Sin timbres'}`,
    `Soporte: ${input.supportHours} h`, `Desarrollo: ${input.developmentHours} h`,
    `Recurrente MXN: ${quote.monthlyRecurringLabel || quote.annualRecurringLabel || '—'}`,
    `Recurrente USD: ${quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}`,
    `Cargo único: ${quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}`,
    '', `Contexto: ${input.customNeeds || 'Sin comentarios adicionales.'}`,
  ].join('\n')

  return (
    <section className="quote" id="cotizador">
      <div className="quote-intro"><span className="eyebrow">Cotizador</span><h2>Cotiza rápido. Avanza con claridad.</h2><p>Elige tu necesidad, revisa rangos base y manda el resumen por WhatsApp.</p></div>
      <div className="quote-grid">
        <div className="quote-form">
          <div className="step"><h3>1. ¿Qué necesitas?</h3><div className="choice-grid">{SERVICE_OPTIONS.map((option) => <button key={option.value} type="button" className={input.serviceFocus === option.value ? 'selected' : ''} onClick={() => update('serviceFocus', option.value)}><b>{option.label}</b><span>{option.description}</span></button>)}</div></div>
          <div className="step"><h3>2. Tamaño</h3><label>Licencias / estaciones</label><div className="pill-row">{seatOptions.map((seats) => <button key={seats} type="button" className={input.seats === seats ? 'selected' : ''} onClick={() => update('seats', seats)}>{seats === 12 ? '12+' : seats}</button>)}</div><label>Ciclo</label><div className="pill-row">{(['monthly', 'annual'] as BillingCycle[]).map((cycle) => <button key={cycle} type="button" className={input.billingCycle === cycle ? 'selected' : ''} onClick={() => update('billingCycle', cycle)}>{cycle === 'monthly' ? 'Mensual' : 'Anual'}</button>)}</div></div>
          <div className="step"><h3>3. Nube y extras</h3><label>CN7 / nube</label><div className="stack-options">{([['none', 'Sin CN7 por ahora'], ['cn7_backup', 'CN7 con respaldo — $99 USD/mes'], ['cn7_hosted', 'CN7 hospedado — $149 USD/mes']] as Array<[CloudPlan, string]>).map(([value, label]) => <button key={value} type="button" className={input.cloudPlan === value ? 'selected' : ''} onClick={() => update('cloudPlan', value)}>{label}</button>)}</div><label className="check-row"><input type="checkbox" checked={input.includeImplementation} onChange={(e) => update('includeImplementation', e.target.checked)} /><span>Implementación base — $1,500 MXN</span></label><label>Timbres</label><select value={input.timbresPackage} onChange={(e) => update('timbresPackage', Number(e.target.value))}>{TIMBRES_PACKAGES.map((item) => <option key={item.value} value={item.value}>{item.label}{item.priceMxn ? ` — ${formatMoney(item.priceMxn, 'MXN')}` : ''}</option>)}</select><label>Soporte</label><div className="pill-row">{supportOptions.map((hours) => <button key={hours} type="button" className={input.supportHours === hours ? 'selected' : ''} onClick={() => update('supportHours', hours)}>{hours} h</button>)}</div><label>Desarrollo</label><div className="pill-row">{developmentOptions.map((hours) => <button key={hours} type="button" className={input.developmentHours === hours ? 'selected' : ''} onClick={() => update('developmentHours', hours)}>{hours} h</button>)}</div><textarea value={input.customNeeds} onChange={(e) => update('customNeeds', e.target.value)} placeholder="Ejemplo: tengo 3 sucursales y necesito punto de venta con nube." /></div>
        </div>
        <aside className="quote-result"><span className={`lead-tag ${lead.tone}`}>{lead.label}</span><h3>Tu recomendación inicial</h3><p>{lead.note}</p><div className="module-tags">{modules.map((module) => <span key={module}>{module}</span>)}</div><div className="money-grid"><div><span>Recurrente MXN</span><b>{quote.monthlyRecurringLabel || quote.annualRecurringLabel || '—'}</b></div><div><span>Recurrente USD</span><b>{quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</b></div><div><span>Cargo único</span><b>{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</b></div></div><div className="base-notes"><b>Rangos base</b><ul><li>CompuNegocio desde $450 MXN/mes.</li><li>Implementación desde $1,500 MXN.</li><li>Soporte $499/h y desarrollo $999/h.</li><li>CN7 desde $99 USD/mes.</li><li>Timbres desde 365 por $730 MXN.</li></ul></div><div className="quote-actions"><a className="btn btn-green" href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noreferrer">WhatsApp</a><a className="btn btn-dark" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Cotización NearTec')}&body=${encodeURIComponent(summary)}`}>Enviar resumen</a></div></aside>
      </div>
    </section>
  )
}
