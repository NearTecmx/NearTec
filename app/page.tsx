import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import QuoteEngine from '@/components/QuoteEngine'
import {
  CTAFlow,
  PricingSystem,
  ScenarioGrid,
  ScoringAndTracking,
  SolutionShowcase,
  TechLayerGrid,
  V5HeroVisual,
  WorkflowSystem,
} from '@/components/V5VisualSystem'
import { CONTACT, proofStats } from '@/lib/site-data'

export default function HomePage() {
  return (
    <>
      <section className="v5-hero">
        <div className="v5-container v5-hero-grid">
          <div className="v5-hero-copy">
            <span className="v5-eyebrow">Integrador tecnológico-comercial</span>
            <h1>Desarrollo, automatización e infraestructura para que tu empresa venda, opere y crezca con control.</h1>
            <p>
              NearTec integra sitios web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte e infraestructura para conectar la parte comercial, operativa y técnica de tu negocio.
            </p>
            <div className="v5-hero-actions">
              <Link className="v5-btn v5-btn-green" href="/cotizador">Cotizar proyecto</Link>
              <Link className="v5-btn v5-btn-light" href="/landing">Agendar diagnóstico</Link>
              <a className="v5-btn v5-btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
            <div className="v5-proof-strip">
              {proofStats.map(([title, text]) => <div key={title}><b>{title}</b><span>{text}</span></div>)}
            </div>
          </div>
          <V5HeroVisual />
        </div>
      </section>

      <TechLayerGrid />
      <SolutionShowcase />
      <WorkflowSystem />
      <ScoringAndTracking />
      <PricingSystem />

      <section className="v5-section" id="cotizador">
        <div className="v5-container">
          <div className="v5-section-head v5-center v5-before-quote">
            <span className="v5-eyebrow">Cotizador</span>
            <h2>Cotiza con base real antes de comprar tecnología.</h2>
            <p>Calcula una base preliminar para CompuNegocio, CN7, timbres, soporte y desarrollo; si el alcance es mayor, lo convertimos en propuesta.</p>
          </div>
          <QuoteEngine />
        </div>
      </section>

      <ScenarioGrid />

      <section className="v5-section v5-section-soft">
        <div className="v5-container v5-lead-grid">
          <div className="v5-section-head">
            <span className="v5-eyebrow">Diagnóstico y contacto</span>
            <h2>Cuéntanos qué necesitas y definimos la ruta correcta.</h2>
            <p>
              Puede ser web, app, automatización, CRM, IA, CompuNegocio, CN7, nube, soporte, correo o una solución integrada. El punto es ordenar el siguiente paso sin improvisar.
            </p>
            <div className="v5-hero-actions">
              <a className="v5-btn v5-btn-green" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
              <a className="v5-btn v5-btn-light" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <LeadForm source="home-v50" />
        </div>
      </section>

      <CTAFlow />
    </>
  )
}
