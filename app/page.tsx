import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import {
  CommercialIntelligence,
  FinalTechCTA,
  HeroCommandCenter,
  HeroMetricStrip,
  PricingConstellation,
  ProcessAndCharts,
  ScenarioGrid,
  SolutionShowcase,
  TechLayerGrid,
} from '@/components/V5VisualSystem'
import { CONTACT } from '@/lib/site-data'

export default function HomePage() {
  return (
    <main className="v51-home">
      <section className="v51-hero">
        <div className="v51-hero-grid v51-container">
          <div className="v51-hero-copy">
            <span className="v51-eyebrow">Integrador tecnológico para empresas</span>
            <h1>Tecnología a medida para vender, operar y escalar.</h1>
            <p>
              Desarrollamos sitios web, apps, automatizaciones, IA, CRM, CompuNegocio,
              CN7, nube, soporte e infraestructura para empresas que necesitan crecer
              con control, no con parches digitales.
            </p>
            <div className="v51-actions">
              <Link className="v51-btn primary" href="/cotizador">Cotizar proyecto</Link>
              <Link className="v51-btn ghost" href="/landing">Agendar diagnóstico</Link>
            </div>
            <div className="v51-hero-proof">
              <span>RFC {CONTACT.rfc}</span>
              <span>Soporte remoto</span>
              <span>Precios base reales</span>
            </div>
          </div>

          <HeroCommandCenter />
        </div>
        <div className="v51-container"><HeroMetricStrip /></div>
      </section>

      <TechLayerGrid />
      <SolutionShowcase />
      <ProcessAndCharts />
      <CommercialIntelligence />
      <PricingConstellation />

      <section className="v51-section v51-quote" id="cotizador">
        <div className="v51-container">
          <div className="v51-section-head split">
            <div>
              <span>Cotizador</span>
              <h2>Convierte una necesidad en una propuesta clara.</h2>
            </div>
            <p>
              El cotizador usa precios base reales para CompuNegocio, CN7, implementación,
              soporte, desarrollo y timbres. Los proyectos a medida se validan por diagnóstico.
            </p>
          </div>
          <QuoteEngine />
        </div>
      </section>

      <ScenarioGrid />
      <FinalTechCTA />
    </main>
  )
}
