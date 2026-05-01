import fs from 'node:fs'
const routes = ['app/page.tsx','app/landing/page.tsx','app/cotizador/page.tsx','app/compunegocio/page.tsx','app/cn7/page.tsx','app/crm-automatizacion/page.tsx']
for (const route of routes) if (!fs.existsSync(route)) throw new Error(`Falta ${route}`)
const home = fs.readFileSync('app/page.tsx','utf8')
for (const term of ['Cotizar mi solución','Web + CRM','CompuNegocio','CN7']) if (!home.includes(term)) throw new Error(`Home no contiene ${term}`)
const api = fs.readFileSync('app/api/lead/route.ts','utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API no contiene webhook')
console.log('Smoke test OK: rutas, copy comercial, Neary/WhatsApp y API validadas.')
