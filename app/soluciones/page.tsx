import Link from 'next/link'

const solutions = [
  {
    title: 'Infraestructura empresarial',
    body: 'Base tecnológica para una operación más estable.',
  },
  {
    title: 'Cloud y continuidad',
    body: 'Acceso y respaldo para seguir operando con más tranquilidad.',
  },
  {
    title: 'Sistemas administrativos',
    body: 'Orden, control y mejor ritmo de trabajo.',
  },
  {
    title: 'Implementación',
    body: 'Arranque guiado y mejor adopción.',
  },
  {
    title: 'Soporte',
    body: 'Atención directa para resolver más rápido.',
  },
  {
    title: 'Soluciones personalizadas',
    body: 'Cuando el proyecto necesita una ruta específica.',
  },
]

export default function SolucionesPage() {
  return (
    <div className="pb-8">
      <section className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Soluciones</span>
          <h1 className="section-title">
            Soluciones tecnológicas para operar con más orden, continuidad y velocidad.
          </h1>
          <p className="section-copy section-copy--short">
            Una oferta clara ayuda a decidir más rápido.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => (
            <article
              key={item.title}
              className={`premium-card premium-card--tech cinematic-reveal delay-${(index % 3) + 1}`}
            >
              <div className="premium-card__icon premium-card__icon--dark">+</div>
              <h2 className="premium-card__title">{item.title}</h2>
              <p className="premium-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Siguiente paso</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Cuéntanos qué necesita tu empresa y te ayudamos a encontrar la mejor ruta.
            </h2>
          </div>

          <div className="contact-banner__actions">
            <Link
              href="/contacto"
              className="btn-secondary btn-secondary--light cinematic-button"
            >
              Cotizar
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20las%20soluciones%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary cinematic-button"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
