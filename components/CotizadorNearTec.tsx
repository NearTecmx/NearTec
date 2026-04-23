'use client'

import { useMemo, useState } from 'react'
import {
  calculateNearTecQuote,
  CONTACT,
  formatMoney,
  getLeadQualification,
  getRecommendedModules,
  getTimbresPackageLabel,
  QUOTE_BASE_NOTES,
  SERVICE_OPTIONS,
  TIMBRES_PACKAGES,
  type BillingCycle,
  type CloudPlan,
  type ServiceFocus,
} from '@/lib/neartec-pricing'

function openWhatsApp(message: string) {
  const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

const seatOptions = [1, 3, 5, 8, 12]
const supportOptions = [0, 1, 2, 4]
const developmentOptions = [0, 2, 4, 8]

function toneClasses(tone: 'hot' | 'warm' | 'cool') {
  if (tone === 'hot') return 'border-[#dce8bf] bg-[#eef7d7] text-[#0f1115]'
  if (tone === 'warm') return 'border-[#dfe5d7] bg-[#f6f8f4] text-[#0f1115]'
  return 'border-[#e6e8ea] bg-white text-[#24303a]'
}

export default function CotizadorNearTec() {
  const [serviceFocus, setServiceFocus] = useState<ServiceFocus>('compunegocio')
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [seats, setSeats] = useState(3)
  const [includeImplementation, setIncludeImplementation] = useState(true)
  const [supportHours, setSupportHours] = useState(0)
  const [developmentHours, setDevelopmentHours] = useState(0)
  const [cloudPlan, setCloudPlan] = useState<CloudPlan>('none')
  const [timbresPackage, setTimbresPackage] = useState(0)
  const [customNeeds, setCustomNeeds] = useState('')

  const input = {
    serviceFocus,
    seats,
    billingCycle,
    includeImplementation,
    supportHours,
    developmentHours,
    cloudPlan,
    timbresPackage,
    customNeeds,
  }

  const quote = useMemo(() => calculateNearTecQuote(input), [input])
  const qualification = useMemo(() => getLeadQualification(input), [input])
  const recommendedModules = useMemo(() => getRecommendedModules(input), [input])

  const service = SERVICE_OPTIONS.find((option) => option.value === serviceFocus)
  const timeline = qualification.implementationWindow
  const nextStep =
    qualification.tone === 'hot'
      ? 'Pasa a propuesta guiada.'
      : qualification.tone === 'warm'
        ? 'Pasa a demo y validación.'
        : 'Revisa stack y resuelve dudas.'

  const whatsappMessage = [
    'Hola, quiero continuar con una propuesta guiada de NearTec.',
    '',
    `Servicio: ${service?.label ?? 'NearTec'}`,
    `Licencias/estaciones: ${seats}`,
    `Ciclo: ${billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
    `Implementación: ${includeImplementation ? 'Sí' : 'No'}`,
    `Plan CN7: ${
      cloudPlan === 'cn7_backup'
        ? 'CN7 con respaldo'
        : cloudPlan === 'cn7_hosted'
          ? 'CN7 hospedado'
          : 'Sin CN7'
    }`,
    `Timbres: ${getTimbresPackageLabel(timbresPackage)}`,
    `Soporte: ${supportHours} hora(s)` ,
    `Desarrollo: ${developmentHours} hora(s)`,
    `Prioridad: ${qualification.label}`,
    '',
    `Recurrente MXN: ${quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? 'Sin cargo recurrente MXN'}`,
    `Recurrente USD: ${quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : 'Sin cargo USD'}`,
    `Cargo único: ${quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : 'Sin cargo único'}`,
    '',
    `Stack sugerido: ${recommendedModules.join(', ')}`,
    customNeeds ? `Detalle adicional: ${customNeeds}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="overflow-hidden rounded-[32px] border border-[#dce8bf] bg-white shadow-[0_28px_70px_rgba(15,17,21,0.08)]">
        <div className="border-b border-[#edf2df] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] px-5 py-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
                Cotizador inteligente
              </span>
              <h3 className="mt-3 text-2xl font-black text-[#0f1115] sm:text-[2rem]">
                Cotiza fácil y avanza más rápido.
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#67717a]">
                Elige lo que necesitas y recibe una base clara para seguir por WhatsApp o correo.
              </p>
            </div>
            <div className={`rounded-full border px-4 py-2 text-sm font-black ${toneClasses(qualification.tone)}`}>
              {qualification.label}
            </div>
          </div>
        </div>

        <div className="space-y-6 px-5 py-5 sm:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#67717a]">1. Elige tu servicio</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {SERVICE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setServiceFocus(option.value)}
                  className={`rounded-[24px] border p-4 text-left transition ${
                    serviceFocus === option.value
                      ? 'border-[#9ac43b] bg-[#f7faef] shadow-[0_14px_30px_rgba(15,17,21,0.08)]'
                      : 'border-[#e6e8ea] bg-white hover:border-[#dce8bf]'
                  }`}
                >
                  <p className="text-base font-black text-[#0f1115]">{option.label}</p>
                  <p className="mt-2 text-sm leading-7 text-[#67717a]">{option.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[#edf2df] bg-[#f9fbf4] p-4">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#67717a]">2. Tamaño y plan</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-[#24303a]">Número de licencias / estaciones</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {seatOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSeats(option)}
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        seats === option
                          ? 'bg-[#0f1115] text-white'
                          : 'border border-[#dce8bf] bg-white text-[#24303a]'
                      }`}
                    >
                      {option} {option === 12 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#24303a]">Ciclo de pago</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    ['monthly', 'Mensual'],
                    ['annual', 'Anual'],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setBillingCycle(value as BillingCycle)}
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        billingCycle === value
                          ? 'bg-[#0f1115] text-white'
                          : 'border border-[#dce8bf] bg-white text-[#24303a]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#24303a]">CN7 / nube</p>
                <div className="mt-3 grid gap-2">
                  {[
                    ['none', 'Sin CN7 por ahora'],
                    ['cn7_backup', 'CN7 con respaldo — $99 USD/mes'],
                    ['cn7_hosted', 'CN7 hospedado — $149 USD/mes'],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setCloudPlan(value as CloudPlan)}
                      className={`rounded-[18px] border px-4 py-3 text-left text-sm font-semibold transition ${
                        cloudPlan === value
                          ? 'border-[#9ac43b] bg-white shadow-sm'
                          : 'border-[#e6e8ea] bg-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#edf2df] bg-[#f9fbf4] p-4">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#67717a]">3. Extras</p>

              <label className="mt-4 flex items-center gap-3 rounded-[20px] border border-[#e6e8ea] bg-white px-4 py-3 text-sm font-semibold text-[#24303a]">
                <input
                  type="checkbox"
                  checked={includeImplementation}
                  onChange={(event) => setIncludeImplementation(event.target.checked)}
                  className="h-4 w-4 accent-[#9ac43b]"
                />
                Incluir implementación base — $1,500 MXN
              </label>

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#24303a]">Paquete de timbres</p>
                <select
                  value={timbresPackage}
                  onChange={(event) => setTimbresPackage(Number(event.target.value))}
                  className="mt-3 w-full rounded-[18px] border border-[#dce8bf] bg-white px-4 py-3 text-sm font-medium text-[#24303a] outline-none"
                >
                  {TIMBRES_PACKAGES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label} {item.priceMxn > 0 ? `— ${formatMoney(item.priceMxn, 'MXN')}` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-[#24303a]">Horas de soporte</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {supportOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSupportHours(option)}
                        className={`rounded-full px-4 py-2 text-sm font-bold ${
                          supportHours === option
                            ? 'bg-[#0f1115] text-white'
                            : 'border border-[#dce8bf] bg-white text-[#24303a]'
                        }`}
                      >
                        {option} h
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#24303a]">Horas de desarrollo</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {developmentOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setDevelopmentHours(option)}
                        className={`rounded-full px-4 py-2 text-sm font-bold ${
                          developmentHours === option
                            ? 'bg-[#0f1115] text-white'
                            : 'border border-[#dce8bf] bg-white text-[#24303a]'
                        }`}
                      >
                        {option} h
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#24303a]">Detalle opcional</p>
                <textarea
                  value={customNeeds}
                  onChange={(event) => setCustomNeeds(event.target.value.slice(0, 400))}
                  placeholder="Ejemplo: tenemos varias sucursales y queremos nube + soporte."
                  className="mt-3 min-h-[112px] w-full rounded-[18px] border border-[#dce8bf] bg-white px-4 py-3 text-sm leading-7 text-[#24303a] outline-none"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e7edd8] bg-[#0f1115] p-5 text-white shadow-[0_20px_40px_rgba(15,17,21,0.18)]">
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Base del cálculo</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-white/78">
                  {QUOTE_BASE_NOTES.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9ac43b]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Resumen rápido</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[18px] border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-white/55">Recurrente MXN</p>
                    <p className="mt-2 text-lg font-black">{quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? '—'}</p>
                  </div>
                  <div className="rounded-[18px] border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-white/55">Recurrente USD</p>
                    <p className="mt-2 text-lg font-black">{quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</p>
                  </div>
                  <div className="rounded-[18px] border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-white/55">Cargo único</p>
                    <p className="mt-2 text-lg font-black">{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[32px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] shadow-[0_28px_70px_rgba(15,17,21,0.1)]">
          <div className="border-b border-[#edf2df] px-5 py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className={`rounded-full border px-4 py-2 text-sm font-black ${toneClasses(qualification.tone)}`}>
                {qualification.label}
              </span>
              <span className="rounded-full bg-[#0f1115] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                {service?.label}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-black text-[#0f1115]">Tu stack sugerido</h3>
            <p className="mt-2 text-sm leading-7 text-[#67717a]">{qualification.note}</p>
          </div>

          <div className="space-y-5 px-5 py-5">
            <div className="rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Módulos sugeridos</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {recommendedModules.map((module) => (
                  <span key={module} className="rounded-full border border-[#dce8bf] bg-[#f7faef] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0f1115]">
                    {module}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Siguiente paso</p>
              <p className="mt-3 text-sm leading-7 text-[#24303a]">{nextStep}</p>
              <p className="mt-2 text-sm font-semibold text-[#0f1115]">{timeline}</p>
            </div>

            <div className="rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Resumen económico</p>
              <div className="mt-3 space-y-3 text-sm text-[#24303a]">
                <div className="flex items-center justify-between gap-3">
                  <span>Recurrente MXN</span>
                  <strong className="text-[#0f1115]">{quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? '—'}</strong>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Recurrente USD</span>
                  <strong className="text-[#0f1115]">{quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</strong>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Cargo único</span>
                  <strong className="text-[#0f1115]">{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</strong>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#0f1115] bg-[#0f1115] p-4 text-white shadow-[0_18px_38px_rgba(15,17,21,0.2)]">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Conversión</p>
              <h4 className="mt-3 text-xl font-black">Lleva esta cotización directo a ventas.</h4>
              <p className="mt-2 text-sm leading-7 text-white/78">
                Tu resumen ya lleva servicio, prioridad y costo base.
              </p>
              <div className="mt-4 grid gap-3">
                <button type="button" onClick={() => openWhatsApp(whatsappMessage)} className="rounded-full bg-[#9ac43b] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#0f1115] transition hover:translate-y-[-1px]">
                  WhatsApp
                </button>
                <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Diagnóstico NearTec')}&body=${encodeURIComponent(whatsappMessage)}`} className="rounded-full border border-white/14 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/5">
                  Correo
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
