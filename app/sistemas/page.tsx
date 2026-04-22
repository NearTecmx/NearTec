import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const systems = [
  {
    title: 'CompuNegocio / POS',
    body: 'Control de ventas, inventario, estaciones, tickets y operación administrativa diaria.',
  },
  {
    title: 'CN7 / nube',
    body: 'Acceso remoto, continuidad, respaldo y operación con mejor estabilidad.',
  },
  {
    title: 'CRM + automatización',
    body: 'Seguimiento real para leads, oportunidades y recorridos comerciales.',
  },
  {
    title: 'Hosting + correo',
    body: 'Base estable para presencia digital, correo corporativo y continuidad operativa.',
  },
  {
    title: 'Emailing corporativo',
    body: 'Comunicación más profesional y mejor conectada con campañas y seguimiento.',
  },
  {
    title: 'Integración fiscal',
    body: 'Conexión con iTimbre desde la operación actual cuando el negocio ya lo necesita.',
  },
]

const benefits = [
  {
    title: 'Más orden',
    body: 'La empresa deja de trabajar por ocurrencias y empieza a operar sobre una estructura clara.',
  },
  {
    title: 'Más trazabilidad',
    body: 'Ventas, seguimiento y operación dejan de sentirse desconectados.',
  },
  {
    title: 'Más continuidad',
    body: 'Infraestructura, nube y sistemas se vuelven parte de una estrategia y no un parche.',
  },
]

const stackChips = [
  'Ventas',
  'Inventario',
  'Compras',
  'Usuarios por estación',
  'Timbres',
  'CN7',
  'Cloud',
  'Correo corporativo',
  'Automatización',
  'Conexión fiscal',
]

const routeCards = [
  {
    title: 'Para retail',
    body: 'CompuNegocio y punto de venta con control operativo diario y mejor visibilidad.',
  },
  {
    title: 'Para servicios',
    body: 'Seguimiento comercial, CRM, correo y estructura digital más ordenada.',
  },
  {
    title: 'Para operación distribuida',
    body: 'Infraestructura, nube, acceso remoto y continuidad con criterio empresarial.',
  },
]

export default function SistemasPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Software y operación</span>
            <h1 className="nt-page-title">
              Un stack empresarial para vender, operar y mantener control.
            </h1>
            <p className="nt-page-copy">
              Sistemas y servicios que ayudan a una operación más ordenada, rápida y conectada:
              CompuNegocio, CN7, cloud, CRM, automatización, correo e integración fiscal.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/compunegocio" className="btn-primary">
                Ver CompuNegocio
              </Link>

              <Link href="/contacto" className="btn-secondary">
                Solicitar demo
              </Link>
            </div>
          </div>

          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="cinematic-reveal">
          <div className="nt-section-head">
            <span className="nt-badge nt-badge--soft">Mapa del stack</span>
            <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.35rem]">
              Cada sistema resuelve una capa distinta del negocio
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)]">
              La diferencia real no está en tener muchas herramientas. Está en elegir las correctas y
              hacer que trabajen juntas.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {systems.map((item, index) => (
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
          <NearTecFlowMockup />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Qué incluye la lógica NearTec</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">
              Un stack pensado para negocio real, no para una presentación bonita.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
              NearTec integra sistemas, nube, operación y seguimiento bajo una misma dirección
              para que la empresa avance con más claridad.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stackChips.map((item) => (
              <span key={item} className="nt-soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <span className="nt-badge nt-badge--soft">Qué cambia</span>
          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.35rem]">
            Una plataforma correcta cambia el ritmo completo de la operación
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className={`nt-metric-card cinematic-reveal delay-${(index % 3) + 1}`}
            >
              <h3 className="nt-metric-card__title">{item.title}</h3>
              <p className="nt-metric-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <span className="nt-badge nt-badge--soft">Aplicación</span>
          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.35rem]">
            Sistemas según el tipo de empresa y el punto donde hoy está
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {routeCards.map((item, index) => (
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
            <span className="nt-badge nt-badge--dark">Demo</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Elige la plataforma correcta y continúa con NearTec por la ruta adecuada.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[rgba(255,255,255,0.72)]">
              Si ya sabes qué necesitas, entra por demo. Si aún estás definiendo, entra por diagnóstico.
            </p>
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