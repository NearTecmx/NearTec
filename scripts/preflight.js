import fs from 'node:fs'
const required = ['index.html','landing/index.html','diagnostico/index.html','cotizador/index.html','assets/css/styles.css','assets/js/app.js','assets/js/pdf-engine.js','assets/data/pricing.json','assets/data/lead-rules.json','api/lead.js','vercel.json','package.json']
let ok = true
for (const file of required) {
  if (!fs.existsSync(file)) { console.error('Falta:', file); ok = false }
}
for (const file of ['assets/data/pricing.json','assets/data/lead-rules.json','vercel.json','package.json']) {
  try { JSON.parse(fs.readFileSync(file,'utf8')) } catch (e) { console.error('JSON inválido:', file, e.message); ok = false }
}
if (!ok) process.exit(1)
console.log('Preflight OK: NearTec V3 CodeFirst listo para GitHub y Vercel.')
