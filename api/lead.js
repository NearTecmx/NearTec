export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok:false, error:'Method not allowed' });
    return;
  }

  const body = typeof req.body === 'object' ? req.body : {};
  const receivedAt = new Date().toISOString();

  const lead = {
    name: body.name || '',
    email: body.email || '',
    phone: body.phone || '',
    company: body.company || '',
    service: body.service || 'Diagnóstico tecnológico',
    message: body.message || '',
    source: body.source || 'website',
    quote: body.quote || null,
    receivedAt
  };

  let forwarded = false;
  let webhookStatus = null;

  if (process.env.NEARTEC_LEAD_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.NEARTEC_LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead })
      });
      forwarded = response.ok;
      webhookStatus = response.status;
    } catch (error) {
      webhookStatus = 'error';
    }
  }

  res.status(200).json({
    ok: true,
    stored: false,
    forwarded,
    webhookStatus,
    lead,
    action_required: forwarded ? null : 'Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar solicitudes a CRM, Make, n8n, Google Sheets o backend propio.'
  });
}
