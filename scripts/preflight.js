import fs from 'node:fs'
import { execFileSync } from 'node:child_process'

const required = [
  'index.html',
  'landing/index.html',
  'diagnostico/index.html',
  'cotizador/index.html',
  'compunegocio/index.html',
  'cn7/index.html',
  'crm/index.html',
  'web/index.html',
  'soporte/index.html',
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/js/pdf-engine.js',
  'assets/data/pricing.json',
  'assets/data/lead-rules.json',
  'api/lead.js',
  'vercel.json',
  'package.json'
]

let ok = true

for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error('Falta:', file)
    ok = false
  }
}

for (const file of ['assets/data/pricing.json', 'assets/data/lead-rules.json', 'vercel.json', 'package.json']) {
  try {
    JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch (error) {
    console.error('JSON inválido:', file, error.message)
    ok = false
  }
}

for (const file of ['assets/js/app.js', 'assets/js/pdf-engine.js', 'api/lead.js']) {
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' })
  } catch (error) {
    console.error('JS inválido:', file)
    ok = false
  }
}

const publicFiles = [
  'index.html',
  'landing/index.html',
  'diagnostico/index.html',
  'cotizador/index.html',
  'compunegocio/index.html',
  'cn7/index.html',
  'crm/index.html',
  'web/index.html',
  'soporte/index.html',
  'contacto/index.html',
  'assets/data/pricing.json',
  'assets/js/app.js',
  'assets/js/pdf-engine.js'
]

const publicCode = publicFiles
  .map((file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '')
  .join(String.fromCharCode(10))

const forbidden = [
  'Código V3',
  'Panel demostrativo',
  'Stack NearTec',
  'Webhook preparado',
  'Ruta preparada en código',
  'info@neartec.com',
  'info@itimbre.com',
  '664 630',
  '526646300473',
  'BOFU',
  'pauta',
  'API no disponible',
  'Lead capturado',
  'Lead guardado'
]

for (const term of forbidden) {
  if (publicCode.includes(term)) {
    console.error('Texto interno/contacto viejo detectado:', term)
    ok = false
  }
}

for (const term of ['664 404 6194', 'meta@itimbre.com', 'CompuNegocio', 'CN7', 'Desarrollamos tecnología', 'Descargar PDF']) {
  if (!publicCode.includes(term)) {
    console.error('Falta término público:', term)
    ok = false
  }
}

if (!ok) process.exit(1)
console.log('Preflight OK: NearTec V3.1 ventas, precios reales, cotizador, PDF y contacto oficial listos.')
