const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const CONTACT = { phone: '664 404 6194', whatsapp: '526644046194', email: 'meta@itimbre.com' };
const money = (value, currency = 'MXN') => new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 0 }).format(Number(value || 0));
let PRICING = null;
let RULES = null;
let chatState = { need: '', detail: '' };
function ready(fn) { document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
function waLink(message) { return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`; }
function toast(text) { const el = $('#toast') || document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.textContent = text; if (!el.isConnected) document.body.appendChild(el); el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 3200); }
function createTechBackground() {
  if ($('.tech-background')) return;
  const bg = document.createElement('div');
  bg.className = 'tech-background';
  bg.setAttribute('aria-hidden', 'true');
  const polys = [
    ['6%', '12%', '86px', '18px', '18deg', '30px', '44px', '15s'], ['78%', '8%', '138px', '28px', '45deg', '-44px', '36px', '20s'],
    ['16%', '42%', '72px', '50%', '10deg', '38px', '-26px', '18s'], ['72%', '38%', '104px', '22px', '30deg', '-34px', '-38px', '22s'],
    ['42%', '70%', '156px', '30px', '22deg', '48px', '-50px', '25s'], ['87%', '78%', '82px', '18px', '52deg', '-38px', '-44px', '19s'],
    ['4%', '82%', '124px', '28px', '28deg', '52px', '-30px', '23s'], ['55%', '23%', '68px', '50%', '16deg', '-34px', '38px', '17s'],
    ['31%', '5%', '58px', '18px', '65deg', '24px', '30px', '16s'], ['91%', '51%', '142px', '34px', '12deg', '-42px', '32px', '24s']
  ];
  polys.forEach((p) => {
    const el = document.createElement('span');
    el.className = 'poly';
    el.style.setProperty('--x', p[0]); el.style.setProperty('--y', p[1]); el.style.setProperty('--s', p[2]); el.style.setProperty('--r', p[3]);
    el.style.setProperty('--rot', p[4]); el.style.setProperty('--tx', p[5]); el.style.setProperty('--ty', p[6]); el.style.setProperty('--d', p[7]);
    bg.appendChild(el);
  });
  for (let i = 0; i < 8; i++) {
    const line = document.createElement('i');
    line.className = 'line';
    line.style.setProperty('--x', `${(i * 13 + 4) % 96}%`); line.style.setProperty('--y', `${(i * 17 + 11) % 92}%`);
    line.style.setProperty('--w', `${140 + i * 22}px`); line.style.setProperty('--rot', `${-35 + i * 15}deg`); line.style.setProperty('--d', `${12 + i * 2}s`);
    bg.appendChild(line);
  }
  document.body.prepend(bg);
}
function setupNavigation() {
  const btn = $('#menuBtn'); const menu = $('#mobileMenu');
  btn && menu && btn.addEventListener('click', () => { const open = menu.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open)); });
  $$('a.js-wa').forEach((a) => {
    const msg = a.dataset.message || 'Hola NearTec, quiero orientación para mejorar la tecnología de mi empresa.';
    a.href = waLink(msg);
  });
}
function setupReveal() {
  const io = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('inview'); }), { threshold: 0.16 });
  $$('.reveal, .card, .bars, .flow-visual, .ecosystem-visual').forEach((el) => io.observe(el));
}
async function loadData() {
  try {
    const [pricing, rules] = await Promise.all([fetch('/assets/data/pricing.json').then(r => r.json()), fetch('/assets/data/lead-rules.json').then(r => r.json())]);
    PRICING = pricing; RULES = rules;
  } catch (error) { console.warn('No se pudo cargar data pública NearTec', error); }
}
function rateForSeats(seats, billing) {
  if (!PRICING) return 0;
  const band = PRICING.compunegocio.licenses.find((item) => seats >= item.min && seats <= item.max);
  return band ? (billing === 'annual' ? band.annual : band.monthly) : 0;
}
function stampPrice(stamps) {
  const item = PRICING?.compunegocio.stamps.find((s) => s.stamps === Number(stamps));
  return item ? item.price : 0;
}
function quoteInput() {
  return {
    name: $('#name')?.value.trim() || '', company: $('#company')?.value.trim() || '', phone: $('#phone')?.value.trim() || '', email: $('#email')?.value.trim() || '',
    service: $('#service')?.value || 'Diagnóstico tecnológico', seats: Number($('#seats')?.value || 0), billing: $('#billing')?.value || 'monthly', cn7: $('#cn7')?.value || 'none',
    implementation: Boolean($('#implementation')?.checked), support: Number($('#supportHours')?.value || 0), dev: Number($('#developmentHours')?.value || 0), stamps: Number($('#stamps')?.value || 0),
    extras: $$('.custom-service:checked').map((el) => el.value), notes: $('#notes')?.value.trim() || ''
  };
}
function calculateQuote(input) {
  const lines = [];
  let monthlyMxn = 0, annualMxn = 0, oneTimeMxn = 0, monthlyUsd = 0;
  if (input.seats > 0) {
    const rate = rateForSeats(input.seats, input.billing);
    const amount = rate * input.seats;
    lines.push({ name: `CompuNegocio · ${input.seats} estación(es)`, amount, currency: 'MXN', freq: input.billing === 'annual' ? 'Anual' : 'Mensual' });
    input.billing === 'annual' ? annualMxn += amount : monthlyMxn += amount;
  }
  if (input.implementation) { oneTimeMxn += PRICING.compunegocio.implementation; lines.push({ name: 'Implementación remota base', amount: PRICING.compunegocio.implementation, currency: 'MXN', freq: 'Único' }); }
  if (input.support > 0) { const amount = input.support * PRICING.compunegocio.support_hour; oneTimeMxn += amount; lines.push({ name: `Soporte técnico remoto · ${input.support} h`, amount, currency: 'MXN', freq: 'Único' }); }
  if (input.dev > 0) { const amount = input.dev * PRICING.compunegocio.development_hour; oneTimeMxn += amount; lines.push({ name: `Desarrollo / ajustes · ${input.dev} h`, amount, currency: 'MXN', freq: 'Único' }); }
  if (input.cn7 !== 'none') { const item = PRICING.compunegocio.cn7.find((x) => x.id === input.cn7); if (item) { monthlyUsd += item.monthly_usd; lines.push({ name: item.name, amount: item.monthly_usd, currency: 'USD', freq: 'Mensual' }); } }
  if (input.stamps > 0) { const amount = stampPrice(input.stamps); if (amount) { oneTimeMxn += amount; lines.push({ name: `Timbres CompuNegocio · ${input.stamps}`, amount, currency: 'MXN', freq: 'Único' }); } }
  return { lines, monthlyMxn, annualMxn, oneTimeMxn, monthlyUsd };
}
function publicPriority(input, quote) {
  let value = 0;
  if (input.company) value += 15;
  if (input.name && input.phone) value += 15;
  if (input.service) value += 10;
  if (input.seats > 0 || input.cn7 !== 'none') value += 20;
  if (input.extras.length) value += 15;
  if (quote.lines.length) value += 15;
  if (input.notes.length > 20) value += 10;
  value = Math.min(100, value);
  const match = (RULES?.thresholds || []).find((x) => value >= x.min) || { label: 'Primera orientación', next: 'Entender el caso con asesor' };
  return { value, label: match.label, next: match.next };
}
function renderQuote() {
  if (!$('#quoteForm') || !PRICING) return;
  const input = quoteInput(); const quote = calculateQuote(input); const priority = publicPriority(input, quote);
  $('#mxnMonthly') && ($('#mxnMonthly').textContent = quote.monthlyMxn ? `${money(quote.monthlyMxn)} / mes` : '—');
  $('#mxnAnnual') && ($('#mxnAnnual').textContent = quote.annualMxn ? `${money(quote.annualMxn)} / año` : '—');
  $('#mxnOne') && ($('#mxnOne').textContent = quote.oneTimeMxn ? money(quote.oneTimeMxn) : '—');
  $('#usdMonthly') && ($('#usdMonthly').textContent = quote.monthlyUsd ? `${money(quote.monthlyUsd, 'USD')} / mes` : '—');
  $('#priorityWord') && ($('#priorityWord').textContent = priority.label.replace('Atención ', ''));
  $('#priorityRing') && ($('#priorityRing').style.background = `conic-gradient(var(--green) 0 ${Math.max(26, priority.value)}%, rgba(255,255,255,.08) ${Math.max(26, priority.value)}% 100%)`);
  $('#nextStep') && ($('#nextStep').textContent = priority.next);
  const lineItems = $('#lineItems');
  if (lineItems) {
    lineItems.innerHTML = quote.lines.length ? quote.lines.map((item) => `<div><span>${item.name}<small>${item.freq}</small></span><b>${money(item.amount, item.currency)}</b></div>`).join('') : '<div><span>Servicios a medida<small>Se define por diagnóstico</small></span><b>Por alcance</b></div>';
  }
  const msg = `Hola NearTec, quiero cotizar mi proyecto.%0A%0AEmpresa: ${input.company || '-'}%0ANombre: ${input.name || '-'}%0AServicio: ${input.service}%0ARuta sugerida: ${priority.label}%0AMXN mensual: ${money(quote.monthlyMxn)}%0AMXN único: ${money(quote.oneTimeMxn)}%0AUSD mensual: ${money(quote.monthlyUsd, 'USD')}%0ANotas: ${input.notes || '-'}`;
  $('#whatsappQuote') && ($('#whatsappQuote').href = `https://wa.me/${CONTACT.whatsapp}?text=${msg}`);
  const payload = { input, quote, priority, createdAt: new Date().toISOString() };
  localStorage.setItem('neartec_quote', JSON.stringify(payload));
}
function setupQuote() {
  const form = $('#quoteForm');
  if (!form) return;
  form.addEventListener('input', renderQuote);
  form.addEventListener('change', renderQuote);
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); renderQuote();
    const data = JSON.parse(localStorage.getItem('neartec_quote') || '{}');
    try {
      await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.input?.name, email: data.input?.email, phone: data.input?.phone, company: data.input?.company, service: data.input?.service, message: data.input?.notes, score: data.priority?.value, quote: data, source: 'cotizador-web' }) });
      toast('Solicitud enviada. También puedes continuar por WhatsApp.');
    } catch (error) { toast('No se pudo enviar. Usa WhatsApp para continuar.'); }
  });
  $('#downloadPdf')?.addEventListener('click', downloadQuotePdf);
  renderQuote();
}
function ascii(text) { return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\x20-\x7E\n]/g, '').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)'); }
function pdfText(text, x, y, size = 10, font = 'F1') { return `BT /${font} ${size} Tf ${x} ${y} Td (${ascii(text)}) Tj ET\n`; }
function pdfRect(x, y, w, h, color) { return `${color} rg ${x} ${y} ${w} ${h} re f\n`; }
async function fetchBytes(url) { const r = await fetch(url); return new Uint8Array(await r.arrayBuffer()); }
function concatParts(parts) { const total = parts.reduce((n, p) => n + (typeof p === 'string' ? new TextEncoder().encode(p).length : p.length), 0); const out = new Uint8Array(total); let offset = 0; const enc = new TextEncoder(); parts.forEach((p) => { const bytes = typeof p === 'string' ? enc.encode(p) : p; out.set(bytes, offset); offset += bytes.length; }); return out; }
async function buildPdf(data) {
  const logo = await fetchBytes('/assets/img/neartec-logo-pdf.jpg');
  let y = 748; let content = '';
  content += pdfRect(0, 0, 612, 792, '0.98 1 0.96');
  content += pdfRect(0, 700, 612, 92, '0.03 0.07 0.04');
  content += 'q 130 0 0 65 42 713 cm /Im1 Do Q\n';
  content += pdfText('Cotizacion preliminar', 418, 746, 14, 'F2');
  content += pdfText(new Date().toLocaleDateString('es-MX'), 470, 724, 9, 'F1');
  y = 660;
  content += pdfText(data.input.company || 'Empresa por confirmar', 42, y, 22, 'F2'); y -= 22;
  content += pdfText(`Contacto: ${data.input.name || '-'} | WhatsApp: ${data.input.phone || '-'} | Correo: ${data.input.email || '-'}`, 42, y, 9); y -= 36;
  content += pdfRect(42, y - 52, 528, 66, '0.90 1 0.74');
  content += pdfText(`Ruta sugerida: ${data.priority.label}`, 58, y - 6, 14, 'F2');
  content += pdfText(`Siguiente paso: ${data.priority.next}`, 58, y - 28, 10);
  y -= 92;
  content += pdfText('Partidas con referencia publica', 42, y, 14, 'F2'); y -= 24;
  if (!data.quote.lines.length) { content += pdfText('Servicios a medida: se define por diagnostico y alcance.', 42, y, 10); y -= 26; }
  data.quote.lines.slice(0, 12).forEach((item, index) => { content += pdfRect(42, y - 8, 528, 24, index % 2 ? '0.92 0.98 0.90' : '0.86 0.96 0.82'); content += pdfText(item.name, 52, y, 9); content += pdfText(item.freq, 340, y, 9); content += pdfText(money(item.amount, item.currency), 448, y, 9, 'F2'); y -= 28; });
  y -= 14; content += pdfRect(42, y - 84, 528, 96, '0.04 0.08 0.04');
  content += '0.72 1 0.25 rg';
  content += pdfText('Resumen', 58, y - 8, 16, 'F2'); content += pdfText(`Mensual MXN: ${money(data.quote.monthlyMxn)}`, 58, y - 34, 11); content += pdfText(`Anual MXN: ${money(data.quote.annualMxn)}`, 58, y - 54, 11); content += pdfText(`Unico MXN: ${money(data.quote.oneTimeMxn)}`, 300, y - 34, 11); content += pdfText(`Mensual USD: ${money(data.quote.monthlyUsd, 'USD')}`, 300, y - 54, 11);
  y -= 126; content += pdfText('Notas importantes', 42, y, 13, 'F2'); y -= 18;
  content += pdfText('Precios sujetos a alcance, disponibilidad, impuestos aplicables y validacion final.', 42, y, 8); y -= 14;
  content += pdfText('Servicios de desarrollo, CRM, IA, integraciones, seguridad e infraestructura especial requieren diagnostico.', 42, y, 8);
  content += pdfText(`NearTec | ${CONTACT.email} | ${CONTACT.phone} | RFC NEA040929DKA`, 42, 36, 8);
  const objs = [];
  objs.push('<< /Type /Catalog /Pages 2 0 R >>');
  objs.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  objs.push('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> /XObject << /Im1 7 0 R >> >> /Contents 6 0 R >>');
  objs.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  objs.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
  objs.push(`<< /Length ${new TextEncoder().encode(content).length} >>\nstream\n${content}endstream`);
  objs.push({ raw: logo, head: `<< /Type /XObject /Subtype /Image /Width 360 /Height 181 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${logo.length} >>\nstream\n`, tail: '\nendstream' });
  const parts = ['%PDF-1.4\n']; const offsets = [0];
  objs.forEach((obj, i) => { offsets.push(concatParts(parts).length); parts.push(`${i + 1} 0 obj\n`); if (typeof obj === 'string') parts.push(obj + '\n'); else { parts.push(obj.head); parts.push(obj.raw); parts.push(obj.tail + '\n'); } parts.push('endobj\n'); });
  const xrefStart = concatParts(parts).length; parts.push(`xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`); offsets.slice(1).forEach((o) => parts.push(String(o).padStart(10, '0') + ' 00000 n \n')); parts.push(`trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`);
  return new Blob([concatParts(parts)], { type: 'application/pdf' });
}
async function downloadQuotePdf() {
  const data = JSON.parse(localStorage.getItem('neartec_quote') || '{}');
  if (!data.quote) { toast('Primero completa el cotizador.'); return; }
  try { const blob = await buildPdf(data); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `Cotizacion-NearTec-${Date.now()}.pdf`; a.click(); URL.revokeObjectURL(url); toast('PDF generado.'); } catch (error) { console.error(error); toast('No se pudo generar el PDF.'); }
}
function setupLeadForms() {
  $$('[data-lead-form]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const fd = new FormData(form); const payload = Object.fromEntries(fd.entries());
      payload.source = form.dataset.source || 'formulario-web'; payload.score = 70;
      const msg = `Hola NearTec, quiero orientación.%0A%0AEmpresa: ${payload.company || '-'}%0ANombre: ${payload.name || '-'}%0AServicio: ${payload.service || 'Diagnóstico tecnológico'}%0AContexto: ${payload.message || '-'}`;
      try { await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); toast('Solicitud enviada. Te abrimos WhatsApp para continuar.'); setTimeout(() => { location.href = `https://wa.me/${CONTACT.whatsapp}?text=${msg}`; }, 650); } catch { location.href = `https://wa.me/${CONTACT.whatsapp}?text=${msg}`; }
    });
  });
}
function addMessage(type, html) { const body = $('#chatBody'); if (!body) return; const div = document.createElement('div'); div.className = `bubble ${type}`; div.innerHTML = html; body.appendChild(div); body.scrollTop = body.scrollHeight; }
function addOptions(options) { const body = $('#chatBody'); if (!body) return; const wrap = document.createElement('div'); wrap.className = 'chat-options'; options.forEach((opt) => { const btn = document.createElement('button'); btn.type = 'button'; btn.textContent = opt.label; btn.addEventListener('click', () => opt.action()); wrap.appendChild(btn); }); body.appendChild(wrap); body.scrollTop = body.scrollHeight; }
function startChat() {
  const body = $('#chatBody'); if (!body) return; body.innerHTML = ''; chatState = { need: '', detail: '' };
  addMessage('bot', 'Soy Neary AI. Te ayudo a ubicar qué tecnología necesita tu empresa y te conecto con un asesor sin vueltas. ¿Qué quieres resolver?');
  addOptions([
    { label: 'Vender mejor con web, landing o app', action: () => chooseNeed('Web / Apps') },
    { label: 'Ordenar ventas, inventario o timbres', action: () => chooseNeed('CompuNegocio') },
    { label: 'Respaldar información o trabajar en nube', action: () => chooseNeed('CN7 / Nube') },
    { label: 'Automatizar seguimiento, tareas o CRM', action: () => chooseNeed('CRM / IA') },
    { label: 'Necesito soporte o infraestructura', action: () => chooseNeed('Soporte') }
  ]);
}
function chooseNeed(need) {
  chatState.need = need; addMessage('user', need);
  addMessage('bot', `Perfecto. Para ${need}, lo correcto es revisar tu operación actual y separar si existe precio público o si requiere alcance. ¿Qué prefieres hacer ahora?`);
  updateChatWhats();
  addOptions([
    { label: 'Hablar por WhatsApp con asesor', action: () => { location.href = $('#chatWhats').href; } },
    { label: 'Abrir cotizador', action: () => { location.href = '/cotizador/'; } },
    { label: 'Solicitar diagnóstico', action: () => { location.href = '/diagnostico/'; } }
  ]);
}
function updateChatWhats() { const msg = `Hola NearTec, Neary AI me ayudó a elegir una ruta.%0A%0ANecesidad: ${chatState.need || 'Diagnóstico tecnológico'}%0AQuiero hablar con un asesor para definir alcance y siguiente paso.`; $('#chatWhats') && ($('#chatWhats').href = `https://wa.me/${CONTACT.whatsapp}?text=${msg}`); }
function setupChat() { const fab = $('#nearyFab'), panel = $('#chatPanel'), close = $('#chatClose'); if (!fab || !panel) return; fab.addEventListener('click', () => { panel.classList.toggle('open'); if (panel.classList.contains('open')) startChat(); }); close?.addEventListener('click', () => panel.classList.remove('open')); updateChatWhats(); }
ready(async () => { createTechBackground(); setupNavigation(); setupReveal(); await loadData(); setupQuote(); setupLeadForms(); setupChat(); });
