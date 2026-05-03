#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

echo "== NearTec V3.5 Clean Source Upgrade =="

STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_BRANCH="backup/pre-v35-clean-source-$STAMP"
BACKUP_DIR="../neartec-site-backups/$STAMP"

mkdir -p "$BACKUP_DIR"
tar --exclude='./.git' --exclude='./node_modules' --exclude='./.next' -czf "$BACKUP_DIR/neartec-v35-backup-$STAMP.tgz" . || true

echo "== 1) Verificar base limpia =="
if grep -RIn "v34-master-refresh\|neartec-v34" *.html */index.html assets/css assets/js 2>/dev/null; then
  echo "ERROR: todavía hay rastros de V3.4. Limpia V3.4 antes de aplicar V3.5."
  exit 1
fi

echo "== 2) Backup Git =="
git branch "$BACKUP_BRANCH" || true
git push -u origin "$BACKUP_BRANCH" || true

mkdir -p assets/icons assets/css assets/js assets/img

echo "== 3) Isotipo NearTec oficial =="
if [ -f assets/icons/1017-removebg-preview.png ]; then
  cp -f assets/icons/1017-removebg-preview.png assets/icons/neartec-isotipo.png
elif [ -f assets/icons/neartec-isotipo.png ]; then
  echo "OK: isotipo ya existe."
else
  echo "AVISO: no encontré assets/icons/1017-removebg-preview.png ni assets/icons/neartec-isotipo.png"
fi

cat > assets/icons/whatsapp-official.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
  <path fill="currentColor" d="M16.04 3.2A12.7 12.7 0 0 0 5.1 22.36L3.4 28.8l6.6-1.73A12.67 12.67 0 1 0 16.04 3.2Zm0 23.2a10.43 10.43 0 0 1-5.32-1.46l-.38-.22-3.9 1.02 1.04-3.8-.25-.4A10.47 10.47 0 1 1 16.04 26.4Zm5.74-7.82c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.2-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"/>
</svg>
EOF

echo "== 4) HTML limpio: sin V32/V34, footer nuevo, sticky y burbuja =="
python3 - <<'PY'
from pathlib import Path
import re

ROOTS = [Path(".")]
files = [p for p in Path(".").rglob("*.html") if ".git" not in p.parts and "node_modules" not in p.parts]

footer = '''<footer class="footer v35-footer">
  <div class="container v35-footer-cta">
    <div>
      <span class="tag">NearTec</span>
      <h2>Tecnología para vender, operar y crecer con control.</h2>
      <p>Desarrollo, integración, automatización, punto de venta, nube, respaldo y soporte para empresas que necesitan soluciones reales, claras y mantenibles.</p>
    </div>
    <div class="v35-footer-actions">
      <a class="btn btn-primary" href="/cotizador/">Cotizar proyecto</a>
      <a class="btn btn-dark js-wa" href="https://wa.me/526644046194">WhatsApp</a>
    </div>
  </div>

  <div class="container footer-grid v35-footer-grid">
    <div>
      <img src="/assets/img/neartec-logo-clean.png" alt="NearTec" class="footer-logo-clean v35-footer-logo">
      <p class="legal">NearTec desarrolla e integra tecnología empresarial: web, apps, CRM, IA, CompuNegocio, CN7, nube, correo, hosting, VPS, FTP, soporte e integración fiscal.</p>
      <div class="v35-trust-row">
        <span>Desde 2004</span>
        <span>RFC NEA040929DKA</span>
        <span>Tijuana, B.C.</span>
      </div>
    </div>

    <div>
      <b>Soluciones</b>
      <a href="/web/">Web / Apps</a>
      <a href="/crm/">CRM / IA</a>
      <a href="/compunegocio/">CompuNegocio</a>
      <a href="/cn7/">CN7 / Nube</a>
      <a href="/soporte/">Soporte técnico</a>
    </div>

    <div>
      <b>Avanzar</b>
      <a href="/landing/">Landing de diagnóstico</a>
      <a href="/campanas/">Campañas / diagnóstico</a>
      <a href="/diagnostico/">Diagnóstico</a>
      <a href="/cotizador/">Cotizador</a>
      <a href="/contacto/">Contacto</a>
    </div>

    <div>
      <b>Contacto</b>
      <a href="tel:+526644046194">664 404 6194</a>
      <a href="mailto:meta@itimbre.com">meta@itimbre.com</a>
      <span>Benito Juárez 2034 601, Zona Centro, Tijuana, Baja California, México, C.P. 22000</span>
      <div class="footer-legal-links">
        <a href="/privacidad/">Política de privacidad</a>
        <a href="/terminos/">Términos y condiciones</a>
        <a href="/cookies/">Política de cookies</a>
        <a href="/aviso-legal/">Aviso legal</a>
      </div>
    </div>
  </div>

  <div class="container footer-disclaimer v35-footer-disclaimer">
    Los precios publicados son referencias base documentadas y pueden requerir validación por alcance, disponibilidad, impuestos y condiciones finales. Los proyectos de desarrollo, CRM, IA, integraciones, seguridad e infraestructura especial se cotizan después de diagnóstico.
  </div>
</footer>'''

mobile = '''<div class="mobile-cta v35-mobile-cta">
  <a class="btn btn-dark js-wa v35-wa-btn" href="https://wa.me/526644046194"><span class="v35-wa-icon"></span>WhatsApp</a>
  <a class="btn btn-primary" href="/cotizador/">Cotizar</a>
</div>
<a class="v35-neary-bubble" href="/contacto/" aria-label="Contactar a NearTec">
  <img src="/assets/icons/neartec-isotipo.png" alt="NearTec">
</a>'''

visual_home = '''<section id="v35-visual-system" class="section v35-visual-system">
  <div class="container">
    <span class="tag">Sistema NearTec</span>
    <h2>Una sola ruta para vender, operar y dar seguimiento.</h2>
    <p class="lead">Conectamos la parte digital, operativa y técnica de tu empresa para que cada solución tenga propósito: captar, controlar, respaldar, automatizar o mejorar la operación.</p>

    <div class="v35-visual-grid">
      <article class="v35-visual-card">
        <span class="v35-kicker">Proceso claro</span>
        <h3>De necesidad a implementación</h3>
        <div class="v35-timeline">
          <div><b>01</b><span>Entendemos qué necesitas resolver</span></div>
          <div><b>02</b><span>Definimos qué conviene implementar</span></div>
          <div><b>03</b><span>Cotizamos con alcance claro</span></div>
          <div><b>04</b><span>Instalamos, conectamos y damos soporte</span></div>
        </div>
      </article>

      <article class="v35-visual-card">
        <span class="v35-kicker">Precios base documentados</span>
        <h3>Lo que sí tiene referencia pública</h3>
        <div class="v35-bars">
          <div><span>CN 1–3</span><i style="--w:45%"></i><b>$450</b></div>
          <div><span>CN 4–8</span><i style="--w:40%"></i><b>$400</b></div>
          <div><span>CN 9+</span><i style="--w:35%"></i><b>$350</b></div>
          <div><span>CN7</span><i style="--w:55%"></i><b>$99 USD</b></div>
          <div><span>Nube</span><i style="--w:75%"></i><b>$149 USD</b></div>
        </div>
        <p class="micro">Web, apps, CRM, IA, integraciones e infraestructura especial se cotizan por alcance.</p>
      </article>

      <article class="v35-visual-card v35-ecosystem-card">
        <span class="v35-kicker">Ecosistema</span>
        <h3>Soluciones conectadas, no piezas sueltas</h3>
        <div class="v35-ecosystem">
          <span style="--x:8%;--y:16%">Web / Apps</span>
          <span style="--x:58%;--y:12%">CRM / IA</span>
          <span style="--x:18%;--y:58%">CompuNegocio</span>
          <span style="--x:62%;--y:62%">CN7 / Nube</span>
          <span style="--x:38%;--y:36%">Soporte</span>
          <svg viewBox="0 0 420 230" preserveAspectRatio="none" aria-hidden="true">
            <path d="M80 50 C180 20 230 25 310 52"/>
            <path d="M95 70 C150 125 150 150 130 170"/>
            <path d="M310 72 C250 118 250 154 315 170"/>
            <path d="M170 128 C210 112 240 112 270 128"/>
          </svg>
        </div>
      </article>

      <article class="v35-visual-card">
        <span class="v35-kicker">Cotización inteligente</span>
        <h3>Precio público o diagnóstico</h3>
        <div class="v35-split-list">
          <div><b>Precio base</b><span>CompuNegocio, CN7, timbres, soporte y desarrollo por hora.</span></div>
          <div><b>Por alcance</b><span>Web, apps, CRM, IA, automatización, seguridad e integraciones.</span></div>
        </div>
      </article>
    </div>
  </div>
</section>'''

for p in files:
    s = p.read_text(encoding="utf-8", errors="ignore")
    original = s

    # remove v32/v34 includes
    s = re.sub(r'\s*<link[^>]+/assets/css/v32-pro\.css[^>]*>\s*', '\n', s, flags=re.I)
    s = re.sub(r'\s*<link[^>]+/assets/css/v34-master-refresh\.css[^>]*>\s*', '\n', s, flags=re.I)
    s = re.sub(r'\s*<script[^>]+/assets/js/v32-pro\.js[^>]*>\s*</script>\s*', '\n', s, flags=re.I)
    s = re.sub(r'\s*<script[^>]+/assets/js/v34-master-refresh\.js[^>]*>\s*</script>\s*', '\n', s, flags=re.I)

    # ensure v33 CSS/JS once
    s = re.sub(r'\s*<link[^>]+/assets/css/v33-real-services\.css[^>]*>\s*', '\n', s, flags=re.I)
    s = re.sub(r'\s*<script[^>]+/assets/js/v33-real-services\.js[^>]*>\s*</script>\s*', '\n', s, flags=re.I)

    if '</head>' in s:
        s = s.replace('</head>', '  <link rel="stylesheet" href="/assets/css/v33-real-services.css">\n</head>', 1)

    # replace footer
    s = re.sub(r'<footer[\s\S]*?</footer>', footer, s, count=1, flags=re.I)

    # remove old mobile CTA and old bubbles if present
    s = re.sub(r'<div class="mobile-cta[\s\S]*?</div>', '', s, flags=re.I)
    s = re.sub(r'<a[^>]+class="[^"]*(?:neary|assistant|floating|fab)[^"]*"[\s\S]*?</a>', '', s, flags=re.I)

    if p.as_posix() in ["index.html", "landing/index.html", "campanas/index.html"]:
        s = re.sub(r'<section id="v35-visual-system"[\s\S]*?</section>', '', s, flags=re.I)
        s = s.replace('<footer', visual_home + '\n<footer', 1)

    # inject mobile/bubble + v33 js once
    if '</body>' in s:
        s = s.replace('</body>', mobile + '\n<script src="/assets/js/v33-real-services.js"></script>\n</body>', 1)

    # copy cleanup
    replacements = {
        'Lead Score': 'Prioridad de atención',
        'lead score': 'prioridad de atención',
        'Alta intención': 'Atención prioritaria',
        'Ruta técnica': 'Ruta recomendada',
        'Stack NearTec': 'Tecnología conectada',
        'Panel demostrativo': 'Ecosistema NearTec',
        'Ruta preparada en código': 'Ruta de implementación',
        'info@neartec.com': 'meta@itimbre.com',
        'info@itimbre.com': 'meta@itimbre.com',
        '664 630 0473': '664 404 6194',
        '526646300473': '526644046194'
    }
    for old, new in replacements.items():
        s = s.replace(old, new)

    if s != original:
        p.write_text(s, encoding="utf-8")

print(f"OK: {len(files)} HTML revisados.")
PY

echo "== 5) CSS directo en v33-real-services.css =="
python3 - <<'PY'
from pathlib import Path
import re

p = Path("assets/css/v33-real-services.css")
s = p.read_text(encoding="utf-8", errors="ignore") if p.exists() else ""

s = re.sub(r'/\* === NearTec V3\.5 Clean Source Upgrade === \*/[\s\S]*?/\* === END NearTec V3\.5 Clean Source Upgrade === \*/', '', s)

block = r'''
/* === NearTec V3.5 Clean Source Upgrade === */

:root{
  --v35-bg:#0b160f;
  --v35-bg-2:#122419;
  --v35-card:rgba(7,14,10,.62);
  --v35-card-strong:rgba(10,20,14,.84);
  --v35-line:rgba(190,255,92,.18);
  --v35-line-strong:rgba(190,255,92,.34);
  --v35-text:#f6faef;
  --v35-soft:#dce8d4;
  --v35-muted:#aebfaa;
  --v35-green:#bfff4f;
  --v35-green-2:#82ef49;
  --v35-glow:0 0 45px rgba(191,255,79,.24);
  --v35-shadow:0 22px 70px rgba(0,0,0,.34);
}

html{scroll-behavior:smooth}

body{
  background:
    radial-gradient(circle at 16% 14%, rgba(191,255,79,.18), transparent 28%),
    radial-gradient(circle at 78% 20%, rgba(119,235,72,.16), transparent 28%),
    radial-gradient(circle at 52% 86%, rgba(92,180,62,.12), transparent 28%),
    linear-gradient(180deg,#112216 0%, #0b160f 48%, #071009 100%) !important;
  color:var(--v35-text);
  overflow-x:hidden;
  padding-bottom:calc(108px + env(safe-area-inset-bottom));
}

body::before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:0;
  background:
    linear-gradient(rgba(191,255,79,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(191,255,79,.055) 1px, transparent 1px);
  background-size:48px 48px;
  mask-image:radial-gradient(circle at 50% 28%, black 0%, transparent 76%);
}

body > *{position:relative;z-index:1}

.v35-tech-bg{
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
  overflow:hidden;
}

.v35-tech-poly{
  position:absolute;
  width:var(--s);
  height:var(--s);
  border:1px solid rgba(191,255,79,.30);
  border-radius:16px;
  background:transparent;
  transform:rotate(var(--r));
  opacity:.68;
  box-shadow:0 0 24px rgba(191,255,79,.06);
  animation:v35Float var(--d) ease-in-out infinite alternate;
}

.v35-tech-poly:nth-child(3n){border-radius:50%}
.v35-tech-poly:nth-child(4n){clip-path:polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)}

@keyframes v35Float{
  from{transform:translate3d(0,0,0) rotate(var(--r));opacity:.20}
  to{transform:translate3d(var(--x),var(--y),0) rotate(calc(var(--r) + 120deg));opacity:.72}
}

h1,h2,h3{color:var(--v35-text);text-wrap:balance}
p,li,label,small,span{color:var(--v35-soft)}
.lead{color:var(--v35-soft)!important;line-height:1.68}
.micro,.muted,.legal{color:var(--v35-muted)!important}

.tag,.badge,[class*="tag"],[class*="eyebrow"]{
  letter-spacing:.17em;
  font-weight:900;
  color:var(--v35-green)!important;
  text-transform:uppercase;
}

.card,
.visual-card,
.form-panel,
.v35-visual-card,
.footer,
.v35-footer,
.mobile-cta{
  background:linear-gradient(180deg, rgba(12,25,16,.72), rgba(7,13,9,.88))!important;
  border:1px solid var(--v35-line)!important;
  box-shadow:var(--v35-shadow)!important;
  backdrop-filter:blur(12px);
}

.card,
.visual-card,
.form-panel,
.v35-visual-card{
  transition:transform .28s ease, border-color .28s ease, box-shadow .28s ease;
}

.card:hover,
.visual-card:hover,
.form-panel:hover,
.v35-visual-card:hover{
  transform:translateY(-4px);
  border-color:var(--v35-line-strong)!important;
  box-shadow:var(--v35-shadow), var(--v35-glow)!important;
}

.icon{
  background:rgba(191,255,79,.10)!important;
  color:var(--v35-green)!important;
  border:1px solid var(--v35-line)!important;
}

.v35-visual-system{
  position:relative;
  overflow:hidden;
}

.v35-visual-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:22px;
  margin-top:28px;
}

.v35-visual-card{
  position:relative;
  overflow:hidden;
  border-radius:28px;
  padding:28px;
}

.v35-kicker{
  display:inline-flex;
  color:var(--v35-green)!important;
  font-size:12px;
  font-weight:900;
  letter-spacing:.16em;
  text-transform:uppercase;
  margin-bottom:12px;
}

.v35-timeline{
  display:grid;
  gap:14px;
  margin-top:18px;
}

.v35-timeline div{
  display:grid;
  grid-template-columns:58px 1fr;
  gap:14px;
  align-items:center;
  padding:14px 0;
  border-bottom:1px solid rgba(255,255,255,.07);
}

.v35-timeline b{
  width:52px;
  height:52px;
  border-radius:16px;
  display:grid;
  place-items:center;
  color:#071009;
  background:linear-gradient(180deg,var(--v35-green),var(--v35-green-2));
  box-shadow:0 10px 28px rgba(191,255,79,.22);
}

.v35-bars{
  display:grid;
  gap:14px;
  margin-top:18px;
}

.v35-bars div{
  display:grid;
  grid-template-columns:96px 1fr 88px;
  gap:10px;
  align-items:center;
}

.v35-bars i{
  display:block;
  height:16px;
  border-radius:999px;
  background:rgba(255,255,255,.08);
  overflow:hidden;
  position:relative;
}

.v35-bars i::before{
  content:"";
  position:absolute;
  inset:0;
  width:var(--w);
  border-radius:999px;
  background:linear-gradient(90deg,var(--v35-green),var(--v35-green-2));
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .85s cubic-bezier(.22,1,.36,1);
  box-shadow:0 0 20px rgba(191,255,79,.32);
}

.v35-inview .v35-bars i::before{transform:scaleX(1)}
.v35-bars b{text-align:right;color:var(--v35-green)}

.v35-ecosystem{
  position:relative;
  min-height:260px;
  border-radius:24px;
  border:1px solid rgba(255,255,255,.07);
  background:
    linear-gradient(rgba(191,255,79,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(191,255,79,.04) 1px, transparent 1px),
    rgba(6,12,8,.58);
  background-size:28px 28px;
  overflow:hidden;
  margin-top:18px;
}

.v35-ecosystem span{
  position:absolute;
  left:var(--x);
  top:var(--y);
  z-index:2;
  padding:9px 12px;
  border-radius:999px;
  color:var(--v35-text)!important;
  background:rgba(5,10,7,.86);
  border:1px solid rgba(191,255,79,.24);
  font-weight:800;
  font-size:13px;
  box-shadow:0 10px 24px rgba(0,0,0,.28);
}

.v35-ecosystem span::before{
  content:"";
  display:inline-block;
  width:8px;
  height:8px;
  margin-right:8px;
  border-radius:999px;
  background:var(--v35-green);
  box-shadow:0 0 14px rgba(191,255,79,.44);
}

.v35-ecosystem svg{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  z-index:1;
}

.v35-ecosystem path{
  fill:none;
  stroke:rgba(191,255,79,.42);
  stroke-width:1.3;
  stroke-dasharray:7 10;
  animation:v35Dash 4.2s linear infinite;
}

@keyframes v35Dash{to{stroke-dashoffset:-80}}

.v35-split-list{
  display:grid;
  gap:14px;
  margin-top:18px;
}

.v35-split-list div{
  padding:16px;
  border-radius:20px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.07);
}

.v35-split-list b{
  display:block;
  color:var(--v35-green);
  margin-bottom:6px;
}

.v35-footer{
  border-radius:0!important;
  margin-top:60px;
  padding:42px 0 28px;
}

.v35-footer-cta{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:22px;
  align-items:center;
  margin-bottom:24px;
  padding:28px;
  border-radius:30px;
  background:linear-gradient(135deg, rgba(191,255,79,.12), rgba(4,10,6,.52));
  border:1px solid var(--v35-line);
}

.v35-footer-actions{
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  gap:12px;
}

.v35-footer-grid{
  gap:26px;
}

.v35-footer-logo{
  background:transparent!important;
  box-shadow:none!important;
  border:0!important;
  max-width:170px;
  object-fit:contain;
  mix-blend-mode:normal!important;
}

.v35-trust-row{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:16px;
}

.v35-trust-row span{
  padding:8px 11px;
  border-radius:999px;
  border:1px solid var(--v35-line);
  background:rgba(255,255,255,.035);
  font-size:13px;
  color:var(--v35-soft);
}

.v35-footer-disclaimer{
  margin-top:24px;
  font-size:13px;
  color:var(--v35-muted);
  line-height:1.6;
}

.v35-mobile-cta{
  position:fixed;
  left:14px;
  right:14px;
  bottom:calc(env(safe-area-inset-bottom) + 14px);
  z-index:80;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  padding:8px;
  border-radius:26px;
  background:rgba(4,9,6,.76)!important;
  backdrop-filter:blur(16px);
}

.v35-mobile-cta .btn{
  min-height:58px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  border-radius:20px!important;
  font-weight:900;
}

.v35-wa-icon{
  width:23px;
  height:23px;
  display:inline-block;
  color:var(--v35-green);
  background:currentColor;
  mask:url('/assets/icons/whatsapp-official.svg') center/contain no-repeat;
  -webkit-mask:url('/assets/icons/whatsapp-official.svg') center/contain no-repeat;
}

.v35-neary-bubble{
  position:fixed;
  right:18px;
  bottom:calc(env(safe-area-inset-bottom) + 108px);
  z-index:79;
  width:78px;
  height:78px;
  display:grid;
  place-items:center;
  border-radius:28px;
  background:rgba(2,6,4,.72);
  border:1px solid rgba(191,255,79,.28);
  backdrop-filter:blur(15px);
  box-shadow:0 18px 44px rgba(0,0,0,.36),0 0 42px rgba(191,255,79,.13);
  animation:v35Pulse 2.6s ease-in-out infinite;
}

.v35-neary-bubble::before{
  content:"";
  position:absolute;
  inset:-8px;
  border-radius:34px;
  border:1px solid rgba(191,255,79,.28);
  animation:v35Ring 2.6s ease-out infinite;
}

.v35-neary-bubble img{
  width:52px;
  height:52px;
  object-fit:contain;
  background:transparent!important;
  filter:drop-shadow(0 0 18px rgba(191,255,79,.32));
}

@keyframes v35Pulse{
  0%,100%{transform:translateY(0) scale(1)}
  50%{transform:translateY(-3px) scale(1.045)}
}

@keyframes v35Ring{
  from{opacity:.75;transform:scale(.88)}
  to{opacity:0;transform:scale(1.32)}
}

input,textarea,select{
  min-height:56px!important;
  border-radius:18px!important;
  border:1px solid rgba(191,255,79,.18)!important;
  background:rgba(4,10,6,.78)!important;
  color:var(--v35-text)!important;
}

textarea{min-height:128px!important}

input:focus,textarea:focus,select:focus{
  outline:none!important;
  border-color:rgba(191,255,79,.46)!important;
  box-shadow:0 0 0 3px rgba(191,255,79,.12)!important;
}

@media(max-width:900px){
  .v35-visual-grid,
  .v35-footer-cta{
    grid-template-columns:1fr;
  }

  .v35-footer-actions{
    justify-content:flex-start;
  }
}

@media(max-width:680px){
  .v35-visual-card,
  .v35-footer-cta{
    padding:20px;
  }

  .v35-bars div{
    grid-template-columns:82px 1fr 72px;
  }

  .v35-neary-bubble{
    width:70px;
    height:70px;
    right:14px;
  }

  .v35-neary-bubble img{
    width:46px;
    height:46px;
  }
}

@media(prefers-reduced-motion:reduce){
  .v35-tech-poly,
  .v35-neary-bubble,
  .v35-neary-bubble::before,
  .v35-ecosystem path{
    animation:none!important;
  }

  .v35-bars i::before{
    transform:scaleX(1)!important;
    transition:none!important;
  }
}

/* === END NearTec V3.5 Clean Source Upgrade === */
'''

p.write_text(s.strip() + "\n\n" + block.strip() + "\n", encoding="utf-8")
print("OK: CSS V3.5 integrado en v33-real-services.css")
PY

echo "== 6) JS directo en v33-real-services.js =="
python3 - <<'PY'
from pathlib import Path
import re

p = Path("assets/js/v33-real-services.js")
s = p.read_text(encoding="utf-8", errors="ignore") if p.exists() else ""

s = re.sub(r'/\* === NearTec V3\.5 Clean Source Upgrade === \*/[\s\S]*?/\* === END NearTec V3\.5 Clean Source Upgrade === \*/', '', s)

block = r'''
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
      ['Lead Score', 'Prioridad de atención'],
      ['Alta intención', 'Atención prioritaria'],
      ['Ruta técnica', 'Ruta recomendada'],
      ['Stack NearTec', 'Tecnología conectada'],
      ['Panel demostrativo', 'Ecosistema NearTec']
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
'''

p.write_text(s.strip() + "\n\n" + block.strip() + "\n", encoding="utf-8")
print("OK: JS V3.5 integrado en v33-real-services.js")
PY

echo "== 7) PDF: copy público, no interno =="
if [ -f assets/js/pdf-engine.js ]; then
  sed -i \
    -e "s/Lead Score/Prioridad de atención/g" \
    -e "s/lead score/prioridad de atención/g" \
    -e "s/Stack NearTec/Tecnología conectada/g" \
    -e "s/Panel demostrativo/Ecosistema NearTec/g" \
    assets/js/pdf-engine.js
fi

echo "== 8) package.json V3.5 =="
node - <<'NODE'
const fs = require('fs')
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
pkg.name = 'neartec-v35-clean-source-upgrade'
pkg.version = '3.5.0'
pkg.scripts ||= {}
pkg.scripts['predeploy:check'] ||= 'node scripts/preflight.js'
pkg.scripts['smoke'] ||= 'node scripts/smoke-test.mjs && node scripts/test-api-local.mjs'
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')
NODE

echo "== 9) Validar que no haya V32/V34 ni copy viejo público =="
if grep -RInE "v34-master-refresh|neartec-v34|v32-pro\.js|v32-pro\.css" *.html */index.html assets/css assets/js 2>/dev/null; then
  echo "ERROR: quedan rastros V32/V34."
  exit 1
fi

if grep -RInE "Panel demostrativo|Stack NearTec|Ruta preparada en código|Lead Score|info@neartec.com|info@itimbre.com|664 630|526646300473" \
  *.html */index.html assets api \
  --exclude-dir=node_modules \
  --exclude-dir=.git \
  --exclude-dir=.vercel \
  2>/dev/null; then
  echo "ERROR: queda copy interno/contacto viejo en fuente pública."
  exit 1
fi

echo "== 10) Validaciones =="
npm run predeploy:check
npm run smoke

echo "== 11) Commit / rebase / push =="
git status --short
git add -A
git commit -m "Apply NearTec V3.5 clean source upgrade" || echo "Sin cambios para commit."
git pull --rebase origin main
git push origin main

echo "== V3.5 lista =="
echo "Backup local: $BACKUP_DIR/neartec-v35-backup-$STAMP.tgz"
echo "Backup Git: $BACKUP_BRANCH"
echo "Ahora despliega con:"
echo "vercel --prod --logs"
