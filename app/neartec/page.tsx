import Cotizador from '@/components/Cotizador'
import Link from 'next/link'

const services = [
  {
    title: 'CompuNegocio',
    text: 'Licencias por estación con póliza comercial clara y enfoque en operación diaria.',
  },
  {
    title: 'CN7',
    text: 'Servidor y base de datos con respaldo automático, o hospedaje independiente en nube.',
  },
  {
    title: 'Soporte y desarrollo',
    text: 'Implementación, capacitación remota, cambios mayores y desarrollo a medida.',
  },
  {
    title: 'Infraestructura',
    text: 'Hosting, correo, VPS y acompañamiento técnico para la continuidad del negocio.',
  },
]

const faqs = [
  {
    q: '¿NearTec qué vende exactamente?',
    a: 'Infraestructura, ERP, soporte, desarrollo y la capa operativa que complementa a iTimbre.',
  },
  {
    q: '¿Puedo cotizar una necesidad personalizada?',
    a: 'Sí. El cotizador acepta texto libre y luego te manda a WhatsApp con el resumen.',
  },
  {
    q: '¿Hay soporte remoto?',
    a: 'Sí. El flujo está pensado para implementación y atención remota.',
  },
]

export default function NeartecPage() {
  return (
    <div>
      <section className="section-shell pb-12 pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="pill">NearTec · Infraestructura y operación</span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] text-brand-blue md:text-6xl">
              El motor digital de tu operación empresarial
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              Infraestructura, hosting, CN7, licencias CompuNegocio y soporte
              remoto bajo un solo frente comercial.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#cotizador" className="btn-primary">
                Cotizar NearTec
              </Link>
              <Link href="/itimbre" className="btn-secondary">
                Ir a iTimbre
              </Link>
            </div>
          </div>

          <div className="surface-card surface-card-hover p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Beneficio central
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              Unifica operación, soporte y escalabilidad
            </h2>
            <p className="mt-4 text-brand-muted">
              La página ya no solo informa: ahora guía al usuario hacia el
              servicio correcto, el estimado y el cierre por WhatsApp.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Hosting', 'VPS', 'CN7', 'ERP'].map((item) => (
                <div key={item} className="rounded-[22px] border border-brand-line bg-brand-light p-4 text-sm font-semibold text-brand-blue">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
            Arquitectura de soluciones
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand-blue md:text-4xl">
            Lo que NearTec empuja al cierre
          </h2>
        </div>

        <div className="grid-soft">
          {services.map((service) => (
            <article key={service.title} className="surface-card surface-card-hover p-6">
              <h3 className="text-xl font-black text-brand-blue">{service.title}</h3>
              <p className="mt-3 leading-7 text-brand-muted">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cotizador" className="section-shell pt-0">
        <Cotizador company="neartec" />
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Implementación
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              Flujo recomendado
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                'Selecciona la solución principal.',
                'Define estaciones, horas o alcance.',
                'Recibe el estimado.',
                'Cierra por WhatsApp con un asesor.',
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl bg-brand-light p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-brand-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Preguntas rápidas
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              Respuestas directas
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-[22px] border border-brand-line bg-white p-5">
                  <summary className="cursor-pointer list-none font-semibold text-brand-blue">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
