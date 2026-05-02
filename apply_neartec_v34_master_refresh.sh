#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

echo "== NearTec V3.4 Master Refresh =="
STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="../neartec-site-backups/$STAMP"
mkdir -p "$BACKUP_DIR"
tar --exclude='./.git' --exclude='./node_modules' -czf "$BACKUP_DIR/neartec-site-$STAMP.tgz" . || true
echo "Backup local: $BACKUP_DIR/neartec-site-$STAMP.tgz"

mkdir -p assets/css assets/js assets/icons assets/img

# 1) Isotipo protagonista + iconos oficiales / pro
if [ -f assets/icons/1017-removebg-preview.png ]; then
  cp -f assets/icons/1017-removebg-preview.png assets/icons/neartec-isotipo-premium.png
elif [ -f assets/icons/neartec-isotipo.png ]; then
  cp -f assets/icons/neartec-isotipo.png assets/icons/neartec-isotipo-premium.png
elif [ -f assets/icons/neary.svg ]; then
  cp -f assets/icons/neary.svg assets/icons/neartec-isotipo-premium.svg
fi

cat > assets/icons/whatsapp-official.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path fill="currentColor" d="M27.2 4.8A14.7 14.7 0 0 0 4.6 23.1L3 29l6.1-1.6A14.7 14.7 0 1 0 27.2 4.8ZM16 27.8c-2.1 0-4.2-.6-6-1.7l-.4-.2-3.6 1 1-3.5-.3-.4a12 12 0 1 1 9.3 4.8Zm6.6-9c-.4-.2-2.4-1.2-2.8-1.4-.4-.1-.6-.2-.9.2s-1 1.4-1.3 1.7c-.2.2-.4.3-.8.1-.4-.2-1.8-.7-3.3-2.1-1.2-1.1-1.9-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.7.1-.2.1-.5 0-.7-.1-.2-.9-2.3-1.3-3.1-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.4 0 2 .4 3.5 2 5.6 2 2.8 4.2 4.4 7.4 5.7 3.2 1.3 4 .9 4.8.8.7-.2 2.4-1 2.8-2 .3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z"/>
</svg>
EOF

cat > assets/icons/icon-web.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18"/><path d="m9 14 2-2-2-2"/><path d="m15 10-2 4"/>
</svg>
EOF

cat > assets/icons/icon-crm.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="7" r="3"/><path d="M5 20c1.4-3 4-4.5 7-4.5S17.6 17 19 20"/><path d="M4 10h3"/><path d="M17 10h3"/><path d="M7 4 5.5 2.5"/><path d="M17 4l1.5-1.5"/>
</svg>
EOF

cat > assets/icons/icon-cn.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 4h10l3 3v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7l2-3Z"/><path d="M7 4v5h10V4"/><path d="M9 14h6"/><path d="M9 17h4"/>
</svg>
EOF

cat > assets/icons/icon-cloud.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 18a4 4 0 1 1 .7-7.9A5.5 5.5 0 0 1 17 8a4 4 0 1 1 1 10H6Z"/><path d="m12 10 0 8"/><path d="m9.5 15 2.5 3 2.5-3"/>
</svg>
EOF

cat > assets/icons/icon-support.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 12a8 8 0 0 1 16 0"/><path d="M6 14v2a2 2 0 0 0 2 2h2"/><path d="M18 14v2a4 4 0 0 1-4 4h-2"/><rect x="2.5" y="10" width="3" height="6" rx="1"/><rect x="18.5" y="10" width="3" height="6" rx="1"/>
</svg>
EOF

# 2) CSS V3.4 premium master refresh
cat > assets/css/v34-master-refresh.css <<'EOF'
:root{
  --nt-bg:#09140d;
  --nt-bg-soft:#0f1d13;
  --nt-surface:rgba(8,17,11,.68);
  --nt-surface-2:rgba(13,25,16,.82);
  --nt-card:rgba(9,19,12,.72);
  --nt-card-2:rgba(12,24,15,.78);
  --nt-line:rgba(173,255,87,.12);
  --nt-line-strong:rgba(184,255,93,.24);
  --nt-text:#f5f8f0;
  --nt-text-soft:#d8e3d0;
  --nt-text-muted:#afc0ac;
  --nt-accent:#b9ff4d;
  --nt-accent-2:#8def48;
  --nt-accent-3:#d9ff7f;
  --nt-shadow:0 18px 55px rgba(0,0,0,.26), 0 0 0 1px rgba(185,255,77,.08) inset;
  --nt-radius:28px;
  --nt-radius-sm:18px;
  --nt-grid-max:1240px;
  --nt-sticky-h:102px;
}

html{scroll-behavior:smooth}
body.neartec-v34{
  background:
    radial-gradient(circle at 15% 18%, rgba(169,255,71,.22), transparent 32%),
    radial-gradient(circle at 82% 22%, rgba(118,224,77,.18), transparent 28%),
    radial-gradient(circle at 50% 85%, rgba(94,180,70,.16), transparent 26%),
    linear-gradient(180deg,#102114 0%, #0d1810 40%, #0a140d 100%);
  color:var(--nt-text);
  position:relative;
  overflow-x:hidden;
  padding-bottom:calc(var(--nt-sticky-h) + env(safe-area-inset-bottom) + 28px);
}

body.neartec-v34::before{
  content:"";
  position:fixed; inset:0;
  background:
    linear-gradient(rgba(188,255,89,.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(188,255,89,.07) 1px, transparent 1px);
  background-size:44px 44px;
  opacity:.34;
  pointer-events:none;
  z-index:0;
}
body.neartec-v34::after{
  content:"";
  position:fixed; inset:-15%;
  background:
    radial-gradient(circle at 20% 20%, rgba(186,255,88,.08), transparent 24%),
    radial-gradient(circle at 70% 28%, rgba(114,220,73,.08), transparent 22%),
    radial-gradient(circle at 50% 80%, rgba(88,180,60,.08), transparent 20%);
  filter:blur(26px);
  pointer-events:none;
  z-index:0;
}

body.neartec-v34 > *{position:relative; z-index:1}

.nt-tech-polygons{
  position:fixed; inset:0; overflow:hidden; pointer-events:none; z-index:0;
}
.nt-tech-polygons span{
  position:absolute;
  width:var(--s); height:var(--s);
  border:1px solid rgba(188,255,89,.28);
  border-radius:14px;
  background:transparent;
  transform:rotate(var(--r));
  box-shadow:0 0 0 1px rgba(0,0,0,.1) inset, 0 0 24px rgba(178,255,87,.07);
  animation:nt-float var(--d) linear infinite;
  opacity:.8;
}
@keyframes nt-float{
  0%{transform:translate3d(0,0,0) rotate(var(--r)); opacity:.1}
  15%{opacity:.75}
  50%{transform:translate3d(var(--x),calc(var(--y) * -1),0) rotate(calc(var(--r) + 120deg)); opacity:.92}
  100%{transform:translate3d(calc(var(--x) * -1),var(--y),0) rotate(calc(var(--r) + 240deg)); opacity:.15}
}

header, nav{backdrop-filter:blur(12px)}
header img, .brand img, .logo img{
  background:transparent !important;
  box-shadow:none !important;
}

body.neartec-v34 main,
body.neartec-v34 section,
body.neartec-v34 .section,
body.neartec-v34 .wrap,
body.neartec-v34 .container{
  position:relative;
}

body.neartec-v34 h1,
body.neartec-v34 h2,
body.neartec-v34 h3{
  color:var(--nt-text);
  letter-spacing:-.04em;
  text-wrap:balance;
}
body.neartec-v34 h1{
  font-size:clamp(3rem,8vw,7.2rem);
  line-height:.95;
  margin:0 0 20px;
}
body.neartec-v34 h2{
  font-size:clamp(2rem,5vw,4rem);
  line-height:.98;
  margin:0 0 14px;
}
body.neartec-v34 h3{
  font-size:clamp(1.3rem,2vw,2rem);
  line-height:1.08;
  margin:0 0 10px;
}
body.neartec-v34 p,
body.neartec-v34 li,
body.neartec-v34 label,
body.neartec-v34 small,
body.neartec-v34 input,
body.neartec-v34 textarea,
body.neartec-v34 select{
  color:var(--nt-text-soft);
  font-size:clamp(15px,1.5vw,18px);
  line-height:1.72;
}
body.neartec-v34 small, body.neartec-v34 .muted{color:var(--nt-text-muted)}

.nt-eyebrow,
body.neartec-v34 [class*="eyebrow"],
body.neartec-v34 .badge{
  display:inline-flex;
  align-items:center;
  gap:10px;
  color:var(--nt-accent-3);
  text-transform:uppercase;
  letter-spacing:.18em;
  font-weight:800;
  font-size:12px;
}
.nt-eyebrow::before{
  content:"";
  width:12px; height:12px; border-radius:999px;
  background:var(--nt-accent);
  box-shadow:0 0 16px rgba(185,255,77,.5);
}

.nt-panel,
body.neartec-v34 .nt-card,
body.neartec-v34 .nt-service-card,
body.neartec-v34 .nt-footer,
body.neartec-v34 footer{
  background:linear-gradient(180deg, rgba(9,17,11,.78), rgba(7,13,9,.9));
  border:1px solid var(--nt-line);
  border-radius:var(--nt-radius);
  box-shadow:var(--nt-shadow);
}

body.neartec-v34 article,
body.neartec-v34 .card,
body.neartec-v34 .service-card,
body.neartec-v34 .pricing-card,
body.neartec-v34 .glass-card,
body.neartec-v34 .box{
  border-radius:var(--nt-radius);
}

body.neartec-v34 .nt-service-card{
  padding:28px;
  backdrop-filter:blur(10px);
  overflow:hidden;
}
body.neartec-v34 .nt-service-card::before{
  content:"";
  position:absolute; inset:auto auto -20% -10%;
  width:180px; height:180px;
  background:radial-gradient(circle, rgba(177,255,78,.17), transparent 68%);
  filter:blur(12px);
  pointer-events:none;
}
.nt-service-head{
  display:flex; align-items:center; gap:14px; margin-bottom:16px;
}
.nt-service-icon{
  width:54px; height:54px;
  border-radius:18px;
  display:grid; place-items:center;
  color:var(--nt-accent-3);
  background:linear-gradient(180deg, rgba(173,255,87,.18), rgba(173,255,87,.04));
  border:1px solid var(--nt-line-strong);
  box-shadow:0 0 0 1px rgba(255,255,255,.02) inset;
}
.nt-service-icon img{width:28px;height:28px;display:block}
.nt-service-tag{
  color:var(--nt-accent-3);
  text-transform:uppercase;
  letter-spacing:.18em;
  font-size:12px;
  font-weight:800;
}
.nt-meter{
  position:relative;
  margin-top:18px;
  height:12px;
  border-radius:999px;
  overflow:hidden;
  background:rgba(255,255,255,.08);
}
.nt-meter span{
  display:block;
  height:100%;
  width:var(--w,72%);
  background:linear-gradient(90deg, var(--nt-accent), var(--nt-accent-2));
  border-radius:999px;
  box-shadow:0 0 18px rgba(185,255,77,.32);
  transform-origin:left center;
  transform:scaleX(0);
  transition:transform .8s cubic-bezier(.22,.9,.2,1);
}
.nt-inview .nt-meter span{transform:scaleX(1)}

.nt-insights{
  max-width:var(--nt-grid-max);
  margin:54px auto 0;
  padding:0 16px;
}
.nt-insights-grid{
  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:22px;
}
.nt-panel{
  padding:28px;
  overflow:hidden;
}
.nt-panel h3{font-size:clamp(1.5rem,2.5vw,2.4rem)}
.nt-timeline{display:grid; gap:14px; margin-top:18px}
.nt-step{
  display:grid;
  grid-template-columns:58px 1fr;
  gap:14px;
  align-items:start;
  padding:14px 0;
  border-bottom:1px solid rgba(255,255,255,.06);
}
.nt-step:last-child{border-bottom:0}
.nt-step-badge{
  width:54px; height:54px;
  border-radius:16px;
  display:grid; place-items:center;
  font-weight:900; font-size:20px;
  color:#111;
  background:linear-gradient(180deg, var(--nt-accent-3), var(--nt-accent));
  box-shadow:0 8px 20px rgba(185,255,77,.22);
}
.nt-bars{display:grid; gap:14px; margin-top:18px}
.nt-bar-row{
  display:grid; grid-template-columns:92px 1fr 78px; gap:10px; align-items:center;
}
.nt-bar-track{
  height:18px; border-radius:999px; background:rgba(255,255,255,.08); overflow:hidden;
}
.nt-bar-track span{
  display:block; height:100%; width:var(--w);
  background:linear-gradient(90deg, var(--nt-accent), var(--nt-accent-2));
  box-shadow:0 0 20px rgba(185,255,77,.26);
  transform-origin:left center; transform:scaleX(0);
  transition:transform .9s cubic-bezier(.22,.9,.2,1);
}
.nt-inview .nt-bar-track span{transform:scaleX(1)}
.nt-bar-price{text-align:right; font-weight:800; color:var(--nt-accent-3)}
.nt-ecosystem{
  display:grid; grid-template-columns:1fr 1fr; gap:16px;
}
.nt-node-grid{
  position:relative; min-height:260px; border-radius:24px;
  border:1px solid rgba(255,255,255,.06);
  background:linear-gradient(180deg, rgba(15,23,16,.62), rgba(9,16,11,.9));
  overflow:hidden;
}
.nt-node-grid::before{
  content:""; position:absolute; inset:0;
  background:
    linear-gradient(rgba(188,255,89,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(188,255,89,.05) 1px, transparent 1px);
  background-size:26px 26px;
}
.nt-node{
  position:absolute; display:flex; align-items:center; gap:8px;
  padding:9px 12px;
  border-radius:999px;
  background:rgba(7,14,9,.82);
  border:1px solid rgba(185,255,77,.22);
  color:var(--nt-text);
  box-shadow:0 10px 26px rgba(0,0,0,.22);
}
.nt-node::before{
  content:""; width:9px; height:9px; border-radius:999px;
  background:var(--nt-accent);
  box-shadow:0 0 10px rgba(185,255,77,.45);
}
.nt-node-line{
  position:absolute; height:1px;
  background:linear-gradient(90deg, rgba(185,255,77,.05), rgba(185,255,77,.4), rgba(185,255,77,.05));
  transform-origin:left center;
  animation:nt-pulse 2.8s ease-in-out infinite;
}
@keyframes nt-pulse{50%{opacity:.45; transform:scaleX(1.04)}}

.nt-footer-wrap{
  max-width:var(--nt-grid-max);
  margin:64px auto 24px;
  padding:0 16px;
}
.nt-footer-cta{
  display:grid; grid-template-columns:1.1fr .9fr; gap:18px;
  padding:24px;
  margin-bottom:18px;
}
.nt-footer-logo{
  display:flex; align-items:center; gap:16px;
}
.nt-footer-logo img{
  width:74px; height:74px; object-fit:contain;
  background:transparent !important;
}
.nt-footer-grid{
  display:grid; grid-template-columns:1.2fr 1fr 1fr 1fr;
  gap:18px; padding:26px;
}
.nt-footer h3,.nt-footer h4{margin:0 0 10px}
.nt-footer a{color:var(--nt-text-soft); text-decoration:none}
.nt-footer a:hover{color:var(--nt-accent-3)}
.nt-legal{
  display:flex; flex-wrap:wrap; gap:12px 18px; margin-top:16px;
  font-size:14px;
}
.nt-mini{
  padding:16px 18px;
  border-radius:20px;
  border:1px solid rgba(255,255,255,.06);
  background:rgba(255,255,255,.03);
}

.nt-sticky-bar{
  position:fixed;
  left:16px; right:16px;
  bottom:calc(env(safe-area-inset-bottom) + 14px);
  z-index:60;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  padding:8px;
  border-radius:28px;
  background:rgba(4,10,6,.72);
  border:1px solid rgba(185,255,77,.16);
  backdrop-filter:blur(14px);
  box-shadow:0 18px 44px rgba(0,0,0,.35);
}
.nt-sticky-btn{
  min-height:60px;
  display:flex; align-items:center; justify-content:center; gap:12px;
  border-radius:22px;
  font-weight:800; font-size:clamp(16px,2.1vw,19px);
  text-decoration:none;
  border:1px solid rgba(185,255,77,.16);
}
.nt-sticky-btn.whatsapp{
  color:var(--nt-text);
  background:linear-gradient(180deg, rgba(8,14,10,.84), rgba(5,10,7,.98));
}
.nt-sticky-btn.quote{
  color:#091107;
  background:linear-gradient(180deg, var(--nt-accent), var(--nt-accent-2));
  box-shadow:0 10px 30px rgba(185,255,77,.22);
}
.nt-sticky-btn img, .nt-sticky-btn svg{width:24px; height:24px; display:block; flex:0 0 24px}

.nt-neary-dock{
  position:fixed;
  right:18px;
  bottom:calc(env(safe-area-inset-bottom) + var(--nt-sticky-h) + 20px);
  width:78px; height:78px;
  border-radius:26px;
  display:grid; place-items:center;
  background:rgba(3,8,5,.74);
  border:1px solid rgba(185,255,77,.2);
  backdrop-filter:blur(12px);
  box-shadow:0 16px 36px rgba(0,0,0,.28);
  z-index:58;
  overflow:hidden;
}
.nt-neary-dock::before{
  content:"";
  position:absolute; inset:14%;
  background:radial-gradient(circle, rgba(185,255,77,.28), transparent 60%);
  filter:blur(8px);
}
.nt-neary-dock img{
  position:relative;
  width:44px; height:44px; object-fit:contain;
  filter:drop-shadow(0 0 14px rgba(185,255,77,.34));
}
.nt-neary-dock.pulse{
  animation:nt-breathe 2.6s ease-in-out infinite;
}
@keyframes nt-breathe{
  0%,100%{transform:translateY(0) scale(1)}
  50%{transform:translateY(-2px) scale(1.04)}
}

.nt-btn, .nt-btn-primary, .nt-btn-secondary, button, .button, .btn{
  border-radius:20px !important;
}
body.neartec-v34 input,
body.neartec-v34 textarea,
body.neartec-v34 select{
  background:rgba(6,12,8,.82) !important;
  border:1px solid rgba(185,255,77,.16) !important;
  border-radius:18px !important;
  min-height:56px;
  padding:14px 16px;
  box-shadow:none !important;
}
body.neartec-v34 textarea{min-height:132px}
body.neartec-v34 input:focus,
body.neartec-v34 textarea:focus,
body.neartec-v34 select:focus{
  outline:none;
  border-color:rgba(185,255,77,.44) !important;
  box-shadow:0 0 0 3px rgba(185,255,77,.12) !important;
}

body.neartec-v34 img{max-width:100%}
body.neartec-v34 .text-accent,
body.neartec-v34 .accent,
body.neartec-v34 .highlight{color:var(--nt-accent)}

@media (max-width:960px){
  .nt-insights-grid,
  .nt-footer-cta,
  .nt-footer-grid,
  .nt-ecosystem{grid-template-columns:1fr}
}
@media (max-width:720px){
  :root{--nt-sticky-h:94px}
  body.neartec-v34 h1{font-size:clamp(3rem,13vw,4.6rem)}
  body.neartec-v34 h2{font-size:clamp(2rem,9vw,3.1rem)}
  .nt-panel,.nt-service-card,.nt-footer-grid,.nt-footer-cta{padding:20px}
  .nt-bar-row{grid-template-columns:82px 1fr 70px}
  .nt-sticky-bar{left:12px; right:12px; gap:10px}
  .nt-neary-dock{width:72px; height:72px; right:14px}
}
@media (prefers-reduced-motion:reduce){
  .nt-tech-polygons span,
  .nt-neary-dock.pulse,
  .nt-node-line{animation:none !important}
  .nt-bar-track span,
  .nt-meter span{transition:none !important; transform:none !important}
}
EOF

# 3) JS V3.4 master refresh
cat > assets/js/v34-master-refresh.js <<'EOF'
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
EOF

# 4) HTML: inyectar CSS/JS y limpiar duplicados de includes
python3 - <<'PY'
from pathlib import Path
import re

files = [p for p in Path('.').rglob('*.html') if '.git' not in p.parts and 'node_modules' not in p.parts]
css_href = '/assets/css/v34-master-refresh.css'
js_src = '/assets/js/v34-master-refresh.js'

for p in files:
    s = p.read_text(encoding='utf-8', errors='ignore')

    # eliminar duplicados de referencias V3.4 si existen
    s = re.sub(r'\s*<link[^>]+/assets/css/v34-master-refresh\.css[^>]*>\s*', '\n', s, flags=re.I)
    s = re.sub(r'\s*<script[^>]+/assets/js/v34-master-refresh\.js[^>]*>\s*</script>\s*', '\n', s, flags=re.I)

    # body class
    if re.search(r'<body[^>]*class=', s, flags=re.I):
        s = re.sub(r'(<body[^>]*class=")([^"]*)(")', lambda m: m.group(1) + ('neartec-v34 ' + m.group(2) if 'neartec-v34' not in m.group(2) else m.group(2)) + m.group(3), s, count=1, flags=re.I)
    else:
        s = re.sub(r'<body(\s*[^>]*)>', r'<body\1 class="neartec-v34">', s, count=1, flags=re.I)

    if '</head>' in s:
        s = s.replace('</head>', f'  <link rel="stylesheet" href="{css_href}">\n</head>', 1)
    if '</body>' in s:
        s = s.replace('</body>', f'  <script defer src="{js_src}"></script>\n</body>', 1)

    # microcopy cleanup
    replacements = {
        'proceso interno': 'operación diaria',
        'Alta intención': 'Atención prioritaria',
        'Lo que sí tiene referencia pública.': 'Referencias de precio público.',
    }
    for old, new in replacements.items():
        s = s.replace(old, new)

    p.write_text(s, encoding='utf-8')

print(f"OK: HTML actualizado en {len(files)} archivos.")
PY

# 5) saneamiento rápido de assets / referencias
if [ -f assets/icons/whatsapp.svg ] && [ ! -f assets/icons/whatsapp-official.svg ]; then
  cp -f assets/icons/whatsapp.svg assets/icons/whatsapp-official.svg
fi

# 6) Validaciones básicas
echo "== revisión de archivos =="
grep -RIn "v34-master-refresh" . --exclude-dir=node_modules --exclude-dir=.git || true

# 7) Git local + push
git add -A
git commit -m "Apply NearTec V3.4 master refresh" || true
git pull --rebase origin main || true
git push origin main || true

echo "== Listo =="
echo "Si quieres desplegar en producción ahora mismo:"
echo "vercel --prod --logs"
