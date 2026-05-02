import fs from 'node:fs'

const read = (file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''

const requiredFiles = [
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/cotizador/page.tsx',
  'app/compunegocio/page.tsx',
  'app/cn7/page.tsx',
  'app/crm-automatizacion/page.tsx',
  'app/diseno-web/page.tsx',
  'app/soporte/page.tsx',
  'components/V5VisualSystem.tsx',
  'components/FloatingAssist.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/ServicePage.tsx',
  'components/QuoteEngine.tsx',
  'lib/site-data.ts',
  'lib/neartec-data.ts',
  'app/v5.css',
]

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`Falta archivo requerido: ${file}`)
}

const publicCode = [
  read('app/page.tsx'),
  read('app/landing/page.tsx'),
  read('app/cotizador/page.tsx'),
  read('app/compunegocio/page.tsx'),
  read('app/cn7/page.tsx'),
  read('app/crm-automatizacion/page.tsx'),
  read('app/diseno-web/page.tsx'),
  read('app/soporte/page.tsx'),
  read('components/V5VisualSystem.tsx'),
  read('components/FloatingAssist.tsx'),
  read('components/Navbar.tsx'),
  read('components/Footer.tsx'),
  read('components/ServicePage.tsx'),
  read('lib/site-data.ts'),
  read('lib/neartec-data.ts'),
  read('app/v5.css'),
].join('\n')

const requiredTerms = [
  'NearTec',
  'CompuNegocio',
  'CN7',
  'CRM',
  'automatización',
  'IA',
  'nube',
  'soporte',
  'cotizador',
  '664 404 6194',
  'meta@itimbre.com',
  'NEA040929DKA',
]

for (const term of requiredTerms) {
  if (!publicCode.toLowerCase().includes(term.toLowerCase())) {
    throw new Error(`No se encontró término clave V5: ${term}`)
  }
}

const requiredAssets = [
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
]

for (const file of requiredAssets) {
  if (!fs.existsSync(file)) throw new Error(`Falta asset V5: ${file}`)
}

const visualSystem = read('components/V5VisualSystem.tsx')

if (!visualSystem.includes('motion')) {
  throw new Error('V5VisualSystem no contiene motion de framer-motion')
}

if (!visualSystem.includes('ResponsiveContainer')) {
  throw new Error('V5VisualSystem no contiene ResponsiveContainer de Recharts')
}

const chartPrimitives = [
  'LineChart',
  'AreaChart',
  'BarChart',
  'RadialBarChart',
  'PieChart',
  'ComposedChart'
]

const detectedCharts = chartPrimitives.filter((term) => visualSystem.includes(term))

if (detectedCharts.length < 1) {
  throw new Error('V5VisualSystem no contiene ningún chart real de Recharts')
}

if (!visualSystem.includes('AreaChart') && !visualSystem.includes('BarChart')) {
  throw new Error('V5VisualSystem no contiene gráficas comerciales AreaChart/BarChart')
}

const assist = read('components/FloatingAssist.tsx')
for (const term of ['neary-symbol.webp', 'WhatsApp', 'Neary']) {
  if (!assist.includes(term)) {
    throw new Error(`FloatingAssist no contiene ${term}`)
  }
}

const api = read('app/api/lead/route.ts')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')
}

for (const forbidden of [
  '664 630 0473',
  '664-630-04-73',
  'info@neartec.com',
  'info@itimbre.com',
  'Panel demostrativo',
  'Stack NearTec',
  'Webhook preparado',
]) {
  if (publicCode.includes(forbidden)) {
    throw new Error(`Copy/contacto viejo o interno detectado: ${forbidden}`)
  }
}

console.log('Smoke test OK: NearTec V5.0.2 validado con assets, narrativa tecnológica, contacto, motion, charts, Neary y API.')
