'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/automatizacion', label: 'Automatización' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/infraestructura', label: 'Infraestructura' },
  { href: '/diseno-web', label: 'Diseño web' },
  { href: '/emailing', label: 'Emailing' },
  { href: '/casos', label: 'Casos' },
  { href: '/blog', label: 'Blog' },
  { href: '/cotizador', label: 'Cotizador' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="site-header">
        <div className="container header-shell">
          <Link href="/" className="brand" aria-label="NearTec inicio">
            <Image
              src="/images/neartec-logo-real.png"
              alt="NearTec"
              width={220}
              height={78}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Principal">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`desktop-nav-link ${active ? 'is-active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="header-actions">
            <Link href="/cotizador" className="header-cta desktop-only">
              Cotizar
            </Link>

            <button
              type="button"
              className={`menu-toggle ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-backdrop ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        id="mobile-menu"
        className={`mobile-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-top">
            <div className="mobile-drawer-title">Menú</div>

            <button
              type="button"
              className="mobile-close"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
            >
              Cerrar
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Menú móvil">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${active ? 'is-active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="mobile-drawer-actions">
            <Link href="/cotizador" className="mobile-cta mobile-cta-primary">
              Cotizar
            </Link>
            <Link href="/contacto" className="mobile-cta mobile-cta-secondary">
              Contacto
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}