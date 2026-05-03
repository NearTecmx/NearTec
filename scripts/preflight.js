import fs from 'node:fs'
import path from 'node:path'

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

const required = [
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/data/pricing.json',
  'assets/data/lead-rules.json',
  'assets/icons/neartec-isotipo.png',
  'assets/icons/neary-premium.png',
  'assets/icons/whatsapp-official.svg',
  'assets/icons/favicon.svg',
  'assets/img/neartec-logo-clean.png',
  'assets/img/neartec-og.png',
  'assets/img/neartec-twitter.png',
  'api/lead.js',
  'api/health.js',
  'vercel.json',
  'sitemap.xml',
  'robots.txt',
  'site.webmanifest',
]

for (const file of [...pages, ...required]) {
  if (!fs.existsSync(file)) {
    console.error(`Falta archivo requerido: ${file}`)
    process.exit(1)
  }
}

const publicCode = pages.map((file) => fs.readFileSync(file, 'utf8')).join('\n')
const requiredTerms = [
  'NearTec',
  'CompuNegocio',
  'CN7',
  '664 404 6194',
  'meta@itimbre.com',
  'NEA040929DKA',
  'Política de privacidad',
  'Términos y condiciones',
]
for (const term of requiredTerms) {
  if (!publicCode.includes(term)) {
    console.error(`Falta término público: ${term}`)
    process.exit(1)
  }
}

const forbidden = [
  'Panel' + ' demostrativo',
  'Stack' + ' NearTec',
  'Lead' + ' Score',
  'info@' + 'neartec.com',
  'info@' + 'itimbre.com',
  '664' + ' 630',
  '526646' + '300473',
]
for (const bad of forbidden) {
  if (publicCode.includes(bad)) {
    console.error(`Texto viejo/interno detectado: ${bad}`)
    process.exit(1)
  }
}

const assetRefs = []
const assetRegex = /(?:href|src|content)=["'](\/assets\/[^"']+)["']|url\(["']?(\/assets\/[^"')]+)["']?\)/g
for (const file of [...pages, 'assets/css/styles.css', 'site.webmanifest']) {
  const text = fs.readFileSync(file, 'utf8')
  for (const match of text.matchAll(assetRegex)) {
    assetRefs.push({ file, ref: match[1] || match[2] })
  }
}
const missingAssets = assetRefs.filter(({ ref }) => !fs.existsSync(path.join(process.cwd(), ref.replace(/^\//, '').split('?')[0])))
if (missingAssets.length) {
  console.error('Assets referenciados no encontrados:')
  for (const item of missingAssets) console.error(`- ${item.file}: ${item.ref}`)
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (pkg.type !== 'module') {
  console.error('package.json debe conservar type=module para API serverless ESM')
  process.exit(1)
}
if (pkg.engines?.node !== '20.x') {
  console.error('package.json debe usar Node 20.x para Vercel')
  process.exit(1)
}

const api = fs.readFileSync('api/lead.js', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  console.error('API /api/lead perdió NEARTEC_LEAD_WEBHOOK_URL')
  process.exit(1)
}

console.log('Preflight OK: NearTec Master 2026 compatible, assets completos y listo para Vercel.')
