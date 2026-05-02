import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import { LandingAssetScene } from '@/components/AssetVisuals'
import { CONTACT } from '@/lib/neartec-data'

export const metadata = {
  title: 'Diagnóstico tecnológico NearTec',
  description: 'Detecta qué necesita tu empresa: web, apps, automatización, CRM, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.',
}

export default function LandingPage() {
  return (
    <>
      <section className="landing-hero">
        <div className="container landing-grid">
          <div className="page-copy">
            <span className="eyebrow eyebrow-solid">Diagnóstico tecnológico</span>
            <h1>Detecta qué tecnología necesita tu empresa para vender, operar y crecer mejor.</h1>
            <p>
              Revisamos si necesitas web, app, automatización, CRM, IA, CompuNegocio, CN7, nube,
              soporte, infraestructura o desarrollo a medida. Sin humo: una ruta clara y cotizable.
            </p>
            <div className="hero-actions">
              <a className="btn btn-green" href="#aplicar">Quiero mi diagnóstico</a>
              <a className="btn btn-outline" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
            </div>
            <div className="landing-proof">
              <span>Web / apps</span><span>CRM / IA</span><span>POS / CN7</span><span>Nube / soporte</span>
            </div>
          </div>
          <div className="landing-visual-stack"><LandingAssetScene /><LeadForm source="landing-v47" /></div>
        </div>
      </section>

      <section className="section section-separated">
        <div className="container conversion-grid">
          <div className="conversion-card"><span>01</span><b>Detectamos el cuello de botella</b><p>Presencia digital, operación, seguimiento, sistemas, nube, soporte o seguridad.</p></div>
          <div className="conversion-card"><span>02</span><b>Definimos la ruta técnica</b><p>Qué desarrollar, integrar, automatizar, migrar, respaldar o configurar primero.</p></div>
          <div className="conversion-card"><span>03</span><b>Avanzas con cotización clara</b><p>Con alcance, prioridad, módulos base y siguiente paso entendible.</p></div>
        </div>
      </section>

      <div id="aplicar" className="container pb-16"><Link className="btn btn-dark" href="/cotizador">Abrir cotizador completo</Link></div>
    </>
  )
}
