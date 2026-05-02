#!/usr/bin/env bash
set -euo pipefail

echo "== NearTec V5.3 — Preview Base + Motion Premium Fix =="
cd ~/neartec-site || exit 1

LIVE_URL="https://neartecmx.vercel.app"
BACKUP_BRANCH="backup/pre-v53-preview-motion-$(date +%Y%m%d-%H%M%S)"

echo "== 1) Verificando que el repo local sea la versión preview/oficial actual =="
mkdir -p "$HOME/neartec-check"
curl -L -s "$LIVE_URL" > "$HOME/neartec-check/live.html" || true

if ! grep -Eqi "Desarrollamos tecnología|Integrador tecnológico|NearTec integra diseño web|Punto de venta|CompuNegocio|CN7|Emailing" "$HOME/neartec-check/live.html"; then
  echo "AVISO: No pude confirmar por HTML remoto la preview exacta."
  echo "Continúo con validación local para evitar falso negativo de curl/cache."
fi

if ! grep -REqi "Desarrollamos tecnología|Integrador tecnológico|NearTec integra diseño web|Punto de venta|CompuNegocio|CN7|Emailing" app components lib pages src 2>/dev/null; then
  echo "ERROR: Tu repo local NO parece tener el código de la versión oficial actual."
  echo "No aplico cambios para evitar tocar otra versión."
  exit 1
fi

echo "OK: repo local coincide con la línea preview/oficial."

echo "== 2) Backup Git =="
git branch "$BACKUP_BRANCH" || true
git push -u origin "$BACKUP_BRANCH" || true

echo "== 3) Corrigiendo contacto viejo y copy interno =="
SEARCH_DIRS="app components lib pages src public"

for dir in $SEARCH_DIRS; do
  [ -d "$dir" ] || continue
  grep -RIlE "664 630 0473|664-630-04-73|526646300473|info@neartec.com|info@itimbre.com|Panel demostrativo|Stack NearTec activo" "$dir" --exclude-dir=node_modules 2>/dev/null | while read -r file; do
    sed -i \
      -e "s/664 630 0473/664 404 6194/g" \
      -e "s/664-630-04-73/664 404 6194/g" \
      -e "s/526646300473/526644046194/g" \
      -e "s/info@neartec.com/meta@itimbre.com/g" \
      -e "s/info@itimbre.com/meta@itimbre.com/g" \
      -e "s/Panel demostrativo/Ecosistema NearTec/g" \
      -e "s/Stack NearTec activo/Tecnología conectada/g" \
      "$file"
  done
done

echo "== 4) Agregando capa Motion Premium sin cambiar diseño base =="
mkdir -p components app public/images/og

cat > components/V53MotionLayer.tsx <<'EOF_TSX'
'use client'

import { useEffect } from 'react'

export default function V53MotionLayer() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('v53-ready')

    const main = document.querySelector('main') || document.body
    const sections = Array.from(main.querySelectorAll('section'))
    const firstSection = sections[0]

    if (firstSection) {
      firstSection.classList.add('v53-hero-zone')

      if (!firstSection.querySelector('.v53-orbital-grid')) {
        const orbital = document.createElement('div')
        orbital.className = 'v53-orbital-grid'
        orbital.setAttribute('aria-hidden', 'true')
        orbital.innerHTML = `
          <span></span>
          <span></span>
          <span></span>
          <i></i>
          <i></i>
          <i></i>
        `
        firstSection.prepend(orbital)
      }
    }

    sections.forEach((section, index) => {
      section.classList.add('v53-section-reveal')
      section.style.setProperty('--v53-index', String(index))
    })

    const cards = Array.from(
      document.querySelectorAll(
        [
          'article',
          '[class*="card"]',
          '[class*="service"]',
          '[class*="price"]',
          '[class*="feature"]',
          '[class*="module"]',
          '[class*="solution"]',
          '[class*="case"]',
        ].join(',')
      )
    ) as HTMLElement[]

    cards.forEach((card) => {
      card.classList.add('v53-interactive-card')

      card.addEventListener('pointermove', (event) => {
        if (window.innerWidth < 900) return

        const rect = card.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const rx = ((y / rect.height) - 0.5) * -5
        const ry = ((x / rect.width) - 0.5) * 5

        card.style.setProperty('--v53-rx', `${rx}deg`)
        card.style.setProperty('--v53-ry', `${ry}deg`)
        card.style.setProperty('--v53-mx', `${x}px`)
        card.style.setProperty('--v53-my', `${y}px`)
      })

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--v53-rx', '0deg')
        card.style.setProperty('--v53-ry', '0deg')
      })
    })

    const ctas = Array.from(
      document.querySelectorAll('a, button')
    ).filter((element) => {
      const text = element.textContent?.toLowerCase() || ''
      return (
        text.includes('cotizar') ||
        text.includes('whatsapp') ||
        text.includes('contacto') ||
        text.includes('diagnóstico') ||
        text.includes('saber más') ||
        text.includes('iniciar')
      )
    }) as HTMLElement[]

    ctas.forEach((element) => {
      element.classList.add('v53-cta-magnetic')
    })

    const media = Array.from(document.querySelectorAll('img, video, picture')) as HTMLElement[]
    media.forEach((element) => {
      element.classList.add('v53-media-pop')
    })

    const footer = document.querySelector('footer')
    if (footer) footer.classList.add('v53-footer-premium')

    const floatingCandidates = Array.from(document.querySelectorAll('a, button')).filter((element) => {
      const text = element.textContent?.toLowerCase() || ''
      const href = element instanceof HTMLAnchorElement ? element.href.toLowerCase() : ''
      const label = element.getAttribute('aria-label')?.toLowerCase() || ''
      return (
        href.includes('wa.me') ||
        text.includes('neary') ||
        label.includes('neary') ||
        label.includes('whatsapp')
      )
    }) as HTMLElement[]

    floatingCandidates.forEach((element) => {
      element.classList.add('v53-pulse-fab')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v53-in-view')
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    document
      .querySelectorAll('.v53-section-reveal, .v53-interactive-card, .v53-media-pop')
      .forEach((element) => observer.observe(element))

    const onScroll = () => {
      const y = window.scrollY || 0
      root.style.setProperty('--v53-scroll', String(Math.min(y / 700, 1)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return null
}
EOF_TSX

cat > app/v53-motion.css <<'EOF_CSS'
:root {
  --v53-green: #74ff35;
  --v53-green-deep: #16b43d;
  --v53-ink: #06170f;
  --v53-line: rgba(116, 255, 53, .22);
  --v53-glow: 0 0 48px rgba(116, 255, 53, .28);
  --v53-soft-shadow: 0 24px 80px rgba(0, 0, 0, .28);
}

@media (prefers-reduced-motion: reduce) {
  .v53-ready *,
  .v53-ready *::before,
  .v53-ready *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}

/* Reveal premium */
.v53-ready .v53-section-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity .78s cubic-bezier(.22,1,.36,1),
    transform .78s cubic-bezier(.22,1,.36,1);
}

.v53-ready .v53-section-reveal.v53-in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Hero living grid */
.v53-hero-zone {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.v53-orbital-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: .74;
  mask-image: radial-gradient(circle at 52% 30%, black 0%, transparent 72%);
}

.v53-orbital-grid::before {
  content: "";
  position: absolute;
  inset: -20%;
  background:
    linear-gradient(rgba(116,255,53,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(116,255,53,.08) 1px, transparent 1px);
  background-size: 72px 72px;
  transform: translateY(calc(var(--v53-scroll, 0) * -36px));
}

.v53-orbital-grid span,
.v53-orbital-grid i {
  position: absolute;
  border-radius: 999px;
  display: block;
}

.v53-orbital-grid span {
  width: 9px;
  height: 9px;
  background: var(--v53-green);
  box-shadow: 0 0 26px rgba(116,255,53,.95);
  animation: v53NodeFloat 5.6s ease-in-out infinite;
}

.v53-orbital-grid span:nth-child(1) { top: 22%; left: 12%; }
.v53-orbital-grid span:nth-child(2) { top: 18%; right: 18%; animation-delay: .7s; }
.v53-orbital-grid span:nth-child(3) { bottom: 22%; left: 45%; animation-delay: 1.2s; }

.v53-orbital-grid i {
  height: 1px;
  width: 28vw;
  background: linear-gradient(90deg, transparent, rgba(116,255,53,.42), transparent);
  animation: v53LineTravel 4.8s ease-in-out infinite;
}

.v53-orbital-grid i:nth-of-type(1) { top: 25%; left: 10%; transform: rotate(18deg); }
.v53-orbital-grid i:nth-of-type(2) { top: 46%; right: 6%; transform: rotate(-22deg); animation-delay: .8s; }
.v53-orbital-grid i:nth-of-type(3) { bottom: 20%; left: 28%; transform: rotate(8deg); animation-delay: 1.4s; }

/* Hero text and CTA microinteraction */
.v53-hero-zone h1 {
  text-wrap: balance;
}

.v53-hero-zone h1,
.v53-hero-zone p,
.v53-hero-zone a,
.v53-hero-zone button {
  position: relative;
  z-index: 2;
}

.v53-cta-magnetic {
  position: relative;
  overflow: hidden;
  transition:
    transform .24s ease,
    filter .24s ease,
    box-shadow .24s ease !important;
}

.v53-cta-magnetic::after {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,.36) 45%, transparent 70%);
  transform: translateX(-130%);
  transition: transform .72s ease;
  pointer-events: none;
}

.v53-cta-magnetic:hover {
  transform: translateY(-3px) scale(1.012);
  filter: saturate(1.06);
}

.v53-cta-magnetic:hover::after {
  transform: translateX(130%);
}

/* Cards: glow + tilt */
.v53-interactive-card {
  position: relative;
  transform:
    perspective(900px)
    rotateX(var(--v53-rx, 0deg))
    rotateY(var(--v53-ry, 0deg))
    translateY(10px);
  opacity: 0;
  transition:
    opacity .76s cubic-bezier(.22,1,.36,1),
    transform .22s ease,
    box-shadow .22s ease,
    border-color .22s ease;
  will-change: transform;
}

.v53-interactive-card.v53-in-view {
  opacity: 1;
  transform:
    perspective(900px)
    rotateX(var(--v53-rx, 0deg))
    rotateY(var(--v53-ry, 0deg))
    translateY(0);
}

.v53-interactive-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background:
    radial-gradient(
      circle at var(--v53-mx, 50%) var(--v53-my, 50%),
      rgba(116,255,53,.18),
      transparent 34%
    );
  opacity: 0;
  transition: opacity .22s ease;
}

.v53-interactive-card:hover::before {
  opacity: 1;
}

.v53-interactive-card:hover {
  box-shadow: var(--v53-soft-shadow), var(--v53-glow);
  border-color: var(--v53-line);
}

/* Media: complete, visible, premium */
.v53-media-pop {
  transition:
    transform .75s cubic-bezier(.22,1,.36,1),
    opacity .75s cubic-bezier(.22,1,.36,1),
    filter .24s ease;
  opacity: 0;
  transform: translateY(22px) scale(.985);
}

.v53-media-pop.v53-in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.v53-media-pop:hover {
  filter: saturate(1.06) contrast(1.03);
}

/* Prevent visual cuts where possible */
main img {
  max-width: 100%;
}

main picture img,
main img {
  object-position: center center;
}

/* Premium FAB pulse */
.v53-pulse-fab {
  position: relative;
}

.v53-pulse-fab::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: inherit;
  border: 1px solid rgba(116,255,53,.38);
  opacity: .75;
  transform: scale(.82);
  animation: v53FabPulse 2.8s ease-out infinite;
  pointer-events: none;
}

/* Footer repair without changing base markup */
.v53-footer-premium {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(116,255,53,.14);
  background:
    radial-gradient(circle at 75% 10%, rgba(116,255,53,.12), transparent 28%),
    linear-gradient(180deg, rgba(5,17,11,.98), rgba(2,9,6,.98)) !important;
  color: rgba(255,255,255,.9) !important;
}

.v53-footer-premium::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(116,255,53,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(116,255,53,.05) 1px, transparent 1px);
  background-size: 70px 70px;
  opacity: .45;
  pointer-events: none;
}

.v53-footer-premium * {
  position: relative;
  z-index: 1;
}

.v53-footer-premium a {
  transition: color .2s ease, transform .2s ease;
}

.v53-footer-premium a:hover {
  color: var(--v53-green) !important;
  transform: translateY(-1px);
}

/* Better client logos and duplicated strips */
main img[alt*="Gasmart"],
main img[alt*="Radio"],
main img[alt*="Tijuana"],
main img[alt*="Gusher"],
main img[alt*="Cliente"] {
  object-fit: contain !important;
  filter: grayscale(.05) contrast(1.05);
}

/* Animations */
@keyframes v53NodeFloat {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: .72; }
  50% { transform: translate3d(0, -12px, 0) scale(1.25); opacity: 1; }
}

@keyframes v53LineTravel {
  0%, 100% { opacity: .18; clip-path: inset(0 100% 0 0); }
  50% { opacity: .85; clip-path: inset(0 0 0 0); }
}

@keyframes v53FabPulse {
  0% { transform: scale(.82); opacity: .72; }
  100% { transform: scale(1.42); opacity: 0; }
}

@media (max-width: 760px) {
  .v53-orbital-grid {
    opacity: .46;
  }

  .v53-interactive-card {
    transform: translateY(10px);
  }

  .v53-interactive-card.v53-in-view {
    transform: translateY(0);
  }

  .v53-cta-magnetic:hover {
    transform: none;
  }

  footer.v53-footer-premium,
  .v53-footer-premium {
    padding-bottom: 92px;
  }
}
EOF_CSS

echo "== 5) Importando CSS y MotionLayer en app/layout.tsx =="
if [ ! -f app/layout.tsx ]; then
  echo "ERROR: no existe app/layout.tsx. Esta versión no parece usar App Router."
  exit 1
fi

python3 - <<'PY'
from pathlib import Path
import re

p = Path("app/layout.tsx")
s = p.read_text()

# Import CSS
if "v53-motion.css" not in s:
    # Insert after last CSS import near top
    lines = s.splitlines()
    insert_at = 0
    for i, line in enumerate(lines):
        if line.strip().startswith("import ") and ".css" in line:
            insert_at = i + 1
    lines.insert(insert_at, "import './v53-motion.css'")
    s = "\n".join(lines) + "\n"

# Import component
if "V53MotionLayer" not in s:
    lines = s.splitlines()
    insert_at = 0
    for i, line in enumerate(lines):
        if line.strip().startswith("import "):
            insert_at = i + 1
    lines.insert(insert_at, "import V53MotionLayer from '@/components/V53MotionLayer'")
    s = "\n".join(lines) + "\n"

# Add component inside body, before closing body
if "<V53MotionLayer />" not in s:
    s = s.replace("</body>", "        <V53MotionLayer />\n      </body>")

# Make sure metadata has metadataBase/openGraph/twitter where possible
if "metadataBase" not in s and "export const metadata" in s:
    s = re.sub(
        r"export const metadata\s*(:\s*Metadata)?\s*=\s*\{",
        "export const metadata\\1 = {\n  metadataBase: new URL('https://neartecmx.vercel.app'),",
        s,
        count=1
    )

p.write_text(s)
print("OK: layout actualizado con v53-motion.css y V53MotionLayer.")
PY

echo "== 6) OG images estáticas para compartir link =="
if [ -f public/images/og/og-home.png ]; then
  cp public/images/og/og-home.png app/opengraph-image.png
  cp public/images/og/og-home.png app/twitter-image.png
elif [ -f public/images/og-cover-neartec.png ]; then
  cp public/images/og-cover-neartec.png app/opengraph-image.png
  cp public/images/og-cover-neartec.png app/twitter-image.png
elif [ -f public/images/og-cover-neartec.jpg ]; then
  cp public/images/og-cover-neartec.jpg app/opengraph-image.jpg
  cp public/images/og-cover-neartec.jpg app/twitter-image.jpg
else
  echo "AVISO: No encontré OG PNG/JPG. Si el preview no aparece, hay que generar public/images/og/og-home.png."
fi

echo "== 7) Footer premium controlado si existe components/Footer.tsx =="
if [ -f components/Footer.tsx ]; then
  cat > components/Footer.tsx <<'EOF_TSX'
import Link from 'next/link'

const services = [
  { label: 'Diseño web', href: '/diseno-web' },
  { label: 'Punto de venta', href: '/compunegocio' },
  { label: 'Infraestructura', href: '/infraestructura' },
  { label: 'Emailing', href: '/emailing' },
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'Cotizador', href: '/cotizador' },
]

const company = [
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Casos', href: '/casos' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="site-footer v53-footer-premium">
      <div className="footer-shell">
        <div className="footer-brand">
          <b>NearTec</b>
          <p>
            Soluciones tecnológicas para empresas: diseño web, punto de venta,
            hosting, servidores, correo, emailing, automatización, CN7 y soporte.
          </p>
        </div>

        <nav aria-label="Servicios NearTec">
          <h3>Servicios</h3>
          {services.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <nav aria-label="Empresa NearTec">
          <h3>Empresa</h3>
          {company.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="footer-contact">
          <h3>¿Hablamos?</h3>
          <a href="https://wa.me/526644046194">664 404 6194</a>
          <a href="mailto:meta@itimbre.com">meta@itimbre.com</a>
          <p>Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000</p>
          <Link href="/cotizador">Cotizar proyecto</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NearTec. Todos los derechos reservados.</span>
        <div>
          <Link href="/contacto">Aviso de privacidad</Link>
          <Link href="/contacto">Términos y condiciones</Link>
        </div>
      </div>
    </footer>
  )
}
EOF_TSX

  cat >> app/v53-motion.css <<'EOF_CSS'

.site-footer.v53-footer-premium {
  padding: 58px 0 28px;
}

.site-footer .footer-shell {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr .75fr .75fr 1fr;
  gap: 34px;
  align-items: start;
}

.site-footer .footer-brand b {
  display: block;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: .95;
  letter-spacing: -.05em;
  margin-bottom: 12px;
}

.site-footer p,
.site-footer span {
  color: rgba(255,255,255,.68);
  line-height: 1.6;
  font-weight: 700;
}

.site-footer h3 {
  margin: 0 0 14px;
  color: rgba(255,255,255,.95);
  font-size: .86rem;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.site-footer nav,
.site-footer .footer-contact {
  display: grid;
  gap: 11px;
}

.site-footer a {
  color: rgba(255,255,255,.82);
  font-weight: 850;
}

.site-footer .footer-contact > a:last-child,
.site-footer .footer-contact a[href="/cotizador"] {
  width: fit-content;
  margin-top: 8px;
  padding: 13px 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, #16b43d, #74ff35);
  color: #06170f !important;
}

.site-footer .footer-bottom {
  width: min(1180px, calc(100% - 36px));
  margin: 34px auto 0;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,.10);
  display: flex;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.site-footer .footer-bottom div {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .site-footer .footer-shell {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 620px) {
  .site-footer .footer-shell {
    grid-template-columns: 1fr;
  }

  .site-footer .footer-bottom {
    display: grid;
  }

  .site-footer .footer-bottom div {
    display: grid;
  }
}
EOF_CSS
fi

echo "== 8) package.json versión V5.3 =="
node - <<'NODE'
const fs = require('fs')
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

pkg.name = 'neartec-web-v53-preview-motion-fix'
pkg.version = '5.3.0'

pkg.scripts ||= {}
pkg.scripts['type-check'] ||= 'tsc --noEmit'
pkg.scripts['predeploy:check'] = 'node scripts/preflight.js'
pkg.scripts['smoke'] = 'node scripts/smoke-test.mjs && node scripts/test-api-local.mjs'

pkg.dependencies ||= {}
pkg.dependencies['lucide-react'] ||= '^0.468.0'

pkg.engines = { node: '20.x' }

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')
NODE

echo "== 9) Validadores V5.3 =="
cat > scripts/preflight.js <<'EOF_JS'
const fs = require('fs')

const required = [
  'app/layout.tsx',
  'app/v53-motion.css',
  'components/V53MotionLayer.tsx',
  'app/api/lead/route.ts',
  'package.json',
]

const missing = required.filter((file) => !fs.existsSync(file))
if (missing.length) {
  console.error('Faltan archivos V5.3:')
  for (const file of missing) console.error(`- ${file}`)
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (!pkg.name.includes('v53')) {
  console.error(`package.json no está en V5.3. Actual: ${pkg.name}`)
  process.exit(1)
}

const layout = fs.readFileSync('app/layout.tsx', 'utf8')
if (!layout.includes('v53-motion.css') || !layout.includes('V53MotionLayer')) {
  console.error('layout.tsx no tiene V5.3 MotionLayer/CSS')
  process.exit(1)
}

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  console.error('API /api/lead perdió NEARTEC_LEAD_WEBHOOK_URL')
  process.exit(1)
}

console.log('Preflight OK: NearTec V5.3 Preview Motion Fix listo.')
EOF_JS

cat > scripts/smoke-test.mjs <<'EOF_JS'
import fs from 'node:fs'

const read = (file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''

const code = [
  read('app/layout.tsx'),
  read('app/v53-motion.css'),
  read('components/V53MotionLayer.tsx'),
  read('components/Footer.tsx'),
  read('app/page.tsx'),
  read('components/QuoteEngine.tsx'),
].join('\n')

const requiredTerms = [
  'NearTec',
  'Desarrollamos tecnología',
  '664 404 6194',
  'meta@itimbre.com',
  'v53-motion.css',
  'V53MotionLayer',
  'v53-pulse-fab',
  'v53-interactive-card',
]

for (const term of requiredTerms) {
  if (!code.toLowerCase().includes(term.toLowerCase())) {
    throw new Error(`No se encontró término V5.3: ${term}`)
  }
}

const forbidden = [
  '664 630 0473',
  '664-630-04-73',
  '526646300473',
  'info@neartec.com',
  'info@itimbre.com',
  'Panel demostrativo',
  'Stack NearTec activo',
]

for (const term of forbidden) {
  if (code.includes(term)) {
    throw new Error(`Texto/contacto viejo detectado: ${term}`)
  }
}

if (!fs.existsSync('app/opengraph-image.png') && !fs.existsSync('app/opengraph-image.jpg')) {
  console.warn('AVISO: No existe app/opengraph-image.png/jpg. El preview social puede depender de metadata existente.')
}

console.log('Smoke test OK: NearTec V5.3 motion/contact/footer/OG validado.')
EOF_JS

echo "== 10) Instalando dependencias =="
npm install --engine-strict=false

echo "== 11) Validando contacto viejo =="
grep -RInE "664 630 0473|664-630-04-73|526646300473|info@neartec.com|info@itimbre.com|Panel demostrativo|Stack NearTec activo" app components lib pages src --exclude-dir=node_modules 2>/dev/null || echo "OK: no hay contacto/copy viejo."

echo "== 12) Validaciones =="
npm run type-check
npm run predeploy:check
npm run smoke

echo "== 13) Git commit/push =="
git status --short
git add -A
git commit -m "Apply NearTec V5.3 preview motion fix" || echo "Sin cambios para commit."
git push origin main

echo "== V5.3 aplicado =="
echo "Backup creado en: $BACKUP_BRANCH"
echo "Ahora ejecuta deploy Vercel."
