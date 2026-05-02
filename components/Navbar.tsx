'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CONTACT } from '@/lib/neartec-data'

const primaryLinks = [
  ['Soluciones', '/soluciones'],
  ['Web y apps', '/diseno-web'],
  ['Automatización e IA', '/crm-automatizacion'],
  ['CompuNegocio', '/compunegocio'],
  ['CN7/Nube', '/cn7'],
  ['Soporte', '/soporte'],
]

const actionLinks = [
  ['Cotizador', '/cotizador'],
  ['Diagnóstico', '/landing'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nt-navbar">
      <div className="container nt-navbar-inner">
        <Link href="/" className="nt-brand" aria-label="NearTec inicio" onClick={close}>
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={196} height={70} priority />
        </Link>

        <nav className="nt-desktop-nav" aria-label="Navegación principal">
          {primaryLinks.slice(0, 5).map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <div className="nt-nav-actions">
          <Link className="nt-nav-cta" href="/cotizador">Cotizar</Link>
          <button className="nt-menu-button" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nt-mobile-panel" role="dialog" aria-modal="true" aria-label="Menú NearTec">
          <div className="nt-mobile-card">
            <div className="nt-mobile-head">
              <b>NearTec</b>
              <button type="button" onClick={close} aria-label="Cerrar menú">×</button>
            </div>

            <div className="nt-mobile-group">
              <small>Soluciones principales</small>
              <div className="nt-mobile-links">
                {primaryLinks.map(([label, href]) => (
                  <Link key={href} href={href} onClick={close}>{label}<span>→</span></Link>
                ))}
              </div>
            </div>

            <div className="nt-mobile-group compact">
              <small>Acción</small>
              <div className="nt-mobile-links two-col">
                {actionLinks.map(([label, href]) => (
                  <Link key={href} href={href} onClick={close}>{label}<span>→</span></Link>
                ))}
              </div>
            </div>

            <div className="nt-mobile-contact">
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={close}>WhatsApp {CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`} onClick={close}>{CONTACT.email}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
