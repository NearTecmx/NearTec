import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/soluciones' },
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.4" />
      <path d="M4.8 7l7.2 5.5L19.2 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M7.8 4.8h2.8l1.3 3.2-1.8 1.8a13.1 13.1 0 0 0 4.1 4.1l1.8-1.8 3.2 1.3v2.8c0 .8-.7 1.5-1.5 1.5A13.5 13.5 0 0 1 6.3 6.3c0-.8.7-1.5 1.5-1.5Z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer-premium">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="site-footer-premium__panel">
          <div className="grid gap-10 border-b border-[rgba(255,255,255,0.08)] pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-8">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/images/neartec-logo.png" alt="NearTec" width={170} height={56} className="site-footer-premium__logo site-footer-premium__logo--white h-auto w-[150px]" />
              </div>
              <h2 className="mt-5 max-w-md text-2xl font-black text-white md:text-3xl">
                Tecnología que ayuda a vender mejor y operar con más control.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.72)]">
                Sitio web, automatización, cloud, correo, CompuNegocio e integración fiscal en una sola ruta.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/cotizador" className="btn-primary">Cotizar</Link>
                <a href="https://wa.me/526644046194?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec." target="_blank" rel="noreferrer" className="btn-secondary btn-secondary--light">
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Navegación</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link footer-link--light">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Contacto</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[rgba(255,255,255,0.72)]">
                <p className="footer-contact-row"><span className="footer-contact-row__icon"><MapPinIcon /></span><span>Tijuana, Baja California</span></p>
                <p className="footer-contact-row">
                  <span className="footer-contact-row__icon"><MailIcon /></span>
                  <a className="footer-link footer-link--light" href="mailto:meta@itimbre.com">meta@itimbre.com</a>
                </p>
                <p className="footer-contact-row">
                  <span className="footer-contact-row__icon"><PhoneIcon /></span>
                  <a className="footer-link footer-link--light" href="tel:6644046194">664 404 6194</a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-[rgba(255,255,255,0.62)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} NearTec. Todos los derechos reservados.</p>
            <p>Web · CRM · Cloud · CompuNegocio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
