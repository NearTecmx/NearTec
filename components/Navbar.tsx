'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
            <span>Tijuana · San Diego</span>
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
        <Link href="#inicio" className="site-brand" aria-label="Ir al inicio de NearTec">
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
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-actions">
          <a href="#cotizador" className="btn-secondary btn-secondary--sm desktop-only">
            Cotizar
          </a>
          <a
            href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20de%20NearTec."
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-primary--sm desktop-only"
          >
            Hablar con asesor
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
              <span className="eyebrow">Navigation</span>
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
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <a href="#cotizador" className="btn-secondary" onClick={() => setMobileOpen(false)}>
                Cotizar
              </a>
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
