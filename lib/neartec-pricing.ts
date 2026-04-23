export type BillingCycle = 'monthly' | 'annual'
export type CloudPlan = 'none' | 'cn7_backup' | 'cn7_hosted'
export type ServiceFocus =
  | 'compunegocio'
  | 'cn7'
  | 'infraestructura'
  | 'automatizacion'
  | 'diseno'
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

export interface LeadQualification {
  label: 'Alta prioridad' | 'Calificado' | 'Exploración'
  tone: 'hot' | 'warm' | 'cool'
  note: string
  implementationWindow: string
}

export const CONTACT = {
  phoneDisplay: '664 404 6194',
  phoneHref: 'tel:6644046194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  address: 'Benito Juárez y/o Segunda Century 2034, Zona Centro, Tijuana, B.C.',
}

export const SERVICE_OPTIONS: Array<{
  value: ServiceFocus
  label: string
  description: string
}> = [
  {
    value: 'compunegocio',
    label: 'CompuNegocio / Punto de venta',
    description: 'Para ventas, inventario, estaciones, timbres y control diario.',
  },
  {
    value: 'cn7',
    label: 'CN7 / nube y respaldo',
    description: 'Para operar en la nube, respaldar base de datos y crecer sin fricción.',
  },
  {
    value: 'infraestructura',
    label: 'Infraestructura tecnológica',
    description: 'Hosting, VPS, correo corporativo, continuidad y soporte.',
  },
  {
    value: 'automatizacion',
    label: 'CRM y automatización',
    description: 'Lead filtering, seguimiento, campañas y agenda comercial.',
  },
  {
    value: 'diseno',
    label: 'Diseño web y conversión',
    description: 'Sitio, landing o ecommerce con estructura para vender mejor.',
  },
  {
    value: 'personalizado',
    label: 'Necesidad personalizada',
    description: 'Para un requerimiento mixto que necesita revisión comercial y técnica.',
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

export const QUOTE_BASE_NOTES = [
  'CompuNegocio: 1–3 licencias $450 MXN/mes, 4–8 $400 MXN/mes, 9+ $350 MXN/mes.',
  'Implementación base documentada: $1,500 MXN pago único.',
  'Soporte técnico: $499 MXN por hora. Desarrollo: $999 MXN por hora.',
  'CN7 con respaldo: $99 USD/mes. CN7 hospedado: $149 USD/mes.',
  'Timbres CompuNegocio: 365 desde $730 MXN hasta 10,000 por $9,500 MXN.',
]

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
  return TIMBRES_PACKAGES.find((item) => item.value === packageValue)?.label ?? 'Paquete especial'
}

export function formatMoney(amount: number, currency: 'MXN' | 'USD'): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function calculateNearTecQuote(input: NearTecQuoteInput): NearTecQuoteResult {
  const seats = clampToPositiveInteger(input.seats)
  const supportHours = clampToPositiveInteger(input.supportHours)
  const developmentHours = clampToPositiveInteger(input.developmentHours)
  const items: QuoteLineItem[] = []

  if (seats > 0 && input.serviceFocus === 'compunegocio') {
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
      label: input.cloudPlan === 'cn7_hosted' ? 'CN7 hospedado en nube' : 'CN7 con respaldo en nube',
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

export function getRecommendedModules(input: NearTecQuoteInput): string[] {
  const modules = new Set<string>()

  if (input.serviceFocus === 'compunegocio') {
    modules.add('CompuNegocio')
    modules.add('Control operativo')
    modules.add('Timbres / CFDI')
  }

  if (input.serviceFocus === 'cn7' || input.cloudPlan !== 'none') {
    modules.add('CN7 / nube')
    modules.add('Respaldo y continuidad')
  }

  if (input.serviceFocus === 'infraestructura') {
    modules.add('Hosting / VPS')
    modules.add('Correo corporativo')
  }

  if (input.serviceFocus === 'automatizacion') {
    modules.add('CRM')
    modules.add('Lead filtering')
    modules.add('Automatización comercial')
  }

  if (input.serviceFocus === 'diseno') {
    modules.add('Sitio web / landing')
    modules.add('Estructura de conversión')
  }

  if (input.timbresPackage > 0) {
    modules.add(getTimbresPackageLabel(input.timbresPackage))
  }

  if (input.supportHours > 0 || input.developmentHours > 0) {
    modules.add('Acompañamiento técnico')
  }

  if (modules.size === 0) {
    modules.add('Diagnóstico comercial')
    modules.add('Ruta sugerida por fases')
  }

  return Array.from(modules)
}

export function getLeadQualification(input: NearTecQuoteInput): LeadQualification {
  const weightedScore =
    (input.seats >= 9 ? 35 : input.seats >= 4 ? 20 : input.seats >= 1 ? 10 : 0) +
    (input.cloudPlan !== 'none' ? 20 : 0) +
    (input.timbresPackage >= 3000 ? 15 : input.timbresPackage >= 1000 ? 10 : input.timbresPackage > 0 ? 5 : 0) +
    (input.includeImplementation ? 10 : 0) +
    (input.supportHours > 0 ? 5 : 0) +
    (input.developmentHours > 0 ? 10 : 0) +
    (input.serviceFocus === 'personalizado' ? 10 : 0)

  if (weightedScore >= 55) {
    return {
      label: 'Alta prioridad',
      tone: 'hot',
      note: 'Vale la pena pasar esto directo a revisión comercial con propuesta guiada.',
      implementationWindow: 'Respuesta comercial sugerida: hoy mismo',
    }
  }

  if (weightedScore >= 25) {
    return {
      label: 'Calificado',
      tone: 'warm',
      note: 'Ya hay suficientes señales para continuar con diagnóstico y demo.',
      implementationWindow: 'Respuesta comercial sugerida: dentro de 24 horas',
    }
  }

  return {
    label: 'Exploración',
    tone: 'cool',
    note: 'Conviene educar, mostrar stack sugerido y llevarlo a una propuesta simple.',
    implementationWindow: 'Respuesta comercial sugerida: diagnóstico primero',
  }
}
