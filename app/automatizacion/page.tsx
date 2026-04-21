import Link from 'next/link'

function PipelineChart() {
  return (
    <div className="nt-pipeline-chart">
      <div className="nt-pipeline-chart__head">
        <span>Pipeline comercial</span>
        <span>Este mes</span>
      </div>

      <div className="nt-pipeline-chart__kpis">
        <div><small>Leads nuevos</small><strong>1,248</strong></div>
        <div><small>Oportunidades</small><strong>356</strong></div>
        <div><small>En negociación</small><strong>124</strong></div>
        <div><small>Ventas ganadas</small><strong>76</strong></div>
      </div>

      <div className="nt-pipeline-chart__bars">
        <span style={{ height: '32%' }} />
        <span style={{ height: '50%' }} />
        <span style={{ height: '64%' }} />
        <span style={{ height: '58%' }} />
        <span style={{ height: '76%' }} />
        <span style={{ height: '88%' }} />
      </div>
    </div>
  )
}

export default function AutomatizacionPage() {
  return (
    <div className="page-shell">
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Automatización que convierte</span>
            <h1 className="nt-page-title">
              Convierte leads en seguimiento real, no en formularios olvidados.
            </h1>
            <p className="nt-page-copy">
              Centraliza captación, clasificación, nurturing, agenda y remarketing en un solo ecosistema.
            </p>

            <div className="nt-page-hero__actions">
              <a href="#flujo" className="btn-primary">
                Ver flujo
              </a>
              <Link href="/contacto" className="btn-secondary">
                Solicitar demo
              </Link>
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <PipelineChart />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Problemas que frenan tu crecimiento</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            'Leads sin respuesta',
            'Seguimiento lento',
            'Ventas sin prioridad',
            'Campañas sin cierre medible',
            'Formularios que no convierten',
          ].map((item, index) => (
            <article key={item} className={`nt-tool-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="flujo" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Cómo funciona tu máquina de seguimiento</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {[
            ['1', 'Captura inteligente', 'Formularios y anuncios con mínima fricción.'],
            ['2', 'Clasificación automática', 'IA califica y segmenta por intención y perfil.'],
            ['3', 'Asignación a ventas', 'Se asigna al asesor ideal según reglas y carga.'],
            ['4', 'Secuencia por interés', 'Emails, WhatsApp y recordatorios automáticos.'],
            ['5', 'Agenda / cierre / remarketing', 'Agenda reuniones, cierra y reactiva.'],
          ].map(([num, title, body], index) => (
            <article key={title} className={`nt-step-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <span className="nt-step-card__num">{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Todo lo que necesitas para convertir más</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            'Formularios inteligentes',
            'Lead scoring',
            'CRM',
            'Campañas automáticas',
            'WhatsApp',
            'Agenda',
            'Panel comercial',
            'IA para resumen del lead',
          ].map((item, index) => (
            <article key={item} className={`nt-info-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="nt-metrics-card cinematic-reveal">
            <h3>Métricas que importan</h3>
            <div className="nt-metrics-card__list">
              <span>Tasa de conversión · 14.6%</span>
              <span>Leads nuevos · 1,248</span>
              <span>Oportunidades · 356</span>
              <span>Ingresos generados · $1,248,000</span>
            </div>
          </article>

          <article className="nt-chart-card cinematic-reveal delay-2">
            <h3>Visibilidad para decidir mejor</h3>
            <div className="nt-chart-card__bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-cta-band cinematic-reveal">
          <div>
            <h2 className="nt-cta-band__title">
              Tu próxima mejora comercial no es otro anuncio. Es una mejor máquina de seguimiento.
            </h2>
            <p className="nt-cta-band__copy">
              Activa automatización, ordena tu proceso y convierte más todos los días.
            </p>
          </div>

          <div className="nt-cta-band__actions">
            <Link href="/contacto" className="btn-primary">
              Activar automatización
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
