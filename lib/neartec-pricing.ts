export type BillingCycle = 'monthly' | 'annual'
export type CloudPlan = 'none' | 'cn7_backup' | 'cn7_hosted'
export type ServiceFocus = 'web' | 'crm' | 'compunegocio' | 'cloud' | 'emailing' | 'fiscal' | 'custom'

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
  label: 'Listo para ventas' | 'Oportunidad activa' | 'Exploración'
  tone: 'hot' | 'warm' | 'cool'
  note: string
  nextStep: string
}

export const CONTACT = {
  phoneDisplay: '664 630 0473',
  phoneHref: 'tel:6646300473',
  whatsappNumber: '526646300473',
  email: 'info@itimbre.com',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
}

export const SERVICE_OPTIONS: Array<{ value: ServiceFocus; label: string; description: string; short: string }> = [
  { value: 'web', label: 'Sitio web que venda', description: 'Página, landing o ecommerce con mensaje claro, velocidad y conversión.', short: 'Web' },
  { value: 'crm', label: 'CRM y seguimiento', description: 'Filtro de leads, agenda, WhatsApp, campañas y automatización comercial.', short: 'CRM' },
  { value: 'compunegocio', label: 'CompuNegocio / punto de venta', description: 'Control de ventas, inventario, reportes, timbres y operación diaria.', short: 'POS' },
  { value: 'cloud', label: 'Nube, correo e infraestructura', description: 'Hosting, VPS, correo corporativo, CN7, respaldos y continuidad.', short: 'Cloud' },
  { value: 'emailing', label: 'Emailing corporativo', description: 'Campañas, segmentación, recuperación de prospectos y medición.', short: 'Emailing' },
  { value: 'fiscal', label: 'Conexión fiscal con iTimbre', description: 'Cuando tu operación necesita CFDI, timbres, autofactura o integración fiscal.', short: 'Fiscal' },
  { value: 'custom', label: 'Proyecto combinado', description: 'Cuando necesitas varias piezas conectadas y una propuesta guiada.', short: 'Proyecto' },
]

export const TIMBRES_PACKAGES = [
  { value: 0, label: 'Sin timbres por ahora', priceMxn: 0 },
  { value: 365, label: '365 timbres', priceMxn: 730 },
  { value: 500, label: '500 timbres', priceMxn: 1000 },
  { value: 1000, label: '1,000 timbres', priceMxn: 1500 },
  { value: 2000, label: '2,000 timbres', priceMxn: 2800 },
  { value: 3000, label: '3,000 timbres', priceMxn: 4200 },
  { value: 5000, label: '5,000 timbres', priceMxn: 6250 },
  { value: 10000, label: '10,000 timbres', priceMxn: 9500 },
]

export const IMPLEMENTATION_PRICE_MXN = 1500
export const SUPPORT_HOURLY_PRICE_MXN = 499
export const DEVELOPMENT_HOURLY_PRICE_MXN = 999
export const CN7_BACKUP_MONTHLY_USD = 99
export const CN7_HOSTED_MONTHLY_USD = 149

export function formatMoney(amount: number, currency: 'MXN' | 'USD'): string {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 2 }).format(amount)
}

export function clampToPositiveInteger(value: number): number {
  if (!Number.isFinite(value)) return 0
  return Math.max(0, Math.floor(value))
}

export function getCompuNegocioMonthlyRate(seats: number): number {
  const normalized = clampToPositiveInteger(seats)
  if (normalized === 0) return 0
  if (normalized <= 3) return 450
  if (normalized <= 8) return 400
  return 350
}

export function getCompuNegocioAnnualPerSeat(seats: number): number {
  const normalized = clampToPositiveInteger(seats)
  if (normalized === 0) return 0
  if (normalized <= 3) return 4050
  if (normalized <= 8) return 3600
  return 3150
}

export function calculateNearTecQuote(input: NearTecQuoteInput): NearTecQuoteResult {
  const seats = clampToPositiveInteger(input.seats)
  const supportHours = clampToPositiveInteger(input.supportHours)
  const developmentHours = clampToPositiveInteger(input.developmentHours)
  const items: QuoteLineItem[] = []

  if (input.serviceFocus === 'compunegocio' || input.serviceFocus === 'custom') {
    if (input.billingCycle === 'annual') {
      items.push({ label: 'CompuNegocio anual', amount: getCompuNegocioAnnualPerSeat(seats) * seats, currency: 'MXN', frequency: 'annual', detail: `${seats} estación(es)` })
    } else {
      items.push({ label: 'CompuNegocio mensual', amount: getCompuNegocioMonthlyRate(seats) * seats, currency: 'MXN', frequency: 'monthly', detail: `${seats} estación(es)` })
    }
  }

  if (input.includeImplementation) items.push({ label: 'Implementación base', amount: IMPLEMENTATION_PRICE_MXN, currency: 'MXN', frequency: 'one_time' })
  if (supportHours > 0) items.push({ label: 'Soporte técnico', amount: supportHours * SUPPORT_HOURLY_PRICE_MXN, currency: 'MXN', frequency: 'one_time', detail: `${supportHours} h` })
  if (developmentHours > 0) items.push({ label: 'Desarrollo / ajustes', amount: developmentHours * DEVELOPMENT_HOURLY_PRICE_MXN, currency: 'MXN', frequency: 'one_time', detail: `${developmentHours} h` })

  const timbres = TIMBRES_PACKAGES.find((item) => item.value === input.timbresPackage)
  if (timbres && timbres.priceMxn > 0) items.push({ label: timbres.label, amount: timbres.priceMxn, currency: 'MXN', frequency: 'one_time' })
  if (input.cloudPlan === 'cn7_backup') items.push({ label: 'CN7 con respaldo', amount: CN7_BACKUP_MONTHLY_USD, currency: 'USD', frequency: 'monthly' })
  if (input.cloudPlan === 'cn7_hosted') items.push({ label: 'CN7 hospedado', amount: CN7_HOSTED_MONTHLY_USD, currency: 'USD', frequency: 'monthly' })

  const monthlyMxn = items.filter((i) => i.currency === 'MXN' && i.frequency === 'monthly').reduce((sum, i) => sum + i.amount, 0)
  const annualMxn = items.filter((i) => i.currency === 'MXN' && i.frequency === 'annual').reduce((sum, i) => sum + i.amount, 0)
  const oneTimeMxn = items.filter((i) => i.currency === 'MXN' && i.frequency === 'one_time').reduce((sum, i) => sum + i.amount, 0)
  const monthlyUsd = items.filter((i) => i.currency === 'USD' && i.frequency === 'monthly').reduce((sum, i) => sum + i.amount, 0)

  return {
    items,
    monthlyMxn,
    annualMxn,
    oneTimeMxn,
    monthlyUsd,
    monthlyRecurringLabel: monthlyMxn > 0 ? `${formatMoney(monthlyMxn, 'MXN')} / mes` : null,
    annualRecurringLabel: annualMxn > 0 ? `${formatMoney(annualMxn, 'MXN')} / año` : null,
  }
}

export function getRecommendedModules(input: NearTecQuoteInput): string[] {
  const base: Record<ServiceFocus, string[]> = {
    web: ['Diseño web', 'Landing de conversión', 'Hosting', 'Formulario conectado'],
    crm: ['CRM', 'Lead filtering', 'WhatsApp', 'Automatización'],
    compunegocio: ['CompuNegocio', 'Punto de venta', 'Inventario', 'Reportes'],
    cloud: ['Hosting / VPS', 'Correo corporativo', 'CN7', 'Respaldo'],
    emailing: ['Emailing', 'Segmentación', 'Campañas', 'Métricas'],
    fiscal: ['Conexión iTimbre', 'Timbres', 'CFDI', 'Integración fiscal'],
    custom: ['Diagnóstico', 'Arquitectura', 'Implementación', 'Soporte'],
  }
  const modules = new Set(base[input.serviceFocus])
  if (input.cloudPlan !== 'none') modules.add('Nube CN7')
  if (input.timbresPackage > 0) modules.add('Timbres')
  if (input.includeImplementation) modules.add('Implementación')
  return Array.from(modules).slice(0, 7)
}

export function getLeadQualification(input: NearTecQuoteInput): LeadQualification {
  const score =
    (input.serviceFocus === 'compunegocio' || input.serviceFocus === 'custom' ? 35 : 20) +
    (input.seats >= 5 ? 20 : 8) +
    (input.cloudPlan !== 'none' ? 18 : 0) +
    (input.includeImplementation ? 10 : 0) +
    (input.timbresPackage > 0 ? 8 : 0) +
    (input.customNeeds.trim().length > 10 ? 10 : 0)

  if (score >= 70) return { label: 'Listo para ventas', tone: 'hot', note: 'Tu caso ya trae señales claras de implementación y operación. Conviene hablar con un asesor.', nextStep: 'WhatsApp con resumen' }
  if (score >= 42) return { label: 'Oportunidad activa', tone: 'warm', note: 'Ya hay una necesidad concreta. Podemos aterrizar alcance, prioridad y rango.', nextStep: 'Revisión breve' }
  return { label: 'Exploración', tone: 'cool', note: 'Empieza con una ruta simple para definir qué conviene contratar primero.', nextStep: 'Diagnóstico inicial' }
}
