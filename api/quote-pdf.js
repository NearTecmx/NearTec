
function esc(s){return String(s||'').replace(/[()\\]/g,'\\$&')}
export default function handler(req,res){
 if(req.method!=='POST') return res.status(405).json({ok:false});
 const {total,items=[]}=req.body||{}; let y=760; const lines=['NearTec - Cotización base','RFC NEA040929DKA','WhatsApp 664 404 6194','',`Total: ${total||''}`,'']; for(const it of items){lines.push(`${it[0]} - ${it[1]} - $${it[2]} ${it[3]}`)} lines.push('Precios sujetos a validación final. No incluyen IVA.');
 const content=lines.map(l=>`BT /F1 12 Tf 54 ${y-=22} Td (${esc(l)}) Tj ET`).join('\n');
 const pdf=`%PDF-1.4\n1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n5 0 obj << /Length ${content.length} >> stream\n${content}\nendstream endobj\nxref\n0 6\n0000000000 65535 f \ntrailer << /Root 1 0 R /Size 6 >>\nstartxref\n0\n%%EOF`;
 res.setHeader('Content-Type','application/pdf'); res.setHeader('Content-Disposition','attachment; filename="cotizacion-neartec.pdf"'); res.status(200).send(Buffer.from(pdf));
}
