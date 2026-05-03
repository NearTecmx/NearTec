const { default: handler } = await import('../api/lead.js');
const req = { method: 'POST', body: { name: 'Prueba NearTec', email: 'test@neartec.mx', phone: '6640000000', company: 'NearTec Test', service: 'Diagnóstico tecnológico', message: '', source: 'local-test', score: 85 } };
const res = {
  statusCode: 0,
  headers: {},
  setHeader(k, v) { this.headers[k] = v; },
  status(code) { this.statusCode = code; return this; },
  json(payload) { this.payload = payload; return this; }
};
await handler(req, res);
if (res.statusCode !== 200 || !res.payload?.ok) throw new Error('API local falló');
console.log('API local OK:', JSON.stringify(res.payload, null, 2));
