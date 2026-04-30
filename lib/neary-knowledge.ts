import { CONTACT } from './neartec-pricing'

export const QUICK_SUGGESTIONS = [
  '¿Qué vende NearTec?',
  'Necesito vender más con mi web',
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
    answer: 'NearTec integra web, CRM, automatización, CompuNegocio, CN7, hosting, VPS, FTP, correo, emailing, soporte y conexión con iTimbre cuando aplica. La meta no es vender piezas sueltas: es convertir tráfico en ventas y operación con control.',
  },
  {
    keys: ['web', 'sitio', 'landing', 'ecommerce', 'pagina', 'página', 'vender más'],
    answer: 'Para web trabajamos mensaje comercial, velocidad, SEO base, formularios, WhatsApp, CTA y conexión a seguimiento. Es ideal si tu sitio se ve activo pero no genera prospectos claros.',
  },
  {
    keys: ['crm', 'automatizacion', 'automatización', 'leads', 'seguimiento', 'whatsapp'],
    answer: 'CRM y automatización sirven para filtrar leads, dar prioridad, mandar seguimiento, conectar WhatsApp y reducir oportunidades perdidas. El objetivo es que ventas reciba contexto, no solo un mensaje suelto.',
  },
  {
    keys: ['compunegocio', 'punto de venta', 'pos', 'inventario', 'ventas'],
    answer: 'CompuNegocio ayuda con punto de venta, inventario, reportes, ventas y operación diaria. Las licencias base van de $350 a $450 MXN/mes por estación según volumen; implementación base desde $1,500 MXN.',
  },
  {
    keys: ['cn7', 'nube', 'respaldo', 'hosting', 'vps', 'ftp', 'correo', 'infraestructura'],
    answer: 'NearTec cubre hosting, VPS, FTP, correo, CN7, respaldos y continuidad. CN7 con respaldo parte de $99 USD/mes y CN7 hospedado de $149 USD/mes. Hosting, VPS, FTP y correo se validan por alcance.',
  },
  {
    keys: ['emailing', 'email', 'campañas', 'campana', 'newsletter'],
    answer: 'Emailing sirve para campañas, segmentación, recuperación de prospectos y medición. Funciona mejor cuando está conectado con formularios, CRM y seguimiento comercial.',
  },
  {
    keys: ['itimbre', 'factura', 'cfdi', 'timbres', 'fiscal', 'pac'],
    answer: 'NearTec puede conectar la operación con iTimbre cuando necesitas CFDI, timbres, autofactura, web service, nómina, conectores o capa fiscal. Para alcance fiscal específico conviene pasar a WhatsApp con contexto.',
    escalate: true,
  },
  {
    keys: ['precio', 'precios', 'costo', 'cuanto', 'cuánto', 'cotizar'],
    answer: 'Precios base documentados: CompuNegocio $350–$450 MXN/mes por estación; implementación $1,500 MXN; soporte desde $499 MXN/h; desarrollo desde $999 MXN/h; CN7 desde $99 USD/mes; timbres CN desde paquetes documentados. Usa el cotizador para mandar tu caso listo.',
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
    answer: `Para no darte una respuesta incompleta, lo mejor es pasar tu caso a WhatsApp con contexto: qué vendes, cuántas sucursales o usuarios tienes, si ya usas POS, web, correo, CN7 o iTimbre. ${whatsappLine}`,
    escalate: true,
  }
}
