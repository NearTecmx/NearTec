import leadHandler from '../api/lead.js';

const req = {
  method: 'POST',
  body: {
    name: 'Prueba NearTec',
    email: 'test@neartec.mx',
    phone: '6640000000',
    company: 'NearTec Test',
    service: 'Diagnóstico tecnológico',
    source: 'local-smoke'
  }
};

const res = {
  statusCode: 200,
  body: null,
  headers: {},
  status(code) { this.statusCode = code; return this; },
  setHeader(k,v) { this.headers[k] = v; },
  json(obj) { this.body = obj; return this; },
  send(obj) { this.body = obj; return this; }
};

await leadHandler(req, res);
if (res.statusCode !== 200 || !res.body?.ok) throw new Error('API local no respondió OK');
console.log('API local OK:', JSON.stringify(res.body));
