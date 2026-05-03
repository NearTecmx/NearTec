
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const required=['index.html','assets/css/styles.css','assets/js/app.js','assets/img/neartec-logo-clean.png','assets/icons/neartec-isotipo.png','assets/icons/neary-premium.png','assets/icons/whatsapp-official.svg','assets/img/neartec-og.png','api/lead.js','vercel.json','sitemap.xml','robots.txt','cotizador/index.html','landing/index.html','campanas/index.html'];
let errors=[]; for(const f of required){if(!fs.existsSync(path.join(root,f))) errors.push('Falta '+f)}
const pkg=JSON.parse(fs.readFileSync('package.json','utf8')); if(pkg.dependencies?.next||pkg.devDependencies?.next) errors.push('No debe depender de Next.js: sitio estático.');
const vercel=JSON.parse(fs.readFileSync('vercel.json','utf8')); if(vercel.framework!==null) errors.push('vercel.json debe usar framework null');
const source=collect(['*.html','soluciones/index.html','web/index.html','crm/index.html','compunegocio/index.html','cn7/index.html','soporte/index.html','cotizador/index.html','landing/index.html','campanas/index.html','diagnostico/index.html','contacto/index.html','casos/index.html','recursos/index.html','privacidad/index.html','terminos/index.html','cookies/index.html','aviso-legal/index.html','assets/js/app.js','assets/css/styles.css','api/lead.js']);
const badTerms=[['Filtro','comercial'],['internamente',' ayuda'],['Lead',' Score'],['Panel',' demostrativo'],['Stack',' NearTec'],['Ruta preparada',' en código'],['info','@neartec.com'],['info','@itimbre.com'],['664',' 630 0473'],['5266','46300473']].map(x=>x.join(''));
for(const bad of badTerms){ if(source.includes(bad)) errors.push('Texto interno o contacto viejo: '+bad) }
for(const term of ['Neary AI','whatsapp-official.svg','Descargar PDF','Tecnología para vender','CompuNegocio','CN7','meta@itimbre.com','664 404 6194','NEA040929DKA']){ if(!source.includes(term)) errors.push('No se encontró término clave: '+term)}
if(errors.length){console.error(errors.join('\n')); process.exit(1)}
console.log('Preflight OK: NearTec V3 rebuild completo, limpio y compatible con Vercel estático.');
function collect(files){let out=''; for(const f of files){if(f==='*.html'){for(const x of fs.readdirSync(root).filter(n=>n.endsWith('.html'))) out+=fs.readFileSync(x,'utf8')+'\n'} else if(fs.existsSync(f)) out+=fs.readFileSync(f,'utf8')+'\n'} return out}
