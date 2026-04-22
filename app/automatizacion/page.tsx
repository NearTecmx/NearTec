import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const problems = [
  'Leads sin respuesta',
  'Seguimiento lento',
  'Ventas sin prioridad',
  'Campañas sin cierre medible',
  'Formularios que no convierten',
]

const functions = [
  'Formularios inteligentes',
  'Lead scoring',
  'CRM',
  'Campañas automáticas',
  'WhatsApp',
  'Agenda',
  'Panel comercial',
  'IA para resumen del lead',
]

export default function AutomatizacionPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Automatización, CRM e IA</span>
            <h1 className="nt-page-title">
              Convierte leads en seguimiento real, no en formularios olvidados.
            </h1>
            <p className="nt-page-copy">
              Centraliza captación, clasificación, nurturing, agenda y remarketing en una sola
              ruta comercial.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">
                Solicitar demo
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Ver diagnóstico
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
          {problems.map((item, index) => (
            <article
              key={item}
              className={`nt-tool-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{item}</h3>
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
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ['1', 'Captura inteligente', 'Formularios y entradas con mínima fricción.'],
              ['2', 'Clasificación automática', 'IA y reglas según perfil e intención.'],
              ['3', 'Asignación a ventas', 'Cada lead cae en la ruta comercial correcta.'],
              ['4', 'Secuencia por interés', 'Emails, WhatsApp y recordatorios automáticos.'],
            ].map(([num, title, body], index) => (
              <article
                key={title}
                className={`nt-step-card cinematic-reveal delay-${(index % 4) + 1}`}
              >
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
          <h2 className="nt-section-title">Todo lo que necesitas para convertir mejor</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {functions.map((item, index) => (
            <article
              key={item}
              className={`nt-feature-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{item}</h3>
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
              NearTec conecta captación, CRM, automatización y operación para que el lead no se
              enfríe ni se pierda.
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