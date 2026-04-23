import Link from 'next/link'
import Image from 'next/image'
import { CONTACT } from '@/lib/neartec-pricing'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/soluciones' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Cotizador', href: '/cotizador' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="site-footer__panel">
          <div className="grid gap-10 border-b border-[#e8eddc] pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-8">
            <div>
              <div className="footer-logo-wrap">
                <span className="footer-logo-wrap__aura" />
                <Image
                  src="/images/neartec-logo.png"
                  alt="NearTec"
                  width={580}
                  height={289}
                  className="footer-logo"
                />
              </div>

              <h2 className="mt-5 max-w-md text-2xl font-black text-[#0f1115] md:text-3xl">
                Tecnología que sí mueve ventas.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#66717a]">
                Sitio web, operación, automatización e infraestructura en una sola ruta.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/cotizador" className="btn-primary">
                  Cotizar
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información de NearTec.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#0f1115]">Navegación</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#0f1115]">Contacto</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[#66717a]">
                <p>
                  <span className="block font-bold text-[#0f1115]">Cobertura</span>
                  Tijuana · Atención comercial y técnica
                </p>
                <p>
                  <span className="block font-bold text-[#0f1115]">Correo</span>
                  <a className="footer-link" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </p>
                <p>
                  <span className="block font-bold text-[#0f1115]">Teléfono</span>
                  <a className="footer-link" href={CONTACT.phoneHref}>
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-[#66717a] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} NearTec. Todos los derechos reservados.</p>
            <p>Technology near you</p>
          </div>
        </div>
      </div>
    </footer>
  )
}