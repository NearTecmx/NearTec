export type BillingCycle = 'monthly' | 'annual'
export type CloudPlan = 'none' | 'cn7_backup' | 'cn7_hosted'
export type ServiceFocus =
  | 'compunegocio'
  | 'cn7'
  | 'infraestructura'
  | 'soporte'
  | 'desarrollo'
  | 'personalizado'

export interface TimbresPackage {
  value: number
  label: string
  priceMxn: number
}

export interface NearTecQuoteInput {
  serviceFocus: ServiceFocus
  seats: number
  billingCycle: BillingCycle
  includeImplementation: boolean
  supportHours: number
  developmentHours: number
  cloudPlan: CloudPlan
  timbresPackage: number
  customNeeds: string
}

export interface QuoteLineItem {
  label: string
  amount: number
  currency: 'MXN' | 'USD'
  frequency: 'one_time' | 'monthly' | 'annual'
  detail?: string
}

export interface NearTecQuoteResult {
  items: QuoteLineItem[]
  monthlyMxn: number
  annualMxn: number
  oneTimeMxn: number
  monthlyUsd: number
  monthlyRecurringLabel: string | null
  annualRecurringLabel: string | null
}

export const CONTACT = {
  phoneDisplay: '663 165 6898',
  phoneHref: 'tel:6631656898',
  whatsappNumber: '526631656898',
}

export const SERVICE_OPTIONS: Array<{
  value: ServiceFocus
  label: string
  description: string
}> = [
  {
    value: 'compunegocio',
    label: 'CompuNegocio / licenciamiento',
    description:
      'Para empresas que necesitan estaciones activas, operación diaria y póliza.',
  },
  {
    value: 'cn7',
    label: 'CN7 / nube',
    description: 'Para operación remota, hospedaje y respaldo en nube.',
  },
  {
    value: 'infraestructura',
    label: 'Infraestructura tecnológica',
    description: 'Para base operativa, continuidad y acompañamiento técnico.',
  },
  {
    value: 'soporte',
    label: 'Soporte y capacitación',
    description: 'Para incidencias, entrenamiento y seguimiento operativo.',
  },
  {
    value: 'desarrollo',
    label: 'Desarrollo y ajustes',
    description: 'Para cambios, mejoras, personalizaciones y nuevos alcances.',
  },
  {
    value: 'personalizado',
    label: 'Necesidad personalizada',
    description:
      'Para un requerimiento que necesita revisión comercial y técnica.',
  },
]

export const TIMBRES_PACKAGES: TimbresPackage[] = [
  { value: 0, label: 'Sin paquete de timbres', priceMxn: 0 },
  { value: 365, label: '365 timbres', priceMxn: 730 },
  { value: 500, label: '500 timbres', priceMxn: 1000 },
  { value: 1000, label: '1,000 timbres', priceMxn: 1500 },
  { value: 2000, label: '2,000 timbres', priceMxn: 2800 },
  { value: 3000, label: '3,000 timbres', priceMxn: 4200 },
  { value: 4000, label: '4,000 timbres', priceMxn: 5200 },
  { value: 5000, label: '5,000 timbres', priceMxn: 6250 },
  { value: 6000, label: '6,000 timbres', priceMxn: 7200 },
  { value: 8000, label: '8,000 timbres', priceMxn: 8800 },
  { value: 10000, label: '10,000 timbres', priceMxn: 9500 },
]

export const IMPLEMENTATION_PRICE_MXN = 1500
export const SUPPORT_HOURLY_PRICE_MXN = 499
export const DEVELOPMENT_HOURLY_PRICE_MXN = 999
export const CN7_BACKUP_MONTHLY_USD = 99
export const CN7_HOSTED_MONTHLY_USD = 149

export function clampToPositiveInteger(value: number): number {
  if (!Number.isFinite(value)) return 0
  return Math.max(0, Math.floor(value))
}

export function getCompuNegocioMonthlyRate(seats: number): number {
  const normalizedSeats = clampToPositiveInteger(seats)

  if (normalizedSeats === 0) return 0
  if (normalizedSeats <= 3) return 450
  if (normalizedSeats <= 8) return 400
  return 350
}

export function getCompuNegocioAnnualPerSeat(seats: number): number {
  const normalizedSeats = clampToPositiveInteger(seats)

  if (normalizedSeats === 0) return 0
  if (normalizedSeats <= 3) return 4050
  if (normalizedSeats <= 8) return 3600
  return 3150
}

export function getCloudPlanMonthlyUsd(plan: CloudPlan): number {
  if (plan === 'cn7_backup') return CN7_BACKUP_MONTHLY_USD
  if (plan === 'cn7_hosted') return CN7_HOSTED_MONTHLY_USD
  return 0
}

export function getTimbresPackagePrice(packageValue: number): number {
  return TIMBRES_PACKAGES.find((item) => item.value === packageValue)?.priceMxn ?? 0
}

export function getTimbresPackageLabel(packageValue: number): string {
  return (
    TIMBRES_PACKAGES.find((item) => item.value === packageValue)?.label ??
    'Paquete especial'
  )
}

export function formatMoney(amount: number, currency: 'MXN' | 'USD'): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function calculateNearTecQuote(
  input: NearTecQuoteInput,
): NearTecQuoteResult {
  const seats = clampToPositiveInteger(input.seats)
  const supportHours = clampToPositiveInteger(input.supportHours)
  const developmentHours = clampToPositiveInteger(input.developmentHours)
  const items: QuoteLineItem[] = []

  if (seats > 0) {
    if (input.billingCycle === 'monthly') {
      items.push({
        label: 'Licenciamiento CompuNegocio',
        amount: getCompuNegocioMonthlyRate(seats) * seats,
        currency: 'MXN',
        frequency: 'monthly',
        detail: `${seats} estación(es)`,
      })
    } else {
      items.push({
        label: 'Licenciamiento CompuNegocio anual',
        amount: getCompuNegocioAnnualPerSeat(seats) * seats,
        currency: 'MXN',
        frequency: 'annual',
        detail: `${seats} estación(es)`,
      })
    }
  }

  if (input.includeImplementation) {
    items.push({
      label: 'Implementación inicial',
      amount: IMPLEMENTATION_PRICE_MXN,
      currency: 'MXN',
      frequency: 'one_time',
    })
  }

  if (supportHours > 0) {
    items.push({
      label: 'Soporte técnico',
      amount: supportHours * SUPPORT_HOURLY_PRICE_MXN,
      currency: 'MXN',
      frequency: 'one_time',
      detail: `${supportHours} hora(s)`,
    })
  }

  if (developmentHours > 0) {
    items.push({
      label: 'Desarrollo / ajustes',
      amount: developmentHours * DEVELOPMENT_HOURLY_PRICE_MXN,
      currency: 'MXN',
      frequency: 'one_time',
      detail: `${developmentHours} hora(s)`,
    })
  }

  const cloudPlanMonthlyUsd = getCloudPlanMonthlyUsd(input.cloudPlan)

  if (cloudPlanMonthlyUsd > 0) {
    items.push({
      label:
        input.cloudPlan === 'cn7_hosted'
          ? 'CN7 hospedado en nube'
          : 'CN7 con respaldo en nube',
      amount: cloudPlanMonthlyUsd,
      currency: 'USD',
      frequency: 'monthly',
    })
  }

  const timbresPrice = getTimbresPackagePrice(input.timbresPackage)

  if (timbresPrice > 0) {
    items.push({
      label: getTimbresPackageLabel(input.timbresPackage),
      amount: timbresPrice,
      currency: 'MXN',
      frequency: 'one_time',
    })
  }

  const monthlyMxn = items
    .filter((item) => item.currency === 'MXN' && item.frequency === 'monthly')
    .reduce((sum, item) => sum + item.amount, 0)

  const annualMxn = items
    .filter((item) => item.currency === 'MXN' && item.frequency === 'annual')
    .reduce((sum, item) => sum + item.amount, 0)

  const oneTimeMxn = items
    .filter((item) => item.currency === 'MXN' && item.frequency === 'one_time')
    .reduce((sum, item) => sum + item.amount, 0)

  const monthlyUsd = items
    .filter((item) => item.currency === 'USD' && item.frequency === 'monthly')
    .reduce((sum, item) => sum + item.amount, 0)

  return {
    items,
    monthlyMxn,
    annualMxn,
    oneTimeMxn,
    monthlyUsd,
    monthlyRecurringLabel: monthlyMxn > 0 ? formatMoney(monthlyMxn, 'MXN') : null,
    annualRecurringLabel: annualMxn > 0 ? formatMoney(annualMxn, 'MXN') : null,
  }
}