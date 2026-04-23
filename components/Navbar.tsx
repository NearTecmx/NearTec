'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Automatización', href: '/automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Casos', href: '/casos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Cotizador', href: '/cotizador' },
  { label: 'Contacto', href: '/contacto' },
]

function Burger() {
  return (
    <span className="flex flex-col gap-[4px]" aria-hidden="true">
      <span className="h-[2px] w-5 rounded-full bg-[var(--brand-ink)]" />
      <span className="h-[2px] w-5 rounded-full bg-[var(--brand-ink)]" />
      <span className="h-[2px] w-5 rounded-full bg-[var(--brand-ink)]" />
    </span>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const whatsappHref = useMemo(
    () => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero una propuesta de NearTec.')}`,
    [],
  )

  return (
    <>
      <header className={`sticky top-0 z-[90] border-b transition-all duration-300 ${scrolled ? 'border-[rgba(17,19,24,0.08)] bg-[rgba(250,252,246,0.86)] shadow-[0_8px_24px_rgba(17,19,24,0.06)] backdrop-blur-xl' : 'border-transparent bg-[rgba(250,252,246,0.72)] shadow-[0_4px_12px_rgba(17,19,24,0.03)] backdrop-blur-lg'}`}>
        <div className="mx-auto flex min-h-[74px] max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Ir al inicio de NearTec">
            <span className="logo-halo rounded-[22px] px-1.5 py-1">
              <Image
                src="/images/neartec-logo-real.png"
                alt="NearTec"
                width={186}
                height={64}
                priority
                className="h-auto w-auto max-w-[168px] sm:max-w-[178px]"
              />
            </span>
          </Link>

          <nav className="ml-2 hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[12px] font-black uppercase tracking-[0.14em] transition ${pathname === item.href ? 'bg-[rgba(154,196,59,0.14)] text-[var(--brand-ink)]' : 'text-[var(--brand-muted)] hover:bg-white/80 hover:text-[var(--brand-ink)]'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">
              WhatsApp
            </a>
            <Link href="/cotizador" className="btn-primary">
              Cotizar
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-[rgba(17,19,24,0.08)] bg-white/88 shadow-[0_10px_22px_rgba(17,19,24,0.05)] lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Burger />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[120] transition ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={!open}>
        <button
          type="button"
          className="absolute inset-0 bg-[rgba(8,10,12,0.28)] backdrop-blur-sm"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        />

        <aside className={`absolute right-0 top-0 h-dvh w-[min(100vw,430px)] overflow-y-auto border-l border-[rgba(17,19,24,0.08)] bg-[linear-gradient(180deg,rgba(251,252,248,0.98)_0%,rgba(245,249,237,0.98)_100%)] p-5 shadow-[-18px_0_38px_rgba(17,19,24,0.16)] transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Menú móvil">
          <div className="flex items-center justify-between gap-4">
            <span className="logo-halo rounded-[20px] px-1.5 py-1">
              <Image src="/images/neartec-logo-real.png" alt="NearTec" width={168} height={58} className="h-auto w-auto max-w-[156px]" />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-[rgba(17,19,24,0.08)] bg-white px-5 py-3 text-sm font-black text-[var(--brand-ink)] shadow-[0_8px_18px_rgba(17,19,24,0.05)]"
            >
              Cerrar
            </button>
          </div>

          <div className="mt-8 rounded-[28px] border border-[rgba(154,196,59,0.22)] bg-[linear-gradient(180deg,rgba(154,196,59,0.12)_0%,rgba(154,196,59,0.06)_100%)] p-5 shadow-[0_16px_34px_rgba(17,19,24,0.04)]">
            <span className="nt-badge nt-badge--soft">NearTec · tecnología para crecer</span>
            <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[var(--brand-ink)]">
              Sitio, automatización, operación y nube para vender mejor.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
              Ordena lo comercial, lo operativo y la base tecnológica sin resolver todo con proveedores separados.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">Cotizar</Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">WhatsApp</a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Secciones</p>
            <div className="mt-4 grid gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-[20px] border px-4 py-4 text-lg font-black transition ${pathname === item.href ? 'border-[rgba(154,196,59,0.32)] bg-[rgba(154,196,59,0.12)] text-[var(--brand-ink)]' : 'border-[rgba(17,19,24,0.06)] bg-white/78 text-[var(--brand-ink)] shadow-[0_8px_18px_rgba(17,19,24,0.04)]'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[rgba(17,19,24,0.06)] bg-white/84 p-5 shadow-[0_16px_34px_rgba(17,19,24,0.04)]">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Contacto</p>
            <div className="mt-4 space-y-4 text-[15px] leading-8 text-[var(--brand-muted)]">
              <p><strong className="block text-[var(--brand-ink)]">Cobertura</strong>Tijuana · operación binacional</p>
              <p><strong className="block text-[var(--brand-ink)]">Correo</strong><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
              <p><strong className="block text-[var(--brand-ink)]">Teléfono</strong><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
