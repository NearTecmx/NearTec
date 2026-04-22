import Link from 'next/link'
import { ResourcePulsePanel, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

const resources = [
  {
    type: 'Guía',
    title: 'Cómo ordenar crecimiento, operación e infraestructura en una sola ruta',
    body: 'Una lectura simple para empresas que ya no quieren trabajar con herramientas sueltas.',
  },
  {
    type: 'Checklist',
    title: 'Checklist de infraestructura para PyMEs que ya operan en serio',
    body: 'Lo esencial para sitio, correo, hosting, respaldo y continuidad sin huecos críticos.',
  },
  {
    type: 'Comparativa',
    title: 'Antes vs después de una operación conectada',
    body: 'Qué cambia cuando sitio, CRM, automatización, POS e infraestructura dejan de estar separados.',
  },
  {
    type: 'Insight',
    title: 'Por qué el seguimiento comercial se rompe aunque sí haya leads',
    body: 'El problema no siempre es publicidad. Muchas veces es la ausencia de una ruta comercial sólida.',
  },
  {
    type: 'Plantilla',
    title: 'Ruta de diagnóstico para modernizar una empresa sin improvisar',
    body: 'Una forma clara de priorizar fases, inversión y stack recomendado.',
  },
  {
    type: 'Framework',
    title: 'Qué debe resolver un integrador moderno para una PyME',
    body: 'Presencia digital, captación, continuidad, control y automatización bajo un mismo criterio.',
  },
]

export default function RecursosPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Recursos / Insights</span>
            <h1 className="nt-page-title">
              Contenido útil para empresas que quieren vender mejor y operar con más control.
            </h1>
            <p className="nt-page-copy">
              Guías, comparativas, checklists e insights para aterrizar decisiones sin ruido técnico
              innecesario.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/cotizador" className="btn-primary">
                Empezar con diagnóstico
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Hablar con un asesor
              </Link>
            </div>
          </div>

          <ResourcePulsePanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="nt-resource-highlight cinematic-reveal">
            <small>Capas</small>
            <strong>Sitio · CRM · Automatización · POS · Infraestructura</strong>
          </article>

          <article className="nt-resource-highlight cinematic-reveal delay-1">
            <small>Enfoque</small>
            <strong>Menos fricción. Más trazabilidad. Más control.</strong>
          </article>

          <article className="nt-resource-highlight cinematic-reveal delay-2">
            <small>Objetivo</small>
            <strong>Convertir información útil en decisiones que sí mueven operación.</strong>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Centro editorial NearTec</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item, index) => (
            <article
              key={item.title}
              className={`nt-resource-card nt-resource-card--animated cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <span className="nt-resource-card__type">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <button type="button" className="nt-inline-link">
                Ver recurso
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="cinematic-reveal">
          <LiveMetricBars />
        </div>

        <article className="nt-insight-panel cinematic-reveal delay-2">
          <span className="nt-badge nt-badge--soft">Insight</span>
          <h2 className="mt-4 text-[2rem] font-black leading-[1.04] text-[var(--brand-ink)]">
            Una mejor web no solo debe verse mejor. Debe explicar mejor y mover mejor la compra.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            NearTec necesita una narrativa más clara, rutas de entrada más limpias y una estructura
            que ayude a entender valor, stack y siguiente paso desde la primera visita.
          </p>
        </article>
      </section>
    </div>
  )
}