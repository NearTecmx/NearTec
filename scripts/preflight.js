const fs = require('node:fs')
const path = require('node:path')

const requiredFiles = [
  'package.json',
  'next.config.js',
  'app/layout.tsx',
  'app/page.tsx',
  'app/api/lead/route.ts',
  'app/v5.css',
  'components/V5VisualSystem.tsx',
  'components/FloatingAssist.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/ServicePage.tsx',
  'components/QuoteEngine.tsx',
  'lib/site-data.ts',
  'lib/neartec-data.ts',
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

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)))

if (missing.length) {
  console.error('Faltan archivos requeridos para V5.0.2:')
  for (const file of missing) console.error(`- ${file}`)
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

if (!pkg.name || !pkg.name.includes('v502')) {
  console.error(`Package no está actualizado a V5.0.2. Actual: ${pkg.name}`)
  process.exit(1)
}

if (!pkg.dependencies?.['framer-motion']) {
  console.error('Falta dependencia framer-motion')
  process.exit(1)
}

if (!pkg.dependencies?.recharts) {
  console.error('Falta dependencia recharts')
  process.exit(1)
}

if (!pkg.dependencies?.['lucide-react']) {
  console.error('Falta dependencia lucide-react')
  process.exit(1)
}

const layout = fs.readFileSync('app/layout.tsx', 'utf8')
if (!layout.includes('v5.css')) {
  console.error('app/layout.tsx no importa app/v5.css')
  process.exit(1)
}

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  console.error('API /api/lead no contiene NEARTEC_LEAD_WEBHOOK_URL')
  process.exit(1)
}

console.log('Preflight OK: NearTec V5.0.2 Technology Integrator Master listo para Vercel.')
