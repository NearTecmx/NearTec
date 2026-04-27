'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT } from '@/lib/neartec-pricing'

const navItems = [
  { href: '/', label: 'Inicio', desktop: true },
  { href: '/soluciones', label: 'Soluciones', desktop: true },
  { href: '/automatizacion', label: 'Automatización', desktop: true },
  { href: '/compunegocio', label: 'CompuNegocio', desktop: true },
  { href: '/infraestructura', label: 'Infraestructura', desktop: false },
  { href: '/diseno-web', label: 'Diseño web', desktop: false },
  { href: '/sistemas', label: 'Sistemas', desktop: false },
  { href: '/casos', label: 'Casos', desktop: true },
  { href: '/blog', label: 'Blog', desktop: true },
  { href: '/cotizador', label: 'Cotizador', desktop: false },
  { href: '/contacto', label: 'Contacto', desktop: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero información para ordenar mi operación digital.')}`

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="NearTec inicio">
            <Image
              src="/images/neartec-logo-real.png"
              alt="NearTec"
              width={229}
              height={128}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navItems.filter((item) => item.desktop).map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-outline compact">
              WhatsApp
            </a>
            <Link href="/cotizador" className="btn btn-green compact">
              Cotizar
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-controls="neartec-drawer"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="neartec-drawer" className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button type="button" className="drawer-scrim" aria-label="Cerrar menú" onClick={() => setOpen(false)} />
        <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="Menú NearTec">
          <div className="drawer-top">
            <Link href="/" aria-label="NearTec inicio">
              <Image
                src="/images/neartec-logo-real.png"
                alt="NearTec"
                width={229}
                height={128}
                className="drawer-logo"
              />
            </Link>
            <button type="button" className="drawer-close" onClick={() => setOpen(false)}>
              Cerrar
            </button>
          </div>

          <nav className="drawer-links" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="drawer-card">
            <span className="eyebrow light">NearTec</span>
            <h2>Diagnóstico, automatización, CompuNegocio e infraestructura para crecer con orden.</h2>
            <p>{CONTACT.phoneDisplay} · {CONTACT.email}</p>
            <div className="button-row">
              <Link href="/cotizador" className="btn btn-green compact">
                Cotizar
              </Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-outline compact">
                WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
