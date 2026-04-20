import Image from 'next/image'
import Link from 'next/link'

const quickSolutions = [
  'Infraestructura empresarial',
  'Sistemas administrativos',
  'Cloud y continuidad',
  'Implementación guiada',
]

const featureCards = [
  {
    title: 'Soluciones empresariales',
    body: 'Infraestructura, sistemas y acompañamiento para una operación más clara y mejor conectada.',
  },
  {
    title: 'Atención directa',
    body: 'Canales ágiles para avanzar más rápido desde la consulta inicial hasta la implementación.',
  },
  {
    title: 'Continuidad operativa',
    body: 'Herramientas pensadas para reducir fricción y sostener el ritmo del negocio.',
  },
]

const systemPreview = [
  'CompuNegocio',
  'CN7',
  'Punto de venta',
  'Cloud y hosting',
  'Mailing empresarial',
  'Implementación',
]

export default function HomePage() {
  return (
    <div className="pb-8">
      <section className="hero-shell">
        <div className="hero-backdrop" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-8 lg:pb-18 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="eyebrow">Technology Near You</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] text-[var(--brand-ink)] sm:text-5xl lg:text-[66px]">
              Tecnología empresarial con mejor estructura, mejor atención y mejor
              ritmo de operación.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-muted)] sm:text-lg">
              Sistemas, infraestructura, cloud e implementación para empresas que
              necesitan avanzar con claridad.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="btn-primary cinematic-button">
                Solicitar asesoría
              </Link>
              <Link href="/soluciones" className="btn-secondary cinematic-button">
                Ver soluciones
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {quickSolutions.map((item, index) => (
                <span
                  key={item}
                  className={`hero-chip cinematic-reveal delay-${(index % 4) + 1}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <div className="hero-media-frame">
              <div className="hero-media-glow" />
              <div className="hero-media-card">
                <div className="hero-media-copy">
                  <span className="eyebrow">NearTec premium</span>
                  <h2 className="mt-3 text-2xl font-black text-[var(--brand-ink)] md:text-3xl">
                    Una experiencia más limpia, más rápida y fácil de entender.
                  </h2>
                </div>
                <div className="hero-image-wrap">
                  <Image
                    src="/images/neartec-hero.jpg"
                    alt="Infraestructura y operación empresarial"
                    fill
                    priority
                    className="hero-image"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                  <div className="hero-image-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="trust-strip cinematic-reveal delay-2">
          <div className="trust-strip__label">Lo que importa</div>
          <div className="trust-strip__items">
            {['Cloud', 'Sistemas', 'Soporte', 'Implementación', 'WhatsApp directo'].map(
              (item) => (
                <span key={item} className="trust-strip__item">
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Soluciones</span>
          <h2 className="section-title">Todo más claro desde el primer vistazo.</h2>
          <p className="section-copy">
            Una oferta mejor organizada ayuda a decidir más rápido y con menos
            fricción.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featureCards.map((card, index) => (
            <article
              key={card.title}
              className={`premium-card cinematic-reveal delay-${index + 1}`}
            >
              <div className="premium-card__icon">+</div>
              <h3 className="premium-card__title">{card.title}</h3>
              <p className="premium-card__body">{card.body}</p>
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
            <h2 className="section-title">Una web premium también muestra amplitud.</h2>
            <p className="section-copy">
              NearTec integra distintas rutas de solución para operar, vender,
              respaldar y crecer mejor.
            </p>
          </div>

          <div className="sector-cloud cinematic-reveal delay-2">
            {systemPreview.map((item) => (
              <span key={item} className="sector-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Contacto</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Habla con NearTec y lleva tu operación a una experiencia más sólida.
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
