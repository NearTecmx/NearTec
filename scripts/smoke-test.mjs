import fs from 'node:fs'

function fail(message) {
  console.error('ERROR:', message)
  process.exit(1)
}

const pricing = JSON.parse(fs.readFileSync('assets/data/pricing.json', 'utf8'))

if (pricing.meta.contact.whatsapp !== '526644046194') fail('WhatsApp oficial incorrecto')
if (pricing.meta.contact.email_primary !== 'meta@itimbre.com') fail('Correo oficial incorrecto')
if (!pricing.compunegocio?.licenses?.some((item) => item.monthly_mxn === 450)) fail('Falta CompuNegocio $450')
if (!pricing.compunegocio?.licenses?.some((item) => item.monthly_mxn === 400)) fail('Falta CompuNegocio $400')
if (!pricing.compunegocio?.licenses?.some((item) => item.monthly_mxn === 350)) fail('Falta CompuNegocio $350')
if (pricing.compunegocio.implementation_mxn !== 1500) fail('Falta implementación $1,500')
if (!pricing.compunegocio?.cn7?.some((item) => item.monthly_usd === 99)) fail('Falta CN7 $99 USD')
if (!pricing.compunegocio?.cn7?.some((item) => item.monthly_usd === 149)) fail('Falta CN7 $149 USD')

for (const file of ['index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html']) {
  const html = fs.readFileSync(file, 'utf8')
  if (!html.includes('/assets/css/styles.css')) fail(`${file} no carga CSS`)
  if (!html.includes('/assets/js/app.js')) fail(`${file} no carga JS`)
  if (html.includes('Ruta preparada en código')) fail(`${file} conserva texto interno`)
  if (html.includes('Panel demostrativo')) fail(`${file} conserva panel interno`)
  if (html.includes('Stack NearTec')) fail(`${file} conserva stack interno`)
}

const app = fs.readFileSync('assets/js/app.js', 'utf8')
if (app.includes('526646300473') || app.includes('info@itimbre.com') || app.includes('info@neartec.com')) fail('app.js conserva contacto viejo')
if (!app.includes('No pude preparar el PDF')) fail('app.js no tiene mensaje PDF público')

console.log('Smoke test OK: V3.1 contenido público, costos reales, rutas, cotizador y PDF validados.')
