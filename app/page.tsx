import CotizadorNearTec from '@/components/CotizadorNearTec'

const highlights = [
  'CompuNegocio',
  'CN7',
  'Implementación',
  'Soporte remoto',
  'Infraestructura',
  'WhatsApp directo',
]

const solutions = [
  {
    title: 'CompuNegocio',
    body: 'Licenciamiento por estación para una operación más ordenada, estable y lista para crecer.',
  },
  {
    title: 'CN7 y nube',
    body: 'Entorno remoto, respaldo y continuidad operativa para empresas que necesitan trabajar sin fricción.',
  },
  {
    title: 'Implementación',
    body: 'Configuración inicial, validación, puesta en marcha y acompañamiento desde el arranque.',
  },
  {
    title: 'Soporte técnico',
    body: 'Atención remota para incidencias, capacitación, ajustes y seguimiento comercial.',
  },
  {
    title: 'Desarrollo',
    body: 'Cambios, mejoras y personalizaciones para procesos que requieren una solución más precisa.',
  },
  {
    title: 'Infraestructura',
    body: 'Base tecnológica para empresas que necesitan operar mejor, vender mejor y responder más rápido.',
  },
]

const process = [
  {
    step: '01',
    title: 'Diagnóstico',
    body: 'Entendemos el servicio, el tamaño de operación y lo que realmente necesita tu empresa.',
  },
  {
    step: '02',
    title: 'Estimado',
    body: 'El cotizador genera una base clara para licencias, nube, soporte, desarrollo e implementación.',
  },
  {
    step: '03',
    title: 'Asesoría',
    body: 'Un asesor revisa el alcance, afina variables y aterriza la ruta correcta para el proyecto.',
  },
  {
    step: '04',
    title: 'Seguimiento',
    body: 'La conversación continúa por WhatsApp para acelerar validación, cierre y arranque.',
  },
]

const faqs = [
  {
    question: '¿El cotizador reemplaza la cotización final?',
    answer:
      'No. Genera un estimado inicial para acelerar el proceso comercial. La validación final la realiza un asesor con el alcance real del proyecto.',
  },
  {
    question: '¿Puedo cotizar algo personalizado?',
    answer:
      'Sí. Puedes escribir exactamente lo que necesitas y enviarlo directo para revisión comercial y técnica.',
  },
  {
    question: '¿Qué tipos de servicio puedo cotizar?',
    answer:
      'CompuNegocio, CN7, nube, soporte, implementación, desarrollo y requerimientos personalizados.',
  },
  {
    question: '¿La atención continúa por WhatsApp?',
    answer:
      'Sí. El sitio está pensado para llevar al prospecto directo con un asesor y mantener el seguimiento sin perder contexto.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-16">
      <section
        id="inicio"
        className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          <div>
            <span className="inline-flex rounded-full border border-[var(--brand-line)] bg-[var(--brand-green-soft)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-ink)]">
              Tecnología empresarial
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.98] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              NearTec: infraestructura, CN7, soporte e implementación para empresas que necesitan operar mejor.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-muted)] sm:text-lg">
              Soluciones tecnológicas para empresas que buscan orden operativo, continuidad,
              velocidad de respuesta y atención comercial directa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cotizador" className="btn-primary">
                Cotizar ahora
              </a>

              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--brand-line)] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--brand-ink)] shadow-[0_10px_24px_rgba(18,24,18,0.05)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[var(--brand-line)] bg-white p-5 shadow-[var(--brand-shadow)] md:p-7">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#f4f9e7_100%)] p-6 md:p-7">
              <div className="flex flex-wrap gap-2">
                {['NearTec', 'Business Tech', 'Atención directa'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[rgba(155,197,61,0.16)] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-ink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h2 className="mt-5 text-2xl font-black leading-tight text-[var(--brand-ink)] md:text-3xl">
                Tecnología útil para operar, vender y dar seguimiento sin perder ritmo.
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Atención comercial directa',
                  'Cotizador en tiempo real',
                  'Seguimiento por WhatsApp',
                  'Experiencia optimizada para móvil',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[rgba(155,197,61,0.28)] bg-white/80 px-4 py-4 text-sm font-bold text-[var(--brand-ink)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="grid gap-3 rounded-[32px] border border-[var(--brand-line)] bg-white p-4 shadow-[var(--brand-shadow)] sm:grid-cols-3 sm:p-5">
          {[
            'Diseño claro para escritorio y celular',
            'Cotización conectada a seguimiento real',
            'Estructura enfocada en conversión',
          ].map((item) => (
            <div
              key={item}
              className="rounded-[20px] bg-[var(--brand-green-soft)] px-4 py-4 text-center text-sm font-extrabold text-[var(--brand-ink)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="soluciones"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[var(--brand-green-soft)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-ink)]">
            Soluciones
          </span>

          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-4xl">
            Servicios diseñados para empresas que necesitan estructura y velocidad.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.title}
              className="group rounded-[30px] border border-[var(--brand-line)] bg-white p-6 shadow-[var(--brand-shadow)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(155,197,61,0.45)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-green-soft)] text-lg font-black text-[var(--brand-green-strong)]">
                +
              </div>

              <h3 className="text-xl font-black text-[var(--brand-ink)]">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="proceso"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex rounded-full bg-[var(--brand-green-soft)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-ink)]">
            Proceso
          </span>

          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-4xl">
            Un flujo simple para cotizar, validar y avanzar.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-[30px] border border-[var(--brand-line)] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbec_100%)] p-6"
            >
              <span className="text-4xl font-black text-[var(--brand-green-strong)]">
                {item.step}
              </span>

              <h3 className="mt-4 text-xl font-black text-[var(--brand-ink)]">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cotizador"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      >
        <CotizadorNearTec />
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[var(--brand-green-soft)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-ink)]">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-[28px] border border-[var(--brand-line)] bg-white p-6 shadow-[var(--brand-shadow)]"
            >
              <h3 className="text-lg font-black text-[var(--brand-ink)]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14"
      >
        <div className="rounded-[34px] border border-[var(--brand-line)] bg-[linear-gradient(135deg,#f4f9e7_0%,#ffffff_100%)] p-8 shadow-[var(--brand-shadow)] md:p-12">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-ink)]">
              Contacto
            </span>

            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-4xl">
              Cotiza hoy y continúa el proceso con un asesor.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--brand-muted)]">
              NearTec integra cotización, atención comercial y seguimiento directo para acelerar
              decisiones.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cotizador" className="btn-primary">
              Ir al cotizador
            </a>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20comercial%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
