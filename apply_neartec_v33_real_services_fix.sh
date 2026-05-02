#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

echo "== NearTec V3.3 — Servicios reales + visual premium fix =="
cd "${1:-$PWD}" || exit 1

if [ ! -f index.html ] || [ ! -d assets ]; then
  echo "ERROR: ejecuta este script dentro del repo público de NearTec, donde exista index.html y assets/."
  exit 1
fi

STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_BRANCH="backup/pre-v33-real-services-$STAMP"

echo "== 1) Backup Git =="
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git status --short || true
  git branch "$BACKUP_BRANCH" || true
  git push origin "$BACKUP_BRANCH" || true
else
  echo "AVISO: no parece repo Git. Continúo sin backup remoto."
fi

echo "== 2) Isotipo NearTec + WhatsApp oficial =="
mkdir -p assets/icons assets/css assets/js assets/img campanas terminos privacidad cookies aviso-legal

# Renombrar/copiar el isotipo que subiste. No lo sobreescribe si ya existe el nombre final.
if [ -f "assets/icons/1017-removebg-preview.png" ]; then
  cp "assets/icons/1017-removebg-preview.png" "assets/icons/neartec-isotipo.png"
elif [ -f "/sdcard/Download/1017-removebg-preview.png" ]; then
  cp "/sdcard/Download/1017-removebg-preview.png" "assets/icons/neartec-isotipo.png"
elif [ ! -f "assets/icons/neartec-isotipo.png" ]; then
  # Fallback ligero si el PNG no está disponible. Se usa solo para no romper UI.
  cat > assets/icons/neartec-isotipo.svg <<'EOF'
<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NearTec"><rect width="96" height="96" rx="26" fill="rgba(5,12,4,.72)"/><path d="M25 66V31h12l23 35h11V31" fill="none" stroke="#b8ff42" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M62 16h7v7h-7zM72 24h6v6h-6zM55 9h5v5h-5zM73 10h8v8h-8z" fill="#b8ff42"/></svg>
EOF
fi

cat > assets/icons/whatsapp-official.svg <<'EOF'
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WhatsApp"><circle cx="32" cy="32" r="28" fill="#25D366"/><path d="M18.6 47.4l2-7.2A17.1 17.1 0 0 1 18.3 31c0-9.3 7.6-16.9 16.9-16.9 4.5 0 8.7 1.8 11.9 5 3.2 3.2 5 7.4 5 11.9 0 9.3-7.6 16.9-16.9 16.9a17 17 0 0 1-8.6-2.3l-8 1.8Z" fill="#fff"/><path d="M35.2 17.1A13.9 13.9 0 0 0 21.3 31c0 2.6.7 5.1 2.1 7.3l.3.6-1.2 4.5 4.6-1.1.6.3a14 14 0 0 0 7.5 2.1A13.9 13.9 0 0 0 49.1 31c0-3.7-1.4-7.2-4.1-9.8a13.8 13.8 0 0 0-9.8-4.1Z" fill="#25D366"/><path d="M30.9 24.1c-.3-.7-.7-.7-1-.7h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.2 5.1 8 6.9 4 1.6 4.8 1.3 5.7 1.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.6l-3.2-1.6c-.5-.2-.8-.3-1.2.3-.4.5-1.4 1.6-1.7 2-.3.4-.6.4-1.1.1-.5-.2-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.9l-1.4-3.1Z" fill="#fff"/></svg>
EOF

echo "== 3) CSS V3.3 visual/UX premium =="
cat > assets/css/v33-real-services.css <<'EOF'
/* NearTec V3.3 — real services, clean copy, premium micro-UI */
:root{
  --v33-glass: rgba(2, 8, 2, .64);
  --v33-glass-strong: rgba(1, 6, 2, .82);
  --v33-border: rgba(184,255,66,.22);
  --v33-border-soft: rgba(184,255,66,.12);
  --v33-copy: #e8f4df;
  --v33-soft: #c6d7bf;
  --v33-lime: #baff39;
  --v33-green: #8fdc31;
}
body{position:relative;background-color:#020601;color:var(--text);}
main{position:relative;z-index:1;}
.v33-bg-polygons{position:fixed;inset:0;width:100%;height:100%;z-index:-4;pointer-events:none;opacity:.42;filter:drop-shadow(0 0 10px rgba(165,255,70,.10));}
.v33-bg-polygons polygon{fill:none;stroke:rgba(178,255,70,.22);stroke-width:1.25;vector-effect:non-scaling-stroke;animation:v33PolyFloat var(--dur,18s) ease-in-out infinite alternate;transform-origin:center;}
.v33-bg-polygons polygon:nth-child(3n){stroke:rgba(178,255,70,.14);--dur:24s;}
.v33-bg-polygons polygon:nth-child(4n){stroke:rgba(255,255,255,.08);--dur:28s;}
@keyframes v33PolyFloat{0%{transform:translate3d(0,0,0) rotate(0deg);opacity:.18}50%{opacity:.46}100%{transform:translate3d(var(--x,18px),var(--y,-22px),0) rotate(var(--r,10deg));opacity:.25}}

/* Cleaner commercial typography without changing main hero style */
.lead,.section-head p,.card p,.form-panel p,.visual-card p,.footer p,.legal{color:var(--v33-copy);line-height:1.72;letter-spacing:-.012em;}
.card li,.mini-table td,.field input,.field select,.field textarea{color:var(--v33-soft);}
.tag{font-size:clamp(11px,1.25vw,13px);letter-spacing:.20em;text-shadow:0 0 18px rgba(186,255,57,.22);}
.card h3,.visual-card h3,.form-panel h2{letter-spacing:-.045em;}
.card,.visual-card,.form-panel,.route-map a{background:linear-gradient(180deg,rgba(9,22,8,.76),rgba(0,5,1,.72));border-color:var(--v33-border-soft);box-shadow:0 24px 70px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.04);}
.card:hover,.visual-card:hover,.form-panel:hover,.route-map a:hover{border-color:rgba(186,255,57,.34);box-shadow:0 28px 90px rgba(125,205,35,.22), inset 0 1px 0 rgba(255,255,255,.08);}
.card ul{padding-left:1.08rem;}.card li{margin:.55rem 0;line-height:1.55;}
.icon{background:rgba(186,255,57,.11)!important;border:1px solid rgba(186,255,57,.20)!important;color:var(--v33-lime)!important;}
.icon svg{width:26px;height:26px;stroke:currentColor;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round;}

/* Service and sales sections */
.v33-service-section{position:relative;overflow:hidden;}
.v33-service-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:28px;}
.v33-service-card{position:relative;min-height:250px;padding:22px;border-radius:30px;border:1px solid var(--v33-border-soft);background:radial-gradient(circle at 20% 0%,rgba(186,255,57,.14),transparent 34%),linear-gradient(180deg,rgba(10,25,9,.82),rgba(0,5,1,.84));overflow:hidden;isolation:isolate;}
.v33-service-card:before{content:"";position:absolute;inset:-35%;background:conic-gradient(from 180deg,transparent,rgba(186,255,57,.12),transparent 30%);animation:v33Spin 8s linear infinite;z-index:-1;}
.v33-service-card h3{font-size:clamp(25px,3vw,38px);line-height:.95;margin:14px 0 10px;letter-spacing:-.06em;}
.v33-service-card p{font-size:15px;margin:0;color:var(--v33-copy);}
.v33-service-card small{display:inline-flex;color:var(--v33-lime);font-weight:1000;text-transform:uppercase;letter-spacing:.14em;font-size:11px;}
.v33-service-icon{width:48px;height:48px;border-radius:17px;display:grid;place-items:center;background:rgba(186,255,57,.10);border:1px solid rgba(186,255,57,.20);color:var(--v33-lime);}
.v33-service-meter{margin-top:18px;height:9px;border-radius:999px;background:rgba(255,255,255,.07);overflow:hidden;}
.v33-service-meter span{display:block;width:0;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--v33-green),var(--v33-lime));box-shadow:0 0 24px rgba(186,255,57,.32);transition:width 1.1s cubic-bezier(.22,1,.36,1);}
.in-view .v33-service-meter span,.v33-service-card.in-view .v33-service-meter span{width:var(--w,76%);}
@keyframes v33Spin{to{transform:rotate(1turn)}}

.v33-flow-premium{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:26px;}
.v33-flow-step{position:relative;border:1px solid var(--v33-border-soft);border-radius:24px;background:rgba(2,8,2,.62);padding:16px;min-height:132px;}
.v33-flow-step:not(:last-child):after{content:"";position:absolute;top:50%;right:-11px;width:20px;height:2px;background:linear-gradient(90deg,var(--v33-green),transparent);box-shadow:0 0 14px rgba(186,255,57,.35);}
.v33-flow-step b{display:grid;place-items:center;width:34px;height:34px;border-radius:12px;background:rgba(186,255,57,.14);color:var(--v33-lime);border:1px solid rgba(186,255,57,.20);margin-bottom:10px;}
.v33-flow-step strong{display:block;font-size:18px;line-height:1.05;letter-spacing:-.04em;}
.v33-flow-step span{display:block;margin-top:8px;color:var(--v33-soft);font-size:13px;line-height:1.4;}

.v33-price-chart{display:grid;gap:12px;margin-top:22px;}
.v33-price-bar{display:grid;grid-template-columns:168px 1fr auto;align-items:center;gap:12px;color:var(--v33-copy);font-weight:800;}
.v33-price-track{height:12px;border-radius:999px;background:rgba(255,255,255,.07);overflow:hidden;}
.v33-price-track i{display:block;width:0;height:100%;background:linear-gradient(90deg,var(--v33-green),var(--v33-lime));border-radius:inherit;box-shadow:0 0 24px rgba(186,255,57,.30);transition:width 1s cubic-bezier(.22,1,.36,1);}
.in-view .v33-price-track i{width:var(--w);}
.v33-price-bar em{font-style:normal;color:var(--v33-lime);font-size:14px;white-space:nowrap;}

/* Premium assist / bubble */
.assist{right:16px!important;bottom:calc(var(--safe) + 22px)!important;z-index:92!important;}
.assist-trigger{width:72px!important;height:72px!important;border-radius:24px!important;background:rgba(1,6,2,.70)!important;border:1px solid rgba(186,255,57,.30)!important;box-shadow:0 0 0 1px rgba(255,255,255,.04) inset,0 20px 60px rgba(122,255,34,.26)!important;backdrop-filter:blur(18px) saturate(1.2);font-size:0!important;overflow:hidden;}
.assist-trigger img{width:48px;height:48px;object-fit:contain;filter:drop-shadow(0 0 18px rgba(186,255,57,.46));animation:v33IconPulse 2.8s ease-in-out infinite;}
.assist-trigger:before{inset:-12px!important;border-color:rgba(186,255,57,.32)!important;}
.assist-menu{background:rgba(1,6,2,.74)!important;border:1px solid rgba(186,255,57,.22)!important;border-radius:26px!important;padding:10px!important;backdrop-filter:blur(18px) saturate(1.25);box-shadow:0 26px 88px rgba(0,0,0,.42),0 0 50px rgba(122,255,34,.12);}
.assist-menu a,.assist-menu button{background:rgba(4,12,3,.74)!important;border:1px solid rgba(186,255,57,.16)!important;border-radius:18px!important;color:#f5fff0!important;}
.assist-icon{background:rgba(186,255,57,.12)!important;border:1px solid rgba(186,255,57,.18);overflow:hidden;}
.assist-icon img,.assist-wa img{width:26px;height:26px;object-fit:contain;display:block;}
.assist-chat{background:rgba(1,6,2,.90)!important;border-color:rgba(186,255,57,.22)!important;backdrop-filter:blur(20px) saturate(1.25);}
@keyframes v33IconPulse{0%,100%{transform:scale(1);filter:drop-shadow(0 0 14px rgba(186,255,57,.36))}50%{transform:scale(1.08);filter:drop-shadow(0 0 25px rgba(186,255,57,.68))}}

/* Sticky bar spacing so it does not cover content */
body{padding-bottom:calc(var(--safe) + 34px + env(safe-area-inset-bottom,0px))!important;}
.footer{padding-bottom:calc(150px + env(safe-area-inset-bottom,0px))!important;}
.mobile-cta{backdrop-filter:blur(18px);}
.mobile-cta .btn-dark{background:rgba(1,6,2,.68)!important;border-color:rgba(186,255,57,.20)!important;}
.mobile-cta .btn img{width:24px;height:24px;}

/* Better footer */
.footer{background:radial-gradient(circle at 80% 0%,rgba(186,255,57,.10),transparent 35%),linear-gradient(180deg,#071104,#020601 70%)!important;}
.footer-grid{gap:28px;}
.footer b{color:#f4fff0;letter-spacing:-.02em;}
.footer a,.footer span{font-size:15px;line-height:1.45;color:#c6d7bf!important;}
.footer a:hover{color:var(--v33-lime)!important;}
.footer-logo-clean{background:transparent!important;border:0!important;box-shadow:none!important;mix-blend-mode:normal!important;}
.v33-trust-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px;}
.v33-trust-row span{display:inline-flex!important;margin:0!important;padding:8px 10px;border-radius:999px;background:rgba(186,255,57,.08);border:1px solid rgba(186,255,57,.14);font-size:12px!important;color:var(--v33-lime)!important;font-weight:900;}
.v33-footer-cta{margin-bottom:26px;border:1px solid rgba(186,255,57,.18);border-radius:32px;padding:24px;background:linear-gradient(135deg,rgba(9,25,8,.86),rgba(1,6,2,.92));display:flex;align-items:center;justify-content:space-between;gap:18px;}
.v33-footer-cta h2{margin:0;font-size:clamp(28px,4vw,48px);letter-spacing:-.07em;line-height:.95;}.v33-footer-cta p{margin:8px 0 0;color:#d7e8cf;}

/* Forms / quote polishing */
.field input,.field select,.field textarea{min-height:56px;background:rgba(1,6,2,.76)!important;border-color:rgba(186,255,57,.18)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.03);}
.field label{color:#f0ffe8!important;text-transform:uppercase;letter-spacing:.10em;font-size:12px!important;font-weight:1000!important;}
.check{min-height:58px;background:rgba(1,6,2,.62)!important;border-color:rgba(186,255,57,.16)!important;color:#efffe7!important;font-weight:800;}
.check input{accent-color:#baff39;transform:scale(1.18);}
.quote-summary,.summary-numbers,.line-items{position:relative;}
.summary-numbers b{color:#f5fff0;letter-spacing:-.04em;}
.score-pill{background:rgba(186,255,57,.12)!important;color:var(--v33-lime)!important;border:1px solid rgba(186,255,57,.20);}

@media(max-width:980px){
  .v33-service-grid{grid-template-columns:1fr 1fr}.v33-flow-premium{grid-template-columns:1fr 1fr}.v33-flow-step:not(:last-child):after{display:none}.v33-footer-cta{align-items:flex-start;flex-direction:column}.v33-price-bar{grid-template-columns:1fr;gap:7px}
}
@media(max-width:620px){
  body{padding-bottom:calc(112px + env(safe-area-inset-bottom,0px))!important;}
  .v33-service-grid,.v33-flow-premium{grid-template-columns:1fr;}
  .v33-service-card{min-height:210px;border-radius:26px;padding:19px;}
  .v33-bg-polygons{opacity:.30;}
  .assist{right:14px!important;bottom:calc(96px + env(safe-area-inset-bottom,0px))!important;}
  .assist-trigger{width:62px!important;height:62px!important;border-radius:21px!important;}.assist-trigger img{width:42px;height:42px;}
  .assist-menu{right:0!important;bottom:76px!important;width:min(290px,calc(100vw - 32px));}.assist-menu a,.assist-menu button{width:100%!important;}
  .footer{padding-bottom:150px!important;}
  .v33-footer-cta{padding:20px;border-radius:28px;}
  .v33-price-bar{font-size:14px;}
}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}.v33-bg-polygons{display:none}}
EOF

echo "== 4) JS V3.3: polígonos, iconos, textos, gráficos =="
cat > assets/js/v33-real-services.js <<'EOF'
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
EOF

echo "== 5) Parchar HTML: CSS/JS y copy público =="
python3 - <<'PY'
from pathlib import Path
import re

html_files = [p for p in Path('.').rglob('*.html') if not any(part.startswith('.') for part in p.parts)]
for p in html_files:
    s = p.read_text(encoding='utf-8', errors='ignore')
    if '/assets/css/v33-real-services.css' not in s:
        s = s.replace('</head>', '<link rel="stylesheet" href="/assets/css/v33-real-services.css">\n</head>')
    if '/assets/js/v33-real-services.js' not in s:
        # after app.js if possible, else before body
        if '<script src="/assets/js/app.js"></script>' in s:
            s = s.replace('<script src="/assets/js/app.js"></script>', '<script src="/assets/js/app.js"></script><script src="/assets/js/v33-real-services.js"></script>')
        else:
            s = s.replace('</body>', '<script src="/assets/js/v33-real-services.js"></script>\n</body>')
    replacements = {
        'Ruta técnica':'Solución recomendada',
        'Primero entendemos. Luego cotizamos. Después implementamos.':'Te orientamos, cotizamos claro e implementamos con soporte.',
        'El objetivo es evitar propuestas genéricas. NearTec filtra la necesidad: si necesitas vender más, ordenar operación, respaldar datos, automatizar procesos o integrar sistemas.':'Te escuchamos primero para recomendarte una solución útil: vender mejor, ordenar tu operación, respaldar información, automatizar tareas o conectar sistemas. Si ya existe precio público, lo mostramos; si es a medida, lo cotizamos por alcance.',
        'Prospectos mejor filtrados':'Contactos con intención real',
        'No vendemos “solo una página”. Construimos la capa digital y operativa que ayuda a vender, atender, cobrar, respaldar y dar seguimiento.':'NearTec desarrolla e integra páginas, apps, automatizaciones, CRM, IA, punto de venta, nube, respaldo, correo, hosting, VPS, soporte e integración fiscal para que tu empresa trabaje con menos piezas sueltas.',
        'Tecnología útil, conectada y entendible.':'Servicios tecnológicos reales para vender, operar y crecer.',
        'Lead Score':'Prioridad de atención',
        'lead score':'prioridad de atención',
        '☎':'',
        '✦':'',
    }
    for a,b in replacements.items():
        s = s.replace(a,b)
    # Remove internal words from visible copy without touching API/script source here.
    s = re.sub(r'\bStack NearTec\b', 'Ecosistema NearTec', s)
    s = re.sub(r'\bPanel demostrativo\b', 'Vista de solución', s)
    # Ensure legal footer links exist on every page with footer
    if '<footer' in s and 'Términos y condiciones' not in s:
        s = s.replace('<a href="/privacidad/">Privacidad</a>', '<a href="/privacidad/">Política de privacidad</a><a href="/terminos/">Términos y condiciones</a><a href="/cookies/">Política de cookies</a><a href="/aviso-legal/">Aviso legal</a>')
    p.write_text(s, encoding='utf-8')

# Create/refresh campaign and legal pages if missing or too basic
base_head = '''<!doctype html><html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#020601"><link rel="icon" href="/assets/icons/favicon.svg"><link rel="stylesheet" href="/assets/css/styles.css"><link rel="stylesheet" href="/assets/css/v33-real-services.css">'''
base_scripts = '''<div class="mobile-cta"><a class="btn btn-dark js-wa" href="#">WhatsApp</a><a class="btn btn-primary" href="/cotizador/">Cotizar</a></div><script src="/assets/js/pdf-engine.js"></script><script src="/assets/js/app.js"></script><script src="/assets/js/v33-real-services.js"></script></body></html>'''
nav = '''<div class="noise"></div><div class="grid-bg"></div><header class="nav"><div class="container nav-inner"><a class="brand" href="/"><img src="/assets/img/neartec-logo-clean.png" alt="NearTec"></a><nav class="nav-links" id="navLinks"><a href="/">Inicio</a><a href="/compunegocio/">CompuNegocio</a><a href="/cn7/">CN7</a><a href="/crm/">CRM / IA</a><a href="/web/">Web / Apps</a><a href="/cotizador/">Cotizador</a><a href="/contacto/">Contacto</a></nav><div class="nav-actions"><a class="btn btn-primary btn-small" href="/cotizador/">Cotizar</a><button class="menu-btn" id="menuBtn" aria-label="Abrir menú">☰</button></div></div></header>'''
footer = '''<footer class="footer"><div class="container footer-grid"><div><img src="/assets/img/neartec-logo-clean.png" alt="NearTec" class="footer-logo-clean"><p class="legal">NearTec desarrolla, integra y da soporte a tecnología para empresas: web, apps, CRM, IA, CompuNegocio, CN7, nube, correo, hosting, VPS y soporte.</p><div class="v33-trust-row"><span>Desde 2004</span><span>RFC NEA040929DKA</span><span>Tijuana, B.C.</span></div></div><div><b>Soluciones</b><a href="/web/">Web / Apps</a><a href="/crm/">CRM / IA</a><a href="/compunegocio/">CompuNegocio</a><a href="/cn7/">CN7 / Nube</a><a href="/soporte/">Soporte técnico</a></div><div><b>Avanzar</b><a href="/landing/">Landing de diagnóstico</a><a href="/diagnostico/">Diagnóstico</a><a href="/cotizador/">Cotizador</a><a href="/contacto/">Contacto</a></div><div><b>Contacto</b><a href="tel:+526644046194">664 404 6194</a><a href="mailto:meta@itimbre.com">meta@itimbre.com</a><span>Benito Juárez 2034 601, Zona Centro, Tijuana, Baja California, México, C.P. 22000</span><a href="/privacidad/">Política de privacidad</a><a href="/terminos/">Términos y condiciones</a><a href="/cookies/">Política de cookies</a><a href="/aviso-legal/">Aviso legal</a></div></div></footer>'''

def page(path, title, desc, body):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    html = f'{base_head}<title>{title}</title><meta name="description" content="{desc}"><meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:image" content="/assets/img/neartec-og.png"></head><body>{nav}<main>{body}</main>{footer}{base_scripts}'
    Path(path).write_text(html, encoding='utf-8')

page('campanas/index.html','Diagnóstico tecnológico NearTec para campañas','Landing estratégica para campañas: filtra necesidades, orienta servicios reales y lleva al cotizador o WhatsApp.', '''
<section class="hero"><div class="container hero-grid"><div><span class="tag">Diagnóstico tecnológico para empresas</span><h1>Antes de cotizar, entendemos qué necesita tu empresa.</h1><p class="lead">Esta página está pensada para campañas: explica rápido si necesitas web, app, CRM, IA, CompuNegocio, CN7, nube, soporte o integración fiscal, y te lleva al siguiente paso correcto.</p><div class="hero-actions"><a class="btn btn-primary" href="/cotizador/">Cotizar proyecto</a><a class="btn btn-ghost js-wa" href="#">Hablar por WhatsApp</a></div></div><div class="visual-card"><div class="v33-flow-premium"><div class="v33-flow-step"><b>01</b><strong>Necesidad</strong><span>Nos dices qué quieres resolver.</span></div><div class="v33-flow-step"><b>02</b><strong>Servicio</strong><span>Ubicamos la solución.</span></div><div class="v33-flow-step"><b>03</b><strong>Cotización</strong><span>Precio público o propuesta.</span></div><div class="v33-flow-step"><b>04</b><strong>Implementación</strong><span>Configuramos y damos soporte.</span></div><div class="v33-flow-step"><b>05</b><strong>Avance</strong><span>Seguimiento por WhatsApp.</span></div></div></div></div></section>
<section class="section v33-service-section"><div class="container"><div class="section-head"><div><span class="tag">Servicios reales</span><h2>Elige qué quieres resolver.</h2></div><p>Si no sabes el nombre técnico, basta con explicar el problema. NearTec traduce esa necesidad en una ruta clara.</p></div><div class="v33-service-grid"><article class="v33-service-card" style="--w:88%"><small>Vender mejor</small><h3>Web, app o landing.</h3><p>Presencia digital, formularios, interfaces, tiendas, paneles y conexión con WhatsApp o cotizador.</p><div class="v33-service-meter"><span></span></div></article><article class="v33-service-card" style="--w:82%"><small>Dar seguimiento</small><h3>CRM, IA y automatización.</h3><p>Tareas, respuestas, clasificación de oportunidades, WhatsApp con contexto y procesos repetitivos.</p><div class="v33-service-meter"><span></span></div></article><article class="v33-service-card" style="--w:76%"><small>Operar mejor</small><h3>CompuNegocio.</h3><p>Ventas, inventario, usuarios, reportes, timbres, CSD y configuración para punto de venta.</p><div class="v33-service-meter"><span></span></div></article><article class="v33-service-card" style="--w:72%"><small>Respaldar datos</small><h3>CN7, nube y respaldo.</h3><p>Servidor, base de datos, respaldo automático, hosting, VPS, FTP, correo e infraestructura.</p><div class="v33-service-meter"><span></span></div></article><article class="v33-service-card" style="--w:70%"><small>Mantener estable</small><h3>Soporte técnico.</h3><p>Soporte remoto, mantenimiento, capacitación, configuración y mejora continua.</p><div class="v33-service-meter"><span></span></div></article><article class="v33-service-card" style="--w:80%"><small>Cumplimiento</small><h3>Integración fiscal.</h3><p>Conexiones con CFDI, timbres, autofactura, web service, nómina o flujos fiscales.</p><div class="v33-service-meter"><span></span></div></article></div></div></section>
<section class="section"><div class="container split"><div><span class="tag">Contacto inteligente</span><h2>Cuéntanos qué necesitas y te respondemos con una ruta clara.</h2><p>No vendemos una solución genérica. Primero ubicamos si conviene implementar, cotizar directo o revisar alcance.</p></div><form class="form-panel" data-lead-form data-source="campanas" data-score="70" data-whatsapp="true"><h2>Solicitar diagnóstico</h2><div class="form-grid"><div class="field"><label>Nombre</label><input name="name" required></div><div class="field"><label>Empresa</label><input name="company"></div><div class="field"><label>WhatsApp</label><input name="phone" required></div><div class="field"><label>Correo</label><input name="email" type="email"></div><div class="field full"><label>Necesito</label><select name="service"><option>Web, app o desarrollo</option><option>CRM, automatización o IA</option><option>CompuNegocio</option><option>CN7, nube o respaldo</option><option>Soporte o infraestructura</option><option>Integración fiscal</option></select></div><div class="field full"><label>Contexto</label><textarea name="message" placeholder="Ejemplo: necesito ordenar inventario, responder mejor, crear una app, respaldar mi base de datos..."></textarea></div></div><button class="btn btn-primary" type="submit">Enviar y hablar por WhatsApp</button></form></div></section>''')

legal_common = '<section class="page-hero"><div class="container"><span class="tag">NearTec legal</span><h1>{h}</h1><p class="lead">Información pública para visitantes, prospectos y clientes. Para dudas, escribe a meta@itimbre.com o WhatsApp 664 404 6194.</p></div></section><section class="section"><div class="container"><article class="card"><h3>{h}</h3><p>{p}</p><p>Los precios publicados son referencias base documentadas. Los proyectos de desarrollo, CRM, IA, integraciones, seguridad e infraestructura especial se cotizan por alcance después de diagnóstico.</p></article></div></section>'
page('terminos/index.html','Términos y condiciones NearTec','Condiciones generales de uso y contratación de servicios NearTec.', legal_common.format(h='Términos y condiciones', p='El uso del sitio y la solicitud de cotización no obliga a contratar. Cada servicio se confirma por alcance, disponibilidad, condiciones técnicas e impuestos aplicables.'))
page('cookies/index.html','Política de cookies NearTec','Uso de cookies y tecnologías similares en el sitio de NearTec.', legal_common.format(h='Política de cookies', p='El sitio puede usar cookies o almacenamiento local para mejorar navegación, recordar cotizaciones y medir funcionamiento básico. Puedes borrar estos datos desde tu navegador.'))
page('aviso-legal/index.html','Aviso legal NearTec','Aviso legal y datos de contacto de NearTec.', legal_common.format(h='Aviso legal', p='NearTec opera como proveedor de desarrollo tecnológico, integración, soporte, infraestructura y soluciones empresariales. RFC NEA040929DKA. Domicilio: Benito Juárez 2034 601, Zona Centro, Tijuana, Baja California, México, C.P. 22000.'))
PY

echo "== 6) Patch app.js para evitar iconos/texto internos en Neary =="
python3 - <<'PY'
from pathlib import Path
p=Path('assets/js/app.js')
s=p.read_text(encoding='utf-8', errors='ignore')
s=s.replace("<span class=\"assist-icon\">✦</span>", "<span class=\"assist-icon\"><img src=\"/assets/icons/neartec-isotipo.png\" onerror=\"this.src='/assets/icons/neartec-isotipo.svg'\" alt=\"NearTec\"></span>")
s=s.replace("<span class=\"assist-icon\">☎</span>", "<span class=\"assist-icon\"><img src=\"/assets/icons/whatsapp-official.svg\" alt=\"WhatsApp\"></span>")
s=s.replace(">✦</button>", "><img src=\"/assets/icons/neartec-isotipo.png\" onerror=\"this.src='/assets/icons/neartec-isotipo.svg'\" alt=\"Neary AI NearTec\"></button>")
s=s.replace('Diagnóstico NearTec','Asistente tecnológico')
s=s.replace('Soy Neary AI. Te ayudo a ubicar si necesitas web, app, CRM, automatización, IA, CompuNegocio, CN7, nube, correo, respaldo o soporte.','Soy Neary AI. Te ayudo a ubicar qué tecnología necesita tu empresa: web, app, CRM, automatización, IA, CompuNegocio, CN7, nube, correo, respaldo, soporte o integración fiscal.')
s=s.replace('Hola NearTec, quiero seguimiento.','Hola NearTec, quiero que me ayuden a elegir una solución.')
s=s.replace('Hola NearTec, quiero información.','Hola NearTec, quiero información sobre sus servicios tecnológicos.')
p.write_text(s, encoding='utf-8')
PY

echo "== 7) Validaciones V3.3 =="
cat > scripts/preflight.js <<'EOF'
import fs from 'node:fs'

const required = [
  'index.html','assets/css/styles.css','assets/css/v33-real-services.css','assets/js/app.js','assets/js/v33-real-services.js','assets/icons/whatsapp-official.svg','api/lead.js','package.json','terminos/index.html','privacidad/index.html','cookies/index.html','aviso-legal/index.html','campanas/index.html'
]
const missing = required.filter((f)=>!fs.existsSync(f))
if (missing.length) { console.error('Faltan archivos V3.3:', missing.join(', ')); process.exit(1) }
const api = fs.readFileSync('api/lead.js','utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) { console.error('api/lead.js perdió NEARTEC_LEAD_WEBHOOK_URL'); process.exit(1) }
const index = fs.readFileSync('index.html','utf8')
for (const term of ['Desarrollamos tecnología','CompuNegocio','CN7','CRM','664 404 6194','meta@itimbre.com']) {
  if (!index.includes(term)) { console.error('Falta término público:', term); process.exit(1) }
}
console.log('Preflight OK: NearTec V3.3 real services visual fix listo.')
EOF

cat > scripts/smoke-test.mjs <<'EOF'
import fs from 'node:fs'
const read = (f) => fs.existsSync(f) ? fs.readFileSync(f,'utf8') : ''
const pages = ['index.html','campanas/index.html','cotizador/index.html','compunegocio/index.html','cn7/index.html','crm/index.html','web/index.html','contacto/index.html','terminos/index.html','privacidad/index.html','cookies/index.html','aviso-legal/index.html']
for (const p of pages) {
  const html = read(p)
  if (!html) throw new Error(`Falta página ${p}`)
  if (!html.includes('/assets/css/v33-real-services.css')) throw new Error(`${p} no carga CSS V3.3`)
  if (!html.includes('/assets/js/v33-real-services.js')) throw new Error(`${p} no carga JS V3.3`)
}
const publicCode = pages.map(read).join('\n') + read('assets/css/v33-real-services.css') + read('assets/js/v33-real-services.js')
for (const term of ['Servicios tecnológicos reales','Lo que implementamos','Términos y condiciones','Política de cookies','whatsapp-official.svg','neartec-isotipo']) {
  if (!publicCode.includes(term)) throw new Error(`No se encontró ${term}`)
}
for (const bad of ['Panel demostrativo','Stack NearTec','Ruta preparada en código','info@neartec.com','info@itimbre.com','664 630 0473','526646300473','Lead Score']) {
  if (publicCode.includes(bad)) throw new Error(`Texto/contacto viejo o interno detectado: ${bad}`)
}
console.log('Smoke test OK: NearTec V3.3 servicios reales, isotipo, polígonos, legal y copy público validado.')
EOF

# Actualizar package metadata sin romper si no existe npm
node - <<'NODE' || true
const fs=require('fs');
const p='package.json';
if(fs.existsSync(p)){
 const pkg=JSON.parse(fs.readFileSync(p,'utf8'));
 pkg.name='neartec-v33-real-services-visual-fix'; pkg.version='3.3.0';
 pkg.scripts ||= {}; pkg.scripts['predeploy:check']='node scripts/preflight.js'; pkg.scripts['smoke']='node scripts/smoke-test.mjs && node scripts/test-api-local.mjs';
 fs.writeFileSync(p, JSON.stringify(pkg,null,2)+'\n');
}
NODE

echo "== 8) Revisión de copy público viejo =="
grep -RInE "Panel demostrativo|Stack NearTec|Ruta preparada en código|info@neartec.com|info@itimbre.com|664 630 0473|526646300473|Lead Score" \
  index.html landing campanas cotizador compunegocio cn7 crm web contacto soporte soluciones terminos privacidad cookies aviso-legal assets/css assets/js \
  --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.vercel --exclude-dir=.next 2>/dev/null && { echo "ERROR: aún hay texto viejo/interno en fuente pública."; exit 1; } || echo "OK: fuente pública limpia."

npm run predeploy:check
npm run smoke

echo "== 9) Commit/push =="
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git status --short
  git add -A
  git commit -m "Apply NearTec V3.3 real services visual fix" || echo "Sin cambios para commit."
  git push origin main
fi

echo "== V3.3 listo =="
echo "Backup: $BACKUP_BRANCH"
echo "Ejecuta deploy real: vercel --prod --logs"
