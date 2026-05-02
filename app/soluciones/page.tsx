import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import { ServiceShowcaseVisual } from '@/components/AssetVisuals'
import { CONTACT, solutions, techLayers } from '@/lib/neartec-data'

export const metadata = {
  title: 'Soluciones NearTec',
  description: 'NearTec desarrolla e integra tecnología: web, apps, automatización, IA, CompuNegocio, CN7, nube, soporte, hosting, correo y proyectos a medida.',
}

export default function Page() {
  return (
    <>
      <section className="page-hero page-hero-v47">
        <div className="container page-hero-grid">
          <div className="page-copy">
            <span className="eyebrow eyebrow-solid">Soluciones NearTec</span>
            <h1>Tecnología para vender, operar, automatizar y crecer con más control.</h1>
            <p>
              Desarrollamos e integramos sitios web, apps, CRM, automatizaciones, IA, CompuNegocio,
              CN7, nube, hosting, correo, soporte y proyectos tecnológicos a medida.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-green" href="/cotizador">Cotizar solución</Link>
              <Link className="btn btn-outline" href="/landing">Diagnóstico tecnológico</Link>
              <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
          </div>
          <ServiceShowcaseVisual />
        </div>
      </section>

      <section className="section section-separated">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Capas de servicio</span><h2>NearTec cubre desde código hasta operación diaria.</h2></div>
            <p>La idea no es venderte herramientas aisladas; es conectar lo que tu empresa necesita para trabajar mejor.</p>
          </div>
          <div className="feature-grid">
            {techLayers.map(([heading, body], index) => (
              <div className="feature-tile" key={heading}><span>{String(index + 1).padStart(2, '0')}</span><b>{heading}</b><p>{body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-separated light-section">
        <div className="container solutions-grid premium-grid">
          {solutions.map((s) => (
            <Link href={s.href} className={`solution-card-v2 accent-${s.accent}`} key={s.title}>
              <div className="card-topline"><small>{s.tag}</small><span>{s.metric}</span></div>
              <h3>{s.title}</h3><p>{s.summary}</p>
              <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <b className="card-link">Ver solución →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-tight"><div className="container"><QuoteEngine compact /></div></section>
    </>
  )
}
