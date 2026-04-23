import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const serviceCards = [
  {
    icon: '◧',
    title: 'Diseño web y conversión',
    copy: 'Sitios, landing pages y ecommerce para explicar mejor tu oferta y vender más.',
    href: '/diseno-web',
  },
  {
    icon: '✦',
    title: 'CRM y automatización',
    copy: 'Filtrado de leads, seguimiento, campañas y agenda comercial sin caos manual.',
    href: '/automatizacion',
  },
  {
    icon: '▣',
    title: 'CompuNegocio',
    copy: 'Punto de venta, inventario, timbres y control operativo desde una sola base.',
    href: '/compunegocio',
  },
  {
    icon: '◎',
    title: 'Infraestructura cloud',
    copy: 'Hosting, VPS, correo corporativo, continuidad y soporte técnico.',
    href: '/infraestructura',
  },
  {
    icon: '⟐',
    title: 'CN7 y nube',
    copy: 'Base de datos, respaldo y operación remota para crecer sin depender de una sola máquina.',
    href: '/infraestructura',
  },
  {
    icon: '↗',
    title: 'Conexión fiscal',
    copy: 'Cuando tu operación lo necesita, NearTec se conecta con iTimbre y baja la fricción operativa.',
    href: '/plataforma',
  },
]

const valueCards = [
  {
    title: 'Captas mejor',
    copy: 'Tu sitio deja claro qué vendes y hace más fácil que te contacten.',
  },
  {
    title: 'Das seguimiento',
    copy: 'Tus leads se filtran, se priorizan y llegan por la ruta correcta.',
  },
  {
    title: 'Operas con control',
    copy: 'Inventario, ventas, nube y soporte quedan conectados.',
  },
  {
    title: 'Escalas con base',
    copy: 'Tu negocio crece sobre una estructura más clara, más estable y más vendible.',
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

export default function HomePage() {
  return (
    <div className="pb-12">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">NearTec · tecnología para crecer</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              Vende más. Opera mejor. <span className="text-[var(--brand-green-strong)]">Todo desde una sola base tecnológica.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)] sm:text-base">
              NearTec diseña sitios, automatiza seguimiento, implementa CompuNegocio y monta infraestructura cloud para que tu empresa capte, atienda y cobre mejor.
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
              {['Sitio web', 'Automatización', 'CompuNegocio', 'Cloud', 'Soporte'].map((item) => (
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
            Lo que NearTec sí te ayuda a vender, operar y mejorar.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            Elige una necesidad clara y llévala a una propuesta real, con precios base y una ruta de atención más rápida.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((item, index) => (
            <article key={item.title} className={`service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="service-card__icon" aria-hidden="true">{item.icon}</div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__copy">{item.copy}</p>
              <Link href={item.href} className="service-card__link">
                Ver más
              </Link>
            </article>
          ))}
        </div>
      </section>

      <ClientLogoStrip />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>
        <div className="cinematic-reveal delay-2">
          <AutomationSignalBoard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
        <div className="price-panel cinematic-reveal">
          <span className="nt-badge nt-badge--soft">Precios reales</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
            Ya puedes aterrizar la conversación con rangos reales.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            CompuNegocio, implementación, nube y timbres ya tienen base de precio documentada para vender con más claridad.
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
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Cotizador</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.55rem]">
            Cotiza rápido y llega a la propuesta correcta.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            Filtra tu necesidad, revisa rangos base y manda el contexto completo para acelerar la venta.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="closing-cta cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Siguiente paso</span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-[2.3rem]">
              Lleva tu caso a ventas con contexto claro.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/78">
              En vez de un formulario ciego, manda una necesidad filtrada, un rango base y el mejor siguiente paso para que ventas responda más rápido.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://wa.me/526644046194?text=Hola,%20quiero%20una%20propuesta%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Recibir por WhatsApp
            </a>
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Hablar con asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
