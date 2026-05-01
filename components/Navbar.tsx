'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CONTACT, navItems } from '@/lib/neartec-data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-shell">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="logo-wrap" aria-label="NearTec inicio">
            <Image src="/images/neartec-logo-real.png" alt="NearTec" width={230} height={92} className="logo-img" priority />
          </Link>
          <nav className="nav-links" aria-label="Navegación principal">
            {navItems.slice(0,5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/cotizador">Cotizador</Link>
          </nav>
          <div className="nav-cta">
            <a className="nav-phone" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            <Link className="btn btn-green" href="/landing">Diagnóstico</Link>
          </div>
          <button className="menu-btn" onClick={() => setOpen(v=>!v)} aria-expanded={open} aria-label="Abrir menú">☰</button>
        </div>
        {open && <div className="mobile-menu">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>)}
          <Link href="/cotizador" onClick={()=>setOpen(false)}>Cotizador</Link>
          <Link href="/landing" onClick={()=>setOpen(false)}>Diagnóstico</Link>
          <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={()=>setOpen(false)}>WhatsApp {CONTACT.phoneDisplay}</a>
        </div>}
      </div>
    </header>
  )
}
