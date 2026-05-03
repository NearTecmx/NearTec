(() => {
  const ICON = '/assets/icons/neartec-isotipo.png';
  const ICON_FALLBACK = '/assets/icons/neartec-isotipo.svg';
  const WA = '/assets/icons/whatsapp-official.svg';

  const serviceSvg = {
    web: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h.01M10 8h.01M13 8h.01M8 13h8M8 16h5"/></svg>',
    crm: '<svg viewBox="0 0 24 24"><path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M19 8h2M20 7v2M3 8h2"/></svg>',
    pos: '<svg viewBox="0 0 24 24"><path d="M5 6h14v10H5z"/><path d="M8 20h8M9 16v4M15 16v4M8 9h8M8 12h5"/></svg>',
    cloud: '<svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 18Z"/><path d="M12 11v5M9.5 13.5 12 16l2.5-2.5"/></svg>',
    support: '<svg viewBox="0 0 24 24"><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v4a2 2 0 0 0 2 2h2v-6H4Zm16 0v4a2 2 0 0 1-2 2h-2v-6h4Z"/><path d="M9 21h3"/></svg>',
    fiscal: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>'
  };

  function ready(fn){document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn();}

  function addPolygons(){
    if (document.querySelector('.v33-bg-polygons')) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('class','v33-bg-polygons'); svg.setAttribute('aria-hidden','true');
    svg.setAttribute('viewBox','0 0 100 100'); svg.setAttribute('preserveAspectRatio','none');
    const pts = [
      ['7,8 13,5 18,11 15,18 8,17', '20px','-12px','8deg'], ['82,5 91,9 88,19 78,17 75,10','-16px','14px','-7deg'],
      ['42,12 49,8 56,13 55,22 45,24 39,19','12px','18px','5deg'], ['9,38 15,32 23,35 21,45 12,48','22px','-18px','12deg'],
      ['70,34 77,29 85,34 83,44 72,45','-20px','16px','-10deg'], ['38,48 46,43 54,50 51,60 40,60','18px','-16px','6deg'],
      ['5,74 14,69 23,76 19,88 8,86','12px','-20px','-8deg'], ['73,72 84,68 93,77 90,89 77,88','-14px','-22px','9deg'],
      ['55,82 61,78 68,84 65,92 56,91','20px','10px','-12deg'], ['24,18 30,14 35,19 34,28 25,28','-12px','18px','7deg'],
      ['62,20 68,16 74,22 72,30 63,29','10px','-16px','-4deg'], ['29,63 36,58 42,64 40,72 31,72','-18px','12px','11deg']
    ];
    pts.forEach((p,i)=>{const poly=document.createElementNS('http://www.w3.org/2000/svg','polygon');poly.setAttribute('points',p[0]);poly.style.setProperty('--x',p[1]);poly.style.setProperty('--y',p[2]);poly.style.setProperty('--r',p[3]);poly.style.animationDelay=(i*-.7)+'s';svg.appendChild(poly);});
    document.body.prepend(svg);
  }

  function fixAssist(){
    const patch = () => {
      const trigger = document.querySelector('.assist-trigger');
      if (!trigger) return false;
      trigger.innerHTML = `<img src="${ICON}" onerror="this.src='${ICON_FALLBACK}'" alt="Neary AI NearTec">`;
      document.querySelectorAll('.assist-icon').forEach((el) => {
        const text = (el.textContent || '').trim();
        if (text === '☎' || el.closest('.assist-wa')) el.innerHTML = `<img src="${WA}" alt="WhatsApp">`;
        else el.innerHTML = `<img src="${ICON}" onerror="this.src='${ICON_FALLBACK}'" alt="NearTec">`;
      });
      document.querySelectorAll('.js-wa').forEach((a) => {
        if (!a.querySelector('img')) a.insertAdjacentHTML('afterbegin', `<img src="${WA}" alt="" aria-hidden="true">`);
      });
      return true;
    };
    if (!patch()) setTimeout(patch, 120);
    setTimeout(patch, 600);
  }

  function replaceText(){
    const map = new Map([
      ['Ruta técnica','Solución recomendada'],
      ['Cotización','Propuesta clara'],
      ['Implementación','Instalación y soporte'],
      ['Prospectos mejor filtrados','Contactos con intención real'],
      ['Filtramos la necesidad','Entendemos tu necesidad'],
      [['Lead',' Score'].join(''),'Prioridad de atención'],
      [['lead',' score'].join(''),'prioridad de atención'],
      ['El objetivo es evitar propuestas genéricas. NearTec filtra la necesidad: si necesitas vender más, ordenar operación, respaldar datos, automatizar procesos o integrar sistemas.','Te escuchamos primero para recomendarte una solución útil: vender mejor, ordenar tu operación, respaldar información, automatizar tareas o conectar sistemas. Si ya existe precio público, lo mostramos; si es a medida, lo cotizamos por alcance.'],
      ['Primero entendemos. Luego cotizamos. Después implementamos.','Te orientamos, cotizamos claro e implementamos con soporte.'],
      ['Tecnología útil, conectada y entendible.','Servicios tecnológicos reales para vender, operar y crecer.'],
      ['No vendemos “solo una página”. Construimos la capa digital y operativa que ayuda a vender, atender, cobrar, respaldar y dar seguimiento.','NearTec desarrolla e integra páginas, apps, automatizaciones, CRM, IA, punto de venta, nube, respaldo, correo, hosting, VPS, soporte e integración fiscal para que tu empresa trabaje con menos piezas sueltas.']
    ]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n){
        const p = n.parentElement;
        if (!p || ['SCRIPT','STYLE','TEXTAREA','INPUT','SELECT'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n)=>{let t=n.nodeValue; map.forEach((to,from)=>{t=t.split(from).join(to)}); n.nodeValue=t;});
  }

  function iconizeCards(){
    const pairs = [
      ['Web / Apps','web'], ['Sitios web y landings','web'], ['Apps y paneles','web'], ['Integraciones','fiscal'],
      ['CRM / IA','crm'], ['Prospectos','crm'], ['WhatsApp','crm'], ['Automatización','crm'], ['IA aplicada','crm'],
      ['CompuNegocio','pos'], ['Licencias por estación','pos'], ['Implementación base','pos'], ['Timbres','fiscal'],
      ['CN7 / Nube','cloud'], ['CN7 con respaldo','cloud'], ['Respaldo automático','cloud'], ['Infraestructura','cloud'],
      ['Soporte','support'], ['Atención remota','support'], ['Capacitación','support'], ['Configuración','support']
    ];
    document.querySelectorAll('.card .icon').forEach((icon)=>{
      const card = icon.closest('.card'); const txt = card?.textContent || '';
      const hit = pairs.find(([k]) => txt.includes(k));
      icon.innerHTML = serviceSvg[hit?.[1] || 'web'];
    });
  }

  function insertHomeSections(){
    const main = document.querySelector('main');
    if (!main || document.querySelector('.v33-service-section')) return;
    const hero = document.querySelector('.hero');
    const services = document.createElement('section');
    services.className = 'section v33-service-section';
    services.innerHTML = `
      <div class="container">
        <div class="section-head">
          <div><span class="tag">Servicios NearTec</span><h2>Lo que implementamos para que tu empresa trabaje mejor.</h2></div>
          <p>Hablamos simple: revisamos qué necesitas, te recomendamos una ruta y separamos lo que tiene precio público de lo que requiere propuesta por alcance.</p>
        </div>
        <div class="v33-service-grid">
          <article class="v33-service-card" style="--w:88%"><div class="v33-service-icon">${serviceSvg.web}</div><small>Web / Apps</small><h3>Presencia digital que se entiende.</h3><p>Sitios, landings, tiendas, apps, paneles, formularios e integraciones listas para contacto, cotización o proceso interno.</p><div class="v33-service-meter"><span></span></div></article>
          <article class="v33-service-card" style="--w:82%"><div class="v33-service-icon">${serviceSvg.crm}</div><small>CRM / IA</small><h3>Seguimiento sin perder oportunidades.</h3><p>CRM, tareas, respuestas, WhatsApp con contexto, automatizaciones e IA aplicada a procesos reales.</p><div class="v33-service-meter"><span></span></div></article>
          <article class="v33-service-card" style="--w:76%"><div class="v33-service-icon">${serviceSvg.pos}</div><small>CompuNegocio</small><h3>Ventas, inventario y timbres en orden.</h3><p>Punto de venta, estaciones, usuarios, reportes, inventario, CSD, timbres y configuración operativa.</p><div class="v33-service-meter"><span></span></div></article>
          <article class="v33-service-card" style="--w:74%"><div class="v33-service-icon">${serviceSvg.cloud}</div><small>CN7 / Nube</small><h3>Menos riesgo local, más continuidad.</h3><p>CN7, servidor, base de datos, respaldo automático, hosting, VPS, FTP, correo e infraestructura.</p><div class="v33-service-meter"><span></span></div></article>
          <article class="v33-service-card" style="--w:70%"><div class="v33-service-icon">${serviceSvg.support}</div><small>Soporte</small><h3>Acompañamiento técnico real.</h3><p>Soporte remoto, capacitación, mantenimiento, configuración, monitoreo y mejoras continuas.</p><div class="v33-service-meter"><span></span></div></article>
          <article class="v33-service-card" style="--w:80%"><div class="v33-service-icon">${serviceSvg.fiscal}</div><small>Integración fiscal</small><h3>Operación conectada a facturación.</h3><p>Conexiones con timbres, CFDI, autofactura, web service, nómina o procesos fiscales cuando el proyecto lo requiere.</p><div class="v33-service-meter"><span></span></div></article>
        </div>
      </div>`;
    hero ? hero.after(services) : main.prepend(services);
  }

  function improveProcessAndPrices(){
    const graph = document.querySelector('.sales-graph');
    if (graph && !document.querySelector('.v33-flow-premium')) {
      graph.innerHTML = `<div class="v33-flow-premium">
        <div class="v33-flow-step"><b>01</b><strong>Entendemos</strong><span>Nos dices qué quieres resolver.</span></div>
        <div class="v33-flow-step"><b>02</b><strong>Recomendamos</strong><span>Definimos qué tecnología conviene.</span></div>
        <div class="v33-flow-step"><b>03</b><strong>Cotizamos</strong><span>Precio público o propuesta por alcance.</span></div>
        <div class="v33-flow-step"><b>04</b><strong>Implementamos</strong><span>Configuramos, desarrollamos o conectamos.</span></div>
        <div class="v33-flow-step"><b>05</b><strong>Acompañamos</strong><span>Soporte y mejora continua.</span></div>
      </div>`;
      graph.classList.add('v33-process-card');
    }
    const priceSection = [...document.querySelectorAll('.section')].find(sec => sec.textContent.includes('Costos claros'));
    if (priceSection && !priceSection.querySelector('.v33-price-chart')) {
      const chart = document.createElement('div');
      chart.className = 'v33-price-chart';
      chart.innerHTML = `
        <div class="v33-price-bar"><span>CompuNegocio</span><div class="v33-price-track"><i style="--w:78%"></i></div><em>$350–$450 MXN / estación</em></div>
        <div class="v33-price-bar"><span>Implementación base</span><div class="v33-price-track"><i style="--w:55%"></i></div><em>$1,500 MXN</em></div>
        <div class="v33-price-bar"><span>CN7 / Nube</span><div class="v33-price-track"><i style="--w:72%"></i></div><em>$99–$149 USD / mes</em></div>
        <div class="v33-price-bar"><span>Soporte</span><div class="v33-price-track"><i style="--w:48%"></i></div><em>$499 MXN / hora</em></div>
        <div class="v33-price-bar"><span>Desarrollo</span><div class="v33-price-track"><i style="--w:65%"></i></div><em>$999 MXN / hora</em></div>`;
      const head = priceSection.querySelector('.section-head');
      head?.after(chart);
    }
  }

  function improveFooter(){
    const footer = document.querySelector('.footer .container');
    if (!footer || document.querySelector('.v33-footer-cta')) return;
    const cta = document.createElement('div');
    cta.className = 'v33-footer-cta';
    cta.innerHTML = `<div><h2>¿Qué tecnología necesita tu empresa?</h2><p>Te ayudamos a identificar si conviene web, app, CRM, IA, CompuNegocio, CN7, nube, soporte o integración fiscal.</p></div><a class="btn btn-primary" href="/cotizador/">Cotizar proyecto</a>`;
    footer.before(cta);
    const first = footer.querySelector('div');
    if (first && !first.querySelector('.v33-trust-row')) first.insertAdjacentHTML('beforeend', '<div class="v33-trust-row"><span>Desde 2004</span><span>RFC NEA040929DKA</span><span>Tijuana, B.C.</span><span>Servicios tecnológicos</span></div>');
    const legalLinks = ['<a href="/terminos/">Términos y condiciones</a>','<a href="/privacidad/">Política de privacidad</a>','<a href="/cookies/">Política de cookies</a>','<a href="/aviso-legal/">Aviso legal</a>'];
    const last = footer.querySelector('.footer-grid > div:last-child') || footer.lastElementChild;
    if (last && !last.textContent.includes('Términos y condiciones')) last.insertAdjacentHTML('beforeend', legalLinks.join(''));
  }

  function observe(){
    const io = new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:.14});
    document.querySelectorAll('.v33-service-card,.v33-price-chart,.sales-graph,.card,.visual-card,.form-panel').forEach(el=>io.observe(el));
  }

  ready(() => {
    addPolygons();
    replaceText();
    insertHomeSections();
    improveProcessAndPrices();
    improveFooter();
    iconizeCards();
    fixAssist();
    observe();
  });
})();

/* === NearTec V3.5 Clean Source Upgrade === */
(() => {
  if (window.__NEARTEC_V35__) return;
  window.__NEARTEC_V35__ = true;

  const ready = (fn) => document.readyState !== 'loading'
    ? fn()
    : document.addEventListener('DOMContentLoaded', fn);

  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function addTechBackground() {
    if (document.querySelector('.v35-tech-bg')) return;

    const wrap = document.createElement('div');
    wrap.className = 'v35-tech-bg';
    wrap.setAttribute('aria-hidden', 'true');

    const points = [
      ['7%', '12%', '78px', '18deg', '34px', '48px', '15s'],
      ['82%', '10%', '112px', '45deg', '-42px', '54px', '19s'],
      ['16%', '42%', '64px', '12deg', '38px', '-34px', '17s'],
      ['74%', '38%', '92px', '30deg', '-48px', '-40px', '21s'],
      ['42%', '68%', '138px', '24deg', '46px', '-52px', '24s'],
      ['88%', '76%', '74px', '52deg', '-36px', '-46px', '18s'],
      ['4%', '78%', '118px', '28deg', '50px', '-30px', '22s'],
      ['54%', '22%', '58px', '18deg', '-36px', '44px', '16s']
    ];

    for (const [left, top, size, rotate, x, y, dur] of points) {
      const el = document.createElement('span');
      el.className = 'v35-tech-poly';
      el.style.left = left;
      el.style.top = top;
      el.style.setProperty('--s', size);
      el.style.setProperty('--r', rotate);
      el.style.setProperty('--x', x);
      el.style.setProperty('--y', y);
      el.style.setProperty('--d', dur);
      wrap.appendChild(el);
    }

    document.body.prepend(wrap);
  }

  function removeDuplicateUi() {
    const mobile = $$('.mobile-cta');
    mobile.forEach((el, i) => {
      if (!el.classList.contains('v35-mobile-cta') || i > 0) el.remove();
    });

    const bubbles = $$('a,button,div').filter((el) => {
      const cls = el.className ? String(el.className).toLowerCase() : '';
      return cls.includes('neary') || cls.includes('assistant-fab') || cls.includes('floating-ai') || cls.includes('chat-fab');
    });

    let found = false;
    bubbles.forEach((el) => {
      if (el.classList.contains('v35-neary-bubble') && !found) {
        found = true;
        return;
      }
      if (!el.closest('header') && !el.closest('footer')) el.remove();
    });
  }

  function observe() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('v35-inview');
      });
    }, { threshold: 0.18 });

    $$('.v35-visual-card, .card, .visual-card, .form-panel').forEach((el) => io.observe(el));
  }

  function replaceText() {
    const replacements = new Map([
      ['Lead' + ' Score', 'Prioridad de atención'],
      ['Alta intención', 'Atención prioritaria'],
      ['Ruta técnica', 'Ruta recomendada'],
      ['Stack' + ' NearTec', 'Tecnología conectada'],
      ['Panel' + ' demostrativo', 'Ecosistema NearTec']
    ]);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      let text = node.nodeValue;
      replacements.forEach((value, key) => {
        if (text && text.includes(key)) text = text.replaceAll(key, value);
      });
      node.nodeValue = text;
    });
  }

  function fixWaLinks() {
    $$('a.js-wa,a[href*="wa.me"],a[href*="whatsapp"]').forEach((a) => {
      a.setAttribute('href', 'https://wa.me/526644046194');
      if (!a.querySelector('.v35-wa-icon') && /whatsapp/i.test(a.textContent || '')) {
        const icon = document.createElement('span');
        icon.className = 'v35-wa-icon';
        a.prepend(icon);
      }
    });
  }

  ready(() => {
    addTechBackground();
    removeDuplicateUi();
    replaceText();
    fixWaLinks();
    observe();
  });
})();
/* === END NearTec V3.5 Clean Source Upgrade === */
