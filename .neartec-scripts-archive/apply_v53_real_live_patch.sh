#!/usr/bin/env bash
set -euo pipefail

echo "== NearTec V5.3 REAL LIVE PATCH =="

cd ~/neartec-site || exit 1

echo "== 1) Buscar textos vivos en el repo =="
MATCHES="$(grep -RInE "Panel demostrativo|Stack NearTec activo|664 630 0473|664-630-04-73|526646300473|info@neartec.com|info@itimbre.com" . \
  --exclude-dir=node_modules \
  --exclude-dir=.next \
  --exclude-dir=.git \
  --exclude-dir=.vercel \
  --exclude-dir=dist \
  --exclude-dir=out \
  2>/dev/null || true)"

if [ -z "$MATCHES" ]; then
  echo "ERROR: No encontré los textos viejos dentro de este repo local."
  echo "Eso significa que ~/neartec-site NO es la fuente real de la producción actual."
  echo ""
  echo "Abre la carpeta exacta desde donde desplegaste la versión que sí te gustó."
  echo "Luego vuelve a correr este script ahí."
  exit 1
fi

echo "$MATCHES"

echo "== 2) Backup Git =="
BACKUP_BRANCH="backup/pre-v53-real-live-$(date +%Y%m%d-%H%M%S)"
git branch "$BACKUP_BRANCH" || true
git push -u origin "$BACKUP_BRANCH" || true

echo "== 3) Reemplazar contacto y copy interno en archivos reales =="
python3 - <<'PY'
from pathlib import Path

roots = [Path(".")]
skip_dirs = {".git", ".next", "node_modules", ".vercel", "dist", "out"}

replacements = {
    "664 630 0473": "664 404 6194",
    "664-630-04-73": "664 404 6194",
    "526646300473": "526644046194",
    "info@neartec.com": "meta@itimbre.com",
    "info@itimbre.com": "meta@itimbre.com",
    "Panel demostrativo": "Ecosistema operativo",
    "Stack NearTec activo": "Tecnología conectada",
}

allowed_suffixes = {
    ".tsx", ".ts", ".jsx", ".js", ".json", ".md", ".html", ".css", ".scss", ".mjs", ".cjs"
}

changed = []

for path in Path(".").rglob("*"):
    if not path.is_file():
        continue

    parts = set(path.parts)
    if parts & skip_dirs:
        continue

    if path.suffix not in allowed_suffixes:
        continue

    try:
        text = path.read_text()
    except UnicodeDecodeError:
        continue

    new = text
    for old, value in replacements.items():
        new = new.replace(old, value)

    if new != text:
        path.write_text(new)
        changed.append(str(path))

if not changed:
    raise SystemExit("No se modificó ningún archivo. Revisa que estés en el repo correcto.")

print("Archivos modificados:")
for file in changed:
    print("-", file)
PY

echo "== 4) Agregar animaciones reales sobre el diseño actual =="
if [ ! -f app/globals.css ]; then
  echo "ERROR: No existe app/globals.css. Revisa estructura del proyecto."
  exit 1
fi

cat >> app/globals.css <<'CSS'

/* === NearTec V5.3 REAL LIVE MOTION PATCH === */

:root {
  --nt-v53-green: #78ff39;
  --nt-v53-green-2: #19c64d;
  --nt-v53-dark: #050f0a;
  --nt-v53-glow: 0 0 42px rgba(120, 255, 57, .28);
}

/* Hero / secciones con vida visual */
main section {
  position: relative;
}

main section:first-of-type {
  overflow: hidden;
  isolation: isolate;
}

main section:first-of-type::before {
  content: "";
  position: absolute;
  inset: -15%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% 18%, rgba(120,255,57,.18), transparent 25%),
    radial-gradient(circle at 82% 30%, rgba(25,198,77,.12), transparent 28%),
    linear-gradient(rgba(120,255,57,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120,255,57,.045) 1px, transparent 1px);
  background-size: auto, auto, 74px 74px, 74px 74px;
  animation: ntV53GridDrift 12s linear infinite;
}

main section:first-of-type > * {
  position: relative;
  z-index: 1;
}

/* Entrada suave general */
main section,
main article,
main [class*="card"],
main [class*="service"],
main [class*="feature"],
main [class*="price"],
main [class*="solution"] {
  animation: ntV53Reveal .72s cubic-bezier(.22, 1, .36, 1) both;
  animation-delay: calc(var(--nt-delay, 0) * 50ms);
}

/* Cards con glow y elevación */
main article,
main [class*="card"],
main [class*="service"],
main [class*="feature"],
main [class*="price"],
main [class*="solution"] {
  transition:
    transform .25s ease,
    box-shadow .25s ease,
    border-color .25s ease,
    filter .25s ease;
  will-change: transform;
}

main article:hover,
main [class*="card"]:hover,
main [class*="service"]:hover,
main [class*="feature"]:hover,
main [class*="price"]:hover,
main [class*="solution"]:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 70px rgba(0,0,0,.24), var(--nt-v53-glow);
  border-color: rgba(120,255,57,.24);
}

/* Botones / CTAs con shimmer */
main a,
main button {
  transition:
    transform .22s ease,
    box-shadow .22s ease,
    filter .22s ease;
}

main a[href*="wa.me"],
main a[href*="cotizador"],
main a[href*="contacto"],
main button {
  position: relative;
  overflow: hidden;
}

main a[href*="wa.me"]::after,
main a[href*="cotizador"]::after,
main a[href*="contacto"]::after,
main button::after {
  content: "";
  position: absolute;
  inset: -2px;
  pointer-events: none;
  background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,.35) 48%, transparent 72%);
  transform: translateX(-130%);
  transition: transform .68s ease;
}

main a[href*="wa.me"]:hover,
main a[href*="cotizador"]:hover,
main a[href*="contacto"]:hover,
main button:hover {
  transform: translateY(-2px);
  filter: saturate(1.08);
}

main a[href*="wa.me"]:hover::after,
main a[href*="cotizador"]:hover::after,
main a[href*="contacto"]:hover::after,
main button:hover::after {
  transform: translateX(130%);
}

/* Imágenes completas y más protagonistas */
main img {
  max-width: 100%;
  object-position: center center;
  transition: transform .55s cubic-bezier(.22,1,.36,1), filter .25s ease;
}

main picture img,
main [class*="hero"] img,
main [class*="visual"] img,
main [class*="image"] img {
  object-fit: contain;
}

main img:hover {
  transform: scale(1.018);
  filter: saturate(1.06) contrast(1.04);
}

/* WhatsApp / Neary pulse */
a[href*="wa.me"],
button[aria-label*="Neary"],
button[aria-label*="IA"],
button[aria-label*="WhatsApp"] {
  position: relative;
}

a[href*="wa.me"]::before,
button[aria-label*="Neary"]::before,
button[aria-label*="IA"]::before,
button[aria-label*="WhatsApp"]::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: inherit;
  border: 1px solid rgba(120,255,57,.36);
  animation: ntV53Pulse 2.8s ease-out infinite;
  pointer-events: none;
}

/* Footer premium sin depender del componente exacto */
footer {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(120,255,57,.14);
  background:
    radial-gradient(circle at 80% 10%, rgba(120,255,57,.11), transparent 28%),
    linear-gradient(180deg, #06150d, #020806) !important;
  color: rgba(255,255,255,.88) !important;
}

footer::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(rgba(120,255,57,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120,255,57,.04) 1px, transparent 1px);
  background-size: 70px 70px;
}

footer * {
  position: relative;
  z-index: 1;
}

footer a:hover {
  color: var(--nt-v53-green) !important;
}

@keyframes ntV53Reveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ntV53GridDrift {
  from {
    background-position: 0 0, 0 0, 0 0, 0 0;
  }
  to {
    background-position: 0 0, 0 0, 0 74px, 74px 0;
  }
}

@keyframes ntV53Pulse {
  0% {
    opacity: .75;
    transform: scale(.82);
  }
  100% {
    opacity: 0;
    transform: scale(1.38);
  }
}

@media (max-width: 760px) {
  main article:hover,
  main [class*="card"]:hover,
  main [class*="service"]:hover,
  main [class*="feature"]:hover,
  main [class*="price"]:hover,
  main [class*="solution"]:hover {
    transform: none;
  }

  main section:first-of-type::before {
    opacity: .55;
  }

  footer {
    padding-bottom: 88px;
  }
}

/* === END NearTec V5.3 REAL LIVE MOTION PATCH === */

CSS

echo "== 5) OG image fallback =="
mkdir -p app public/images/og

if [ -f public/images/og/og-home.png ]; then
  cp public/images/og/og-home.png app/opengraph-image.png || true
  cp public/images/og/og-home.png app/twitter-image.png || true
elif [ -f public/images/og-cover-neartec.png ]; then
  cp public/images/og-cover-neartec.png app/opengraph-image.png || true
  cp public/images/og-cover-neartec.png app/twitter-image.png || true
else
  echo "AVISO: no encontré imagen OG. El preview puede seguir sin imagen."
fi

echo "== 6) Validar que ya no exista texto viejo =="
grep -RInE "Panel demostrativo|Stack NearTec activo|664 630 0473|664-630-04-73|526646300473|info@neartec.com|info@itimbre.com" . \
  --exclude-dir=node_modules \
  --exclude-dir=.next \
  --exclude-dir=.git \
  --exclude-dir=.vercel \
  --exclude-dir=dist \
  --exclude-dir=out \
  && { echo "ERROR: todavía hay texto viejo arriba."; exit 1; } || echo "OK: texto viejo eliminado."

echo "== 7) Validaciones =="
npm run type-check
npm run predeploy:check
npm run smoke

echo "== 8) Commit / push =="
git status --short
git add -A
git commit -m "Apply real NearTec V5.3 live motion patch" || echo "Sin cambios para commit."
git push origin main

echo "== LISTO: ahora despliega con vercel --prod =="
echo "Backup creado: $BACKUP_BRANCH"
