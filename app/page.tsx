import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const bundles = [
  {
    title: 'Sitio web y conversión',
    copy: 'Sitios, landings y ecommerce para explicar mejor tu oferta y convertir más visitas en oportunidades.',
    href: '/diseno-web',
    icon: '◫',
  },
  {
    title: 'CRM y automatización',
    copy: 'Filtros de leads, seguimiento, agenda, WhatsApp y automatización para que ventas no pierda ritmo.',
    href: '/automatizacion',
    icon: '✦',
  },
  {
    title: 'CompuNegocio y operación',
    copy: 'Punto de venta, inventario, timbres y control diario para retail, multisucursal y negocio en crecimiento.',
    href: '/compunegocio',
    icon: '▣',
  },
  {
    title: 'Nube e infraestructura',
    copy: 'Hosting, VPS, correo, CN7, respaldo y continuidad para no depender de una sola máquina ni de varios proveedores.',
    href: '/infraestructura',
    icon: '◎',
  },
]

const audience = [
  {
    title: 'Dueño o dirección',
    copy: 'Cuando ya quieres vender más, pero tu sitio, tu operación y tus herramientas no están alineadas.',
  },
  {
    title: 'Operaciones',
    copy: 'Cuando la empresa ya se volvió más compleja y necesitas control, orden, respaldo y menos improvisación.',
  },
  {
    title: 'Comercial y marketing',
    copy: 'Cuando llegan leads, pero no existe un sistema claro para filtrarlos, seguirlos y convertirlos.',
  },
  {
    title: 'Retail y multisucursal',
    copy: 'Cuando ventas, inventario, timbres y atención diaria necesitan vivir dentro de una sola operación.',
  },
]

const pains = [
  'Tu sitio no ayuda a vender.',
  'Los leads entran y se enfrían.',
  'Tu operación está partida entre varias herramientas.',
  'No sabes qué contratar primero para crecer con orden.',
]

const valueCards = [
  {
    title: 'Captas mejor',
    copy: 'Tu oferta se entiende más rápido y el siguiente paso comercial queda claro.',
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

const faqs = [
  {
    question: '¿Qué vende NearTec?',
    answer:
      'NearTec vende sitio web y conversión, CRM y automatización, CompuNegocio, nube e infraestructura tecnológica para empresas que necesitan vender mejor y operar con más orden.',
  },
  {
    question: '¿Para quién aplica?',
    answer:
      'Principalmente para pymes, retail, multisucursal y empresas que ya tienen procesos manuales, leads fríos o demasiadas herramientas separadas.',
  },
  {
    question: '¿Y si ya tengo sistema?',
    answer:
      'No siempre hay que reemplazarlo todo. NearTec puede ordenar la capa comercial, operativa o de infraestructura y, cuando aplica, conectarla con iTimbre.',
  },
  {
    question: '¿NearTec también puede conectarse con iTimbre?',
    answer:
      'Sí. Cuando el proyecto necesita timbrado, CFDI o una capa fiscal, NearTec se conecta con iTimbre para cerrar el ciclo operativo sin meter más fricción.',
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
    <div className="pb-12">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">NearTec · crecimiento e infraestructura</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              Vende más. Opera sin fricción.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)] sm:text-base">
              Sitio web, CRM, automatización, CompuNegocio y nube en una sola base para que tu empresa capte, atienda, cobre y opere mejor.
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
              {['Sitio web', 'CRM', 'Punto de venta', 'Nube', 'Facturación conectada'].map((item) => (
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
          {['+12 años', 'Tijuana · MX', 'Soporte real', 'Integración con iTimbre'].map((item) => (
            <span key={item} className="nt-trust-strip__item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Servicios principales</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.45rem]">
            Todo lo que NearTec sí te ayuda a vender, operar y sostener.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            NearTec no se queda en diseño. Integra presencia digital, operación, nube y automatización para que no armes todo por separado.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {bundles.map((item, index) => (
            <article key={item.title} className={`service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="service-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__copy">{item.copy}</p>
              <Link href={item.href} className="service-card__link">
                Ver más
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="value-panel cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Para quién es</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
              Cuando tu empresa necesita crecer con más claridad y menos improvisación.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audience.map((item) => (
              <article key={item.title} className="value-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="pain-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--soft">Problemas que sí resolvemos</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
              Si tu negocio está aquí, NearTec sí entra a resolver.
            </h2>
          </div>
          <div className="pain-band__grid">
            {pains.map((item) => (
              <div key={item} className="pain-chip">
                {item}
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

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="price-panel cinematic-reveal">
          <span className="nt-badge nt-badge--soft">Precios base</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
            Ya puedes aterrizar la conversación con rangos reales.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            CompuNegocio, implementación, nube y timbres ya tienen base documentada para vender con más claridad.
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
            <Link href="/cotizador" className="btn-secondary">
              Ver costos
            </Link>
            <Link href="/compunegocio" className="text-sm font-black uppercase tracking-[0.14em] text-[var(--brand-ink)]">
              Ir a CompuNegocio →
            </Link>
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
            Elige tu necesidad, revisa un rango base y manda el contexto listo por WhatsApp.
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
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
              Lo básico que un prospecto debe entender antes de avanzar.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="blog-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--soft">Blog NearTec</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.25rem]">
              Contenido para atraer leads con problemas reales.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)]">
              Guías, noticias y temas que ayudan a que el prospecto llegue más claro y mejor filtrado a ventas.
            </p>
          </div>
          <div className="blog-band__list">
            {blogHighlights.map((item) => (
              <Link key={item.title} href={item.href} className="blog-band__item">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="closing-cta cinematic-reveal bg-[linear-gradient(135deg,#0f1319_0%,#172533_58%,#213824_100%)] text-white">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="nt-badge nt-badge--dark">Siguiente paso</span>
              <h2 className="mt-4 text-[2rem] font-black leading-[1.03] md:text-[2.45rem]">
                Si ya sabes que necesitas vender mejor y operar con más orden, NearTec ya te puede orientar.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/76 md:text-[15px]">
                Entra por cotizador, WhatsApp o contacto y aterriza una propuesta más clara desde el primer paso.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/cotizador" className="btn-primary">
                Cotizar ahora
              </Link>
              <Link href="/contacto" className="btn-secondary btn-secondary--light">
                Hablar con NearTec
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
