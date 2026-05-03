
import fs from 'node:fs';
const required=['index.html','assets/css/styles.css','assets/js/app.js','api/lead.js','api/quote-pdf.js','package.json','vercel.json','cotizador/index.html','landing/index.html','campanas/index.html','assets/img/neartec-logo-clean.png','assets/icons/whatsapp-official.svg'];
for(const f of required){if(!fs.existsSync(f)){console.error(`Falta ${f}`);process.exit(1)}}
const publicFiles=['index.html','landing/index.html','campanas/index.html','cotizador/index.html','web/index.html','crm/index.html','compunegocio/index.html','cn7/index.html','soporte/index.html','contacto/index.html','soluciones/index.html','assets/css/styles.css','assets/js/app.js'];
const code=publicFiles.map(f=>fs.readFileSync(f,'utf8')).join('\n');
const forbidden=['Panel demostrativo','Stack NearTec','Lead Score','Filtro comercial','Regla comercial','internamente ayuda','Lead capturado','Lead guardado','info@neartec.com','info@itimbre.com','664 630','526646300473'];
for(const term of forbidden){if(code.toLowerCase().includes(term.toLowerCase())){console.error(`Texto público prohibido: ${term}`);process.exit(1)}}
for(const term of ['NearTec','Neary AI','CompuNegocio','CN7','Cotizar proyecto','664 404 6194','meta@itimbre.com','NEA040929DKA']){if(!code.includes(term)){console.error(`Falta marcador público: ${term}`);process.exit(1)}}
console.log('Preflight OK: fuente pública, assets, Neary, cotizador y SEO base validados.');
