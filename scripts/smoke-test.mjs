
import fs from 'node:fs';
const pages=['index.html','landing/index.html','campanas/index.html','diagnostico/index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html','soporte/index.html','contacto/index.html','soluciones/index.html'];
for(const page of pages){const html=fs.readFileSync(page,'utf8');if(!html.includes('/assets/css/styles.css'))throw new Error(`${page} no carga CSS`);if(!html.includes('/assets/js/app.js'))throw new Error(`${page} no carga JS`);if(!html.includes('neartecmx.vercel.app'))throw new Error(`${page} no tiene canonical/metadata`)}
const app=fs.readFileSync('assets/js/app.js','utf8');for(const term of ['setupAssist','setupTechBg','renderQuote','downloadPDF','NearTec']){if(!app.includes(term))throw new Error(`app.js falta ${term}`)}
const pdf=fs.readFileSync('assets/js/pdf-engine.js','utf8');if(!pdf.includes('createQuotePDF'))throw new Error('PDF engine no contiene createQuotePDF');
console.log('Smoke test OK: V3 base corregida con páginas, Neary, cotizador y PDF.');
