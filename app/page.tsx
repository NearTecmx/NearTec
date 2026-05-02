import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import LeadForm from '@/components/LeadForm'
import { HomeHeroAsset, ServiceShowcaseVisual } from '@/components/AssetVisuals'
import { CONTACT, leadPains, proofStats, solutions } from '@/lib/neartec-data'

export default function HomePage(){
  return <>
    <section className="hero hero-v46">
      <div className="container hero-grid hero-grid-v46">
        <div className="hero-copy hero-copy-v46">
          <span className="eyebrow eyebrow-solid">Integrador tecnológico para empresas</span>
          <h1>Desarrollamos tecnología para que tu empresa venda, opere y escale.</h1>
          <p>
            NearTec diseña e integra sitios web, apps, automatizaciones, CRM,
            inteligencia artificial, CompuNegocio, CN7, nube, soporte y desarrollos
            a medida para que tu empresa tenga mejor presencia, más control y una
            operación más sólida.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-green" href="/cotizador">Cotizar proyecto</Link>
            <Link className="btn btn-outline" href="/landing">Diagnóstico tecnológico</Link>
          </div>

          <div className="pricing-signal">
            <span>CompuNegocio desde <b>$450 MXN</b> por estación / mes</span>
            <span>CN7 desde <b>$99 USD</b> / mes</span>
            <span>Implementación base <b>$1,500 MXN</b></span>
          </div>
        </div>

        <HomeHeroAsset/>
      </div>

      <div className="container trust-strip elevated-strip">
        {proofStats.map(([a,b])=><div key={a}><b>{a}</b><span>{b}</span></div>)}
      </div>
    </section>

    <section className="section section-separated">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Soluciones conectadas</span>
            <h2>Desarrollo, automatización, operación e infraestructura en una misma ruta.</h2>
          </div>
          <p>
            NearTec no se limita a captar prospectos. También desarrolla,
            integra y da soporte a la tecnología que necesita tu negocio para
            vender, operar, respaldarse y crecer con orden.
          </p>
        </div>

        <ServiceShowcaseVisual/>

        <div className="solutions-grid premium-grid">
          {solutions.map(s=><Link href={s.href} className={`solution-card-v2 accent-${s.accent}`} key={s.title}>
            <div className="card-topline"><small>{s.tag}</small><span>{s.metric}</span></div>
            <h3>{s.title}</h3><p>{s.summary}</p>
            <ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>
            <b className="card-link">Ver solución →</b>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="section section-system">
      <div className="container system-panel">
        <div className="section-heading center">
          <span className="eyebrow">Lo que realmente hacemos</span>
          <h2>No solo hacemos una web: conectamos la capa comercial, operativa y técnica.</h2>
          <p>
            Desde la presencia digital hasta el punto de venta, la nube,
            el soporte, las automatizaciones y el desarrollo a medida.
          </p>
        </div>

        <div className="flow-rail">
          {[
            'Web, apps o landing',
            'Automatización y CRM',
            'Cotización y propuesta',
            'Operación con CompuNegocio',
            'CN7, nube y soporte',
          ].map((item,i)=><div className="flow-step" key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}
        </div>

        <div className="pain-grid refined-pain">
          {leadPains.map(([a,b])=><div className="pain-card" key={a}><b>{a}</b><p>{b}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section" id="cotizador">
      <div className="container"><QuoteEngine/></div>
    </section>

    <section className="section section-separated compact-section">
      <div className="container split lead-block">
        <div className="section-heading">
          <span className="eyebrow">Diagnóstico y contacto</span>
          <h2>Cuéntanos qué necesitas y definimos si conviene web, app, automatización, nube, CompuNegocio o una solución a medida.</h2>
          <p>
            Si tu proyecto necesita desarrollo, integración, soporte o una ruta
            completa, te ayudamos a aterrizar el siguiente paso.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-dark" href="/landing">Abrir landing</Link>
            <a className="btn btn-outline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
        <LeadForm source="home-v462"/>
      </div>
    </section>
  </>
}
