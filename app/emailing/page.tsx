import Link from 'next/link'
import { EmailingPerformanceBoard, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const problems = [
  'Campañas sin seguimiento',
  'Bases de datos sin segmentación',
  'Correos que no responden a intención',
  'Esfuerzo comercial sin continuidad',
  'Mensajes que no se conectan con CRM',
]

const modules = [
  {
    title: 'Emailing corporativo',
    body: 'Comunicación más ordenada, profesional y conectada con la operación.',
  },
  {
    title: 'Secuencias',
    body: 'Correos por etapa, interés o necesidad para que el lead no se enfríe.',
  },
  {
    title: 'Segmentación',
    body: 'Mensajes distintos según perfil, comportamiento o momento de compra.',
  },
  {
    title: 'A/B y optimización',
    body: 'Más claridad para entender qué abre, qué responde y qué mueve la acción.',
  },
  {
    title: 'Remarketing',
    body: 'Señales para reactivar usuarios y oportunidades que ya mostraron interés.',
  },
  {
    title: 'Conexión comercial',
    body: 'Emailing vinculado a CRM, automatización y seguimiento real.',
  },
]

export default function EmailingPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Emailing & campañas</span>
            <h1 className="nt-page-title">
              Campañas, secuencias y comunicación que sí acompañan la compra.
            </h1>
            <p className="nt-page-copy">
              Emailing corporativo, automatizado y mejor conectado con CRM, remarketing y seguimiento
              comercial.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">
                Activar emailing
              </Link>
              <Link href="/automatizacion" className="btn-secondary">
                Ver automatización
              </Link>
            </div>
          </div>

          <EmailingPerformanceBoard />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Qué rompe una estrategia de emailing</h2>
            <p className="nt-section-copy">
              El problema no es solo enviar. El problema es enviar sin estructura, sin contexto y sin
              una ruta real hacia la siguiente acción.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((item, index) => (
              <article
                key={item}
                className={`nt-tool-card cinematic-reveal delay-${(index % 4) + 1}`}
              >
                <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{item}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="cinematic-reveal delay-2">
          <NearTecFlowMockup />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Lo que NearTec conecta alrededor del emailing</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((item, index) => (
            <article
              key={item.title}
              className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="nt-layer-card__title">{item.title}</h3>
              <p className="nt-layer-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Resultado</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">
              Emailing que no vive aislado, sino conectado al recorrido comercial completo
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
              El objetivo no es mandar correos por mandar. El objetivo es sostener mejor la
              conversación y empujar acciones reales.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Leads', 'Segmentación', 'Secuencias', 'Automatización', 'Remarketing', 'CRM'].map(
              (item) => (
                <span key={item} className="nt-soft-chip">
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Siguiente paso</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Si ya estás captando leads, el emailing correcto ayuda a que no se pierdan por falta de seguimiento.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Activar emailing
            </Link>
            <Link href="/cotizador" className="btn-primary">
              Ver diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}