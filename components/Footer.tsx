import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>NearTec</h2>
          <p>Te ayudamos a captar mejores prospectos, responder con más orden y operar con mayor control a través de web, CRM, CompuNegocio, CN7, nube y soporte.</p>
          <div className="footer-badges"><span>{CONTACT.rfc}</span><span>Tijuana, B.C.</span></div>
        </div>
        <div><b>Explorar</b><p><Link href="/landing">Diagnóstico</Link></p><p><Link href="/cotizador">Cotizador</Link></p><p><Link href="/contacto">Contacto</Link></p></div>
        <div><b>Soluciones</b><p><Link href="/diseno-web">Sitio web y landing</Link></p><p><Link href="/crm-automatizacion">CRM y automatización</Link></p><p><Link href="/compunegocio">CompuNegocio</Link></p></div>
        <div><b>Contacto</b><p><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p><p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p><p>{CONTACT.address}</p></div>
      </div>
    </footer>
  )
}
