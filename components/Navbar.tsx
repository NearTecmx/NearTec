'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'

const links = [
  ['Inicio', '/'],
  ['Soluciones', '/soluciones'],
  ['Automatización', '/automatizacion'],
  ['CompuNegocio', '/compunegocio'],
  ['Blog', '/blog'],
  ['Cotizador', '/cotizador'],
  ['Contacto', '/contacto'],
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero cotizar un servicio de NearTec.')}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="NearTec inicio">
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={229} height={128} priority className="brand-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.slice(0, 5).map(([label, href]) => <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link href="/cotizador" className="btn btn-green compact">Cotizar</Link>
          <a href={whatsappHref} className="btn btn-outline compact" target="_blank" rel="noreferrer">WhatsApp</a>
          <button type="button" className="menu-btn" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}><span /><span /><span /></button>
        </div>
      </div>

      <div className={`drawer ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Menú NearTec">
        <button type="button" className="drawer-scrim" aria-label="Cerrar menú" onClick={() => setOpen(false)} />
        <aside className="drawer-panel">
          <div className="drawer-top">
            <Image src="/images/neartec-logo-real.png" alt="NearTec" width={229} height={128} className="drawer-logo" />
            <button type="button" onClick={() => setOpen(false)} className="drawer-close">Cerrar</button>
          </div>
          <nav className="drawer-links">
            {links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>)}
          </nav>
          <div className="drawer-card">
            <h2>Vende más. Opera sin fricción.</h2>
            <p>Sitio web, CRM, CompuNegocio, nube y soporte en una ruta clara.</p>
            <Link href="/cotizador" className="btn btn-green">Cotizar</Link>
            <a href={whatsappHref} className="btn btn-dark" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </aside>
      </div>
    </header>
  )
}
