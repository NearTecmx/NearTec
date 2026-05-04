#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

echo "== NearTec V3 Visual Pro Upgrade sobre base recuperada =="

STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_BRANCH="backup/pre-v3-visual-pro-$STAMP"
BACKUP_FILE="$HOME/neartec-backups/neartec-before-v3-visual-pro-$STAMP.tgz"

echo "== 1) Verificar base correcta =="
for required in index.html assets/css/styles.css assets/js/app.js assets/js/pdf-engine.js api/lead.js package.json vercel.json; do
  if [ ! -f "$required" ]; then
    echo "ERROR: falta $required. No aplico cambios."
    exit 1
  fi
done

if ! grep -q "NearTec OS" index.html; then
  echo "ERROR: esta no parece ser la V3 recuperada actual. No aplico cambios."
  exit 1
fi

if ! grep -q "Neary AI" assets/js/app.js index.html 2>/dev/null; then
  echo "ERROR: no encontré Neary AI en la base actual. No aplico cambios."
  exit 1
fi

echo "== 2) Backup Git y físico =="
git branch "$BACKUP_BRANCH" || true
git push -u origin "$BACKUP_BRANCH" || true

mkdir -p "$HOME/neartec-backups"
tar --exclude='./node_modules' --exclude='./.git' --exclude='./.vercel' \
  -czf "$BACKUP_FILE" .

echo "Backup físico: $BACKUP_FILE"

echo "== 3) Reescribir CSS completo con visual premium =="
cat > assets/css/styles.css <<'EOF'
:root{
  --bg:#030804;
  --bg2:#071309;
  --bg3:#0d2113;
  --panel:rgba(7,17,10,.72);
  --panel2:rgba(11,26,15,.84);
  --panel3:rgba(17,39,23,.58);
  --line:rgba(197,255,67,.17);
  --line2:rgba(197,255,67,.36);
  --line3:rgba(197,255,67,.58);
  --green:#c5ff43;
  --green2:#7df04f;
  --green3:#1f8f40;
  --text:#f7ffef;
  --soft:#dcebd1;
  --muted:#9eb49a;
  --dark:#020602;
  --amber:#ffd76d;
  --cyan:#7fffd6;
  --shadow:0 28px 90px rgba(0,0,0,.42);
  --glow:0 0 52px rgba(197,255,67,.22);
  --radius:30px;
  --container:1220px;
  --nav:78px;
  --safe:108px;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  min-height:100vh;
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  color:var(--text);
  overflow-x:hidden;
  padding-bottom:calc(var(--safe) + env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at 20% 8%, rgba(197,255,67,.25), transparent 26%),
    radial-gradient(circle at 83% 16%, rgba(125,240,79,.16), transparent 28%),
    radial-gradient(circle at 50% 92%, rgba(20,142,61,.20), transparent 32%),
    linear-gradient(180deg,#0c1d10 0%, #061108 44%, #030804 100%);
}

body::before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:0;
  background:
    linear-gradient(rgba(197,255,67,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,255,67,.055) 1px, transparent 1px),
    radial-gradient(circle at 50% 18%, rgba(197,255,67,.10), transparent 44%);
  background-size:54px 54px,54px 54px,100% 100%;
  mask-image:linear-gradient(to bottom, black 0%, black 72%, transparent 100%);
}

body::after{
  content:"";
  position:fixed;
  inset:-20%;
  z-index:0;
  pointer-events:none;
  background:
    conic-gradient(from 160deg at 50% 50%, transparent 0deg, rgba(197,255,67,.10) 42deg, transparent 82deg, transparent 360deg);
  animation:ntScan 16s linear infinite;
  opacity:.56;
}

@keyframes ntScan{
  to{transform:rotate(360deg)}
}

body>*{position:relative;z-index:1}
a{color:inherit;text-decoration:none}
img{max-width:100%;height:auto}
button,input,select,textarea{font:inherit}
::selection{background:rgba(197,255,67,.28);color:var(--text)}

.container{
  width:min(var(--container),calc(100% - 32px));
  margin:auto;
}

.skip{
  position:absolute;
  left:-999px;
  top:auto;
}
.skip:focus{
  left:16px;
  top:16px;
  z-index:999;
  background:var(--green);
  color:#061108;
  padding:10px 14px;
  border-radius:14px;
}

.tech-bg{
  position:fixed;
  inset:0;
  width:100%;
  height:100%;
  pointer-events:none;
  z-index:0;
  opacity:.9;
  mix-blend-mode:screen;
}

.noise{
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
  opacity:.26;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255,255,255,.07) 0 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(197,255,67,.09) 0 1px, transparent 1px);
  background-size:26px 26px,34px 34px;
  mask-image:linear-gradient(to bottom, black, transparent 84%);
}

.grid-bg{
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
  background:
    linear-gradient(115deg, transparent 0 43%, rgba(197,255,67,.08) 44%, transparent 45% 100%),
    linear-gradient(245deg, transparent 0 52%, rgba(125,240,79,.06) 53%, transparent 54% 100%);
  opacity:.78;
}

/* NAV */
.nav{
  position:sticky;
  top:0;
  z-index:60;
  min-height:var(--nav);
  background:linear-gradient(180deg, rgba(3,8,4,.88), rgba(3,8,4,.58));
  border-bottom:1px solid rgba(197,255,67,.18);
  backdrop-filter:blur(18px);
}

.nav-inner{
  min-height:var(--nav);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
}

.brand{
  display:flex;
  align-items:center;
  min-width:138px;
}

.brand img{
  width:156px;
  max-height:58px;
  object-fit:contain;
  background:transparent!important;
  filter:drop-shadow(0 0 20px rgba(197,255,67,.10));
}

.nav-links{
  display:flex;
  align-items:center;
  gap:4px;
  padding:7px;
  border:1px solid rgba(197,255,67,.12);
  border-radius:999px;
  background:rgba(255,255,255,.035);
}

.nav-links a{
  color:var(--soft);
  font-weight:850;
  font-size:13.5px;
  letter-spacing:-.01em;
  padding:10px 12px;
  border-radius:999px;
}

.nav-links a:hover,
.nav-links a.active{
  color:#061108;
  background:linear-gradient(180deg,var(--green),var(--green2));
}

.nav-actions{
  display:flex;
  align-items:center;
  gap:10px;
}

.menu-btn{
  display:none;
  border:1px solid var(--line);
  border-radius:16px;
  width:46px;
  height:46px;
  color:var(--text);
  background:rgba(255,255,255,.04);
}

/* TYPOGRAPHY */
.tag{
  display:inline-flex;
  align-items:center;
  gap:10px;
  color:var(--green);
  text-transform:uppercase;
  letter-spacing:.17em;
  font-weight:950;
  font-size:12px;
  margin-bottom:14px;
}

.tag::before{
  content:"";
  width:10px;
  height:10px;
  border-radius:999px;
  background:var(--green);
  box-shadow:0 0 18px rgba(197,255,67,.64);
}

h1,h2,h3{
  margin:0;
  color:var(--text);
  letter-spacing:-.055em;
  text-wrap:balance;
}

h1{
  font-size:clamp(3.6rem,8.6vw,8.2rem);
  line-height:.84;
  margin-bottom:22px;
}

h2{
  font-size:clamp(2.15rem,5.1vw,4.6rem);
  line-height:.92;
  margin-bottom:14px;
}

h3{
  font-size:clamp(1.28rem,2.35vw,2.05rem);
  line-height:1.02;
  margin-bottom:10px;
}

p,li,label,span,small{
  color:var(--soft);
}

p,li,label,input,textarea,select{
  font-size:clamp(15.5px,1.32vw,18px);
  line-height:1.68;
}

.lead{
  color:#edf9e4;
  font-size:clamp(18px,2.15vw,24px);
  line-height:1.56;
  max-width:800px;
}

.accent{
  color:var(--green);
  text-shadow:0 0 40px rgba(197,255,67,.28);
}

.muted,
small{
  color:var(--muted);
}

/* BUTTONS */
.btn{
  min-height:50px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  border:1px solid var(--line);
  border-radius:999px;
  padding:13px 18px;
  color:var(--text);
  background:rgba(255,255,255,.04);
  font-weight:950;
  cursor:pointer;
  box-shadow:none;
  transition:transform .22s ease, border-color .22s ease, box-shadow .22s ease, background .22s ease;
}

.btn:hover{
  transform:translateY(-2px);
  border-color:var(--line2);
  box-shadow:0 16px 38px rgba(0,0,0,.28);
}

.btn-primary{
  background:
    linear-gradient(180deg, rgba(255,255,255,.28), transparent 36%),
    linear-gradient(180deg,var(--green),var(--green2));
  color:#061108;
  border-color:rgba(197,255,67,.76);
  box-shadow:0 18px 44px rgba(197,255,67,.19);
}

.btn-dark{
  background:rgba(2,7,3,.76);
  color:var(--text);
}

.btn-ghost{
  background:rgba(255,255,255,.035);
}

.btn-small{
  min-height:42px;
  padding:10px 14px;
  font-size:14px;
}

.hero-actions,
.button-row{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-top:24px;
}

/* HERO */
.hero{
  padding:88px 0 62px;
  position:relative;
  overflow:hidden;
}

.hero::before{
  content:"";
  position:absolute;
  width:min(780px,90vw);
  height:min(780px,90vw);
  right:-22vw;
  top:-14vw;
  border-radius:50%;
  background:
    radial-gradient(circle, rgba(197,255,67,.18), transparent 60%),
    repeating-conic-gradient(from 0deg, rgba(197,255,67,.12) 0 2deg, transparent 2deg 10deg);
  filter:blur(.2px);
  opacity:.78;
  animation:ntRotate 36s linear infinite;
}

@keyframes ntRotate{
  to{transform:rotate(360deg)}
}

.hero-grid{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:34px;
  align-items:center;
}

.proof-row{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:26px;
}

.proof-row span{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:9px 12px;
  border:1px solid rgba(197,255,67,.18);
  border-radius:999px;
  background:rgba(255,255,255,.04);
  color:#eaf7df;
  font-size:13px;
  font-weight:800;
}

.proof-row span::before{
  content:"";
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--green);
}

/* PANELS / CARDS */
.visual-card,
.card,
.form-panel{
  position:relative;
  overflow:hidden;
  border-radius:var(--radius);
  background:
    linear-gradient(180deg,rgba(255,255,255,.055),transparent 42%),
    linear-gradient(180deg,var(--panel),rgba(3,8,4,.88));
  border:1px solid var(--line);
  box-shadow:var(--shadow);
  backdrop-filter:blur(16px);
}

.visual-card::before,
.card::before,
.form-panel::before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  background:
    radial-gradient(circle at 18% 12%, rgba(197,255,67,.16), transparent 34%),
    linear-gradient(135deg, rgba(197,255,67,.08), transparent 38%);
  opacity:.78;
}

.visual-card>*,
.card>*,
.form-panel>*{
  position:relative;
  z-index:1;
}

.visual-card{
  padding:28px;
}

.card{
  padding:25px;
  min-height:255px;
  transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease;
}

.card:hover,
.visual-card:hover,
.form-panel:hover{
  transform:translateY(-5px);
  border-color:var(--line2);
  box-shadow:var(--shadow),var(--glow);
}

.card-link{
  display:inline-flex;
  margin-top:14px;
  color:var(--green);
  font-weight:950;
}

.icon{
  width:62px;
  height:62px;
  display:grid;
  place-items:center;
  border-radius:22px;
  margin-bottom:18px;
  background:
    radial-gradient(circle at 30% 20%, rgba(255,255,255,.24), transparent 48%),
    linear-gradient(180deg,rgba(197,255,67,.14),rgba(197,255,67,.04));
  border:1px solid rgba(197,255,67,.24);
  box-shadow:0 14px 34px rgba(0,0,0,.24),0 0 28px rgba(197,255,67,.08);
}

.icon img{
  width:31px;
  height:31px;
  object-fit:contain;
  filter:drop-shadow(0 0 12px rgba(197,255,67,.25));
}

/* COMMAND VISUAL */
.command{
  min-height:540px;
  display:grid;
  grid-template-rows:auto 1fr auto;
  gap:18px;
}

.command-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:16px;
}

.iso-box{
  width:82px;
  height:82px;
  display:grid;
  place-items:center;
  border-radius:26px;
  background:
    radial-gradient(circle at 45% 35%, rgba(197,255,67,.20), transparent 56%),
    rgba(2,8,4,.82);
  border:1px solid rgba(197,255,67,.28);
  box-shadow:0 0 40px rgba(197,255,67,.12);
}

.iso-box img{
  width:62px;
  height:62px;
  object-fit:contain;
  filter:drop-shadow(0 0 20px rgba(197,255,67,.32));
}

.orbit{
  position:relative;
  min-height:326px;
  border-radius:28px;
  overflow:hidden;
  background:
    radial-gradient(circle at 50% 50%, rgba(197,255,67,.12), transparent 46%),
    linear-gradient(rgba(197,255,67,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,255,67,.05) 1px, transparent 1px),
    rgba(0,0,0,.24);
  background-size:100% 100%,32px 32px,32px 32px,100% 100%;
  border:1px solid rgba(197,255,67,.16);
}

.orbit::before{
  content:"";
  position:absolute;
  inset:34px;
  border:1px solid rgba(197,255,67,.22);
  border-radius:50%;
  animation:ntPulseOrbit 4s ease-in-out infinite;
}

@keyframes ntPulseOrbit{
  50%{transform:scale(1.04);opacity:.62}
}

.orbit svg{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
}

.orbit path{
  fill:none;
  stroke:rgba(197,255,67,.52);
  stroke-width:1.35;
  stroke-dasharray:8 12;
  animation:ntDash 8s linear infinite;
}

@keyframes ntDash{
  to{stroke-dashoffset:-220}
}

.node{
  position:absolute;
  z-index:2;
  padding:10px 13px;
  border-radius:999px;
  background:rgba(1,6,3,.86);
  border:1px solid rgba(197,255,67,.30);
  box-shadow:0 14px 34px rgba(0,0,0,.32),0 0 18px rgba(197,255,67,.09);
  color:var(--text);
  font-size:13px;
  font-weight:950;
  white-space:nowrap;
}

.node::before{
  content:"";
  width:8px;
  height:8px;
  display:inline-block;
  margin-right:8px;
  border-radius:999px;
  background:var(--green);
  box-shadow:0 0 14px rgba(197,255,67,.65);
}

/* SECTIONS */
.section{
  padding:78px 0;
}

.section-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:26px;
  margin-bottom:30px;
}

.section-head p{
  max-width:660px;
}

.grid-2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:22px;
}

.grid-3{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
}

/* PROCESS */
.timeline{
  display:grid;
  gap:14px;
  margin-top:22px;
}

.timeline-item{
  display:grid;
  grid-template-columns:60px 1fr;
  gap:16px;
  align-items:start;
  padding:17px;
  border-radius:24px;
  border:1px solid rgba(255,255,255,.08);
  background:rgba(255,255,255,.035);
}

.timeline-item b{
  width:54px;
  height:54px;
  display:grid;
  place-items:center;
  border-radius:18px;
  background:linear-gradient(180deg,var(--green),var(--green2));
  color:#061108;
  box-shadow:0 14px 34px rgba(197,255,67,.16);
}

.timeline-item h3{
  font-size:1.25rem;
  margin-bottom:3px;
}

/* BARS / GRAPHS */
.bars{
  display:grid;
  gap:16px;
  margin-top:22px;
}

.bar-row{
  display:grid;
  grid-template-columns:88px 1fr 88px;
  gap:12px;
  align-items:center;
}

.bar-row>span{
  color:#eef9e5;
  font-weight:850;
}

.bar-row strong{
  text-align:right;
  color:var(--green);
  font-size:15px;
}

.bar-track{
  height:18px;
  overflow:hidden;
  border-radius:999px;
  background:rgba(255,255,255,.075);
  border:1px solid rgba(255,255,255,.07);
}

.bar-track span{
  display:block;
  width:var(--w);
  height:100%;
  border-radius:999px;
  background:
    linear-gradient(90deg,var(--green),var(--green2)),
    linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);
  transform:scaleX(.08);
  transform-origin:left;
  transition:transform 1s cubic-bezier(.22,1,.36,1);
  box-shadow:0 0 22px rgba(197,255,67,.35);
}

.inview .bar-track span,
.visual-card.inview .bar-track span,
.card.inview .bar-track span{
  transform:scaleX(1);
}

/* PAGE HERO / SERVICE */
.page-hero{
  padding:74px 0 42px;
}

.page-hero h1{
  max-width:960px;
}

.split,
.service-hero{
  display:grid;
  grid-template-columns:1fr .88fr;
  gap:24px;
  align-items:start;
}

/* FORMS / QUOTE */
.form-panel{
  padding:28px;
}

.form-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}

.field{
  display:grid;
  gap:7px;
  margin-bottom:12px;
}

.field.full{
  grid-column:1/-1;
}

input,
select,
textarea{
  width:100%;
  min-height:57px;
  border-radius:18px;
  padding:13px 15px;
  color:var(--text);
  border:1px solid rgba(197,255,67,.18);
  background:rgba(2,7,3,.72);
  outline:0;
}

textarea{
  min-height:132px;
  resize:vertical;
}

input:focus,
select:focus,
textarea:focus{
  border-color:rgba(197,255,67,.54);
  box-shadow:0 0 0 4px rgba(197,255,67,.10);
}

.check{
  display:flex;
  align-items:flex-start;
  gap:10px;
  padding:13px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.08);
  background:rgba(255,255,255,.035);
  cursor:pointer;
}

.check input{
  width:auto;
  min-height:auto;
  margin-top:5px;
}

.check-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  margin-bottom:18px;
}

.quote-summary{
  position:sticky;
  top:calc(var(--nav) + 20px);
  padding:28px;
}

.priority-pill{
  display:inline-flex;
  margin:8px 0 12px;
  padding:9px 12px;
  border-radius:999px;
  border:1px solid var(--line2);
  color:var(--green);
  background:rgba(197,255,67,.08);
  font-weight:950;
}

.priority-pill.hot{
  color:#061108;
  background:linear-gradient(180deg,var(--green),var(--green2));
}

.notice{
  padding:14px;
  border-radius:18px;
  border:1px solid rgba(197,255,67,.18);
  background:rgba(197,255,67,.07);
}

.summary-numbers{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  margin:18px 0;
}

.summary-numbers div{
  padding:15px;
  border-radius:20px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
}

.summary-numbers small{
  display:block;
  margin-bottom:5px;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.12em;
}

.summary-numbers b{
  color:var(--green);
  font-size:20px;
}

.line-items{
  display:grid;
  gap:8px;
  margin:14px 0;
}

.line-items div{
  display:flex;
  justify-content:space-between;
  gap:12px;
  padding:10px 0;
  border-bottom:1px solid rgba(255,255,255,.075);
}

.line-items b{
  color:var(--green);
  white-space:nowrap;
}

.module-tags{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin:12px 0;
}

.module-tags span{
  padding:8px 10px;
  border-radius:999px;
  color:var(--soft);
  background:rgba(255,255,255,.04);
  border:1px solid rgba(197,255,67,.14);
}

/* ASSISTANT */
.assist{
  position:fixed;
  right:18px;
  bottom:calc(env(safe-area-inset-bottom) + 112px);
  z-index:90;
}

.assist-trigger{
  width:76px;
  height:76px;
  display:grid;
  place-items:center;
  border:1px solid rgba(197,255,67,.34);
  border-radius:28px;
  background:rgba(2,7,3,.76);
  backdrop-filter:blur(18px);
  box-shadow:0 24px 56px rgba(0,0,0,.38),0 0 44px rgba(197,255,67,.16);
  cursor:pointer;
  animation:ntAssistPulse 2.7s ease-in-out infinite;
}

.assist-trigger::before{
  content:"";
  position:absolute;
  inset:-8px;
  border-radius:36px;
  border:1px solid rgba(197,255,67,.28);
  animation:ntAssistRing 2.7s ease-out infinite;
}

.assist-trigger img{
  width:54px;
  height:54px;
  object-fit:contain;
  filter:drop-shadow(0 0 18px rgba(197,255,67,.32));
}

@keyframes ntAssistPulse{
  50%{transform:translateY(-4px) scale(1.045)}
}

@keyframes ntAssistRing{
  from{opacity:.72;transform:scale(.88)}
  to{opacity:0;transform:scale(1.32)}
}

.assist-panel{
  position:absolute;
  right:0;
  bottom:92px;
  width:min(404px,calc(100vw - 28px));
  overflow:hidden;
  border-radius:30px;
  background:rgba(2,7,3,.94);
  border:1px solid rgba(197,255,67,.30);
  box-shadow:var(--shadow);
  backdrop-filter:blur(20px);
  display:none;
}

.assist-panel.open{
  display:block;
}

.assist-panel header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:14px;
  padding:17px;
  border-bottom:1px solid rgba(255,255,255,.08);
}

.assist-panel header>div{
  display:flex;
  align-items:center;
  gap:12px;
}

.assist-panel header img{
  width:44px;
  height:44px;
  object-fit:contain;
}

.assist-panel small{
  display:block;
  margin-top:2px;
}

.assist-body{
  display:grid;
  gap:10px;
  padding:17px;
}

.assist-option{
  width:100%;
  text-align:left;
  padding:14px 15px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.08);
  color:var(--text);
  background:rgba(255,255,255,.045);
  cursor:pointer;
  font-weight:850;
}

.assist-option:hover{
  border-color:var(--line2);
  background:rgba(197,255,67,.075);
}

.wa-icon{
  width:22px;
  height:22px;
  display:inline-block;
  color:currentColor;
  background:currentColor;
  mask:url('/assets/icons/whatsapp-official.svg') center/contain no-repeat;
  -webkit-mask:url('/assets/icons/whatsapp-official.svg') center/contain no-repeat;
}

/* MOBILE CTA */
.mobile-cta{
  position:fixed;
  left:14px;
  right:14px;
  bottom:calc(env(safe-area-inset-bottom) + 14px);
  z-index:80;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  padding:8px;
  border-radius:28px;
  background:rgba(2,7,3,.78);
  border:1px solid rgba(197,255,67,.20);
  backdrop-filter:blur(18px);
  box-shadow:0 20px 48px rgba(0,0,0,.32);
}

.mobile-cta .btn{
  min-height:58px;
}

/* FOOTER */
.footer{
  padding:74px 0 30px;
  border-top:1px solid rgba(197,255,67,.18);
  background:
    radial-gradient(circle at 18% 4%, rgba(197,255,67,.14), transparent 34%),
    linear-gradient(180deg,rgba(6,15,8,.58),rgba(2,7,3,.98));
}

.footer-cta{
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:22px;
  align-items:center;
  margin-bottom:26px;
  padding:28px;
  border-radius:32px;
  border:1px solid rgba(197,255,67,.20);
  background:
    linear-gradient(135deg, rgba(197,255,67,.12), rgba(255,255,255,.035)),
    rgba(255,255,255,.025);
  box-shadow:var(--shadow);
}

.footer-grid{
  display:grid;
  grid-template-columns:1.25fr 1fr 1fr 1fr;
  gap:26px;
}

.footer-logo{
  width:176px;
  max-height:76px;
  object-fit:contain;
  background:transparent!important;
  filter:drop-shadow(0 0 18px rgba(197,255,67,.08));
}

.footer a{
  display:block;
  color:var(--soft);
  margin:9px 0;
}

.footer a:hover{
  color:var(--green);
}

.trust-row{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:14px;
}

.trust-row span{
  padding:8px 10px;
  border-radius:999px;
  border:1px solid rgba(197,255,67,.16);
  background:rgba(255,255,255,.035);
  color:var(--soft);
  font-size:13px;
}

.disclaimer{
  margin-top:25px;
  color:var(--muted);
  font-size:13px;
  line-height:1.6;
}

.toast{
  position:fixed;
  left:50%;
  bottom:calc(env(safe-area-inset-bottom) + 96px);
  transform:translateX(-50%) translateY(20px);
  z-index:120;
  opacity:0;
  pointer-events:none;
  padding:12px 16px;
  border-radius:999px;
  background:rgba(2,7,3,.92);
  border:1px solid var(--line2);
  color:var(--text);
  box-shadow:var(--shadow);
  transition:.25s ease;
}

.toast.show{
  opacity:1;
  transform:translateX(-50%) translateY(0);
}

/* ROUTE / LANDING HELPERS */
.route-map,
.metric-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}

.metric-grid div{
  padding:18px;
  border-radius:22px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
}

.metric{
  color:var(--green);
  font-size:clamp(2rem,4vw,4rem);
  font-weight:950;
  line-height:1;
}

/* RESPONSIVE */
@media(max-width:1020px){
  .hero-grid,
  .grid-2,
  .split,
  .service-hero,
  .footer-cta{
    grid-template-columns:1fr;
  }

  .grid-3,
  .route-map,
  .metric-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .nav-links{
    display:none;
    position:absolute;
    left:16px;
    right:16px;
    top:calc(var(--nav) + 10px);
    padding:14px;
    border-radius:24px;
    background:rgba(2,7,3,.96);
    border:1px solid var(--line);
    box-shadow:var(--shadow);
  }

  .nav-links.open{
    display:grid;
  }

  .menu-btn{
    display:grid;
    place-items:center;
  }

  .quote-summary{
    position:relative;
    top:auto;
  }
}

@media(max-width:680px){
  :root{
    --nav:82px;
    --safe:110px;
  }

  .container{
    width:min(100% - 28px,var(--container));
  }

  .hero{
    padding:54px 0 36px;
  }

  h1{
    font-size:clamp(3rem,13vw,4.85rem);
    line-height:.88;
  }

  h2{
    font-size:clamp(2rem,10vw,3.4rem);
  }

  .lead{
    font-size:18px;
  }

  .grid-3,
  .grid-2,
  .route-map,
  .metric-grid,
  .form-grid,
  .check-grid,
  .footer-grid,
  .summary-numbers{
    grid-template-columns:1fr;
  }

  .section{
    padding:52px 0;
  }

  .section-head{
    display:block;
  }

  .brand img{
    width:138px;
  }

  .command{
    min-height:auto;
  }

  .orbit{
    min-height:284px;
  }

  .node{
    font-size:12px;
    padding:8px 10px;
  }

  .bar-row{
    grid-template-columns:76px 1fr 82px;
  }

  .assist{
    right:14px;
  }

  .assist-trigger{
    width:66px;
    height:66px;
    border-radius:24px;
  }

  .assist-trigger img{
    width:48px;
    height:48px;
  }

  .assist-panel{
    bottom:82px;
  }

  .footer-cta{
    padding:22px;
  }

  .mobile-cta .btn{
    font-size:15px;
    padding:12px;
  }
}

@media(prefers-reduced-motion:reduce){
  *,
  *::before,
  *::after{
    animation:none!important;
    transition:none!important;
    scroll-behavior:auto!important;
  }

  .tech-bg{
    display:none;
  }
}
EOF

echo "== 4) Pulir copy público sin cambiar estructura =="
python3 - <<'PY'
from pathlib import Path
import re

replacements = {
  "Separar lo que tiene precio base documentado de lo que requiere diagnóstico permite cotizar sin confundir al cliente.": "Mostramos precios base cuando existen y te guiamos con diagnóstico cuando la solución requiere alcance personalizado.",
  "Convierte piezas sueltas en una solución tecnológica real.": "Convierte herramientas sueltas en una operación conectada.",
  "Empieza con diagnóstico, cotización o WhatsApp. NearTec te ayuda a decidir qué implementar primero.": "Empieza con diagnóstico, cotización o WhatsApp. NearTec te ayuda a elegir una ruta clara para vender, operar y crecer.",
  "Web, operación, nube y soporte trabajando como una sola ruta.": "Ventas, operación, nube y soporte conectados en una misma ruta tecnológica.",
}

files = [Path("index.html")] + list(Path(".").glob("*/index.html"))

for p in files:
    if ".git" in p.parts or "node_modules" in p.parts:
        continue
    s = p.read_text(encoding="utf-8", errors="ignore")
    original = s
    for old, new in replacements.items():
        s = s.replace(old, new)

    # Aumentar sensación de venta en cards de servicio sin meter texto interno.
    s = s.replace(
        "Separar lo que tiene precio base documentado de lo que requiere diagnóstico permite cotizar sin confundir al cliente.",
        "Mostramos precios base cuando existen y te guiamos con diagnóstico cuando la solución requiere alcance personalizado."
    )

    if s != original:
        p.write_text(s, encoding="utf-8")

print("OK: copy público pulido.")
PY

echo "== 5) Versionar CSS/JS para romper caché =="
python3 - <<PY
from pathlib import Path
stamp = "$STAMP"
files = [Path("index.html")] + list(Path(".").glob("*/index.html"))
for p in files:
    if ".git" in p.parts or "node_modules" in p.parts:
        continue
    s = p.read_text(encoding="utf-8", errors="ignore")
    s = re.sub(r'/assets/css/styles\.css(?:\?v=[^"]*)?', f'/assets/css/styles.css?v={stamp}', s)
    s = re.sub(r'/assets/js/app\.js(?:\?v=[^"]*)?', f'/assets/js/app.js?v={stamp}', s)
    s = re.sub(r'/assets/js/pdf-engine\.js(?:\?v=[^"]*)?', f'/assets/js/pdf-engine.js?v={stamp}', s)
    p.write_text(s, encoding="utf-8")
PY

echo "== 6) Agregar validación visual local =="
cat > scripts/visual-check.mjs <<'EOF'
import fs from 'node:fs'

const css = fs.readFileSync('assets/css/styles.css', 'utf8')
const html = fs.readFileSync('index.html', 'utf8')
const js = fs.readFileSync('assets/js/app.js', 'utf8')

const requiredCss = [
  '--green:#c5ff43',
  'ntScan',
  'ntRotate',
  'assist-panel',
  'footer-cta',
  'command',
  'orbit',
  'bar-track'
]

for (const term of requiredCss) {
  if (!css.includes(term)) throw new Error(`CSS visual pro no contiene: ${term}`)
}

for (const term of ['NearTec OS', 'Neary AI', 'Cotizar proyecto', 'CompuNegocio', 'CN7']) {
  if (!html.includes(term) && !js.includes(term)) throw new Error(`No se encontró marcador visual/comercial: ${term}`)
}

console.log('Visual check OK: CSS/HTML/JS contienen actualización visual V3 Pro.')
EOF

echo "== 7) Validaciones =="
npm run verify
node scripts/visual-check.mjs

echo "== 8) Validar fuente pública limpia =="
if grep -RInE "Panel demostrativo|Stack NearTec|Lead Score|Filtro comercial|Regla comercial|internamente|info@neartec.com|info@itimbre.com|664 630" \
  index.html landing campanas diagnostico cotizador compunegocio cn7 crm web soporte contacto soluciones privacidad terminos cookies aviso-legal assets/css assets/js \
  --exclude-dir=node_modules \
  --exclude-dir=.git \
  --exclude-dir=.vercel \
  2>/dev/null; then
  echo "ERROR: quedaron textos internos o contactos viejos."
  exit 1
else
  echo "OK: fuente pública limpia."
fi

echo "== 9) Commit / push =="
git status --short
git add -A
git commit -m "Upgrade NearTec V3 visual system after recovery" || echo "Sin cambios para commit."
git pull --rebase origin main
git push origin main

echo "== 10) Deploy producción =="
if vercel --prod --logs --force; then
  export PROJECT_URL="https://neartecmx.vercel.app"
  bash scripts/vercel-prod-test.sh
  echo $?
else
  echo "DEPLOY FALLÓ: no ejecuto prod-test porque probaría la producción anterior."
  exit 1
fi

echo "== V3 Visual Pro aplicado =="
echo "Backup Git: $BACKUP_BRANCH"
echo "Backup físico: $BACKUP_FILE"
