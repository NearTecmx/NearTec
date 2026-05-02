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
  { href: '/diseno-web', label: 'Web y apps' },
  { href: '/crm-automatizacion', label: 'Automatización e IA' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/cn7', label: 'CN7 / nube' },
  { href: '/soporte', label: 'Soporte' },
]

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary:
      'Sitios web, landings, interfaces, aplicaciones y módulos digitales para explicar, vender, automatizar y operar mejor.',
    bullets: ['Sitios y landings rápidos', 'Apps y paneles a medida', 'SEO técnico, formularios e integraciones'],
    metric: 'Presencia + código',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary:
      'CRM, flujos de seguimiento, WhatsApp, formularios, alertas e inteligencia artificial aplicada a procesos reales.',
    bullets: ['Seguimiento y recordatorios', 'Automatización de tareas', 'IA para atención, operación y análisis'],
    metric: 'Procesos claros',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio, punto de venta y timbres',
    href: '/compunegocio',
    tag: 'Operación',
    summary:
      'Implementación de CompuNegocio para ventas, inventario, usuarios, reportes, timbres y operación diaria.',
    bullets: ['Desde $450 MXN por estación / mes', 'Implementación remota base $1,500 MXN', 'Timbres CN y soporte operativo'],
    metric: 'POS + control',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    tag: 'Infraestructura',
    summary:
      'CN7, respaldo, nube, hosting, VPS, correo, FTP, continuidad y administración técnica para reducir riesgos.',
    bullets: ['CN7 desde $99 USD / mes', 'Nube, respaldo y recuperación', 'Hosting, VPS, correo y soporte'],
    metric: 'Continuidad',
    accent: 'aqua',
  },
  {
    title: 'Soporte, mantenimiento y evolución',
    href: '/soporte',
    tag: 'Soporte',
    summary:
      'Atención remota, configuración, ajustes, capacitación, mantenimiento, mejoras y desarrollo evolutivo.',
    bullets: ['Soporte con póliza desde $499 MXN/h', 'Desarrollo con póliza desde $999 MXN/h', 'Acompañamiento remoto'],
    metric: 'Operación estable',
    accent: 'lime',
  },
]

export const techLayers = [
  ['Presencia digital', 'Sitios web, landings, SEO técnico, formularios y rutas de contacto.'],
  ['Desarrollo y apps', 'Interfaces, paneles, herramientas internas y módulos a medida.'],
  ['Automatización e IA', 'CRM, WhatsApp, alertas, seguimiento, análisis y tareas repetitivas automatizadas.'],
  ['Operación comercial', 'CompuNegocio, ventas, inventario, clientes, timbres y reportes.'],
  ['Infraestructura', 'CN7, nube, respaldo, hosting, VPS, correo, FTP y continuidad.'],
  ['Soporte y seguridad', 'Soporte remoto, configuración, mantenimiento, recuperación y buenas prácticas.'],
] as const

export const proofStats = [
  ['Web + apps', 'presencia y herramientas digitales'],
  ['CRM + IA', 'automatización y seguimiento'],
  ['POS + timbres', 'operación diaria con control'],
  ['CN7 + nube', 'respaldo e infraestructura'],
]

export const leadPains = [
  ['Tecnología dispersa', 'Web, WhatsApp, correo, punto de venta, nube y soporte no deben vivir como piezas sueltas.'],
  ['Procesos manuales', 'Automatizar tareas repetitivas libera tiempo y reduce errores operativos.'],
  ['Operación frágil', 'Una sola computadora, respaldos débiles o sistemas aislados ponen en riesgo la continuidad.'],
  ['Cotizaciones sin contexto', 'Antes de comprar tecnología conviene definir alcance, prioridad, costos base y siguiente paso.'],
]

export const priceSignals = [
  ['CompuNegocio', 'desde $450 MXN por estación / mes'],
  ['CN7 con respaldo', 'desde $99 USD / mes'],
  ['Implementación base', '$1,500 MXN pago único'],
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
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
