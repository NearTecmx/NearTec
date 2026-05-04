import fs from 'node:fs'

const css = fs.readFileSync('assets/css/styles.css', 'utf8')
const html = fs.readFileSync('index.html', 'utf8')
const js = fs.readFileSync('assets/js/app.js', 'utf8')

const requiredCss = [
  '--green:#c5ff43',
  'ntScan',
  'ntRotate',
  'assist-panel',
  'footer-cta',
  'command',
  'orbit',
  'bar-track'
]

for (const term of requiredCss) {
  if (!css.includes(term)) throw new Error(`CSS visual pro no contiene: ${term}`)
}

for (const term of ['NearTec OS', 'Neary AI', 'Cotizar proyecto', 'CompuNegocio', 'CN7']) {
  if (!html.includes(term) && !js.includes(term)) {
    throw new Error(`No se encontró marcador visual/comercial: ${term}`)
  }
}

console.log('Visual check OK: CSS/HTML/JS contienen actualización visual V3 Pro.')
