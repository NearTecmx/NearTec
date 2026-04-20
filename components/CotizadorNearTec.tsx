'use client'

import { useMemo, useState } from 'react'
import {
  calculateNearTecQuote,
  CONTACT,
  CN7_BACKUP_MONTHLY_USD,
  CN7_HOSTED_MONTHLY_USD,
  DEVELOPMENT_HOURLY_PRICE_MXN,
  formatMoney,
  IMPLEMENTATION_PRICE_MXN,
  SERVICE_OPTIONS,
  SUPPORT_HOURLY_PRICE_MXN,
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
      lines.push('', `Detalle: ${customNeeds.trim()}`)
    }

    lines.push('', 'Quiero continuar con un asesor.')
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
    <div className="nt-quote">
      <div className="nt-quote__snapshots">
        <div className="nt-quote__snapshot">
          <span>Licencias</span>
          <strong>$450 / $400 / $350 MXN</strong>
        </div>

        <div className="nt-quote__snapshot">
          <span>Implementación</span>
          <strong>{formatMoney(IMPLEMENTATION_PRICE_MXN, 'MXN')}</strong>
        </div>

        <div className="nt-quote__snapshot">
          <span>Soporte</span>
          <strong>{formatMoney(SUPPORT_HOURLY_PRICE_MXN, 'MXN')}/h</strong>
        </div>

        <div className="nt-quote__snapshot">
          <span>Desarrollo</span>
          <strong>{formatMoney(DEVELOPMENT_HOURLY_PRICE_MXN, 'MXN')}/h</strong>
        </div>

        <div className="nt-quote__snapshot">
          <span>CN7 Backup</span>
          <strong>{formatMoney(CN7_BACKUP_MONTHLY_USD, 'USD')}/mes</strong>
        </div>

        <div className="nt-quote__snapshot">
          <span>CN7 Hospedado</span>
          <strong>{formatMoney(CN7_HOSTED_MONTHLY_USD, 'USD')}/mes</strong>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="nt-quote__panel nt-quote__panel--form">
          <div className="nt-quote__head">
            <span className="nt-pill nt-pill--soft">Inteligente</span>
            <h3 className="nt-quote__title">Configura tu cotización</h3>
          </div>

          <div className="nt-quote__grid">
            <label className="nt-field">
              <span>Servicio</span>
              <select
                value={serviceFocus}
                onChange={(event) => setServiceFocus(event.target.value as ServiceFocus)}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="nt-field">
              <span>Licencias / estaciones</span>
              <input
                type="number"
                min={0}
                value={seats}
                onChange={(event) => setSeats(Number(event.target.value) || 0)}
              />
            </label>

            <div className="nt-field">
              <span>Ciclo</span>
              <div className="nt-toggle">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={billingCycle === 'monthly' ? 'is-active' : ''}
                >
                  Mensual
                </button>

                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={billingCycle === 'annual' ? 'is-active' : ''}
                >
                  Anual
                </button>
              </div>
            </div>

            <label className="nt-field">
              <span>Plan CN7</span>
              <select
                value={cloudPlan}
                onChange={(event) => setCloudPlan(event.target.value as CloudPlan)}
              >
                <option value="none">Sin CN7</option>
                <option value="cn7_backup">CN7 con respaldo</option>
                <option value="cn7_hosted">CN7 hospedado</option>
              </select>
            </label>

            <label className="nt-field">
              <span>Horas de soporte</span>
              <input
                type="number"
                min={0}
                value={supportHours}
                onChange={(event) => setSupportHours(Number(event.target.value) || 0)}
              />
            </label>

            <label className="nt-field">
              <span>Horas de desarrollo</span>
              <input
                type="number"
                min={0}
                value={developmentHours}
                onChange={(event) => setDevelopmentHours(Number(event.target.value) || 0)}
              />
            </label>

            <label className="nt-field nt-field--full">
              <span>Paquete de timbres</span>
              <select
                value={timbresPackage}
                onChange={(event) => setTimbresPackage(Number(event.target.value) || 0)}
              >
                {TIMBRES_PACKAGES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="nt-check">
            <input
              type="checkbox"
              checked={includeImplementation}
              onChange={(event) => setIncludeImplementation(event.target.checked)}
            />
            <span>Agregar implementación inicial</span>
          </label>

          <label className="nt-field nt-field--full nt-field--textarea">
            <span>Detalle del proyecto</span>
            <textarea
              value={customNeeds}
              onChange={(event) => setCustomNeeds(event.target.value)}
              rows={4}
              placeholder="Describe lo que necesitas..."
            />
          </label>
        </div>

        <div className="nt-quote__panel nt-quote__panel--summary">
          <div className="nt-quote__head">
            <span className="nt-pill nt-pill--soft">Resumen</span>
            <h3 className="nt-quote__title">Inversión estimada</h3>
          </div>

          <div className="nt-quote__metrics">
            <div className="nt-metric">
              <span>Recurrente MXN</span>
              <strong>{quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? '—'}</strong>
            </div>

            <div className="nt-metric">
              <span>Recurrente USD</span>
              <strong>{quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</strong>
            </div>

            <div className="nt-metric nt-metric--full">
              <span>Cargo único MXN</span>
              <strong>{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</strong>
            </div>
          </div>

          <div className="nt-breakdown">
            {quote.items.length === 0 ? (
              <p className="nt-breakdown__empty">Ajusta los campos para generar el estimado.</p>
            ) : (
              quote.items.map((item) => (
                <div
                  key={`${item.label}-${item.frequency}-${item.currency}-${item.amount}-${item.detail ?? ''}`}
                  className="nt-row"
                >
                  <div>
                    <p className="nt-row__title">{item.label}</p>
                    <p className="nt-row__meta">
                      {item.frequency === 'monthly'
                        ? 'Mensual'
                        : item.frequency === 'annual'
                          ? 'Anual'
                          : 'Pago único'}
                      {item.detail ? ` · ${item.detail}` : ''}
                    </p>
                  </div>

                  <strong className="nt-row__price">
                    {formatMoney(item.amount, item.currency)}
                  </strong>
                </div>
              ))
            )}
          </div>

          <div className="nt-quote__actions">
            <button type="button" onClick={() => openWhatsApp(whatsappMessage)} className="nt-btn nt-btn--primary w-full">
              Enviar a WhatsApp
            </button>

            <a href={CONTACT.phoneHref} className="nt-btn nt-btn--secondary w-full">
              Llamar al asesor
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
