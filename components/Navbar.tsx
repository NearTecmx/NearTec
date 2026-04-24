'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Casos', href: '/casos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Cotizador', href: '/cotizador' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <div className="site-topbar__meta">
            <span>Tijuana · operación binacional</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </div>
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información sobre NearTec.')}`}
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
          <span className="site-brand__logo-shell site-brand__logo-shell--outline">
            <Image
              src="/images/neartec-logo-real.png"
              alt="NearTec"
              width={229}
              height={128}
              priority
              className="site-brand__logo site-brand__logo--real"
            />
          </span>
        </Link>

        <nav className="site-nav" aria-label="Navegación principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav__link ${pathname === item.href ? 'site-nav__link--active' : ''}`}
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
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero cotizar con NearTec.')}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary desktop-only"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className={`mobile-toggle ${mobileOpen ? 'mobile-toggle--open' : ''}`}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-drawer"
        className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className="mobile-drawer__panel" onClick={(event) => event.stopPropagation()}>
          <div className="mobile-drawer__top">
            <Image
              src="/images/neartec-logo-real.png"
              alt="NearTec"
              width={180}
              height={100}
              className="site-brand__logo site-brand__logo--drawer"
            />
            <button type="button" className="mobile-drawer__close" onClick={() => setMobileOpen(false)}>
              Cerrar
            </button>
          </div>

          <div className="mobile-drawer__content">
            <div>
              <p className="mobile-drawer__eyebrow">Secciones</p>
              <div className="mobile-drawer__links">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mobile-drawer__link ${pathname === item.href ? 'mobile-drawer__link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-drawer__cta-block">
              <h3 className="mobile-drawer__title">Diseño, automatización, sistemas e infraestructura para vender mejor.</h3>
              <p className="mobile-drawer__copy">
                NearTec te ayuda a captar clientes, dar seguimiento, operar tu negocio y montar la base tecnológica que sí te deja crecer.
              </p>
              <div className="mobile-drawer__actions">
                <Link href="/cotizador" className="btn-primary btn-primary--full">Cotizar</Link>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero cotizar con NearTec.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary btn-secondary--light btn-secondary--full"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mobile-drawer__contact">
              <p className="mobile-drawer__eyebrow">Contacto</p>
              <div className="mobile-drawer__contact-grid">
                <div>
                  <strong>Cobertura</strong>
                  <span>Tijuana · operación binacional</span>
                </div>
                <div>
                  <strong>Correo</strong>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
                <div>
                  <strong>Teléfono</strong>
                  <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
