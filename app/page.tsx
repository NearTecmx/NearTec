import Link from 'next/link'
import Image from 'next/image'
import CotizadorNearTec from '@/components/CotizadorNearTec'

type IconName = 'server' | 'cloud' | 'shield' | 'flow'

function TechIcon({ name }: { name: IconName }) {
  if (name === 'server') {
    return (
      <svg viewBox="0 0 24 24" className="tech-icon" aria-hidden="true">
        <rect x="4" y="5" width="16" height="5" rx="1.5" />
        <rect x="4" y="14" width="16" height="5" rx="1.5" />
        <circle cx="8" cy="7.5" r="0.9" fill="currentColor" />
        <circle cx="8" cy="16.5" r="0.9" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'cloud') {
    return (
      <svg viewBox="0 0 24 24" className="tech-icon" aria-hidden="true">
        <path d="M8.4 18.5H17a3.5 3.5 0 0 0 .4-7A5.2 5.2 0 0 0 7.2 10a3.8 3.8 0 0 0 1.2 8.5Z" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className="tech-icon" aria-hidden="true">
        <path d="M12 3.5 6.5 5.6v5.2c0 4 2.3 7 5.5 9.2 3.2-2.2 5.5-5.2 5.5-9.2V5.6L12 3.5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="tech-icon" aria-hidden="true">
      <path d="M5 7h5v4H5V7Zm9 0h5v4h-5V7ZM5 13h5v4H5v-4Zm9-2h5v6h-5v-6ZM10 9h4v2h-4z" />
    </svg>
  )
}

const solutionCards = [
  {
    icon: 'server' as const,
    title: 'Infraestructura',
    body: 'Base tecnológica estable para operar mejor.',
  },
  {
    icon: 'cloud' as const,
    title: 'Cloud',
    body: 'Continuidad y acceso para equipos que necesitan avanzar sin fricción.',
  },
  {
    icon: 'shield' as const,
    title: 'Soporte',
    body: 'Atención directa para resolver rápido y seguir operando.',
  },
  {
    icon: 'flow' as const,
    title: 'Implementación',
    body: 'Arranque guiado con una experiencia más clara.',
  },
]

const softwareItems = [
  'CompuNegocio',
  'CN7',
  'Punto de venta',
  'Hosting',
  'Mailing empresarial',
  'Implementación',
]

const microStats = [
  'Cloud y continuidad',
  'Sistemas empresariales',
  'Atención directa',
  'Cotización inmediata',
]

export default function HomePage() {
  return (
    <div className="page-home">
      <section id="inicio" className="hero-shell">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--left" />
        <div className="hero-glow hero-glow--right" />

        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8 lg:pb-16 lg:pt-14">
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
              <a href="#cotizador" className="btn-primary cinematic-button">
                Cotizar ahora
              </a>

              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary cinematic-button"
              >
                WhatsApp
              </a>
            </div>

            <div className="hero-pills">
              {microStats.map((item) => (
                <span key={item} className="hero-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <div className="hero-panel hero-panel--dark">
              <div className="hero-panel__media">
                <Image
                  src="/images/neartec-hero.jpg"
                  alt="NearTec software e infraestructura"
                  fill
                  priority
                  className="hero-image"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="hero-image-overlay" />
              </div>

              <div className="hero-panel__hud">
                <span className="hud-chip">Software</span>
                <span className="hud-chip">Cloud</span>
                <span className="hud-chip">Infraestructura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="signal-strip cinematic-reveal delay-2">
          <span className="signal-strip__label">NearTec</span>

          <div className="signal-strip__items">
            {['Operación', 'Continuidad', 'Implementación', 'Atención directa'].map((item) => (
              <span key={item} className="signal-strip__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Soluciones</span>
          <h2 className="section-title">Tecnología mejor organizada desde el primer vistazo.</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutionCards.map((item, index) => (
            <article
              key={item.title}
              className={`solution-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <div className="solution-card__icon">
                <TechIcon name={item.icon} />
              </div>
              <h3 className="solution-card__title">{item.title}</h3>
              <p className="solution-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="software" className="section-shell section-shell--soft">
        <div className="software-band cinematic-reveal">
          <div className="software-band__copy">
            <span className="eyebrow">Software</span>
            <h2 className="section-title">Un ecosistema más claro, moderno y profesional.</h2>
            <p className="section-copy section-copy--short">
              Sistemas y servicios listos para una operación más fluida.
            </p>
          </div>

          <div className="software-band__chips">
            {softwareItems.map((item) => (
              <span key={item} className="software-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizador" className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Cotizador</span>
          <h2 className="section-title">Cotiza con precios reales y atención directa.</h2>
          <p className="section-copy section-copy--short">
            Calcula una base rápida y continúa con un asesor.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section id="contacto" className="section-shell">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Contacto</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Habla con NearTec y continúa con una solución más sólida.
            </h2>
          </div>

          <div className="contact-banner__actions">
            <Link href="/contacto" className="btn-secondary btn-secondary--light cinematic-button">
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
