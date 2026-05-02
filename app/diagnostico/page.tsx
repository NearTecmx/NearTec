import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import { LandingSalesScene } from '@/components/VisualSystems'
import { CONTACT } from '@/lib/neartec-data'
export const metadata = { title: 'Diagnóstico NearTec', description: 'Descubre qué solución te conviene implementar primero para captar, atender y operar mejor.' }
export default function LandingPage(){ return <>
  <section className="landing-hero">
    <div className="container landing-grid">
      <div>
        <span className="eyebrow eyebrow-solid">Diagnóstico rápido</span>
        <h1>Si quieres vender más, primero ordenemos cómo llegan tus prospectos.</h1>
        <p>Revisamos qué te está frenando: web, WhatsApp, seguimiento, punto de venta, respaldo o cotización.</p>
        <div className="hero-actions"><a className="btn btn-green" href="#aplicar">Aplicar ahora</a><a className="btn btn-outline" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a></div>
        <div className="landing-proof"><span>Recomendación simple</span><span>Orientación rápida</span><span>Ruta inicial clara</span></div>
      </div>
      <div className="landing-visual-stack"><LandingSalesScene/><LeadForm source="diagnostico-v42"/></div>
    </div>
  </section>
  <section className="section section-separated"><div className="container conversion-grid">
    <div className="conversion-card"><span>01</span><b>Vemos dónde se atoran tus ventas</b><p>Sitio, formularios, respuesta comercial, operación o continuidad.</p></div>
    <div className="conversion-card"><span>02</span><b>Te explicamos qué te conviene</b><p>Sin lenguaje técnico innecesario y con pasos entendibles.</p></div>
    <div className="conversion-card"><span>03</span><b>Avanzas a cotización o contacto</b><p>Con una base más clara para decidir y comprar mejor.</p></div>
  </div></section>
  <div id="aplicar" className="container pb-16"><Link className="btn btn-dark" href="/cotizador">Abrir cotizador completo</Link></div>
</> }
