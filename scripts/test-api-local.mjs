import handler from '../api/lead.js'

function createRes() {
  return {
    statusCode: 200,
    headers: {},
    body: null,
    ended: false,
    setHeader(key, value) { this.headers[key] = value },
    status(code) { this.statusCode = code; return this },
    json(payload) { this.body = payload; this.ended = true; return this },
    end(payload = '') { this.body = payload; this.ended = true; return this }
  }
}

const req = {
  method: 'POST',
  body: {
    input: {
      company: 'QA NearTec',
      name: 'Prueba Termux',
      phone: '6640000000',
      service: 'compunegocio'
    },
    quote: { monthlyMxn: 450 },
    lead: { score: 82, label: 'Lead caliente' }
  }
}

const res = createRes()
await handler(req, res)

if (![200, 202].includes(res.statusCode)) {
  console.error('ERROR: API local respondió status inesperado:', res.statusCode, res.body)
  process.exit(1)
}
if (!res.body?.ok) {
  console.error('ERROR: API local no regresó ok=true:', res.body)
  process.exit(1)
}
console.log('API local OK:', JSON.stringify(res.body, null, 2))
