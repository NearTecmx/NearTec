const fs = require('node:fs')
const path = require('node:path')

const requiredFiles = [
  'package.json', 'next.config.js', 'app/layout.tsx', 'app/page.tsx', 'app/api/lead/route.ts', 'app/v5.css',
  'components/V5VisualSystem.tsx', 'components/FloatingAssist.tsx', 'components/Navbar.tsx', 'components/Footer.tsx',
  'components/ServicePage.tsx', 'components/QuoteEngine.tsx', 'lib/site-data.ts', 'lib/neartec-data.ts',
  'public/images/visuals/hero-home-desktop.webp', 'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/visual-web.webp', 'public/images/visuals/visual-crm.webp',
  'public/images/visuals/visual-compunegocio.webp', 'public/images/visuals/visual-cn7.webp',
  'public/images/visuals/visual-cotizador.webp', 'public/images/brand/neary-symbol.webp',
]

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)))
if (missing.length) {
  console.error('Faltan archivos requeridos para V5.1:')
  for (const file of missing) console.error(`- ${file}`)
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (!pkg.name || !pkg.name.includes('v51')) {
  console.error(`Package no está actualizado a V5.1. Actual: ${pkg.name}`)
  process.exit(1)
}

for (const dep of ['framer-motion', 'recharts', 'lucide-react']) {
  if (!pkg.dependencies?.[dep]) {
    console.error(`Falta dependencia ${dep}`)
    process.exit(1)
  }
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

console.log('Preflight OK: NearTec V5.1 Home Premium System listo para Vercel.')
