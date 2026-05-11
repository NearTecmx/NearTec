(function(){
  var release='NEARTEC-FINAL-RENDER-LIGHT-TRUE-SCENE-2026-R3';
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var toast=function(msg){var t=$('#toast'); if(!t) return; t.textContent=msg; t.classList.add('show'); setTimeout(function(){t.classList.remove('show')},2600)};
  var menu=$('#menuBtn'), nav=$('#navLinks'); if(menu&&nav){menu.addEventListener('click',function(){nav.classList.toggle('open')})}
  var canvas=$('#networkCanvas');
  if(canvas){
    var ctx=canvas.getContext('2d'), dpr=Math.min(window.devicePixelRatio||1,2), pts=[];
    function resize(){canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);pts=[];var n=Math.min(62,Math.max(24,Math.floor(innerWidth/20)));for(var i=0;i<n;i++){pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22})}}
    function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);ctx.fillStyle='rgba(47,207,116,.55)';ctx.strokeStyle='rgba(47,207,116,.12)';for(var i=0;i<pts.length;i++){var p=pts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>innerWidth)p.vx*=-1;if(p.y<0||p.y>innerHeight)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,1.8,0,Math.PI*2);ctx.fill();for(var j=i+1;j<pts.length;j++){var q=pts[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<145){ctx.globalAlpha=1-dist/145;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();ctx.globalAlpha=1}}}requestAnimationFrame(draw)}
    addEventListener('resize',resize);resize();draw();
  }
  function utms(){var p=new URLSearchParams(location.search), o={};['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k){if(p.get(k)) o[k]=p.get(k)}); if(Object.keys(o).length)localStorage.setItem('neartec_utms',JSON.stringify(o)); try{return JSON.parse(localStorage.getItem('neartec_utms')||'{}')}catch(e){return {}}}
  utms();
  $$('[data-wa]').forEach(function(a){a.addEventListener('click',function(){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'WhatsAppClick',release:release})})});
  $$('[data-lead-form]').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var data=Object.fromEntries(new FormData(form).entries()); data.utms=utms(); data.release=release; data.path=location.pathname;
      window.dataLayer=window.dataLayer||[]; window.dataLayer.push({event:'FormSubmit',release:release});
      fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).catch(function(){});
      toast('Información recibida. Te llevamos a confirmación.');
      setTimeout(function(){location.href='/gracias/?source=form'},700);
    });
  });
  var qf=$('#quoteForm');
  if(qf){
    var prices={timbres:{0:0,365:730,500:990,1000:1490,2000:2490,5000:4990,10000:8990}};
    function money(n){return '$'+Math.round(n).toLocaleString('es-MX')+' MXN'}
    function calc(){
      var fd=new FormData(qf), stations=Math.max(1,parseInt(fd.get('stations')||'1',10));
      var unit=stations<=3?450:stations<=8?400:350;
      var total=stations*unit;
      var lines=['<div class="summary-line"><span>CompuNegocio '+stations+' estación(es)</span><b>'+money(stations*unit)+'/mes</b></div>'];
      var tim=parseInt(fd.get('timbres')||'0',10); if(tim){total+=prices.timbres[tim]||0;lines.push('<div class="summary-line"><span>'+tim+' timbres CFDI</span><b>'+money(prices.timbres[tim]||0)+'</b></div>')}
      if(fd.get('implementation')){total+=1500;lines.push('<div class="summary-line"><span>Implementación remota</span><b>'+money(1500)+'</b></div>')}
      if(fd.get('cn7')) lines.push('<div class="summary-line"><span>CN7 / Respaldo</span><b>desde $99 USD/mes</b></div>');
      if(fd.get('support')){total+=499;lines.push('<div class="summary-line"><span>Soporte técnico base</span><b>'+money(499)+'</b></div>')}
      if(fd.get('dev')){total+=999;lines.push('<div class="summary-line"><span>Desarrollo / automatización base</span><b>'+money(999)+'</b></div>')}
      $('#quoteLines').innerHTML=lines.join('');
      $('#quoteTotal').textContent=money(total);
      return {name:fd.get('name')||'',stations:stations,total:total,lines:lines.map(function(x){return x.replace(/<[^>]+>/g,' ')})};
    }
    qf.addEventListener('input',calc);qf.addEventListener('change',calc);calc();
    var wa=$('#waQuote'); if(wa) wa.addEventListener('click',function(){var c=calc();var msg='Hola NearTec, quiero cotizar. Estaciones: '+c.stations+'. Total MXN referencia: '+money(c.total)+'.'; location.href='https://wa.me/526644046194?text='+encodeURIComponent(msg)});
    var pdf=$('#pdfQuote'); if(pdf) pdf.addEventListener('click',function(){var c=calc();fetch('/api/quote-pdf',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(c)}).then(function(r){return r.blob()}).then(function(b){var u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='cotizacion-neartec.pdf';a.click();URL.revokeObjectURL(u)}).catch(function(){toast('No se pudo generar PDF. Envíalo por WhatsApp.')})});
  }
  var root=$('#nearyRoot');
  if(root){
    root.innerHTML='<button class="neary-bubble" aria-label="Abrir Neary AI">N</button><div class="neary-panel"><h3>Neary AI</h3><p>Te ayudo a ubicar la ruta correcta.</p><div class="neary-options"><button data-n="diagnostico">Hablar con Neary AI</button><button data-n="wa">WhatsApp directo</button><button data-n="quote">Ver cotizador</button></div></div>';
    $('.neary-bubble',root).addEventListener('click',function(){root.classList.toggle('open')});
    root.addEventListener('click',function(e){var b=e.target.closest('[data-n]'); if(!b)return; var v=b.getAttribute('data-n'); if(v==='wa')location.href='https://wa.me/526644046194?text='+encodeURIComponent('Hola NearTec, quiero información para mi empresa'); if(v==='quote')location.href='/cotizador/'; if(v==='diagnostico')location.href='/diagnostico/'});
  }
})();
