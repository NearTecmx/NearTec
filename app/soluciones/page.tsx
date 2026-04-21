import Link from 'next/link'

const layers = [
  {
    title: 'Captación',
    body: 'Sitio, formularios, automatización y seguimiento comercial.',
  },
  {
    title: 'Conversión',
    body: 'CRM, emailing y flujo de respuesta más ordenado.',
  },
  {
    title: 'Operación',
    body: 'POS, control interno y herramientas conectadas.',
  },
  {
    title: 'Infraestructura',
    body: 'Cloud, hosting, correo y continuidad operativa.',
  },
  {
    title: 'Cumplimiento',
    body: 'Conexión con iTimbre para facturación e integración fiscal.',
  },
]

export default function SolucionesPage() {
  return (
    <div className="pb-8">
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">Plataforma NearTec</span>
          <h1 className="nt-page-title">
            Una arquitectura digital completa para empresas que ya no quieren improvisar.
          </h1>
          <p className="nt-page-copy">
            Diseñamos y conectamos las capas que hacen que una empresa moderna funcione.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {layers.map((item, index) => (
            <article key={item.title} className={`nt-layer-card cinematic-reveal delay-${(index % 3) + 1}`}>
              <h2 className="nt-layer-card__title">{item.title}</h2>
              <p className="nt-layer-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Siguiente paso</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Solicita una arquitectura recomendada para tu empresa.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Construir mi stack
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20solicitar%20una%20arquitectura%20recomendada%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
