import Link from 'next/link'

const pillars = [
  {
    title: 'Claridad',
    body: 'Tecnología mejor explicada y más fácil de adoptar.',
  },
  {
    title: 'Acompañamiento',
    body: 'Atención directa para avanzar con más seguridad.',
  },
  {
    title: 'Continuidad',
    body: 'Soluciones enfocadas en sostener la operación.',
  },
]

const sectors = [
  'Comercio',
  'Servicios',
  'Administración',
  'Operaciones híbridas',
  'Negocios en expansión',
  'Atención binacional',
]

export default function NosotrosPage() {
  return (
    <div className="pb-8">
      <section className="section-shell">
        <div className="section-grid section-grid--split">
          <div className="cinematic-reveal">
            <span className="eyebrow">Nosotros</span>
            <h1 className="section-title">
              NearTec acompaña empresas que necesitan estructura, continuidad y mejor ritmo.
            </h1>
            <p className="section-copy section-copy--short">
              Tecnología empresarial con una experiencia más clara y profesional.
            </p>
          </div>

          <div className="system-cloud cinematic-reveal delay-2">
            {sectors.map((sector) => (
              <span key={sector} className="system-pill">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--soft">
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <article
              key={item.title}
              className={`metric-card metric-card--tech cinematic-reveal delay-${index + 1}`}
            >
              <h2 className="metric-card__title">{item.title}</h2>
              <p className="metric-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="dark-band cinematic-reveal">
          <div className="dark-band__header">
            <span className="eyebrow eyebrow--inverse">NearTec</span>
            <h2 className="dark-band__title">
              Una presencia más moderna, más limpia y mejor posicionada.
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/soluciones" className="btn-secondary btn-secondary--light">
              Ver soluciones
            </Link>
            <Link href="/contacto" className="btn-primary">
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
