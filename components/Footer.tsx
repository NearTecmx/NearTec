import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-data'

export default function Footer() {
  return (
    <footer className="v51-footer">
      <div className="v51-container v51-footer-grid">
        <div>
          <b>NearTec</b>
          <p>
            Desarrollo, automatización e infraestructura para empresas que necesitan
            vender, operar y escalar con control.
          </p>
          <small>RFC: {CONTACT.rfc || 'NEA040929DKA'}</small>
        </div>

        <nav aria-label="Footer NearTec">
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/diseno-web">Web / Apps</Link>
          <Link href="/crm-automatizacion">CRM / IA</Link>
          <Link href="/compunegocio">CompuNegocio</Link>
          <Link href="/cn7">CN7 / Nube</Link>
          <Link href="/cotizador">Cotizador</Link>
        </nav>

        <div>
          <a href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>{CONTACT.address}</span>
        </div>
      </div>
    </footer>
  )
}
