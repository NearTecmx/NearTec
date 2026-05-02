export const siteUrl = 'https://neartecmx.vercel.app'

export const SITE = {
  name: 'NearTec',
  legalName: 'NEARTEC',
  url: siteUrl,
  title: 'NearTec | Desarrollo tecnológico, sistemas, web, nube y soporte para empresas',
  description:
    'NearTec desarrolla e integra sitios web, apps, sistemas, CRM, automatización, IA, CompuNegocio, CN7, nube, respaldo, soporte e infraestructura para que tu empresa venda, opere y escale con control.',
  ogTitle: 'NearTec | Tecnología para vender, operar y escalar',
  ogDescription:
    'Desarrollo tecnológico, sistemas, web, CRM, IA, CompuNegocio, CN7, nube y soporte para empresas.',
}

export const CONTACT = {
  legalName: 'NEARTEC',
  phoneDisplay: '664 404 6194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  rfc: 'NEA040929DKA',
  address: 'Benito Juárez 2034 601, Zona Centro, Tijuana, Baja California, México, C.P. 22000',
}

export const navItems = [
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Web / Apps', href: '/diseno-web' },
  { label: 'CRM / IA', href: '/crm-automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'CN7 / Nube', href: '/cn7' },
  { label: 'Cotizador', href: '/cotizador' },
] as const

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary:
      'Diseñamos sitios web, landings, apps, paneles, módulos e integraciones preparadas para explicar, vender, automatizar y operar mejor.',
    bullets: ['Sitios web y landings', 'Apps y paneles', 'Integraciones a medida'],
    metric: 'Presencia sólida',
    visual: '/images/visuals/visual-web.webp',
    asset: '/images/visuals/visual-web.webp',
    accent: 'web',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary:
      'Ordenamos prospectos, seguimiento, tareas, WhatsApp, respuestas y procesos repetitivos con automatización e inteligencia aplicada.',
    bullets: ['CRM y seguimiento', 'Automatizaciones', 'IA operativa'],
    metric: 'Menos fugas',
    visual: '/images/visuals/visual-crm.webp',
    asset: '/images/visuals/visual-crm.webp',
    accent: 'crm',
  },
  {
    title: 'CompuNegocio, POS, timbres y operación',
    href: '/compunegocio',
    tag: 'Operación',
    summary:
      'Implementamos CompuNegocio para controlar ventas, inventario, usuarios, reportes, timbres, CSD y configuración operativa.',
    bullets: ['Ventas e inventario', 'Usuarios y reportes', 'Timbres y CSD'],
    metric: 'Desde $450 MXN',
    visual: '/images/visuals/visual-compunegocio.webp',
    asset: '/images/visuals/visual-compunegocio.webp',
    accent: 'pos',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    tag: 'Continuidad',
    summary:
      'Llevamos servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP, correo e infraestructura a una operación más estable.',
    bullets: ['CN7', 'Respaldo automático', 'Hosting e infraestructura'],
    metric: 'Desde $99 USD',
    visual: '/images/visuals/visual-cn7.webp',
    asset: '/images/visuals/visual-cn7.webp',
    accent: 'cloud',
  },
  {
    title: 'Soporte técnico y evolución continua',
    href: '/soporte',
    tag: 'Soporte',
    summary:
      'Acompañamos la operación con soporte, mantenimiento, configuración, monitoreo, ajustes y mejoras para que la tecnología siga funcionando.',
    bullets: ['Soporte remoto', 'Mantenimiento', 'Mejora continua'],
    metric: 'Atención técnica',
    visual: '/images/visuals/hero-home-desktop.webp',
    asset: '/images/visuals/hero-home-desktop.webp',
    accent: 'support',
  },
] as const

export const solutionLinks = solutions

export const techLayers = [
  {
    label: 'Web + landing',
    tag: 'Presencia',
    icon: 'web',
    title: 'Presencia digital',
    text:
      'Sitios, landings, formularios y rutas claras hacia WhatsApp, diagnóstico, cotización o CRM.',
  },
  {
    label: 'Código a medida',
    tag: 'Desarrollo',
    icon: 'code',
    title: 'Desarrollo y apps',
    text:
      'Interfaces, flujos, módulos, paneles y soluciones digitales diseñadas para operar en serio.',
  },
  {
    label: 'Procesos inteligentes',
    tag: 'Automatización',
    icon: 'automation',
    title: 'CRM, automatización e IA',
    text:
      'Seguimiento, recordatorios, respuestas, clasificación, tareas y automatizaciones aplicadas.',
  },
  {
    label: 'Operación diaria',
    tag: 'POS + timbres',
    icon: 'pos',
    title: 'CompuNegocio',
    text:
      'Ventas, inventario, usuarios, timbres, reportes, CSD y configuración operativa.',
  },
  {
    label: 'Continuidad',
    tag: 'Nube',
    icon: 'cloud',
    title: 'CN7, nube y respaldo',
    text:
      'Servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP y correo.',
  },
  {
    label: 'Evolución técnica',
    tag: 'Soporte',
    icon: 'support',
    title: 'Soporte e infraestructura',
    text:
      'Atención técnica, mantenimiento, ajustes, monitoreo, soporte remoto y mejora continua.',
  },
] as const

export const ecosystemLayers = techLayers

export const heroMetrics = [
  { label: 'Desarrollo', value: 'Web + Apps', text: 'Presencia digital, sistemas y paneles a medida' },
  { label: 'Automatización', value: 'CRM + IA', text: 'Seguimiento, tareas y procesos inteligentes' },
  { label: 'Operación', value: 'POS + Timbres', text: 'CompuNegocio, ventas, inventario y reportes' },
  { label: 'Continuidad', value: 'CN7 + Nube', text: 'Respaldo, hosting, VPS, FTP, correo y soporte' },
] as const

export const processFlow = [
  { step: '01', title: 'Diagnóstico', text: 'Entendemos qué necesita la empresa: vender, operar, automatizar, respaldarse o integrar sistemas.' },
  { step: '02', title: 'Arquitectura', text: 'Definimos la ruta tecnológica: web, app, CRM, IA, CompuNegocio, CN7, nube o desarrollo a medida.' },
  { step: '03', title: 'Implementación', text: 'Configuramos, desarrollamos, conectamos y dejamos la solución funcionando con datos reales.' },
  { step: '04', title: 'Operación', text: 'Acompañamos con soporte, seguimiento, mejoras, respaldo y continuidad técnica.' },
] as const

export const pipeline = [
  'Lead',
  'Diagnóstico',
  'Propuesta',
  'Cotización',
  'Implementación',
  'Operación',
  'Soporte',
] as const

export const scoreCriteria = [
  { label: 'Empresa formal / RFC activo', points: 20 },
  { label: 'Decisor o influencia directa', points: 20 },
  { label: 'Dolor claro y urgente', points: 20 },
  { label: 'Volumen o recurrencia', points: 20 },
  { label: 'Presupuesto / autoridad', points: 10 },
  { label: 'Implementación menor a 30 días', points: 10 },
] as const

export const slaItems = [
  ['Lead nuevo', 'Respuesta en menos de 10 minutos hábiles'],
  ['Lead calificado', 'Seguimiento el mismo día'],
  ['Diagnóstico realizado', 'Ruta y próximos pasos en 24h hábiles'],
  ['Cotización enviada', 'Entrega en 24–48h según alcance'],
] as const

export const pricingFamilies = [
  {
    eyebrow: 'Operación',
    title: 'CompuNegocio',
    price: 'Desde $450 MXN / estación',
    note: 'Licencias por estación, implementación y soporte según alcance.',
    cta: '/compunegocio',
    items: [
      '1 a 3 licencias: $450 MXN / mes',
      '4 a 8 licencias: $400 MXN / mes',
      '9 o más licencias: $350 MXN / mes',
      'Implementación base: $1,500 MXN',
    ],
  },
  {
    eyebrow: 'Continuidad',
    title: 'CN7 / Nube',
    price: 'Desde $99 USD / mes',
    note: 'Servidor, base de datos, respaldo automático y continuidad.',
    cta: '/cn7',
    items: [
      'CN7 con respaldo: $99 USD / mes',
      'CN7 hospedado en nube: $149 USD / mes',
      'Respaldo automático: $99 USD / mes',
    ],
  },
  {
    eyebrow: 'Soporte',
    title: 'Soporte y desarrollo',
    price: 'Por hora o proyecto',
    note: 'Soporte, capacitación, desarrollo e integraciones.',
    cta: '/soporte',
    items: [
      'Soporte con póliza: $499 MXN / hora',
      'Desarrollo con póliza: $999 MXN / hora',
      'Soporte regular: $999 MXN / hora',
      'Desarrollo regular: $1,499 MXN / hora',
    ],
  },
] as const

export const scenarios = [
  {
    title: 'Empresa que necesita presencia digital seria',
    text:
      'Requiere sitio, landing, formularios, WhatsApp, SEO técnico, paneles o apps para explicar mejor lo que vende.',
    tag: 'Web / Apps',
  },
  {
    title: 'Negocio con operación desordenada',
    text:
      'Necesita controlar ventas, inventario, usuarios, timbres, reportes, CSD y configuración operativa.',
    tag: 'CompuNegocio',
  },
  {
    title: 'Equipo que pierde seguimiento',
    text:
      'Necesita CRM, automatización, recordatorios, WhatsApp y clasificación de oportunidades.',
    tag: 'CRM / IA',
  },
  {
    title: 'Empresa que depende de una máquina local',
    text:
      'Necesita CN7, respaldo, nube, hosting, VPS, FTP, correo, infraestructura y soporte para operar con continuidad.',
    tag: 'CN7 / Nube',
  },
] as const

const visualMap: Record<string, string> = {
  '/': '/images/visuals/hero-home-desktop.webp',
  '/landing': '/images/visuals/hero-landing-desktop.webp',
  '/diseno-web': '/images/visuals/visual-web.webp',
  '/crm-automatizacion': '/images/visuals/visual-crm.webp',
  '/compunegocio': '/images/visuals/visual-compunegocio.webp',
  '/cn7': '/images/visuals/visual-cn7.webp',
  '/cotizador': '/images/visuals/visual-cotizador.webp',
  '/soporte': '/images/visuals/hero-home-desktop.webp',
  '/soluciones': '/images/visuals/hero-home-desktop.webp',
  '/casos': '/images/visuals/hero-home-desktop.webp',
  '/recursos': '/images/visuals/hero-home-desktop.webp',
  '/contacto': '/images/visuals/hero-home-desktop.webp',
}

const kindMap: Record<string, string> = {
  web: '/diseno-web',
  crm: '/crm-automatizacion',
  compunegocio: '/compunegocio',
  cn7: '/cn7',
  soporte: '/soporte',
  soluciones: '/soluciones',
  casos: '/casos',
  recursos: '/recursos',
  contacto: '/contacto',
}

export function kindToHref(kind: string) {
  return kindMap[kind] || `/${kind.replace(/^\//, '')}`
}

export function getSolutionVisual(input: string) {
  const href = input.startsWith('/') ? input : kindToHref(input)
  return visualMap[href] || '/images/visuals/hero-home-desktop.webp'
}
