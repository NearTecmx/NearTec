import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'index.html', 'soluciones/index.html', 'web/index.html', 'crm/index.html', 'compunegocio/index.html', 'cn7/index.html', 'soporte/index.html',
  'cotizador/index.html', 'landing/index.html', 'campanas/index.html', 'diagnostico/index.html', 'contacto/index.html',
  'privacidad/index.html', 'terminos/index.html', 'cookies/index.html', 'aviso-legal/index.html',
  'assets/css/styles.css', 'assets/js/app.js', 'assets/data/pricing.json', 'assets/data/lead-rules.json',
  'assets/img/neartec-logo-clean.png', 'assets/img/neartec-logo-pdf.jpg', 'assets/img/neartec-og.png', 'assets/icons/neartec-isotipo.png', 'assets/icons/neary-premium.png', 'assets/icons/whatsapp-official.svg',
  'api/lead.js', 'api/health.js', 'vercel.json', 'package.json', 'sitemap.xml', 'robots.txt', 'site.webmanifest'
];
const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error('Faltan archivos requeridos:');
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (!pkg.name.includes('v2-complete')) throw new Error(`package.json incorrecto: ${pkg.name}`);
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
if (vercel.framework !== null || vercel.outputDirectory !== '.') throw new Error('vercel.json debe estar configurado como sitio estático Other.');
const publicFiles = fs.readdirSync(root, { recursive: true }).filter((file) => /\.(html|css|js|json|xml|txt|md)$/.test(file) && !String(file).includes('node_modules') && !String(file).startsWith('scripts/')); 
const forbidden = [
  ['Filtro', ' comercial'].join(''),
  ['internamente', ' ayuda'].join(''),
  ['Lead', ' Score'].join(''),
  ['Panel', ' demostrativo'].join(''),
  ['Stack', ' NearTec'].join(''),
  ['Ruta preparada', ' en código'].join(''),
  ['info', '@neartec.com'].join(''),
  ['info', '@itimbre.com'].join(''),
  ['664', ' 630', ' 0473'].join(''),
  ['5266', '46300473'].join('')
];
let bad = [];
for (const file of publicFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const term of forbidden) if (text.includes(term)) bad.push(`${file}: ${term}`);
}
if (bad.length) {
  console.error('Texto interno/contacto viejo detectado:');
  bad.forEach((x) => console.error('- ' + x));
  process.exit(1);
}
console.log('Preflight OK: NearTec Master 2026 V2 completo listo para producción.');
