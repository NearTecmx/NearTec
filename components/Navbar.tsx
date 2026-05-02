'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CONTACT, navItems } from '@/lib/site-data'

const extraLinks = [
  { href: '/cotizador', label: 'Cotizador' },
  { href: '/landing', label: 'Diagnóstico' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="v5-nav">
      <div className="v5-container v5-nav-inner">
        <Link href="/" className="v5-brand" aria-label="NearTec inicio" onClick={() => setOpen(false)}>
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={190} height={68} priority />
        </Link>

        <nav className="v5-desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="v5-nav-actions">
          <Link className="v5-nav-cta" href="/cotizador">Cotizar</Link>
          <button className="v5-menu-btn" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="v5-mobile-menu" role="dialog" aria-modal="true" aria-label="Menú NearTec">
          <div className="v5-mobile-menu-backdrop" onClick={() => setOpen(false)} />
          <div className="v5-mobile-menu-card">
            <div className="v5-mobile-menu-head">
              <b>NearTec</b>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú">×</button>
            </div>
            <div className="v5-mobile-menu-links">
              {[...navItems, ...extraLinks].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  <span>{item.label}</span>
                  <em>→</em>
                </Link>
              ))}
            </div>
            <div className="v5-mobile-contact">
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={() => setOpen(false)}>WhatsApp {CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`} onClick={() => setOpen(false)}>{CONTACT.email}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
