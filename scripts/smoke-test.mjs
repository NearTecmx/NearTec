import fs from 'node:fs'

const read = (file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''

const publicCode = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/soluciones/page.tsx',
  'app/cotizador/page.tsx',
  'app/diseno-web/page.tsx',
  'app/crm-automatizacion/page.tsx',
  'app/compunegocio/page.tsx',
  'app/cn7/page.tsx',
  'app/soporte/page.tsx',
  'components/V52FusionSystem.tsx',
  'components/ServicePage.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/FloatingAssist.tsx',
  'lib/site-data.ts',
  'app/v52.css',
].map(read).join('\n')

const requiredTerms = [
  'NearTec',
  'Desarrollamos tecnología',
  'web',
  'apps',
  'CRM',
  'automatización',
  'IA',
  'CompuNegocio',
  'CN7',
  'nube',
  'hosting',
  'VPS',
  'FTP',
  'correo',
  'soporte',
  '664 404 6194',
  'meta@itimbre.com',
  'NEA040929DKA',
]

for (const term of requiredTerms) {
  if (!publicCode.toLowerCase().includes(term.toLowerCase())) {
    throw new Error(`No se encontró término V5.2: ${term}`)
  }
}

const requiredAssets = [
  'public/images/visuals/hero-home-desktop.webp',
  'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/hero-landing-desktop.webp',
  'public/images/visuals/visual-web.webp',
  'public/images/visuals/visual-crm.webp',
  'public/images/visuals/visual-compunegocio.webp',
  'public/images/visuals/visual-cn7.webp',
  'public/images/visuals/visual-cotizador.webp',
  'public/images/brand/neary-symbol.webp',
  'public/images/og/og-home.png',
]

for (const file of requiredAssets) {
  if (!fs.existsSync(file)) {
    throw new Error(`Falta asset V5.2: ${file}`)
  }
}

for (const term of ['motion', 'ResponsiveContainer', 'AreaChart', 'BarChart', 'RadialBarChart']) {
  if (!publicCode.includes(term)) {
    throw new Error(`Falta motion/chart V5.2: ${term}`)
  }
}

for (const forbidden of [
  '664 404 6194',
  '664 404 6194',
  '526644046194',
  'meta@itimbre.com',
  'meta@itimbre.com',
  'Ecosistema operativo',
  'Stack NearTec',
  'Webhook preparado',
]) {
  if (publicCode.includes(forbidden)) {
    throw new Error(`Copy/contacto viejo o interno detectado: ${forbidden}`)
  }
}

const api = read('app/api/lead/route.ts')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')
}

console.log('Smoke test OK: NearTec V5.2 Fusion Master validado.')
