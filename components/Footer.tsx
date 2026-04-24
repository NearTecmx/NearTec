import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'

export default function Footer() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información de NearTec.')}`
  return (
    <footer className="footer">
      <div className="container footer-panel">
        <div className="footer-main">
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={229} height={128} className="footer-logo" />
          <h2>Diseño, automatización, sistemas e infraestructura para vender mejor.</h2>
          <p>NearTec integra presencia digital, operación, nube y seguimiento comercial para empresas que necesitan crecer con orden.</p>
          <div className="button-row"><Link href="/cotizador" className="btn btn-green">Cotizar</Link><a href={whatsappHref} className="btn btn-dark" target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
        <div className="footer-grid">
          <div><b>Secciones</b><Link href="/soluciones">Soluciones</Link><Link href="/automatizacion">Automatización</Link><Link href="/compunegocio">CompuNegocio</Link><Link href="/blog">Blog</Link></div>
          <div><b>Contacto</b><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><span>Tijuana, Baja California</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 NearTec</span><span>Growth · Operations · Infrastructure</span></div>
      </div>
    </footer>
  )
}
