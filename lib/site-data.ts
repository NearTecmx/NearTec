export const CONTACT = {
  phoneDisplay: '664 404 6194',
  phoneHref: 'tel:6644046194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  commercialEmail: 'meta@itimbre.com',
  legalPhoneDisplay: '664 404 6194',
  legalEmail: 'meta@itimbre.com',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
  rfc: 'NEA040929DKA',
  legalName: 'NEARTEC',
  startDate: '29 de septiembre de 2004',
  status: 'Activo',
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neartec.mx'

export const navItems = [
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/diseno-web', label: 'Web / Apps' },
  { href: '/crm-automatizacion', label: 'CRM / IA' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/cn7', label: 'CN7 / Nube' },
  { href: '/soporte', label: 'Soporte' },
]

export const techLayers = [
  {
    title: 'Presencia digital',
    text: 'Sitios web, landings, SEO técnico, formularios y rutas claras hacia WhatsApp o cotización.',
    tag: 'Web + lead flow',
  },
  {
    title: 'Desarrollo y apps',
    text: 'Interfaces, paneles, herramientas internas y módulos digitales hechos a la medida del proceso.',
    tag: 'Código útil',
  },
  {
    title: 'CRM, automatización e IA',
    text: 'Seguimiento, formularios, alertas, WhatsApp, tareas repetitivas e inteligencia aplicada a operación.',
    tag: 'Seguimiento',
  },
  {
    title: 'Operación comercial',
    text: 'CompuNegocio para ventas, inventario, usuarios, reportes, timbres y control diario.',
    tag: 'POS + timbres',
  },
  {
    title: 'Infraestructura',
    text: 'CN7, nube, respaldo, hosting, VPS, FTP, correo corporativo y continuidad operativa.',
    tag: 'Nube + respaldo',
  },
  {
    title: 'Soporte y evolución',
    text: 'Soporte remoto, configuración, capacitación, mantenimiento, mejoras y desarrollo evolutivo.',
    tag: 'Acompañamiento',
  },
] as const

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary: 'Sitios, landings, apps, interfaces y módulos digitales para explicar, vender, automatizar y operar mejor.',
    bullets: ['Sitios y landings rápidos', 'Apps y paneles a medida', 'SEO técnico + formularios + tracking'],
    metric: 'Presencia + código',
    visual: '/images/visuals/visual-web.webp',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary: 'CRM, scoring, WhatsApp, formularios, alertas e IA aplicada a procesos comerciales y operativos reales.',
    bullets: ['Seguimiento y recordatorios', 'Calificación de prospectos', 'IA para atención, operación y análisis'],
    metric: 'Procesos claros',
    visual: '/images/visuals/visual-crm.webp',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio, punto de venta y timbres',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Implementación de CompuNegocio para ventas, inventario, usuarios, reportes, timbres y operación diaria.',
    bullets: ['Desde $450 MXN por estación / mes', 'Implementación remota base $1,500 MXN', 'Timbres CN y soporte operativo'],
    metric: 'POS + control',
    visual: '/images/visuals/visual-compunegocio.webp',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    tag: 'Infraestructura',
    summary: 'CN7, respaldo, nube, hosting, VPS, correo, FTP, continuidad y administración técnica para reducir riesgos.',
    bullets: ['CN7 desde $99 USD / mes', 'Nube, respaldo y recuperación', 'Hosting, VPS, correo y soporte'],
    metric: 'Continuidad',
    visual: '/images/visuals/visual-cn7.webp',
    accent: 'aqua',
  },
  {
    title: 'Soporte, mantenimiento y evolución',
    href: '/soporte',
    tag: 'Soporte',
    summary: 'Atención remota, configuración, capacitación, mantenimiento, recuperación, mejoras y desarrollo evolutivo.',
    bullets: ['Soporte con póliza desde $499 MXN/h', 'Desarrollo con póliza desde $999 MXN/h', 'Acompañamiento remoto'],
    metric: 'Operación estable',
    visual: '/images/visuals/hero-landing-desktop.webp',
    accent: 'lime',
  },
]

export const workflow = [
  ['1. Atraer', 'Visitantes llegan desde sitio web, anuncios, tráfico orgánico, redes o WhatsApp.'],
  ['2. Capturar', 'El prospecto deja datos en landing, cotizador, formulario o conversación.'],
  ['3. Filtrar', 'Se califica por necesidad, urgencia, autoridad, volumen, presupuesto y tiempo.'],
  ['4. Conectar', 'El seguimiento pasa a WhatsApp, CRM, asesor o diagnóstico según prioridad.'],
  ['5. Cotizar', 'Se genera una base clara o propuesta manual según alcance e integración.'],
  ['6. Implementar', 'NearTec aterriza web, CRM, IA, CompuNegocio, CN7, nube, soporte o desarrollo.'],
] as const

export const scoringCriteria = [
  ['Empresa formal / RFC activo', 20],
  ['Decisor o influencia directa', 20],
  ['Dolor claro y urgente', 20],
  ['Volumen o recurrencia', 20],
  ['Presupuesto / autoridad de compra', 10],
  ['Implementación menor a 30 días', 10],
] as const

export const pipeline = [
  'Nuevo lead',
  'Contactado',
  'Diagnóstico agendado',
  'Diagnóstico realizado',
  'Cotización enviada',
  'Negociación',
  'Ganado / perdido',
  'Onboarding',
] as const

export const slaItems = [
  ['Lead nuevo', 'menos de 10 minutos hábiles'],
  ['Lead calificado', 'mismo día'],
  ['Diagnóstico realizado', '24 horas hábiles'],
  ['Cotización enviada', '24–48 horas'],
  ['Recuperación', 'secuencia 1, 3, 7 y 14 días'],
] as const

export const proofStats = [
  ['Web + Apps', 'presencia y herramientas digitales'],
  ['CRM + IA', 'automatización y seguimiento'],
  ['POS + Timbres', 'operación diaria con control'],
  ['CN7 + Nube', 'respaldo e infraestructura'],
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
  { label: 'Soporte técnico con póliza', price: '$499 MXN por hora' },
  { label: 'Desarrollo con póliza', price: '$999 MXN por hora' },
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

export const scenarios = [
  ['Más claridad comercial', 'Sitio o landing que explica rápido, captura datos y conecta con WhatsApp/cotizador.'],
  ['Mostrador y operación diaria', 'CompuNegocio para ventas, inventario, usuarios, reportes, timbres y soporte.'],
  ['Continuidad y respaldo', 'CN7, nube, respaldo automático, hosting, VPS, correo y administración técnica.'],
  ['Ruta integral', 'Web + CRM + WhatsApp + IA + operación + soporte para crecer con menos piezas sueltas.'],
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'USD' ? 0 : 0,
  }).format(amount)
}
