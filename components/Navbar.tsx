'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/automatizacion', label: 'Automatización' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/infraestructura', label: 'Infraestructura' },
  { href: '/casos', label: 'Casos' },
  { href: '/blog', label: 'Blog' },
  { href: '/cotizador', label: 'Cotizador' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="NearTec inicio">
            <Image
              src="/images/neartec-logo-real.png"
              alt="NearTec"
              width={229}
              height={128}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link href="/cotizador" className="btn btn-green compact">
              Cotizar
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-controls="neartec-drawer"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="neartec-drawer" className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button type="button" className="drawer-scrim" aria-label="Cerrar menú" onClick={() => setOpen(false)} />
        <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="Menú NearTec">
          <div className="drawer-top">
            <Link href="/" aria-label="NearTec inicio">
              <Image
                src="/images/neartec-logo-real.png"
                alt="NearTec"
                width={229}
                height={128}
                className="drawer-logo"
              />
            </Link>
            <button type="button" className="drawer-close" onClick={() => setOpen(false)}>
              Cerrar
            </button>
          </div>

          <nav className="drawer-links" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="drawer-card">
            <span className="eyebrow light">NearTec</span>
            <h2>Diseño, automatización, sistemas e infraestructura para vender mejor.</h2>
            <p>Tel. 664 404 6194 · meta@itimbre.com</p>
            <div className="button-row">
              <Link href="/cotizador" className="btn btn-green compact">
                Cotizar
              </Link>
              <a
                href="https://wa.me/526644046194?text=Hola%20NearTec%2C%20quiero%20informaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline compact"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
