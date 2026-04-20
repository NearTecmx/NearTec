import CotizadorNearTec from '@/components/CotizadorNearTec'

const solutions = [
  {
    title: 'CompuNegocio y operación diaria',
    body: 'Licenciamiento por estación, operación administrativa y una base clara para crecer sin desorden.',
  },
  {
    title: 'CN7 y nube',
    body: 'Respaldo, hospedaje y entorno remoto para empresas que necesitan continuidad sin depender de una sola máquina.',
  },
  {
    title: 'Implementación y arranque',
    body: 'Configuración inicial, validación, capacitación y acompañamiento para que el proyecto arranque bien desde el día uno.',
  },
  {
    title: 'Soporte y seguimiento',
    body: 'Atención remota, capacitación y seguimiento comercial para no dejar al prospecto frío después del primer contacto.',
  },
  {
    title: 'Desarrollo y ajustes',
    body: 'Cambios, mejoras y personalizaciones cuando la empresa necesita algo más fino que un paquete estándar.',
  },
  {
    title: 'Infraestructura tecnológica',
    body: 'NearTec como frente integral para empresas que necesitan orden operativo, base técnica y contacto directo.',
  },
]

const process = [
  {
    step: '01',
    title: 'Diagnóstico rápido',
    body: 'El usuario aterriza, entiende qué hace NearTec y detecta rápido lo que sí le resuelve.',
  },
  {
    step: '02',
    title: 'Estimado en tiempo real',
    body: 'El cotizador arma una base con estaciones, nube, timbres, soporte, desarrollo e implementación.',
  },
  {
    step: '03',
    title: 'WhatsApp con contexto',
    body: 'El lead no llega vacío. Llega con resumen, montos, foco del proyecto y necesidad escrita.',
  },
  {
    step: '04',
    title: 'Seguimiento comercial',
    body: 'El asesor valida alcance, corrige variables y empuja el cierre sin volver a empezar desde cero.',
  },
]

const faqs = [
  {
    question: '¿El cotizador reemplaza la cotización final?',
    answer:
      'No. Sirve como filtro comercial y resumen previo. La validación final la hace el asesor con el alcance real del proyecto.',
  },
  {
    question: '¿Puedo cotizar algo personalizado aunque no esté en un paquete fijo?',
    answer:
      'Sí. El formulario incluye un campo libre para escribir exactamente qué necesita la empresa y mandarlo directo a seguimiento.',
  },
  {
    question: '¿Qué sí calcula este bloque de forma real?',
    answer:
      'Licencias por estación, implementación, soporte por hora, desarrollo por hora, CN7 en USD y paquetes de timbres cargados desde la estructura comercial que compartiste.',
  },
  {
    question: '¿El contacto queda conectado a WhatsApp?',
    answer:
      'Sí. El CTA principal del cotizador y los botones de la home empujan al número 6631656898 con mensaje precargado para seguimiento.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-16">
      <section
        id="inicio"
        className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--brand-ink)]">
              NearTec · technology near you
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.98] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              NearTec: infraestructura, CN7, soporte e implementación para empresas que necesitan operar mejor.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-muted)] sm:text-lg">
              Esta home aterriza a NearTec como proveedor real de infraestructura, operación,
              CN7, CompuNegocio, soporte, implementación y desarrollo. Menos ruido. Más
              intención.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cotizador" className="btn-primary">
                Cotizar ahora
              </a>

              <a
                href="#soluciones"
                className="inline-flex items-center justify-center rounded-full border border-[var(--brand-line)] bg-white px-5 py-3 text-sm font-extrabold text-[var(--brand-ink)] transition hover:border-[var(--brand-green)]"
              >
                Ver soluciones
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {['CompuNegocio', 'CN7', 'Seguimiento por WhatsApp'].map((pill) => (
                <div
                  key={pill}
                  className="rounded-[24px] border border-[var(--brand-line)] bg-white px-4 py-4 text-center text-sm font-extrabold text-[var(--brand-ink)] shadow-[var(--brand-shadow)]"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[var(--brand-line)] bg-white p-6 shadow-[var(--brand-shadow)] md:p-8">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#f6fbe9_100%)] p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--brand-muted)]">
                Propuesta mejorada
              </p>

              <h2 className="mt-3 text-2xl font-black text-[var(--brand-ink)] md:text-3xl">
                Una web que explica, filtra y convierte mejor.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)] md:text-base">
                La lógica aquí no es solo verse bien. Es ordenar la oferta, abrir el contexto de
                compra y mandar leads mejor armados al asesor.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                'Hero más directo y sin relleno.',
                'Sección de soluciones con mejor jerarquía.',
                'Cotizador útil con datos reales del negocio.',
                'CTA a WhatsApp con resumen del requerimiento.',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[var(--brand-line)] bg-[var(--brand-soft)] px-4 py-4"
                >
                  <p className="text-sm font-bold text-[var(--brand-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="soluciones"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
            Soluciones
          </span>

          <h2 className="mt-3 text-3xl font-black text-[var(--brand-ink)] md:text-4xl">
            Lo que NearTec debe comunicar mejor desde el primer scroll.
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">
            El sitio ya no se queda en “tecnología” como concepto genérico. Baja la oferta a
            módulos entendibles, comercializables y fáciles de seguir.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-[var(--brand-line)] bg-white p-6 shadow-[var(--brand-shadow)]"
            >
              <div className="mb-4 inline-flex rounded-full bg-[var(--brand-soft)] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                NearTec
              </div>

              <h3 className="text-xl font-black text-[var(--brand-ink)]">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="proceso"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="grid gap-6 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-[30px] border border-[var(--brand-line)] bg-[var(--brand-soft)] p-6"
            >
              <span className="text-3xl font-black text-[var(--brand-green)]">{item.step}</span>

              <h3 className="mt-4 text-xl font-black text-[var(--brand-ink)]">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cotizador"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <CotizadorNearTec />
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-black text-[var(--brand-ink)] md:text-4xl">
            Preguntas que sí ayudan a cerrar mejor.
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
        className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12"
      >
        <div className="rounded-[34px] border border-[var(--brand-line)] bg-[linear-gradient(135deg,#f6fbe9_0%,#ffffff_100%)] p-8 md:p-12">
          <h2 className="max-w-3xl text-3xl font-black text-[var(--brand-ink)] md:text-4xl">
            Si el lead ya sabe lo que necesita, no lo hagas llenar tres formularios. Mándalo
            directo al cierre.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--brand-muted)]">
            Esta estructura deja a NearTec con una home mucho más fuerte para presentar al CEO:
            mejor narrativa, mejor cotización y mejor paso a seguimiento.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cotizador" className="btn-primary">
              Ir al cotizador
            </a>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20comercial%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--brand-line)] bg-white px-5 py-3 text-sm font-extrabold text-[var(--brand-ink)] transition hover:border-[var(--brand-green)]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}