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
  | 'infrastructure'
  | 'itimbre'
  | 'support'
  | 'location'
  | 'lead-qualification'
  | 'buyers'
  | 'industries'
  | 'process'
  | 'blog'
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

export const QUICK_SUGGESTIONS = FAQ_SUGGESTIONS

export const NEARY_KNOWLEDGE: KnowledgeEntry[] = [
  {
    intent: 'services',
    keys: ['que hace', 'qué hace', 'que vende', 'qué vende', 'servicios', 'soluciones', 'neartec'],
    answer:
      'NearTec integra cuatro frentes principales: sitio web y conversión, CRM y automatización, CompuNegocio y operación, e infraestructura con nube. Cuando el proyecto también necesita timbrado o capa fiscal, se conecta con iTimbre.',
  },
  {
    intent: 'buyers',
    keys: ['para quien', 'para quién', 'a quien ayudan', 'a quién ayudan', 'tipo de empresa', 'cliente ideal'],
    answer:
      'NearTec aplica sobre todo a pymes, retail, multisucursal y empresas que ya tienen procesos manuales, leads fríos o demasiadas herramientas separadas. También ayuda a dueños, dirección operativa, comercial y marketing que necesitan crecer con más orden.',
  },
  {
    intent: 'industries',
    keys: ['retail', 'multisucursal', 'restaurante', 'tienda', 'servicios', 'pyme', 'industria', 'giro'],
    answer:
      'NearTec suele encajar muy bien en retail, multisucursal, negocios de servicios y pymes que necesitan sitio, seguimiento, operación, nube o punto de venta en una sola ruta.',
      escalate: true,
  },
  {
    intent: 'web',
    keys: ['sitio', 'pagina', 'página', 'web', 'landing', 'ecommerce', 'tienda en linea', 'tienda en línea', 'seo'],
    answer:
      'NearTec diseña sitios, landings y ecommerce pensados para explicar mejor lo que vendes, captar leads y llevar la visita al siguiente paso comercial. No se queda solo en diseño: también puede conectar seguimiento, automatización y operación.',
  },
  {
    intent: 'automation',
    keys: ['crm', 'automatizacion', 'automatización', 'lead', 'seguimiento', 'embudo', 'pipeline', 'agenda', 'campana', 'campaña', 'whatsapp', 'filtro'],
    answer:
      'NearTec puede ayudarte con CRM, filtros de leads, automatización comercial, agenda y WhatsApp para que ventas responda más rápido y con mejor contexto. El objetivo es que el lead no se enfríe.',
  },
  {
    intent: 'compunegocio',
    keys: ['compunegocio', 'punto de venta', 'pos', 'inventario', 'caja', 'sucursal', 'multisucursal', 'tickets'],
    answer:
      `CompuNegocio sirve para ventas, inventario, estaciones, timbres y control diario. El rango base arranca en ${formatMoney(450, 'MXN')} al mes por estación de 1 a 3 licencias. También puedes sumar implementación, nube y timbres según tu operación.`,
      escalate: true,
  },
  {
    intent: 'cloud',
    keys: ['cn7', 'nube', 'respaldo', 'backup', 'base de datos', 'remoto', 'servidor en la nube'],
    answer:
      `NearTec maneja dos rutas principales de CN7: con respaldo por ${formatMoney(CN7_BACKUP_MONTHLY_USD, 'USD')} al mes y hospedado por ${formatMoney(CN7_HOSTED_MONTHLY_USD, 'USD')} al mes. Esto ayuda a operar remoto, respaldar base de datos y no depender de una sola máquina.`,
      escalate: true,
  },
  {
    intent: 'infrastructure',
    keys: ['hosting', 'vps', 'correo', 'infraestructura', 'servidor', 'mail corporativo', 'dominio'],
    answer:
      'NearTec también resuelve infraestructura: hosting, VPS, correo corporativo, continuidad y soporte para que la base tecnológica no se vuelva una fricción más.',
  },
  {
    intent: 'pricing',
    keys: ['precio', 'precios', 'cuanto cuesta', 'cuánto cuesta', 'cotizar', 'cotizacion', 'cotización', 'costo'],
    answer:
      `Sí hay rangos base documentados: CompuNegocio desde ${formatMoney(450, 'MXN')} por estación al mes, implementación base ${formatMoney(IMPLEMENTATION_PRICE_MXN, 'MXN')}, soporte ${formatMoney(SUPPORT_HOURLY_PRICE_MXN, 'MXN')} por hora, desarrollo ${formatMoney(DEVELOPMENT_HOURLY_PRICE_MXN, 'MXN')} por hora, CN7 desde ${formatMoney(CN7_BACKUP_MONTHLY_USD, 'USD')} al mes, y timbres desde ${formatMoney(timbres365, 'MXN')} por 365 hasta ${formatMoney(timbres10000, 'MXN')} por 10,000.`,
      escalate: true,
  },
  {
    intent: 'support',
    keys: ['soporte', 'implementacion', 'implementación', 'desarrollo', 'ajustes', 'capacitacion', 'capacitación'],
    answer:
      `La implementación base documentada arranca en ${formatMoney(IMPLEMENTATION_PRICE_MXN, 'MXN')}. El soporte técnico base es ${formatMoney(SUPPORT_HOURLY_PRICE_MXN, 'MXN')} por hora y el desarrollo ${formatMoney(DEVELOPMENT_HOURLY_PRICE_MXN, 'MXN')} por hora.`,
      escalate: true,
  },
  {
    intent: 'itimbre',
    keys: ['itimbre', 'cfdi', 'timbrado', 'facturacion', 'facturación', 'pac', 'nomina', 'nómina', 'carta porte', 'autofacturacion', 'autofacturación'],
    answer:
      'Cuando el proyecto necesita capa fiscal, NearTec se conecta con iTimbre. Eso cubre timbrado CFDI, web service, conectores, autofacturación, nómina, buzón de nómina y otras rutas de cumplimiento sin obligarte a rehacer toda tu operación.',
      escalate: true,
  },
  {
    intent: 'process',
    keys: ['como trabajan', 'cómo trabajan', 'proceso', 'siguiente paso', 'demo', 'diagnostico', 'diagnóstico'],
    answer:
      'La ruta normal es detectar la necesidad, revisar el rango base, definir si se requiere sitio, CRM, CompuNegocio o nube, y después pasar a una propuesta más clara con el contexto completo.',
      escalate: true,
  },
  {
    intent: 'blog',
    keys: ['blog', 'articulos', 'artículos', 'guias', 'guías', 'noticias', 'contenido'],
    answer:
      'NearTec también publica contenido para atraer leads con intención real: sitio y conversión, CRM, operación, nube, CN7 y temas que ayudan a decidir qué conviene contratar primero.',
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
    keys: ['que me conviene', 'qué me conviene', 'por donde empiezo', 'por dónde empiezo', 'que contratar primero', 'qué contratar primero', 'que necesito', 'qué necesito'],
    answer:
      'Si necesitas vender mejor, normalmente la entrada es sitio web y conversión. Si tus leads se enfrían, la ruta es CRM y automatización. Si vendes en tienda o multisucursal, la prioridad suele ser CompuNegocio. Si quieres estabilidad y operación remota, la entrada es CN7 o infraestructura cloud.',
      escalate: true,
  },
  {
    intent: 'fallback',
    keys: [],
    answer:
      'Puedo ayudarte con servicios, precios base, CRM, CompuNegocio, nube, sitio web, infraestructura o integración con iTimbre. Si tu caso ya es específico, te conviene pasar directo a WhatsApp para no perder tiempo ni lead.',
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
