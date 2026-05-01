export const CONTACT = {
  phoneDisplay: '664 630 0473',
  phoneHref: 'tel:6646300473',
  whatsappNumber: '526646300473',
  email: 'info@itimbre.com',
  commercialEmail: 'itimbre.achavez@gmail.com',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
  rfc: 'NEA040929DKA',
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neartec.mx'

export const navItems = [
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/cn7', label: 'CN7/Nube' },
  { href: '/crm-automatizacion', label: 'CRM' },
  { href: '/diseno-web', label: 'Web' },
  { href: '/soporte', label: 'Soporte' },
]

export const solutions = [
  {
    title: 'Web comercial',
    href: '/diseno-web',
    tag: 'Captación',
    summary: 'Landing, sitio o ecommerce con mensaje claro, formularios, WhatsApp, SEO técnico y medición.',
    bullets: ['Copy para leads reales', 'Velocidad y estructura SEO', 'Formulario + WhatsApp + eventos'],
    accent: 'from-lime-200 to-white',
  },
  {
    title: 'CRM y automatización',
    href: '/crm-automatizacion',
    tag: 'Seguimiento',
    summary: 'Filtros, etiquetas, prioridades y rutas de contacto para que ventas reciba prospectos con contexto.',
    bullets: ['Lead scoring', 'SLA comercial', 'WhatsApp y correo conectados'],
    accent: 'from-emerald-100 to-white',
  },
  {
    title: 'CompuNegocio',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Punto de venta, inventario, usuarios, timbres, reportes y operación diaria con precios base visibles.',
    bullets: ['$350–$450 MXN/estación', 'Implementación base $1,500 MXN', 'Timbres CN documentados'],
    accent: 'from-yellow-100 to-white',
  },
  {
    title: 'CN7, hosting y continuidad',
    href: '/cn7',
    tag: 'Infraestructura',
    summary: 'Nube, respaldo, hosting, VPS, FTP, correo y soporte remoto para sostener la operación.',
    bullets: ['CN7 desde $99 USD/mes', 'Hosting y VPS por alcance', 'Respaldo y continuidad'],
    accent: 'from-sky-100 to-white',
  },
]

export const proofStats = [
  ['+20 años', 'trayectoria operativa'],
  ['Tijuana', 'atención local/remota'],
  ['Web + CRM + POS', 'ecosistema conectado'],
  ['PDF + WhatsApp', 'cotización accionable'],
]

export const leadPains = [
  ['No recibes leads claros', 'Tu web se ve activa, pero el prospecto no entiende qué pedir ni cómo avanzar.'],
  ['WhatsApp está desordenado', 'Los mensajes llegan sin contexto, sin prioridad y sin ruta de seguimiento.'],
  ['Operación fragmentada', 'POS, nube, correo, timbres y soporte viven separados y se vuelven fricción.'],
  ['Cotizas tarde', 'El asesor pierde tiempo explicando desde cero en vez de cerrar oportunidades reales.'],
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
