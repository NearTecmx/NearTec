import fs from 'node:fs'

const requiredFiles = [
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/cotizador/page.tsx',
  'app/compunegocio/page.tsx',
  'app/cn7/page.tsx',
  'app/crm-automatizacion/page.tsx',
  'app/diseno-web/page.tsx',
  'components/AssetVisuals.tsx',
  'components/ServicePage.tsx',
  'components/QuoteEngine.tsx',
  'components/FloatingAssist.tsx',
  'public/images/visuals/hero-home-desktop.webp',
  'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/hero-landing-desktop.webp',
  'public/images/visuals/hero-landing-mobile.webp',
  'public/images/visuals/visual-compunegocio.webp',
  'public/images/visuals/visual-cn7.webp',
  'public/images/visuals/visual-crm.webp',
  'public/images/visuals/visual-cotizador.webp',
  'public/images/visuals/visual-neary.webp',
  'public/images/brand/neary-symbol.webp',
  'public/images/og/og-home.png',
  'public/images/og/og-landing.png',
  'public/images/og/og-cotizador.png'
]

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`Falta archivo requerido: ${file}`)
}

const home = fs.readFileSync('app/page.tsx', 'utf8')
for (const term of [
  'ventas reales',
  'Cotizar mi solución',
  'Quiero mi diagnóstico',
  'WhatsApp',
  'HeroAssetScene'
]) {
  if (!home.includes(term)) throw new Error(`Home no contiene ${term}`)
}

const landing = fs.readFileSync('app/landing/page.tsx', 'utf8')
for (const term of [
  'Diagnóstico que convierte',
  'Quiero mi diagnóstico',
  'WhatsApp',
  'LandingAssetScene'
]) {
  if (!landing.includes(term)) throw new Error(`Landing no contiene ${term}`)
}

const cotizador = fs.readFileSync('app/cotizador/page.tsx', 'utf8')
for (const term of [
  'Cotiza con claridad',
  'QuoteAssetVisual',
  'QuoteEngine'
]) {
  if (!cotizador.includes(term)) throw new Error(`Cotizador no contiene ${term}`)
}

const css = fs.readFileSync('app/globals.css', 'utf8')
for (const term of [
  'asset-hero-shell',
  'asset-landing-shell',
  'asset-service-shell',
  'asset-quote-shell',
  'asset-hero-img',
  'asset-service-copy',
  'section-separated',
  'solution-card-v2',
  'lead-card'
]) {
  if (!css.includes(term)) throw new Error(`CSS no contiene ${term}`)
}

const data = fs.readFileSync('lib/neartec-data.ts', 'utf8')
if (!data.includes('664 404 6194') || !data.includes('meta@itimbre.com')) {
  throw new Error('Contacto oficial no actualizado')
}

const publicCode = [
  fs.readFileSync('app/page.tsx', 'utf8'),
  fs.readFileSync('app/landing/page.tsx', 'utf8'),
  fs.readFileSync('app/cotizador/page.tsx', 'utf8'),
  fs.readFileSync('components/AssetVisuals.tsx', 'utf8'),
  fs.readFileSync('components/ServicePage.tsx', 'utf8'),
  fs.readFileSync('components/Footer.tsx', 'utf8')
].join('\n')

for (const forbidden of [
  'Panel demostrativo',
  'Stack NearTec',
  'Webhook preparado',
  'Lead Score',
  'lead score'
]) {
  if (publicCode.includes(forbidden)) {
    throw new Error(`Copy interno detectado: ${forbidden}`)
  }
}

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')
}

console.log('Smoke test OK: V4.6 assets, copy vendedor, contacto, landing, cotizador y API validados.')
