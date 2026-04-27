export type BillingCycle = 'monthly' | 'annual'
export type CloudPlan = 'none' | 'cn7_backup' | 'cn7_hosted' | 'backup_only'
export type QuoteFocus = 'compunegocio' | 'cn7' | 'timbres' | 'support' | 'development' | 'implementation' | 'suite'
export type ScopeNeed = 'web' | 'hosting' | 'vps' | 'ftp' | 'email' | 'emailing' | 'automation' | 'fiscal'

export interface NearTecQuoteInput {
  serviceFocus: QuoteFocus
  seats: number
  billingCycle: BillingCycle
  includeImplementation: boolean
  supportHours: number
  developmentHours: number
  cloudPlan: CloudPlan
  timbresPackage: number
  scopeNeeds: ScopeNeed[]
  companyName: string
  contactName: string
  contactPhone: string
  contactEmail: string
  customNeeds: string
}

export interface QuoteLineItem {
  label: string
  amount: number
  currency: 'MXN' | 'USD'
  frequency: 'monthly' | 'annual' | 'one_time'
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
  label: 'Alta intención' | 'Intención media' | 'Exploración'
  tone: 'hot' | 'warm' | 'cool'
  note: string
  nextStep: string
}

export const CONTACT = {
  phoneDisplay: '664 630 0473',
  phoneHref: 'tel:6646300473',
  whatsappNumber: '526646300473',
  email: 'info@neartec.com',
  fallbackEmail: 'info@itimbre.com',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
}

export const SERVICE_OPTIONS: Array<{ value: QuoteFocus; label: string; description: string; priced: boolean }> = [
  { value: 'compunegocio', label: 'CompuNegocio / punto de venta', description: 'Licencias por estación para ventas, inventario, reportes y operación diaria.', priced: true },
  { value: 'cn7', label: 'CN7 / nube para operación', description: 'Servidor, base de datos, hospedaje o respaldo para operar con continuidad.', priced: true },
  { value: 'timbres', label: 'Paquetes de timbres CN', description: 'Timbres documentados para operación CompuNegocio.', priced: true },
  { value: 'support', label: 'Soporte técnico remoto', description: 'Horas de soporte, capacitación o acompañamiento remoto.', priced: true },
  { value: 'development', label: 'Desarrollo / ajustes', description: 'Horas para reportes, formatos, configuración o cambios específicos.', priced: true },
  { value: 'implementation', label: 'Implementación remota', description: 'Instalación, configuración, CSD, logo y capacitación inicial.', priced: true },
  { value: 'suite', label: 'Solución total NearTec', description: 'Proyecto combinado: web, sistemas, infraestructura, correo, emailing y soporte.', priced: false },
]

export const SCOPE_NEEDS: Array<{ value: ScopeNeed; label: string; description: string }> = [
  { value: 'web', label: 'Diseño web / landing', description: 'Presencia online, ecommerce, SEO base y formularios.' },
  { value: 'hosting', label: 'Hosting', description: 'Alojamiento para sitio web o servicios.' },
  { value: 'vps', label: 'VPS / shared servers', description: 'Servidor para proyectos con mayor control técnico.' },
  { value: 'ftp', label: 'Servidor FTP', description: 'Transferencia y gestión de archivos empresariales.' },
  { value: 'email', label: 'Correo corporativo', description: 'Comunicación con dominio empresarial.' },
  { value: 'emailing', label: 'Emailing', description: 'Campañas, newsletters y contacto a base segmentada.' },
  { value: 'automation', label: 'CRM / automatización', description: 'Lead management, etiquetas, flujos y seguimiento.' },
  { value: 'fiscal', label: 'Conexión fiscal / iTimbre', description: 'CFDI, timbres, autofactura o integración fiscal.' },
]

export const TIMBRES_PACKAGES = [
  { value: 0, label: 'Sin timbres por ahora', priceMxn: 0 },
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
export const BACKUP_ONLY_MONTHLY_USD = 99

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
  const needsCompu = input.serviceFocus === 'compunegocio' || input.serviceFocus === 'suite'

  if (needsCompu && seats > 0) {
    if (input.billingCycle === 'annual') items.push({ label: 'CompuNegocio anual', amount: getCompuNegocioAnnualPerSeat(seats) * seats, currency: 'MXN', frequency: 'annual', detail: `${seats} estación(es)` })
    else items.push({ label: 'CompuNegocio mensual', amount: getCompuNegocioMonthlyRate(seats) * seats, currency: 'MXN', frequency: 'monthly', detail: `${seats} estación(es)` })
  }

  if (input.includeImplementation || input.serviceFocus === 'implementation') items.push({ label: 'Implementación remota base', amount: IMPLEMENTATION_PRICE_MXN, currency: 'MXN', frequency: 'one_time', detail: 'Instalación, configuración, CSD, logo y capacitación inicial' })
  if (supportHours > 0 || input.serviceFocus === 'support') items.push({ label: 'Soporte técnico remoto', amount: Math.max(1, supportHours) * SUPPORT_HOURLY_PRICE_MXN, currency: 'MXN', frequency: 'one_time', detail: `${Math.max(1, supportHours)} h` })
  if (developmentHours > 0 || input.serviceFocus === 'development') items.push({ label: 'Desarrollo / ajustes', amount: Math.max(1, developmentHours) * DEVELOPMENT_HOURLY_PRICE_MXN, currency: 'MXN', frequency: 'one_time', detail: `${Math.max(1, developmentHours)} h` })

  const timbres = TIMBRES_PACKAGES.find((item) => item.value === input.timbresPackage)
  if ((input.serviceFocus === 'timbres' || timbres?.priceMxn) && timbres && timbres.priceMxn > 0) items.push({ label: timbres.label, amount: timbres.priceMxn, currency: 'MXN', frequency: 'one_time' })

  if (input.cloudPlan === 'cn7_backup') items.push({ label: 'CN7 servidor + respaldo', amount: CN7_BACKUP_MONTHLY_USD, currency: 'USD', frequency: 'monthly' })
  if (input.cloudPlan === 'cn7_hosted') items.push({ label: 'CN7 hospedado en nube', amount: CN7_HOSTED_MONTHLY_USD, currency: 'USD', frequency: 'monthly' })
  if (input.cloudPlan === 'backup_only') items.push({ label: 'Respaldo automático de base de datos', amount: BACKUP_ONLY_MONTHLY_USD, currency: 'USD', frequency: 'monthly' })

  const monthlyMxn = items.filter((i) => i.currency === 'MXN' && i.frequency === 'monthly').reduce((sum, i) => sum + i.amount, 0)
  const annualMxn = items.filter((i) => i.currency === 'MXN' && i.frequency === 'annual').reduce((sum, i) => sum + i.amount, 0)
  const oneTimeMxn = items.filter((i) => i.currency === 'MXN' && i.frequency === 'one_time').reduce((sum, i) => sum + i.amount, 0)
  const monthlyUsd = items.filter((i) => i.currency === 'USD' && i.frequency === 'monthly').reduce((sum, i) => sum + i.amount, 0)

  return { items, monthlyMxn, annualMxn, oneTimeMxn, monthlyUsd, monthlyRecurringLabel: monthlyMxn > 0 ? `${formatMoney(monthlyMxn, 'MXN')} / mes` : null, annualRecurringLabel: annualMxn > 0 ? `${formatMoney(annualMxn, 'MXN')} / año` : null }
}

export function getRecommendedModules(input: NearTecQuoteInput): string[] {
  const modules = new Set<string>()
  const service = SERVICE_OPTIONS.find((item) => item.value === input.serviceFocus)
  if (service) modules.add(service.label)
  if (input.serviceFocus === 'compunegocio' || input.serviceFocus === 'suite') modules.add('CompuNegocio / POS')
  if (input.cloudPlan !== 'none') modules.add('CN7 / nube')
  if (input.timbresPackage > 0 || input.serviceFocus === 'timbres') modules.add('Timbres CN')
  if (input.includeImplementation || input.serviceFocus === 'implementation') modules.add('Implementación')
  if (input.supportHours > 0 || input.serviceFocus === 'support') modules.add('Soporte')
  if (input.developmentHours > 0 || input.serviceFocus === 'development') modules.add('Desarrollo')
  input.scopeNeeds.forEach((need) => modules.add(SCOPE_NEEDS.find((item) => item.value === need)?.label || need))
  return Array.from(modules).slice(0, 10)
}

export function getLeadQualification(input: NearTecQuoteInput): LeadQualification {
  const score =
    (input.serviceFocus === 'suite' ? 30 : 16) +
    (input.serviceFocus === 'compunegocio' ? 26 : 0) +
    (input.seats >= 5 ? 18 : 8) +
    (input.cloudPlan !== 'none' ? 16 : 0) +
    (input.includeImplementation ? 8 : 0) +
    (input.timbresPackage > 0 ? 8 : 0) +
    (input.scopeNeeds.length >= 3 ? 16 : input.scopeNeeds.length * 4) +
    (input.customNeeds.trim().length > 18 ? 10 : 0)

  if (score >= 72) return { label: 'Alta intención', tone: 'hot', note: 'El caso combina operación, infraestructura y alcance. Conviene atenderlo por WhatsApp con prioridad.', nextStep: 'Enviar resumen y agendar diagnóstico.' }
  if (score >= 44) return { label: 'Intención media', tone: 'warm', note: 'Hay una necesidad concreta. El siguiente paso es validar alcance y fechas.', nextStep: 'Aterrizar requerimiento.' }
  return { label: 'Exploración', tone: 'cool', note: 'Aún falta definir prioridad. El diagnóstico ayuda a decidir qué cotizar primero.', nextStep: 'Diagnóstico breve.' }
}
