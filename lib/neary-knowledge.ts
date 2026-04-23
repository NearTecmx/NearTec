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
  | 'emailing'
  | 'itimbre'
  | 'support'
  | 'buyers'
  | 'cases'
  | 'process'
  | 'blog'
  | 'contact'
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
  ...FAQ_SUGGESTIONS,
  '¿También manejan hosting, VPS o correo?',
  '¿NearTec puede conectarse con iTimbre?',
  '¿Qué incluye el servicio de emailing?',
]

export const NEARY_KNOWLEDGE: KnowledgeEntry[] = [
  {
    intent: 'services',
    keys: ['que hace', 'qué hace', 'que vende', 'qué vende', 'servicios', 'soluciones'],
    answer:
      'NearTec integra seis frentes principales: diseño web y ecommerce, CRM y automatización, CompuNegocio y punto de venta, hosting/VPS/correo, CN7 y nube, y emailing corporativo. Cuando el proyecto necesita capa fiscal, también puede conectarse con iTimbre.',
  },
  {
    intent: 'buyers',
    keys: ['para quien', 'para quién', 'cliente ideal', 'a quien ayudan', 'a quién ayudan', 'tipo de empresa'],
    answer:
      'NearTec encaja muy bien en pymes, retail, multisucursal y empresas que ya tienen procesos manuales, leads fríos o demasiadas herramientas separadas. Normalmente habla con dueños, operaciones, dirección comercial o marketing.',
      escalate: true,
  },
  {
    intent: 'web',
    keys: ['sitio', 'landing', 'pagina', 'página', 'web', 'ecommerce', 'tienda en linea', 'tienda en línea', 'conversion'],
    answer:
      'NearTec desarrolla sitios, landing pages y ecommerce para explicar mejor lo que vendes, convertir más visitas y conectar el sitio con seguimiento comercial cuando aplica.',
  },
  {
    intent: 'automation',
    keys: ['crm', 'automatizacion', 'automatización', 'lead', 'seguimiento', 'pipeline', 'agenda', 'whatsapp', 'filtro'],
    answer:
      'NearTec puede ayudarte con CRM, filtros de leads, agenda, seguimiento y automatización comercial para que ventas responda más rápido y con mejor contexto.',
      escalate: true,
  },
  {
    intent: 'compunegocio',
    keys: ['compunegocio', 'punto de venta', 'pos', 'inventario', 'caja', 'sucursal', 'multisucursal'],
    answer:
      `CompuNegocio sirve para ventas, inventario, estaciones, timbres y control diario. El rango base arranca en ${formatMoney(450, 'MXN')} al mes por estación para 1 a 3 licencias.`,
      escalate: true,
  },
  {
    intent: 'cloud',
    keys: ['cn7', 'nube', 'respaldo', 'backup', 'base de datos', 'remoto'],
    answer:
      `NearTec maneja dos rutas principales de CN7: con respaldo por ${formatMoney(CN7_BACKUP_MONTHLY_USD, 'USD')} al mes y hospedado por ${formatMoney(CN7_HOSTED_MONTHLY_USD, 'USD')} al mes. Sirve para operar remoto y respaldar base de datos.`,
      escalate: true,
  },
  {
    intent: 'infrastructure',
    keys: ['hosting', 'vps', 'correo', 'infraestructura', 'servidor', 'ftp', 'transferencia', 'dominio'],
    answer:
      'NearTec también resuelve hosting, VPS, correo corporativo, transferencia de archivos y continuidad operativa para que la base tecnológica no se vuelva una fricción.',
      escalate: true,
  },
  {
    intent: 'emailing',
    keys: ['emailing', 'email marketing', 'newsletter', 'a/b', 'ab', 'campanas de correo', 'campañas de correo'],
    answer:
      'El servicio de emailing de NearTec incluye campañas segmentadas, envíos ilimitados, pruebas A/B, automatización, estadísticas y plantillas responsive con soporte.',
      escalate: true,
  },
  {
    intent: 'pricing',
    keys: ['precio', 'precios', 'cuanto cuesta', 'cuánto cuesta', 'costo', 'cotizar', 'cotizacion', 'cotización'],
    answer:
      `Sí hay rangos base documentados: CompuNegocio desde ${formatMoney(450, 'MXN')} por estación al mes, implementación base ${formatMoney(IMPLEMENTATION_PRICE_MXN, 'MXN')}, soporte ${formatMoney(SUPPORT_HOURLY_PRICE_MXN, 'MXN')} por hora, desarrollo ${formatMoney(DEVELOPMENT_HOURLY_PRICE_MXN, 'MXN')} por hora, CN7 desde ${formatMoney(CN7_BACKUP_MONTHLY_USD, 'USD')} al mes y timbres desde ${formatMoney(timbres365, 'MXN')} por 365 hasta ${formatMoney(timbres10000, 'MXN')} por 10,000.`,
      escalate: true,
  },
  {
    intent: 'support',
    keys: ['soporte', 'implementacion', 'implementación', 'desarrollo', 'capacitacion', 'capacitación', 'tiempo'],
    answer:
      `La implementación base documentada arranca en ${formatMoney(IMPLEMENTATION_PRICE_MXN, 'MXN')}. El soporte técnico base es ${formatMoney(SUPPORT_HOURLY_PRICE_MXN, 'MXN')} por hora y el desarrollo ${formatMoney(DEVELOPMENT_HOURLY_PRICE_MXN, 'MXN')} por hora.`,
      escalate: true,
  },
  {
    intent: 'itimbre',
    keys: ['itimbre', 'cfdi', 'timbrado', 'facturacion', 'facturación', 'pac', 'nomina', 'nómina', 'carta porte', 'autofacturacion', 'autofacturación'],
    answer:
      'Cuando el proyecto necesita capa fiscal, NearTec se conecta con iTimbre. Eso cubre timbrado CFDI, web service, conectores, autofacturación, nómina, buzón de nómina y otras rutas de cumplimiento sin rehacer toda la operación.',
      escalate: true,
  },
  {
    intent: 'cases',
    keys: ['casos', 'clientes', 'experiencia', 'portafolio', 'securewrap', 'radio latina', 'subway', 'itimbre'],
    answer:
      'Sí hay experiencia real. NearTec ya muestra casos como iTimbre, SecureWrap, Radio Latina y proyectos ecommerce/multisucursal, lo que ayuda a probar capacidad más allá del diseño.',
  },
  {
    intent: 'blog',
    keys: ['blog', 'articulos', 'artículos', 'noticias', 'guias', 'guías', 'contenido'],
    answer:
      'NearTec también usa contenido para atraer leads con intención real: sitio y conversión, CRM, operación, nube, CN7 y temas que ayudan a decidir qué conviene contratar primero.',
  },
  {
    intent: 'process',
    keys: ['proceso', 'siguiente paso', 'como trabajan', 'cómo trabajan', 'demo', 'llamada', 'diagnostico', 'diagnóstico'],
    answer:
      'La ruta normal es detectar la necesidad, revisar el rango base, definir si se requiere sitio, CRM, CompuNegocio o nube, y pasar a una propuesta más clara por WhatsApp o contacto.',
      escalate: true,
  },
  {
    intent: 'contact',
    keys: ['telefono', 'teléfono', 'correo', 'email', 'contacto', 'ubicacion', 'ubicación', 'tijuana'],
    answer:
      `Puedes avanzar directo por ${CONTACT.phoneDisplay} o por ${CONTACT.email}. Si quieres, te paso a WhatsApp para que no se pierda tu lead.`,
      escalate: true,
  },
  {
    intent: 'fallback',
    keys: [],
    answer:
      'Puedo ayudarte con servicios, rangos base, CompuNegocio, nube, hosting, correo, emailing, CRM, automatización o integración con iTimbre. Si tu caso ya es específico, te conviene pasar directo a WhatsApp.',
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

  return { intent: entry.intent, answer: entry.answer, escalate: entry.escalate }
}
