import fs from 'node:fs';

const required = [
  'index.html',
  'assets/css/styles.css',
  'assets/js/app.js',
  'api/lead.js',
  'api/quote-pdf.js',
  'vercel.json',
  'package.json',
  'cotizador/index.html',
  'landing/index.html',
  'campanas/index.html'
];

for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`Falta ${file}`);
    process.exit(1);
  }
}

const publicFiles = [
  'index.html',
  'landing/index.html',
  'campanas/index.html',
  'cotizador/index.html',
  'web/index.html',
  'crm/index.html',
  'compunegocio/index.html',
  'cn7/index.html',
  'soporte/index.html',
  'assets/css/styles.css',
  'assets/js/app.js'
];

const code = publicFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

const forbidden = [
  'Filtro comercial',
  'internamente ayuda',
  'Lead Score',
  'Panel demostrativo',
  'Stack NearTec',
  'Ruta preparada en código',
  'info@neartec.com',
  'info@itimbre.com',
  '664 630',
  '526646300473'
];

for (const term of forbidden) {
  if (code.includes(term)) {
    console.error(`Texto viejo/interno detectado: ${term}`);
    process.exit(1);
  }
}

for (const term of ['NearTec','CompuNegocio','CN7','664 404 6194','meta@itimbre.com','NEA040929DKA','Neary AI']) {
  if (!code.includes(term)) {
    console.error(`Falta término público: ${term}`);
    process.exit(1);
  }
}

console.log('Preflight OK: NearTec Master 2026 V4 post-recovery final listo.');
