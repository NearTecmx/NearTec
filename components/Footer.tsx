import Link from 'next/link'

const footerColumns = [
  {
    title: 'Soluciones',
    links: [
      { label: 'Infraestructura empresarial', href: '#soluciones' },
      { label: 'Sistemas y plataformas', href: '#sistemas' },
      { label: 'Sectores atendidos', href: '#sectores' },
      { label: 'Cotización', href: '#cotizador' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Recursos', href: '#recursos' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'Inicio', href: '#inicio' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer-premium">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 border-b border-[rgba(227,235,216,0.9)] pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-8">
          <div>
            <span className="eyebrow">NearTec</span>
            <h2 className="mt-4 max-w-sm text-2xl font-black text-[var(--brand-ink)] md:text-3xl">
              Tecnología empresarial con visión operativa, comercial y de continuidad.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--brand-muted)]">
              Infraestructura, sistemas, acompañamiento y atención directa para empresas que
              necesitan crecer con más control y menos fricción.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#cotizador" className="btn-primary">
                Solicitar cotización
              </a>
              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20comercial%20de%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[var(--brand-ink)]">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[var(--brand-ink)]">
              Contacto
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--brand-muted)]">
              <p>
                <span className="block font-bold text-[var(--brand-ink)]">Cobertura</span>
                Tijuana · San Diego
              </p>
              <p>
                <span className="block font-bold text-[var(--brand-ink)]">Correo</span>
                <a className="footer-link" href="mailto:info@neartec.com">
                  info@neartec.com
                </a>
              </p>
              <p>
                <span className="block font-bold text-[var(--brand-ink)]">Teléfono</span>
                <a className="footer-link" href="tel:6631656898">
                  663 165 6898
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-[var(--brand-muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NearTec. Todos los derechos reservados.</p>
          <p>Infraestructura · Sistemas · Implementación · Continuidad operativa</p>
        </div>
      </div>
    </footer>
  )
}
