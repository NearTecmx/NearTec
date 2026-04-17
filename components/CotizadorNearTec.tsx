'use client'

import { useMemo, useState } from 'react'

type Service = {
  value: string
  label: string
  kind: 'fixed' | 'tiered' | 'assist'
  price?: number
  currency?: 'MXN' | 'USD'
  quantityLabel?: string
  minQuantity?: number
  defaultQuantity?: number
  annualEligible?: boolean
  tiers?: Array<{ min: number; max?: number; unitPrice: number; label: string }>
  note?: string
}

const NEARTEC_SERVICES: Service[] = [
  {
    value: 'hosting_basico',
    label: 'Hosting Básico',
    kind: 'fixed',
    price: 299,
    currency: 'MXN',
    note: 'Ideal para sitios pequeños y medianos.',
  },
  {
    value: 'cn7_servidor',
    label: 'CN7 - Servidor y Base de Datos',
    kind: 'fixed',
    price: 99,
    currency: 'USD',
    note: 'Sistema ERP mensual con respaldo automático.',
  },
  {
    value: 'compunegocio',
    label: 'CompuNegocio - Licencias',
    kind: 'tiered',
    currency: 'MXN',
    quantityLabel: 'Número de licencias',
    minQuantity: 1,
    defaultQuantity: 5,
    annualEligible: true,
    tiers: [
      { min: 1, max: 3, unitPrice: 450, label: '1 a 3 licencias' },
      { min: 4, max: 8, unitPrice: 400, label: '4 a 8 licencias' },
      { min: 9, max: 999999, unitPrice: 350, label: '9 o más licencias' },
    ],
    note: 'Licencias por estación con 3 meses de descuento si es anual.',
  },
  {
    value: 'soporte',
    label: 'Soporte Técnico Remoto',
    kind: 'tiered',
    currency: 'MXN',
    quantityLabel: 'Horas de soporte',
    minQuantity: 1,
    defaultQuantity: 5,
    tiers: [{ min: 1, max: 999999, unitPrice: 999, label: 'Por hora' }],
    note: 'Implementación, capacitación y mantenimiento.',
  },
  {
    value: 'desarrollo',
    label: 'Desarrollo Personalizado',
    kind: 'assist',
    currency: 'MXN',
    note: 'Se cotiza según alcance y complejidad del proyecto.',
  },
]

const currencyFormatter = (value: number, currency: 'MXN' | 'USD'): string =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value)

export default function CotizadorNearTec() {
  const [serviceValue, setServiceValue] = useState(NEARTEC_SERVICES[0].value)
  const [quantity, setQuantity] = useState(1)
  const [cycle, setCycle] = useState<'mensual' | 'anual'>('mensual')
  const [details, setDetails] = useState('')

  const selectedService = useMemo(
    () => NEARTEC_SERVICES.find((s) => s.value === serviceValue) ?? NEARTEC_SERVICES[0],
    [serviceValue]
  )

  const quote = useMemo(() => {
    const s = selectedService
    const currency = (s.currency ?? 'MXN') as 'MXN' | 'USD'

    if (s.kind === 'assist') {
      return {
        total: null,
        currency,
        breakdown: s.note ?? 'Cotización personalizada',
      }
    }

    if (s.kind === 'fixed') {
      return {
        total: s.price ?? 0,
        currency,
        breakdown: s.note ?? 'Precio fijo',
      }
    }

    const safeQuantity = Math.max(quantity || 1, s.minQuantity ?? 1)
    const tier = s.tiers?.find((t) => safeQuantity >= t.min && safeQuantity <= (t.max ?? Infinity))
    const unitPrice = tier?.unitPrice ?? 0
    const monthlyTotal = safeQuantity * unitPrice
    const total = cycle === 'anual' && s.annualEligible ? monthlyTotal * 9 : monthlyTotal

    return {
      total,
      currency,
      breakdown: `${tier?.label ?? ''} · ${currencyFormatter(unitPrice, currency)}/unidad`,
    }
  }, [selectedService, quantity, cycle])

  const whatsappMessage = `
Hola, me interesa cotizar con NearTec.

Servicio: ${selectedService.label}
${selectedService.kind !== 'fixed' ? `Cantidad: ${quantity}\n` : ''}
${selectedService.kind === 'tiered' && selectedService.annualEligible ? `Ciclo: ${cycle}\n` : ''}
Estimado: ${quote.total === null ? 'Personalizado' : currencyFormatter(quote.total, quote.currency as 'MXN' | 'USD')}

Detalle: ${details || 'Sin detalle adicional'}

¿Puede un asesor contactarme para detalles?
  `.trim()

  return (
    <div className="surface-card surface-card-hover mx-auto max-w-4xl overflow-hidden">
      <div className="bg-brand-surface px-6 py-8 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
          Cotizador en Tiempo Real
        </p>
        <h3 className="mt-2 text-3xl font-black text-brand-blue">
          Calcula tu inversión en infraestructura
        </h3>
        <p className="mt-3 max-w-3xl text-brand-muted">
          Selecciona el servicio que necesitas y obtén una cotización instant áneaánea.
          Luego contactaremos con nuestro equipo para detalles.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 p-6 md:p-8">
          <div>
            <label htmlFor="service" className="label-base">
              Servicio
            </label>
            <select
              id="service"
              value={serviceValue}
              onChange={(e) => {
                setServiceValue(e.target.value)
                setQuantity(1)
                setCycle('mensual')
              }}
              className="input-base"
              aria-label="Selecciona un servicio"
            >
              {NEARTEC_SERVICES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {selectedService.kind === 'tiered' && (
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="quantity" className="label-base">
                  {selectedService.quantityLabel}
                </label>
                <input
                  id="quantity"
                  type="number"
                  min={selectedService.minQuantity ?? 1}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(Number(e.target.value) || 1, selectedService.minQuantity ?? 1))
                  }
                  className="input-base"
                  aria-label="Cantidad"
                />
              </div>

              {selectedService.annualEligible && (
                <div>
                  <label htmlFor="cycle" className="label-base">
                    Ciclo de Pago
                  </label>
                  <select
                    id="cycle"
                    value={cycle}
                    onChange={(e) => setCycle(e.target.value as 'mensual' | 'anual')}
                    className="input-base"
                  >
                    <option value="mensual">Mensual</option>
                    <option value="anual">Anual (3 meses desc.)</option>
                  </select>
                </div>
              )}
            </div>
          )}

          <div>
            <label htmlFor="details" className="label-base">
              Más detalles (opcional)
            </label>
            <textarea
              id="details"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value.slice(0, 300))}
              placeholder="Ej: 6 estaciones, migración desde sistema anterior, necesito capacitación..."
              className="input-base resize-none"
              maxLength={300}
              aria-label="Detalles adicionales"
            />
            <p className="mt-1 text-xs text-brand-muted">{details.length}/300 caracteres</p>
          </div>

          <a
            href={`https://wa.me/526631656898?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center"
            aria-label="Enviar cotización por WhatsApp"
          >
            Enviar Cotización por WhatsApp
          </a>
        </div>

        <aside className="border-t border-brand-line bg-brand-light p-6 md:p-8 lg:border-l lg:border-t-0">
          <div className="space-y-4 rounded-[24px] border border-brand-line bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Resumen
            </p>
            <h4 className="text-xl font-black text-brand-blue">{selectedService.label}</h4>
            <p className="text-sm text-brand-muted">{selectedService.note}</p>

            <div className="rounded-2xl bg-brand-green/10 p-4">
              <p className="text-sm font-semibold text-brand-muted">Estimado</p>
              <p className="mt-2 text-3xl font-black text-brand-green">
                {quote.total === null ? 'A medida' : currencyFormatter(quote.total, quote.currency as 'MXN' | 'USD')}
              </p>
              {quote.breakdown && (
                <p className="mt-2 text-xs text-brand-muted">{quote.breakdown}</p>
              )}
            </div>

            <button
              onClick={() => {
                window.open(
                  `https://wa.me/526631656898?text=${encodeURIComponent(whatsappMessage)}`,
                  '_blank'
                )
              }}
              className="btn-secondary w-full"
              aria-label="Seguimiento por WhatsApp"
            >
              Seguimiento por WhatsApp
            </button>
          </div>

          <div className="mt-5 rounded-[24px] border border-brand-line bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold text-brand-blue">Próximos pasos</p>
            <ol className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>1. Revisas la cotización</li>
              <li>2. Te contactaremos en WhatsApp</li>
              <li>3. Definimos implementación</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  )
}
