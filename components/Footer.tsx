import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'

const footerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Cotizador', href: '/cotizador' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="footer-shell">
        <div className="footer-shell__grid">
          <div>
            <Image
              src="/images/neartec-logo-real.png"
              alt="NearTec"
              width={210}
              height={74}
              className="footer-logo"
            />
            <h2 className="mt-8 text-3xl font-black leading-[1.08] text-white md:text-[2.45rem]">
              Diseño, automatización, sistemas e infraestructura para vender mejor.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/78">
              NearTec ayuda a captar clientes, dar seguimiento, operar tu negocio y sostener la base tecnológica que sí te deja crecer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
              </Link>
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-secondary btn-secondary--light">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-shell__aside">
            <div>
              <p className="footer-shell__eyebrow">Secciones</p>
              <nav className="footer-shell__links" aria-label="Footer">
                {footerLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="footer-shell__eyebrow">Contacto</p>
              <div className="footer-contact-grid">
                <div>
                  <strong>Cobertura</strong>
                  <span>Tijuana · operación binacional</span>
                </div>
                <div>
                  <strong>Correo</strong>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
                <div>
                  <strong>Teléfono</strong>
                  <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shell__bottom">
          <span>© 2026 NearTec. Todos los derechos reservados.</span>
          <span>Growth · Operations · Infrastructure</span>
        </div>
      </div>
    </footer>
  )
}
