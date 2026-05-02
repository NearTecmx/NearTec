import fs from 'node:fs'
const read = (f) => fs.existsSync(f) ? fs.readFileSync(f,'utf8') : ''
const pages = ['index.html','campanas/index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html','contacto/index.html','terminos/index.html','privacidad/index.html','cookies/index.html','aviso-legal/index.html']
for (const p of pages) {
  const html = read(p)
  if (!html) throw new Error(`Falta página ${p}`)
  if (!html.includes('/assets/css/v33-real-services.css')) throw new Error(`${p} no carga CSS V3.3`)
  if (!html.includes('/assets/js/v33-real-services.js')) throw new Error(`${p} no carga JS V3.3`)
}
const publicCode = pages.map(read).join('\n') + read('assets/css/v33-real-services.css') + read('assets/js/v33-real-services.js')
for (const term of ['Servicios tecnológicos reales','Lo que implementamos','Términos y condiciones','Política de cookies','whatsapp-official.svg','neartec-isotipo']) {
  if (!publicCode.includes(term)) throw new Error(`No se encontró ${term}`)
}
for (const bad of ['Panel demostrativo','Stack NearTec','Ruta preparada en código','info@neartec.com','info@itimbre.com','664 630 0473','526646300473','Lead Score']) {
  if (publicCode.includes(bad)) throw new Error(`Texto/contacto viejo o interno detectado: ${bad}`)
}
console.log('Smoke test OK: NearTec V3.3 servicios reales, isotipo, polígonos, legal y copy público validado.')
