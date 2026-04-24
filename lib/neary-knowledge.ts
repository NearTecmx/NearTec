import { CONTACT } from './neartec-pricing'

export const QUICK_SUGGESTIONS = [
  '¿Qué vende NearTec?',
  'Necesito sitio web',
  'Quiero CompuNegocio',
  'Necesito CRM',
  'Precios base',
  'Hablar por WhatsApp',
]

type Answer = { answer: string; escalate?: boolean }

const whatsappLine = `Si quieres avanzar, te paso a WhatsApp: ${CONTACT.phoneDisplay}.`

const rules: Array<{ keys: string[]; answer: string; escalate?: boolean }> = [
  {
    keys: ['que vende', 'qué vende', 'que es neartec', 'qué es neartec', 'servicios'],
    answer: 'NearTec integra sitio web, CRM y automatización, CompuNegocio, nube, correo, hosting, VPS, emailing y soporte. La meta es que vendas mejor y operes con más orden.',
  },
  {
    keys: ['web', 'sitio', 'landing', 'ecommerce', 'pagina', 'página'],
    answer: 'Para web trabajamos estructura comercial, diseño, velocidad, formularios, CTA y conexión a seguimiento. Ideal si tu sitio no explica bien tu oferta o no genera contactos claros.',
  },
  {
    keys: ['crm', 'automatizacion', 'automatización', 'leads', 'seguimiento', 'whatsapp'],
    answer: 'CRM y automatización sirven para filtrar leads, dar prioridad, mandar seguimiento, conectar WhatsApp y reducir oportunidades perdidas. Es útil si recibes contactos pero no cierras suficiente.',
  },
  {
    keys: ['compunegocio', 'punto de venta', 'pos', 'inventario', 'ventas'],
    answer: 'CompuNegocio ayuda con punto de venta, inventario, reportes, ventas y operación diaria. Las licencias base van desde $450 MXN/mes por estación según volumen.',
  },
  {
    keys: ['cn7', 'nube', 'respaldo', 'hosting', 'vps', 'correo', 'infraestructura'],
    answer: 'NearTec cubre hosting, VPS, correo, CN7, respaldos y continuidad. CN7 con respaldo parte de $99 USD/mes y CN7 hospedado de $149 USD/mes.',
  },
  {
    keys: ['emailing', 'email', 'campañas', 'campana', 'newsletter'],
    answer: 'Emailing sirve para campañas, segmentación, recuperación de prospectos y medición. Funciona mejor cuando se conecta con CRM y formularios.',
  },
  {
    keys: ['itimbre', 'factura', 'cfdi', 'timbres', 'fiscal'],
    answer: 'NearTec puede conectar la operación con iTimbre cuando necesitas CFDI, timbres, autofactura, web service o capa fiscal. Si tu duda es fiscal específica, conviene hablar por WhatsApp.',
    escalate: true,
  },
  {
    keys: ['precio', 'precios', 'costo', 'cuanto', 'cuánto', 'cotizar'],
    answer: 'Precios base: CompuNegocio desde $450 MXN/mes por estación; implementación desde $1,500 MXN; soporte $499 MXN/h; desarrollo $999 MXN/h; CN7 desde $99 USD/mes. Usa el cotizador para mandar tu caso listo.',
  },
  {
    keys: ['whatsapp', 'asesor', 'humano', 'vendedor', 'ventas'],
    answer: `Claro. ${whatsappLine}`,
    escalate: true,
  },
]

export function getNearyAnswer(question: string): Answer {
  const normalized = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const found = rules.find((rule) => rule.keys.some((key) => normalized.includes(key.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())))
  if (found) return { answer: found.answer, escalate: found.escalate }
  return {
    answer: `Para no darte una respuesta incompleta, lo mejor es pasar tu caso a WhatsApp con contexto. ${whatsappLine}`,
    escalate: true,
  }
}
