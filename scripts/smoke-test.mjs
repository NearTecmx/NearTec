import fs from 'node:fs'
function fail(msg){ console.error('ERROR:', msg); process.exit(1) }
const pricing = JSON.parse(fs.readFileSync('assets/data/pricing.json','utf8'))
if (!pricing.compunegocio?.licenses?.length) fail('pricing.json no tiene licencias CompuNegocio')
if (!pricing.compunegocio?.stamp_packages?.length) fail('pricing.json no tiene timbres CompuNegocio')
if (!pricing.itimbre?.software_packages?.length) fail('pricing.json no tiene paquetes iTimbre')
const htmlFiles = ['index.html','landing/index.html','diagnostico/index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html','contacto/index.html']
for (const file of htmlFiles) {
  const html = fs.readFileSync(file,'utf8')
  if (!html.includes('/assets/css/styles.css')) fail(`${file} no carga CSS`)
  if (!html.includes('/assets/js/app.js')) fail(`${file} no carga JS`)
}
console.log('Smoke test OK: rutas, JSON y referencias principales validadas.')
