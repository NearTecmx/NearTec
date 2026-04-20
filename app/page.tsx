import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    title: 'Infraestructura',
    body: 'Base tecnológica más estable y mejor conectada.',
  },
  {
    title: 'Sistemas',
    body: 'Herramientas para operar con más orden y velocidad.',
  },
  {
    title: 'Cloud',
    body: 'Continuidad y acceso para equipos que necesitan avanzar sin fricción.',
  },
]

const systems = [
  'CompuNegocio',
  'CN7',
  'Punto de venta',
  'Cloud y hosting',
  'Mailing empresarial',
  'Implementación',
]

const benefits = [
  {
    title: 'Más claridad',
    body: 'Oferta simple, directa y fácil de entender.',
  },
  {
    title: 'Más control',
    body: 'Procesos mejor organizados y mejor acompañados.',
  },
  {
    title: 'Más continuidad',
    body: 'Soluciones pensadas para sostener la operación.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-8">
      <section className="hero-shell">
        <div className="hero-backdrop" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-16 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="eyebrow">Technology Near You</span>

            <h1 className="hero-title">
              Infraestructura, sistemas y cloud para una operación más inteligente.
            </h1>

            <p className="hero-copy">
              Tecnología empresarial con atención directa, implementación clara y una
              experiencia más premium.
            </p>

            <div className="hero-actions">
              <Link href="/contacto" className="btn-primary cinematic-button">
                Solicitar asesoría
              </Link>

              <Link href="/soluciones" className="btn-secondary cinematic-button">
                Ver soluciones
              </Link>
            </div>

            <div className="hero-kpis">
              {['Cloud', 'Implementación', 'Soporte', 'WhatsApp directo'].map((item) => (
                <span key={item} className="kpi-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <div className="hero-media-frame">
              <div className="hero-media-glow" />

              <div className="hero-media-card hero-media-card--dark">
                <div className="hero-image-wrap">
                  <Image
                    src="/images/neartec-hero.jpg"
                    alt="NearTec infraestructura y sistemas empresariales"
                    fill
                    priority
                    className="hero-image"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                  <div className="hero-image-overlay" />
                </div>

                <div className="hero-tech-overlay">
                  <span className="hero-tech-badge">Infraestructura</span>
                  <span className="hero-tech-badge">Sistemas</span>
                  <span className="hero-tech-badge">Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="signal-strip cinematic-reveal delay-2">
          <span className="signal-strip__label">NearTec</span>
          <div className="signal-strip__items">
            {['Operación', 'Continuidad', 'Soporte', 'Implementación'].map((item) => (
              <span key={item} className="signal-strip__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Soluciones</span>
          <h2 className="section-title">Tecnología mejor organizada desde el primer vistazo.</h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <article
              key={item.title}
              className={`premium-card premium-card--tech cinematic-reveal delay-${index + 1}`}
            >
              <div className="premium-card__icon premium-card__icon--dark">+</div>
              <h3 className="premium-card__title">{item.title}</h3>
              <p className="premium-card__body">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/soluciones" className="btn-secondary">
            Explorar soluciones
          </Link>
          <Link href="/sistemas" className="btn-secondary">
            Ver sistemas
          </Link>
        </div>
      </section>

      <section className="section-shell section-shell--soft">
        <div className="section-grid section-grid--split">
          <div className="cinematic-reveal">
            <span className="eyebrow">Sistemas</span>
            <h2 className="section-title">Un ecosistema claro, moderno y profesional.</h2>
            <p className="section-copy section-copy--short">
              NearTec integra distintas rutas para administrar, respaldar y operar mejor.
            </p>
          </div>

          <div className="system-cloud cinematic-reveal delay-2">
            {systems.map((item) => (
              <span key={item} className="system-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="dark-band cinematic-reveal">
          <div className="dark-band__header">
            <span className="eyebrow eyebrow--inverse">Ventajas</span>
            <h2 className="dark-band__title">Menos ruido. Más claridad. Mejor percepción de marca.</h2>
          </div>

          <div className="dark-band__grid">
            {benefits.map((item, index) => (
              <article key={item.title} className={`dark-card delay-${index + 1}`}>
                <h3 className="dark-card__title">{item.title}</h3>
                <p className="dark-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Contacto</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Habla con NearTec y continúa con una solución más sólida.
            </h2>
          </div>

          <div className="contact-banner__actions">
            <Link
              href="/contacto"
              className="btn-secondary btn-secondary--light cinematic-button"
            >
              Ir a contacto
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary cinematic-button"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
