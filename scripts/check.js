import fs from 'fs';
import path from 'path';
const root=process.cwd();
const release='NEARTEC-FINAL-RENDER-LIGHT-TRUE-SCENE-2026-R2';
const cssName='neartec-final-render-light-true-scene-2026-r2.css';
const jsName='neartec-final-render-light-true-scene-2026-r2.js';
const required=[
 'index.html','servicios/index.html','compunegocio/index.html','cn7/index.html','cotizador/index.html','diagnostico/index.html','contacto/index.html','campanas/index.html','gracias/index.html','aviso-privacidad/index.html','terminos-condiciones/index.html','404/index.html','404.html',
 `assets/css/${cssName}`,`assets/js/${jsName}`,'assets/img/neartec-logo-dark.png','assets/img/neartec-logo-light.png','assets/img/neartec-isotipo.png','assets/hero/hero-neartec-ecosystem.webp','assets/modules/module-compunegocio.webp','assets/modules/module-cn7-respaldo.webp','api/health.js','api/lead.js','api/neary.js','api/public-config.js','api/quote-pdf.js','api/whatsapp-send.js','api/whatsapp-webhook.js','server.js','vercel.json','package.json'
];
let ok=true; const fail=(m)=>{console.error(m); ok=false};
for(const f of required){ if(!fs.existsSync(path.join(root,f))) fail(`Falta archivo crítico: ${f}`); }
const htmlFiles=required.filter(f=>f.endsWith('.html') && fs.existsSync(path.join(root,f)));
const all=[];
for(const file of htmlFiles){ const html=fs.readFileSync(path.join(root,file),'utf8'); all.push(html); if(!html.includes(release)) fail(`${file} no contiene release marker`); if(!html.includes(cssName)) fail(`${file} no usa CSS único`); if(!html.includes(jsName)) fail(`${file} no usa JS único`); if(html.includes('styles.css')) fail(`${file} usa styles.css antiguo`); if(!html.includes('nearyRoot')) fail(`${file} no incluye Neary`); }
const whole=all.join('\n') + '\n' + fs.readFileSync(path.join(root,`assets/css/${cssName}`),'utf8') + '\n' + fs.readFileSync(path.join(root,`assets/js/${jsName}`),'utf8');
const forbidden=['Panel demostrativo','Stack NearTec','Regla comercial','visual-lock','cacheproof-light','premium-polish','verified-visual','render-native','meta@gmail.com','info@neartec.com','664 630 0473','neartec.com','neartec.vercel.app','Blog','Recursos','Casos','documentación interna','listas internas','styles.css'];
for(const text of forbidden){ if(whole.includes(text)) fail(`Texto/ruta prohibida detectada: ${text}`); }
const must=['664 404 6194','meta@itimbre.com','NEA040929DKA','Desde 2004','Tijuana, B.C.','CompuNegocio','CN7','Cotizador'];
for(const text of must){ if(!whole.includes(text)) fail(`Falta contenido obligatorio: ${text}`); }
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
if(Object.keys(pkg.dependencies||{}).length) fail('package.json debe quedar sin dependencies externas');
if(Object.keys(pkg.devDependencies||{}).length) fail('package.json debe quedar sin devDependencies externas');
const vercel=JSON.parse(fs.readFileSync(path.join(root,'vercel.json'),'utf8'));
if(vercel.framework!==null) fail('vercel.framework debe ser null');
if(vercel.installCommand!=='') fail('vercel.installCommand debe ser vacío');
if(vercel.buildCommand!=='npm run build') fail('vercel.buildCommand debe ser npm run build');
if(vercel.outputDirectory!=='.') fail('vercel.outputDirectory debe ser .');
const forbiddenDirs=['web','crm','soporte','soluciones','blog','recursos','casos','landing','privacidad','terminos','cookies','aviso-legal'];
for(const d of forbiddenDirs){ if(fs.existsSync(path.join(root,d))) fail(`Ruta vieja encontrada: ${d}`); }
if(!ok) process.exit(1);
console.log('NearTec Final Render Light True Scene 2026 OK');
