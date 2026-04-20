'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Cotizar', href: '#cotizador' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link href="#inicio" className="site-brand" aria-label="Ir al inicio de NearTec">
          <Image
            src="/images/neartec-logo.png"
            alt="NearTec"
            width={220}
            height={72}
            priority
          />
        </Link>

        <nav className="site-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-actions">
          <a href="tel:6631656898" className="site-phone">
            663 165 6898
          </a>

          <a
            href="https://wa.me/526631656898"
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-primary--sm"
          >
            WhatsApp
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
        <div className="mobile-menu">
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

            <a
              href="https://wa.me/526631656898"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mobile-menu__cta"
              onClick={() => setMobileOpen(false)}
            >
              Hablar por WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}