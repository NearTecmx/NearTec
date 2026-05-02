import Link from 'next/link'
import { SalesFunnelScene } from '@/components/VisualSystems'
import { HeroAssetScene } from '@/components/AssetVisuals'
import QuoteEngine from '@/components/QuoteEngine'
import LeadForm from '@/components/LeadForm'
import { CONTACT, leadPains, proofStats, solutions } from '@/lib/neartec-data'

export default function HomePage() {
  return (
    <>
      <section className="hero hero-v41">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-solid">Tecnología para vender mejor</span>
            <h1>Convierte visitas en clientes reales.</h1>
            <p>
              Web, WhatsApp, CRM y cotizador conectados para que cada prospecto entienda tu oferta, reciba respuesta rápida y avance con claridad.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-green" href="/cotizador">Cotizar mi solución</Link>
              <Link className="btn btn-outline" href="/landing">Quiero mi diagnóstico</Link>
              <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
                WhatsApp {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="proof-line proof-line-tech">
              <span>Prospectos mejor filtrados</span>
              <span>Respuesta más rápida</span>
              <span>Cotización clara</span>
              <span>Operación más estable</span>
            </div>
          </div>
          <HeroAssetScene />
        </div>

        <div className="container trust-strip elevated-strip">
          {proofStats.map(([a, b]) => (
            <div key={a}><b>{a}</b><span>{b}</span></div>
          ))}
        </div>
      </section>

      <section className="section section-separated">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Soluciones conectadas</span>
              <h2>Todo lo que necesitas para captar, atender y cerrar mejor.</h2>
            </div>
            <p>
              Te ayudamos a convertir visitas, mensajes y dudas en oportunidades mejor atendidas,
              con herramientas que sí se entienden y sí se usan.
            </p>
          </div>

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
            <span className="eyebrow">Cómo vendes mejor</span>
            <h2>Tu próximo cliente necesita entenderte rápido, contactarte fácil y recibir una respuesta clara.</h2>
            <p>Así pasamos de visitas sueltas a prospectos con intención, contexto y siguiente paso.</p>
          </div>

          <SalesFunnelScene />

          <div className="pain-grid refined-pain">
            {leadPains.map(([a, b]) => (
              <div className="pain-card" key={a}>
                <b>{a}</b>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="cotizador">
        <div className="container">
          <QuoteEngine />
        </div>
      </section>

      <section className="section section-separated compact-section">
        <div className="container split lead-block">
          <div className="section-heading">
            <span className="eyebrow">Diagnóstico y contacto</span>
            <h2>Empieza con una revisión rápida y descubre qué te conviene implementar primero.</h2>
            <p>
              Si necesitas más prospectos, mejor seguimiento, punto de venta, respaldo o una solución integral,
              te ayudamos a definir el siguiente paso.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-dark" href="/landing">Abrir diagnóstico</Link>
              <a className="btn btn-outline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <LeadForm source="home-v45" />
        </div>
      </section>
    </>
  )
}
