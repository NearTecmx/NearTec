import { NextRequest, NextResponse } from 'next/server'

function first(...values: unknown[]) {
  for (const value of values) {
    if (value === undefined || value === null) continue
    const clean = String(value).trim()
    if (clean) return clean
  }
  return ''
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() })
}

function corsHeaders(){
  return {
    'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

export async function POST(req: NextRequest) {
  let raw: Record<string, unknown> = {}
  try { raw = await req.json() } catch { raw = {} }
  const lead = {
    name: first(raw.name, raw.nombre, raw.contactName),
    email: first(raw.email, raw.correo),
    phone: first(raw.phone, raw.telefono, raw.whatsapp),
    company: first(raw.company, raw.empresa),
    service: first(raw.service, raw.need, raw.necesidad, raw.intent, raw.interes),
    message: first(raw.message, raw.notes, raw.mensaje),
    source: first(raw.source, 'website'),
    score: Number(raw.score || 0) || 0,
    receivedAt: new Date().toISOString(),
  }
  const missing: string[] = []
  if (!lead.name) missing.push('name')
  if (!lead.email && !lead.phone) missing.push('email_or_phone')
  if (!lead.service) missing.push('service')
  if (missing.length) return NextResponse.json({ ok:false, error:'missing_required_fields', missing }, { status:400, headers:corsHeaders() })
  const webhookUrl = process.env.NEARTEC_LEAD_WEBHOOK_URL
  if (!webhookUrl) return NextResponse.json({ ok:true, stored:false, forwarded:false, webhookStatus:null, lead, action_required:'Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar leads a CRM, Make, n8n, Google Sheets o backend propio.' }, { headers:corsHeaders() })
  try {
    const response = await fetch(webhookUrl, { method:'POST', headers:{ 'Content-Type':'application/json', 'User-Agent':'NearTec-V4-Lead-API/1.0' }, body: JSON.stringify({ lead, raw, meta:{ origin:req.headers.get('origin'), userAgent:req.headers.get('user-agent'), ip:req.headers.get('x-forwarded-for') } }) })
    return NextResponse.json({ ok:response.ok, stored:false, forwarded:response.ok, webhookStatus:response.status }, { status: response.ok ? 200 : 502, headers:corsHeaders() })
  } catch (error) {
    return NextResponse.json({ ok:false, error:'webhook_forward_failed', message: error instanceof Error ? error.message : 'unknown' }, { status:502, headers:corsHeaders() })
  }
}

export async function GET() {
  return NextResponse.json({ ok:false, error:'method_not_allowed', allowed:['POST','OPTIONS'] }, { status:405, headers:corsHeaders() })
}
