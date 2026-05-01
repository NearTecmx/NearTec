import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import { CONTACT } from '@/lib/neartec-data'
export const metadata = { title: 'Diagnóstico comercial NearTec', description: 'Landing para captar leads potenciales con web, CRM, WhatsApp, CompuNegocio, CN7 y soporte.' }
export default function LandingPage(){ return <>
  <section className="landing-hero">
    <div className="container landing-grid">
      <div>
        <span className="eyebrow eyebrow-solid">Aplicar a diagnóstico</span>
        <h1>Tu próximo lead debe llegar con contexto, no como mensaje perdido.</h1>
        <p>Revisamos si tu web, WhatsApp, CRM, CompuNegocio o nube están frenando ventas. Si hay fit, armamos ruta de cotización y contacto directo.</p>
        <div className="hero-actions"><a className="btn btn-green" href="#aplicar">Quiero diagnóstico</a><a className="btn btn-outline" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a></div>
        <div className="landing-proof"><span>Respuesta con contexto</span><span>Sin compromiso inicial</span><span>Ruta comercial clara</span></div>
      </div>
      <LeadForm source="landing-v41"/>
    </div>
  </section>
  <section className="section section-separated"><div className="container conversion-grid">
    <div className="conversion-card"><span>01</span><b>Detectamos el bloqueo</b><p>Captación, seguimiento, operación POS, nube, respaldo, correo o soporte.</p></div>
    <div className="conversion-card"><span>02</span><b>Medimos intención</b><p>Tamaño, urgencia, servicio requerido y oportunidad comercial.</p></div>
    <div className="conversion-card"><span>03</span><b>Mandamos ruta a ventas</b><p>Cotización PDF, WhatsApp contextual y lead scoring para priorizar.</p></div>
  </div></section>
  <div id="aplicar" className="container pb-16"><Link className="btn btn-dark" href="/cotizador">Abrir cotizador completo</Link></div>
</> }
