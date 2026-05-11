import fs from 'fs';
const release='NEARTEC-FINAL-RENDER-LIGHT-TRUE-SCENE-2026-R3-BG1';
const cssName='neartec-final-render-light-true-scene-2026-r3-bg1.css';
const jsName='neartec-final-render-light-true-scene-2026-r3-bg1.js';
const pages=['index.html','servicios/index.html','compunegocio/index.html','cn7/index.html','cotizador/index.html','diagnostico/index.html','contacto/index.html','campanas/index.html','gracias/index.html','aviso-privacidad/index.html','terminos-condiciones/index.html','404/index.html','404.html'];
const forbidden=['styles.css?v=20260504-full','Panel demostrativo','Stack NearTec','Regla comercial','Blog','Recursos','Casos','/web/','/crm/','/soporte/','/soluciones/','/landing/','/privacidad/','/terminos/','/cookies/','/aviso-legal/','info@neartec.com','664 630 0473'];
let ok=true;
for(const file of pages){
  if(!fs.existsSync(file)){console.error('Falta '+file);ok=false;continue}
  const html=fs.readFileSync(file,'utf8');
  if(!html.includes(release)){console.error(file+' no usa release R3');ok=false}
  if(!html.includes(cssName)){console.error(file+' no usa CSS R3');ok=false}
  if(!html.includes(jsName)){console.error(file+' no usa JS R3');ok=false}
  for(const bad of forbidden){if(html.includes(bad)){console.error(file+' contiene '+bad);ok=false}}
}
for(const file of ['assets/css/neartec-final-render-light-true-scene-2026-r3-bg1.css','assets/js/neartec-final-render-light-true-scene-2026-r3-bg1.js','api/health.js','vercel.json','package.json']){
  if(!fs.existsSync(file)){console.error('Falta '+file);ok=false}
}
const home=fs.readFileSync('index.html','utf8');
['Sistema conectado','Ruta de conversión','CompuNegocio','CN7 / Respaldo','Cotizador visual'].forEach(t=>{if(!home.includes(t)){console.error('Home incompleta: '+t);ok=false}});
const camp=fs.readFileSync('campanas/index.html','utf8');
if(!camp.includes('form-campana')||!camp.includes('WhatsApp directo')){console.error('Campañas incompleta');ok=false}
const quote=fs.readFileSync('cotizador/index.html','utf8');
if(!quote.includes('Descargar PDF')||!quote.includes('Enviar por WhatsApp')){console.error('Cotizador incompleto');ok=false}
if(!ok)process.exit(1);
console.log('NearTec True Scene R3 Premium Conversion Layout OK');
