import Link from 'next/link'

const systems = [
  {
    name: 'CompuNegocio',
    tag: 'Administración',
    body: 'Control operativo para empresas que necesitan más orden y mejor seguimiento.',
  },
  {
    name: 'CN7',
    tag: 'Cloud',
    body: 'Acceso y continuidad para operar con más flexibilidad y menos dependencia local.',
  },
  {
    name: 'Punto de venta',
    tag: 'Retail',
    body: 'Atención más rápida, control más claro y una operación diaria más fluida.',
  },
  {
    name: 'Hosting y cloud',
    tag: 'Infraestructura',
    body: 'Base tecnológica para sitios, plataformas y procesos que requieren estabilidad.',
  },
  {
    name: 'Mailing empresarial',
    tag: 'Comunicación',
    body: 'Comunicación profesional para marcas que necesitan más orden y mejor presencia.',
  },
  {
    name: 'Implementación personalizada',
    tag: 'Custom',
    body: 'Cuando el proyecto requiere ajustes finos, acompañamiento y una ruta más específica.',
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
              Sistemas y plataformas pensados para una operación más eficiente.
            </h1>
            <p className="section-copy">
              NearTec integra distintas rutas para administrar, respaldar, vender
              y operar con más claridad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 cinematic-reveal delay-2">
            {systems.map((system) => (
              <article key={system.name} className="system-card">
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
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Ventajas</span>
          <h2 className="section-title">Más simple de entender. Más fácil de activar.</h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            'Mejor organización comercial',
            'Más continuidad operativa',
            'Atención más cercana',
          ].map((item, index) => (
            <div key={item} className={`metric-card cinematic-reveal delay-${index + 1}`}>
              <h2 className="metric-card__title">{item}</h2>
              <p className="metric-card__body">
                Una plataforma bien elegida hace que el negocio avance con más
                ritmo y menos fricción.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="contact-banner cinematic-reveal">
          <div>
            <span className="eyebrow eyebrow--inverse">Contacto</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
              Elige el sistema que mejor se adapta a tu operación y continúa con
              un asesor.
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
