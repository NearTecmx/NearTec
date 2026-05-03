
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const WA = '526644046194';
const CONTACT_EMAIL = 'meta@itimbre.com';
const PRICING = {
  compu: [{max:3, monthly:450, annual:4050, label:'1 a 3 estaciones'}, {max:8, monthly:400, annual:3600, label:'4 a 8 estaciones'}, {max:999, monthly:350, annual:3150, label:'9 o más estaciones'}],
  implementation: 1500, support: 499, dev: 999,
  cn7Backup: 99, cn7Hosted:149, dbBackup:99,
  stamps: [{qty:365,price:730},{qty:500,price:1000},{qty:1000,price:1500},{qty:2000,price:2800},{qty:3000,price:4200},{qty:4000,price:5200},{qty:5000,price:6250},{qty:6000,price:7200},{qty:8000,price:8800},{qty:10000,price:9500}]
};
function money(n, currency='MXN'){return new Intl.NumberFormat('es-MX',{style:'currency',currency,maximumFractionDigits:0}).format(Number(n||0));}
function textWa(message){return `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;}
function initCanvas(){
  const canvas = $('#techCanvas'); if(!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d'); let w=0,h=0,dpr=1,pts=[];
  function resize(){dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);pts=Array.from({length:Math.min(42,Math.floor(w*h/24000))},(_,i)=>({x:Math.random()*w,y:Math.random()*h,r:18+Math.random()*70,s:.18+Math.random()*.45,a:Math.random()*6.28}));}
  function loop(t){ctx.clearRect(0,0,w,h);ctx.lineWidth=1;pts.forEach((p,i)=>{p.a+=.002*p.s;const x=p.x+Math.cos(p.a)*14,y=p.y+Math.sin(p.a)*14;ctx.strokeStyle=`rgba(157,255,71,${.10+i%5*.014})`;ctx.beginPath();for(let k=0;k<6;k++){const a=Math.PI*2*k/6+p.a;const px=x+Math.cos(a)*p.r;const py=y+Math.sin(a)*p.r;if(k)ctx.lineTo(px,py);else ctx.moveTo(px,py)}ctx.closePath();ctx.stroke();for(let j=i+1;j<pts.length;j++){const q=pts[j];const dx=x-q.x,dy=y-q.y,dist=Math.hypot(dx,dy);if(dist<190){ctx.strokeStyle=`rgba(157,255,71,${(1-dist/190)*.08})`;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(q.x,q.y);ctx.stroke();}}});requestAnimationFrame(loop)}
  addEventListener('resize',resize,{passive:true});resize();requestAnimationFrame(loop);
}
function initReveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:.14});$$('.card,.premium-card,.graph-card,.step,.form-panel,.hero-copy,.hero-visual').forEach(el=>{el.classList.add('reveal');io.observe(el)});}
function initMenu(){const btn=$('#menuBtn'), links=$('#navLinks'); if(!btn||!links)return; btn.addEventListener('click',()=>{links.classList.toggle('open');btn.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')}); links.addEventListener('click',e=>{if(e.target.tagName==='A')links.classList.remove('open')});}
function initWaLinks(){const base='Hola NearTec, quiero cotizar una solución tecnológica para mi empresa.';$$('.js-wa').forEach(a=>{a.href=textWa(a.dataset.msg||base);a.rel='noopener';a.target='_blank';});}
function showToast(msg){let t=$('.success-toast');if(!t){t=document.createElement('div');t.className='success-toast';document.body.append(t)}t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3600)}
async function submitLead(data){try{const res=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});return await res.json()}catch(e){return {ok:false,error:e.message}}}
function initForms(){ $$('form[data-lead-form]').forEach(form=>{form.addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(form);const data=Object.fromEntries(fd.entries());data.source=form.dataset.source||location.pathname;data.score=computePriority(data);const r=await submitLead(data);const msg=`Hola NearTec. Soy ${data.name||'un prospecto'} de ${data.company||'mi empresa'}. Necesito: ${data.service||'diagnóstico tecnológico'}. Contexto: ${data.message||data.notes||'Quiero revisar opciones'}.`;showToast(r.ok?'Solicitud recibida. Te llevamos a WhatsApp con contexto.':'No se pudo registrar, abrimos WhatsApp.');setTimeout(()=>{location.href=textWa(msg)},600)});});}
function computePriority(data){let s=45;const txt=Object.values(data).join(' ').toLowerCase();if(data.company)s+=10;if(data.phone)s+=10;if(data.email)s+=5;if(/urgente|esta semana|ya|inmediato|implementar|cotizar/.test(txt))s+=15;if(/compunegocio|cn7|respaldo|inventario|timbres|crm|web|app/.test(txt))s+=10;if(/sucursal|estaciones|usuarios|servidor|base de datos/.test(txt))s+=10;return Math.min(100,s)}
function priorityLabel(score){if(score>=80)return 'Atención prioritaria';if(score>=60)return 'Buena oportunidad';return 'Exploración inicial'}
function initAssistant(){
  const fab=$('#assistantFab'), panel=$('#assistantPanel'); if(!fab||!panel)return; const close=$('#assistantClose');
  const state={need:'',urgency:'',company:'',phone:''};
  function renderStep(){
    const body=$('#assistantBody');
    body.innerHTML=`<div class="assistant-message">Soy Neary AI. Te ayudo a ubicar qué conviene: web, CRM, CompuNegocio, CN7, nube, soporte o integración. El objetivo es que llegues con un asesor con contexto claro.</div>
      <div class="assistant-options">
        <button data-need="Vender más con web, landing o app">Quiero vender más</button>
        <button data-need="Ordenar ventas, inventario, usuarios o timbres">Necesito ordenar mi operación</button>
        <button data-need="Respaldar base de datos, servidor o nube">Quiero respaldar información</button>
        <button data-need="CRM, WhatsApp, seguimiento o automatización">Quiero automatizar seguimiento</button>
        <button data-need="Soporte técnico o mantenimiento">Necesito soporte</button>
      </div>
      <div class="assistant-mini-form" hidden>
        <input id="nearyCompany" placeholder="Empresa o negocio">
        <input id="nearyPhone" placeholder="WhatsApp de contacto">
        <button class="btn btn-primary" id="nearySend">Hablar con asesor</button>
      </div>`;
    $$('.assistant-options button',body).forEach(b=>b.addEventListener('click',()=>{state.need=b.dataset.need;$('.assistant-mini-form',body).hidden=false;$$('.assistant-options button',body).forEach(x=>x.style.opacity=x===b?'1':'.45')}));
    $('#nearySend',body).addEventListener('click',async()=>{state.company=$('#nearyCompany').value.trim();state.phone=$('#nearyPhone').value.trim();const data={name:'Contacto desde Neary AI',company:state.company,phone:state.phone,service:state.need||'Diagnóstico tecnológico',message:'Solicitud iniciada desde asistente Neary AI',source:'neary-assistant',score:computePriority({company:state.company,phone:state.phone,service:state.need})};await submitLead(data);const msg=`Hola NearTec. Quiero hablar con un asesor. Necesidad: ${state.need||'diagnóstico tecnológico'}. Empresa: ${state.company||'por confirmar'}. WhatsApp: ${state.phone||'por confirmar'}.`;location.href=textWa(msg)});
  }
  renderStep(); fab.addEventListener('click',()=>panel.classList.toggle('open')); close?.addEventListener('click',()=>panel.classList.remove('open'));
}
function chooseLicense(stations){return PRICING.compu.find(x=>stations<=x.max)||PRICING.compu[2]}
function updateQuote(){
  const form=$('#quoteForm'); if(!form)return; const fd=new FormData(form);const stations=Number(fd.get('stations')||1);const tier=chooseLicense(stations);let monthlyMxn=tier.monthly*stations;let annualMxn=tier.annual*stations;let oneMxn=0;let monthlyUsd=0;let rec=[];rec.push(`${tier.label}: ${money(tier.monthly)} / estación`);
  if(fd.get('implementation')){oneMxn+=PRICING.implementation;rec.push('Implementación base remota')}
  const supportH=Number(fd.get('supportHours')||0), devH=Number(fd.get('devHours')||0);oneMxn+=supportH*PRICING.support+devH*PRICING.dev;if(supportH)rec.push(`${supportH} h soporte`);if(devH)rec.push(`${devH} h desarrollo`);
  const cn7=fd.get('cn7');if(cn7==='backup'){monthlyUsd+=PRICING.cn7Backup;rec.push('CN7 con respaldo')}if(cn7==='hosted'){monthlyUsd+=PRICING.cn7Hosted;rec.push('CN7 hospedado')}if(fd.get('dbBackup')){monthlyUsd+=PRICING.dbBackup;rec.push('Respaldo automático BD')}
  const stampQty=Number(fd.get('stamps')||0);const st=PRICING.stamps.find(x=>x.qty===stampQty); if(st){oneMxn+=st.price;rec.push(`${st.qty} timbres`)}
  ['web','app','crm','security','email','integration'].forEach(k=>{if(fd.get(k))rec.push(({web:'Web / landing por alcance',app:'App / desarrollo por alcance',crm:'CRM / IA por alcance',security:'Seguridad / respaldo por alcance',email:'Correo / hosting por alcance',integration:'Integración fiscal por alcance'})[k])});
  const score=computePriority(Object.fromEntries(fd.entries()));
  $('#qMonthlyMxn').textContent=money(monthlyMxn);$('#qAnnualMxn').textContent=money(annualMxn);$('#qOneMxn').textContent=money(oneMxn);$('#qMonthlyUsd').textContent=money(monthlyUsd,'USD');$('#qPriority').textContent=priorityLabel(score);$('#qRecommendations').innerHTML=rec.map(r=>`<span>${r}</span>`).join('');
  form.dataset.quote=JSON.stringify({monthlyMxn,annualMxn,oneMxn,monthlyUsd,priority:priorityLabel(score),items:rec,stations,tier:tier.label,notes:fd.get('notes')||''});
}
function initQuote(){const form=$('#quoteForm');if(!form)return;form.addEventListener('input',updateQuote);form.addEventListener('change',updateQuote);updateQuote();$('#quotePdf')?.addEventListener('click',downloadQuotePdf);$('#quoteSend')?.addEventListener('click',async()=>{const fd=new FormData(form);const quote=JSON.parse(form.dataset.quote||'{}');const data=Object.fromEntries(fd.entries());data.service='Cotización NearTec';data.quote=quote;data.score=computePriority(data);await submitLead(data);location.href=textWa(`Hola NearTec. Generé una cotización en el sitio. Prioridad: ${quote.priority}. Resumen: ${quote.items?.join(', ')}. Totales: ${money(quote.monthlyMxn)} mensual MXN, ${money(quote.oneMxn)} único MXN, ${money(quote.monthlyUsd,'USD')} mensual USD.`)});}
async function downloadQuotePdf(){
  const form=$('#quoteForm');const quote=JSON.parse(form?.dataset.quote||'{}');const canvas=document.createElement('canvas');canvas.width=1240;canvas.height=1754;const c=canvas.getContext('2d');
  c.fillStyle='#07120a';c.fillRect(0,0,1240,1754);for(let y=0;y<1754;y+=58){c.strokeStyle='rgba(157,255,71,.08)';c.beginPath();c.moveTo(0,y);c.lineTo(1240,y);c.stroke()}for(let x=0;x<1240;x+=58){c.strokeStyle='rgba(157,255,71,.08)';c.beginPath();c.moveTo(x,0);c.lineTo(x,1754);c.stroke()}c.fillStyle='rgba(157,255,71,.08)';roundRect(c,70,70,1100,1614,42,true,false);c.strokeStyle='rgba(157,255,71,.35)';roundRect(c,70,70,1100,1614,42,false,true);
  const logo=await loadImage('/assets/img/neartec-logo-clean.png');c.drawImage(logo,96,94,310,156);c.fillStyle='#9dff47';c.font='bold 26px Arial';c.fillText('COTIZACIÓN TECNOLÓGICA',760,132);c.fillStyle='#cfe5c8';c.font='24px Arial';c.fillText(new Date().toLocaleDateString('es-MX'),760,168);c.fillText('RFC NEA040929DKA',760,204);
  c.fillStyle='#f4fff0';c.font='bold 56px Arial';wrapCanvas(c,'Tecnología para vender, operar y crecer con control.',96,310,980,64);c.fillStyle='#d7ead1';c.font='28px Arial';wrapCanvas(c,'Resumen generado con precios base documentados y servicios a medida sujetos a diagnóstico.',96,460,960,38);
  drawSection(c,96,570,'Resumen de inversión');drawTotal(c,110,650,'Mensual MXN',money(quote.monthlyMxn||0));drawTotal(c,420,650,'Anual MXN',money(quote.annualMxn||0));drawTotal(c,730,650,'Pago único MXN',money(quote.oneMxn||0));drawTotal(c,110,820,'Mensual USD',money(quote.monthlyUsd||0,'USD'));drawTotal(c,420,820,'Prioridad',quote.priority||'Por revisar');
  drawSection(c,96,1030,'Módulos recomendados');let y=1110;(quote.items||[]).forEach((it,i)=>{c.fillStyle='#9dff47';c.font='bold 26px Arial';c.fillText(String(i+1).padStart(2,'0'),120,y);c.fillStyle='#f4fff0';c.font='26px Arial';wrapCanvas(c,it,178,y-2,840,34);y+=58});
  drawSection(c,96,1390,'Siguiente paso');c.fillStyle='#d7ead1';c.font='26px Arial';wrapCanvas(c,'Un asesor NearTec valida alcance, disponibilidad, impuestos aplicables y condiciones finales antes de confirmar cualquier implementación.',110,1460,970,38);c.fillStyle='#9dff47';c.font='bold 30px Arial';c.fillText('WhatsApp 664 404 6194  ·  meta@itimbre.com',110,1600);
  const jpg=canvas.toDataURL('image/jpeg',.92);const pdf=jpegToPdf(jpg,595,842);const a=document.createElement('a');a.href=URL.createObjectURL(pdf);a.download='cotizacion-neartec.pdf';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000);
}
function loadImage(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src;})}
function roundRect(c,x,y,w,h,r,fill,stroke){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();if(fill)c.fill();if(stroke)c.stroke();}
function drawSection(c,x,y,t){c.fillStyle='#9dff47';c.font='bold 30px Arial';c.fillText(t,x,y);c.strokeStyle='rgba(157,255,71,.32)';c.beginPath();c.moveTo(x,y+18);c.lineTo(1120,y+18);c.stroke()}
function drawTotal(c,x,y,l,v){c.fillStyle='rgba(0,8,4,.76)';roundRect(c,x,y,280,120,24,true,false);c.strokeStyle='rgba(157,255,71,.22)';roundRect(c,x,y,280,120,24,false,true);c.fillStyle='#b6cdb0';c.font='20px Arial';c.fillText(l,x+24,y+38);c.fillStyle='#9dff47';c.font='bold 32px Arial';wrapCanvas(c,String(v),x+24,y+84,230,36)}
function wrapCanvas(c,text,x,y,max,lh){const words=String(text).split(' ');let line='';for(const w of words){const t=(line+' '+w).trim();if(c.measureText(t).width<max){line=t}else{c.fillText(line,x,y);y+=lh;line=w}}if(line)c.fillText(line,x,y);return y}
function jpegToPdf(dataUrl,w,h){const img=atob(dataUrl.split(',')[1]);const objs=[];function obj(s){objs.push(s);return objs.length}const imgId=obj(`<< /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.length} >>\nstream\n${img}\nendstream`);const content=`q\n${w} 0 0 ${h} 0 0 cm\n/Im0 Do\nQ`;const contId=obj(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);const pageId=obj(`<< /Type /Page /Parent 4 0 R /MediaBox [0 0 ${w} ${h}] /Resources << /XObject << /Im0 ${imgId} 0 R >> >> /Contents ${contId} 0 R >>`);const pagesId=obj(`<< /Type /Pages /Kids [${pageId} 0 R] /Count 1 >>`);const catId=obj(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);let pdf='%PDF-1.4\n';const offs=[0];objs.forEach((o,i)=>{offs.push(pdf.length);pdf+=`${i+1} 0 obj\n${o}\nendobj\n`});const xref=pdf.length;pdf+=`xref\n0 ${objs.length+1}\n0000000000 65535 f \n`;for(let i=1;i<offs.length;i++)pdf+=String(offs[i]).padStart(10,'0')+' 00000 n \n';pdf+=`trailer << /Size ${objs.length+1} /Root ${catId} 0 R >>\nstartxref\n${xref}\n%%EOF`;return new Blob([new Uint8Array([...pdf].map(ch=>ch.charCodeAt(0)&255))],{type:'application/pdf'})}
addEventListener('DOMContentLoaded',()=>{initCanvas();initReveal();initMenu();initWaLinks();initForms();initAssistant();initQuote();});
