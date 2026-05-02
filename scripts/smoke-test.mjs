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
  'components/FloatingAssist.tsx',
  'components/ServicePage.tsx',
  'components/QuoteEngine.tsx',
  'public/images/visuals/hero-home-desktop.webp',
  'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/hero-landing-desktop.webp',
  'public/images/visuals/hero-landing-mobile.webp',
  'public/images/visuals/visual-web.webp',
  'public/images/visuals/visual-crm.webp',
  'public/images/visuals/visual-compunegocio.webp',
  'public/images/visuals/visual-cn7.webp',
  'public/images/visuals/visual-cotizador.webp',
  'public/images/visuals/visual-neary.webp',
  'public/images/brand/neary-symbol.webp',
  'public/images/og/og-home.png',
  'public/images/og/og-landing.png',
  'public/images/og/og-cotizador.png',
]

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`Falta archivo requerido: ${file}`)
}

const assetVisuals = fs.readFileSync('components/AssetVisuals.tsx', 'utf8')
for (const term of [
  'export function HomeHeroAsset',
  'export function LandingAssetScene',
  'export function QuoteAssetVisual',
  'export function ServiceAssetVisual',
  'export function ServiceShowcaseVisual',
  'export function NearyAssistantVisual',
]) {
  if (!assetVisuals.includes(term)) throw new Error(`AssetVisuals no contiene ${term}`)
}

const publicCode = [
  fs.readFileSync('app/page.tsx', 'utf8'),
  fs.readFileSync('app/soluciones/page.tsx', 'utf8'),
  fs.readFileSync('app/landing/page.tsx', 'utf8'),
  fs.readFileSync('app/cotizador/page.tsx', 'utf8'),
  fs.readFileSync('app/compunegocio/page.tsx', 'utf8'),
  fs.readFileSync('app/cn7/page.tsx', 'utf8'),
  fs.readFileSync('app/crm-automatizacion/page.tsx', 'utf8'),
  fs.readFileSync('app/diseno-web/page.tsx', 'utf8'),
  fs.readFileSync('components/AssetVisuals.tsx', 'utf8'),
  fs.readFileSync('components/FloatingAssist.tsx', 'utf8'),
  fs.readFileSync('components/Footer.tsx', 'utf8'),
  fs.readFileSync('lib/neartec-data.ts', 'utf8'),
].join('\n')

for (const term of [
  '664 404 6194',
  'meta@itimbre.com',
  'web',
  'apps',
  'automatización',
  'inteligencia artificial',
  'CompuNegocio',
  'CN7',
  'nube',
  'hosting',
  'VPS',
  'soporte',
  '$450 MXN',
  '$99 USD',
]) {
  if (!publicCode.toLowerCase().includes(term.toLowerCase())) {
    throw new Error(`No se encontró término clave: ${term}`)
  }
}

for (const forbidden of [
  '664 630 0473',
  'info@neartec.com',
  'info@itimbre.com',
  'Panel demostrativo',
  'Stack NearTec',
  'Webhook preparado',
  'Lead Score',
  'lead score',
  'Haz que cada lead llegue',
]) {
  if (publicCode.includes(forbidden)) {
    throw new Error(`Copy/contacto interno o viejo detectado: ${forbidden}`)
  }
}

const layout = fs.readFileSync('app/layout.tsx', 'utf8')
if (layout.includes('next/font/google')) throw new Error('Layout aún depende de next/font/google')

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')

console.log('Smoke test OK: V4.7 narrativa tecnológica integral, assets, mobile-first, contacto, cotizador y API validados.')
