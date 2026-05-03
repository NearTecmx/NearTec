import fs from 'node:fs';

const htmlRoutes = ['index.html', 'soluciones/index.html', 'web/index.html', 'crm/index.html', 'compunegocio/index.html', 'cn7/index.html', 'soporte/index.html', 'cotizador/index.html', 'landing/index.html', 'campanas/index.html', 'contacto/index.html'];
for (const file of htmlRoutes) {
  const html = fs.readFileSync(file, 'utf8');
  for (const term of ['NearTec', '/assets/css/styles.css', '/assets/js/app.js', 'neary-premium.png']) {
    if (!html.includes(term)) throw new Error(`${file} no contiene ${term}`);
  }
  if (!html.includes('og:image')) throw new Error(`${file} no contiene og:image`);
  if (!html.includes('canonical')) throw new Error(`${file} no contiene canonical`);
}
const css = fs.readFileSync('assets/css/styles.css', 'utf8');
for (const term of ['tech-background', 'ecosystem-visual', 'chat-panel', 'neary-fab', 'mobile-cta', 'prefers-reduced-motion']) {
  if (!css.includes(term)) throw new Error(`CSS no contiene ${term}`);
}
const js = fs.readFileSync('assets/js/app.js', 'utf8');
for (const term of ['startChat', 'chooseNeed', 'downloadQuotePdf', 'buildPdf', 'createTechBackground']) {
  if (!js.includes(term)) throw new Error(`JS no contiene ${term}`);
}
const pricing = JSON.parse(fs.readFileSync('assets/data/pricing.json', 'utf8'));
if (pricing.compunegocio.licenses[0].monthly !== 450) throw new Error('Precio CN 1-3 incorrecto');
if (pricing.compunegocio.cn7.find(x => x.id === 'hosted').monthly_usd !== 149) throw new Error('Precio CN7 hosted incorrecto');
if (!pricing.compunegocio.stamps.find(x => x.stamps === 10000 && x.price === 9500)) throw new Error('Timbres 10000 incorrecto');
console.log('Smoke test OK: rutas, assets, chat, gráficos, PDF, SEO y precios públicos verificados.');
