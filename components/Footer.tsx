import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'

const columns = [
  {
    title: 'Servicios',
    links: [
      ['Diseño web', '/diseno-web'],
      ['Punto de venta', '/compunegocio'],
      ['Infraestructura', '/infraestructura'],
      ['Emailing', '/emailing'],
    ],
  },
  {
    title: 'Soluciones',
    links: [
      ['Solución total', '/soluciones'],
      ['Automatización', '/automatizacion'],
      ['Sistemas', '/sistemas'],
      ['Cotizador', '/cotizador'],
    ],
  },
  {
    title: 'Empresa',
    links: [
      ['Nosotros', '/nosotros'],
      ['Casos', '/casos'],
      ['Blog', '/blog'],
      ['Contacto', '/contacto'],
    ],
  },
]

export default function Footer() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hola NearTec, quiero hablar con un asesor.',
  )}`

  return (
    <footer className="footer">
      <div className="container footer-panel">
        <div className="footer-main">
          <div>
            <Image src="/images/neartec-logo-real.png" alt="NearTec" width={174} height={66} className="footer-logo" />
            <p>
              Soluciones tecnológicas para empresas: diseño web, punto de venta, hosting, servidores, correo, emailing,
              automatización y soporte.
            </p>

            <div className="footer-social" aria-label="Canales NearTec">
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp NearTec">
                ☏
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Correo NearTec">
                ✉
              </a>
              <Link href="/blog" aria-label="Blog NearTec">
                ✦
              </Link>
            </div>
          </div>

          <div className="footer-grid">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <b>{column.title}</b>
                {column.links.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

          <div className="footer-contact">
            <b>¿Hablamos?</b>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span>{CONTACT.address}</span>
            <Link href="/cotizador" className="btn btn-green">
              Cotizar proyecto
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NearTec. Todos los derechos reservados.</span>
          <div>
            <Link href="/contacto">Aviso de privacidad</Link>
            <Link href="/contacto">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}