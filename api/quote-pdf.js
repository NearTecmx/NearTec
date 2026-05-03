import PDFDocument from 'pdfkit';
import fs from 'node:fs';
import path from 'node:path';

const money = (value, currency = 'MXN') =>
  new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(Number(value || 0));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok:false, error:'Method not allowed' });
    return;
  }

  const data = typeof req.body === 'object' ? req.body : {};
  const doc = new PDFDocument({ size:'LETTER', margin:42 });
  const chunks = [];

  doc.on('data', c => chunks.push(c));
  doc.on('end', () => {
    const pdf = Buffer.concat(chunks);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Cotizacion-NearTec.pdf"`);
    res.status(200).send(pdf);
  });

  const logo = path.join(process.cwd(), 'assets/img/neartec-logo-clean.png');

  doc.rect(0,0,612,126).fill('#07120b');
  if (fs.existsSync(logo)) {
    try { doc.image(logo,42,32,{width:132}); } catch {}
  }
  doc.fillColor('#bfff4f').fontSize(22).text('Propuesta de cotización', 330, 34, {align:'right'});
  doc.fillColor('#dce8d4').fontSize(9).text(`Folio NT-${Date.now()}`, 330, 65, {align:'right'});
  doc.text(`Fecha: ${new Date().toLocaleDateString('es-MX')}`, 330, 80, {align:'right'});

  doc.fillColor('#07120b').rect(42,150,528,82).fill('#f4f8ef');
  doc.fillColor('#07120b').fontSize(13).text('Datos del prospecto', 58, 164);
  doc.fontSize(10).text(`Nombre: ${data?.prospect?.name || 'Por confirmar'}`,58,184);
  doc.text(`Empresa: ${data?.prospect?.company || 'Por confirmar'}`,58,198);
  doc.text(`WhatsApp: ${data?.prospect?.phone || 'Por confirmar'}`,320,184);
  doc.text(`Correo: ${data?.prospect?.email || 'Por confirmar'}`,320,198);

  let y = 260;
  doc.fillColor('#07120b').fontSize(15).text('Conceptos estimados',42,y);
  y += 24;
  doc.fontSize(9).fillColor('#07120b');

  const items = Array.isArray(data.items) ? data.items : [];
  if (!items.length) {
    doc.text('Sin conceptos calculados. Se recomienda diagnóstico para definir alcance.',42,y);
    y += 18;
  } else {
    doc.rect(42,y,528,24).fill('#07120b');
    doc.fillColor('#ffffff').text('Concepto',52,y+8).text('Detalle',190,y+8).text('Frecuencia',355,y+8).text('Importe',455,y+8);
    y += 28;
    items.forEach((item, i) => {
      const fill = i % 2 === 0 ? '#f4f8ef' : '#ffffff';
      doc.rect(42,y,528,26).fill(fill);
      doc.fillColor('#07120b')
        .text(item.concept || item.label || '-',52,y+8,{width:130})
        .text(item.detail || '-',190,y+8,{width:150})
        .text(item.frequency || '-',355,y+8,{width:90})
        .text(money(item.amount, item.currency || 'MXN'),455,y+8,{width:100,align:'right'});
      y += 28;
    });
  }

  y += 20;
  doc.rect(340,y,230,102).fill('#07120b');
  doc.fillColor('#bfff4f').fontSize(12).text('Resumen de inversión',356,y+14);
  doc.fillColor('#ffffff').fontSize(10)
    .text(`Mensual MXN: ${money(data?.totals?.monthlyMxn || 0,'MXN')}`,356,y+36)
    .text(`Anual MXN: ${money(data?.totals?.annualMxn || 0,'MXN')}`,356,y+52)
    .text(`Único/evento MXN: ${money(data?.totals?.oneTimeMxn || 0,'MXN')}`,356,y+68)
    .text(`Mensual USD: ${money(data?.totals?.monthlyUsd || 0,'USD')}`,356,y+84);

  y += 134;
  doc.fillColor('#07120b').fontSize(12).text('Notas comerciales',42,y);
  doc.fontSize(9).fillColor('#334033')
    .text('• Los precios publicados son referencias base y no incluyen IVA cuando aplique.',42,y+20)
    .text('• Servicios como web, apps, CRM, IA, integraciones, seguridad e infraestructura especial requieren alcance.',42,y+34)
    .text('• La propuesta final se confirma con asesor según requerimiento, disponibilidad y condiciones técnicas.',42,y+48);

  doc.moveTo(42,720).lineTo(570,720).stroke('#d4dfce');
  doc.fillColor('#07120b').fontSize(9).text('NearTec · RFC NEA040929DKA · WhatsApp 664 404 6194 · meta@itimbre.com',42,732,{align:'center'});

  doc.end();
}
