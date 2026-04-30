import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'

export const metadata: Metadata = {
  title: 'Contacto y cotización',
  description: 'Contacta a NearTec para cotizar diseño web, CRM, CompuNegocio, CN7, hosting, correo, emailing, automatización o soporte remoto.',
  alternates: { canonical: '/contacto' },
}

export default function ContactoPage() {
  const wa = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero hablar con NearTec.')}`
  return (
    <section className="section page">
      <div className="container split">
        <div>
          <span className="eyebrow">Contacto</span>
          <h1>Hablemos de tu siguiente venta, sistema o infraestructura.</h1>
          <p className="lead">Cuéntanos si necesitas sitio, CRM, CompuNegocio, CN7, hosting, correo, emailing o una solución conectada.</p>
          <div className="button-row"><a href={wa} target="_blank" rel="noreferrer" className="btn btn-green">WhatsApp</a><a href={`mailto:${CONTACT.email}`} className="btn btn-outline">Correo</a></div>
        </div>
        <div className="nt-card contact-card"><h2>Datos directos</h2><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><p>{CONTACT.address}</p><Link href="/cotizador" className="btn btn-green">Cotizar</Link></div>
      </div>
    </section>
  )
}
