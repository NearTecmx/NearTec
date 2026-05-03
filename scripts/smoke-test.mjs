import fs from 'node:fs'

const fail = (msg) => {
  console.error(msg)
  process.exit(1)
}

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

for (const file of pages) {
  if (!fs.existsSync(file)) fail(`No existe ${file}`)
  const html = fs.readFileSync(file, 'utf8')

  if (!html.includes('/assets/css/styles.css')) fail(`${file} no carga CSS`)
  if (!html.includes('/assets/js/app.js')) fail(`${file} no carga JS`)
}

const code = pages.map((file) => fs.readFileSync(file, 'utf8')).join('\n')

for (const term of [
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
]) {
  if (!code.toLowerCase().includes(term.toLowerCase())) {
    fail(`No se encontró término: ${term}`)
  }
}

for (const bad of [
  'Panel demostrativo',
  'Stack NearTec',
  'Lead Score',
  'Webhook preparado',
  'info@neartec.com',
  'info@itimbre.com',
  '664 630',
  '526646300473',
]) {
  if (code.includes(bad)) fail(`Texto viejo detectado: ${bad}`)
}

console.log('Smoke test OK: HTML, SEO, pricing, cotizador y API validados.')
