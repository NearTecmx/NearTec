import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const services = [
  {
    title: 'Diseño web y ecommerce',
    copy: 'Sitios, landing pages y ecommerce que explican mejor tu oferta y convierten más.',
    href: '/diseno-web',
    icon: 'site',
  },
  {
    title: 'CRM y automatización',
    copy: 'Filtros de leads, seguimiento, agenda y automatización para que ventas no se enfríe.',
    href: '/automatizacion',
    icon: 'automation',
  },
  {
    title: 'CompuNegocio / punto de venta',
    copy: 'Ventas, inventario, estaciones, timbres y control diario en una sola operación.',
    href: '/compunegocio',
    icon: 'pos',
  },
  {
    title: 'Hosting, VPS y correo',
    copy: 'Infraestructura para continuidad operativa, correo profesional y entornos privados.',
    href: '/infraestructura',
    icon: 'infra',
  },
  {
    title: 'CN7 y nube',
    copy: 'Base de datos, respaldo y operación remota para crecer sin depender de una sola máquina.',
    href: '/infraestructura',
    icon: 'cloud',
  },
  {
    title: 'Emailing corporativo',
    copy: 'Campañas segmentadas, automatización, pruebas A/B y plantillas responsive con soporte.',
    href: '/emailing',
    icon: 'mail',
  },
]

const proofCases = [
  {
    title: 'iTimbre',
    tag: 'PAC / software fiscal',
    copy: 'NearTec desarrolló y operó una pieza crítica del ecosistema: software, servidores e integración fiscal.',
    href: '/casos',
  },
  {
    title: 'SecureWrap',
    tag: 'Autofacturación',
    copy: 'Portal de autofacturación para una operación con atención 24/7 y flujo continuo de comprobantes.',
    href: '/casos',
  },
  {
    title: 'Radio Latina',
    tag: 'Web + SEO + digital media',
    copy: 'Sitio, promoción digital y acompañamiento para fortalecer presencia y captación.',
    href: '/casos',
  },
  {
    title: 'Subway Baja',
    tag: 'Ecommerce multisucursal',
    copy: 'Compra online y administración por ubicaciones para una operación más clara y escalable.',
    href: '/casos',
  },
]

const pains = [
  'Tu sitio no está ayudando a vender.',
  'Los leads entran y se enfrían.',
  'Tu operación está partida entre varias herramientas.',
  'No sabes qué contratar primero para crecer con orden.',
]

const outcomes = [
  {
    title: 'Captas mejor',
    copy: 'Tu oferta se entiende rápido y el siguiente paso comercial queda claro.',
  },
  {
    title: 'Das seguimiento',
    copy: 'Los leads se filtran, se priorizan y llegan mejor atendidos a ventas.',
  },
  {
    title: 'Operas con control',
    copy: 'Ventas, inventario, nube y soporte trabajan sin tanto cambio de sistema.',
  },
  {
    title: 'Escalas con base',
    copy: 'Tu empresa crece sobre una estructura más estable, más medible y más vendible.',
  },
]

const prices = [
  { title: 'CompuNegocio desde', value: '$450 MXN / mes', note: '1 a 3 licencias por estación.' },
  { title: 'Implementación base', value: '$1,500 MXN', note: 'Pago único documentado.' },
  { title: 'CN7 con respaldo', value: '$99 USD / mes', note: 'Servidor y base de datos con respaldo.' },
  { title: 'Timbres desde', value: '365 por $730 MXN', note: 'Escala hasta 10,000 por $9,500 MXN.' },
]

const faqs = [
  {
    q: '¿Qué vende NearTec?',
    a: 'Sitio web y ecommerce, CRM y automatización, CompuNegocio, nube, hosting, VPS, correo corporativo y emailing.',
  },
  {
    q: '¿NearTec también puede conectarse con iTimbre?',
    a: 'Sí. Cuando la operación necesita timbrado o capa fiscal, NearTec puede conectar el proyecto con iTimbre sin rehacer todo el stack.',
  },
  {
    q: '¿Para quién aplica mejor?',
    a: 'Para pymes, retail, multisucursal y empresas que necesitan vender mejor, operar con más orden o dejar de depender de varias herramientas sueltas.',
  },
  {
    q: '¿Hay rangos base reales?',
    a: 'Sí. La web ya muestra bases documentadas para CompuNegocio, implementación, CN7, soporte, desarrollo y timbres.',
  },
]

function ServiceIcon({ type }: { type: string }) {
  const className = 'h-5 w-5'
  switch (type) {
    case 'site':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Zm2 1v2h12v-2a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5Zm0 4v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8H6Zm2.5 2h3v1.5h-3V12.5Zm0 3h7V17h-7v-1.5Z"/></svg>
      )
    case 'automation':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M10.2 2 8.8 5.3a7.5 7.5 0 0 0-1.9.8L3.7 4.8 2.2 6.3l1.3 3.2c-.34.6-.6 1.24-.79 1.92L0 12.8v2.4l2.71 1.38c.19.68.45 1.32.79 1.92l-1.3 3.22 1.49 1.49 3.23-1.3c.59.34 1.22.61 1.9.8L10.2 24h3.6l1.38-2.78c.68-.19 1.31-.46 1.9-.8l3.23 1.3 1.49-1.49-1.3-3.22c.34-.6.6-1.24.79-1.92L24 15.2v-2.4l-2.71-1.38a7.89 7.89 0 0 0-.79-1.92l1.3-3.22-1.49-1.49-3.23 1.3a7.5 7.5 0 0 0-1.9-.8L13.8 2h-3.6Zm1.8 6.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"/></svg>
      )
    case 'pos':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3h-1v2h-2v-2H9v2H7v-2H6a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2Zm0 2v4h14V5H5Zm0 6v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5H5Zm2 2h4v2H7v-2Z"/></svg>
      )
    case 'infra':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm2-8v2h12V6H6Zm0 10v2h12v-2H6Zm2-9h2v1H8V7Zm0 10h2v1H8v-1Z"/></svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M7.5 19A4.5 4.5 0 0 1 6.8 10a6.2 6.2 0 0 1 11.88 1.7A3.8 3.8 0 1 1 18.2 19H7.5Zm4.5-8.5-3 3h2v3h2v-3h2l-3-3Z"/></svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M3 6h18v12H3V6Zm2 2v8h14V8H5Zm2 1h5v2H7V9Zm0 4h10v2H7v-2Z"/></svg>
      )
  }
}

export default function HomePage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">NearTec · crecimiento, operación e infraestructura</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.93] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              Sitio, automatización, operación y nube para vender mejor.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)] sm:text-base">
              NearTec integra diseño web, CRM, emailing, CompuNegocio, hosting, VPS, correo y nube para que tu empresa capte, atienda, cobre y opere con más claridad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">Cotizar</Link>
              <Link href="/soluciones" className="btn-secondary">Ver servicios</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Sitio web', 'CRM', 'CompuNegocio', 'Hosting', 'Nube', 'Emailing'].map((item) => (
                <span key={item} className="service-pill">{item}</span>
              ))}
            </div>
          </div>
          <div className="cinematic-reveal delay-2">
            <HeroStackBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="nt-trust-strip cinematic-reveal">
          {['+12 años', 'Tijuana · MX', 'Soporte real', 'Conexión con iTimbre'].map((item) => (
            <span key={item} className="nt-trust-strip__item">{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Servicios principales</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.45rem]">
            Lo que NearTec sí te ayuda a vender, operar y sostener.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            Entra por la necesidad correcta y llévala a una solución más clara, con mejor seguimiento y una base más estable.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <article key={item.title} className={`service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="service-card__icon" aria-hidden="true"><ServiceIcon type={item.icon} /></div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__copy">{item.copy}</p>
              <Link href={item.href} className="service-card__link">Ver solución</Link>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[30px] border border-[var(--brand-line)] bg-white/88 p-5 shadow-[var(--brand-shadow-soft)] backdrop-blur-sm cinematic-reveal delay-2">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Conexión fiscal cuando aplica</p>
              <h3 className="mt-2 text-2xl font-black text-[var(--brand-ink)]">NearTec no compite con iTimbre: lo integra cuando tu operación lo necesita.</h3>
            </div>
            <Link href="/plataforma" className="btn-secondary">Ver ecosistema</Link>
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[var(--brand-line)] bg-white/90 p-6 shadow-[var(--brand-shadow-soft)] backdrop-blur-sm cinematic-reveal">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="nt-badge nt-badge--soft">Problemas reales</span>
              <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
                Si esto te pasa, NearTec sí entra a resolver.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {pains.map((item) => (
                <div key={item} className="rounded-[22px] border border-[rgba(219,228,215,0.92)] bg-[rgba(247,250,242,0.95)] px-4 py-4 text-sm font-bold text-[var(--brand-ink)] shadow-[0_8px_24px_rgba(15,17,21,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>
        <div className="cinematic-reveal delay-2">
          <AutomationSignalBoard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="value-panel cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Qué ganas</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.45rem]">
              Más claridad para vender, más orden para operar y más control para crecer.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item) => (
              <article key={item.title} className="value-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofCases.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-[24px] border border-[rgba(219,228,215,0.92)] bg-[linear-gradient(180deg,#fff_0%,#f7faf2_100%)] p-5 shadow-[0_10px_26px_rgba(15,17,21,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(15,17,21,0.08)]">
                <span className="inline-flex rounded-full border border-[rgba(154,196,59,0.26)] bg-[rgba(154,196,59,0.08)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--brand-ink)]">{item.tag}</span>
                <h3 className="mt-4 text-xl font-black text-[var(--brand-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="price-panel cinematic-reveal">
          <span className="nt-badge nt-badge--soft">Rangos base</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
            Ya puedes aterrizar la conversación con bases reales.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            CompuNegocio, implementación, nube, soporte, desarrollo y timbres ya tienen base documentada para vender con más claridad.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {prices.map((item) => (
              <article key={item.title} className="price-card">
                <p>{item.title}</p>
                <strong>{item.value}</strong>
                <span>{item.note}</span>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cotizador" className="btn-secondary">Ver rango</Link>
            <Link href="/contacto" className="text-sm font-black uppercase tracking-[0.14em] text-[var(--brand-ink)]">Hablar con asesor →</Link>
          </div>
        </div>
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Cotizador</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.55rem]">
            Cotiza rápido y llega a la propuesta correcta.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            Elige tu necesidad, revisa una base real y manda el resumen por WhatsApp o correo.
          </p>
        </div>
        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="faq-panel cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Preguntas frecuentes</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.3rem]">
              Lo básico que un prospecto debe entender antes de avanzar.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.q} className="faq-card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="blog-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--soft">Blog / recursos</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.25rem]">
              Contenido para atraer leads con intención real.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)]">
              Guías, noticias y contenido que ayudan a que el prospecto llegue más claro y mejor filtrado a ventas.
            </p>
          </div>
          <div className="blog-band__list">
            <Link href="/blog" className="blog-band__item">Cómo saber si tu sitio ya no está ayudando a vender</Link>
            <Link href="/blog" className="blog-band__item">Qué necesita una pyme para vender con más orden</Link>
            <Link href="/blog" className="blog-band__item">Cuándo conviene CompuNegocio y cuándo no</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="closing-cta cinematic-reveal bg-[linear-gradient(135deg,#eef5db_0%,#ffffff_48%,#edf7df_100%)] text-[var(--brand-ink)] border border-[var(--brand-line)] shadow-[var(--brand-shadow-soft)]">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="nt-badge nt-badge--soft">Siguiente paso</span>
              <h2 className="mt-4 text-[2rem] font-black leading-[1.03] md:text-[2.45rem]">
                Si ya sabes que necesitas vender mejor y operar con más orden, NearTec ya te puede orientar.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--brand-muted)] md:text-[15px]">
                Entra por cotizador, WhatsApp o contacto y aterriza una propuesta más clara desde el primer paso.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/cotizador" className="btn-primary">Cotizar ahora</Link>
              <Link href="/contacto" className="btn-secondary">Hablar con NearTec</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
