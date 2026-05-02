const fs = require('node:fs')

const required = [
  'package.json',
  'next.config.js',
  'app/layout.tsx',
  'app/page.tsx',
  'app/api/lead/route.ts',
  'components/QuoteEngine.tsx',
  'components/FloatingAssist.tsx',
  'components/AssetVisuals.tsx',
  'components/ServicePage.tsx',
  'public/images/neartec-logo-real.png',
  'public/images/visuals/hero-home-desktop.webp',
  'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/visual-compunegocio.webp',
  'public/images/visuals/visual-cn7.webp',
  'public/images/brand/neary-symbol.webp',
]

const missing = required.filter((f) => !fs.existsSync(f))
if (missing.length) {
  console.error('Faltan archivos:', missing.join(', '))
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (pkg.engines?.node !== '20.x') {
  console.error('Node no está fijado en 20.x')
  process.exit(1)
}
if (!String(pkg.name).includes('v47')) {
  console.error('Package no está actualizado a V4.7')
  process.exit(1)
}

console.log('Preflight OK: V4.7 technology integrator system lista para GitHub y Vercel.')
