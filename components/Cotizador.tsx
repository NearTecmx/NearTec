'use client'

import { useMemo, useState } from 'react'

type Company = 'neartec' | 'itimbre'
type Currency = 'MXN' | 'USD'
type Kind = 'fixed' | 'tiered' | 'assist'

type Tier = {
  min: number
  max?: number
  unitPrice: number
  label: string
}

type Service = {
  value: string
  label: string
  kind: Kind
  currency?: Currency
  price?: number
  tiers?: Tier[]
  quantityLabel?: string
  minQuantity?: number
  defaultQuantity?: number
  annualEligible?: boolean
  note?: string
}

type Props = {
  company: Company
}

const currencyFormatter = (value: number, currency: Currency): string =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value)

const WHATSAPP_NUMBER = '526646300473'

const SERVICES: Record<Company, Service[]> = {
  neartec: [
    {
      value: 'compunegocio',
      label: 'CompuNegocio — licencias por estación',
      kind: 'tiered',
      currency: 'MXN',
      quantityLabel: 'Número de licencias / estaciones',
      minQuantity: 1,
      defaultQuantity: 1,
      annualEligible: true,
      tiers: [
        { min: 1, max: 3, unitPrice: 450, label: '1 a 3 licencias' },
        { min: 4, max: 8, unitPrice: 400, label: '4 a 8 licencias' },
        { min: 9, max: 999999, unitPrice: 350, label: '9 o más licencias' },
      ],
      note: 'La anualidad aplica con el descuento equivalente a 3 meses.',
    },
    {
      value: 'cn7_servidor',
      label: 'CN7 — servidor y base de datos con respaldo',
      kind: 'fixed',
      currency: 'USD',
      price: 99,
      note: 'Mensual. Infraestructura en nube con respaldo automático.',
    },
    {
      value: 'cn7_hosted',
      label: 'CN7 — hospedado en la nube',
      kind: 'fixed',
      currency: 'USD',
      price: 149,
      note: 'Mensual. Hospedaje independiente en la nube.',
    },
    {
      value: 'implementacion',
      label: 'Implementación y configuración inicial',
      kind: 'fixed',
      currency: 'MXN',
      price: 1500,
      note: 'Incluye instalación, configuración de CSD, logo y capacitación inicial.',
    },
    {
      value: 'soporte',
      label: 'Soporte técnico / capacitaciones',
      kind: 'tiered',
      currency: 'MXN',
      quantityLabel: 'Horas requeridas',
      minQuantity: 1,
      defaultQuantity: 1,
      tiers: [{ min: 1, max: 999999, unitPrice: 999, label: 'Precio por hora' }],
      note: 'Servicio remoto.',
    },
    {
      value: 'desarrollo',
      label: 'Desarrollo a medida',
      kind: 'tiered',
      currency: 'MXN',
      quantityLabel: 'Horas de desarrollo',
      minQuantity: 1,
      defaultQuantity: 1,
      tiers: [{ min: 1, max: 999999, unitPrice: 1499, label: 'Precio por hora' }],
      note: 'Servicio remoto y de alcance personalizado.',
    },
  ],
  itimbre: [
    {
      value: 'mini',
      label: 'Paquete Mini',
      kind: 'fixed',
      currency: 'MXN',
      price: 1401.84,
      note: 'Incluye costo de activación.',
    },
    {
      value: 'basico',
      label: 'Paquete Básico',
      kind: 'fixed',
      currency: 'MXN',
      price: 2265.84,
      note: 'Incluye costo de activación.',
    },
    {
      value: 'premium',
      label: 'Paquete Premium',
      kind: 'fixed',
      currency: 'MXN',
      price: 3449.52,
      note: 'Incluye costo de activación.',
    },
    {
      value: 'professional',
      label: 'Paquete Professional',
      kind: 'fixed',
      currency: 'MXN',
      price: 4685.04,
      note: 'Incluye costo de activación.',
    },
    {
      value: 'conector',
      label: 'Conector',
      kind: 'fixed',
      currency: 'MXN',
      price: 1834.92,
      note: 'Conector local y complementos operativos.',
    },
    {
      value: 'autofactura',
      label: 'Portal de Autofactura Premium',
      kind: 'fixed',
      currency: 'MXN',
      price: 7500,
      note: 'Portal premium con acceso y captación de datos.',
    },
    {
      value: 'carta_porte',
      label: 'Módulo Carta Porte',
      kind: 'fixed',
      currency: 'MXN',
      price: 2265.84,
      note: 'Módulo con timbre complementario.',
    },
    {
      value: 'timbres_publico',
      label: 'Timbres públicos por volumen',
      kind: 'tiered',
      currency: 'MXN',
      quantityLabel: 'Cantidad de timbres',
      minQuantity: 100,
      defaultQuantity: 100,
      tiers: [
        { min: 100, max: 499, unitPrice: 1.62, label: '100 a 499' },
        { min: 500, max: 999, unitPrice: 1.57, label: '500 a 999' },
        { min: 1000, max: 2999, unitPrice: 1.4, label: '1,000 a 2,999' },
        { min: 3000, max: 4999, unitPrice: 1.3, label: '3,000 a 4,999' },
        { min: 5000, max: 7999, unitPrice: 1.08, label: '5,000 a 7,999' },
        { min: 8000, max: 9999, unitPrice: 1.03, label: '8,000 a 9,999' },
        { min: 10000, max: 19999, unitPrice: 0.97, label: '10,000 a 19,999' },
        { min: 20000, max: 29999, unitPrice: 0.86, label: '20,000 a 29,999' },
        { min: 30000, max: 49999, unitPrice: 0.76, label: '30,000 a 49,999' },
        { min: 50000, max: 99999, unitPrice: 0.7, label: '50,000 a 99,999' },
        { min: 100000, max: 999999, unitPrice: 0.65, label: '100,000 o más' },
      ],
      note: 'La tarifa se ajusta por volumen.',
    },
    {
      value: 'buzon_nomina',
      label: 'Buzón de nómina automático',
      kind: 'assist',
      currency: 'MXN',
      note: 'La banda depende de número de empleados y póliza. Se cotiza con un asesor.',
    },
    {
      value: 'desarrollo_it',
      label: 'Desarrollo software / soporte especializado',
      kind: 'assist',
      currency: 'MXN',
      note: 'Se cotiza según alcance, paquete y validación técnica.',
    },
  ],
}

function getTier(value: number, tiers: Tier[]): Tier | undefined {
  return tiers.find((tier) => value >= tier.min && value <= (tier.max ?? Number.MAX_SAFE_INTEGER))
}

export default function Cotizador({ company }: Props) {
  const services = SERVICES[company]
  const [serviceValue, setServiceValue] = useState(services[0].value)
  const selectedService = useMemo(
    () => services.find((service) => service.value === serviceValue) ?? services[0],
    [serviceValue, services]
  )

  const [quantity, setQuantity] = useState(selectedService.defaultQuantity ?? 1)
  const [cycle, setCycle] = useState<'mensual' | 'anual'>('mensual')
  const [details, setDetails] = useState('')

  const resetQuantityIfNeeded = (nextServiceValue: string) => {
    const nextService = services.find((service) => service.value === nextServiceValue)
    setServiceValue(nextServiceValue)
    setQuantity(nextService?.defaultQuantity ?? 1)
    setCycle('mensual')
  }

  const quote = useMemo(() => {
    const s = selectedService
    const safeCurrency: Currency = (s.currency ?? 'MXN') as Currency

    if (s.kind === 'assist') {
      return {
        total: null as number | null,
        currency: safeCurrency,
        breakdown: s.note ?? 'Cotización asistida.',
        unitPrice: null as number | null,
        tierLabel: null as string | null,
        assisted: true,
      }
    }

    if (s.kind === 'fixed') {
      return {
        total: s.price ?? 0,
        currency: safeCurrency,
        breakdown: s.note ?? 'Precio fijo.',
        unitPrice: s.price ?? 0,
        tierLabel: null as string | null,
        assisted: false,
      }
    }

    const safeQuantity = Math.max(quantity || 1, s.minQuantity ?? 1)
    const tier = getTier(safeQuantity, s.tiers ?? [])
    const unitPrice = tier?.unitPrice ?? 0
    const monthlyTotal = safeQuantity * unitPrice
    const total =
      company === 'neartec' && s.annualEligible && cycle === 'anual'
        ? monthlyTotal * 9
        : monthlyTotal

    return {
      total,
      currency: safeCurrency,
      breakdown: tier
        ? `${tier.label} · ${currencyFormatter(unitPrice, safeCurrency)} por unidad`
        : 'Tarifa por volumen.',
      unitPrice,
      tierLabel: tier?.label ?? null,
      assisted: false,
    }
  }, [company, cycle, quantity, selectedService])

  const whatsappMessage = useMemo(() => {
    const serviceName = selectedService.label
    const totalText =
      quote.total === null
        ? 'Cotización asistida requerida'
        : `${currencyFormatter(quote.total, quote.currency)}`
    const cycleText =
      selectedService.kind === 'tiered' && selectedService.annualEligible
        ? `\nCiclo: ${cycle}`
        : ''

    return [
      'Hola, quiero una cotización.',
      `Empresa: ${company === 'neartec' ? 'NearTec' : 'iTimbre'}`,
      `Servicio: ${serviceName}`,
      selectedService.kind !== 'fixed' ? `Cantidad: ${quantity}` : null,
      cycleText ? cycleText.trim() : null,
      `Estimado: ${totalText}`,
      `Detalle adicional: ${details || 'Sin detalle adicional'}`,
      '¿Me puede atender un asesor?',
    ]
      .filter(Boolean)
      .join('\n')
  }, [company, details, quantity, quote.currency, quote.total, selectedService, cycle])

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const showQuantity =
    selectedService.kind === 'tiered' && (selectedService.tiers?.length ?? 0) > 0
  const showCycle = selectedService.value === 'compunegocio'

  return (
    <div className="surface-card surface-card-hover mx-auto max-w-4xl overflow-hidden">
      <div className="bg-brand-surface px-6 py-6 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
          Cotizador en tiempo real
        </p>
        <h3 className="mt-2 text-3xl font-black text-brand-blue">
          Calcula tu inversión y pásate a WhatsApp
        </h3>
        <p className="mt-3 max-w-3xl text-brand-muted">
          Elige un servicio, escribe tu necesidad exacta y obtiene una referencia
          rápida con seguimiento comercial real.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 p-6 md:p-8">
          <div>
            <label className="label-base">Empresa / línea de negocio</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => resetQuantityIfNeeded(services[0].value)}
                disabled={company === 'neartec'}
                aria-pressed={company === 'neartec'}
                aria-label="Seleccionar NearTec"
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                  company === 'neartec'
                    ? 'border-brand-blue bg-brand-blue text-white'
                    : 'border-brand-line bg-white text-brand-blue hover:border-brand-blue'
                }`}
              >
                NearTec
              </button>
              <button
                type="button"
                onClick={() => resetQuantityIfNeeded(services[0].value)}
                disabled={company === 'itimbre'}
                aria-pressed={company === 'itimbre'}
                aria-label="Seleccionar iTimbre"
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                  company === 'itimbre'
                    ? 'border-brand-blue bg-brand-blue text-white'
                    : 'border-brand-line bg-white text-brand-blue hover:border-brand-blue'
                }`}
              >
                iTimbre
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="service-select" className="label-base">
              Servicio
            </label>
            <select
              id="service-select"
              value={serviceValue}
              onChange={(e) => resetQuantityIfNeeded(e.target.value)}
              className="input-base"
              aria-label="Selecciona un servicio"
            >
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {showQuantity && (
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="quantity-input" className="label-base">
                  {selectedService.quantityLabel}
                </label>
                <input
                  id="quantity-input"
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

              {showCycle && (
                <div>
                  <label htmlFor="cycle-select" className="label-base">
                    Ciclo de cobro
                  </label>
                  <select
                    id="cycle-select"
                    value={cycle}
                    onChange={(e) => setCycle(e.target.value as 'mensual' | 'anual')}
                    className="input-base"
                    aria-label="Ciclo de cobro"
                  >
                    <option value="mensual">Mensual</option>
                    <option value="anual">Anual (3 meses desc.)</option>
                  </select>
                </div>
              )}
            </div>
          )}

          <div>
            <label htmlFor="details-textarea" className="label-base">
              Requerimiento exacto
            </label>
            <textarea
              id="details-textarea"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value.slice(0, 500))}
              placeholder="Describe lo que necesitas. Ejemplo: 6 estaciones, migración, soporte remoto y arranque con CSD."
              className="input-base resize-none"
              aria-label="Detalle de requerimiento"
              maxLength={500}
            />
            <p className="mt-1 text-xs text-brand-muted">{details.length}/500 caracteres</p>
          </div>

          <button 
            onClick={openWhatsApp} 
            className="btn-primary w-full"
            aria-label="Enviar cotización a WhatsApp"
          >
            Enviar cotización a WhatsApp
          </button>
        </div>

        <aside className="border-t border-brand-line bg-brand-light p-6 md:p-8 lg:border-l lg:border-t-0">
          <div className="space-y-4 rounded-[24px] border border-brand-line bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Resumen
            </p>
            <h4 className="text-xl font-black text-brand-blue">
              {selectedService.label}
            </h4>
            <p className="text-sm text-brand-muted">{selectedService.note}</p>

            <div className="rounded-2xl bg-brand-light p-4">
              <p className="text-sm font-semibold text-brand-muted">Estimado</p>
              <p className="mt-1 text-3xl font-black text-brand-blue">
                {quote.total === null
                  ? 'Asistido'
                  : `${currencyFormatter(quote.total, quote.currency)}`}
              </p>
              {quote.unitPrice !== null && (
                <p className="mt-2 text-sm text-brand-muted">{quote.breakdown}</p>
              )}
            </div>

            <div className="space-y-2 text-sm text-brand-muted">
              <p>
                <span className="font-semibold text-brand-ink">Cantidad:</span>{' '}
                {selectedService.kind === 'fixed' ? 'No aplica' : quantity}
              </p>
              {showCycle && selectedService.annualEligible ? (
                <p>
                  <span className="font-semibold text-brand-ink">Ciclo:</span>{' '}
                  {cycle === 'anual' ? 'Anual (3 meses desc.)' : 'Mensual'}
                </p>
              ) : null}
              <p>
                <span className="font-semibold text-brand-ink">Moneda:</span>{' '}
                {quote.currency}
              </p>
            </div>

            <button 
              onClick={openWhatsApp} 
              className="btn-secondary w-full"
              aria-label="Abrir seguimiento por WhatsApp"
            >
              Abrir seguimiento por WhatsApp
            </button>
          </div>

          <div className="mt-5 rounded-[24px] border border-brand-line bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold text-brand-blue">Lo que sigue</p>
            <ol className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>1. Revisas el estimado.</li>
              <li>2. Te pasas a WhatsApp con el detalle.</li>
              <li>3. Un asesor retoma el cierre real.</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  )
}
