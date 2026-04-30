'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT } from '@/lib/neartec-pricing'

const primaryLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/plataforma', label: 'Plataforma' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/automatizacion', label: 'Automatización' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/blog', label: 'Recursos' },
  { href: '/contacto', label: 'Contacto' },
]

const serviceLinks = [
  {
    href: '/plataforma',
    label: 'Plataforma NearTec',
    caption: 'Ecosistema conectado: ventas, operación, nube y soporte',
  },
  {
    href: '/soluciones',
    label: 'Soluciones',
    caption: 'Mapa comercial por problema y necesidad',
  },
  {
    href: '/diseno-web',
    label: 'Diseño web',
    caption: 'Sitios, landings, SEO base y conversión',
  },
  {
    href: '/automatizacion',
    label: 'CRM y automatización',
    caption: 'Leads, seguimiento, WhatsApp y nurturing',
  },
  {
    href: '/compunegocio',
    label: 'Punto de venta',
    caption: 'CompuNegocio, CN7, ventas e inventario',
  },
  {
    href: '/infraestructura',
    label: 'Infraestructura',
    caption: 'Hosting, VPS, FTP, correo y respaldo',
  },
  {
    href: '/emailing',
    label: 'Emailing',
    caption: 'Campañas, comunicación y reactivación',
  },
  {
    href: '/cotizador',
    label: 'Cotizador',
    caption: 'Filtra tu proyecto y genera resumen',
  },
]

const companyLinks = [
  {
    href: '/nosotros',
    label: 'Nosotros',
    caption: 'Quién es NearTec y cómo integra tecnología',
  },
  {
    href: '/casos',
    label: 'Casos',
    caption: 'Prueba social, clientes y proyectos',
  },
  {
    href: '/recursos',
    label: 'Guías',
    caption: 'Contenido para decidir mejor',
  },
  {
    href: '/diagnostico',
    label: 'Diagnóstico',
    caption: 'Define tu necesidad antes de invertir',
  },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16.03 3.2A12.74 12.74 0 0 0 5.08 22.4L3.5 28.8l6.58-1.54A12.73 12.73 0 1 0 16.03 3.2Zm0 22.98c-2.07 0-4-.61-5.62-1.66l-.4-.25-3.91.91.94-3.8-.26-.4a10.2 10.2 0 1 1 9.25 5.2Zm5.6-7.63c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.69.16-.2.3-.79 1-.97 1.2-.18.21-.36.24-.67.08-.31-.15-1.3-.48-2.48-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.81.39-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.25 3.16c.15.2 2.15 3.28 5.2 4.6.73.31 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  )
}

function DrawerSection({
  title,
  links,
}: {
  title: string
  links: Array<{ href: string; label: string; caption?: string }>
}) {
  const pathname = usePathname()

  return (
    <section className="drawer-section" aria-label={title}>
      <p className="drawer-section-title">{title}</p>
      <div className="drawer-link-grid">
        {links.map((item) => (
          <Link
            key={`${title}-${item.href}-${item.label}`}
            href={item.href}
            className={pathname === item.href ? 'active' : ''}
          >
            <b>{item.label}</b>
            {item.caption ? <small>{item.caption}</small> : null}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const drawerId = 'neartec-mobile-menu'

  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hola NearTec, quiero cotizar una solución tecnológica para mi empresa.',
  )}`

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.classList.toggle('drawer-is-open', open)

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('drawer-is-open')
      window.removeEventListener('keydown', handleEscape)
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

          {primaryLinks.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={whatsappHref} className="btn btn-outline nav-whatsapp" target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
          <Link href="/cotizador" className="btn btn-green">
            Cotizar
          </Link>
        </div>

        <button
          type="button"
          className={`menu-btn ${open ? 'menu-btn--open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id={drawerId} className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button type="button" className="drawer-scrim" aria-label="Cerrar menú" onClick={() => setOpen(false)} />

        <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="Menú móvil NearTec">
          <div className="drawer-top">
            <Image src="/images/neartec-logo-real.png" alt="NearTec" width={150} height={56} className="drawer-logo" />
            <button type="button" className="drawer-close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="drawer-card">
            <span>Integrador tecnológico</span>
            <b>Web, automatización, POS, CN7, hosting, correo, emailing y soporte en una ruta comercial clara.</b>
          </div>

          <div className="drawer-kpi-grid" aria-label="Diferenciales NearTec">
            <div>
              <b>+20</b>
              <span>años</span>
            </div>
            <div>
              <b>Stack</b>
              <span>integral</span>
            </div>
            <div>
              <b>B2B</b>
              <span>operación</span>
            </div>
          </div>

          <DrawerSection title="Navegación" links={primaryLinks} />
          <DrawerSection title="Servicios" links={serviceLinks} />
          <DrawerSection title="Empresa" links={companyLinks} />

          <div className="drawer-actions">
            <Link href="/cotizador" className="btn btn-green">
              Diagnosticar mi empresa
            </Link>
            <a href={whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp directo
            </a>
          </div>
        </aside>
      </div>
    </header>
  )
}