import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const problems = [
  ['Leads sin respuesta', 'Muchos leads llegan, pero nadie responde a tiempo.'],
  ['Seguimiento lento', 'Los seguimientos manuales se pierden o llegan tarde.'],
  ['Ventas sin prioridad', 'No sabes qué leads tienen mayor intención de compra.'],
  ['Campañas sin cierre medible', 'Invierte en anuncios, pero no cierras el ciclo completo.'],
  ['Formularios que no convierten', 'Demasiados campos y poca claridad en la ruta de entrada.'],
]

const functions = [
  ['Formularios inteligentes', 'Diseños optimizados que convierten más con menos campos.'],
  ['Lead scoring', 'Prioriza cada lead según comportamiento, perfil e intención.'],
  ['CRM', 'Pipeline visual, oportunidades y actividad del equipo.'],
  ['Campañas automáticas', 'Secuencias por interés, comportamiento y etapa del buyer.'],
  ['Respuesta por WhatsApp', 'Responde en el canal que tus leads ya usan todos los días.'],
  ['Agenda', 'Agenda reuniones automáticamente y reduce no-shows.'],
  ['Panel comercial', 'KPIs en tiempo real para decidir con datos.'],
  ['IA para resumen del lead', 'Resumen automático y próximos pasos recomendados.'],
]

export default function AutomatizacionPage() {
  return (
    <div>
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
              <Link href="/automatizacion" className="btn-primary">
                Ver flujo
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Solicitar demo
              </Link>
            </div>
          </div>

          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Problemas que frenan tu crecimiento</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {problems.map(([title, body], index) => (
            <article key={title} className={`nt-problem-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="nt-problem-card__title">{title}</h3>
              <p className="nt-problem-card__body">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>

        <div className="cinematic-reveal delay-2">
          <div className="nt-section-head">
            <h2 className="nt-section-title">Cómo funciona tu máquina de seguimiento</h2>
            <p className="nt-section-copy">Captura, clasifica, asigna, activa y mide. Esa es la secuencia que evita que el lead se enfríe.</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ['1', 'Captura inteligente', 'Formularios y anuncios con mínima fricción.'],
              ['2', 'Clasificación automática', 'IA califica y segmenta por perfil e intención.'],
              ['3', 'Asignación a ventas', 'Cada lead cae con el asesor y ritmo correcto.'],
              ['4', 'Secuencia por interés', 'Email, WhatsApp y recordatorios automáticos.'],
            ].map(([num, title, body], index) => (
              <article key={title} className={`nt-step-card cinematic-reveal delay-${(index % 4) + 1}`}>
                <span className="nt-step-card__num">{num}</span>
                <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{title}</h3>
                <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Todo lo que necesitas para convertir más</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {functions.map(([title, body], index) => (
            <article key={title} className={`nt-feature-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{title}</h3>
              <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-cta-band cinematic-reveal">
          <div>
            <h2 className="nt-cta-band__title">
              Tu próxima mejora comercial no es otro anuncio. Es una mejor máquina de seguimiento.
            </h2>
            <p className="nt-cta-band__copy">
              NearTec conecta captación, CRM, automatización y operación para que el lead no se pierda ni se enfríe.
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
