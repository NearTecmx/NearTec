#!/usr/bin/env bash
set -euo pipefail

cd "${REPO_DIR:-$HOME/neartec-site}"

printf '\n== NearTec V5.0.2 hotfix: ServicePage proof + soluciones object mapping ==\n'

# Mantiene compatibilidad con páginas existentes que envían proof={...}
# y con cualquier kind legado de V4/V5.
cat > components/ServicePage.tsx <<'TSX'
import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import { ServiceAssetVisual } from '@/components/AssetVisuals'
import { CONTACT } from '@/lib/site-data'

type Kind =
  | 'suite'
  | 'web'
  | 'crm'
  | 'compunegocio'
  | 'cn7'
  | 'soporte'
  | 'contacto'
  | 'recursos'
  | 'casos'
  | 'soluciones'
  | 'cotizador'
  | 'diagnostico'
  | string

type Pair = readonly [string, string]

type ServicePageProps = {
  kind: Kind
  eyebrow: string
  title: string
  description: string
  features: readonly Pair[]
  proof?: readonly string[]
}

export default function ServicePage({
  kind,
  eyebrow,
  title,
  description,
  features,
  proof = [],
}: ServicePageProps) {
  return (
    <>
      <section className="v5-hero v5-service-hero">
        <div className="v5-container v5-hero-grid">
          <div className="v5-hero-copy">
            <span className="v5-eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>

            {proof.length > 0 ? (
              <div className="v5-proof-strip" aria-label="Puntos clave de la solución">
                {proof.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}

            <div className="v5-hero-actions">
              <Link className="v5-btn v5-btn-green" href="/cotizador">
                Cotizar mi solución
              </Link>
              <Link className="v5-btn v5-btn-light" href="/landing">
                Quiero mi diagnóstico
              </Link>
              <a className="v5-btn v5-btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="v5-service-visual">
            <ServiceAssetVisual kind={kind} priority />
          </div>
        </div>
      </section>

      <section className="v5-section v5-section-soft">
        <div className="v5-container v5-layer-grid">
          {features.map(([heading, body], index) => (
            <article className="v5-layer-card" key={`${heading}-${index}`}>
              <div className="v5-icon-bubble">{String(index + 1).padStart(2, '0')}</div>
              <small>Qué resuelve</small>
              <h3>{heading}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v5-section">
        <div className="v5-container">
          <div className="v5-section-head">
            <span className="v5-eyebrow">Cotización guiada</span>
            <h2>Calcula una base y manda contexto real por WhatsApp.</h2>
            <p>
              El cotizador conserva precios documentados y deja lo no estándar como alcance para propuesta.
            </p>
          </div>
          <QuoteEngine compact />
        </div>
      </section>
    </>
  )
}
TSX

# Corrige el error de app/soluciones/page.tsx: las soluciones son objetos, no tuplas.
cat > app/soluciones/page.tsx <<'TSX'
import Link from 'next/link'
import { solutions, techLayers, CONTACT } from '@/lib/site-data'
import { ServiceAssetVisual } from '@/components/AssetVisuals'

export const metadata = {
  title: 'Soluciones NearTec | Integrador tecnológico para empresas',
  description:
    'Soluciones NearTec: desarrollo web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, respaldo, soporte e infraestructura.',
}

export default function SolucionesPage() {
  return (
    <>
      <section className="v5-hero v5-service-hero">
        <div className="v5-container v5-hero-grid">
          <div className="v5-hero-copy">
            <span className="v5-eyebrow">Soluciones conectadas</span>
            <h1>Tecnología para vender, operar y crecer con una sola ruta.</h1>
            <p>
              NearTec integra presencia digital, desarrollo, automatización, CRM, IA, CompuNegocio,
              CN7, nube, respaldo, soporte e infraestructura para que tu empresa no dependa de piezas sueltas.
            </p>
            <div className="v5-proof-strip" aria-label="Capas tecnológicas NearTec">
              <span>Web + Apps</span>
              <span>CRM + IA</span>
              <span>POS + Timbres</span>
              <span>CN7 + Nube</span>
              <span>Soporte</span>
            </div>
            <div className="v5-hero-actions">
              <Link className="v5-btn v5-btn-green" href="/cotizador">
                Cotizar proyecto
              </Link>
              <Link className="v5-btn v5-btn-light" href="/landing">
                Agendar diagnóstico
              </Link>
              <a className="v5-btn v5-btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
                WhatsApp
              </a>
            </div>
          </div>
          <div className="v5-service-visual">
            <ServiceAssetVisual kind="suite" title="Ecosistema tecnológico NearTec" priority />
          </div>
        </div>
      </section>

      <section className="v5-section v5-section-soft">
        <div className="v5-container">
          <div className="v5-section-head">
            <span className="v5-eyebrow">Capas del ecosistema</span>
            <h2>Todo conectado: de la presencia digital a la operación diaria.</h2>
            <p>
              La web no vive sola. El CRM, WhatsApp, punto de venta, timbres, nube y soporte deben trabajar como sistema.
            </p>
          </div>
          <div className="v5-layer-grid">
            {techLayers.map((layer) => (
              <article className="v5-layer-card" key={layer.title}>
                <small>{layer.tag}</small>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v5-section">
        <div className="v5-container">
          <div className="v5-section-head">
            <span className="v5-eyebrow">Servicios principales</span>
            <h2>Soluciones reales, explicadas para decidir rápido.</h2>
            <p>
              Cada bloque aterriza qué se implementa, qué mejora y por dónde avanzar sin perder contexto técnico ni comercial.
            </p>
          </div>

          <div className="v5-solution-grid">
            {solutions.map((solution) => (
              <article className="v5-solution-card" key={solution.href}>
                <div className="v5-solution-copy">
                  <small>{solution.tag}</small>
                  <h3>{solution.title}</h3>
                  <p>{solution.summary}</p>
                  <ul>
                    {solution.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Link className="v5-inline-link" href={solution.href}>
                    Ver solución →
                  </Link>
                </div>
                <ServiceAssetVisual
                  kind={solution.href.replace('/', '')}
                  title={solution.title}
                  src={solution.visual}
                  compact
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
TSX

# CSS mínimo de compatibilidad si las clases no existen todavía o si el CSS viejo no contempla proof strip / solution grid.
cat >> app/v5.css <<'CSS'

/* V5.0.2 compatibility polish */
.v5-proof-strip{display:flex;flex-wrap:wrap;gap:10px;margin:22px 0 0}
.v5-proof-strip span{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(38,166,65,.16);background:rgba(255,255,255,.82);box-shadow:0 16px 38px rgba(10,40,22,.07);border-radius:999px;padding:11px 15px;font-size:.84rem;font-weight:900;color:#193326}
.v5-proof-strip span::before{content:"";width:9px;height:9px;border-radius:999px;background:linear-gradient(135deg,#00a93b,#a7ff31);box-shadow:0 0 0 7px rgba(99,232,67,.13)}
.v5-solution-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
.v5-solution-card{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(240px,.82fr);gap:20px;align-items:center;border:1px solid rgba(18,61,35,.1);border-radius:38px;background:linear-gradient(145deg,rgba(255,255,255,.94),rgba(245,252,241,.8));box-shadow:0 24px 70px rgba(9,37,21,.09);padding:24px;overflow:hidden}
.v5-solution-card::before{content:"";position:absolute;inset:auto -10% -30% 25%;height:170px;background:radial-gradient(circle,rgba(111,255,41,.22),transparent 60%);filter:blur(10px);pointer-events:none}
.v5-solution-copy{position:relative;z-index:2}
.v5-solution-copy small{display:inline-flex;letter-spacing:.16em;text-transform:uppercase;font-size:.74rem;font-weight:950;color:#1f6f2d;margin-bottom:14px}
.v5-solution-copy h3{font-size:clamp(1.35rem,2.4vw,2.25rem);line-height:.96;margin:0 0 13px;color:#06120d;letter-spacing:-.055em}
.v5-solution-copy p{color:#516159;font-weight:700;line-height:1.55;margin:0 0 14px}
.v5-solution-copy ul{display:grid;gap:8px;list-style:none;margin:0 0 18px;padding:0}
.v5-solution-copy li{font-weight:850;color:#183126}
.v5-solution-copy li::before{content:"✓";color:#00a33d;margin-right:9px;font-weight:950}
.v5-inline-link{display:inline-flex;text-decoration:none;font-weight:950;color:#088d36}
.v5-solution-card .asset-frame{min-height:260px;border-radius:28px}
.v5-solution-card .asset-frame img,.v5-solution-card .asset-img{object-fit:contain!important;object-position:center!important;padding:8px!important}
@media (max-width:900px){.v5-solution-grid{grid-template-columns:1fr}.v5-solution-card{grid-template-columns:1fr;border-radius:30px;padding:18px}.v5-solution-card .asset-frame{min-height:330px}.v5-proof-strip{gap:8px}.v5-proof-strip span{font-size:.78rem;padding:10px 12px}}
CSS

node - <<'JS'
const fs = require('fs')
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'))
pkg.name = 'neartec-web-v502-technology-integrator-master'
pkg.version = '5.0.2'
pkg.scripts = { ...pkg.scripts, 'type-check': pkg.scripts?.['type-check'] || 'tsc --noEmit' }
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')
JS

printf '\n== Type-check ==\n'
if npm run type-check 2>&1 | tee v502-typecheck.log; then
  printf '\nType-check OK.\n'
else
  printf '\nType-check falló. Errores detectados:\n'
  grep -nE "error TS|Type error:|Failed to compile|Error:" v502-typecheck.log | tail -80 || true
  exit 1
fi

printf '\n== Build ==\n'
if npm run build 2>&1 | tee v502-build.log; then
  printf '\nBuild OK. Commit y push.\n'
else
  printf '\nBuild falló. Errores detectados:\n'
  grep -nE "Type error:|Failed to compile|Error:|Attempted import error|error TS" v502-build.log | tail -80 || true
  exit 1
fi

git status --short

git add components/ServicePage.tsx app/soluciones/page.tsx app/v5.css package.json package-lock.json components/AssetVisuals.tsx lib/neartec-data.ts lib/site-data.ts app/page.tsx app/layout.tsx components/V5VisualSystem.tsx components/Navbar.tsx components/FloatingAssist.tsx components/Footer.tsx 2>/dev/null || true

git commit -m "Fix V5.0.2 type compatibility and soluciones page" || echo "Sin cambios nuevos para commit."
git push origin main

printf '\nV5.0.2 OK: type-check, build, commit y push completados.\n'
