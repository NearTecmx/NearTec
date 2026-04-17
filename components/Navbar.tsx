'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#soluciones', label: 'Soluciones' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Oficial NearTec */}
        <Link 
          href="/" 
          className="flex items-center gap-2 transition hover:opacity-80"
          aria-label="NearTec - Inicio"
        >
          {/* Simulación del logo: usar imagen real en /public/logo.svg */}
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-brand-ink">near</span>
            <span className="text-2xl font-black text-brand-green">tec</span>
          </div>
          <span className="hidden text-xs font-semibold text-brand-muted sm:inline">
            technology near you
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brand-muted transition hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact & CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+526631656898"
            className="hidden rounded-2xl border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:text-brand-green md:inline-flex"
            title="Llamar a NearTec"
          >
            663 165 68 98
          </a>
          <Link href="#cotizador" className="btn-primary hidden sm:inline-flex">
            Cotizar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6 text-brand-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-brand-line bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-brand-muted transition hover:text-brand-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="#cotizador" 
              className="btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cotizar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
