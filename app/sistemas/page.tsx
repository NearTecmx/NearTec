import Link from 'next/link'

const systems = [
  {
    name: 'CompuNegocio',
    tag: 'Administración',
    body: 'Control operativo más claro.',
  },
  {
    name: 'CN7',
    tag: 'Cloud',
    body: 'Acceso y continuidad para operar mejor.',
  },
  {
    name: 'Punto de venta',
    tag: 'Retail',
    body: 'Atención más rápida y operación más fluida.',
  },
  {
    name: 'Hosting y cloud',
    tag: 'Infraestructura',
    body: 'Base más estable para plataformas y procesos.',
  },
  {
    name: 'Mailing empresarial',
    tag: 'Comunicación',
    body: 'Imagen más profesional y ordenada.',
  },
  {
    name: 'Implementación personalizada',
    tag: 'Custom',
    body: 'Ruta específica para proyectos más exigentes.',
  },
]

export default function SistemasPage() {
  return (
    <div className="pb-8">
      <section className="section-shell">
        <div className="section-grid section-grid--editorial">
          <div className="cinematic-reveal">
            <span className="eyebrow">Sistemas</span>
            <h1 className="section-title">
              Sistemas y plataformas para una operación más eficiente.
            </h1>
            <p className="section-copy section-copy--short">
              Opciones claras para administrar, respaldar y crecer mejor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 cinematic-reveal delay-2">
            {systems.map((system) => (
              <article key={system.name} className="system-card system-card--dark">
                <div className="system-card__top">
                  <span className="system-card__tag">{system.tag}</span>
                  <span className="system-card__accent" />
                </div>
                <h2 className="system-card__title">{system.name}</h2>
                <p className="system-card__body">{system.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--soft">
        <div className="grid gap-5 lg:grid-cols-3">
          {['Más orden', 'Más continuidad', 'Más velocidad'].map((item, index) => (
            <div key={item} className={`metric-card metric-card--tech cinematic-reveal delay-${index + 1}`}>
              <h2 className="metric-card__title">{item}</h2>
              <p className="metric-card__body">Una plataforma correcta cambia el ritmo de la operación.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Contacto</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Elige el sistema correcto y continúa con un asesor.
            </h2>
          </div>

          <div className="contact-banner__actions">
            <Link
              href="/contacto"
              className="btn-secondary btn-secondary--light cinematic-button"
            >
              Continuar
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20los%20sistemas%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary cinematic-button"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
