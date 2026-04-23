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

export default function Footer() {
  return (
    <footer className="site-footer-premium">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="site-footer-premium__panel">
          <div className="grid gap-10 border-b border-[rgba(255,255,255,0.08)] pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-8">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/images/neartec-logo.png" alt="NearTec" width={170} height={56} className="h-auto w-[150px]" />
              </div>
              <h2 className="mt-5 max-w-md text-2xl font-black text-white md:text-3xl">
                Tecnología para vender mejor y operar con más control.
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
                <p><span className="block font-bold text-white">Ciudad</span>Tijuana, Baja California</p>
                <p>
                  <span className="block font-bold text-white">Correo</span>
                  <a className="footer-link footer-link--light" href="mailto:meta@itimbre.com">meta@itimbre.com</a>
                </p>
                <p>
                  <span className="block font-bold text-white">Teléfono</span>
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
