const $ = (s, ctx = document) => ctx.querySelector(s)
const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s))
const state = {
  pricing: null,
  rules: null,
  quote: null,
  lead: null,
  input: {}
}
const money = (amount, currency = 'MXN') => new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 2 }).format(Number(amount || 0))
const clamp = (n, min = 0, max = 999999) => Math.max(min, Math.min(max, Number.isFinite(Number(n)) ? Number(n) : 0))
function getURLParams() {
  const params = new URLSearchParams(location.search)
  return Object.fromEntries(params.entries())
}
function buildWhatsAppURL(message) {
  const number = state.pricing?.meta?.contact?.whatsapp || '526646300473'
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
function getFormInput() {
  const personaButtons = $$('.choice[data-persona].is-selected').map((b) => b.dataset.persona)
  return {
    company: $('#company')?.value.trim() || '',
    name: $('#name')?.value.trim() || '',
    phone: $('#phone')?.value.trim() || '',
    email: $('#email')?.value.trim() || '',
    service: $('#service')?.value || 'neartec_suite',
    seats: clamp($('#seats')?.value, 0, 9999),
    billing: $('#billing')?.value || 'monthly',
    cn7: $('#cn7')?.value || 'none',
    implementation: $('#implementation')?.checked || false,
    supportHours: clamp($('#supportHours')?.value, 0, 999),
    developmentHours: clamp($('#developmentHours')?.value, 0, 999),
    cnStamps: clamp($('#cnStamps')?.value, 0, 999999),
    itimbrePackage: $('#itimbrePackage')?.value || 'none',
    itimbreStamps: clamp($('#itimbreStamps')?.value, 0, 999999),
    workers: clamp($('#workers')?.value, 0, 99999),
    personas: personaButtons,
    custom: $$('.custom-service:checked').map((i) => i.value),
    notes: $('#notes')?.value.trim() || '',
    urlParams: getURLParams()
  }
}
function getCompuRate(seats, billing) {
  const bands = state.pricing.compunegocio.licenses
  const band = bands.find((b) => seats >= b.min && seats <= b.max)
  if (!band || seats <= 0) return 0
  return billing === 'annual' ? band.annual_mxn : band.monthly_mxn
}
function getCNStamps(stamps) {
  const item = state.pricing.compunegocio.stamp_packages.find((p) => p.stamps === Number(stamps))
  return item || { stamps: 0, price_mxn: 0 }
}
function getItimbreStandard(stamps) {
  const item = state.pricing.itimbre.stamps_standard_unit_no_vat.find((p) => p.stamps === Number(stamps))
  return item ? item.stamps * item.unit_mxn : 0
}
function getPayrollMailbox(workers) {
  const band = state.pricing.itimbre.payroll_mailbox_workers.find((b) => workers >= b.min && workers <= b.max)
  if (!band || workers <= 0) return null
  return band
}
function line(name, amount, currency, frequency, source = 'Precio documentado') {
  const labels = { monthly: 'Mensual', annual: 'Anual', one_time: 'Único' }
  return { name, amount: Number(amount || 0), currency, frequency, frequencyLabel: labels[frequency] || frequency, source }
}
function calculateQuote(input) {
  const lines = []
  const custom = new Set(input.custom)
  const service = input.service
  const needsCompu = service === 'compunegocio' || service === 'neartec_suite' || custom.has('pos')
  const needsItimbre = service === 'itimbre' || service === 'distribuidor_itimbre' || service === 'carta_porte' || custom.has('fiscal')
  if (needsCompu && input.seats > 0) {
    const rate = getCompuRate(input.seats, input.billing)
    if (rate > 0) lines.push(line(`CompuNegocio · ${input.seats} estación(es)`, rate * input.seats, 'MXN', input.billing === 'annual' ? 'annual' : 'monthly'))
  }
  if (input.implementation || service === 'implementation') lines.push(line('Implementación remota base', state.pricing.compunegocio.implementation_mxn, 'MXN', 'one_time'))
  if (input.supportHours > 0) lines.push(line(`Soporte técnico remoto · ${input.supportHours} h`, input.supportHours * state.pricing.compunegocio.support_hour_mxn, 'MXN', 'one_time'))
  if (input.developmentHours > 0) lines.push(line(`Desarrollo / ajustes · ${input.developmentHours} h`, input.developmentHours * state.pricing.compunegocio.development_hour_mxn, 'MXN', 'one_time'))
  if (input.cn7 !== 'none') {
    const cloud = state.pricing.compunegocio.cn7.find((p) => p.id === input.cn7)
    if (cloud?.monthly_usd) lines.push(line(cloud.name, cloud.monthly_usd, 'USD', 'monthly'))
  }
  const cnPackage = getCNStamps(input.cnStamps)
  if (cnPackage.price_mxn > 0) lines.push(line(`Timbres CompuNegocio · ${cnPackage.stamps}`, cnPackage.price_mxn, 'MXN', 'one_time'))
  if (needsItimbre && input.itimbrePackage !== 'none') {
    const pack = state.pricing.itimbre.software_packages.find((p) => p.id === input.itimbrePackage)
    if (pack && pack.price_with_vat_mxn > 0) lines.push(line(`iTimbre · ${pack.name}`, pack.price_with_vat_mxn, 'MXN', 'one_time', 'Precio con IVA documentado'))
  }
  const itimbreStampTotal = getItimbreStandard(input.itimbreStamps)
  if (itimbreStampTotal > 0) lines.push(line(`Timbres iTimbre estándar · ${input.itimbreStamps}`, itimbreStampTotal, 'MXN', 'one_time', 'Precio unitario sin IVA'))
  const payroll = getPayrollMailbox(input.workers)
  if (payroll) lines.push(line(`Buzón nómina · ${input.workers} trabajador(es)`, payroll.annual_mxn, 'MXN', 'annual', 'Costo anual documentado'))
  const quote = {
    lines,
    monthlyMxn: lines.filter((i) => i.currency === 'MXN' && i.frequency === 'monthly').reduce((a, b) => a + b.amount, 0),
    annualMxn: lines.filter((i) => i.currency === 'MXN' && i.frequency === 'annual').reduce((a, b) => a + b.amount, 0),
    oneTimeMxn: lines.filter((i) => i.currency === 'MXN' && i.frequency === 'one_time').reduce((a, b) => a + b.amount, 0),
    monthlyUsd: lines.filter((i) => i.currency === 'USD' && i.frequency === 'monthly').reduce((a, b) => a + b.amount, 0)
  }
  return quote
}
function scoreLead(input, quote) {
  let score = 20
  if (input.phone) score += 10
  if (input.email) score += 6
  if (input.company) score += 8
  if (quote.lines.length) score += 12
  if (input.seats >= 4) score += 10
  if (input.seats >= 9) score += 10
  if (input.cn7 !== 'none') score += 8
  if (input.itimbreStamps >= 10000) score += 18
  if (input.service === 'distribuidor_itimbre') score += 16
  if (input.service === 'itimbre' || input.service === 'carta_porte') score += 10
  if (input.custom.length >= 3) score += 8
  input.personas.forEach((id) => {
    const persona = state.rules.personas.find((p) => p.id === id)
    if (persona) score += persona.score_bonus
  })
  score = Math.min(100, score)
  const threshold = state.rules.thresholds.find((t) => score >= t.min) || state.rules.thresholds[state.rules.thresholds.length - 1]
  return {
    score,
    label: threshold.label,
    nextStep: threshold.next_step,
    tone: score >= 80 ? 'hot' : score >= 55 ? 'warm' : 'cool',
    personas: input.personas.map((id) => state.rules.personas.find((p) => p.id === id)?.label).filter(Boolean)
  }
}
function modulesFromInput(input) {
  const map = {
    web: 'Sitio web / landing', crm: 'CRM / automatización', hosting: 'Hosting', vps: 'VPS', email: 'Correo', emailing: 'Emailing', pos: 'POS / operación', fiscal: 'Conexión fiscal'
  }
  const base = []
  if (input.service === 'neartec_suite') base.push('Suite NearTec')
  if (input.service === 'compunegocio') base.push('CompuNegocio')
  if (input.service === 'itimbre') base.push('iTimbre')
  if (input.service === 'distribuidor_itimbre') base.push('Programa distribuidores')
  if (input.service === 'carta_porte') base.push('Carta Porte')
  input.custom.forEach((id) => base.push(map[id] || id))
  if (input.cn7 !== 'none') base.push('CN7 / nube')
  if (input.cnStamps > 0 || input.itimbreStamps > 0) base.push('Timbres')
  return [...new Set(base)].slice(0, 12)
}
function renderQuote() {
  if (!state.pricing || !state.rules || !$('#quoteForm')) return
  const input = getFormInput()
  const quote = calculateQuote(input)
  const lead = scoreLead(input, quote)
  state.input = input
  state.quote = quote
  state.lead = lead
  const scoreEl = $('#scoreLabel')
  if (scoreEl) {
    scoreEl.textContent = `${lead.label} · ${lead.score}/100`
    scoreEl.className = `score-pill ${lead.tone === 'hot' ? 'hot' : ''}`
  }
  $('#nextStep').textContent = lead.nextStep
  $('#mxnMonthly').textContent = quote.monthlyMxn ? money(quote.monthlyMxn) + ' / mes' : '—'
  $('#mxnAnnual').textContent = quote.annualMxn ? money(quote.annualMxn) + ' / año' : '—'
  $('#mxnOneTime').textContent = quote.oneTimeMxn ? money(quote.oneTimeMxn) : '—'
  $('#usdMonthly').textContent = quote.monthlyUsd ? money(quote.monthlyUsd, 'USD') + ' / mes' : '—'
  const lineBox = $('#lineItems')
  if (lineBox) {
    lineBox.innerHTML = quote.lines.length ? quote.lines.map((i) => `<div><span>${i.name}</span><b>${money(i.amount, i.currency)}</b></div>`).join('') : '<div><span>Sin partidas públicas</span><b>Propuesta</b></div>'
  }
  const modules = modulesFromInput(input)
  const moduleBox = $('#modules')
  if (moduleBox) moduleBox.innerHTML = modules.length ? modules.map((m) => `<span>${m}</span>`).join('') : '<span>Diagnóstico inicial</span>'
  const summary = buildSummary(input, quote, lead, modules)
  const w = $('#whatsappQuote')
  if (w) w.href = buildWhatsAppURL(summary)
  const mail = $('#emailQuote')
  if (mail) mail.href = `mailto:${state.pricing.meta.contact.email_primary}?subject=${encodeURIComponent('Cotización NearTec')}&body=${encodeURIComponent(summary)}`
  persistDraft(input, quote, lead, modules)
}
function buildSummary(input, quote, lead, modules) {
  const totals = [
    quote.monthlyMxn ? `Recurrente MXN: ${money(quote.monthlyMxn)}/mes` : null,
    quote.annualMxn ? `Anual MXN: ${money(quote.annualMxn)}/año` : null,
    quote.oneTimeMxn ? `Cargo único MXN: ${money(quote.oneTimeMxn)}` : null,
    quote.monthlyUsd ? `Recurrente USD: ${money(quote.monthlyUsd, 'USD')}/mes` : null
  ].filter(Boolean).join('\n') || 'Sin precio público; requiere propuesta.'
  const lines = quote.lines.map((i) => `- ${i.name}: ${money(i.amount, i.currency)} (${i.frequencyLabel})`).join('\n') || '- Requiere cotización personalizada.'
  return `Hola NearTec, tengo un prospecto/cotización desde la web.\n\nEmpresa: ${input.company || '-'}\nContacto: ${input.name || '-'}\nWhatsApp: ${input.phone || '-'}\nCorreo: ${input.email || '-'}\nServicio: ${input.service}\nLead: ${lead.label} (${lead.score}/100)\nSiguiente acción: ${lead.nextStep}\n\nMódulos: ${modules.join(', ') || '-'}\n\nPartidas:\n${lines}\n\nTotales:\n${totals}\n\nNotas: ${input.notes || '-'}`
}
function persistDraft(input, quote, lead, modules) {
  const payload = {
    ts: new Date().toISOString(), input, quote, lead, modules,
    source: location.pathname, params: input.urlParams
  }
  localStorage.setItem('neartec_last_quote', JSON.stringify(payload))
}
function saveLead() {
  if (!state.quote || !state.lead) renderQuote()
  const modules = modulesFromInput(state.input)
  const payload = { ts: new Date().toISOString(), input: state.input, quote: state.quote, lead: state.lead, modules, page: location.pathname }
  const leads = JSON.parse(localStorage.getItem('neartec_leads') || '[]')
  leads.unshift(payload)
  localStorage.setItem('neartec_leads', JSON.stringify(leads.slice(0, 500)))
  const apiEnabled = $('#sendToApi')?.checked
  if (apiEnabled) {
    fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      .then((r) => r.json().catch(() => ({})))
      .then((api) => {
        if (api.forwarded) {
          flash("Lead guardado localmente y enviado al webhook configurado.")
        } else {
          flash("Lead guardado localmente. API Vercel activa; configura NEARTEC_LEAD_WEBHOOK_URL para enviarlo a CRM.")
        }
      })
      .catch(() => flash("Lead guardado localmente. API no disponible en este entorno; usa WhatsApp, correo o CSV."))
    return
  }
  flash('Lead guardado localmente. Usa WhatsApp, correo o exporta CSV para pasarlo a CRM.')
}
function exportCSV() {
  const leads = JSON.parse(localStorage.getItem('neartec_leads') || '[]')
  const headers = ['fecha','empresa','nombre','telefono','correo','servicio','score','calificacion','mxn_mensual','mxn_anual','mxn_unico','usd_mensual','modulos','notas','pagina']
  const rows = leads.map((l) => [
    l.ts, l.input.company, l.input.name, l.input.phone, l.input.email, l.input.service, l.lead.score, l.lead.label,
    l.quote.monthlyMxn, l.quote.annualMxn, l.quote.oneTimeMxn, l.quote.monthlyUsd, (l.modules || []).join(' | '), l.input.notes, l.page
  ])
  const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n')
  downloadBlob(new Blob([csv], { type: 'text/csv;charset=utf-8' }), `neartec-leads-${new Date().toISOString().slice(0,10)}.csv`)
}
function downloadQuotePDF() {
  if (!state.quote || !state.lead) renderQuote()
  const modules = modulesFromInput(state.input)
  const blob = window.NearTecPDF.createQuotePDF({ input: state.input, quote: state.quote, lead: state.lead, lines: state.quote.lines, modules })
  const safeCompany = (state.input.company || 'cotizacion').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  downloadBlob(blob, `neartec-cotizacion-${safeCompany || 'prospecto'}.pdf`)
}
function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
function flash(message) {
  let el = $('#flash')
  if (!el) {
    el = document.createElement('div')
    el.id = 'flash'
    el.style.cssText = 'position:fixed;left:50%;bottom:84px;transform:translateX(-50%);background:#9bc83b;color:#11180b;padding:12px 16px;border-radius:999px;font-weight:800;z-index:999;box-shadow:0 18px 40px rgba(0,0,0,.3);max-width:min(92vw,680px);text-align:center'
    document.body.appendChild(el)
  }
  el.textContent = message
  clearTimeout(window.__flashTimer)
  window.__flashTimer = setTimeout(() => el.remove(), 4200)
}
function initChoices() {
  $$('.choice[data-persona]').forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('is-selected')
      renderQuote()
    })
  })
}
function initForm() {
  const form = $('#quoteForm')
  if (!form) return
  form.addEventListener('input', renderQuote)
  form.addEventListener('change', renderQuote)
  $('#saveLead')?.addEventListener('click', saveLead)
  $('#exportCSV')?.addEventListener('click', exportCSV)
  $('#downloadPDF')?.addEventListener('click', downloadQuotePDF)
  renderQuote()
}
function initNav() {
  $('.mobile-toggle')?.addEventListener('click', () => $('.nav')?.classList.toggle('is-open'))
  $$('.nav-links a').forEach((a) => a.addEventListener('click', () => $('.nav')?.classList.remove('is-open')))
}
function initReveal() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('is-visible')
  }), { threshold: .12 })
  $$('.reveal').forEach((el) => io.observe(el))
}
function initVFX() {
  const canvas = $('#vfxCanvas')
  if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const ctx = canvas.getContext('2d')
  let w, h, particles
  const resize = () => {
    w = canvas.width = innerWidth * devicePixelRatio
    h = canvas.height = innerHeight * devicePixelRatio
    const count = Math.min(90, Math.floor(innerWidth / 18))
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .32 * devicePixelRatio,
      vy: (Math.random() - .5) * .32 * devicePixelRatio,
      r: (Math.random() * 1.7 + .6) * devicePixelRatio
    }))
  }
  resize()
  addEventListener('resize', resize)
  function draw() {
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = 'rgba(155,200,59,.6)'
    ctx.strokeStyle = 'rgba(155,200,59,.12)'
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy)
        if (d < 150 * devicePixelRatio) {
          ctx.globalAlpha = 1 - d / (150 * devicePixelRatio)
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); ctx.globalAlpha = 1
        }
      }
    })
    requestAnimationFrame(draw)
  }
  draw()
  $$('.hero-card').forEach((card) => card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }))
}
function initLandingForm() {
  const form = $('#landingForm')
  if (!form) return
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(form).entries())
    const msg = `Hola NearTec, quiero diagnóstico desde landing.\nEmpresa: ${data.company || '-'}\nNombre: ${data.name || '-'}\nWhatsApp: ${data.phone || '-'}\nDolor principal: ${data.pain || '-'}\nTamaño: ${data.size || '-'}\nFuente: ${location.href}`
    localStorage.setItem('neartec_landing_lead', JSON.stringify({ ts: new Date().toISOString(), data, url: location.href }))
    location.href = buildWhatsAppURL(msg)
  })
}
async function boot() {
  const [pricing, rules] = await Promise.all([
    fetch('assets/data/pricing.json').then((r) => r.json()),
    fetch('assets/data/lead-rules.json').then((r) => r.json())
  ])
  state.pricing = pricing
  state.rules = rules
  initNav(); initChoices(); initForm(); initReveal(); initVFX(); initLandingForm()
}
boot().catch((err) => {
  console.error(err)
  flash('No se pudieron cargar datos del cotizador. Revisa rutas al publicar.')
})
