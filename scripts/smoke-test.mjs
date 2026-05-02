import fs from 'node:fs'
const read = (file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''

const files = [
  'app/page.tsx','app/v5.css','components/V5VisualSystem.tsx','components/FloatingAssist.tsx','components/Navbar.tsx','lib/site-data.ts','lib/neartec-data.ts'
]
for (const file of files) if (!fs.existsSync(file)) throw new Error(`Falta archivo requerido: ${file}`)

const code = files.map(read).join('\n')
const requiredTerms = [
  'Tecnología a medida para vender, operar y escalar', 'CompuNegocio', 'CN7', 'CRM', 'automatización', 'IA', 'nube', 'soporte',
  'cotizador', '664 404 6194', 'meta@itimbre.com', 'NEA040929DKA', 'HeroCommandCenter', 'PricingConstellation', 'Neary AI'
]
for (const term of requiredTerms) {
  if (!code.toLowerCase().includes(term.toLowerCase())) throw new Error(`No se encontró término clave V5.1: ${term}`)
}

for (const asset of [
  'public/images/visuals/hero-home-desktop.webp', 'public/images/visuals/hero-home-mobile.webp', 'public/images/visuals/visual-web.webp',
  'public/images/visuals/visual-crm.webp', 'public/images/visuals/visual-compunegocio.webp', 'public/images/visuals/visual-cn7.webp',
  'public/images/brand/neary-symbol.webp'
]) {
  if (!fs.existsSync(asset)) throw new Error(`Falta asset V5.1: ${asset}`)
}

const visual = read('components/V5VisualSystem.tsx')
for (const term of ['motion', 'ResponsiveContainer', 'AreaChart', 'BarChart']) {
  if (!visual.includes(term)) throw new Error(`V5VisualSystem no contiene ${term}`)
}

const assist = read('components/FloatingAssist.tsx')
for (const term of ['neary-symbol.webp', 'WhatsApp', 'v51-fab', 'v51-assist-panel']) {
  if (!assist.includes(term)) throw new Error(`FloatingAssist no contiene ${term}`)
}

for (const forbidden of ['664 630 0473','664-630-04-73','526646300473','info@neartec.com','info@itimbre.com','Diseño premium, información real','El sitio debe vender visualmente','Panel demostrativo','Stack NearTec','Webhook preparado']) {
  if (code.includes(forbidden)) throw new Error(`Copy/contacto viejo o interno detectado: ${forbidden}`)
}

const api = read('app/api/lead/route.ts')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')

console.log('Smoke test OK: NearTec V5.1 Home Premium validado con narrativa, assets, motion, charts, Neary/WhatsApp y contacto oficial.')
