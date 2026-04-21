import Link from 'next/link'

export default function ContactoPage() {
  return (
    <div className="page-shell">
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">Contacto / Agenda</span>
          <h1 className="nt-page-title">
            Habla con NearTec por la ruta correcta desde el inicio.
          </h1>
          <p className="nt-page-copy">
            Elige si necesitas propuesta, diagnóstico, demo o soporte. Nosotros acomodamos el resto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Selector de intención</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            'Quiero una propuesta',
            'Quiero un sitio',
            'Quiero automatización',
            'Quiero CompuNegocio',
            'Quiero revisar infraestructura',
            'Necesito soporte',
          ].map((item, index) => (
            <article key={item} className={`nt-route-card cinematic-reveal delay-${(index % 3) + 1}`}>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <a href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec." target="_blank" rel="noreferrer" className="nt-layer-card cinematic-reveal">
            <h3 className="nt-layer-card__title">WhatsApp</h3>
            <p className="nt-layer-card__body">Atención directa para ventas, revisión y seguimiento.</p>
          </a>

          <a href="mailto:info@neartec.com" className="nt-layer-card cinematic-reveal delay-1">
            <h3 className="nt-layer-card__title">Correo</h3>
            <p className="nt-layer-card__body">info@neartec.com</p>
          </a>

          <a href="tel:6631656898" className="nt-layer-card cinematic-reveal delay-2">
            <h3 className="nt-layer-card__title">Teléfono</h3>
            <p className="nt-layer-card__body">663 165 6898</p>
          </a>

          <Link href="/cotizador" className="nt-layer-card cinematic-reveal delay-3">
            <h3 className="nt-layer-card__title">Diagnóstico</h3>
            <p className="nt-layer-card__body">Ruta guiada para revisar stack, prioridades y rango.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-dark-panel cinematic-reveal">
          <span className="nt-badge nt-badge--dark">Promesa</span>
          <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
            Sin vueltas, sin formularios eternos y con una ruta clara desde la primera interacción.
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20una%20propuesta%20guiada%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Abrir WhatsApp
            </a>

            <Link href="/cotizador" className="btn-secondary btn-secondary--light">
              Iniciar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
