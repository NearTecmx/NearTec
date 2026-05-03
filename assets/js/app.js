const NT = {
  phone: '664 404 6194',
  whatsapp: '526644046194',
  email: 'meta@itimbre.com',
  rfc: 'NEA040929DKA',
  prices: {
    seats: [{ min:1,max:3,monthly:450,annual:4050 },{ min:4,max:8,monthly:400,annual:3600 },{ min:9,max:999,monthly:350,annual:3150 }],
    implementation: 1500,
    supportHour: 499,
    developmentHour: 999,
    cn7Backup: 99,
    cn7Hosted: 149,
    dbBackup: 99,
    stamps: {365:730,500:1000,1000:1500,2000:2800,3000:4200,4000:5200,5000:6250,6000:7200,8000:8800,10000:9500}
  }
};

const $ = (s,c=document)=>c.querySelector(s);
const $$ = (s,c=document)=>Array.from(c.querySelectorAll(s));
const mxn = n => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(Number(n||0));
const usd = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(n||0));

function waUrl(msg){
  return `https://wa.me/${NT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function bootMenu(){
  const btn = $('#menuBtn');
  const links = $('#navLinks');
  if(btn && links) btn.addEventListener('click',()=>links.classList.toggle('open'));
}

function bootTechCanvas(){
  const canvas = document.createElement('canvas');
  canvas.className = 'nt-tech-bg';
  canvas.setAttribute('aria-hidden','true');
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w,h,dpr,nodes=[];
  function resize(){
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth+'px';
    canvas.style.height = innerHeight+'px';
    nodes = Array.from({length: Math.min(58, Math.floor(innerWidth/18))},()=>({
      x: Math.random()*w, y: Math.random()*h,
      vx:(Math.random()-.5)*.18*dpr, vy:(Math.random()-.5)*.18*dpr,
      r:(1+Math.random()*2.4)*dpr
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle='rgba(191,255,79,.18)';
    ctx.lineWidth=1*dpr;
    for(let i=0;i<nodes.length;i++){
      const a=nodes[i];
      if(!reduce){ a.x+=a.vx; a.y+=a.vy; }
      if(a.x<0||a.x>w) a.vx*=-1;
      if(a.y<0||a.y>h) a.vy*=-1;
      ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2); ctx.stroke();
      for(let j=i+1;j<nodes.length;j++){
        const b=nodes[j], dx=a.x-b.x, dy=a.y-b.y, dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<165*dpr){
          ctx.globalAlpha = (1-dist/(165*dpr))*.42;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          ctx.globalAlpha=1;
        }
      }
    }
    if(!reduce) requestAnimationFrame(draw);
  }
  addEventListener('resize',resize,{passive:true});
  resize(); draw();
}

function bootObserver(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('inview') });
  }, {threshold:.18});
  $$('.card,.visual-card,.panel,.bar-row,.bars').forEach(el=>io.observe(el));
}

function bootNeary(){
  const old = $$('.neary-fab,.neary-panel,.mobile-cta');
  old.forEach(el=>el.remove());

  const fab = document.createElement('button');
  fab.className = 'neary-fab';
  fab.type = 'button';
  fab.setAttribute('aria-label','Abrir asistente NearTec');
  fab.innerHTML = `<img src="/assets/icons/neartec-isotipo.png" onerror="this.src='/assets/icons/neartec-isotipo.svg'" alt="NearTec">`;

  const panel = document.createElement('section');
  panel.className = 'neary-panel';
  panel.setAttribute('aria-label','Asistente NearTec');
  panel.innerHTML = `
    <div class="neary-head">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="/assets/icons/neartec-isotipo.png" onerror="this.src='/assets/icons/neartec-isotipo.svg'" alt="">
        <div><b>Neary AI</b><br><small>Te ayudo a elegir el siguiente paso</small></div>
      </div>
      <button class="btn btn-small btn-ghost" data-close-neary>Cerrar</button>
    </div>
    <div class="neary-body">
      <p>Elige lo que necesitas y te llevo al camino más rápido para cotizar o hablar con un asesor.</p>
      <button class="neary-option" data-neary="cotizar"><span>Cotizar una solución</span><b>→</b></button>
      <button class="neary-option" data-neary="compunegocio"><span>CompuNegocio / punto de venta</span><b>→</b></button>
      <button class="neary-option" data-neary="cn7"><span>CN7, nube o respaldo</span><b>→</b></button>
      <button class="neary-option" data-neary="web"><span>Web, app o sistema</span><b>→</b></button>
      <button class="neary-option" data-neary="crm"><span>CRM, automatización o IA</span><b>→</b></button>
      <button class="neary-option" data-neary="asesor"><span>Hablar con asesor por WhatsApp</span><b>→</b></button>
    </div>
  `;

  const sticky = document.createElement('div');
  sticky.className = 'mobile-cta';
  sticky.innerHTML = `
    <a class="btn btn-dark" href="${waUrl('Hola NearTec, quiero hablar con un asesor sobre una solución tecnológica para mi empresa.')}"><span class="wa-icon"></span>WhatsApp</a>
    <a class="btn btn-primary" href="/cotizador/">Cotizar</a>
  `;

  document.body.append(fab,panel,sticky);

  fab.addEventListener('click',()=>panel.classList.toggle('open'));
  panel.querySelector('[data-close-neary]').addEventListener('click',()=>panel.classList.remove('open'));

  const messages = {
    cotizar:'Hola NearTec, quiero cotizar una solución tecnológica. Me interesa recibir una propuesta clara.',
    compunegocio:'Hola NearTec, quiero información de CompuNegocio para punto de venta, inventario, timbres o reportes.',
    cn7:'Hola NearTec, necesito CN7, nube, respaldo o continuidad para mi operación.',
    web:'Hola NearTec, necesito una página web, app, sistema, panel o integración para mi empresa.',
    crm:'Hola NearTec, quiero CRM, automatización o IA para seguimiento, WhatsApp, tareas o procesos.',
    asesor:'Hola NearTec, quiero hablar con un asesor para revisar qué solución conviene implementar.'
  };

  panel.addEventListener('click', e => {
    const btn = e.target.closest('[data-neary]');
    if(!btn) return;
    const key = btn.dataset.neary;
    if(key === 'cotizar') location.href = '/cotizador/';
    else location.href = waUrl(messages[key] || messages.asesor);
  });
}

function calculateQuote(){
  const form = $('#quoteForm');
  if(!form) return;

  const seatsInput = $('#seats');
  const supportInput = $('#supportHours');
  const devInput = $('#developmentHours');
  const stampsInput = $('#stamps');
  const cloudInput = $('#cloudPlan');
  const implementationInput = $('#implementation');

  function seatPrice(seats){
    return NT.prices.seats.find(p=>seats>=p.min && seats<=p.max) || NT.prices.seats[0];
  }

  function selectedNeeds(){
    return $$('input[name="needs"]:checked', form).map(i=>i.value);
  }

  function compute(){
    const seats = Math.max(1, Number(seatsInput.value || 1));
    const support = Math.max(0, Number(supportInput.value || 0));
    const dev = Math.max(0, Number(devInput.value || 0));
    const stamps = Number(stampsInput.value || 0);
    const cloud = cloudInput.value;
    const seat = seatPrice(seats);
    const needs = selectedNeeds();

    let monthlyMxn = seats * seat.monthly;
    let annualMxn = seats * seat.annual;
    let oneTimeMxn = 0;
    let monthlyUsd = 0;
    let items = [];

    items.push({concept:'CompuNegocio',detail:`${seats} estación(es)`,amount:monthlyMxn,currency:'MXN',frequency:'mensual'});
    items.push({concept:'CompuNegocio anual',detail:`${seats} estación(es)`,amount:annualMxn,currency:'MXN',frequency:'anual'});

    if(implementationInput.checked){
      oneTimeMxn += NT.prices.implementation;
      items.push({concept:'Implementación base',detail:'Instalación, configuración, CSD, logo y capacitación inicial',amount:NT.prices.implementation,currency:'MXN',frequency:'único'});
    }
    if(support){
      oneTimeMxn += support * NT.prices.supportHour;
      items.push({concept:'Soporte técnico',detail:`${support} hora(s)`,amount:support * NT.prices.supportHour,currency:'MXN',frequency:'por evento'});
    }
    if(dev){
      oneTimeMxn += dev * NT.prices.developmentHour;
      items.push({concept:'Desarrollo / ajustes',detail:`${dev} hora(s)`,amount:dev * NT.prices.developmentHour,currency:'MXN',frequency:'por evento'});
    }
    if(stamps && NT.prices.stamps[stamps]){
      oneTimeMxn += NT.prices.stamps[stamps];
      items.push({concept:'Timbres CN',detail:`Paquete ${stamps}`,amount:NT.prices.stamps[stamps],currency:'MXN',frequency:'por paquete'});
    }
    if(cloud === 'cn7Backup'){
      monthlyUsd += NT.prices.cloud.cn7Backup;
      items.push({concept:'CN7 con respaldo',detail:'Servidor y base de datos con respaldo',amount:NT.prices.cloud.cn7Backup,currency:'USD',frequency:'mensual'});
    }
    if(cloud === 'cn7Hosted'){
      monthlyUsd += NT.prices.cloud.cn7Hosted;
      items.push({concept:'CN7 hospedado en nube',detail:'Hospedaje de operación en nube',amount:NT.prices.cloud.cn7Hosted,currency:'USD',frequency:'mensual'});
    }
    if(cloud === 'dbBackup'){
      monthlyUsd += NT.prices.cloud.dbBackup;
      items.push({concept:'Respaldo automático',detail:'Respaldo automático de base de datos',amount:NT.prices.cloud.dbBackup,currency:'USD',frequency:'mensual'});
    }

    $('#monthlyMxn').textContent = mxn(monthlyMxn);
    $('#annualMxn').textContent = mxn(annualMxn);
    $('#oneTimeMxn').textContent = mxn(oneTimeMxn);
    $('#monthlyUsd').textContent = usd(monthlyUsd);
    $('#quoteNext').textContent = needs.length
      ? 'Siguiente paso: revisar alcance y confirmar propuesta con asesor.'
      : 'Siguiente paso: selecciona necesidades para recomendar una ruta.';

    const payload = {
      prospect:{
        name: form.name.value,
        company: form.company.value,
        phone: form.phone.value,
        email: form.email.value
      },
      needs,
      seats, support, dev, stamps, cloud,
      totals:{monthlyMxn,annualMxn,oneTimeMxn,monthlyUsd},
      items
    };
    form.dataset.quote = JSON.stringify(payload);
    return payload;
  }

  form.addEventListener('input', compute);
  form.addEventListener('change', compute);
  compute();

  $('#downloadPdf')?.addEventListener('click', async () => {
    const payload = compute();
    const res = await fetch('/api/quote-pdf', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    });
    if(!res.ok){ alert('No se pudo generar el PDF. Intenta de nuevo.'); return; }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Cotizacion-NearTec-${Date.now()}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  });

  $('#sendQuote')?.addEventListener('click', async () => {
    const payload = compute();
    const lead = {
      name: payload.prospect.name || 'Prospecto NearTec',
      email: payload.prospect.email,
      phone: payload.prospect.phone,
      company: payload.prospect.company,
      service: 'Cotización NearTec',
      message: `Solicitud de cotización. Necesidades: ${payload.needs.join(', ') || 'por definir'}. Total mensual MXN: ${payload.totals.monthlyMxn}. Mensual USD: ${payload.totals.monthlyUsd}.`,
      source: 'cotizador',
      quote: payload
    };
    try{
      await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead)});
    }catch{}
    location.href = waUrl(`Hola NearTec, quiero revisar mi cotización. Empresa: ${lead.company || 'por definir'}. Necesito: ${payload.needs.join(', ') || 'diagnóstico'}.`);
  });
}

function bootLeadForms(){
  $$('form[data-lead-form]').forEach(form=>{
    form.addEventListener('submit', async e=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const payload = {
        name:data.name || 'Prospecto NearTec',
        email:data.email || '',
        phone:data.phone || '',
        company:data.company || '',
        service:data.service || form.dataset.service || 'Diagnóstico tecnológico',
        message:data.message || '',
        source:form.dataset.source || location.pathname
      };
      try{ await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); }catch{}
      location.href = waUrl(`Hola NearTec, quiero avanzar con: ${payload.service}. Empresa: ${payload.company || 'por definir'}. ${payload.message || ''}`);
    });
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  bootMenu();
  bootTechCanvas();
  bootObserver();
  bootNeary();
  calculateQuote();
  bootLeadForms();
});
