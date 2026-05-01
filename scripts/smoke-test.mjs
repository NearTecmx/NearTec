import fs from 'node:fs'
const routes = ['app/page.tsx','app/landing/page.tsx','app/cotizador/page.tsx','app/compunegocio/page.tsx','app/cn7/page.tsx','app/crm-automatizacion/page.tsx']
for (const route of routes) if (!fs.existsSync(route)) throw new Error(`Falta ${route}`)
const home = fs.readFileSync('app/page.tsx','utf8')
for (const term of ['Quiero cotizar','NearTec','CompuNegocio','CN7','WhatsApp']) if (!home.includes(term)) throw new Error(`Home no contiene ${term}`)
const landing = fs.readFileSync('app/landing/page.tsx','utf8')
for (const term of ['Diagnóstico','Quiero diagnóstico','WhatsApp']) if (!landing.includes(term)) throw new Error(`Landing no contiene ${term}`)
const css = fs.readFileSync('app/globals.css','utf8')
for (const term of ['command-visual','section-separated','solution-card-v2','flow-rail','lead-card','service-signal']) if (!css.includes(term)) throw new Error(`CSS no contiene ${term}`)
const api = fs.readFileSync('app/api/lead/route.ts','utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API no contiene webhook')
const data = fs.readFileSync('lib/neartec-data.ts','utf8')
if (!data.includes('664 404 6194') || !data.includes('meta@itimbre.com')) throw new Error('Contacto oficial no actualizado')
console.log('Smoke test OK: V4.2 layout, rutas, copy comercial, contacto, landing y API validadas.')
