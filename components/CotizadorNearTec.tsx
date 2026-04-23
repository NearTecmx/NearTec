'use client'

import { useMemo, useState } from 'react'
import {
  calculateNearTecQuote,
  CONTACT,
  formatMoney,
  getLeadQualification,
  getRecommendedModules,
  getTimbresPackageLabel,
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

const simplifiedServices: Array<{ value: ServiceFocus; title: string; copy: string; icon: string }> = [
  { value: 'diseno', title: 'Sitio web', copy: 'Para vender mejor online.', icon: '🌐' },
  { value: 'compunegocio', title: 'CompuNegocio', copy: 'Para caja, inventario y control.', icon: '🧾' },
  { value: 'automatizacion', title: 'Automatización', copy: 'Para responder y dar seguimiento.', icon: '⚙️' },
  { value: 'infraestructura', title: 'Infraestructura', copy: 'Para hosting, correo y continuidad.', icon: '☁️' },
  { value: 'cn7', title: 'CN7 / nube', copy: 'Para respaldo y operación en la nube.', icon: '🛡️' },
  { value: 'personalizado', title: 'Proyecto mixto', copy: 'Para una necesidad especial.', icon: '✨' },
]

const sizeOptions = [
  { seats: 1, label: '1 a 3 usuarios' },
  { seats: 5, label: '4 a 8 usuarios' },
  { seats: 12, label: '9 o más usuarios' },
]

export default function CotizadorNearTec() {
  const [serviceFocus, setServiceFocus] = useState<ServiceFocus>('compunegocio')
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [seats, setSeats] = useState(3)
  const [includeImplementation, setIncludeImplementation] = useState(true)
  const [cloudPlan, setCloudPlan] = useState<CloudPlan>('none')
  const [timbresPackage, setTimbresPackage] = useState(0)
  const [customNeeds, setCustomNeeds] = useState('')

  const input = useMemo(
    () => ({
      serviceFocus,
      seats,
      billingCycle,
      includeImplementation,
      supportHours: 0,
      developmentHours: 0,
      cloudPlan,
      timbresPackage,
      customNeeds,
    }),
    [
      serviceFocus,
      seats,
      billingCycle,
      includeImplementation,
      cloudPlan,
      timbresPackage,
      customNeeds,
    ]
  )

  const quote = useMemo(() => calculateNearTecQuote(input), [input])
  const qualification = useMemo(() => getLeadQualification(input), [input])
  const recommendedModules = useMemo(() => getRecommendedModules(input), [input])
  const service = SERVICE_OPTIONS.find((option) => option.value === serviceFocus)

  const pricingMessage =
    serviceFocus === 'compunegocio' || serviceFocus === 'cn7'
      ? 'Aquí sí tienes una base real de precio.'
      : 'Este servicio se cotiza por alcance. Aquí te dejamos una base clara para hablar con ventas.'

  const recurringLabel = quote.monthlyRecurringLabel ?? quote.annualRecurringLabel
  const economicLabel =
    recurringLabel ?? (quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : 'Se valida por alcance')

  const whatsappMessage = [
    'Hola, quiero cotizar con NearTec.',
    '',
    `Servicio: ${service?.label ?? 'NearTec'}`,
    `Tamaño: ${sizeOptions.find((item) => item.seats === seats)?.label ?? `${seats} usuarios`}`,
    `Ciclo: ${billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
    `Implementación: ${includeImplementation ? 'Sí' : 'No'}`,
    `CN7: ${
      cloudPlan === 'cn7_backup'
        ? 'Con respaldo'
        : cloudPlan === 'cn7_hosted'
          ? 'Hospedado'
          : 'No aplica'
    }`,
    `Timbres: ${getTimbresPackageLabel(timbresPackage)}`,
    `Prioridad: ${qualification.label}`,
    recurringLabel ? `Recurrente: ${recurringLabel}` : '',
    quote.oneTimeMxn > 0 ? `Cargo único: ${formatMoney(quote.oneTimeMxn, 'MXN')}` : '',
    `Módulos sugeridos: ${recommendedModules.join(', ')}`,
    customNeeds ? `Notas: ${customNeeds}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <section className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
      <div className="overflow-hidden rounded-[32px] border border-[#dce8bf] bg-white shadow-[0_28px_70px_rgba(15,17,21,0.08)]">
        <div className="border-b border-[#edf2df] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] px-5 py-5 sm:px-6">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Cotización guiada
          </span>
          <h3 className="mt-3 text-2xl font-black text-[#0f1115] sm:text-[2rem]">
            Elige lo que necesitas y obtén una base clara.
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[#67717a]">
            Esto te ayuda a ubicar la mejor ruta antes de pasar con ventas.
          </p>
        </div>

        <div className="space-y-6 px-5 py-5 sm:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#67717a]">1. ¿Qué quieres cotizar?</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {simplifiedServices.map((option) => (
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
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{option.icon}</span>
                    <div>
                      <p className="text-base font-black text-[#0f1115]">{option.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#67717a]">{option.copy}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[#edf2df] bg-[#f9fbf4] p-4">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#67717a]">2. Tamaño</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {sizeOptions.map((option) => (
                  <button
                    key={option.seats}
                    type="button"
                    onClick={() => setSeats(option.seats)}
                    className={`rounded-[20px] border px-4 py-4 text-sm font-bold ${
                      seats === option.seats
                        ? 'border-[#9ac43b] bg-white text-[#0f1115] shadow-sm'
                        : 'border-[#dce8bf] bg-white text-[#24303a]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#24303a]">Ciclo</p>
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

              <label className="mt-5 flex items-center gap-3 rounded-[20px] border border-[#e6e8ea] bg-white px-4 py-3 text-sm font-semibold text-[#24303a]">
                <input
                  type="checkbox"
                  checked={includeImplementation}
                  onChange={(event) => setIncludeImplementation(event.target.checked)}
                  className="h-4 w-4 accent-[#9ac43b]"
                />
                Agregar implementación base
              </label>
            </div>

            <div className="rounded-[28px] border border-[#edf2df] bg-[#f9fbf4] p-4">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#67717a]">3. Extras</p>

              <div className="mt-4">
                <p className="text-sm font-semibold text-[#24303a]">CN7 / nube</p>
                <div className="mt-3 grid gap-2">
                  {[
                    ['none', 'No por ahora'],
                    ['cn7_backup', 'CN7 con respaldo'],
                    ['cn7_hosted', 'CN7 hospedado'],
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

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#24303a]">Timbres</p>
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

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#24303a]">Comentario rápido</p>
                <textarea
                  value={customNeeds}
                  onChange={(event) => setCustomNeeds(event.target.value.slice(0, 220))}
                  placeholder="Ejemplo: tengo varias sucursales o necesito vender mejor por internet"
                  className="mt-3 min-h-[96px] w-full rounded-[18px] border border-[#dce8bf] bg-white px-4 py-3 text-sm leading-7 text-[#24303a] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[32px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] shadow-[0_28px_70px_rgba(15,17,21,0.1)]">
          <div className="border-b border-[#edf2df] px-5 py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-sm font-black text-[#0f1115]">
                {qualification.label}
              </span>
              <span className="rounded-full bg-[#0f1115] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                {service?.label}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-black text-[#0f1115]">Resumen de tu cotización</h3>
            <p className="mt-2 text-sm leading-7 text-[#67717a]">{pricingMessage}</p>
          </div>

          <div className="space-y-5 px-5 py-5">
            <div className="rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Inversión estimada</p>
              <p className="mt-3 text-3xl font-black text-[#0f1115]">{economicLabel}</p>
              <p className="mt-2 text-sm leading-7 text-[#67717a]">
                {quote.oneTimeMxn > 0 && recurringLabel
                  ? 'Puede incluir cargo único y cargo recurrente.'
                  : 'El asesor valida el alcance final contigo.'}
              </p>
            </div>

            <div className="rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Qué te recomendamos</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {recommendedModules.map((module) => (
                  <span
                    key={module}
                    className="rounded-full border border-[#dce8bf] bg-[#f7faef] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0f1115]"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Siguiente paso</p>
              <p className="mt-3 text-sm leading-7 text-[#24303a]">{qualification.nextStep}</p>
            </div>

            <div className="rounded-[28px] border border-[#0f1115] bg-[#0f1115] p-4 text-white shadow-[0_18px_38px_rgba(15,17,21,0.2)]">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Contacto</p>
              <h4 className="mt-3 text-xl font-black">Envía esta cotización a ventas.</h4>
              <p className="mt-2 text-sm leading-7 text-white/78">
                Así la conversación llega más clara y más rápido.
              </p>
              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsApp(whatsappMessage)}
                  className="rounded-full bg-[#9ac43b] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#0f1115] transition hover:translate-y-[-1px]"
                >
                  Enviar a WhatsApp
                </button>
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Cotización NearTec')}&body=${encodeURIComponent(whatsappMessage)}`}
                  className="rounded-full border border-white/14 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/5"
                >
                  Enviar por correo
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}