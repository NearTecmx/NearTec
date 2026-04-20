import Image from 'next/image'
import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'

type Glyph = 'nodes' | 'cloud' | 'shield' | 'layer'

function TechGlyph({ name }: { name: Glyph }) {
  if (name === 'nodes') {
    return (
      <svg viewBox="0 0 24 24" className="tech-glyph" aria-hidden="true">
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="6" cy="18" r="2.2" />
        <circle cx="18" cy="18" r="2.2" />
        <path d="M8 6h8M6 8v8M18 8v8M8 18h8" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </svg>
    )
  }

  if (name === 'cloud') {
    return (
      <svg viewBox="0 0 24 24" className="tech-glyph" aria-hidden="true">
        <path d="M8.3 18.2h8.2a3.7 3.7 0 0 0 .5-7.4 5.4 5.4 0 0 0-10.5-1.2A4 4 0 0 0 8.3 18.2Z" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className="tech-glyph" aria-hidden="true">
        <path d="M12 3.2 6.1 5.5v5.4c0 4.3 2.5 7.4 5.9 9.8 3.4-2.4 5.9-5.5 5.9-9.8V5.5L12 3.2Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="tech-glyph" aria-hidden="true">
      <rect x="4" y="5" width="16" height="4.8" rx="1.4" />
      <rect x="4" y="14.2" width="16" height="4.8" rx="1.4" />
      <circle cx="8" cy="7.4" r="0.9" fill="currentColor" />
      <circle cx="8" cy="16.6" r="0.9" fill="currentColor" />
    </svg>
  )
}

const solutions = [
  {
    icon: 'nodes' as const,
    title: 'Infraestructura',
    body: 'Base tecnológica estable para crecer mejor.',
  },
  {
    icon: 'cloud' as const,
    title: 'Cloud',
    body: 'Continuidad y acceso con menos fricción.',
  },
  {
    icon: 'shield' as const,
    title: 'Soporte',
    body: 'Atención directa para resolver rápido.',
  },
  {
    icon: 'layer' as const,
    title: 'Implementación',
    body: 'Arranque guiado y operación más clara.',
  },
]

const software = ['CompuNegocio', 'CN7', 'Punto de venta', 'Hosting', 'Mailing', 'Implementación']

export default function HomePage() {
  return (
    <div className="page-home">
      <section id="inicio" className="nt-hero">
        <div className="nt-hero__grid" />
        <div className="nt-hero__glow nt-hero__glow--left" />
        <div className="nt-hero__glow nt-hero__glow--right" />

        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8 lg:pb-16 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="nt-pill nt-pill--soft">Technology Near You</span>

            <h1 className="nt-hero__title">
              Software, infraestructura y cloud para una operación más inteligente.
            </h1>

            <p className="nt-hero__copy">
              Soluciones empresariales con atención directa, implementación clara y mejor ritmo.
            </p>

            <div className="nt-hero__actions">
              <a href="#cotizador" className="nt-btn nt-btn--primary nt-shine">
                Cotizar ahora
              </a>

              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="nt-btn nt-btn--secondary nt-shine"
              >
                WhatsApp
              </a>
            </div>

            <div className="nt-hero__chips">
              {['Cloud', 'Sistemas', 'Soporte', 'Atención directa'].map((item) => (
                <span key={item} className="nt-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <div className="nt-hero-card">
              <div className="nt-hero-card__media">
                <Image
                  src="/images/neartec-hero.jpg"
                  alt="NearTec software e infraestructura"
                  fill
                  priority
                  className="nt-hero-card__image"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="nt-hero-card__overlay" />
              </div>

              <div className="nt-hero-card__hud">
                <span className="nt-hud">Infraestructura</span>
                <span className="nt-hud">Software</span>
                <span className="nt-hud">Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="nt-strip cinematic-reveal delay-2">
          <span className="nt-strip__label">NearTec</span>

          <div className="nt-strip__items">
            {['Operación', 'Continuidad', 'Implementación', 'Soporte'].map((item) => (
              <span key={item} className="nt-strip__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="nt-section">
        <div className="nt-section__head cinematic-reveal">
          <span className="nt-pill nt-pill--soft">Soluciones</span>
          <h2 className="nt-section__title">Todo más claro desde el primer vistazo.</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((item, index) => (
            <article key={item.title} className={`nt-card nt-card--tech cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="nt-card__icon">
                <TechGlyph name={item.icon} />
              </div>

              <h3 className="nt-card__title">{item.title}</h3>
              <p className="nt-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="software" className="nt-section nt-section--soft">
        <div className="nt-band cinematic-reveal">
          <div className="nt-band__copy">
            <span className="nt-pill nt-pill--soft">Software</span>
            <h2 className="nt-section__title">Un ecosistema moderno, limpio y profesional.</h2>
            <p className="nt-section__copy nt-section__copy--short">
              Sistemas y servicios listos para operar mejor.
            </p>
          </div>

          <div className="nt-band__chips">
            {software.map((item) => (
              <span key={item} className="nt-soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizador" className="nt-section">
        <div className="nt-section__head cinematic-reveal">
          <span className="nt-pill nt-pill--soft">Cotizador</span>
          <h2 className="nt-section__title">Precios reales. Respuesta rápida.</h2>
          <p className="nt-section__copy nt-section__copy--short">
            Calcula una base y continúa con un asesor.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section id="contacto" className="nt-section">
        <div className="nt-contact cinematic-reveal">
          <div>
            <span className="nt-pill nt-pill--dark">Contacto</span>
            <h2 className="nt-contact__title">
              Habla con NearTec y continúa con una solución más sólida.
            </h2>
          </div>

          <div className="nt-contact__actions">
            <Link href="/contacto" className="nt-btn nt-btn--ghost nt-shine">
              Ir a contacto
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="nt-btn nt-btn--primary nt-shine"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
