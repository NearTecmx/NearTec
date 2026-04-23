import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'

const links = [
  ['Soluciones', '/soluciones'],
  ['Automatización', '/automatizacion'],
  ['CompuNegocio', '/compunegocio'],
  ['Blog', '/blog'],
  ['Cotizador', '/cotizador'],
  ['Contacto', '/contacto'],
]

export default function Footer() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información de NearTec.')}`

  return (
    <footer className="ntx-footer">
      <div className="ntx-container">
        <div className="ntx-footer__panel">
          <div className="ntx-footer__brand">
            <Image src="/images/neartec-logo-real.png" alt="NearTec" width={229} height={128} className="ntx-footer__logo" />
            <h2>Diseño, automatización, sistemas e infraestructura para vender mejor.</h2>
            <p>NearTec integra presencia digital, operación, nube y seguimiento comercial para empresas que necesitan crecer con más orden.</p>
            <div className="ntx-footer__actions">
              <Link href="/cotizador" className="ntx-btn ntx-btn--green">Cotizar</Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="ntx-btn ntx-btn--ghost-dark">WhatsApp</a>
            </div>
          </div>

          <div className="ntx-footer__grid">
            <div>
              <p className="ntx-footer__heading">Secciones</p>
              <nav className="ntx-footer__links" aria-label="Footer">
                {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              </nav>
            </div>
            <div>
              <p className="ntx-footer__heading">Contacto</p>
              <div className="ntx-footer__contact">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                <span>Tijuana · operación binacional</span>
              </div>
            </div>
          </div>

          <div className="ntx-footer__bottom">
            <span>© 2026 NearTec. Todos los derechos reservados.</span>
            <span>Growth · Operations · Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
