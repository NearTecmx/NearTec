import handler from '../api/lead.js'

function createMockResponse() {
  return {
    statusCode: 200,
    headers: {},
    payload: null,
    ended: false,
    setHeader(key, value) {
      this.headers[key] = value
      return this
    },
    status(code) {
      this.statusCode = code
      return this
    },
    json(data) {
      this.payload = data
      return this
    },
    end() {
      this.ended = true
      return this
    }
  }
}

const req = {
  method: 'POST',
  headers: {
    origin: 'https://neartecmx.vercel.app',
    'user-agent': 'termux-local-api-test',
    'x-forwarded-for': '127.0.0.1'
  },
  body: {
    name: 'Prueba NearTec',
    email: 'test@neartec.mx',
    phone: '6640000000',
    company: 'NearTec Test',
    service: 'Diagnóstico comercial',
    score: 85,
    source: 'termux-local-api-test'
  }
}

const res = createMockResponse()

await handler(req, res)

if (res.statusCode !== 200) {
  console.error('ERROR: API local respondió status inesperado:', res.statusCode, res.payload)
  process.exit(1)
}

if (!res.payload || res.payload.ok !== true) {
  console.error('ERROR: API local no respondió ok=true:', res.payload)
  process.exit(1)
}

console.log('API local OK:', JSON.stringify(res.payload, null, 2))
