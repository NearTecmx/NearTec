import fs from 'node:fs'
const read=f=>fs.existsSync(f)?fs.readFileSync(f,'utf8'):''
const code=['index.html','landing/index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html','soporte/index.html','assets/css/styles.css','assets/js/app.js','assets/data/pricing.json'].map(read).join('\n')
for(const term of ['NearTec','CompuNegocio','CN7','CRM','Cotizador','Neary AI','WhatsApp','664 404 6194','meta@itimbre.com','V3 Exact Animated Master']){
  if(!code.toLowerCase().includes(term.toLowerCase())) throw new Error('No se encontró '+term)
}
for(const bad of ['664 630 04 73','664 630 0473','526646300473','info@neartec.com','info@itimbre.com','Código V3. Assets visuales finales se integran después.','Panel demostrativo','Stack NearTec activo']){
  if(code.includes(bad)) throw new Error('Texto viejo detectado: '+bad)
}
console.log('Smoke test OK: NearTec V3 exacta + animaciones + contacto oficial validado.')
