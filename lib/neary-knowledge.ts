import {
  CN7_BACKUP_MONTHLY_USD,
  CN7_HOSTED_MONTHLY_USD,
  CONTACT,
  DEVELOPMENT_HOURLY_PRICE_MXN,
  FAQ_SUGGESTIONS,
  IMPLEMENTATION_PRICE_MXN,
  SUPPORT_HOURLY_PRICE_MXN,
  TIMBRES_PACKAGES,
  formatMoney,
} from '@/lib/neartec-pricing'

export type NearyIntent =
  | 'services'
  | 'pricing'
  | 'compunegocio'
  | 'cloud'
  | 'automation'
  | 'web'
  | 'emailing'
  | 'hosting'
  | 'infrastructure'
  | 'itimbre'
  | 'support'
  | 'location'
  | 'lead-qualification'
  | 'buyers'
  | 'industries'
  | 'process'
  | 'blog'
  | 'cases'
  | 'fallback'

export interface NearyAnswer {
  intent: NearyIntent
  answer: string
  escalate?: boolean
}

interface KnowledgeEntry {
  intent: NearyIntent
  keys: string[]
  answer: string
  escalate?: boolean
}

const timbres365 = TIMBRES_PACKAGES.find((item) => item.value === 365)?.priceMxn ?? 730
const timbres10000 = TIMBRES_PACKAGES.find((item) => item.value === 10000)?.priceMxn ?? 9500

export const QUICK_SUGGESTIONS = [
  '¿Qué hace NearTec?',
  '¿Qué me conviene contratar primero?',
  '¿Cuánto cuesta CompuNegocio?',
  '¿Manejan hosting, VPS y correo?',
  '¿También hacen CRM y automatización?',
  '¿Pueden conectarse con iTimbre?',
  ...FAQ_SUGGESTIONS.filter((item) => !['¿Qué hace NearTec?', '¿Qué me conviene contratar primero?', '¿Cuánto cuesta CompuNegocio?', '¿Manejan nube o CN7?', '¿También hacen CRM y automatización?', '¿Pueden conectarse con iTimbre?'].includes(item)),
]

export const NEARY_KNOWLEDGE: KnowledgeEntry[] = [
  {
    intent: 'services',
    keys: ['que hace', 'qué hace', 'que vende', 'qué vende', 'servicios', 'soluciones', 'neartec'],
    answer:
      'NearTec integra sitio web y conversión, CRM y automatización, CompuNegocio y punto de venta, hosting, VPS, correo, emailing, nube y continuidad. Cuando el proyecto necesita capa fiscal, también puede conectarse con iTimbre.',
  },
  {
    intent: 'buyers',
    keys: ['para quien', 'para quién', 'a quien ayudan', 'a quién ayudan', 'tipo de empresa', 'cliente ideal'],
    answer:
      'NearTec encaja sobre todo en pymes, retail, multisucursal y empresas que ya tienen procesos manuales, leads fríos o demasiadas herramientas separadas. Suele hablarle a dueño, dirección operativa, comercial y marketing.',
  },
  {
    intent: 'industries',
    keys: ['retail', 'multisucursal', 'tienda', 'restaurante', 'servicios', 'pyme', 'giro', 'industria'],
    answer:
      'NearTec suele entrar muy bien en retail, multisucursal, negocios de servicios y pymes que necesitan presencia digital, operación conectada, nube o automatización comercial.',
    escalate: true,
  },
  {
    intent: 'web',
    keys: ['sitio', 'pagina', 'página', 'web', 'landing', 'ecommerce', 'tienda en linea', 'tienda en línea', 'conversion', 'conversión'],
    answer:
      'NearTec diseña sitios, landings y ecommerce para explicar mejor lo que vendes, captar leads y llevar al visitante al siguiente paso. La diferencia es que no se queda solo en diseño: puede conectar seguimiento, operación y soporte.',
  },
  {
    intent: 'automation',
    keys: ['crm', 'automatizacion', 'automatización', 'lead', 'seguimiento', 'embudo', 'pipeline', 'agenda', 'campana', 'campaña', 'whatsapp'],
    answer:
      'NearTec puede ayudarte con CRM, lead filtering, seguimiento, agenda y automatización comercial para que ventas responda con más velocidad y con mejor contexto.',
  },
  {
    intent: 'compunegocio',
    keys: ['compunegocio', 'punto de venta', 'pos', 'inventario', 'caja', 'estacion', 'estación', 'multisucursal', 'tickets'],
    answer:
      `CompuNegocio sirve para ventas, inventario, estaciones, timbres y control diario. El rango base arranca en ${formatMoney(450, 'MXN')} al mes por estación para 1 a 3 licencias. Si quieres, te ayudo a estimar tu rango y te paso a WhatsApp.`,
    escalate: true,
  },
  {
    intent: 'cloud',
    keys: ['cn7', 'nube', 'respaldo', 'backup', 'base de datos', 'remoto'],
    answer:
      `NearTec maneja dos rutas principales de CN7: con respaldo por ${formatMoney(CN7_BACKUP_MONTHLY_USD, 'USD')} al mes y hospedado por ${formatMoney(CN7_HOSTED_MONTHLY_USD, 'USD')} al mes. Esto ayuda a operar remoto, respaldar base de datos y no depender de una sola máquina.`,
    escalate: true,
  },
  {
    intent: 'hosting',
    keys: ['hosting', 'vps', 'servidor', 'servidores', 'ftp'],
    answer:
      'NearTec también resuelve infraestructura con hosting, VPS y servidores para proyectos que necesitan continuidad, rendimiento y menos dependencia de varios proveedores. Si tu caso es de infraestructura o migración, conviene pasarlo a WhatsApp para revisar alcance real.',
    escalate: true,
  },
  {
    intent: 'emailing',
    keys: ['emailing', 'newsletters', 'correos', 'email marketing', 'mailing'],
    answer:
      'NearTec ofrece emailing para campañas segmentadas, newsletters, automatización y comunicación comercial continua. También puede integrarse con CRM y seguimiento para no dejar el lead suelto.',
  },
  {
    intent: 'infrastructure',
    keys: ['correo', 'infraestructura', 'dominio', 'mail corporativo', 'vps y shared', 'shared servers'],
    answer:
      'La parte de infraestructura cubre hosting, VPS, correo corporativo, continuidad, nube y soporte. Sirve para empresas que ya necesitan una base más estable, no solo una página aislada.',
  },
  {
    intent: 'pricing',
    keys: ['precio', 'precios', 'cuanto cuesta', 'cuánto cuesta', 'costo', 'costos', 'cotizar', 'cotizacion', 'cotización'],
    answer:
      `Sí hay rangos base documentados: CompuNegocio desde ${formatMoney(450, 'MXN')} por estación al mes, implementación base ${formatMoney(IMPLEMENTATION_PRICE_MXN, 'MXN')}, soporte ${formatMoney(SUPPORT_HOURLY_PRICE_MXN, 'MXN')} por hora, desarrollo ${formatMoney(DEVELOPMENT_HOURLY_PRICE_MXN, 'MXN')} por hora, CN7 desde ${formatMoney(CN7_BACKUP_MONTHLY_USD, 'USD')} al mes y timbres desde ${formatMoney(timbres365, 'MXN')} por 365 hasta ${formatMoney(timbres10000, 'MXN')} por 10,000.`,
      escalate: true,
  },
  {
    intent: 'support',
    keys: ['soporte', 'implementacion', 'implementación', 'desarrollo', 'capacitacion', 'capacitación', 'migracion', 'migración'],
    answer:
      `La implementación base documentada arranca en ${formatMoney(IMPLEMENTATION_PRICE_MXN, 'MXN')}. El soporte técnico base es ${formatMoney(SUPPORT_HOURLY_PRICE_MXN, 'MXN')} por hora y el desarrollo ${formatMoney(DEVELOPMENT_HOURLY_PRICE_MXN, 'MXN')} por hora.`,
      escalate: true,
  },
  {
    intent: 'itimbre',
    keys: ['itimbre', 'cfdi', 'timbrado', 'facturacion', 'facturación', 'pac', 'nomina', 'nómina', 'carta porte', 'autofacturacion', 'autofacturación'],
    answer:
      'Cuando el proyecto necesita capa fiscal, NearTec puede conectarse con iTimbre. Eso cubre timbrado CFDI, web service, conectores, autofacturación, nómina, buzón de nómina y otras rutas de cumplimiento sin rehacer toda tu operación.',
      escalate: true,
  },
  {
    intent: 'cases',
    keys: ['casos', 'clientes', 'portafolio', 'radio latina', 'gasmart', 'securewrap', 'subway'],
    answer:
      'NearTec ya tiene casos y activos reales en portafolio, incluyendo conexión con iTimbre, proyectos de diseño y medios, ecommerce y operación conectada. Si quieres, te llevo a WhatsApp para enseñarte la ruta más cercana a tu caso.',
      escalate: true,
  },
  {
    intent: 'process',
    keys: ['como trabajan', 'cómo trabajan', 'proceso', 'siguiente paso', 'demo', 'diagnostico', 'diagnóstico'],
    answer:
      'La ruta normal es detectar la necesidad, revisar si conviene sitio, CRM, CompuNegocio o nube, estimar un rango base y después pasar a propuesta o diagnóstico rápido.',
      escalate: true,
  },
  {
    intent: 'blog',
    keys: ['blog', 'articulos', 'artículos', 'guias', 'guías', 'noticias', 'contenido'],
    answer:
      'NearTec también publica contenido para atraer leads con intención real: sitio y conversión, operación, CompuNegocio, nube, CRM y automatización.',
  },
  {
    intent: 'location',
    keys: ['donde estan', 'dónde están', 'ubicacion', 'ubicación', 'tijuana', 'mexico', 'méxico', 'binacional'],
    answer:
      `NearTec opera desde Tijuana y atiende proyectos en México con lectura binacional cuando aplica. Si quieres avanzar directo, te paso por WhatsApp o correo: ${CONTACT.phoneDisplay} / ${CONTACT.email}.`,
      escalate: true,
  },
  {
    intent: 'lead-qualification',
    keys: ['que me conviene', 'qué me conviene', 'por donde empiezo', 'por dónde empiezo', 'qué contratar primero', 'que contratar primero', 'qué necesito', 'que necesito'],
    answer:
      'Si necesitas vender mejor, normalmente la entrada es sitio web y conversión. Si tus leads se enfrían, la ruta es CRM y automatización. Si vendes en tienda o multisucursal, la prioridad suele ser CompuNegocio. Si quieres estabilidad y operación remota, la entrada es nube e infraestructura.',
      escalate: true,
  },
  {
    intent: 'fallback',
    keys: [],
    answer:
      'Puedo ayudarte con servicios, precios base, CompuNegocio, nube, CRM, sitio web, emailing, infraestructura o conexión con iTimbre. Si tu caso ya es específico, te conviene pasar directo a WhatsApp para no perder tiempo ni lead.',
      escalate: true,
  },
]

export function normalizeNeary(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function getNearyAnswer(text: string): NearyAnswer {
  const normalized = normalizeNeary(text)
  const entry = NEARY_KNOWLEDGE.find((item) => item.keys.some((key) => normalized.includes(normalizeNeary(key))))

  if (!entry) {
    const fallback = NEARY_KNOWLEDGE.find((item) => item.intent === 'fallback')!
    return { intent: fallback.intent, answer: fallback.answer, escalate: fallback.escalate }
  }

  return {
    intent: entry.intent,
    answer: entry.answer,
    escalate: entry.escalate,
  }
}
