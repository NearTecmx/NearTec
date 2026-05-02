
(function(){
  const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const whatsappIcon='/assets/icons/whatsapp.svg'; const nearyIcon='/assets/icons/neary.svg'; const waSvg='<span class="wa-icon" aria-hidden="true"></span>';
  function enhanceIcons(){
    $$('a').forEach(a=>{ if(/whatsapp/i.test(a.textContent)||a.href.includes('wa.me')){ if(!a.querySelector('.wa-icon')) a.insertAdjacentHTML('afterbegin',waSvg); }});
    const trigger=$('.assist-trigger'); if(trigger){ trigger.textContent=''; trigger.setAttribute('aria-label','Abrir Neary AI y WhatsApp'); }
    $$('.assist-icon').forEach((el)=>{ if(el.closest('.assist-wa')) el.classList.add('is-wa'); });
  }
  function observe(){
    const items=$$('.card,.visual-card,.form-panel,.route-map a,.sales-graph,.v32-map,.v32-chart,.v32-pricing-chart,.v32-timeline,.v32-funnel,.campaign-pain');
    items.forEach(el=>el.classList.add('v32-animate'));
    const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    items.forEach(el=>io.observe(el));
  }
  function parseMoney(text){ const n=String(text||'').replace(/[^0-9.]/g,''); return Number(n)||0; }
  function updateQuoteMeter(){
    const box=$('.quote-summary'); if(!box) return;
    let meter=$('.quote-v32-meter',box);
    if(!meter){
      meter=document.createElement('div'); meter.className='quote-v32-meter';
      meter.innerHTML='<h3>Resumen visual</h3><div class="quote-v32-row"><small>Mensual</small><span class="quote-v32-line"><i data-meter="monthly" style="--w:0%"></i></span></div><div class="quote-v32-row"><small>Único</small><span class="quote-v32-line"><i data-meter="one" style="--w:0%"></i></span></div><div class="quote-v32-row"><small>USD</small><span class="quote-v32-line"><i data-meter="usd" style="--w:0%"></i></span></div>';
      const line=$('#lineItems',box); (line||box).insertAdjacentElement(line?'beforebegin':'afterbegin',meter);
    }
    const m=parseMoney($('#mxnMonthly')?.textContent); const o=parseMoney($('#mxnOneTime')?.textContent); const u=parseMoney($('#usdMonthly')?.textContent);
    const max=Math.max(m,o,u*18,1);
    const set=(k,v)=>{ const el=$(`[data-meter="${k}"]`,meter); if(el) el.style.setProperty('--w',Math.max(6,Math.min(100,Math.round((v/max)*100)))+'%'); };
    set('monthly',m); set('one',o); set('usd',u*18);
  }
  function enhanceQuote(){
    if(!$('#quoteForm')) return;
    updateQuoteMeter();
    ['input','change','click'].forEach(ev=>document.addEventListener(ev,()=>setTimeout(updateQuoteMeter,80),true));
    const csv=$('#exportCsv'); if(csv){ csv.textContent='Exportar seguimiento'; csv.title='Descarga local para respaldo comercial'; }
    const pdf=$('#downloadPdf'); if(pdf){ pdf.insertAdjacentHTML('afterbegin','<span class="icon-svg" aria-hidden="true">▣</span>'); }
  }
  function addHomeGraphIfNeeded(){
    const main=document.querySelector('main'); if(!main || document.querySelector('.v32-ecosystem')) return;
    const prices=Array.from(document.querySelectorAll('section')).find(s=>/Precios base documentados/i.test(s.textContent));
    const section=document.createElement('section'); section.className='v32-graphic-section';
    section.innerHTML=`<div class="container"><div class="v32-graphic-head"><div><span class="tag">Sistema conectado</span><h2>Una ruta visual para vender, operar y respaldar.</h2></div><p>Estos gráficos no usan métricas inventadas: muestran las capas reales que NearTec puede integrar y los precios públicos documentados donde sí existen.</p></div><div class="v32-ecosystem"><div class="v32-map" aria-label="Ecosistema tecnológico NearTec"><svg viewBox="0 0 800 520" preserveAspectRatio="none"><path d="M400 260 C250 120 160 100 95 90"/><path d="M400 260 C560 120 650 105 710 95"/><path d="M400 260 C240 360 150 430 95 440"/><path d="M400 260 C560 360 650 430 705 430"/><path d="M400 260 C400 150 400 90 400 58"/></svg><div class="v32-center-node"><div><img src="/assets/icons/neary.svg" alt=""><span>NearTec</span></div></div><div class="v32-node" data-pos="1"><b>Web / Apps</b><span>Presencia, formularios, paneles e integraciones.</span></div><div class="v32-node" data-pos="2"><b>CRM / IA</b><span>Seguimiento, tareas, respuestas y automatización.</span></div><div class="v32-node" data-pos="3"><b>CompuNegocio</b><span>POS, inventario, usuarios, reportes y timbres.</span></div><div class="v32-node" data-pos="4"><b>CN7 / Nube</b><span>Servidor, respaldo, hosting, VPS, FTP y correo.</span></div><div class="v32-node" data-pos="5"><b>Soporte</b><span>Implementación, capacitación y mejora continua.</span></div></div><div class="v32-chart"><span class="tag">Precios base reales</span><h3>Qué sí tiene referencia pública.</h3><div class="v32-chart-grid"><div class="v32-bar"><span>CN 1–3</span><div class="v32-bar-track"><i style="--w:45%"></i></div><em>$450</em></div><div class="v32-bar"><span>CN 4–8</span><div class="v32-bar-track"><i style="--w:40%"></i></div><em>$400</em></div><div class="v32-bar"><span>CN 9+</span><div class="v32-bar-track"><i style="--w:35%"></i></div><em>$350</em></div><div class="v32-bar"><span>CN7</span><div class="v32-bar-track"><i style="--w:55%"></i></div><em>$99 USD</em></div><div class="v32-bar"><span>Nube</span><div class="v32-bar-track"><i style="--w:74%"></i></div><em>$149 USD</em></div></div><div class="v32-rings"><div class="v32-ring" style="--p:80%"><div><b>80+</b><span>Alta intención</span></div></div><div class="v32-ring" style="--p:62%"><div><b>24h</b><span>Ruta después de diagnóstico</span></div></div><div class="v32-ring" style="--p:74%"><div><b>PDF</b><span>Cotización descargable</span></div></div></div></div></div></div>`;
    if(prices) prices.parentNode.insertBefore(section,prices); else main.appendChild(section);
  }
  function init(){document.documentElement.classList.add('v32-pro'); enhanceIcons(); addHomeGraphIfNeeded(); enhanceQuote(); observe(); setTimeout(enhanceIcons,350); setTimeout(updateQuoteMeter,450);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
