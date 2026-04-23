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
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="site-footer-premium__panel">
          <div className="grid gap-10 border-b border-[rgba(255,255,255,0.08)] pb-10 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:gap-8">
            <div>
              <Image
                src="/images/neartec-logo-real.png"
                alt="NearTec"
                width={172}
                height={62}
                className="site-footer-premium__logo"
              />

              <h2 className="mt-5 max-w-md text-2xl font-black text-white md:text-3xl">
                Diseño, automatización, sistemas e infraestructura para vender mejor.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.74)]">
                NearTec integra presencia digital, operación, nube y seguimiento comercial para que una pyme deje de resolver todo por separado.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/cotizador" className="btn-primary">
                  Cotizar
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información y una propuesta de NearTec.')}`}
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
                {links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="footer-link text-[rgba(255,255,255,0.78)]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Contacto</h3>
              <div className="mt-5 space-y-5 text-sm leading-7 text-[rgba(255,255,255,0.78)]">
                <p>
                  <strong className="block text-white">Cobertura</strong>
                  Tijuana · operación binacional
                </p>
                <p>
                  <strong className="block text-white">Correo</strong>
                  <a href={`mailto:${CONTACT.email}`} className="footer-link">
                    {CONTACT.email}
                  </a>
                </p>
                <p>
                  <strong className="block text-white">Teléfono</strong>
                  <a href={CONTACT.phoneHref} className="footer-link">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-[rgba(255,255,255,0.6)] md:flex-row md:items-center md:justify-between">
            <p>© 2026 NearTec. Todos los derechos reservados.</p>
            <p>Growth · Operations · Infrastructure</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
