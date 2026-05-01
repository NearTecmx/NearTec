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
    title: 'Web que convierte',
    href: '/diseno-web',
    tag: 'Captación',
    summary: 'Sitios y landings con velocidad, SEO técnico, mensajes para leads y rutas claras hacia WhatsApp o cotización.',
    bullets: ['Landing por campaña', 'Formularios con intención', 'SEO técnico + medición'],
    metric: 'Lead-ready',
    accent: 'lime',
  },
  {
    title: 'CRM operativo',
    href: '/crm-automatizacion',
    tag: 'Seguimiento',
    summary: 'Embudo, etiquetas, prioridades, recordatorios y webhook para que ningún prospecto llegue sin contexto.',
    bullets: ['Scoring automático', 'SLA de contacto', 'WhatsApp + correo'],
    metric: 'Sin fugas',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Punto de venta, usuarios, timbres, inventario, reportes y soporte con precios documentados por estación.',
    bullets: ['$350–$450 MXN/estación', 'Implementación remota', 'Timbres CN'],
    metric: 'POS controlado',
    accent: 'solar',
  },
  {
    title: 'CN7 + nube',
    href: '/cn7',
    tag: 'Continuidad',
    summary: 'Servidor, base de datos, respaldo, hospedaje, correo y soporte para que la operación no dependa del caos local.',
    bullets: ['CN7 desde $99 USD/mes', 'Respaldo y recuperación', 'Hospedaje administrado'],
    metric: 'Siempre arriba',
    accent: 'aqua',
  },
]

export const proofStats = [
  ['20+ años', 'trayectoria operativa'],
  ['1 sistema', 'web + CRM + POS + nube'],
  ['4 rutas', 'captar, filtrar, cotizar, cerrar'],
  ['24/7', 'base para continuidad digital'],
]

export const leadPains = [
  ['La web no vende', 'El tráfico llega, pero no entiende qué pedir ni deja datos útiles.'],
  ['WhatsApp se satura', 'Mensajes sin origen, sin prioridad y sin historial comercial.'],
  ['El asesor repite todo', 'Pierde tiempo calificando desde cero en vez de cerrar.'],
  ['La operación está separada', 'POS, nube, correo, timbres y soporte no hablan entre sí.'],
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
  { label: 'Soporte técnico con póliza', price: '$499 MXN por hora' },
  { label: 'Desarrollo con póliza', price: '$999 MXN por hora' },
  { label: 'Soporte regular sin póliza', price: '$999 MXN por hora' },
  { label: 'Desarrollo regular sin póliza', price: '$1,499 MXN por hora' },
]

export const stampPackages = [
  { qty: 365, price: 730 }, { qty: 500, price: 1000 }, { qty: 1000, price: 1500 },
  { qty: 2000, price: 2800 }, { qty: 3000, price: 4200 }, { qty: 5000, price: 6250 },
  { qty: 8000, price: 8800 }, { qty: 10000, price: 9500 },
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
}
