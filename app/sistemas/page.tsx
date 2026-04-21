import Link from 'next/link'

const systems = [
  {
    title: 'CompuNegocio / POS',
    body: 'Control de ventas, inventario y operación en una sola lógica.',
  },
  {
    title: 'CN7 / nube',
    body: 'Acceso remoto, respaldo y continuidad operativa.',
  },
  {
    title: 'CRM + automatización',
    body: 'Seguimiento real para leads y procesos comerciales.',
  },
  {
    title: 'Hosting + correo',
    body: 'Base estable para presencia digital y operación interna.',
  },
  {
    title: 'Emailing corporativo',
    body: 'Comunicación más profesional y mejor conectada.',
  },
  {
    title: 'Integración fiscal',
    body: 'Conexión con iTimbre desde tu operación actual.',
  },
]

export default function SistemasPage() {
  return (
    <div className="pb-8">
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">Software y operación</span>
          <h1 className="nt-page-title">
            Un stack empresarial para vender, operar y mantener control.
          </h1>
          <p className="nt-page-copy">
            Sistemas y servicios listos para una operación más ordenada, rápida y conectada.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {systems.map((item, index) => (
            <article key={item.title} className={`nt-layer-card cinematic-reveal delay-${(index % 3) + 1}`}>
              <h2 className="nt-layer-card__title">{item.title}</h2>
              <p className="nt-layer-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {['Más orden', 'Más trazabilidad', 'Más continuidad'].map((item, index) => (
            <article key={item} className={`nt-metric-card cinematic-reveal delay-${index + 1}`}>
              <h2 className="nt-metric-card__title">{item}</h2>
              <p className="nt-metric-card__body">
                Una plataforma correcta cambia el ritmo completo de la operación.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Demo</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Elige la plataforma correcta y continúa con un asesor.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Solicitar demo
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20del%20software%20de%20NearTec."
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
