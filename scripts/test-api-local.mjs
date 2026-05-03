import handler from '../api/lead.js'

const req = {
  method: 'POST',
  body: {
    name: 'Prueba NearTec',
    email: 'test@neartec.mx',
    phone: '6640000000',
    company: 'NearTec Test',
    service: 'Diagnóstico tecnológico',
    message: '',
    source: 'local-smoke',
    score: 85,
    quote: null,
  },
}

const res = {
  statusCode: 200,
  headers: {},
  status(code) {
    this.statusCode = code
    return this
  },
  setHeader(key, value) {
    this.headers[key] = value
  },
  json(payload) {
    console.log('API local OK:', JSON.stringify(payload, null, 2))
  },
  end(payload = '') {
    console.log(payload)
  },
}

await handler(req, res)
