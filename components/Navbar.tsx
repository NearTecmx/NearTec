'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="v51-nav">
      <div className="v51-container v51-nav-inner">
        <Link href="/" className="v51-brand" aria-label="NearTec inicio" onClick={() => setOpen(false)}>
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={190} height={70} priority />
        </Link>

        <nav className="v51-desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="v51-nav-actions">
          <Link className="v51-nav-cta" href="/cotizador">Cotizar</Link>
          <button className="v51-menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú" aria-expanded={open}>
            <i /><i />
          </button>
        </div>
      </div>

      {open && (
        <div className="v51-mobile-menu">
          <div className="v51-mobile-card">
            <div className="v51-mobile-head">
              <b>NearTec</b>
              <button onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="v51-mobile-group">
              <span>Soluciones</span>
              {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            </div>
            <div className="v51-mobile-group actions">
              <span>Acción rápida</span>
              <Link href="/cotizador" onClick={() => setOpen(false)}>Cotizar proyecto</Link>
              <Link href="/landing" onClick={() => setOpen(false)}>Diagnóstico tecnológico</Link>
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={() => setOpen(false)}>WhatsApp {CONTACT.phoneDisplay}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
