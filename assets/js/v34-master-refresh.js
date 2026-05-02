(() => {
  if (window.__NT_V34__) return;
  window.__NT_V34__ = true;

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const ready = (fn) => document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);

  function uniqueText(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
  }

  function removeExtraIconsInButtons() {
    $$('a,button').forEach((el) => {
      const text = uniqueText(el.textContent).toLowerCase();
      const icons = $$('img,svg', el);
      if (/whatsapp/.test(text) && icons.length > 1) icons.slice(1).forEach((n) => n.remove());
      if (/cotizar|cotización|cotizacion/.test(text) && icons.length > 1) icons.slice(1).forEach((n) => n.remove());
    });
  }

  function removeDuplicateWidgets() {
    const groups = [
      ['.nt-neary-dock', '.chat-fab', '.floating-ai', '.assistant-fab', '.neary-fab', '.fab-ai', '.fab-neary'],
      ['.nt-sticky-bar', '.sticky-cta', '.sticky-actions', '.bottom-cta', '.mobile-cta']
    ];
    groups.forEach((selectors) => {
      const nodes = selectors.flatMap((s) => $$(s));
      const seen = new Set();
      nodes.forEach((node, i) => {
        const key = uniqueText(node.textContent).slice(0, 60) + '|' + (node.className || '') + '|' + (node.tagName || '');
        if (seen.has(key) || i > 0 && selectors.some(sel => node.matches(sel) && nodes[0] && node !== nodes[0])) node.remove();
        else seen.add(key);
      });
    });
  }

  function injectPolygons() {
    if ($('.nt-tech-polygons')) return;
    const wrap = document.createElement('div');
    wrap.className = 'nt-tech-polygons';
    const total = 16;
    for (let i = 0; i < total; i += 1) {
      const s = document.createElement('span');
      const size = Math.round(42 + Math.random() * 120);
      s.style.setProperty('--s', `${size}px`);
      s.style.setProperty('--r', `${Math.round(Math.random() * 90)}deg`);
      s.style.setProperty('--x', `${Math.round(35 + Math.random() * 110)}px`);
      s.style.setProperty('--y', `${Math.round(30 + Math.random() * 140)}px`);
      s.style.setProperty('--d', `${Math.round(18 + Math.random() * 14)}s`);
      s.style.left = `${Math.round(Math.random() * 92)}%`;
      s.style.top = `${Math.round(Math.random() * 92)}%`;
      wrap.appendChild(s);
    }
    document.body.appendChild(wrap);
  }

  function setHeroClass() {
    const hero = $('main section') || $('section');
    if (hero) hero.classList.add('nt-hero');
  }

  function updateTextNodes() {
    const map = new Map([
      ['proceso interno', 'operación diaria'],
      ['Alta intención', 'Atención prioritaria'],
      ['Lo que sí tiene referencia pública.', 'Referencias de precio público.'],
      ['Servicios a medida: diagnóstico y propuesta por alcance', 'Servicios a medida: se cotizan según alcance.'],
      ['Lo que implementamos para que tu empresa trabaje mejor.', 'Tecnología conectada para vender, operar y crecer mejor.']
    ]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      let text = node.nodeValue;
      map.forEach((to, from) => {
        if (text && text.includes(from)) text = text.replaceAll(from, to);
      });
      node.nodeValue = text;
    });
  }

  function createIcon(src, alt = '') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    return img;
  }

  function enhanceServiceCards() {
    const rules = [
      { re: /web\s*\/\s*apps|sitios|landings|apps|tiendas/i, icon: '/assets/icons/icon-web.svg', tag: 'WEB / APPS', w: '84%' },
      { re: /crm\s*\/\s*ia|seguimiento|automatiz/i, icon: '/assets/icons/icon-crm.svg', tag: 'CRM / IA', w: '76%' },
      { re: /compunegocio|inventario|timbres|punto de venta/i, icon: '/assets/icons/icon-cn.svg', tag: 'COMPUNEGOCIO', w: '68%' },
      { re: /cn7|nube|respaldo|hosting|vps|correo/i, icon: '/assets/icons/icon-cloud.svg', tag: 'CN7 / NUBE', w: '72%' },
      { re: /soporte|mantenimiento|infraestructura/i, icon: '/assets/icons/icon-support.svg', tag: 'SOPORTE', w: '62%' }
    ];

    $$('article, .card, .service-card, .box, main section > div, .grid > div').forEach((card) => {
      if (card.closest('.nt-panel, .nt-footer, footer, .nt-insights, .nt-sticky-bar')) return;
      const text = uniqueText(card.textContent);
      if (text.length < 30) return;
      const rule = rules.find((r) => r.re.test(text));
      if (!rule) return;
      card.classList.add('nt-service-card');
      if (!card.querySelector('.nt-service-head')) {
        const head = document.createElement('div');
        head.className = 'nt-service-head';
        head.innerHTML = `<div class="nt-service-icon"></div><div><div class="nt-service-tag">${rule.tag}</div></div>`;
        head.querySelector('.nt-service-icon').appendChild(createIcon(rule.icon, rule.tag));
        card.insertBefore(head, card.firstChild);
      }
      if (!card.querySelector('.nt-meter')) {
        const meter = document.createElement('div');
        meter.className = 'nt-meter';
        meter.innerHTML = `<span style="--w:${rule.w}"></span>`;
        card.appendChild(meter);
      }
    });
  }

  function buildInsights() {
    const isHome = location.pathname === '/' || /index\.html$/.test(location.pathname);
    if (!isHome || $('#nt-v34-insights')) return;

    const footer = $('footer');
    const mount = document.createElement('section');
    mount.id = 'nt-v34-insights';
    mount.className = 'nt-insights';
    mount.innerHTML = `
      <div class="nt-insights-grid">
        <article class="nt-panel">
          <span class="nt-eyebrow">Proceso claro</span>
          <h3>Cómo avanzamos contigo.</h3>
          <div class="nt-timeline">
            <div class="nt-step">
              <div class="nt-step-badge">01</div>
              <div><b>Entender la necesidad</b><p>Revisamos qué quieres resolver: ventas, operación, nube, integración o soporte.</p></div>
            </div>
            <div class="nt-step">
              <div class="nt-step-badge">02</div>
              <div><b>Definir la ruta</b><p>Separamos lo que sí tiene precio base de lo que requiere alcance técnico.</p></div>
            </div>
            <div class="nt-step">
              <div class="nt-step-badge">03</div>
              <div><b>Cotizar con claridad</b><p>Entregamos una propuesta entendible, con siguientes pasos y tiempos reales.</p></div>
            </div>
            <div class="nt-step">
              <div class="nt-step-badge">04</div>
              <div><b>Implementar y acompañar</b><p>Configuramos, conectamos y damos soporte para que sí funcione en operación.</p></div>
            </div>
          </div>
        </article>

        <article class="nt-panel">
          <span class="nt-eyebrow">Precios base reales</span>
          <h3>Lo que sí tiene referencia pública.</h3>
          <div class="nt-bars">
            <div class="nt-bar-row"><b>CN 1–3</b><div class="nt-bar-track"><span style="--w:46%"></span></div><div class="nt-bar-price">$450</div></div>
            <div class="nt-bar-row"><b>CN 4–8</b><div class="nt-bar-track"><span style="--w:40%"></span></div><div class="nt-bar-price">$400</div></div>
            <div class="nt-bar-row"><b>CN 9+</b><div class="nt-bar-track"><span style="--w:35%"></span></div><div class="nt-bar-price">$350</div></div>
            <div class="nt-bar-row"><b>CN7</b><div class="nt-bar-track"><span style="--w:52%"></span></div><div class="nt-bar-price">$99 USD</div></div>
            <div class="nt-bar-row"><b>Nube</b><div class="nt-bar-track"><span style="--w:72%"></span></div><div class="nt-bar-price">$149 USD</div></div>
          </div>
          <p class="muted" style="margin-top:14px">Web, apps, CRM, IA, integraciones, seguridad e infraestructura especial se cotizan por alcance.</p>
        </article>

        <article class="nt-panel">
          <span class="nt-eyebrow">Ecosistema NearTec</span>
          <h3>Soluciones conectadas, no piezas sueltas.</h3>
          <div class="nt-ecosystem">
            <div class="nt-node-grid">
              <div class="nt-node" style="top:18px;left:18px">Web / Apps</div>
              <div class="nt-node" style="top:86px;right:24px">CRM / IA</div>
              <div class="nt-node" style="top:146px;left:32px">CompuNegocio</div>
              <div class="nt-node" style="bottom:28px;right:26px">CN7 / Nube</div>
              <div class="nt-node" style="left:34%;top:44%">Soporte</div>
              <div class="nt-node-line" style="left:120px;top:44px;width:120px"></div>
              <div class="nt-node-line" style="left:98px;top:112px;width:168px;transform:rotate(12deg)"></div>
              <div class="nt-node-line" style="left:118px;top:174px;width:160px;transform:rotate(-16deg)"></div>
              <div class="nt-node-line" style="left:86px;top:138px;width:110px;transform:rotate(-38deg)"></div>
            </div>
            <div>
              <div class="nt-mini"><b>Web / Apps</b><p>Explican lo que haces y llevan al siguiente paso.</p></div>
              <div class="nt-mini" style="margin-top:12px"><b>CRM / IA</b><p>Ayudan a responder, seguir y ordenar oportunidades.</p></div>
              <div class="nt-mini" style="margin-top:12px"><b>CompuNegocio + CN7</b><p>Controlan operación diaria, respaldo y continuidad.</p></div>
            </div>
          </div>
        </article>

        <article class="nt-panel">
          <span class="nt-eyebrow">Cierre comercial</span>
          <h3>¿Qué tecnología necesita tu empresa?</h3>
          <p>Si ya sabes qué quieres resolver, cotizamos. Si todavía no está claro, te ayudamos a definir la ruta correcta.</p>
          <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:18px">
            <a href="/cotizador/" class="nt-sticky-btn quote" style="width:auto;padding:0 22px;min-height:54px">Cotizar proyecto</a>
            <a href="https://wa.me/526644046194" class="nt-sticky-btn whatsapp" style="width:auto;padding:0 22px;min-height:54px">
              <img src="/assets/icons/whatsapp-official.svg" alt="WhatsApp">WhatsApp
            </a>
          </div>
        </article>
      </div>
    `;
    if (footer && footer.parentNode) footer.parentNode.insertBefore(mount, footer);
    else document.body.appendChild(mount);
  }

  function buildFooter() {
    const old = $('footer');
    if (old && old.dataset.v34Built === '1') return;

    const footer = document.createElement('footer');
    footer.className = 'nt-footer nt-panel';
    footer.dataset.v34Built = '1';
    footer.innerHTML = `
      <div class="nt-footer-wrap">
        <div class="nt-footer-cta nt-panel">
          <div>
            <span class="nt-eyebrow">NearTec</span>
            <h3>Tecnología para vender, operar y crecer con control.</h3>
            <p>Desarrollo, integración, automatización, punto de venta, nube, respaldo y soporte para empresas que necesitan soluciones reales.</p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:flex-start">
            <a href="https://wa.me/526644046194" class="nt-sticky-btn whatsapp" style="width:auto;padding:0 22px;min-height:56px">
              <img src="/assets/icons/whatsapp-official.svg" alt="WhatsApp">WhatsApp
            </a>
            <a href="/cotizador/" class="nt-sticky-btn quote" style="width:auto;padding:0 22px;min-height:56px">Cotizar</a>
          </div>
        </div>

        <div class="nt-footer-grid nt-panel">
          <div>
            <div class="nt-footer-logo">
              <img src="/assets/img/neartec-logo-clean.png" alt="NearTec" onerror="this.style.display='none'">
              <div>
                <h4>NearTec</h4>
                <p>Empresa formal en Tijuana, B.C. especializada en tecnología empresarial e integración de soluciones.</p>
              </div>
            </div>
            <div class="nt-legal">
              <span>Desde 2004</span>
              <span>RFC: NEA040929DKA</span>
              <span>Tijuana, B.C.</span>
            </div>
          </div>

          <div>
            <h4>Soluciones</h4>
            <p><a href="/web/">Web / Apps</a></p>
            <p><a href="/crm/">CRM / IA</a></p>
            <p><a href="/compunegocio/">CompuNegocio</a></p>
            <p><a href="/cn7/">CN7 / Nube</a></p>
            <p><a href="/soporte/">Soporte</a></p>
          </div>

          <div>
            <h4>Contacto</h4>
            <p><a href="https://wa.me/526644046194">664 404 6194</a></p>
            <p><a href="mailto:meta@itimbre.com">meta@itimbre.com</a></p>
            <p>Benito Juárez 2034 601,<br>Zona Centro, Tijuana, Baja California,<br>México, C.P. 22000</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p><a href="/privacidad/">Política de privacidad</a></p>
            <p><a href="/terminos/">Términos y condiciones</a></p>
            <p><a href="/cookies/">Política de cookies</a></p>
            <p><a href="/aviso-legal/">Aviso legal</a></p>
            <p class="muted">Los precios publicados son referencias base. Servicios a medida se cotizan por alcance.</p>
          </div>
        </div>
      </div>
    `;

    if (old) old.replaceWith(footer);
    else document.body.appendChild(footer);
  }

  function buildStickyBar() {
    let bar = $('.nt-sticky-bar') || $('.sticky-cta, .sticky-actions, .bottom-cta, .mobile-cta');
    if (bar && bar.classList.contains('nt-sticky-bar')) return;

    const wrap = document.createElement('div');
    wrap.className = 'nt-sticky-bar';
    wrap.innerHTML = `
      <a class="nt-sticky-btn whatsapp" href="https://wa.me/526644046194">
        <img src="/assets/icons/whatsapp-official.svg" alt="WhatsApp">WhatsApp
      </a>
      <a class="nt-sticky-btn quote" href="/cotizador/">Cotizar</a>
    `;
    if (bar) bar.replaceWith(wrap);
    else document.body.appendChild(wrap);
  }

  function buildNearyDock() {
    let dock = $('.nt-neary-dock') || $('.chat-fab, .floating-ai, .assistant-fab, .neary-fab, .fab-ai, .fab-neary');
    const imgSrc = document.querySelector('img[src*="neartec-isotipo-premium"],img[src*="neartec-isotipo"],img[src*="1017-removebg"],img[src*="neary"],img[src*="isotipo"]')
      ? document.querySelector('img[src*="neartec-isotipo-premium"],img[src*="neartec-isotipo"],img[src*="1017-removebg"],img[src*="neary"],img[src*="isotipo"]').getAttribute('src')
      : (document.querySelector('img[src*="neartec-logo"]') ? document.querySelector('img[src*="neartec-logo"]').getAttribute('src') : '/assets/icons/neartec-isotipo-premium.png');

    if (!dock || !dock.classList.contains('nt-neary-dock')) {
      const a = document.createElement('a');
      a.href = '/contacto/';
      a.className = 'nt-neary-dock pulse';
      a.innerHTML = `<img src="${imgSrc}" alt="NearTec">`;
      if (dock) dock.replaceWith(a);
      else document.body.appendChild(a);
      dock = a;
    } else {
      dock.classList.add('pulse');
      dock.innerHTML = `<img src="${imgSrc}" alt="NearTec">`;
    }
  }

  function observeAnimations() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('nt-inview');
      });
    }, { threshold: .18 });

    $$('.nt-service-card, .nt-panel').forEach((el) => io.observe(el));
  }

  function enhancePaletteHelpers() {
    $$('p, li, label, small').forEach((el) => {
      if (!el.classList.contains('muted') && !el.closest('.nt-sticky-bar')) el.style.color = 'var(--nt-text-soft)';
    });
  }

  ready(() => {
    document.body.classList.add('neartec-v34');
    injectPolygons();
    setHeroClass();
    removeDuplicateWidgets();
    removeExtraIconsInButtons();
    updateTextNodes();
    enhanceServiceCards();
    buildInsights();
    buildFooter();
    buildStickyBar();
    buildNearyDock();
    enhancePaletteHelpers();
    observeAnimations();
  });
})();
