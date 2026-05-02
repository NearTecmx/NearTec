import Link from 'next/link'
import { HeroSalesScene, SalesFunnelScene } from '@/components/VisualSystems'
import QuoteEngine from '@/components/QuoteEngine'
import LeadForm from '@/components/LeadForm'
import { CONTACT, leadPains, proofStats, solutions } from '@/lib/neartec-data'

export default function HomePage(){
  return <>
    <section className="hero hero-v41">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-solid">Tecnología para vender mejor</span>
          <h1>Haz que tu negocio venda más sin perseguir prospectos a ciegas.</h1>
          <p>Creamos la ruta completa para que más personas entiendan lo que vendes, te contacten con intención real y reciban una respuesta clara hasta llegar a cotización.</p>
          <div className="hero-actions">
            <Link className="btn btn-green" href="/cotizador">Quiero cotizar</Link>
            <Link className="btn btn-outline" href="/landing">Quiero diagnóstico</Link>
            <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
          </div>
          <div className="proof-line proof-line-tech">
            <span>Sitios que explican mejor</span><span>Seguimiento sin caos</span><span>Cotización más rápida</span><span>Operación con soporte</span>
          </div>
        </div>
        <HeroSalesScene/>
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
            <h2>Soluciones para que tu negocio se vea profesional, responda rápido y cierre mejor.</h2>
          </div>
          <p>Te ayudamos a convertir visitas, mensajes y dudas en oportunidades mejor atendidas, con herramientas que sí se entienden y sí se usan.</p>
        </div>
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
          <span className="eyebrow">Cómo te ayudamos a vender</span>
          <h2>Tu próximo cliente necesita entenderte rápido, contactarte fácil y recibir una respuesta que lo haga avanzar.</h2>
          <p>Así pasamos de visitas sueltas a prospectos con intención, contexto y siguiente paso.</p>
        </div>
        <SalesFunnelScene/>
        <div className="flow-rail">
          {[
            'Atraemos visitas correctas',
            'Explicamos mejor tu oferta',
            'Capturamos datos útiles',
            'Te ayudamos a cotizar más rápido',
            'Sostenemos la operación diaria',
          ].map((item,i)=><div className="flow-step" key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}
        </div>
        <div className="pain-grid refined-pain">
          {leadPains.map(([a,b])=><div className="pain-card" key={a}><b>{a}</b><p>{b}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section" id="cotizador"><div className="container"><QuoteEngine/></div></section>

    <section className="section section-separated compact-section">
      <div className="container split lead-block">
        <div className="section-heading">
          <span className="eyebrow">Diagnóstico y contacto</span>
          <h2>Empieza con una revisión rápida y descubre qué te conviene implementar primero.</h2>
          <p>Si necesitas más prospectos, mejor seguimiento, punto de venta, respaldo o una solución integral, te ayudamos a definir el siguiente paso.</p>
          <div className="hero-actions">
            <Link className="btn btn-dark" href="/landing">Abrir landing</Link>
            <a className="btn btn-outline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
        <LeadForm source="home-v42"/>
      </div>
    </section>
  </>
}
