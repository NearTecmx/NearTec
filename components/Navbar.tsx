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
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero cotizar un servicio de NearTec.')}`

  return (
    <header className={`ntx-header ${scrolled ? 'ntx-header--scrolled' : ''}`}>
      <div className="ntx-header__inner">
        <Link href="/" className="ntx-brand" aria-label="NearTec inicio">
          <span className="ntx-brand__halo" aria-hidden="true" />
          <Image
            src="/images/neartec-logo-real.png"
            alt="NearTec"
            width={229}
            height={128}
            priority
            className="ntx-brand__image"
          />
        </Link>

        <nav className="ntx-nav" aria-label="Navegación principal">
          {navLinks.slice(0, 6).map((item) => (
            <Link key={item.href} href={item.href} className={`ntx-nav__link ${pathname === item.href ? 'is-active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ntx-header__actions">
          <Link href="/cotizador" className="ntx-header__quote">
            Cotizar
          </Link>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="ntx-header__whatsapp">
            WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="ntx-menu-button"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`ntx-drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menú NearTec">
        <button type="button" aria-label="Cerrar menú" className="ntx-drawer__scrim" onClick={() => setOpen(false)} />
        <aside className="ntx-drawer__panel">
          <div className="ntx-drawer__top">
            <Link href="/" className="ntx-drawer__brand" aria-label="NearTec inicio">
              <Image
                src="/images/neartec-logo-real.png"
                alt="NearTec"
                width={229}
                height={128}
                className="ntx-drawer__logo"
              />
            </Link>
            <button type="button" className="ntx-drawer__close" onClick={() => setOpen(false)}>
              Cerrar
            </button>
          </div>

          <div className="ntx-drawer__body">
            <section>
              <p className="ntx-drawer__eyebrow">Menú</p>
              <div className="ntx-drawer__links">
                {navLinks.map((item) => (
                  <Link key={item.href} href={item.href} className={`ntx-drawer__link ${pathname === item.href ? 'is-active' : ''}`}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="ntx-drawer__pitch">
              <p className="ntx-drawer__eyebrow">NearTec</p>
              <h2>Diseño, automatización, sistemas e infraestructura para vender mejor.</h2>
              <p>Sitio web, CRM, CompuNegocio, nube y soporte en una ruta clara para crecer con orden.</p>
              <div className="ntx-drawer__ctas">
                <Link href="/cotizador" className="ntx-btn ntx-btn--green">Cotizar</Link>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="ntx-btn ntx-btn--ghost-dark">WhatsApp</a>
              </div>
            </section>

            <section className="ntx-drawer__contact">
              <p className="ntx-drawer__eyebrow">Contacto</p>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              <span>Tijuana · operación binacional</span>
            </section>
          </div>
        </aside>
      </div>
    </header>
  )
}
