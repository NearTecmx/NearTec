
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({ok:false,message:'Method not allowed'});
  const lead=req.body||{}; if(!lead.name||!lead.phone) return res.status(400).json({ok:false,message:'Nombre y teléfono son requeridos.'});
  const payload={...lead,createdAt:new Date().toISOString(),source:'neartec-final-scene-integration'};
  if(process.env.LEADS_WEBHOOK_URL){
    try{const r=await fetch(process.env.LEADS_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});return res.status(r.ok?200:502).json({ok:r.ok,message:r.ok?'Lead enviado.':'Webhook no aceptó el lead.'})}catch(e){return res.status(502).json({ok:false,message:'No se pudo enviar al webhook.'})}
  }
  if(process.env.VERCEL) return res.status(503).json({ok:false,message:'Configura LEADS_WEBHOOK_URL para producción.'});
  return res.status(200).json({ok:true,message:'Lead recibido en modo desarrollo.',lead:payload});
}
