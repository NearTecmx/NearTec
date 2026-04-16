import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/neartec', label: 'NearTec' },
  { href: '/itimbre', label: 'iTimbre' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
            <span className="text-lg font-black">N</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-muted">
              Ecosistema
            </p>
            <p className="text-lg font-black text-brand-blue">
              NearTec <span className="text-brand-green">&</span> iTimbre
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brand-muted transition hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+526631656898"
            className="hidden rounded-2xl border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:text-brand-green md:inline-flex"
          >
            663 165 68 98
          </a>
          <a
            href="mailto:info@itimbre.com"
            className="hidden rounded-2xl border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:text-brand-green xl:inline-flex"
          >
            info@itimbre.com
          </a>
          <Link href="/#selector" className="btn-primary">
            Cotizar
          </Link>
        </div>
      </div>
    </header>
  )
}
