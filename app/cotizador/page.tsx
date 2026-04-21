import CotizadorNearTec from '@/components/CotizadorNearTec'

export default function CotizadorPage() {
  return (
    <div className="page-shell">
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">Cotizador inteligente NearTec</span>
          <h1 className="nt-page-title">
            Te decimos qué stack te conviene antes de que pierdas tiempo y dinero.
          </h1>
          <p className="nt-page-copy">
            Responde unas preguntas y recibe una ruta sugerida según tu empresa, etapa y
            operación actual.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            'Stack sugerido',
            'Prioridad por fases',
            'Rango orientativo + siguiente paso',
          ].map((item, index) => (
            <article key={item} className={`nt-tool-card cinematic-reveal delay-${index + 1}`}>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
