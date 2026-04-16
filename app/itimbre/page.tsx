import Cotizador from '@/components/Cotizador'
import Link from 'next/link'

const services = [
  {
    title: 'Facturación electrónica 4.0',
    text: 'PAC, emisión, validación, descarga masiva y flujo de cumplimiento fiscal.',
  },
  {
    title: 'Timbres',
    text: 'Paquetes por volumen con precios escalables y cierre guiado al usuario.',
  },
  {
    title: 'Módulos fiscales',
    text: 'Conector, carta porte, autofactura y herramientas asociadas.',
  },
  {
    title: 'Nómina y validación',
    text: 'Buzón de nómina, validación CFDI y soporte para operación diaria.',
  },
]

const faqs = [
  {
    q: '¿iTimbre es PAC?',
    a: 'Sí. El sitio debe decirlo de forma frontal porque esa es una pieza de confianza crítica.',
  },
  {
    q: '¿Cotiza timbres por volumen?',
    a: 'Sí. El cotizador ya calcula volumen y luego el usuario pasa a WhatsApp para el cierre real.',
  },
  {
    q: '¿Sirve para despacho contable?',
    a: 'Sí. De hecho, el flujo puede captar contadores y revendedores.',
  },
]

export default function ITimbrePage() {
  return (
    <div>
      <section className="section-shell pb-12 pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="pill">iTimbre · Facturación y PAC</span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] text-brand-blue md:text-6xl">
              Facturación electrónica inteligente y timbres por volumen
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              Todo el flujo fiscal en una experiencia clara: paquetes, módulos,
              timbres, validación y seguimiento comercial real.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#cotizador" className="btn-primary">
                Cotizar iTimbre
              </Link>
              <Link href="/neartec" className="btn-secondary">
                Ir a NearTec
              </Link>
            </div>
          </div>

          <div className="surface-card surface-card-hover p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Autoridad comercial
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              El sitio debe vender confianza, no solo explicar
            </h2>
            <p className="mt-4 text-brand-muted">
              La estructura nueva pone el PAC, los módulos fiscales y la
              cotización en el centro.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['PAC', 'CFDI 4.0', 'Timbres', 'Validación'].map((item) => (
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
            Ecosistema fiscal 4.0
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand-blue md:text-4xl">
            Módulos que mueven la venta
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
        <Cotizador company="itimbre" />
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Flujo de cierre
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              De la cotización al asesor
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                'El usuario elige paquete o timbres.',
                'Escribe su necesidad real.',
                'Ve el estimado o la cotización asistida.',
                'Entra a WhatsApp para seguimiento.',
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
              Resuelve objeciones
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
