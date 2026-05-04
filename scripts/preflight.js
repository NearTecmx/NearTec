
import fs from 'node:fs';
const required=['index.html','assets/css/styles.css','assets/js/app.js','assets/js/pdf-engine.js','assets/data/pricing.json','api/lead.js','landing/index.html','campanas/index.html','cotizador/index.html','soluciones/index.html','terminos/index.html','cookies/index.html','aviso-legal/index.html'];
for(const f of required){if(!fs.existsSync(f)){console.error(`Falta ${f}`);process.exit(1)}}
const publicFiles=['index.html','landing/index.html','campanas/index.html','diagnostico/index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html','soporte/index.html','contacto/index.html','soluciones/index.html','privacidad/index.html','terminos/index.html','cookies/index.html','aviso-legal/index.html','assets/css/styles.css','assets/js/app.js','assets/data/pricing.json'];
const code=publicFiles.map(f=>fs.readFileSync(f,'utf8')).join('\n');
for(const bad of ['Panel demostrativo','Stack NearTec','Lead Score','Filtro comercial','Regla comercial','internamente ayuda','Lead capturado','Lead guardado','info@neartec.com','info@itimbre.com','664 630','526646300473','Código V3','Ruta preparada en código','Webhook preparado']){if(code.includes(bad)){console.error(`Texto público prohibido: ${bad}`);process.exit(1)}}
for(const term of ['NearTec','Neary AI','CompuNegocio','CN7','Cotizar proyecto','664 404 6194','meta@itimbre.com','NEA040929DKA']){if(!code.includes(term)){console.error(`Falta marcador público: ${term}`);process.exit(1)}}
console.log('Preflight OK: V3 base corregida quirúrgica lista.');
