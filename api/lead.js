export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }
  try {
    const body = typeof req.body === 'object' && req.body ? req.body : JSON.parse(req.body || '{}');
    const lead = {
      name: String(body.name || '').slice(0, 120),
      email: String(body.email || '').slice(0, 160),
      phone: String(body.phone || '').slice(0, 80),
      company: String(body.company || '').slice(0, 160),
      service: String(body.service || 'Diagnóstico tecnológico').slice(0, 160),
      message: String(body.message || '').slice(0, 1200),
      source: String(body.source || 'web').slice(0, 120),
      score: Number(body.score || 0),
      quote: body.quote || null,
      receivedAt: new Date().toISOString()
    };
    let forwarded = false;
    let webhookStatus = null;
    const url = process.env.NEARTEC_LEAD_WEBHOOK_URL;
    if (url) {
      const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ brand: 'NearTec', lead }) });
      forwarded = response.ok;
      webhookStatus = response.status;
    }
    return res.status(200).json({ ok: true, stored: false, forwarded, webhookStatus, lead, action_required: forwarded ? null : 'Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar solicitudes a CRM, Make, n8n, Google Sheets o backend propio.' });
  } catch (error) {
    return res.status(400).json({ ok: false, error: 'Invalid request' });
  }
}
