function setCors(req, res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;

  if (req.body && typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  let raw = "";
  try {
    for await (const chunk of req) raw += chunk;
  } catch {
    return {};
  }

  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function firstValue(...values) {
  for (const value of values) {
    if (value === undefined || value === null) continue;
    const clean = String(value).trim();
    if (clean) return clean;
  }
  return "";
}

function normalizeLead(raw) {
  const scoreRaw = raw.score ?? raw.leadScore ?? raw.puntaje ?? raw.calificacion ?? 0;
  const score = Number.isFinite(Number(scoreRaw)) ? Number(scoreRaw) : 0;

  return {
    name: firstValue(raw.name, raw.nombre, raw.fullName, raw.contactName, raw.contacto),
    email: firstValue(raw.email, raw.correo, raw.mail),
    phone: firstValue(raw.phone, raw.telefono, raw.tel, raw.whatsapp, raw.celular),
    company: firstValue(raw.company, raw.empresa, raw.business, raw.negocio, raw.razonSocial),
    service: firstValue(raw.service, raw.servicio, raw.solution, raw.solucion, raw.interes, raw.need, raw.necesidad),
    message: firstValue(raw.message, raw.mensaje, raw.comments, raw.comentarios, raw.descripcion),
    source: firstValue(raw.source, raw.fuente, raw.utm_source, "website"),
    score,
    receivedAt: new Date().toISOString()
  };
}

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "method_not_allowed",
      allowed: ["POST", "OPTIONS"]
    });
  }

  const raw = await readBody(req);
  const lead = normalizeLead(raw);

  const missing = [];
  if (!lead.name) missing.push("name/nombre");
  if (!lead.email && !lead.phone) missing.push("email/correo o phone/telefono");
  if (!lead.service) missing.push("service/servicio");

  if (missing.length) {
    return res.status(400).json({
      ok: false,
      error: "missing_required_fields",
      missing,
      accepted_fields: {
        name: ["name", "nombre", "fullName", "contactName", "contacto"],
        email: ["email", "correo", "mail"],
        phone: ["phone", "telefono", "tel", "whatsapp", "celular"],
        company: ["company", "empresa", "business", "negocio", "razonSocial"],
        service: ["service", "servicio", "solution", "solucion", "interes", "need", "necesidad"]
      }
    });
  }

  const webhookUrl = process.env.NEARTEC_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(200).json({
      ok: true,
      stored: false,
      forwarded: false,
      webhookStatus: null,
      lead,
      action_required: "Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar leads a CRM, Make, Zapier, Google Sheets o backend propio."
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "NearTec-Vercel-Lead-API/1.0"
      },
      body: JSON.stringify({
        lead,
        raw,
        meta: {
          origin: req.headers.origin || null,
          userAgent: req.headers["user-agent"] || null,
          ip: req.headers["x-forwarded-for"] || null
        }
      })
    });

    return res.status(response.ok ? 200 : 502).json({
      ok: response.ok,
      stored: false,
      forwarded: response.ok,
      webhookStatus: response.status
    });
  } catch (error) {
    return res.status(502).json({
      ok: false,
      error: "webhook_forward_failed",
      message: error.message
    });
  }
}
