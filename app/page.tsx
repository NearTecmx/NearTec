import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

type Bundle = {
  icon: string
  title: string
  copy: string
  href: string
}

const bundles: Bundle[] = [
  {
    icon: '↗',
    title: 'Sitio web y conversión',
    copy: 'Sitio, landing o ecommerce para explicar mejor tu oferta y llevar la visita al siguiente paso.',
    href: '/diseno-web',
  },
  {
    icon: '◎',
    title: 'CRM y automatización',
    copy: 'Filtros de leads, agenda, seguimiento y WhatsApp para que ventas no pierda ritmo.',
    href: '/automatizacion',
  },
  {
    icon: '▣',
    title: 'CompuNegocio y punto de venta',
    copy: 'Ventas, inventario, timbres y control diario desde una sola operación.',
    href: '/compunegocio',
  },
  {
    icon: '◌',
    title: 'Hosting, VPS y nube',
    copy: 'Infraestructura, correo, CN7, respaldo y continuidad para operar sin depender de varios proveedores.',
    href: '/infraestructura',
  },
  {
    icon: '✦',
    title: 'Emailing y nurtures',
    copy: 'Campañas segmentadas, comunicados, newsletters y automatización de seguimiento.',
    href: '/emailing',
  },
  {
    icon: '∞',
    title: 'Conexión con iTimbre',
    copy: 'Cuando tu operación necesita capa fiscal, NearTec conecta la parte comercial con iTimbre.',
    href: '/soluciones',
  },
]

const useCases = [
  {
    title: 'Tu sitio no ayuda a vender',
    copy: 'NearTec ordena la presencia digital para que el cliente entienda qué vendes y cómo avanzar.',
  },
  {
    title: 'Los leads se enfrían',
    copy: 'La automatización comercial ayuda a filtrar, priorizar y responder sin improvisación.',
  },
  {
    title: 'Tu operación está partida',
    copy: 'Cuando sitio, correo, nube, ventas y POS viven por separado, la fricción sube y la claridad baja.',
  },
  {
    title: 'No sabes qué contratar primero',
    copy: 'El cotizador y la ruta comercial ayudan a aterrizar una propuesta real sin perder tiempo.',
  },
]

const valueCards = [
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
    copy: 'Ventas, inventario, nube, correo y soporte trabajan con menos fricción.',
  },
  {
    title: 'Escalas con base',
    copy: 'Tu empresa crece sobre una estructura más estable, más medible y más vendible.',
  },
]

const priceCards = [
  {
    title: 'CompuNegocio desde',
    value: '$450 MXN / mes',
    note: '1 a 3 licencias por estación.',
  },
  {
    title: 'Implementación base',
    value: '$1,500 MXN',
    note: 'Pago único documentado.',
  },
  {
    title: 'CN7 con respaldo',
    value: '$99 USD / mes',
    note: 'Servidor y base de datos con respaldo.',
  },
  {
    title: 'Timbres desde',
    value: '365 por $730 MXN',
    note: 'Escala hasta 10,000 por $9,500 MXN.',
  },
]

const cases = [
  {
    title: 'iTimbre',
    copy: 'Credencial real de ecosistema: NearTec desarrolló y conecta una operación fiscal especializada.',
  },
  {
    title: 'Radio Latina',
    copy: 'Diseño web, digital media, SEO y SEM para una marca con presencia regional binacional.',
  },
  {
    title: 'SecureWrap',
    copy: 'Autofacturación y operación conectada para bajar carga manual y sostener atención continua.',
  },
]

const blogHighlights = [
  {
    title: 'Cómo saber si tu sitio ya no está ayudando a vender',
    href: '/blog',
  },
  {
    title: 'Qué necesita una pyme para vender con más orden',
    href: '/blog',
  },
  {
    title: 'Cuándo conviene CompuNegocio y cuándo no',
    href: '/blog',
  },
]

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">NearTec · crecimiento e infraestructura</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.93] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              Sitio, automatización, operación y nube para vender mejor.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)] sm:text-base">
              NearTec integra presencia digital, CRM, CompuNegocio, infraestructura y soporte para que tu empresa capte mejor, opere con más orden y crezca sobre una base conectada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
              </Link>
              <Link href="/soluciones" className="btn-secondary">
                Ver servicios
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Sitio web', 'CRM', 'Punto de venta', 'Nube', 'Emailing', 'iTimbre conectado'].map((item) => (
                <span key={item} className="service-pill">
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
        <div className="nt-trust-strip cinematic-reveal">
          {['+12 años', 'Tijuana · MX', 'Soporte real', 'Operación conectada'].map((item) => (
            <span key={item} className="nt-trust-strip__item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <ClientLogoStrip />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Servicios principales</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.45rem]">
            Una sola base para vender, operar y sostener mejor tu negocio.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            NearTec vende soluciones reales para empresas que necesitan sitio, operación, automatización, nube y soporte sin armar todo por separado.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bundles.map((item, index) => (
            <article key={item.title} className={`service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="service-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__copy">{item.copy}</p>
              <Link href={item.href} className="service-card__link">
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="pain-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--soft">Qué resuelve NearTec</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
              Si tu empresa se parece a esto, NearTec sí entra a resolver.
            </h2>
          </div>
          <div className="pain-band__grid">
            {useCases.map((item) => (
              <div key={item.title} className="pain-card">
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
              </div>
            ))}
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
            {valueCards.map((item) => (
              <article key={item.title} className="value-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
        <div className="price-panel cinematic-reveal">
          <span className="nt-badge nt-badge--soft">Precios base</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
            Ya puedes aterrizar la conversación con rangos reales.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            CompuNegocio, implementación, nube y timbres ya tienen base documentada para cotizar con más claridad y menos fricción.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {priceCards.map((item) => (
              <article key={item.title} className="price-card">
                <p>{item.title}</p>
                <strong>{item.value}</strong>
                <span>{item.note}</span>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cotizador" className="btn-primary">
              Calcular inversión
            </Link>
            <Link href="/compunegocio" className="btn-secondary">
              Ver CompuNegocio
            </Link>
          </div>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Cotizador</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.55rem]">
            Cotiza rápido y llega a la propuesta correcta.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            Elige tu necesidad, revisa rangos base y manda el contexto completo para acelerar la conversación.
          </p>
        </div>
        <div className="mt-10 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="nt-section-split cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--soft">Casos y credenciales</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
              NearTec no parte de cero: ya ha resuelto operación, contenido, ecommerce y facturación conectada.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="story-card">
                <strong>{item.title}</strong>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="resource-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--soft">Blog y recursos</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.2rem]">
              Contenido que ayuda a decidir mejor qué contratar primero.
            </h2>
          </div>
          <div className="resource-band__grid">
            {blogHighlights.map((item) => (
              <Link key={item.title} href={item.href} className="resource-link-card">
                <span>Blog NearTec</span>
                <strong>{item.title}</strong>
                <small>Leer contenido</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Siguiente paso</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.04] text-white md:text-[2.4rem]">
              Si tu negocio ya necesita más claridad comercial y operativa, NearTec ya puede entrar.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cotizador" className="btn-primary">
              Iniciar cotización
            </Link>
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Hablar con NearTec
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
