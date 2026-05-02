import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import { LandingSalesScene } from '@/components/VisualSystems'
import { CONTACT } from '@/lib/neartec-data'

export const metadata = {
  title: 'Diagnóstico NearTec para captar más clientes',
  description: 'Convierte visitas y mensajes en oportunidades listas para cotizar con NearTec.',
}

export default function LandingPage() {
  return (
    <>
      <section className="landing-hero">
        <div className="container landing-grid">
          <div>
            <span className="eyebrow eyebrow-solid">Diagnóstico comercial</span>
            <h1>Convierte visitas y mensajes en oportunidades listas para cotizar.</h1>
            <p>
              NearTec te ayuda a ordenar tu presencia digital, captar mejores contactos
              y responder con una ruta clara para vender más.
            </p>
            <div className="hero-actions">
              <a className="btn btn-green" href="#aplicar">Quiero diagnóstico</a>
              <a className="btn btn-outline" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
                WhatsApp {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="landing-proof">
              <span>Más claridad para tu cliente</span>
              <span>Respuesta rápida</span>
              <span>Sin compromiso inicial</span>
            </div>
          </div>

          <div className="landing-visual-stack">
            <LandingSalesScene />
            <LeadForm source="landing-v45" />
          </div>
        </div>
      </section>

      <section className="section section-separated">
        <div className="container conversion-grid">
          <div className="conversion-card">
            <span>01</span>
            <b>Detectamos qué te está frenando</b>
            <p>Web, WhatsApp, seguimiento, punto de venta, respaldo o cotización.</p>
          </div>
          <div className="conversion-card">
            <span>02</span>
            <b>Te damos una ruta clara</b>
            <p>Sin tecnicismos innecesarios. Te explicamos qué conviene y por qué.</p>
          </div>
          <div className="conversion-card">
            <span>03</span>
            <b>Avanzas a cotización o asesor</b>
            <p>Con contexto suficiente para decidir y comprar mejor.</p>
          </div>
        </div>
      </section>

      <div id="aplicar" className="container pb-16">
        <Link className="btn btn-dark" href="/cotizador">Abrir cotizador completo</Link>
      </div>
    </>
  )
}
