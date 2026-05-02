import Link from 'next/link'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer className="v5-footer">
      <div className="v5-container v5-footer-grid">
        <div>
          <h2>NearTec</h2>
          <p>Integrador tecnológico-comercial para empresas: web, apps, CRM, IA, CompuNegocio, CN7, nube, infraestructura, correo y soporte.</p>
          <div className="v5-footer-badges">
            <span>{CONTACT.rfc}</span>
            <span>{CONTACT.status}</span>
            <span>Tijuana, B.C.</span>
          </div>
        </div>
        <div>
          <b>Soluciones</b>
          {navItems.slice(1).map((item) => <p key={item.href}><Link href={item.href}>{item.label}</Link></p>)}
        </div>
        <div>
          <b>Acción</b>
          <p><Link href="/cotizador">Cotizador</Link></p>
          <p><Link href="/landing">Diagnóstico</Link></p>
          <p><Link href="/contacto">Contacto</Link></p>
          <p><Link href="/privacidad">Privacidad</Link></p>
        </div>
        <div>
          <b>Contacto</b>
          <p><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p>
          <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          <p>{CONTACT.address}</p>
        </div>
      </div>
    </footer>
  )
}
