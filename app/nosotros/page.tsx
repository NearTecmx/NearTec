import Link from 'next/link'

const pillars = [
  {
    title: 'Claridad',
    body: 'Soluciones mejor explicadas, mejor organizadas y fáciles de entender desde el primer contacto.',
  },
  {
    title: 'Acompañamiento',
    body: 'Atención directa para avanzar con más seguridad desde la decisión inicial hasta la implementación.',
  },
  {
    title: 'Continuidad',
    body: 'Tecnología enfocada en mantener el ritmo del negocio y reducir fricción operativa.',
  },
]

const sectors = [
  'Comercio',
  'Servicios',
  'Equipos administrativos',
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
              NearTec acompaña empresas que necesitan estructura, continuidad y
              mejor ritmo de operación.
            </h1>
            <p className="section-copy">
              La propuesta combina tecnología empresarial, implementación y
              atención cercana para resolver con más claridad.
            </p>
          </div>

          <div className="sector-cloud cinematic-reveal delay-2">
            {sectors.map((sector) => (
              <span key={sector} className="sector-pill">
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
              className={`metric-card cinematic-reveal delay-${index + 1}`}
            >
              <h2 className="metric-card__title">{item.title}</h2>
              <p className="metric-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="closing-panel cinematic-reveal">
          <span className="eyebrow">Visión</span>
          <h2 className="section-title">
            Una presencia más sólida, más profesional y alineada a una marca
            empresarial premium.
          </h2>
          <p className="section-copy">
            NearTec está pensado para ayudar a empresas que buscan una
            experiencia tecnológica más limpia, más útil y mejor acompañada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/soluciones" className="btn-secondary cinematic-button">
              Ver soluciones
            </Link>
            <Link href="/contacto" className="btn-primary cinematic-button">
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
