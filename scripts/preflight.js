const fs = require('node:fs')
const required = ['package.json','next.config.js','app/layout.tsx','app/page.tsx','app/api/lead/route.ts','components/QuoteEngine.tsx','components/FloatingAssist.tsx','components/VisualSystems.tsx','public/images/neartec-logo-real.png']
const missing = required.filter(f => !fs.existsSync(f))
if (missing.length) { console.error('Faltan archivos:', missing.join(', ')); process.exit(1) }
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'))
if (pkg.engines?.node !== '20.x') { console.error('Node no está fijado en 20.x'); process.exit(1) }
console.log('Preflight OK: V4.4 Next.js visual premium sales system lista para GitHub y Vercel.')
