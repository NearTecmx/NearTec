import { readFileSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'

const root = process.cwd()
const required = [
  'index.html',
  'landing-diagnostico.html',
  'vercel.json',
  'package.json',
  'api/lead.js',
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/js/pdf-engine.js',
  'assets/data/pricing.json',
  'assets/data/lead-rules.json',
  'assets/img/neartec-logo.jpg',
  'assets/icons/favicon.svg',
  'robots.txt',
  'sitemap.xml'
]

const fail = (msg) => {
  console.error(`ERROR: ${msg}`)
  process.exit(1)
}

for (const file of required) {
  if (!existsSync(path.join(root, file))) fail(`Falta archivo requerido: ${file}`)
}

for (const file of ['package.json', 'vercel.json', 'assets/data/pricing.json', 'assets/data/lead-rules.json']) {
  try { JSON.parse(readFileSync(path.join(root, file), 'utf8')) } catch (err) { fail(`JSON inválido en ${file}: ${err.message}`) }
}

for (const file of ['api/lead.js', 'assets/js/app.js', 'assets/js/pdf-engine.js', 'scripts/preflight.js']) {
  execFileSync('node', ['--check', file], { stdio: 'inherit' })
}

const localRefs = new Set()
for (const html of ['index.html', 'landing-diagnostico.html']) {
  const source = readFileSync(path.join(root, html), 'utf8')
  const regex = /(?:src|href)=["']([^"']+)["']/g
  let match
  while ((match = regex.exec(source))) {
    const href = match[1]
    if (/^(https?:|mailto:|tel:|#|data:|\/\/)/.test(href)) continue
    const clean = href.split('#')[0].split('?')[0]
    if (!clean) continue
    localRefs.add(clean)
  }
}

for (const ref of localRefs) {
  const file = path.join(root, ref.replace(/^\//, ''))
  if (!existsSync(file)) fail(`Referencia local rota: ${ref}`)
}

const pricing = JSON.parse(readFileSync(path.join(root, 'assets/data/pricing.json'), 'utf8'))
if (!pricing.meta?.contact?.whatsapp) fail('pricing.json no tiene meta.contact.whatsapp')
if (!pricing.compunegocio?.licenses?.length) fail('pricing.json no tiene licencias CompuNegocio')
const hasStampPackages =
  Boolean(pricing.compunegocio?.stamp_packages?.length) ||
  Boolean(pricing.itimbre?.stamps_standard_unit_no_vat?.length) ||
  Boolean(pricing.itimbre?.stamps_lite_no_vat?.length)
if (!hasStampPackages) fail('pricing.json no tiene paquetes de timbres CompuNegocio/iTimbre')

console.log('Smoke test OK: estructura, JSON, JS y referencias locales validadas.')
