'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT } from '@/lib/neartec-pricing'

const mainLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

const serviceLinks = [
  { href: '/diseno-web', label: 'Diseño web', caption: 'Sitios, landings y presencia digital' },
  { href: '/compunegocio', label: 'Punto de venta', caption: 'Ventas, inventario y reportes' },
  { href: '/infraestructura', label: 'Infraestructura', caption: 'Hosting, VPS, FTP, CN7 y respaldo' },
  { href: '/emailing', label: 'Emailing', caption: 'Campañas y comunicación empresarial' },
  { href: '/automatizacion', label: 'Automatización', caption: 'Flujos, seguimiento y operación' },
  { href: '/cotizador', label: 'Cotizador', caption: 'Filtra tu proyecto y genera resumen' },
]

const mobileLinks = [
  ...mainLinks,
  ...serviceLinks,
  { href: '/casos', label: 'Casos' },
  { href: '/recursos', label: 'Recursos' },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16.03 3.2A12.74 12.74 0 0 0 5.08 22.4L3.5 28.8l6.58-1.54A12.73 12.73 0 1 0 16.03 3.2Zm0 22.98c-2.07 0-4-.61-5.62-1.66l-.4-.25-3.91.91.94-3.8-.26-.4a10.2 10.2 0 1 1 9.25 5.2Zm5.6-7.63c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.69.16-.2.3-.79 1-.97 1.2-.18.21-.36.24-.67.08-.31-.15-1.3-.48-2.48-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.81.39-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.25 3.16c.15.2 2.15 3.28 5.2 4.6.73.31 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hola NearTec, quiero cotizar un proyecto tecnológico para mi empresa.',
  )}`

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="NearTec inicio">
          <Image
            src="/images/neartec-logo-real.png"
            alt="NearTec"
            width={166}
            height={62}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>

          <div className="nav-dropdown">
            <button type="button">
              Servicios <span>⌄</span>
            </button>
            <div className="nav-dropdown-panel">
              {serviceLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <b>{item.label}</b>
                  <small>{item.caption}</small>
                </Link>
              ))}
            </div>
          </div>

          {mainLinks.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={whatsappHref} className="btn btn-outline nav-whatsapp" target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            WhatsApp
          </a>
          <Link href="/cotizador" className="btn btn-green">
            Cotizar proyecto
          </Link>
        </div>

        <button
          type="button"
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button type="button" className="drawer-scrim" aria-label="Cerrar menú" onClick={() => setOpen(false)} />
        <aside className="drawer-panel" aria-label="Menú móvil NearTec">
          <div className="drawer-top">
            <Image src="/images/neartec-logo-real.png" alt="NearTec" width={145} height={55} className="drawer-logo" />
            <button type="button" className="drawer-close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="drawer-card">
            <span>Integrador tecnológico</span>
            <b>Web, punto de venta, hosting, VPS, FTP, correo, emailing, CN7 y soporte para empresas.</b>
          </div>

          <nav className="drawer-links" aria-label="Navegación móvil">
            {mobileLinks.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="drawer-actions">
            <Link href="/cotizador" className="btn btn-green">
              Cotizar proyecto
            </Link>
            <a href={whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              WhatsApp directo
            </a>
          </div>
        </aside>
      </div>
    </header>
  )
}