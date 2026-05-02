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
  const lines = payload.lines || []
  let y = 760
  let content = ''
  content += rect(0, 0, 612, 792, '0.98 1 0.96')
  content += rect(0, 690, 612, 102, '0.04 0.07 0.03')
  content += rect(36, 704, 540, 54, '0.55 0.72 0.18')
  content += drawText('nearTec', 58, 736, 24, 'F2')
  content += drawText('Cotizacion inicial NearTec', 58, 716, 11, 'F1')
  content += drawText(new Date().toLocaleDateString('es-MX'), 486, 736, 10, 'F1')
  content += drawText('technology near you', 454, 716, 10, 'F1')
  y = 662
  content += drawText(input.company || 'Empresa por confirmar', 42, y, 22, 'F2')
  y -= 20
  content += drawText(`Contacto: ${input.name || '-'}  |  WhatsApp: ${input.phone || '-'}  |  Correo: ${input.email || '-'}`, 42, y, 9)
  y -= 28
  content += rect(42, y - 42, 528, 58, '0.92 0.97 0.86')
  content += drawText(`Prioridad: ${lead.label || '-'}`, 58, y - 2, 13, 'F2')
  content += drawText(`Siguiente paso: ${lead.nextStep || '-'}`, 58, y - 20, 10)
  content += drawText(`Nivel: ${lead.score || 0}/100`, 462, y - 2, 13, 'F2')
  y -= 78
  content += drawText('Partidas con precio documentado', 42, y, 15, 'F2')
  y -= 14
  content += line(42, y, 570, y, '0.55 0.72 0.18')
  y -= 24
  if (!lines.length) {
    content += drawText('Sin partidas con precio publico. Requiere propuesta personalizada.', 42, y, 10)
    y -= 18
  } else {
    content += drawText('Concepto', 52, y, 9, 'F2')
    content += drawText('Tipo', 340, y, 9, 'F2')
    content += drawText('Importe', 450, y, 9, 'F2')
    y -= 12
    content += line(42, y, 570, y)
    y -= 18
    lines.slice(0, 12).forEach((item, idx) => {
      const fill = idx % 2 === 0 ? '0.96 0.99 0.92' : '0.91 0.96 0.86'
      content += rect(42, y - 8, 528, 22, fill)
      content += drawText(item.name, 52, y, 9)
      content += drawText(item.frequencyLabel, 340, y, 9)
      content += drawText(moneyPDF(item.amount, item.currency), 450, y, 9, 'F2')
      y -= 28
    })
  }
  y -= 8
  content += rect(42, y - 72, 528, 84, '0.04 0.07 0.03')
  content += drawText('Resumen', 58, y - 8, 15, 'F2')
  content += drawText(`Recurrente MXN: ${moneyPDF(quote.monthlyMxn, 'MXN')}`, 58, y - 30, 11)
  content += drawText(`Anual MXN: ${moneyPDF(quote.annualMxn, 'MXN')}`, 58, y - 48, 11)
  content += drawText(`Cargo unico MXN: ${moneyPDF(quote.oneTimeMxn, 'MXN')}`, 300, y - 30, 11)
  content += drawText(`Recurrente USD: ${moneyPDF(quote.monthlyUsd, 'USD')}`, 300, y - 48, 11)
  y -= 100
  content += drawText('Servicios sin precio publico agregado a propuesta', 42, y, 13, 'F2')
  y -= 18
  const modules = payload.modules && payload.modules.length ? payload.modules.join(', ') : 'Sin modulos adicionales.'
  for (const l of wrapLines(modules, 92).slice(0, 4)) {
    content += drawText(l, 42, y, 9)
    y -= 14
  }
  y -= 10
  content += drawText('Notas', 42, y, 13, 'F2')
  y -= 18
  const notes = 'Precios base sujetos a alcance, configuracion final e impuestos aplicables. Desarrollo web, apps, CRM, IA, seguridad, hosting, correo, VPS, FTP y automatizaciones se validan por diagnostico y propuesta formal.'
  for (const l of wrapLines(notes, 96)) {
    content += drawText(l, 42, y, 8)
    y -= 12
  }
  content += drawText('NearTec | meta@itimbre.com | 664 404 6194 | Tijuana, B.C.', 42, 36, 8)
  const objects = []
  objects.push('<< /Type /Catalog /Pages 2 0 R >>')
  objects.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
  objects.push('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>')
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')
  objects.push(`<< /Length ${content.length} >>\nstream\n${content}endstream`)
  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  objects.forEach((obj, i) => {
    offsets.push(pdf.length)
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`
  })
  const xref = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  offsets.slice(1).forEach((off) => {
    pdf += String(off).padStart(10, '0') + ' 00000 n \n'
  })
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`
  return new Blob([pdf], { type: 'application/pdf' })
}
window.NearTecPDF = { createQuotePDF }
