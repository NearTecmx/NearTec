import Link from 'next/link'
import SalesConsole from '@/components/SalesConsole'
import QuoteEngine from '@/components/QuoteEngine'
import LeadForm from '@/components/LeadForm'
import { CONTACT, leadPains, proofStats, solutions } from '@/lib/neartec-data'

export default function HomePage(){
  return <>
    <section className="hero hero-v41">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-solid">NearTec Sales Engine</span>
          <h1>Convierte prospectos en ventas con una operación conectada.</h1>
          <p>Web, CRM, WhatsApp, CompuNegocio, CN7, nube y soporte trabajando como un solo sistema: captar, filtrar, cotizar y avanzar con contexto.</p>
          <div className="hero-actions">
            <Link className="btn btn-green" href="/cotizador">Cotizar mi solución</Link>
            <Link className="btn btn-outline" href="/landing">Diagnóstico rápido</Link>
            <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
          </div>
          <div className="proof-line proof-line-tech">
            <span>Lead scoring</span><span>PDF automático</span><span>Webhook CRM</span><span>SEO + Lighthouse ready</span>
          </div>
        </div>
        <SalesConsole/>
      </div>
      <div className="container trust-strip elevated-strip">{proofStats.map(([a,b])=><div key={a}><b>{a}</b><span>{b}</span></div>)}</div>
    </section>

    <section className="section section-separated">
      <div className="container">
        <div className="section-heading split-heading">
          <div><span className="eyebrow">Soluciones conectadas</span><h2>Una web bonita no basta. Necesitas seguimiento, operación y cierre.</h2></div>
          <p>Integramos las piezas críticas para que el lead no llegue perdido, el asesor no improvise y la operación no dependa de mensajes sueltos.</p>
        </div>
        <div className="solutions-grid premium-grid">{solutions.map(s=><Link href={s.href} className={`solution-card-v2 accent-${s.accent}`} key={s.title}>
          <div className="card-topline"><small>{s.tag}</small><span>{s.metric}</span></div>
          <h3>{s.title}</h3><p>{s.summary}</p>
          <ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>
          <b className="card-link">Ver solución →</b>
        </Link>)}</div>
      </div>
    </section>

    <section className="section section-system">
      <div className="container system-panel">
        <div className="section-heading center"><span className="eyebrow">Ruta comercial</span><h2>Del clic al asesor con datos útiles, no con adivinanzas.</h2><p>Cada etapa prepara la siguiente. Esa es la diferencia entre recibir mensajes y construir ventas.</p></div>
        <div className="flow-rail">
          {['Atraer tráfico correcto','Calificar intención','Cotizar con precios base','Enviar contexto al asesor','Operar y dar soporte'].map((item,i)=><div className="flow-step" key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}
        </div>
        <div className="pain-grid refined-pain">{leadPains.map(([a,b])=><div className="pain-card" key={a}><b>{a}</b><p>{b}</p></div>)}</div>
      </div>
    </section>

    <section className="section" id="cotizador"><div className="container"><QuoteEngine/></div></section>

    <section className="section section-separated compact-section">
      <div className="container split lead-block">
        <div className="section-heading"><span className="eyebrow">Campañas y contacto</span><h2>Una landing directa para pauta y una home sólida para confianza.</h2><p>El tráfico frío entra por diagnóstico. El lead con intención avanza al cotizador. Ventas recibe contexto, no solo un nombre y un teléfono.</p><div className="hero-actions"><Link className="btn btn-dark" href="/landing">Abrir landing</Link><a className="btn btn-outline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div></div>
        <LeadForm source="home-v41"/>
      </div>
    </section>
  </>
}
