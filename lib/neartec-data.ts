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
    title: 'Desarrollo web, apps y experiencias digitales',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary: 'Creamos páginas, landings, interfaces y proyectos digitales claros, rápidos y preparados para operar, vender y escalar.',
    bullets: ['Sitios web y landings', 'Apps y flujos a medida', 'SEO técnico + velocidad'],
    metric: 'Más presencia',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e inteligencia artificial aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary: 'Conectamos procesos, seguimiento, formularios, WhatsApp y automatizaciones para reducir trabajo repetitivo y mejorar respuesta.',
    bullets: ['CRM y seguimiento', 'Automatizaciones', 'IA aplicada a procesos'],
    metric: 'Más orden',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio, punto de venta, timbres y operación',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Implementamos CompuNegocio con precios documentados para ventas, inventario, usuarios, timbres y operación diaria.',
    bullets: ['Desde $450 MXN por estación / mes', 'Implementación remota base', 'Timbres y control operativo'],
    metric: 'Más control',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo, hosting y soporte técnico',
    href: '/cn7',
    tag: 'Infraestructura',
    summary: 'Infraestructura para operar con más estabilidad: CN7, nube, respaldo, hosting, soporte, continuidad y administración técnica.',
    bullets: ['CN7 desde $99 USD / mes', 'Respaldo y recuperación', 'Soporte remoto'],
    metric: 'Más continuidad',
    accent: 'aqua',
  },
]

export const proofStats = [
  ['Desarrollo', 'web, apps y código'],
  ['Automatización', 'CRM, IA y procesos'],
  ['Operación', 'POS, timbres y control'],
  ['Infraestructura', 'nube, respaldo y soporte'],
]

export const leadPains = [
  ['Tu empresa necesita tecnología, no parches aislados', 'Una web, un sistema o una automatización solo funcionan bien cuando se integran con la operación real.'],
  ['Tus herramientas no hablan entre sí', 'Cuando web, WhatsApp, punto de venta, correo, nube y soporte viven separados, el equipo pierde tiempo y control.'],
  ['Cotizar, operar y responder consume demasiado', 'La tecnología correcta debe simplificar el trabajo diario, acelerar respuestas y sostener el crecimiento.'],
  ['No tienes una ruta tecnológica clara', 'NearTec ayuda a definir qué desarrollar, integrar, automatizar, respaldar o mejorar primero.'],
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
  { label: 'Soporte técnico remoto con póliza', price: '$499 MXN por hora' },
  { label: 'Desarrollo / ajustes con póliza', price: '$999 MXN por hora' },
  { label: 'Soporte regular sin póliza', price: '$999 MXN por hora' },
  { label: 'Desarrollo regular sin póliza', price: '$1,499 MXN por hora' },
]

export const stampPackages = [
  { qty: 365, price: 730 },
  { qty: 500, price: 1000 },
  { qty: 1000, price: 1500 },
  { qty: 2000, price: 2800 },
  { qty: 3000, price: 4200 },
  { qty: 4000, price: 5200 },
  { qty: 5000, price: 6250 },
  { qty: 6000, price: 7200 },
  { qty: 8000, price: 8800 },
  { qty: 10000, price: 9500 },
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
}
