'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="v52-navbar">
      <div className="v52-nav-inner">
        <Link href="/" className="v52-logo" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/neartec-logo-official.png"
            alt="NearTec"
            width={210}
            height={76}
            priority
          />
        </Link>

        <nav className="v52-nav-links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="v52-nav-actions">
          <Link className="v52-nav-cta" href="/cotizador">Cotizar</Link>
          <button
            className="v52-menu-btn"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="v52-mobile-menu">
          <div className="v52-mobile-card">
            <div className="v52-mobile-head">
              <b>NearTec</b>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X />
              </button>
            </div>

            <nav>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                  <span>→</span>
                </Link>
              ))}
            </nav>

            <a className="v52-mobile-contact" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
              WhatsApp {CONTACT.phoneDisplay}
            </a>
            <a className="v52-mobile-contact" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
