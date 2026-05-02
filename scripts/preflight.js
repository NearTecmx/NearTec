const fs = require('fs')
const path = require('path')

const requiredFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/soluciones/page.tsx',
  'app/cotizador/page.tsx',
  'app/v52.css',
  'components/V52FusionSystem.tsx',
  'components/ServicePage.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/FloatingAssist.tsx',
  'lib/site-data.ts',
  'app/api/lead/route.ts',
]

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)))
if (missing.length) {
  console.error('Faltan archivos V5.2:')
  for (const file of missing) console.error(`- ${file}`)
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (!pkg.name?.includes('v52')) {
  console.error(`package.json no está en V5.2. Actual: ${pkg.name}`)
  process.exit(1)
}

for (const dep of ['framer-motion', 'recharts', 'lucide-react']) {
  if (!pkg.dependencies?.[dep]) {
    console.error(`Falta dependencia ${dep}`)
    process.exit(1)
  }
}

const layout = fs.readFileSync('app/layout.tsx', 'utf8')
if (!layout.includes('v52.css')) {
  console.error('layout no importa app/v52.css')
  process.exit(1)
}

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  console.error('API /api/lead no conserva NEARTEC_LEAD_WEBHOOK_URL')
  process.exit(1)
}

console.log('Preflight OK: NearTec V5.2 Fusion Master listo para Vercel.')
