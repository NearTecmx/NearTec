export default async function handler(req, res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || '*'
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' })
    return
  }

  let payload = req.body
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload)
    } catch {
      res.status(400).json({ ok: false, error: 'invalid_json' })
      return
    }
  }

  if (!payload || typeof payload !== 'object') {
    res.status(400).json({ ok: false, error: 'invalid_payload' })
    return
  }

  const input = payload.input || {}
  const company = String(input.company || '').trim()
  const name = String(input.name || '').trim()
  const phone = String(input.phone || '').trim()

  if (!company || !name || !phone) {
    res.status(422).json({ ok: false, error: 'missing_required_fields' })
    return
  }

  const record = {
    received_at: new Date().toISOString(),
    source: 'neartec-vercel-api',
    payload
  }

  const webhookUrl = process.env.NEARTEC_LEAD_WEBHOOK_URL
  let forwarded = false
  let webhookStatus = null

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
      })
      forwarded = webhookResponse.ok
      webhookStatus = webhookResponse.status
    } catch {
      webhookStatus = 'network_error'
    }
  }

  res.status(forwarded ? 200 : 202).json({
    ok: true,
    stored: false,
    forwarded,
    webhookStatus,
    action_required: forwarded ? null : 'Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar leads a CRM, Make, Zapier, Google Sheets o backend propio.'
  })
}
