
import fs from 'node:fs';
const routes=['index.html','landing/index.html','campanas/index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html','contacto/index.html','soluciones/index.html','soporte/index.html'];
for(const r of routes){const h=fs.readFileSync(r,'utf8'); if(!h.includes('/assets/css/styles.css')) throw new Error(`${r} no carga CSS`); if(!h.includes('/assets/js/app.js')) throw new Error(`${r} no carga JS`); if(!h.includes('og:image')) throw new Error(`${r} sin OG`);}
const js=fs.readFileSync('assets/js/app.js','utf8'); for(const term of ['assistantPanel','downloadQuotePdf','jpegToPdf','techCanvas','submitLead']) if(!js.includes(term)) throw new Error('JS sin '+term);
console.log('Smoke test OK: páginas, SEO, asistente, PDF, fondo animado y cotizador presentes.');
