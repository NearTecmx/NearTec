
export default async function handler(req, res) {
  if (req.method === 'GET') return res.status(405).json({ ok: false, error: 'Use POST' })
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' })
  try {
    const body = req.body || {}
    const lead = {
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      phone: String(body.phone || '').trim(),
      company: String(body.company || '').trim(),
      service: String(body.service || 'Diagnóstico tecnológico').trim(),
      message: String(body.message || '').trim(),
      source: String(body.source || 'web').trim(),
      score: Number(body.score || 0),
      quote: body.quote || null,
      receivedAt: new Date().toISOString(),
    }
    const url = process.env.NEARTEC_LEAD_WEBHOOK_URL
    let forwarded = false, webhookStatus = null
    if (url) {
      const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lead }) })
      webhookStatus = response.status
      forwarded = response.ok
    }
    return res.status(200).json({ ok: true, stored: false, forwarded, webhookStatus, lead, action_required: url ? null : 'Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar solicitudes a CRM, Make, n8n, Google Sheets o backend propio.' })
  } catch (error) {
    return res.status(500).json({ ok: false, error: error?.message || 'Lead error' })
  }
}
