import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'
import { HeroStackBoard } from '@/components/NearTecPremiumVisuals'

const contactRoutes = [
  {
    title: 'Quiero cotizar',
    copy: 'Cuéntanos qué servicio te interesa y te guiamos a la propuesta correcta.',
  },
  {
    title: 'Quiero una demo',
    copy: 'Ideal para CompuNegocio, automatización o una revisión de operación.',
  },
  {
    title: 'Quiero soporte',
    copy: 'Si ya eres cliente, te ayudamos a llegar más rápido por la ruta correcta.',
  },
  {
    title: 'Quiero hablar hoy',
    copy: 'Si tu necesidad es urgente, usa WhatsApp y te canalizamos mejor.',
  },
]

export default function ContactoPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Contacto NearTec</span>
            <h1 className="nt-page-title">Habla con NearTec por la ruta correcta.</h1>
            <p className="nt-page-copy">
              Te ayudamos a cotizar, agendar demo, resolver soporte o revisar qué servicio te conviene según tu negocio.
            </p>

            <div className="nt-page-hero__actions">
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero hablar con NearTec.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                WhatsApp
              </a>
              <Link href="/cotizador" className="btn-secondary">
                Cotizar
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[22px] border border-[var(--brand-line)] bg-white px-4 py-4 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Teléfono</p>
                <a href={CONTACT.phoneHref} className="mt-2 block text-lg font-black text-[var(--brand-ink)]">{CONTACT.phoneDisplay}</a>
              </div>
              <div className="rounded-[22px] border border-[var(--brand-line)] bg-white px-4 py-4 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Correo</p>
                <a href={`mailto:${CONTACT.email}`} className="mt-2 block text-base font-black text-[var(--brand-ink)] break-all">{CONTACT.email}</a>
              </div>
              <div className="rounded-[22px] border border-[var(--brand-line)] bg-white px-4 py-4 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Ubicación</p>
                <p className="mt-2 text-sm font-semibold text-[var(--brand-ink)]">Tijuana · Operación binacional</p>
              </div>
            </div>
          </div>

          <HeroStackBoard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Elige una ruta</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">Te atendemos más rápido si entras por la necesidad correcta.</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactRoutes.map((item, index) => (
            <article key={item.title} className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="nt-layer-card__title">{item.title}</h3>
              <p className="nt-layer-card__body">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
