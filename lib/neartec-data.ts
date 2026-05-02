export const CONTACT = {
  phoneDisplay: '664 404 6194',
  phoneHref: 'tel:6644046194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  commercialEmail: 'meta@itimbre.com',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
  rfc: 'NEA040929DKA',
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neartec.mx'

export const navItems = [
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/cn7', label: 'CN7/Nube' },
  { href: '/crm-automatizacion', label: 'CRM' },
  { href: '/diseno-web', label: 'Web' },
  { href: '/soporte', label: 'Soporte' },
]

export const solutions = [
  {
    title: 'Web, landings y desarrollo digital que sí explican y sí convierten',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary: 'Creamos sitios y experiencias digitales claras, rápidas y alineadas a tu operación comercial y técnica.',
    bullets: ['Sitios web y landings', 'Base SEO + velocidad', 'Desarrollo con enfoque real de negocio'],
    metric: 'Más presencia',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e inteligencia operativa',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary: 'Ordenamos seguimiento, automatizaciones y procesos para responder mejor y trabajar con menos fricción.',
    bullets: ['Seguimiento centralizado', 'Automatización comercial', 'WhatsApp y flujos conectados'],
    metric: 'Más orden',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio para vender, cobrar y operar con control',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Implementamos CompuNegocio con precios reales documentados para ventas, inventario, usuarios y timbrado.',
    bullets: ['Desde $450 MXN por estación / mes', 'Implementación remota base', 'Timbres y operación'],
    metric: 'Más control',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo y continuidad',
    href: '/cn7',
    tag: 'Infraestructura',
    summary: 'Llevamos tu operación a nube o respaldo para que tu empresa trabaje con más estabilidad y continuidad.',
    bullets: ['CN7 desde $99 USD / mes', 'Respaldo y recuperación', 'Hospedaje administrado'],
    metric: 'Más continuidad',
    accent: 'aqua',
  },
]

export const proofStats = [
  ['Web y apps', 'presencia más sólida'],
  ['Automatización', 'menos trabajo repetitivo'],
  ['Operación', 'más control diario'],
  ['Nube y soporte', 'continuidad real'],
]

export const leadPains = [
  ['Tu negocio necesita más que solo publicidad', 'Si la parte técnica y operativa no está bien resuelta, crecer se vuelve más lento y más frágil.'],
  ['Tus herramientas no están conectadas', 'Cuando web, seguimiento, operación y soporte viven separados, el negocio pierde claridad.'],
  ['Cotizar, operar y responder consume demasiado tiempo', 'La tecnología correcta debe simplificar el trabajo, no complicarlo más.'],
  ['No tienes una ruta tecnológica clara', 'NearTec ayuda a definir qué desarrollar, integrar, automatizar o respaldar primero.'],
]

export const compuPricing = [
  { range: '1 a 3 licencias', monthly: 450, annual: 4050 },
  { range: '4 a 8 licencias', monthly: 400, annual: 3600 },
  { range: '9 o más licencias', monthly: 350, annual: 3150 },
]

export const cn7Pricing = [
  { label: 'CN7 con respaldo', amount: 99, currency: 'USD', period: 'mes' },
  { label: 'CN7 hospedado', amount: 149, currency: 'USD', period: 'mes' },
  { label: 'Respaldo automático', amount: 99, currency: 'USD', period: 'mes' },
]

export const serviceRates = [
  { label: 'Implementación remota base', price: '$1,500 MXN pago único' },
  { label: 'Soporte técnico remoto', price: '$499 MXN por hora' },
  { label: 'Desarrollo / ajustes', price: '$999 MXN por hora' },
]

export const stampPackages = [
  { qty: 365, price: 730 }, { qty: 500, price: 1000 }, { qty: 1000, price: 1500 },
  { qty: 2000, price: 2800 }, { qty: 3000, price: 4200 }, { qty: 5000, price: 6250 },
  { qty: 8000, price: 8800 }, { qty: 10000, price: 9500 },
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
}
