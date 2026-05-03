import fs from 'node:fs'

const pages = [
  'index.html',
  'soluciones/index.html',
  'web/index.html',
  'crm/index.html',
  'compunegocio/index.html',
  'cn7/index.html',
  'soporte/index.html',
  'cotizador/index.html',
  'landing/index.html',
  'campanas/index.html',
  'contacto/index.html',
  'privacidad/index.html',
  'terminos/index.html',
  'cookies/index.html',
  'aviso-legal/index.html',
]

const requiredFiles = [
  ...pages,
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/data/pricing.json',
  'assets/data/lead-rules.json',
  'assets/icons/neartec-isotipo.png',
  'assets/icons/whatsapp-official.svg',
  'assets/img/neartec-og.png',
  'api/lead.js',
  'api/health.js',
  'sitemap.xml',
  'robots.txt',
  'vercel.json',
]

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`Falta archivo requerido: ${file}`)
    process.exit(1)
  }
}

const publicCode = pages.map((file) => fs.readFileSync(file, 'utf8')).join('\n')

const requiredTerms = [
  'NearTec',
  'Desarrollamos tecnología',
  'CompuNegocio',
  'CN7',
  'CRM',
  'IA',
  '664 404 6194',
  'meta@itimbre.com',
  'NEA040929DKA',
  'Términos y condiciones',
  'Política de privacidad',
  'Política de cookies',
  'Aviso legal',
]

for (const term of requiredTerms) {
  if (!publicCode.toLowerCase().includes(term.toLowerCase())) {
    console.error(`No se encontró término requerido: ${term}`)
    process.exit(1)
  }
}

const forbidden = [
  'Panel demostrativo',
  'Stack NearTec',
  'Lead Score',
  'Webhook preparado',
  'info@neartec.com',
  'info@itimbre.com',
  '664 630',
  '526646300473',
]

for (const term of forbidden) {
  if (publicCode.includes(term)) {
    console.error(`Texto/contacto viejo detectado: ${term}`)
    process.exit(1)
  }
}

const api = fs.readFileSync('api/lead.js', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  console.error('api/lead.js no contiene NEARTEC_LEAD_WEBHOOK_URL')
  process.exit(1)
}

console.log('Preflight OK: NearTec Master 2026 listo para producción.')
