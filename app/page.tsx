import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import LeadForm from '@/components/LeadForm'
import { HomeHeroAsset, ServiceShowcaseVisual } from '@/components/AssetVisuals'
import { CONTACT, leadPains, priceSignals, proofStats, solutions, techLayers } from '@/lib/neartec-data'

export default function HomePage() {
  return (
    <>
      <section className="hero hero-v47">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-solid">Integrador tecnológico para empresas</span>
            <h1>Desarrollamos tecnología para que tu empresa venda, opere y escale.</h1>
            <p>
              NearTec diseña e integra web, apps, automatizaciones, CRM, inteligencia artificial,
              CompuNegocio, CN7, nube, correo, soporte e infraestructura para que tu operación funcione
              como una sola ruta tecnológica.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-green" href="/cotizador">Cotizar proyecto</Link>
              <Link className="btn btn-outline" href="/landing">Diagnóstico tecnológico</Link>
              <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
          </div>

          <HomeHeroAsset />
        </div>

        <div className="container trust-strip elevated-strip">
          {proofStats.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}
        </div>
      </section>

      <section className="section section-separated">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Soluciones conectadas</span>
              <h2>Una misma ruta para presencia, desarrollo, automatización, operación e infraestructura.</h2>
            </div>
            <p>
              NearTec no es solo una agencia de leads. Es un socio tecnológico que desarrolla, integra,
              automatiza, da soporte y sostiene la operación digital de tu empresa.
            </p>
          </div>

          <ServiceShowcaseVisual />

          <div className="solutions-grid premium-grid">
            {solutions.map((s) => (
              <Link href={s.href} className={`solution-card-v2 accent-${s.accent}`} key={s.title}>
                <div className="card-topline"><small>{s.tag}</small><span>{s.metric}</span></div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <b className="card-link">Ver solución →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-system">
        <div className="container system-panel">
          <div className="section-heading center">
            <span className="eyebrow">Arquitectura NearTec</span>
            <h2>No vendemos piezas sueltas. Conectamos la tecnología que tu empresa necesita para operar mejor.</h2>
            <p>Desde presencia digital hasta sistemas, nube, soporte, automatizaciones e integraciones a medida.</p>
          </div>

          <div className="layer-grid">
            {techLayers.map(([title, body]) => <div className="layer-card" key={title}><b>{title}</b><p>{body}</p></div>)}
          </div>

          <div className="pricing-signal">
            {priceSignals.map(([label, value]) => <span key={label}>{label} <b>{value}</b></span>)}
          </div>

          <div className="pain-grid refined-pain">
            {leadPains.map(([a, b]) => <div className="pain-card" key={a}><b>{a}</b><p>{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="cotizador">
        <div className="container"><QuoteEngine /></div>
      </section>

      <section className="section section-separated compact-section">
        <div className="container split lead-block">
          <div className="section-heading">
            <span className="eyebrow">Diagnóstico y contacto</span>
            <h2>Cuéntanos qué necesitas y definimos qué conviene desarrollar, integrar, automatizar o respaldar primero.</h2>
            <p>
              Si tu proyecto necesita web, app, IA, CRM, CompuNegocio, CN7, nube, soporte o una solución a medida,
              te ayudamos a aterrizar el siguiente paso.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-dark" href="/landing">Abrir diagnóstico</Link>
              <a className="btn btn-outline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <LeadForm source="home-v47" />
        </div>
      </section>
    </>
  )
}
