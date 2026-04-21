'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Cotizador', href: '/cotizador' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <div className="site-topbar__meta">
            <span>Tijuana · Operación binacional</span>
            <a href="mailto:info@neartec.com">info@neartec.com</a>
            <a href="tel:6631656898">663 165 6898</a>
          </div>

          <a
            href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
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
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`site-nav__link ${active ? 'site-nav__link--active' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="site-actions">
          <Link href="/cotizador" className="btn-secondary desktop-only">
            Diagnóstico inteligente
          </Link>

          <a
            href="https://wa.me/526631656898?text=Hola,%20quiero%20una%20revisi%C3%B3n%20para%20mi%20empresa%20con%20NearTec."
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
                onClick={() => setMobileOpen(false)}
              >
                Inicio
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mobile-menu__link ${
                    pathname === item.href ? 'mobile-menu__link--active' : ''
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <Link href="/cotizador" className="btn-secondary" onClick={() => setMobileOpen(false)}>
                Iniciar diagnóstico
              </Link>

              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
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
const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Plataforma', href: '/soluciones' },
  { label: 'Software', href: '/sistemas' },
  { label: 'NearTec', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <div className="site-topbar__meta">
            <span>Tijuana · Operación binacional</span>
            <a href="mailto:info@neartec.com">info@neartec.com</a>
            <a href="tel:6631656898">663 165 6898</a>
          </div>

          <a
            href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
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
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`site-nav__link ${active ? 'site-nav__link--active' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="site-actions">
          <Link href="/contacto" className="btn-secondary desktop-only">
            Diagnóstico
          </Link>

          <a
            href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20de%20NearTec."
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
              <span className="nt-badge nt-badge--soft">Menu</span>

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
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mobile-menu__link ${
                    pathname === item.href ? 'mobile-menu__link--active' : ''
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <Link href="/contacto" className="btn-secondary" onClick={() => setMobileOpen(false)}>
                Diagnóstico
              </Link>

              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20de%20NearTec."
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
