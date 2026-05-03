import PDFDocument from 'pdfkit';
import fs from 'node:fs';
import path from 'node:path';

const fmt = (value, currency = 'MXN') =>
  new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(Number(value || 0));

function buildPdf(data) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'LETTER', margin: 42 });
    const chunks = [];

    doc.on('data', chunk => chunks.push(chunk));
    doc.on('error', reject);
    doc.on('end', () => resolve(Buffer.concat(chunks)));

    const logo = path.join(process.cwd(), 'assets/img/neartec-logo-pdf.jpg');

    doc.rect(0, 0, 612, 126).fill('#061108');
    if (fs.existsSync(logo)) {
      try { doc.image(logo, 42, 30, { width: 138 }); } catch {}
    }

    doc.fillColor('#bfff4f').fontSize(22).text('Propuesta de cotización', 305, 34, { align: 'right' });
    doc.fillColor('#dbead2').fontSize(9)
      .text(`Folio NT-${Date.now()}`, 305, 65, { align: 'right' })
      .text(`Fecha: ${new Date().toLocaleDateString('es-MX')}`, 305, 80, { align: 'right' });

    doc.roundedRect(42, 150, 528, 86, 14).fill('#f4f8ef');
    doc.fillColor('#061108').fontSize(13).text('Datos del prospecto', 58, 166);
    doc.fontSize(10)
      .text(`Nombre: ${data?.prospect?.name || 'Por confirmar'}`, 58, 188)
      .text(`Empresa: ${data?.prospect?.company || 'Por confirmar'}`, 58, 204)
      .text(`WhatsApp: ${data?.prospect?.phone || 'Por confirmar'}`, 320, 188)
      .text(`Correo: ${data?.prospect?.email || 'Por confirmar'}`, 320, 204);

    let y = 265;
    doc.fillColor('#061108').fontSize(15).text('Conceptos estimados', 42, y);
    y += 24;

    const items = Array.isArray(data.items) ? data.items : [];
    doc.roundedRect(42, y, 528, 24, 6).fill('#061108');
    doc.fillColor('#fff').fontSize(9)
      .text('Concepto', 52, y + 8)
      .text('Detalle', 184, y + 8)
      .text('Frecuencia', 352, y + 8)
      .text('Importe', 455, y + 8);
    y += 28;

    if (!items.length) {
      doc.fillColor('#061108').text('Sin conceptos calculados. Se recomienda diagnóstico para definir alcance.', 52, y + 8);
      y += 28;
    } else {
      items.forEach((item, index) => {
        doc.rect(42, y, 528, 28).fill(index % 2 ? '#ffffff' : '#f4f8ef');
        doc.fillColor('#061108').fontSize(8.8)
          .text(item.concept || '-', 52, y + 8, { width: 124 })
          .text(item.detail || '-', 184, y + 8, { width: 155 })
          .text(item.frequency || '-', 352, y + 8, { width: 80 })
          .text(fmt(item.amount, item.currency || 'MXN'), 440, y + 8, { width: 115, align: 'right' });
        y += 30;
      });
    }

    y += 14;
    doc.roundedRect(338, y, 232, 110, 14).fill('#061108');
    doc.fillColor('#bfff4f').fontSize(12).text('Resumen de inversión', 354, y + 14);
    doc.fillColor('#fff').fontSize(10)
      .text(`Mensual MXN: ${fmt(data?.totals?.monthlyMxn || 0, 'MXN')}`, 354, y + 38)
      .text(`Anual MXN: ${fmt(data?.totals?.annualMxn || 0, 'MXN')}`, 354, y + 56)
      .text(`Único/evento MXN: ${fmt(data?.totals?.oneTimeMxn || 0, 'MXN')}`, 354, y + 74)
      .text(`Mensual USD: ${fmt(data?.totals?.monthlyUsd || 0, 'USD')}`, 354, y + 92);

    y += 142;
    doc.fillColor('#061108').fontSize(12).text('Notas comerciales', 42, y);
    doc.fontSize(9).fillColor('#334033')
      .text('• Los precios son referencias base documentadas y pueden requerir validación final.', 42, y + 20)
      .text('• No incluyen IVA cuando aplique.', 42, y + 34)
      .text('• Web, apps, CRM, IA, seguridad e integraciones especiales se cotizan por alcance.', 42, y + 48)
      .text('• Siguiente paso: confirmar alcance con asesor NearTec.', 42, y + 62);

    doc.moveTo(42, 720).lineTo(570, 720).stroke('#cbd7c4');
    doc.fillColor('#061108').fontSize(9)
      .text('NearTec · RFC NEA040929DKA · WhatsApp 664 404 6194 · meta@itimbre.com', 42, 732, { align: 'center' });

    doc.end();
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    const data = typeof req.body === 'object' ? req.body : {};
    const pdf = await buildPdf(data);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Cotizacion-NearTec.pdf"');
    return res.status(200).send(pdf);
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'No se pudo generar el PDF' });
  }
}
