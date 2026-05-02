import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import { LeadFilterVisual } from '@/components/VisualSystems'
import { CONTACT } from '@/lib/neartec-data'
export const metadata = { title: 'Diagnóstico NearTec para captar más clientes', description: 'Landing enfocada en convertir visitas en oportunidades claras para negocios que necesitan web, CRM, CompuNegocio, CN7 o soporte.' }
export default function LandingPage(){ return <>
  <section className="landing-hero">
    <div className="container landing-grid">
      <div>
        <span className="eyebrow eyebrow-solid">Diagnóstico comercial</span>
        <h1>Haz que más personas entiendan tu negocio y te contacten con intención real.</h1>
        <p>Si tu sitio no convierte, WhatsApp se desordena o tu operación necesita más estructura, NearTec te ayuda a elegir la solución correcta y a empezar con una ruta clara.</p>
        <div className="hero-actions">
          <a className="btn btn-green" href="#aplicar">Quiero diagnóstico</a>
          <a className="btn btn-outline" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
        </div>
        <div className="landing-proof"><span>Más claridad para tu cliente</span><span>Respuesta rápida</span><span>Sin compromiso inicial</span></div>
      </div>
      <div className="landing-visual-stack"><LeadFilterVisual/><LeadForm source="landing-v42"/></div>
    </div>
  </section>
  <section className="section section-separated"><div className="container conversion-grid">
    <div className="conversion-card"><span>01</span><b>Escuchamos tu objetivo</b><p>Entendemos si buscas más prospectos, mejor seguimiento, punto de venta, respaldo o una solución completa.</p></div>
    <div className="conversion-card"><span>02</span><b>Te orientamos sin complicarte</b><p>Traducimos lo técnico a una recomendación simple, para que sepas qué necesitas aunque no seas experto.</p></div>
    <div className="conversion-card"><span>03</span><b>Te abrimos el siguiente paso</b><p>Puedes avanzar a cotización, WhatsApp o una propuesta inicial con la información correcta.</p></div>
  </div></section>
  <div id="aplicar" className="container pb-16"><Link className="btn btn-dark" href="/cotizador">Abrir cotizador completo</Link></div>
</> }
