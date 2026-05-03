
import fs from 'node:fs';
const pages=['index.html','landing/index.html','campanas/index.html','cotizador/index.html','web/index.html','crm/index.html','compunegocio/index.html','cn7/index.html','soporte/index.html','contacto/index.html','soluciones/index.html'];
for(const p of pages){const s=fs.readFileSync(p,'utf8'); if(!s.includes('/assets/css/styles.css')) throw new Error(`${p} sin CSS`); if(!s.includes('/assets/js/app.js')) throw new Error(`${p} sin JS`); if(!s.includes('rel="canonical"')) throw new Error(`${p} sin canonical`); if(!s.includes('og:image')) throw new Error(`${p} sin OG`);}
const app=fs.readFileSync('assets/js/app.js','utf8'); for(const t of ['bootAssistant','calcQuote','quote-pdf','nt-canvas','wa(']){if(!app.includes(t))throw new Error(`app.js falta ${t}`)}
console.log('Smoke test OK: páginas, SEO técnico, Neary, cotizador, PDF y fondo animado presentes.');
