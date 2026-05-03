
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Método no permitido' })
  }
  let body = req.body
  if (!body || typeof body === 'string') {
    try { body = typeof body === 'string' ? JSON.parse(body) : {} } catch { body = {} }
  }
  const lead = {
    name: clean(body.name || ''), email: clean(body.email || ''), phone: clean(body.phone || ''), company: clean(body.company || ''),
    service: clean(body.service || 'Diagnóstico tecnológico'), message: clean(body.message || body.notes || ''), source: clean(body.source || 'web'),
    score: Number(body.score || 0), quote: body.quote || null, receivedAt: new Date().toISOString()
  }
  let forwarded = false, webhookStatus = null
  const url = process.env.NEARTEC_LEAD_WEBHOOK_URL
  if (url) {
    try {
      const r = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ lead, brand:'NearTec' }) })
      forwarded = r.ok; webhookStatus = r.status
    } catch (e) { forwarded = false; webhookStatus = 'error' }
  }
  return res.status(200).json({ ok:true, stored:false, forwarded, webhookStatus, lead, action_required: forwarded ? null : 'Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar solicitudes a CRM, Make, n8n, Google Sheets o backend propio.' })
}
function clean(v){ return String(v || '').replace(/[<>]/g,'').trim().slice(0,1200) }
