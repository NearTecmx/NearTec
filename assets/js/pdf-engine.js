function pdfSafe(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[–—]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^\x20-\x7E\n]/g, '')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
}
function moneyPDF(amount, currency) {
  if (!amount) return '-'
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 2 }).format(amount)
}
function drawText(content, x, y, size = 10, font = 'F1') {
  return `BT /${font} ${size} Tf ${x} ${y} Td (${pdfSafe(content)}) Tj ET\n`
}
function rect(x, y, w, h, color = '0.08 0.12 0.05') {
  return `${color} rg ${x} ${y} ${w} ${h} re f\n`
}
function line(x1, y1, x2, y2, color = '0.78 0.88 0.65') {
  return `${color} RG 0.6 w ${x1} ${y1} m ${x2} ${y2} l S\n`
}
function wrapLines(text, max = 82) {
  const words = pdfSafe(text).split(/\s+/).filter(Boolean)
  const lines = []
  let current = ''
  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > max) {
      if (current) lines.push(current)
      current = word
    } else current = next
  }
  if (current) lines.push(current)
  return lines
}
function createQuotePDF(payload) {
  const quote = payload.quote || {}
  const lead = payload.lead || {}
  const input = payload.input || {}
  const modules = payload.modules || []
  const lines = payload.lines || []
  const folio = `NT-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${String(Date.now()).slice(-5)}`
  let y = 760
  let content = ''
  content += rect(0, 0, 612, 792, '0.985 1 0.965')
  content += rect(0, 680, 612, 112, '0.015 0.035 0.015')
  content += rect(34, 704, 544, 48, '0.55 0.72 0.18')
  content += drawText('nearTec', 54, 734, 25, 'F2')
  content += drawText('Cotizacion inicial / Ruta tecnologica', 54, 716, 11, 'F1')
  content += drawText(`Folio: ${folio}`, 430, 735, 9, 'F1')
  content += drawText(new Date().toLocaleDateString('es-MX'), 430, 718, 9, 'F1')
  y = 648
  content += drawText(input.company || 'Empresa por confirmar', 42, y, 21, 'F2')
  y -= 18
  content += drawText(`Contacto: ${input.name || '-'}  |  WhatsApp: ${input.phone || '-'}  |  Correo: ${input.email || '-'}`, 42, y, 9)
  y -= 28
  content += rect(42, y - 50, 528, 68, '0.91 0.97 0.84')
  content += drawText(`Prioridad de atencion: ${lead.label || '-'}`, 58, y - 1, 13, 'F2')
  content += drawText(`Siguiente paso sugerido: ${lead.nextStep || '-'}`, 58, y - 19, 10)
  content += drawText(`Servicio principal: ${input.service || '-'}`, 58, y - 36, 9)
  y -= 82
  content += drawText('Modulos recomendados', 42, y, 15, 'F2')
  y -= 18
  const modText = modules.length ? modules.join('  |  ') : 'Diagnostico inicial NearTec'
  for (const l of wrapLines(modText, 86).slice(0, 3)) { content += drawText(l, 42, y, 9); y -= 14 }
  y -= 10
  content += drawText('Partidas', 42, y, 15, 'F2')
  y -= 20
  content += rect(42, y - 20, 528, 26, '0.08 0.14 0.05')
  content += drawText('Concepto', 54, y - 10, 9, 'F2')
  content += drawText('Frecuencia', 336, y - 10, 9, 'F2')
  content += drawText('Importe', 470, y - 10, 9, 'F2')
  y -= 32
  if (!lines.length) {
    content += drawText('Proyecto a medida - requiere diagnostico y propuesta por alcance.', 54, y, 9)
    y -= 18
  } else {
    for (const item of lines.slice(0, 12)) {
      content += line(42, y + 10, 570, y + 10, '0.82 0.88 0.74')
      content += drawText(item.name || '-', 54, y, 8)
      content += drawText(item.frequencyLabel || '-', 336, y, 8)
      content += drawText(moneyPDF(item.amount, item.currency || 'MXN'), 470, y, 8)
      y -= 18
      if (y < 140) break
    }
  }
  y -= 10
  content += rect(42, y - 82, 528, 94, '0.91 0.97 0.84')
  content += drawText('Totales estimados', 58, y - 4, 14, 'F2')
  content += drawText(`Mensual MXN: ${moneyPDF(quote.monthlyMxn, 'MXN')}`, 58, y - 26, 10)
  content += drawText(`Anual MXN: ${moneyPDF(quote.annualMxn, 'MXN')}`, 58, y - 43, 10)
  content += drawText(`Cargo unico MXN: ${moneyPDF(quote.oneTimeMxn, 'MXN')}`, 310, y - 26, 10)
  content += drawText(`Mensual USD: ${moneyPDF(quote.monthlyUsd, 'USD')}`, 310, y - 43, 10)
  y -= 112
  content += drawText('Notas comerciales', 42, y, 13, 'F2')
  y -= 16
  const notes = 'Los precios publicados son referencias base documentadas. No incluyen IVA donde aplique. Los servicios a medida, integraciones, CRM, IA, seguridad, web, apps e infraestructura especial requieren validacion de alcance y propuesta formal.'
  for (const l of wrapLines(notes, 92).slice(0, 4)) { content += drawText(l, 42, y, 8); y -= 12 }
  content += rect(0, 0, 612, 58, '0.015 0.035 0.015')
  content += drawText('NearTec | WhatsApp 664 404 6194 | meta@itimbre.com | RFC NEA040929DKA', 42, 32, 9)
  content += drawText('technology near you', 444, 16, 8)
  const objects = []
  objects.push('1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj')
  objects.push('2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj')
  objects.push('3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >> endobj')
  objects.push('4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj')
  objects.push('5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj')
  const stream = content
  objects.push(`6 0 obj << /Length ${stream.length} >> stream\n${stream}endstream endobj`)
  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  for (const obj of objects) { offsets.push(pdf.length); pdf += obj + '\n' }
  const xref = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  for (let i = 1; i < offsets.length; i++) pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`
  return new Blob([pdf], { type: 'application/pdf' })
}
window.NearTecPDF = { createQuotePDF }
