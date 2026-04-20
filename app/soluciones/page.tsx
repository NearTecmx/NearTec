import Link from 'next/link'

const solutions = [
  {
    title: 'Infraestructura empresarial',
    body: 'Base tecnológica para una operación más estable, más segura y lista para crecer.',
  },
  {
    title: 'Cloud y continuidad',
    body: 'Acceso, respaldo y continuidad para equipos que necesitan seguir operando sin fricción.',
  },
  {
    title: 'Sistemas administrativos',
    body: 'Herramientas que ayudan a ordenar procesos, acelerar atención y sostener el ritmo del negocio.',
  },
  {
    title: 'Implementación',
    body: 'Arranque guiado, configuración y acompañamiento para entrar a operación con mayor claridad.',
  },
  {
    title: 'Soporte especializado',
    body: 'Atención directa para resolver, ajustar y mantener una operación más ágil.',
  },
  {
    title: 'Proyectos personalizados',
    body: 'Soluciones adaptadas cuando el negocio necesita una ruta más específica.',
  },
]

export default function SolucionesPage() {
  return (
    <div className="pb-8">
      <section className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Soluciones</span>
          <h1 className="section-title">
            Soluciones tecnológicas para operar mejor, responder más rápido y
            crecer con más orden.
          </h1>
          <p className="section-copy">
            NearTec integra infraestructura, sistemas, soporte e implementación
            dentro de una experiencia más clara y directa.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => (
            <article
              key={item.title}
              className={`premium-card cinematic-reveal delay-${(index % 3) + 1}`}
            >
              <div className="premium-card__icon">+</div>
              <h2 className="premium-card__title">{item.title}</h2>
              <p className="premium-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-shell--soft">
        <div className="grid gap-5 lg:grid-cols-3">
          {['Más claridad', 'Más continuidad', 'Más velocidad'].map((item, index) => (
            <div key={item} className={`metric-card cinematic-reveal delay-${index + 1}`}>
              <h2 className="metric-card__title">{item}</h2>
              <p className="metric-card__body">
                Una solución bien presentada ayuda a decidir con menos dudas y más
                confianza.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Siguiente paso</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Cuéntanos qué necesita tu empresa y te ayudamos a encontrar la mejor ruta.
            </h2>
          </div>
          <div className="contact-banner__actions">
            <Link
              href="/contacto"
              className="btn-secondary btn-secondary--light cinematic-button"
            >
              Cotizar
            </Link>
            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20las%20soluciones%20de%20NearTec."
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
