'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-data'

const links = [
  ['Soluciones', '/soluciones'],
  ['CompuNegocio', '/compunegocio'],
  ['CN7/Nube', '/cn7'],
  ['CRM', '/crm-automatizacion'],
  ['Web', '/diseno-web'],
  ['Soporte', '/soporte'],
  ['Cotizador', '/cotizador'],
  ['Diagnóstico', '/landing'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nt-navbar">
      <div className="container nt-navbar-inner">
        <Link href="/" className="nt-brand" aria-label="NearTec inicio" onClick={() => setOpen(false)}>
          <img src="/images/neartec-logo-real.png" alt="NearTec" />
        </Link>

        <nav className="nt-desktop-nav" aria-label="Navegación principal">
          {links.slice(0, 6).map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <div className="nt-nav-actions">
          <Link className="nt-nav-cta" href="/cotizador">Cotizar</Link>
          <button
            className="nt-menu-button"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nt-mobile-panel">
          <div className="nt-mobile-card">
            <div className="nt-mobile-head">
              <b>NearTec</b>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú">×</button>
            </div>

            <div className="nt-mobile-links">
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>

            <div className="nt-mobile-contact">
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={() => setOpen(false)}>
                WhatsApp {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} onClick={() => setOpen(false)}>
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
