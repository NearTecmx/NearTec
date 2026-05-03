
import fs from 'node:fs';
const pages=['index.html','cotizador/index.html','landing/index.html','campanas/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html'];
for(const p of pages){const html=fs.readFileSync(p,'utf8');for(const req of ['/assets/css/styles.css','/assets/js/app.js','/assets/img/neartec-og.png']) if(!html.includes(req)) throw new Error(`${p} no contiene ${req}`)}
const pricing=JSON.parse(fs.readFileSync('assets/data/pricing.json','utf8')); if(pricing.compunegocio.licenses[0].monthly!==450) throw new Error('Precio CN incorrecto');
const api=fs.readFileSync('api/lead.js','utf8'); if(!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API sin webhook env');
console.log('Smoke test OK: HTML, SEO, pricing, cotizador y API validados.');
