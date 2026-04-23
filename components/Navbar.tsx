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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2.5A9.46 9.46 0 0 0 4 16.93L2.8 21.2l4.42-1.16A9.54 9.54 0 1 0 12.04 2.5Zm0 17.2a7.74 7.74 0 0 1-3.96-1.08l-.28-.16-2.63.69.7-2.57-.18-.27a7.75 7.75 0 1 1 6.35 3.39Zm4.3-5.8c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.11 3.65.57.24 1.02.38 1.37.48.58.18 1.12.15 1.54.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

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
            <span className="site-topbar__item">Tijuana · MX</span>
            <a href="mailto:meta@itimbre.com" className="site-topbar__item site-topbar__item--icon">
              <span className="site-topbar__icon"><MailIcon /></span>
              <span>meta@itimbre.com</span>
            </a>
            <a href="tel:6644046194" className="site-topbar__item site-topbar__item--icon">
              <span className="site-topbar__icon"><PhoneIcon /></span>
              <span>664 404 6194</span>
            </a>
          </div>
          <a href="https://wa.me/526644046194?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec." target="_blank" rel="noreferrer" className="site-topbar__cta site-topbar__cta--icon">
            <span className="site-topbar__icon site-topbar__icon--wa"><WhatsAppIcon /></span>
            <span>WhatsApp</span>
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
            <span />
            <span />
            <span />
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
