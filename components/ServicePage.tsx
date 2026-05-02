import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import { ServiceHeroVisual } from '@/components/VisualSystems'
import { CONTACT } from '@/lib/neartec-data'

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

export default function ServicePage({
  kind,
  eyebrow,
  title,
  description,
  features,
}: {
  kind: Kind
  eyebrow: string
  title: string
  description: string
  features: [string, string][]
}) {
  return (
    <>
      <section className="page-hero page-hero-v41">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-solid">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="hero-actions">
              <Link className="btn btn-green" href="/cotizador">Quiero cotizar</Link>
              <Link className="btn btn-outline" href="/landing">Quiero diagnóstico</Link>
              <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
          </div>
          <ServiceHeroVisual kind={kind} />
        </div>
      </section>

      <section className="section section-separated">
        <div className="container feature-grid">
          {features.map(([heading, body], index) => (
            <div className="feature-tile" key={heading}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <b>{heading}</b>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuoteEngine compact />
        </div>
      </section>
    </>
  )
}
