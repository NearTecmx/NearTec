import fs from 'node:fs'

const routes = [
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/cotizador/page.tsx',
  'app/compunegocio/page.tsx',
  'app/cn7/page.tsx',
  'app/crm-automatizacion/page.tsx',
  'app/diseno-web/page.tsx'
]

for (const route of routes) {
  if (!fs.existsSync(route)) throw new Error(`Falta ${route}`)
}

const home = fs.readFileSync('app/page.tsx','utf8')
for (const term of ['venda más', 'Quiero cotizar', 'Quiero diagnóstico', 'WhatsApp']) {
  if (!home.includes(term)) throw new Error(`Home no contiene ${term}`)
}

const landing = fs.readFileSync('app/landing/page.tsx','utf8')
for (const term of ['Convierte visitas', 'Quiero diagnóstico', 'WhatsApp']) {
  if (!landing.includes(term)) throw new Error(`Landing no contiene ${term}`)
}

const css = fs.readFileSync('app/globals.css','utf8')
for (const term of ['v45-hero', 'v45-landing-scene', 'v45-funnel-scene', 'v45-service-visual', 'section-separated', 'solution-card-v2', 'lead-card']) {
  if (!css.includes(term)) throw new Error(`CSS no contiene ${term}`)
}

const data = fs.readFileSync('lib/neartec-data.ts','utf8')
if (!data.includes('664 404 6194') || !data.includes('meta@itimbre.com')) {
  throw new Error('Contacto oficial no actualizado')
}

const publicCode = [
  fs.readFileSync('app/page.tsx','utf8'),
  fs.readFileSync('components/VisualSystems.tsx','utf8'),
  fs.readFileSync('components/Footer.tsx','utf8')
].join('\n')

for (const forbidden of ['Panel demostrativo', 'Stack NearTec', 'Webhook preparado', 'perfilando', 'Lead Score']) {
  if (publicCode.includes(forbidden)) throw new Error(`Copy interno detectado: ${forbidden}`)
}

const api = fs.readFileSync('app/api/lead/route.ts','utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API no contiene webhook')

console.log('Smoke test OK: V4.5 copy vendedor, visual premium, contacto, landing y API validadas.')
