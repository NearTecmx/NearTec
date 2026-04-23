'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'

const solutionLinks = [
  {
    label: 'Sitios web',
    href: '/diseno-web',
    description: 'Páginas y tiendas que explican y convierten.',
  },
  {
    label: 'CompuNegocio',
    href: '/compunegocio',
    description: 'Caja, inventario, estaciones y control.',
  },
  {
    label: 'Automatización',
    href: '/automatizacion',
    description: 'CRM, seguimiento y leads mejor filtrados.',
  },
  {
    label: 'Infraestructura',
    href: '/infraestructura',
    description: 'Hosting, correo, VPS y continuidad.',
  },
  {
    label: 'Emailing',
    href: '/emailing',
    description: 'Secuencias y campañas para vender más.',
  },
]

const primaryNav = [
  { label: 'Servicios', href: '/soluciones' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Cotizador', href: '/cotizador' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

const solutionRoutes = [
  '/soluciones',
  '/plataforma',
  '/infraestructura',
  '/diseno-web',
  '/emailing',
  '/automatizacion',
  '/compunegocio',
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const solutionsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
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
    const handleOutside = (event: MouseEvent) => {
      if (!solutionsRef.current) return
      if (!solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSolutionsOpen(false)
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEscape)
    }
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
            <span>Tijuana · Tecnología para vender y operar mejor</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </div>

          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información de NearTec.')}`}
            target="_blank"
            rel="noreferrer"
            className="site-topbar__cta"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="Ir al inicio de NearTec">
          <span className="site-brand__logo-wrap">
            <span className="site-brand__logo-aura" />
            <Image
              src="/images/neartec-logo.png"
              alt="NearTec"
              width={580}
              height={289}
              priority
              className="site-brand__logo"
            />
          </span>
        </Link>

        <nav className="site-nav" aria-label="Navegación principal">
          <div ref={solutionsRef} className="site-nav__item site-nav__item--dropdown">
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

            <div className={`site-nav__dropdown ${solutionsOpen ? 'site-nav__dropdown--open' : ''}`}>
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
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero hablar con ventas de NearTec.')}`}
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
                className={`mobile-menu__link mobile-menu__link--toggle ${
                  isSolutionsActive ? 'mobile-menu__link--active' : ''
                }`}
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                aria-expanded={mobileSolutionsOpen}
              >
                Soluciones
                <span>{mobileSolutionsOpen ? '−' : '+'}</span>
              </button>

              {mobileSolutionsOpen ? (
                <div className="mobile-menu__subnav">
                  {solutionLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="mobile-menu__sublink">
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </Link>
                  ))}

                  <Link href="/soluciones" className="mobile-menu__sublink mobile-menu__sublink--all">
                    Ver todo
                  </Link>
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
            </nav>

            <div className="mobile-menu__footer">
              <a href={`mailto:${CONTACT.email}`} className="mobile-menu__meta">
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneHref} className="mobile-menu__meta">
                {CONTACT.phoneDisplay}
              </a>

              <div className="mobile-menu__actions">
                <Link href="/cotizador" className="btn-secondary">
                  Cotizar
                </Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero hablar con ventas de NearTec.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}