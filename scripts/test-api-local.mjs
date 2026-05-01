const payload = { name:'Prueba NearTec', email:'test@neartec.mx', phone:'6640000000', company:'NearTec Test', service:'Diagnóstico comercial', score:85, source:'termux-local-api-test' }
const missing = []
if (!payload.name) missing.push('name')
if (!payload.email && !payload.phone) missing.push('email_or_phone')
if (!payload.service) missing.push('service')
if (missing.length) { console.error('ERROR payload local', missing); process.exit(1) }
console.log('API local OK:', JSON.stringify({ ok:true, stored:false, forwarded:false, webhookStatus:null, lead:payload, action_required:'Configura NEARTEC_LEAD_WEBHOOK_URL en Vercel para enviar leads a CRM.' }, null, 2))
