import fs from 'node:fs'

const required = [
  'index.html','assets/css/styles.css','assets/css/v33-real-services.css','assets/js/app.js','assets/js/v33-real-services.js','assets/icons/whatsapp-official.svg','api/lead.js','package.json','terminos/index.html','privacidad/index.html','cookies/index.html','aviso-legal/index.html','campanas/index.html'
]
const missing = required.filter((f)=>!fs.existsSync(f))
if (missing.length) { console.error('Faltan archivos V3.3:', missing.join(', ')); process.exit(1) }
const api = fs.readFileSync('api/lead.js','utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) { console.error('api/lead.js perdió NEARTEC_LEAD_WEBHOOK_URL'); process.exit(1) }
const index = fs.readFileSync('index.html','utf8')
for (const term of ['Desarrollamos tecnología','CompuNegocio','CN7','CRM','664 404 6194','meta@itimbre.com']) {
  if (!index.includes(term)) { console.error('Falta término público:', term); process.exit(1) }
}
console.log('Preflight OK: NearTec V3.3 real services visual fix listo.')
