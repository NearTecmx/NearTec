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
