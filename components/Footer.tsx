import Link from 'next/link'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer className="v52-footer">
      <div className="v52-container v52-footer-grid">
        <div className="v52-footer-brand">
          <b>NearTec</b>
          <p>
            Desarrollo tecnológico, sistemas, web, nube, CompuNegocio, CN7,
            automatización, IA, soporte e infraestructura para empresas.
          </p>
          <small>RFC: {CONTACT.rfc}</small>
        </div>

        <nav className="v52-footer-links" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="v52-footer-contact">
          <a href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>{CONTACT.address}</span>
        </div>
      </div>
    </footer>
  )
}
