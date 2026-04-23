'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const serviceLinks = [
  { label: 'Sitios web', href: '/diseno-web', description: 'Páginas y ecommerce para vender mejor.' },
  { label: 'Automatización', href: '/automatizacion', description: 'CRM, seguimiento y leads.' },
  { label: 'CompuNegocio', href: '/compunegocio', description: 'Punto de venta y control.' },
  { label: 'Infraestructura', href: '/infraestructura', description: 'Hosting, VPS, correo y nube.' },
  { label: 'Plataforma', href: '/plataforma', description: 'Vista completa del ecosistema.' },
]

const mainLinks = [
  { label: 'Casos', href: '/casos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

const serviceRoutes = ['/soluciones', '/plataforma', '/infraestructura', '/diseno-web', '/automatizacion', '/compunegocio']

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!panelRef.current) return
      if (!panelRef.current.contains(event.target as Node)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isServiceActive = serviceRoutes.includes(pathname)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <div className="site-topbar__meta">
            <span>Tijuana · MX</span>
            <a href="mailto:meta@itimbre.com">meta@itimbre.com</a>
            <a href="tel:6644046194">664 404 6194</a>
          </div>
          <a href="https://wa.me/526644046194?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec." target="_blank" rel="noreferrer" className="site-topbar__cta">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="Ir al inicio de NearTec">
          <span className="site-brand__logo-shell site-brand__logo-shell--premium">
            <span className="site-brand__logo-glow" />
            <Image src="/images/neartec-logo.png" alt="NearTec" width={220} height={72} priority className="site-brand__logo" />
            <span className="site-brand__logo-sheen" />
          </span>
        </Link>

        <nav className="site-nav" aria-label="Navegación principal">
          <div ref={panelRef} className={`site-nav__item site-nav__item--dropdown ${servicesOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className={`site-nav__button ${isServiceActive ? 'site-nav__button--active' : ''}`}
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Servicios
              <span className="site-nav__caret">▾</span>
            </button>

            <div className="site-nav__dropdown site-nav__dropdown--sales">
              <div className="site-nav__dropdown-grid">
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="site-nav__dropdown-card">
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.map((item) => (
            <Link key={item.href} href={item.href} className={`site-nav__link ${pathname === item.href ? 'site-nav__link--active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-actions">
          <Link href="/cotizador" className="btn-secondary desktop-only">
            Cotizar
          </Link>
          <Link href="/contacto" className="btn-primary desktop-only">
            Hablar
          </Link>
          <button type="button" className="mobile-toggle" aria-label="Abrir menú" aria-expanded={mobileOpen} onClick={() => setMobileOpen((prev) => !prev)}>
            Menú
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-menu__header">
              <Image src="/images/neartec-logo.png" alt="NearTec" width={170} height={56} className="site-brand__logo site-brand__logo--mobile" />
              <button type="button" className="mobile-menu__close" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">
                Cerrar
              </button>
            </div>

            <nav className="mobile-menu__nav" aria-label="Menú móvil">
              <Link href="/" className={`mobile-menu__link ${pathname === '/' ? 'mobile-menu__link--active' : ''}`}>Inicio</Link>
              {serviceLinks.map((item) => (
                <Link key={item.href} href={item.href} className={`mobile-menu__link ${pathname === item.href ? 'mobile-menu__link--active' : ''}`}>
                  {item.label}
                </Link>
              ))}
              {mainLinks.map((item) => (
                <Link key={item.href} href={item.href} className={`mobile-menu__link ${pathname === item.href ? 'mobile-menu__link--active' : ''}`}>
                  {item.label}
                </Link>
              ))}
              <Link href="/cotizador" className={`mobile-menu__link ${pathname === '/cotizador' ? 'mobile-menu__link--active' : ''}`}>Cotizador</Link>
            </nav>

            <div className="mobile-menu__footer">
              <Link href="/contacto" className="btn-primary">Hablar</Link>
              <a href="https://wa.me/526644046194?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec." target="_blank" rel="noreferrer" className="btn-secondary">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
