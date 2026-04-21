import Link from 'next/link'

const pillars = [
  {
    title: 'Menos proveedores',
    body: 'NearTec integra lo que normalmente una empresa termina comprando por separado.',
  },
  {
    title: 'Más control',
    body: 'La lógica es conectar crecimiento, operación e infraestructura.',
  },
  {
    title: 'Más claridad',
    body: 'No se trata de vender piezas. Se trata de ordenar la empresa.',
  },
]

export default function NosotrosPage() {
  return (
    <div className="pb-8">
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">NearTec</span>
          <h1 className="nt-page-title">
            Una plataforma integradora para empresas que ya no quieren depender de soluciones aisladas.
          </h1>
          <p className="nt-page-copy">
            Tecnología, operación, infraestructura y cumplimiento dentro de una sola experiencia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <article key={item.title} className={`nt-metric-card cinematic-reveal delay-${index + 1}`}>
              <h2 className="nt-metric-card__title">{item.title}</h2>
              <p className="nt-metric-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-dark-panel cinematic-reveal">
          <span className="nt-badge nt-badge--dark">Dirección</span>
          <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
            NearTec no se ve como una agencia. Se ve como una plataforma seria de operación.
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/soluciones" className="btn-secondary btn-secondary--light">
              Ver plataforma
            </Link>
            <Link href="/contacto" className="btn-primary">
              Iniciar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
