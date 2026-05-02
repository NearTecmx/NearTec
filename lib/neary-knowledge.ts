import { CONTACT } from './neartec-data'

export const QUICK_SUGGESTIONS = [
  'Necesito una web o app',
  'Quiero automatizar procesos',
  'Quiero CompuNegocio',
  'Necesito CN7 o respaldo',
  'Precios base',
  'Hablar por WhatsApp',
]

type Answer = { answer: string; escalate?: boolean; action?: 'quote' | 'whatsapp' | 'landing' }
const whatsapp = `WhatsApp NearTec: ${CONTACT.phoneDisplay}`

const rules: Array<{ keys: string[]; answer: string; escalate?: boolean; action?: Answer['action'] }> = [
  {
    keys: ['web', 'landing', 'pagina', 'página', 'app', 'apps', 'desarrollo', 'codigo', 'código', 'software'],
    answer:
      'NearTec puede desarrollar sitios web, landings, apps, paneles, módulos e integraciones a medida. Lo correcto es definir objetivo, funciones, usuarios, integraciones y prioridad para cotizar con contexto.',
    action: 'landing',
  },
  {
    keys: ['crm', 'automatizacion', 'automatización', 'ia', 'ai', 'seguimiento', 'proceso'],
    answer:
      'Para CRM, automatización e IA revisamos qué tareas se repiten, qué datos se pierden y qué canales deben conectarse: formularios, WhatsApp, correo, CRM, reportes o sistemas internos.',
    action: 'quote',
  },
  {
    keys: ['compunegocio', 'pos', 'punto de venta', 'inventario', 'ventas'],
    answer:
      'CompuNegocio cubre punto de venta, inventario, usuarios, reportes y operación. Base: $450 MXN/mes por estación de 1 a 3 usuarios, $400 de 4 a 8 y $350 desde 9 o más. Implementación base: $1,500 MXN.',
    action: 'quote',
  },
  {
    keys: ['cn7', 'nube', 'respaldo', 'hosting', 'vps', 'ftp', 'correo', 'infraestructura'],
    answer:
      'CN7 e infraestructura cubren servidor, base de datos, respaldo, hosting, VPS, FTP, correo y continuidad. CN7 con respaldo parte de $99 USD/mes y CN7 hospedado de $149 USD/mes.',
    action: 'quote',
  },
  {
    keys: ['precio', 'precios', 'costo', 'cotizar', 'cuanto', 'cuánto'],
    answer:
      'Precios base documentados: CompuNegocio $350–$450 MXN/mes por estación, implementación $1,500 MXN, soporte con póliza $499 MXN/h, desarrollo con póliza $999 MXN/h, CN7 desde $99 USD/mes y timbres CN por paquete.',
    action: 'quote',
  },
  {
    keys: ['itimbre', 'factura', 'cfdi', 'timbre', 'fiscal'],
    answer:
      'NearTec puede orientarte con CFDI, timbres, operación fiscal e integraciones relacionadas. Para darte una ruta clara conviene revisar tu sistema actual, volumen de timbres y operación.',
    escalate: true,
    action: 'whatsapp',
  },
  {
    keys: ['whatsapp', 'asesor', 'llamar', 'humano'],
    answer: `Claro. ${whatsapp}. Te conviene mandar: empresa, número de usuarios, si ya tienes web/POS/nube y qué quieres resolver primero.`,
    escalate: true,
    action: 'whatsapp',
  },
]

export function getNearyAnswer(question: string): Answer {
  const normalized = question.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  const found = rules.find((rule) =>
    rule.keys.some((key) => normalized.includes(key.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()))
  )
  if (found) return { answer: found.answer, escalate: found.escalate, action: found.action }
  return {
    answer: `Para perfilar bien tu caso necesito saber qué quieres resolver: web/app, automatización/IA, CRM, CompuNegocio, CN7/nube, hosting/correo, soporte o integración fiscal. ${whatsapp}.`,
    escalate: true,
    action: 'whatsapp',
  }
}
