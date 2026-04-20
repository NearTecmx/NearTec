'use client'

import { useMemo, useState } from 'react'
import {
  calculateNearTecQuote,
  CONTACT,
  formatMoney,
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

  const quote = useMemo(
    () =>
      calculateNearTecQuote({
        serviceFocus,
        seats,
        billingCycle,
        includeImplementation,
        supportHours,
        developmentHours,
        cloudPlan,
        timbresPackage,
        customNeeds,
      }),
    [
      serviceFocus,
      seats,
      billingCycle,
      includeImplementation,
      supportHours,
      developmentHours,
      cloudPlan,
      timbresPackage,
      customNeeds,
    ],
  )

  const serviceLabel =
    SERVICE_OPTIONS.find((option) => option.value === serviceFocus)?.label ??
    'Requerimiento NearTec'

  const whatsappMessage = useMemo(() => {
    const lines = [
      'Hola, quiero cotizar con NearTec.',
      '',
      `Servicio: ${serviceLabel}`,
      `Licencias/estaciones: ${seats}`,
      `Ciclo: ${billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
      `Implementación inicial: ${includeImplementation ? 'Sí' : 'No'}`,
      `Horas de soporte: ${supportHours}`,
      `Horas de desarrollo: ${developmentHours}`,
      `Plan CN7: ${
        cloudPlan === 'cn7_backup'
          ? 'CN7 con respaldo en nube'
          : cloudPlan === 'cn7_hosted'
            ? 'CN7 hospedado en nube'
            : 'Sin CN7'
      }`,
      `Timbres: ${
        TIMBRES_PACKAGES.find((item) => item.value === timbresPackage)?.label ??
        'Sin timbres'
      }`,
      '',
      `Recurrente MXN: ${
        quote.monthlyRecurringLabel ??
        quote.annualRecurringLabel ??
        'Sin cargo recurrente en MXN'
      }`,
      `Recurrente USD mensual: ${
        quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : 'Sin cargo en USD'
      }`,
      `Cargo único MXN: ${
        quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : 'Sin cargo único'
      }`,
    ]

    if (customNeeds.trim()) {
      lines.push('', `Detalle adicional: ${customNeeds.trim()}`)
    }

    lines.push('', 'Quiero seguimiento con un asesor.')
    return lines.join('\n')
  }, [
    billingCycle,
    cloudPlan,
    customNeeds,
    developmentHours,
    includeImplementation,
    quote.annualRecurringLabel,
    quote.monthlyRecurringLabel,
    quote.monthlyUsd,
    quote.oneTimeMxn,
    seats,
    serviceLabel,
    supportHours,
    timbresPackage,
  ])

  return (
    <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
      <div className="rounded-[32px] border border-[var(--brand-line)] bg-white p-5 shadow-[var(--brand-shadow)] md:p-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-[var(--brand-green-soft)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-ink)]">
            Cotizador
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--brand-ink)] md:text-4xl">
            Cotiza tu solución en minutos.
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">
            Selecciona el servicio, ajusta las variables y envía el resumen directo para
            seguimiento.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
              Servicio
            </span>
            <select
              value={serviceFocus}
              onChange={(event) => setServiceFocus(event.target.value as ServiceFocus)}
              className="w-full rounded-2xl border border-[var(--brand-line)] bg-white px-4 py-3 text-sm text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-green-strong)]"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
              Estaciones / licencias
            </span>
            <input
              type="number"
              min={0}
              value={seats}
              onChange={(event) => setSeats(Number(event.target.value) || 0)}
              className="w-full rounded-2xl border border-[var(--brand-line)] bg-white px-4 py-3 text-sm text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-green-strong)]"
            />
          </label>

          <div className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
              Ciclo
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
                  billingCycle === 'monthly'
                    ? 'border-[var(--brand-green-strong)] bg-[var(--brand-green-soft)] text-[var(--brand-ink)]'
                    : 'border-[var(--brand-line)] bg-white text-[var(--brand-muted)]'
                }`}
              >
                Mensual
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
                  billingCycle === 'annual'
                    ? 'border-[var(--brand-green-strong)] bg-[var(--brand-green-soft)] text-[var(--brand-ink)]'
                    : 'border-[var(--brand-line)] bg-white text-[var(--brand-muted)]'
                }`}
              >
                Anual
              </button>
            </div>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
              Plan CN7 / nube
            </span>
            <select
              value={cloudPlan}
              onChange={(event) => setCloudPlan(event.target.value as CloudPlan)}
              className="w-full rounded-2xl border border-[var(--brand-line)] bg-white px-4 py-3 text-sm text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-green-strong)]"
            >
              <option value="none">Sin CN7</option>
              <option value="cn7_backup">CN7 con respaldo en nube</option>
              <option value="cn7_hosted">CN7 hospedado en nube</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
              Horas de soporte
            </span>
            <input
              type="number"
              min={0}
              value={supportHours}
              onChange={(event) => setSupportHours(Number(event.target.value) || 0)}
              className="w-full rounded-2xl border border-[var(--brand-line)] bg-white px-4 py-3 text-sm text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-green-strong)]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
              Horas de desarrollo
            </span>
            <input
              type="number"
              min={0}
              value={developmentHours}
              onChange={(event) => setDevelopmentHours(Number(event.target.value) || 0)}
              className="w-full rounded-2xl border border-[var(--brand-line)] bg-white px-4 py-3 text-sm text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-green-strong)]"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
              Paquete de timbres
            </span>
            <select
              value={timbresPackage}
              onChange={(event) => setTimbresPackage(Number(event.target.value) || 0)}
              className="w-full rounded-2xl border border-[var(--brand-line)] bg-white px-4 py-3 text-sm text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-green-strong)]"
            >
              {TIMBRES_PACKAGES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="mt-5 flex items-start gap-3 rounded-[24px] border border-[rgba(155,197,61,0.22)] bg-[var(--brand-green-soft)] p-4 text-sm text-[var(--brand-ink)]">
          <input
            type="checkbox"
            checked={includeImplementation}
            onChange={(event) => setIncludeImplementation(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-[var(--brand-line)]"
          />
          <span>Agregar implementación inicial.</span>
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-bold text-[var(--brand-ink)]">
            Detalle del proyecto
          </span>
          <textarea
            value={customNeeds}
            onChange={(event) => setCustomNeeds(event.target.value)}
            rows={5}
            placeholder="Describe tu necesidad..."
            className="w-full rounded-[24px] border border-[var(--brand-line)] bg-white px-4 py-3 text-sm leading-6 text-[var(--brand-ink)] outline-none transition placeholder:text-[#97a59b] focus:border-[var(--brand-green-strong)]"
          />
        </label>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-[32px] border border-[var(--brand-line)] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbec_100%)] p-5 shadow-[var(--brand-shadow)] md:p-8">
          <div className="rounded-[28px] bg-white p-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-muted)]">
              Resumen
            </p>

            <h3 className="mt-3 text-2xl font-black text-[var(--brand-ink)]">
              Estimado inicial
            </h3>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--brand-line)] bg-white p-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                Recurrente MXN
              </p>
              <p className="mt-3 text-3xl font-black text-[var(--brand-ink)]">
                {quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? '—'}
              </p>
              <p className="mt-2 text-sm text-[var(--brand-muted)]">
                {billingCycle === 'monthly' ? 'Mensual' : 'Anual'}
              </p>
            </div>

            <div className="rounded-[24px] border border-[var(--brand-line)] bg-white p-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                Recurrente USD
              </p>
              <p className="mt-3 text-3xl font-black text-[var(--brand-ink)]">
                {quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}
              </p>
              <p className="mt-2 text-sm text-[var(--brand-muted)]">Mensual</p>
            </div>

            <div className="rounded-[24px] border border-[var(--brand-line)] bg-white p-5 sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                Cargo único MXN
              </p>
              <p className="mt-3 text-3xl font-black text-[var(--brand-ink)]">
                {quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-[28px] border border-[var(--brand-line)] bg-white p-5">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
              Desglose
            </h4>

            {quote.items.length === 0 ? (
              <p className="mt-4 text-sm leading-6 text-[var(--brand-muted)]">
                Ajusta los campos para generar el estimado.
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {quote.items.map((item) => (
                  <div
                    key={`${item.label}-${item.frequency}-${item.currency}-${item.amount}-${item.detail ?? ''}`}
                    className="rounded-2xl border border-[var(--brand-line)] px-4 py-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-[var(--brand-ink)]">{item.label}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                          {item.frequency === 'monthly'
                            ? 'Mensual'
                            : item.frequency === 'annual'
                              ? 'Anual'
                              : 'Pago único'}
                          {item.detail ? ` · ${item.detail}` : ''}
                        </p>
                      </div>

                      <p className="text-sm font-black text-[var(--brand-ink)]">
                        {formatMoney(item.amount, item.currency)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-5 rounded-[28px] border border-[var(--brand-line)] bg-white p-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => openWhatsApp(whatsappMessage)}
                className="btn-primary w-full"
              >
                Enviar a WhatsApp
              </button>

              <a
                href={CONTACT.phoneHref}
                className="btn-secondary w-full"
              >
                Llamar al asesor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}