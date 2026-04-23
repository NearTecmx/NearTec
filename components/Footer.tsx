import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'

const links = [
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
    <footer className="site-footer-premium">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="site-footer-premium__panel">
          <div className="grid gap-10 border-b border-[rgba(255,255,255,0.1)] pb-10 lg:grid-cols-[1.2fr_0.85fr_0.95fr] lg:gap-8">
            <div>
              <Image
                src="/images/neartec-logo-real.png"
                alt="NearTec"
                width={220}
                height={120}
                className="site-footer-premium__logo"
              />
              <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight text-white">
                Diseño, automatización, sistemas e infraestructura para vender mejor.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[rgba(255,255,255,0.76)]">
                NearTec ayuda a captar clientes, ordenar la operación y montar una base tecnológica más clara para crecer sin fricción.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/cotizador" className="btn-primary">
                  Cotizar
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero una propuesta con NearTec.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary btn-secondary--light"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="footer-heading">Secciones</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link footer-link--light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Contacto</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[rgba(255,255,255,0.76)]">
                <p>
                  <span className="block font-black text-white">Cobertura</span>
                  Tijuana · operación binacional
                </p>
                <p>
                  <span className="block font-black text-white">Correo</span>
                  <a className="footer-link footer-link--light" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </p>
                <p>
                  <span className="block font-black text-white">Teléfono</span>
                  <a className="footer-link footer-link--light" href={CONTACT.phoneHref}>
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-[rgba(255,255,255,0.62)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} NearTec. Todos los derechos reservados.</p>
            <p>Growth · Operations · Infrastructure</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
