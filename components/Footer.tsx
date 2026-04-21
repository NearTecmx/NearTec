import Link from 'next/link'

const footerCols = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Soluciones', href: '/soluciones' },
      { label: 'Software', href: '/sistemas' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'NearTec', href: '/nosotros' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Diagnóstico', href: '/contacto' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer-premium">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="site-footer-premium__panel">
          <div className="grid gap-10 border-b border-[rgba(255,255,255,0.08)] pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-8">
            <div>
              <span className="nt-badge nt-badge--dark">NearTec</span>

              <h2 className="mt-4 max-w-sm text-2xl font-black text-white md:text-3xl">
                Centraliza crecimiento, operación e infraestructura.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.72)]">
                Un ecosistema para vender mejor, operar mejor y mantener control sin depender
                de proveedores aislados.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto" className="btn-primary">
                  Iniciar diagnóstico
                </Link>

                <a
                  href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary btn-secondary--light"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {footerCols.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                  {col.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link footer-link--light">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                Contacto
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-[rgba(255,255,255,0.72)]">
                <p>
                  <span className="block font-bold text-white">Cobertura</span>
                  Tijuana · Binacional
                </p>
                <p>
                  <span className="block font-bold text-white">Correo</span>
                  <a className="footer-link footer-link--light" href="mailto:info@neartec.com">
                    info@neartec.com
                  </a>
                </p>
                <p>
                  <span className="block font-bold text-white">Teléfono</span>
                  <a className="footer-link footer-link--light" href="tel:6631656898">
                    663 165 6898
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-[rgba(255,255,255,0.62)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} NearTec. Todos los derechos reservados.</p>
            <p>Growth · Operations · Infrastructure</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
