import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>NearTec</h2>
          <p>
            Desarrollo, automatización, infraestructura y soporte para empresas que necesitan tecnología útil, estable y conectada.
          </p>
          <div className="footer-badges">
            <span>{CONTACT.rfc}</span>
            <span>Tijuana, B.C.</span>
          </div>
        </div>

        <div>
          <b>Empieza</b>
          <p><Link href="/landing">Diagnóstico tecnológico</Link></p>
          <p><Link href="/cotizador">Cotizador</Link></p>
          <p><Link href="/contacto">Contacto</Link></p>
        </div>

        <div>
          <b>Soluciones</b>
          <p><Link href="/diseno-web">Web, apps y desarrollo</Link></p>
          <p><Link href="/crm-automatizacion">CRM, automatización e IA</Link></p>
          <p><Link href="/compunegocio">CompuNegocio, POS y timbres</Link></p>
          <p><Link href="/cn7">CN7, nube e infraestructura</Link></p>
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
