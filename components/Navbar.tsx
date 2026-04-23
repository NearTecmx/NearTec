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
    const onScroll = () => setScrolled(window.scrollY > 8)
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

  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero una propuesta de NearTec.')}`

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__shell">
        <Link href="/" className="site-logo" aria-label="NearTec inicio">
          <span className="site-logo__frame">
            <Image
              src="/images/neartec-logo-real.png"
              alt="NearTec"
              width={208}
              height={74}
              className="site-logo__image"
              priority
            />
          </span>
        </Link>

        <nav className="site-nav" aria-label="Principal">
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

        <div className="site-header__actions">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="site-header__cta">
            Cotizar
          </a>

          <button
            type="button"
            className="site-burger"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`} role="dialog" aria-modal="true">
        <button type="button" className="mobile-drawer__scrim" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)} />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__top">
            <Link href="/" className="mobile-drawer__brand" aria-label="NearTec inicio">
              <Image
                src="/images/neartec-logo-real.png"
                alt="NearTec"
                width={178}
                height={62}
                className="mobile-drawer__logo"
              />
            </Link>
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
              <p className="mobile-drawer__eyebrow">NearTec</p>
              <h3 className="mobile-drawer__title">Diseño, automatización, sistemas e infraestructura para vender mejor.</h3>
              <p className="mobile-drawer__copy">
                Si necesitas vender con más claridad o poner orden en tu operación, NearTec ya te puede orientar desde hoy.
              </p>
              <div className="mobile-drawer__actions">
                <Link href="/cotizador" className="btn-primary btn-primary--full">
                  Cotizar
                </Link>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary btn-secondary--light btn-secondary--full">
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
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
