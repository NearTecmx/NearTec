import Link from 'next/link'
import { solutions, techLayers, CONTACT } from '@/lib/site-data'
import { ServiceAssetVisual } from '@/components/AssetVisuals'

const solutionVisualByHref: Record<string, string> = {
  '/diseno-web': '/images/visuals/visual-web.webp',
  '/crm-automatizacion': '/images/visuals/visual-crm.webp',
  '/compunegocio': '/images/visuals/visual-compunegocio.webp',
  '/cn7': '/images/visuals/visual-cn7.webp',
  '/soporte': '/images/visuals/visual-neary.webp',
}

function getSolutionVisual(href: string) {
  return solutionVisualByHref[href] || '/images/visuals/hero-home-desktop.webp'
}


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
                  src={getSolutionVisual(solution.href)}
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
