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
    title: 'Sitios web y landings que sí explican y sí convierten',
    href: '/diseno-web',
    tag: 'Captación',
    summary: 'Creamos páginas claras, rápidas y preparadas para pauta, búsqueda y WhatsApp, para que el visitante entienda qué ofreces y cómo contactarte.',
    bullets: ['Mensajes pensados para vender', 'Formularios claros y accionables', 'SEO técnico + velocidad'],
    metric: 'Más claridad',
    accent: 'lime',
  },
  {
    title: 'CRM y automatización para responder mejor y cerrar antes',
    href: '/crm-automatizacion',
    tag: 'Seguimiento',
    summary: 'Ordenamos prospectos, prioridades y seguimientos para que cada oportunidad reciba respuesta a tiempo y no se pierda entre mensajes.',
    bullets: ['Prioridad por intención', 'Recordatorios y seguimiento', 'WhatsApp + correo conectados'],
    metric: 'Menos fugas',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio para vender, cobrar y operar con más control',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Implementamos CompuNegocio con precios base documentados para que tengas ventas, inventario, usuarios y timbres bajo control.',
    bullets: ['Licencias por estación', 'Implementación remota', 'Timbres listos para cotizar'],
    metric: 'Operación clara',
    accent: 'solar',
  },
  {
    title: 'CN7, nube y respaldo para que tu operación no se detenga',
    href: '/cn7',
    tag: 'Continuidad',
    summary: 'Llevamos tu operación a nube o respaldo para que puedas trabajar con más estabilidad, menos riesgo y mejor continuidad.',
    bullets: ['CN7 desde $99 USD/mes', 'Respaldo y recuperación', 'Hospedaje administrado'],
    metric: 'Más continuidad',
    accent: 'aqua',
  },
]

export const proofStats = [
  ['1 sola ruta', 'de captación a cierre'],
  ['Web + CRM', 'integrados para vender'],
  ['Cotización', 'lista para compartir'],
  ['Soporte', 'para seguir operando'],
]

export const leadPains = [
  ['Tu sitio recibe visitas, pero no genera contactos útiles', 'Si el visitante no entiende rápido qué vendes ni qué sigue, se va sin preguntar.'],
  ['WhatsApp se llena, pero no avanza', 'Cuando todo llega sin orden, responder consume tiempo y vender se vuelve más lento.'],
  ['Cotizar toma demasiado', 'Si cada propuesta arranca desde cero, el prospecto se enfría y la oportunidad se pierde.'],
  ['Tu operación depende de demasiadas piezas separadas', 'Web, seguimiento, punto de venta, nube y soporte deben trabajar juntos para crecer con orden.'],
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
