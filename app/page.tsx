import Image from 'next/image'
import CotizadorNearTec from '@/components/CotizadorNearTec'

const trustItems = [
  'Atención binacional',
  'Implementación guiada',
  'Continuidad operativa',
  'Acompañamiento directo',
]

const solutionCards = [
  {
    title: 'Infraestructura empresarial',
    body: 'Base tecnológica para empresas que necesitan operar con mayor estabilidad, control y claridad comercial.',
  },
  {
    title: 'Sistemas y operación',
    body: 'Plataformas que ayudan a ordenar procesos, agilizar atención y sostener el crecimiento sin fricción.',
  },
  {
    title: 'Implementación y acompañamiento',
    body: 'Arranque guiado, ajustes y seguimiento para que la solución entre a operación con criterio real.',
  },
]

const systems = [
  {
    name: 'CompuNegocio',
    tag: 'Administración',
    body: 'Para empresas que necesitan control operativo, orden comercial y una base sólida para crecer mejor.',
  },
  {
    name: 'CN7',
    tag: 'Continuidad',
    body: 'Entorno remoto y respaldo pensado para operar con más flexibilidad, seguridad y disponibilidad.',
  },
  {
    name: 'Infraestructura Cloud',
    tag: 'Cloud',
    body: 'Servicios orientados a continuidad, desempeño y soporte para operaciones empresariales más ágiles.',
  },
  {
    name: 'Punto de venta',
    tag: 'Retail',
    body: 'Herramientas para mejorar velocidad de atención, control de caja y experiencia operativa en mostrador.',
  },
  {
    name: 'Emailing empresarial',
    tag: 'Comunicación',
    body: 'Soporte para comunicaciones de negocio con una imagen más profesional y una operación más ordenada.',
  },
  {
    name: 'Implementación personalizada',
    tag: 'Custom',
    body: 'Cuando el proyecto requiere una ruta específica, ajustes finos y acompañamiento más cercano.',
  },
]

const sectors = [
  'Comercio y retail',
  'Servicios empresariales',
  'Operación administrativa',
  'Empresas en expansión',
  'Equipos binacionales',
  'Operaciones con atención continua',
]

const differentiators = [
  {
    title: 'Visión operativa',
    body: 'No solo se trata de software. Se trata de que la empresa pueda operar mejor todos los días.',
  },
  {
    title: 'Atención directa',
    body: 'El contacto comercial y el seguimiento están pensados para avanzar con más claridad y menos vueltas.',
  },
  {
    title: 'Continuidad real',
    body: 'La prioridad es sostener la operación, reducir fricción y acompañar la evolución del negocio.',
  },
  {
    title: 'Implementación con criterio',
    body: 'Cada solución se aterriza con foco en uso real, adopción y valor empresarial.',
  },
]

const resources = [
  {
    title: 'Evaluación inicial',
    body: 'Revisión comercial y operativa para identificar la mejor ruta antes de implementar.',
  },
  {
    title: 'Acompañamiento de proyecto',
    body: 'Seguimiento para alinear objetivos, resolver puntos clave y mantener el avance del proceso.',
  },
  {
    title: 'Atención consultiva',
    body: 'Un enfoque más claro para empresas que necesitan orientación antes de tomar una decisión.',
  },
]

const faqItems = [
  {
    question: '¿NearTec trabaja con soluciones personalizadas?',
    answer:
      'Sí. El sitio está preparado para recibir requerimientos específicos y continuar el proceso con atención directa.',
  },
  {
    question: '¿Puedo iniciar con un estimado y después afinar el alcance?',
    answer:
      'Sí. El cotizador abre el proceso con una base clara y después un asesor aterriza el alcance final.',
  },
  {
    question: '¿La atención es solo local?',
    answer:
      'No. La comunicación y el acompañamiento están pensados para operaciones con alcance binacional y atención remota.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-6">
      <section id="inicio" className="hero-shell">
        <div className="hero-backdrop" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="eyebrow">Technology Near You</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] text-[var(--brand-ink)] sm:text-5xl lg:text-[68px]">
              Tecnología empresarial con una experiencia premium, clara y lista
              para crecer con tu operación.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-muted)] sm:text-lg">
              Infraestructura, sistemas, continuidad operativa e implementación
              con un enfoque más ejecutivo, más comercial y mejor resuelto para
              empresas que necesitan avanzar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="btn-primary cinematic-button">
                Hablar con un asesor
              </a>
              <a href="#soluciones" className="btn-secondary cinematic-button">
                Explorar soluciones
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustItems.map((item, index) => (
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
                  <span className="eyebrow">NearTec premium web</span>
                  <h2 className="mt-3 text-2xl font-black text-[var(--brand-ink)] md:text-3xl">
                    Diseño internacional, lectura inmediata y navegación pensada
                    para decisión real.
                  </h2>
                </div>
                <div className="hero-image-wrap">
                  <Image
                    src="/images/neartec-hero.jpg"
                    alt="NearTec infraestructura y operación empresarial"
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
          <div className="trust-strip__label">Confianza</div>
          <div className="trust-strip__items">
            {[
              'Operación',
              'Continuidad',
              'Implementación',
              'Acompañamiento',
              'Atención binacional',
            ].map((item) => (
              <span key={item} className="trust-strip__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Soluciones</span>
          <h2 className="section-title">
            Una estructura digital que sí proyecta una empresa de alto nivel.
          </h2>
          <p className="section-copy">
            NearTec debe sentirse como un socio tecnológico integral: claro en
            su oferta, fuerte en su presencia y mejor resuelto en la experiencia
            de navegación.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {solutionCards.map((card, index) => (
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
      </section>

      <section id="sistemas" className="section-shell section-shell--soft">
        <div className="section-grid section-grid--editorial">
          <div className="cinematic-reveal">
            <span className="eyebrow">Sistemas y plataformas</span>
            <h2 className="section-title">
              Un ecosistema empresarial más amplio, más elegante y mejor
              comunicado.
            </h2>
            <p className="section-copy">
              La web debe presentar a NearTec como una plataforma de soluciones
              empresariales y no solo como un flujo de cotización. Aquí vive la
              amplitud comercial de la marca.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {systems.map((system, index) => (
              <article
                key={system.name}
                className={`system-card cinematic-reveal delay-${(index % 4) + 1}`}
              >
                <div className="system-card__top">
                  <span className="system-card__tag">{system.tag}</span>
                  <span className="system-card__accent" />
                </div>
                <h3 className="system-card__title">{system.name}</h3>
                <p className="system-card__body">{system.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sectores" className="section-shell">
        <div className="section-grid section-grid--split">
          <div className="cinematic-reveal">
            <span className="eyebrow">Sectores</span>
            <h2 className="section-title">
              Una narrativa que conecta con distintos tipos de operación
              empresarial.
            </h2>
            <p className="section-copy">
              El sitio debe hablarle a empresas reales, con procesos reales y
              necesidades distintas, sin perder claridad ni elegancia visual.
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

      <section id="nosotros" className="section-shell section-shell--soft">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">NearTec</span>
          <h2 className="section-title">
            Una presencia más institucional, más seria y mejor posicionada.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className={`metric-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="metric-card__title">{item.title}</h3>
              <p className="metric-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="recursos" className="section-shell">
        <div className="section-grid section-grid--editorial">
          <div className="cinematic-reveal">
            <span className="eyebrow">Recursos y acompañamiento</span>
            <h2 className="section-title">
              Más profundidad de marca, más utilidad comercial y más percepción
              de valor.
            </h2>
            <p className="section-copy">
              Una página premium también comunica criterio, acompañamiento y
              capacidad para llevar la conversación mucho más allá del primer
              clic.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {resources.map((resource, index) => (
              <article
                key={resource.title}
                className={`resource-card cinematic-reveal delay-${(index % 3) + 1}`}
              >
                <span className="resource-card__line" />
                <h3 className="resource-card__title">{resource.title}</h3>
                <p className="resource-card__body">{resource.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizador" className="section-shell section-shell--soft">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Cotización</span>
          <h2 className="section-title">
            Una herramienta de entrada comercial, integrada a una experiencia
            premium.
          </h2>
          <p className="section-copy">
            El cotizador sigue presente, pero ahora vive dentro de una
            arquitectura web más sólida, más internacional y más alineada a una
            marca empresarial premium.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="closing-panel cinematic-reveal">
            <span className="eyebrow">Decisión</span>
            <h2 className="section-title">
              Tecnología empresarial que comunica mejor, navega mejor y
              convierte mejor.
            </h2>
            <p className="section-copy">
              NearTec ya no debe sentirse como una landing. Debe sentirse como
              una empresa seria, sólida y con visión internacional desde el
              primer scroll.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="btn-primary cinematic-button">
                Solicitar asesoría
              </a>
              <a href="#sistemas" className="btn-secondary cinematic-button">
                Ver ecosistema
              </a>
            </div>
          </div>

          <div className="faq-panel cinematic-reveal delay-2">
            <span className="eyebrow">FAQ</span>
            <div className="mt-5 space-y-4">
              {faqItems.map((item) => (
                <article key={item.question} className="faq-card">
                  <h3 className="faq-card__title">{item.question}</h3>
                  <p className="faq-card__body">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section-shell section-shell--contact pb-4">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Contacto</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Habla con NearTec y lleva tu operación a una experiencia
              tecnológica más sólida.
            </h2>
          </div>
          <div className="contact-banner__actions">
            <a href="tel:6631656898" className="btn-secondary btn-secondary--light cinematic-button">
              663 165 6898
            </a>
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
