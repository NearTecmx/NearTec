'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const solutionLinks = [
  {
    label: 'Plataforma',
    href: '/plataforma',
    description: 'Vista profunda de la arquitectura NearTec.',
  },
  {
    label: 'Infraestructura',
    href: '/infraestructura',
    description: 'Hosting, VPS, correo, respaldo y continuidad.',
  },
  {
    label: 'Diseño Web',
    href: '/diseno-web',
    description: 'Sitios, ecommerce y estructura de conversión.',
  },
  {
    label: 'Emailing',
    href: '/emailing',
    description: 'Campañas, secuencias y continuidad comercial.',
  },
]

const primaryNav = [
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Casos', href: '/casos' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const solutionRoutes = [
  '/soluciones',
  '/plataforma',
  '/infraestructura',
  '/diseno-web',
  '/emailing',
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const solutionsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!solutionsRef.current) return
      if (!solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setSolutionsOpen(false)
    setMobileOpen(false)
    setMobileSolutionsOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href
  const isSolutionsActive = solutionRoutes.includes(pathname)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <div className="site-topbar__meta">
            <span>Tijuana · operación binacional</span>
            <a href="mailto:info@neartec.com">info@neartec.com</a>
            <a href="tel:5628328998">(562) 832-8998</a>
          </div>

          <a
            href="https://wa.me/525628328998?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
            target="_blank"
            rel="noreferrer"
            className="site-topbar__cta"
          >
            WhatsApp directo
          </a>
        </div>
      </div>

      <div className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="Ir al inicio de NearTec">
          <span className="site-brand__logo-shell">
            <span className="site-brand__logo-glow" />
            <Image
              src="/images/neartec-logo.png"
              alt="NearTec"
              width={220}
              height={72}
              priority
              className="site-brand__logo"
            />
            <span className="site-brand__logo-sheen" />
          </span>
        </Link>

        <nav className="site-nav" aria-label="Navegación principal">
          <div
            ref={solutionsRef}
            className={`site-nav__item site-nav__item--dropdown ${
              solutionsOpen ? 'is-open' : ''
            }`}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className={`site-nav__button ${isSolutionsActive ? 'site-nav__button--active' : ''}`}
              onClick={() => setSolutionsOpen((prev) => !prev)}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Soluciones
              <span className="site-nav__caret">▾</span>
            </button>

            <div className="site-nav__dropdown">
              <div className="site-nav__dropdown-grid">
                {solutionLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="site-nav__dropdown-card">
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>

              <div className="site-nav__dropdown-footer">
                <Link href="/soluciones" className="site-nav__dropdown-link">
                  Ver todas las soluciones
                </Link>
              </div>
            </div>
          </div>

          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav__link ${isActive(item.href) ? 'site-nav__link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-actions">
          <Link href="/cotizador" className="btn-secondary desktop-only">
            Diagnóstico inteligente
          </Link>

          <a
            href="https://wa.me/525628328998?text=Hola,%20quiero%20una%20revisi%C3%B3n%20para%20mi%20empresa%20con%20NearTec."
            target="_blank"
            rel="noreferrer"
            className="btn-primary desktop-only"
          >
            Hablar con un asesor
          </a>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
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
              <span className="nt-badge nt-badge--soft">Menú</span>

              <button
                type="button"
                className="mobile-menu__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                Cerrar
              </button>
            </div>

            <nav className="mobile-menu__nav" aria-label="Menú móvil">
              <Link
                href="/"
                className={`mobile-menu__link ${pathname === '/' ? 'mobile-menu__link--active' : ''}`}
              >
                Inicio
              </Link>

              <button
                type="button"
                className={`mobile-menu__link mobile-menu__link--button ${
                  isSolutionsActive ? 'mobile-menu__link--active' : ''
                }`}
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Soluciones</span>
                <span className="mobile-menu__caret">{mobileSolutionsOpen ? '−' : '+'}</span>
              </button>

              {mobileSolutionsOpen ? (
                <div className="mobile-submenu">
                  <Link href="/soluciones" className="mobile-submenu__link">
                    Ver todas
                  </Link>
                  {solutionLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="mobile-submenu__link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-menu__link ${
                    isActive(item.href) ? 'mobile-menu__link--active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/cotizador"
                className={`mobile-menu__link ${
                  pathname === '/cotizador' ? 'mobile-menu__link--active' : ''
                }`}
              >
                Cotizador
              </Link>
            </nav>

            <div className="mobile-menu__footer">
              <Link href="/cotizador" className="btn-secondary">
                Iniciar diagnóstico
              </Link>

              <a
                href="https://wa.me/525628328998?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}