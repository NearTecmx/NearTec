import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const pillars = [
  {
    title: 'Menos proveedores',
    body: 'NearTec integra crecimiento, operación e infraestructura bajo una sola lógica para que tu empresa no dependa de piezas aisladas.',
  },
  {
    title: 'Más control',
    body: 'La operación mejora cuando sitio, seguimiento, sistemas y continuidad dejan de estar separados.',
  },
  {
    title: 'Más claridad',
    body: 'No se trata de sumar herramientas. Se trata de construir una arquitectura útil para vender y operar mejor.',
  },
]

const principles = [
  'Tecnología con sentido de negocio',
  'Operación antes que ruido visual',
  'Infraestructura con continuidad',
  'Implementación guiada',
  'Ruta clara desde el primer contacto',
  'Soluciones modulares para PyME real',
]

const valueBlocks = [
  {
    title: 'Growth',
    body: 'Captación, presencia digital, automatización y rutas comerciales que ayudan a mover la compra.',
  },
  {
    title: 'Operations',
    body: 'CompuNegocio, control operativo, seguimiento y orden interno para que la empresa funcione mejor.',
  },
  {
    title: 'Infrastructure',
    body: 'Hosting, VPS, correo corporativo, nube y continuidad con criterio empresarial.',
  },
]

export default function NosotrosPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Nosotros / NearTec</span>
            <h1 className="nt-page-title">
              NearTec integra crecimiento, operación e infraestructura para empresas que necesitan avanzar con más control.
            </h1>
            <p className="nt-page-copy">
              No nacimos para vender una pieza suelta. NearTec existe para conectar las capas que
              una empresa moderna necesita para captar mejor, operar mejor y trabajar con menos fricción.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/soluciones" className="btn-primary">
                Ver plataforma
              </Link>

              <Link href="/contacto" className="btn-secondary">
                Hablar con NearTec
              </Link>
            </div>
          </div>

          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.94fr] lg:px-8">
        <div className="cinematic-reveal">
          <div className="nt-section-head">
            <span className="nt-badge nt-badge--soft">Qué significa NearTec</span>
            <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.35rem]">
              Una plataforma seria para empresas que ya no quieren depender de soluciones aisladas.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)]">
              Tecnología, operación, infraestructura y conexión fiscal dentro de una sola experiencia.
              Esa es la diferencia entre tener herramientas sueltas y tener una estructura que sí ayuda
              al negocio.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((item, index) => (
              <article
                key={item.title}
                className={`nt-metric-card cinematic-reveal delay-${(index % 3) + 1}`}
              >
                <h3 className="nt-metric-card__title">{item.title}</h3>
                <p className="nt-metric-card__body">{item.body}</p>
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
            <span className="nt-badge nt-badge--soft">Dirección</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">
              NearTec no se percibe como una agencia. Se percibe como una plataforma de operación.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
              El objetivo es simplificar decisiones, reducir fricción entre áreas y ofrecer una
              estructura más clara para avanzar con sitio, sistemas, cloud y continuidad.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {principles.map((item) => (
              <span key={item} className="nt-soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <span className="nt-badge nt-badge--soft">Lo que articula</span>
          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.35rem]">
            Tres capas que cambian la percepción y el funcionamiento del negocio
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {valueBlocks.map((item, index) => (
            <article
              key={item.title}
              className={`nt-feature-card cinematic-reveal delay-${(index % 3) + 1}`}
            >
              <h3 className="text-[1.1rem] font-black text-[var(--brand-ink)]">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-dark-panel cinematic-reveal">
          <span className="nt-badge nt-badge--dark">Siguiente paso</span>
          <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
            Si tu empresa ya superó la etapa básica, NearTec te ayuda a construir la siguiente capa correcta.
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[rgba(255,255,255,0.72)]">
            Revisión, diagnóstico y una ruta clara para entender qué sí necesitas y qué ya debes dejar atrás.
          </p>

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