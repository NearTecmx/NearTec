import fs from 'node:fs';
const required=['index.html','assets/css/styles.css','assets/js/app.js','assets/data/pricing.json','api/lead.js','api/quote-pdf.js','vercel.json','package.json','landing/index.html','campanas/index.html','cotizador/index.html','web/index.html','crm/index.html','compunegocio/index.html','cn7/index.html','soporte/index.html'];
for(const f of required){if(!fs.existsSync(f)){console.error('Falta '+f);process.exit(1)}}
const publicFiles=['index.html','landing/index.html','campanas/index.html','cotizador/index.html','web/index.html','crm/index.html','compunegocio/index.html','cn7/index.html','soporte/index.html','contacto/index.html','soluciones/index.html','assets/css/styles.css','assets/js/app.js'].filter(fs.existsSync);
const code=publicFiles.map(f=>fs.readFileSync(f,'utf8')).join('\n');
const forbidden=['Panel demostrativo','Stack NearTec','Lead Score','Filtro comercial','Regla comercial','internamente ayuda','Lead capturado','Lead guardado','info@neartec.com','info@itimbre.com','664 630','526646300473','Código V3','Ruta preparada en código','Webhook preparado'];
for(const t of forbidden){if(code.includes(t)){console.error('Texto público prohibido: '+t);process.exit(1)}}
const requiredTerms=['Neary AI','CompuNegocio','CN7','Cotizar proyecto','664 404 6194','meta@itimbre.com','NEA040929DKA','Descargar PDF','Landing estratégica'];
for(const t of requiredTerms){if(!code.includes(t)){console.error('Falta marcador público: '+t);process.exit(1)}}
const css=fs.readFileSync('assets/css/styles.css','utf8');for(const t of ['tech-canvas','assist-panel','footer-cta','bar-track','orbit','@media(prefers-reduced-motion:reduce)']){if(!css.includes(t)){console.error('Falta CSS: '+t);process.exit(1)}}
console.log('Preflight OK: V3 full compliance lista.')
