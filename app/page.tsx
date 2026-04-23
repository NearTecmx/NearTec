import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

type OfferIcon = 'web' | 'automation' | 'pos' | 'cloud' | 'cn7' | 'fiscal'

const offerCards: Array<{ title: string; copy: string; icon: OfferIcon }> = [
  {
    title: 'Sitios web y ecommerce',
    copy: 'Para presentar tu empresa mejor, captar prospectos y convertir visitas en contacto o venta.',
    icon: 'web',
  },
  {
    title: 'CRM y automatización',
    copy: 'Para responder más rápido, filtrar mejores leads y dar seguimiento sin perder oportunidades.',
    icon: 'automation',
  },
  {
    title: 'CompuNegocio',
    copy: 'Para controlar ventas, inventario, timbres y operación diaria desde un solo sistema.',
    icon: 'pos',
  },
  {
    title: 'Infraestructura cloud',
    copy: 'Para operar con hosting, VPS, correo, respaldo y continuidad sin depender del equipo local.',
    icon: 'cloud',
  },
  {
    title: 'CN7 y nube',
    copy: 'Para mover tu operación a la nube con acceso más estable y respaldo continuo.',
    icon: 'cn7',
  },
  {
    title: 'Integración con iTimbre',
    copy: 'Para conectar facturación y timbrado cuando tu empresa ya necesita control fiscal.',
    icon: 'fiscal',
  },
]

const whyCards = [
  {
    title: 'Vendes con más claridad',
    copy: 'Tu cliente entiende qué ofreces y cómo empezar.',
  },
  {
    title: 'Operas con más control',
    copy: 'Menos tareas manuales y más orden en el día a día.',
  },
  {
    title: 'Respondes más rápido',
    copy: 'Lead, cotización y seguimiento en una sola ruta.',
  },
  {
    title: 'Escalas sin improvisar',
    copy: 'Infraestructura, sistema y automatización alineados al crecimiento.',
  },
]

const priceCards = [
  {
    title: 'CompuNegocio desde',
    value: '$450 MXN/mes',
    note: '1 a 3 licencias por estación.',
  },
  {
    title: 'Implementación base',
    value: '$1,500 MXN',
    note: 'Pago único documentado.',
  },
  {
    title: 'CN7 con respaldo',
    value: '$99 USD/mes',
    note: 'Servidor y base de datos con respaldo.',
  },
  {
    title: 'Timbres desde',
    value: '365 por $730 MXN',
    note: 'Escala hasta 10,000 por $9,500 MXN.',
  },
]

function OfferGlyph({ icon }: { icon: OfferIcon }) {
  switch (icon) {
    case 'web':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="13.5" rx="2.5" />
          <path d="M3.5 9h17" />
          <path d="M7 7.2h.01M10 7.2h.01M13 7.2h.01" />
        </svg>
      )
    case 'automation':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M12 4v4" />
          <path d="M12 16v4" />
          <path d="M4 12h4" />
          <path d="M16 12h4" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M6.6 6.6l2.8 2.8" />
          <path d="M14.6 14.6l2.8 2.8" />
          <path d="M17.4 6.6l-2.8 2.8" />
          <path d="M9.4 14.6l-2.8 2.8" />
        </svg>
      )
    case 'pos':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="4" y="4.5" width="16" height="10" rx="2.5" />
          <path d="M7 18.5h10" />
          <path d="M9 14.5v4" />
          <path d="M15 14.5v4" />
        </svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M7.5 18.5h9a4 4 0 0 0 .7-7.94A5.5 5.5 0 0 0 7 8.4a4 4 0 0 0 .5 10.1Z" />
        </svg>
      )
    case 'cn7':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M5 7.5h14" />
          <path d="M5 12h14" />
          <path d="M5 16.5h14" />
          <rect x="4" y="5" width="16" height="14" rx="2.5" />
        </svg>
      )
    case 'fiscal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M7 4.5h7l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
          <path d="M14 4.5V9h4" />
          <path d="M8.5 13h7" />
          <path d="M8.5 16h5" />
        </svg>
      )
  }
}

export default function HomePage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">NearTec · sitios, sistemas y cloud</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.94] text-[#0f1115] sm:text-5xl lg:text-6xl">
              <span className="nt-headline-line">Más ventas.</span>{' '}
              <span className="nt-headline-line nt-headline-line--accent">Más control.</span>{' '}
              <span className="nt-headline-line">Menos fricción.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              NearTec integra sitio web, CRM, automatización, infraestructura cloud, correo corporativo y CompuNegocio
              para que tu empresa venda mejor y opere con más orden.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/soluciones" className="btn-primary">
                Ver servicios
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Cotizar
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['PyME', 'Retail', 'Servicios', 'Manufactura', 'Sucursales'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dce8bf] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#24303a] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <HeroStackBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="nt-trust-strip nt-trust-strip--loud cinematic-reveal">
          {['+12 años', 'Tijuana', 'Cloud + sistemas', 'Implementación y soporte'].map((item) => (
            <span key={item} className="nt-trust-strip__item">{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Qué vende NearTec</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Servicios que sí ayudan a vender y operar mejor.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offerCards.map((item, index) => (
            <article
              key={item.title}
              className={`nt-service-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <div className="nt-service-card__accent" />
              <div className="nt-service-card__icon" aria-hidden="true">
                <OfferGlyph icon={item.icon} />
              </div>
              <h3 className="nt-service-card__title">{item.title}</h3>
              <p className="nt-service-card__copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="cinematic-reveal">
          <AutomationSignalBoard />
        </div>
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal delay-2 sm:p-7">
          <span className="nt-badge nt-badge--soft">Por qué sí conviene</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
            Menos desorden. Más ventas. Más control.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyCards.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] p-4">
                <h3 className="text-base font-black text-[#0f1115]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#67717a]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="nt-badge nt-badge--soft">Precios base reales</span>
              <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
                Referencias reales para cotizar mejor desde el inicio.
              </h2>
            </div>
            <Link href="/compunegocio" className="btn-secondary">
              Ver CompuNegocio
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {priceCards.map((item, index) => (
              <article key={item.title} className={`nt-price-card cinematic-reveal delay-${(index % 4) + 1}`}>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">{item.title}</p>
                <p className="mt-3 text-2xl font-black text-[#0f1115]">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[#67717a]">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Cotizador NearTec</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.55rem]">
            Cotiza más rápido. Decide mejor.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Elige lo que necesitas y recibe una base clara para continuar por WhatsApp o con Neary AI.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-2 sm:px-6 lg:px-8">
        <div className="nt-cta-band cinematic-reveal">
          <div>
            <h2 className="nt-cta-band__title">Haz que tu empresa se vea mejor, responda más rápido y opere con más control.</h2>
            <p className="nt-cta-band__copy">Sitio, sistema, automatización y soporte en una sola ruta.</p>
          </div>
          <div className="nt-cta-band__actions">
            <Link href="/contacto" className="btn-primary">Hablar</Link>
            <Link href="/blog" className="btn-secondary btn-secondary--light">Ver blog</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
