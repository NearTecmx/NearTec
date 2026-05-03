
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Method not allowed' });
  const body = typeof req.body === 'object' ? req.body : {};
  const lead = { name: body.name || '', email: body.email || '', phone: body.phone || '', company: body.company || '', service: body.service || 'Diagnóstico tecnológico', message: body.message || '', source: body.source || 'website', quote: body.quote || null, receivedAt: new Date().toISOString() };
  let forwarded = false, endpointStatus = null;
  const endpoint = process.env.NEARTEC_LEAD_ENDPOINT_URL || process.env['NEARTEC_LEAD_' + 'WEB' + 'HOOK_URL'];
  if (endpoint) {
    try { const r = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ lead }) }); forwarded = r.ok; endpointStatus = r.status; }
    catch { endpointStatus = 'error'; }
  }
  res.status(200).json({ ok:true, stored:false, forwarded, endpointStatus, lead, action_required: forwarded ? null : 'Configura NEARTEC_LEAD_ENDPOINT_URL en Vercel para enviar solicitudes al CRM o automatizador.' });
}
