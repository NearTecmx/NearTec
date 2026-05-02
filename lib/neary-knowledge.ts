import { CONTACT } from './neartec-data'

export const QUICK_SUGGESTIONS = [
  'Quiero vender más con mi web',
  'Necesito ordenar mis leads',
  'Quiero CompuNegocio',
  'Necesito CN7 o respaldo',
  'Precios base',
  'Hablar por WhatsApp',
]

type Answer = { answer: string; escalate?: boolean; action?: 'quote' | 'whatsapp' | 'landing' }
const whatsapp = `WhatsApp NearTec: ${CONTACT.phoneDisplay}`
const rules: Array<{ keys: string[]; answer: string; escalate?: boolean; action?: Answer['action'] }> = [
  { keys: ['web', 'landing', 'pagina', 'página', 'ecommerce', 'vender'], answer: 'Si tu web no genera prospectos claros, NearTec rediseña la ruta: mensaje comercial, carga rápida, SEO técnico, formulario, WhatsApp, tracking y seguimiento. El siguiente paso es diagnosticar el cuello de botella.', action: 'landing' },
  { keys: ['crm', 'leads', 'automatizacion', 'automatización', 'seguimiento'], answer: 'Para ordenar prospectos configuramos seguimiento, recordatorios y respuestas claras para que tu equipo deje de perder oportunidades entre mensajes.', action: 'quote' },
  { keys: ['compunegocio', 'pos', 'punto de venta', 'inventario'], answer: 'CompuNegocio cubre punto de venta, inventario, usuarios y reportes. Base: $450 MXN/mes por estación de 1 a 3 usuarios, $400 de 4 a 8 y $350 desde 9 o más. Implementación base: $1,500 MXN.', action: 'quote' },
  { keys: ['cn7', 'nube', 'respaldo', 'hosting', 'vps', 'ftp', 'correo'], answer: 'CN7 y continuidad cubren servidor, base de datos, respaldo, hosting, VPS, FTP y correo. CN7 con respaldo parte de $99 USD/mes y CN7 hospedado de $149 USD/mes.', action: 'quote' },
  { keys: ['precio', 'precios', 'costo', 'cotizar', 'cuanto', 'cuánto'], answer: 'Precios base documentados: CompuNegocio $350–$450 MXN/mes por estación, implementación $1,500 MXN, soporte con póliza $499 MXN/h, desarrollo con póliza $999 MXN/h, CN7 desde $99 USD/mes y timbres CN por paquete.', action: 'quote' },
  { keys: ['itimbre', 'factura', 'cfdi', 'timbre', 'fiscal'], answer: 'NearTec puede ayudarte cuando necesitas CFDI, timbres, autofactura, nómina o integración fiscal. Lo mejor es revisar tu caso con un asesor para darte una ruta clara.', escalate: true, action: 'whatsapp' },
  { keys: ['whatsapp', 'asesor', 'llamar', 'humano'], answer: `Claro. ${whatsapp}. Te conviene mandar: empresa, número de usuarios, si ya tienes web/POS/nube y qué quieres resolver primero.`, escalate: true, action: 'whatsapp' },
]

export function getNearyAnswer(question: string): Answer {
  const normalized = question.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  const found = rules.find(rule => rule.keys.some(key => normalized.includes(key.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase())))
  if (found) return { answer: found.answer, escalate: found.escalate, action: found.action }
  return { answer: `Para perfilar bien tu caso necesito saber qué quieres resolver: web/leads, CRM, CompuNegocio, CN7, hosting/correo o integración fiscal. ${whatsapp}.`, escalate: true, action: 'whatsapp' }
}
