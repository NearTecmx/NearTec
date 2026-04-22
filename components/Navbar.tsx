'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const solutionLinks = [
  { label: 'Plataforma', href: '/plataforma' },
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Infraestructura', href: '/infraestructura' },
  { label: 'Diseño Web', href: '/diseno-web' },
]

const mainLinks = [
  { label: 'Casos', href: '/casos' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const solutionRoutes = [
  '/soluciones',
  '/plataforma',
  '/automatizacion',
  '/compunegocio',
  '/infraestructura',
  '/diseno-web',
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
    setSolutionsOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href
  const isSolutionsActive = solutionRoutes.includes(pathname)

  return (
    <header className="site-header site-header--simple">
      <div className="site-header__inner site-header__inner--compact">
        <Link href="/" className="site-brand" aria-label="Ir al inicio de NearTec">
          <Image
            src="/images/neartec-logo.png"
            alt="NearTec"
            width={164}
            height={48}
            priority
            className="site-brand__logo site-brand__logo--flat"
          />
        </Link>

        <nav className="site-nav site-nav--simple" aria-label="Navegación principal">
          <div
            className={`site-nav__item site-nav__item--dropdown ${solutionsOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className={`site-nav__button ${isSolutionsActive ? 'site-nav__button--active' : ''}`}
              onClick={() => setSolutionsOpen((prev) => !prev)}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Soluciones
              <span className="site-nav__caret">▾</span>
            </button>

            <div className="site-nav__dropdown site-nav__dropdown--simple">
              <div className="site-nav__dropdown-grid site-nav__dropdown-grid--simple">
                {solutionLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="site-nav__dropdown-card">
                    <strong>{item.label}</strong>
                    <span>Ver ruta</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav__link ${isActive(item.href) ? 'site-nav__link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-actions">
          <Link href="/cotizador" className="btn-primary desktop-only">
            Iniciar diagnóstico inteligente
          </Link>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
          <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-menu__header">
              <Image
                src="/images/neartec-logo.png"
                alt="NearTec"
                width={144}
                height={42}
                className="site-brand__logo site-brand__logo--flat"
              />
              <button
                type="button"
                className="mobile-menu__close"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                Cerrar
              </button>
            </div>

            <nav className="mobile-menu__nav" aria-label="Menú móvil">
              <Link href="/" className={`mobile-menu__link ${pathname === '/' ? 'mobile-menu__link--active' : ''}`}>
                Inicio
              </Link>
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-menu__link ${isActive(item.href) ? 'mobile-menu__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              {mainLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-menu__link ${isActive(item.href) ? 'mobile-menu__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <Link href="/cotizador" className="btn-primary w-full text-center">
                Iniciar diagnóstico
              </Link>
              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20hablar%20con%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full text-center"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
