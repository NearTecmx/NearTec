import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/soluciones' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'Cotizador', href: '/cotizador' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="site-footer-premium">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="site-footer-premium__panel">
          <div className="grid gap-10 border-b border-[rgba(255,255,255,0.08)] pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-8">
            <div>
              <div className="brand-logo-card brand-logo-card--footer">
                <span className="brand-logo-card__plate" />
                <Image src="/images/neartec-logo.png" alt="NearTec" width={229} height={128} className="brand-logo-card__image" />
              </div>
              <h2 className="mt-5 max-w-md text-2xl font-black text-white md:text-3xl">
                Sitios web, sistemas, automatización e infraestructura con enfoque real a ventas.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.72)]">
                NearTec ayuda a vender mejor, ordenar la operación y dar seguimiento más claro a cada prospecto.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/cotizador" className="btn-primary">Cotizar</Link>
                <a href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información de NearTec.')}`} target="_blank" rel="noreferrer" className="btn-secondary btn-secondary--light">WhatsApp</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Navegación</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link footer-link--light">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Contacto</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[rgba(255,255,255,0.72)]">
                <p><span className="block font-bold text-white">Cobertura</span>Tijuana · Atención comercial y técnica</p>
                <p><span className="block font-bold text-white">Correo</span><a className="footer-link footer-link--light" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
                <p><span className="block font-bold text-white">Teléfono</span><a className="footer-link footer-link--light" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-6 text-sm text-[rgba(255,255,255,0.62)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} NearTec. Todos los derechos reservados.</p>
            <p>Technology near you · soluciones claras para vender y operar mejor</p>
          </div>
        </div>
      </div>
    </footer>
  )
}