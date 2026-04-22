import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const trustItems = ['+12 años', 'Operación en Tijuana', 'Integración con iTimbre', 'Implementación acompañada']

const benefits = [
  {
    title: 'Todo conectado',
    body: 'Un ecosistema integrado para que sitio, captación, operación y control trabajen juntos.',
  },
  {
    title: 'Menos trabajo manual',
    body: 'Automatizamos seguimiento, clasificación y tareas repetitivas para ahorrar tiempo.',
  },
  {
    title: 'Datos que impulsan',
    body: 'Reportes, trazabilidad y KPIs para decidir con criterio y no por intuición.',
  },
  {
    title: 'Acompañamiento real',
    body: 'No solo entregamos herramientas. Te ayudamos a implementarlas con sentido comercial.',
  },
]

const solutionCards = [
  ['Diseño Web', 'Sitios rápidos, seguros y optimizados para convertir.'],
  ['Infraestructura Cloud', 'Servidores, respaldo, correo y continuidad operativa.'],
  ['Automatización & CRM', 'Gestiona leads, clientes y seguimiento en un solo lugar.'],
  ['Emailing', 'Campañas y secuencias que llegan con mejor intención.'],
  ['CompuNegocio', 'Punto de venta y control administrativo conectado a la operación.'],
  ['Integración Fiscal', 'Conexión con iTimbre para una ruta fiscal más ordenada.'],
]

const cases = [
  ['VITROMEX', '+35% en ventas online', '-40% en tareas manuales', '3 meses para ROI'],
  ['BAJA PACK', '+28% en eficiencia operativa', '-30% en tiempo de TI', '2.5 meses para ROI'],
  ['NUTRIFI', '+60% en leads calificados', '+25% en conversión', '4 meses para ROI'],
]

export default function HomePage() {
  return (
    <div>
      <section className="nt-hero-section nt-hero-section--blue">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1fr_1.02fr] lg:items-center lg:px-8 lg:pb-16 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">Plataforma todo en uno para empresas que quieren escalar</span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.96] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              Centraliza crecimiento, operación e infraestructura <span className="text-[var(--brand-green)]">en un solo ecosistema.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)] sm:text-[16px]">
              Sitio web, CRM, automatización, correo corporativo, emailing, punto de venta, infraestructura cloud y conexión fiscal. Menos piezas sueltas. Más control real.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Iniciar diagnóstico inteligente
              </Link>
              <Link href="/soluciones" className="btn-secondary">
                Explorar soluciones
              </Link>
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <HeroStackBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="nt-trust-strip cinematic-reveal delay-2">
          <div className="nt-trust-strip__items">
            {trustItems.map((item) => (
              <span key={item} className="nt-trust-strip__item">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">No vendemos piezas. Ordenamos tu operación digital.</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => (
            <article key={item.title} className={`nt-problem-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="nt-problem-card__title">{item.title}</h3>
              <p className="nt-problem-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">Una plataforma adaptable a la etapa de tu empresa</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map(([title, body]) => (
              <article key={title} className="nt-layer-card">
                <h3 className="nt-layer-card__title">{title}</h3>
                <p className="nt-layer-card__body">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">De herramientas aisladas a una operación conectada</h2>
        </div>

        <div className="mt-8 nt-before-after cinematic-reveal delay-2">
          <article className="nt-before-after__col">
            <span className="nt-before-after__tag">Antes</span>
            <ul className="nt-before-after__list">
              <li>Sitio sin estrategia</li>
              <li>Leads sin seguimiento</li>
              <li>Correos y campañas separados</li>
              <li>Ventas sin trazabilidad</li>
            </ul>
          </article>

          <article className="nt-before-after__col nt-before-after__col--accent">
            <span className="nt-before-after__tag">Después</span>
            <ul className="nt-before-after__list">
              <li>Presencia clara</li>
              <li>CRM y automatización</li>
              <li>Infraestructura con sentido operativo</li>
              <li>Ruta comercial y fiscal conectada</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Capacidad real, no solo promesa</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {cases.map(([title, m1, m2, m3], index) => (
              <article key={title} className={`nt-feature-card cinematic-reveal delay-${(index % 3) + 1}`}>
                <h3 className="text-[1.05rem] font-black text-[var(--brand-ink)]">{title}</h3>
                <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{m1}</p>
                <p className="text-[14px] leading-8 text-[var(--brand-muted)]">{m2}</p>
                <p className="text-[14px] leading-8 text-[var(--brand-muted)]">{m3}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>
        <div className="cinematic-reveal delay-2">
          <div className="nt-section-head">
            <h2 className="nt-section-title">IA y automatización que trabaja para ti</h2>
            <p className="nt-section-copy">Lead scoring, respuesta automática, agenda comercial, métricas y reactivación en una sola lógica.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {['Lead Scoring', 'Respuesta automática', 'Agenda comercial', 'Remarketing inteligente', 'Reportes predictivos', 'Dashboard comercial'].map((item) => (
              <article key={item} className="nt-layer-card">
                <h3 className="nt-layer-card__title">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CotizadorNearTec />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <div className="nt-cta-band cinematic-reveal">
          <div>
            <h2 className="nt-cta-band__title">Si tu operación ya creció, tu stack también tiene que crecer.</h2>
            <p className="nt-cta-band__copy">Hablemos de tu negocio y construyamos la infraestructura digital que lo lleve al siguiente nivel.</p>
          </div>
          <div className="nt-cta-band__actions">
            <Link href="/cotizador" className="btn-primary">Iniciar diagnóstico inteligente</Link>
            <Link href="/contacto" className="btn-secondary btn-secondary--light">Hablar con un experto</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
