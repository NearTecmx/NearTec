import fs from 'node:fs';
const pages=['index.html','landing/index.html','campanas/index.html','cotizador/index.html','web/index.html','crm/index.html','compunegocio/index.html','cn7/index.html','soporte/index.html','contacto/index.html','soluciones/index.html'];
for(const p of pages){const h=fs.readFileSync(p,'utf8');if(!h.includes('/assets/css/styles.css'))throw new Error(p+' no carga CSS');if(!h.includes('/assets/js/app.js'))throw new Error(p+' no carga JS');if(!h.includes('og:image'))throw new Error(p+' sin OG');}
const app=fs.readFileSync('assets/js/app.js','utf8');for(const t of ['assistant','setupQuote','quote-pdf','techBg','sendLead']){if(!app.includes(t))throw new Error('app.js sin '+t)}
console.log('Smoke test OK: páginas, Neary, cotizador, PDF, SEO y fondo tech validados.')
