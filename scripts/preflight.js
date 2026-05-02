import fs from 'node:fs'
const required=['index.html','assets/css/styles.css','assets/js/app.js','assets/data/pricing.json','api/lead.js','vercel.json']
const missing=required.filter(f=>!fs.existsSync(f))
if(missing.length){console.error('Faltan archivos V3:',missing);process.exit(1)}
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'))
if(!pkg.name.includes('v3')){console.error('package no es V3:',pkg.name);process.exit(1)}
const css=fs.readFileSync('assets/css/styles.css','utf8')
if(!css.includes('V3 Exact Animated Master')){console.error('No está aplicada la capa animada V3');process.exit(1)}
const api=fs.readFileSync('api/lead.js','utf8')
if(!api.includes('NEARTEC_LEAD_WEBHOOK_URL')){console.error('API perdió NEARTEC_LEAD_WEBHOOK_URL');process.exit(1)}
console.log('Preflight OK: NearTec V3 Exact Animated Master listo.')
