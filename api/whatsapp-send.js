
export default async function handler(req,res){
 if(req.method!=='POST') return res.status(405).json({ok:false,message:'Method not allowed'});
 const {to,message}=req.body||{}; const text=message||'Hola NearTec, quiero información.';
 if(process.env.WHATSAPP_TOKEN&&process.env.WHATSAPP_PHONE_NUMBER_ID){
  try{const version=process.env.WHATSAPP_API_VERSION||'v19.0'; const url=`https://graph.facebook.com/${version}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`; const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.WHATSAPP_TOKEN}`},body:JSON.stringify({messaging_product:'whatsapp',to, type:'text', text:{body:text}})}); const data=await r.json(); return res.status(r.ok?200:502).json({ok:r.ok,mode:'cloud_api',data});}catch(e){return res.status(502).json({ok:false,mode:'cloud_api_error'});} }
 return res.status(200).json({ok:true,mode:'wa_link_fallback',url:`https://wa.me/526644046194?text=${encodeURIComponent(text)}`});
}
