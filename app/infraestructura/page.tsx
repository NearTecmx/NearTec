import Link from 'next/link'
import { InfrastructurePulseBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

const products = [
  {
    title: 'Hosting',
    body: 'Sitios y plataformas con una base estable para operar sin sentir el hosting como un trámite.',
  },
  {
    title: 'VPS',
    body: 'Más capacidad, más control y mejor margen para proyectos que ya exigen una capa más seria.',
  },
  {
    title: 'Correo corporativo',
    body: 'Comunicación profesional, continuidad y una estructura más limpia para el equipo.',
  },
  {
    title: 'FTP / transferencia segura',
    body: 'Movimiento de archivos y respaldos con una lógica más ordenada para operación y soporte.',
  },
  {
    title: 'Backups',
    body: 'Respaldo y recuperación para no dejar la continuidad del negocio al azar.',
  },
  {
    title: 'Continuidad',
    body: 'Infraestructura pensada para que el negocio no se detenga cuando más importa.',
  },
]

const useCases = [
  'Empresas con sitio y operación activa',
  'Negocios con varias áreas usando correo y archivos',
  'Marcas que necesitan continuidad y respaldo',
  'Operaciones que ya no pueden improvisar con hosting básico',
]

const planCards = [
  {
    title: 'Base',
    body: 'Presencia digital, correo y hosting con estructura clara para operación inicial.',
  },
  {
    title: 'Escalable',
    body: 'Más capacidad, mejor continuidad y una infraestructura lista para crecer.',
  },
  {
    title: 'Operación crítica',
    body: 'VPS, respaldos, continuidad y una capa más robusta para empresas que dependen diario de sus sistemas.',
  },
]

export default function InfraestructuraPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Infraestructura Cloud</span>
            <h1 className="nt-page-title">
              Infraestructura cloud para operar sin interrupciones.
            </h1>
            <p className="nt-page-copy">
              Hosting, VPS, correo corporativo, FTP y respaldos con una lógica pensada para
              continuidad, estabilidad y crecimiento real.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">
                Revisar infraestructura
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Iniciar diagnóstico
              </Link>
            </div>
          </div>

          <InfrastructurePulseBoard />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">La base que sostiene toda la operación</h2>
            <p className="nt-section-copy">
              Una infraestructura correcta no solo aloja. También protege, ordena y da continuidad
              al negocio.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item, index) => (
              <article
                key={item.title}
                className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}
              >
                <h3 className="nt-layer-card__title">{item.title}</h3>
                <p className="nt-layer-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Casos de uso</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">
              Infraestructura pensada para empresas que ya no pueden trabajar con huecos críticos
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
              Cuando correo, sitio, accesos, respaldos y continuidad dependen de piezas separadas,
              la operación se vuelve frágil.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {useCases.map((item) => (
              <span key={item} className="nt-soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Rutas según el nivel de operación</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {planCards.map((item, index) => (
            <article
              key={item.title}
              className={`nt-feature-card cinematic-reveal delay-${(index % 3) + 1}`}
            >
              <h3 className="text-[1.08rem] font-black text-[var(--brand-ink)]">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Continuidad</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Si tu empresa depende de operar todos los días, la infraestructura ya no puede ser secundaria.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Hablar con NearTec
            </Link>
            <Link href="/cotizador" className="btn-primary">
              Ver diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}