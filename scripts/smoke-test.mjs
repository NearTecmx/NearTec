import fs from 'node:fs';

const pages = ['index.html','landing/index.html','campanas/index.html','cotizador/index.html','web/index.html','crm/index.html','compunegocio/index.html','cn7/index.html','soporte/index.html','contacto/index.html','soluciones/index.html'];

for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  if (!html.includes('/assets/css/styles.css')) throw new Error(`${page} no carga CSS`);
  if (!html.includes('/assets/js/app.js')) throw new Error(`${page} no carga JS`);
  if (!html.includes('neartecmx.vercel.app')) throw new Error(`${page} no tiene canonical/metadata`);
}

const app = fs.readFileSync('assets/js/app.js','utf8');
for (const term of ['bootNeary','calculateQuote','quote-pdf','nt-tech-bg']) {
  if (!app.includes(term)) throw new Error(`app.js no contiene ${term}`);
}

console.log('Smoke test OK: páginas, Neary, cotizador, PDF y fondo tech validados.');
