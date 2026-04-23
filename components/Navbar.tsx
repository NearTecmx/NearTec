'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'

const solutionLinks = [
  {
    label: 'Plataforma',
    href: '/plataforma',
    description: 'Cómo conecta ventas, operación y soporte.',
  },
  {
    label: 'Infraestructura',
    href: '/infraestructura',
    description: 'Hosting, VPS, correo y nube para operar mejor.',
  },
  {
    label: 'Diseño Web',
    href: '/diseno-web',
    description: 'Sitios y landing pages que ayudan a vender.',
  },
  {
    label: 'Emailing',
    href: '/emailing',
    description: 'Campañas, secuencias y seguimiento comercial.',
  },
]

const primaryNav = [
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Casos', href: '/casos' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

const solutionRoutes = ['/soluciones', '/plataforma', '/infraestructura', '/diseno-web', '/emailing']

function whatsappUrl(text: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const solutionsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
      if (!solutionsRef.current.contains(event.target as Node)) setSolutionsOpen(false)
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
            <span>Tijuana · MX</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </div>

          <a
            href={whatsappUrl('Hola, quiero información de NearTec.')}
            target="_blank"
            rel="noreferrer"
            className="site-topbar__cta"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>

      <div className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="Ir al inicio de NearTec">
          <span className="site-brand__logo-shell">
            <span className="site-brand__logo-outline" />
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
            className={`site-nav__item site-nav__item--dropdown ${solutionsOpen ? 'is-open' : ''}`}
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
                  Ver todo
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
            Cotizar
          </Link>

          <a
            href={whatsappUrl('Hola, quiero una cotización para mi empresa con NearTec.')}
            target="_blank"
            rel="noreferrer"
            className="btn-primary desktop-only"
          >
            Hablar
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
              <Link href="/" className={`mobile-menu__link ${pathname === '/' ? 'mobile-menu__link--active' : ''}`}>
                Inicio
              </Link>

              <button
                type="button"
                className={`mobile-menu__link mobile-menu__link--button ${isSolutionsActive ? 'mobile-menu__link--active' : ''}`}
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Soluciones</span>
                <span className="mobile-menu__caret">{mobileSolutionsOpen ? '−' : '+'}</span>
              </button>

              {mobileSolutionsOpen ? (
                <div className="mobile-submenu">
                  <Link href="/soluciones" className="mobile-submenu__link">
                    Ver todo
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
                  className={`mobile-menu__link ${isActive(item.href) ? 'mobile-menu__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/cotizador" className={`mobile-menu__link ${pathname === '/cotizador' ? 'mobile-menu__link--active' : ''}`}>
                Cotizador
              </Link>
            </nav>

            <div className="mobile-menu__footer">
              <Link href="/cotizador" className="btn-secondary">
                Cotizar
              </Link>

              <a
                href={whatsappUrl('Hola, quiero información de NearTec.')}
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
