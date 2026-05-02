export const CONTACT = {
  phoneDisplay: '664 404 6194',
  phoneHref: 'tel:6644046194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  commercialEmail: 'meta@itimbre.com',
  rfc: 'NEA040929DKA',
  legalName: 'NEARTEC',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neartec.mx'

export const navItems = [
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/diseno-web',
    visual: '/images/visuals/visual-web.webp', label: 'Web / Apps' },
  { href: '/crm-automatizacion',
    visual: '/images/visuals/visual-crm.webp', label: 'CRM / IA' },
  { href: '/compunegocio',
    visual: '/images/visuals/visual-compunegocio.webp', label: 'CompuNegocio' },
  { href: '/cn7',
    visual: '/images/visuals/visual-cn7.webp', label: 'CN7 / Nube' },
  { href: '/soporte',
    visual: '/images/visuals/visual-neary.webp', label: 'Soporte' },
]

export const heroMetrics = [
  { label: 'Desarrollo', value: 'Web · Apps · Código' },
  { label: 'Automatización', value: 'CRM · IA · Procesos' },
  { label: 'Operación', value: 'POS · Timbres · Control' },
  { label: 'Infraestructura', value: 'CN7 · Nube · Respaldo' },
]

export const techLayers = [
  {
    title: 'Presencia digital',
    tag: 'Web + landing',
    text: 'Sitios, landings, formularios y rutas claras hacia WhatsApp, diagnóstico o cotización.',
    icon: 'web',
  },
  {
    title: 'Desarrollo y apps',
    tag: 'Código a medida',
    text: 'Interfaces, flujos, módulos y soluciones digitales diseñadas para operar en serio.',
    icon: 'code',
  },
  {
    title: 'CRM, automatización e IA',
    tag: 'Procesos inteligentes',
    text: 'Seguimiento, recordatorios, respuestas, clasificación y automatizaciones aplicadas.',
    icon: 'ai',
  },
  {
    title: 'CompuNegocio',
    tag: 'Operación diaria',
    text: 'Ventas, inventario, usuarios, timbres, reportes, CSD y configuración operativa.',
    icon: 'pos',
  },
  {
    title: 'CN7, nube y respaldo',
    tag: 'Continuidad',
    text: 'Servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP y correo.',
    icon: 'cloud',
  },
  {
    title: 'Soporte e infraestructura',
    tag: 'Evolución técnica',
    text: 'Soporte remoto, capacitación, implementación, cambios mayores y desarrollo continuo.',
    icon: 'support',
  },
] as const

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    visual: '/images/visuals/visual-web.webp',
    tag: 'Desarrollo',
    summary: 'Diseñamos presencia digital, aplicaciones, interfaces y flujos que explican, venden y se integran con la operación.',
    bullets: ['Sitios y landings', 'Apps y módulos', 'SEO técnico + performance'],
    metric: 'Presencia sólida',
    asset: '/images/visuals/visual-web.webp',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    visual: '/images/visuals/visual-crm.webp',
    tag: 'Automatización',
    summary: 'Ordenamos prospectos, seguimiento, tareas, WhatsApp y procesos repetitivos con automatización e inteligencia aplicada.',
    bullets: ['CRM y seguimiento', 'Automatizaciones', 'IA operativa'],
    metric: 'Más respuesta',
    asset: '/images/visuals/visual-crm.webp',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio, POS, timbres y operación',
    href: '/compunegocio',
    visual: '/images/visuals/visual-compunegocio.webp',
    tag: 'Operación',
    summary: 'Implementamos CompuNegocio para controlar ventas, inventario, usuarios, timbres, reportes y configuración del sistema.',
    bullets: ['Desde $450 MXN / estación', 'Implementación remota', 'Timbres y reportes'],
    metric: 'Control diario',
    asset: '/images/visuals/visual-compunegocio.webp',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    visual: '/images/visuals/visual-cn7.webp',
    tag: 'Infraestructura',
    summary: 'Configuramos CN7, respaldo automático, nube, hosting, VPS, FTP y correo para reducir riesgos operativos.',
    bullets: ['CN7 desde $99 USD', 'Respaldo automático', 'Hosting y correo'],
    metric: 'Continuidad real',
    asset: '/images/visuals/visual-cn7.webp',
    accent: 'aqua',
  },
] as const

export const processFlow = [
  { step: '01', title: 'Diagnóstico', text: 'Ubicamos si el problema es web, sistema, proceso, nube, soporte, fiscal o integración.' },
  { step: '02', title: 'Arquitectura', text: 'Definimos la ruta técnica: qué se desarrolla, qué se integra y qué se automatiza primero.' },
  { step: '03', title: 'Cotización', text: 'Separa precios base, horas, licencias, CN7, timbres y servicios a medida sin mezclar alcances.' },
  { step: '04', title: 'Implementación', text: 'Configuración, desarrollo, conexión, pruebas, capacitación y salida controlada.' },
  { step: '05', title: 'Operación', text: 'Soporte, respaldos, mejora continua, reportes y crecimiento del sistema.' },
]

export const pipeline = [
  'Nuevo lead',
  'Contactado',
  'Diagnóstico agendado',
  'Diagnóstico realizado',
  'Cotización enviada',
  'Negociación',
  'Onboarding',
]

export const scoreCriteria = [
  { label: 'Empresa formal / RFC activo', points: 20 },
  { label: 'Decisor o influencia directa', points: 20 },
  { label: 'Dolor claro y urgente', points: 20 },
  { label: 'Volumen o recurrencia', points: 20 },
  { label: 'Presupuesto / autoridad', points: 10 },
  { label: 'Implementación menor a 30 días', points: 10 },
]

export const slaItems = [
  ['Lead nuevo', 'Respuesta en menos de 10 minutos hábiles'],
  ['Lead calificado', 'Seguimiento el mismo día'],
  ['Diagnóstico realizado', 'Resumen en 24h hábiles'],
  ['Cotización enviada', '24 a 48h según alcance'],
]

export const pricingFamilies = [
  {
    title: 'CompuNegocio',
    eyebrow: 'Operación',
    price: 'Desde $450 MXN',
    note: 'por estación / mes',
    items: ['1 a 3 licencias: $450 mensual', '4 a 8 licencias: $400 mensual', '9+ licencias: $350 mensual'],
    cta: '/compunegocio',
  },
  {
    title: 'CN7 / Nube',
    eyebrow: 'Continuidad',
    price: 'Desde $99 USD',
    note: 'por mes',
    items: ['CN7 con respaldo: $99 USD', 'CN7 hospedado: $149 USD', 'Respaldo automático: $99 USD'],
    cta: '/cn7',
  },
  {
    title: 'Implementación',
    eyebrow: 'Arranque',
    price: '$1,500 MXN',
    note: 'pago único base',
    items: ['Instalación remota', 'Configuración CSD y logo', '2 horas de capacitación inicial'],
    cta: '/cotizador',
  },
  {
    title: 'Soporte / Desarrollo',
    eyebrow: 'Evolución',
    price: 'Desde $499 MXN',
    note: 'por hora con póliza',
    items: ['Soporte con póliza: $499/h', 'Desarrollo con póliza: $999/h', 'Regular sin póliza desde $999/h'],
    cta: '/soporte',
  },
] as const

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

export const scenarios = [
  {
    title: 'Empresa que necesita sistema, no solo página',
    text: 'Creamos la presencia digital y conectamos formularios, CRM, WhatsApp, cotización y operación.',
  },
  {
    title: 'Negocio con mostrador, ventas e inventario',
    text: 'CompuNegocio ordena operación diaria y puede conectarse con timbres, soporte, CN7 y respaldo.',
  },
  {
    title: 'PyME que ya no puede depender de una computadora',
    text: 'CN7, nube y respaldo reducen riesgo local y preparan la operación para crecer con continuidad.',
  },
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
