import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const trustItems = [
  '+12 años de experiencia',
  'Operación en Tijuana',
  'Soluciones modulares',
  'CompuNegocio operado por NearTec',
  'Infraestructura + crecimiento + operación',
]

const solutionChips = [
  'Diseño Web & Ecommerce',
  'Infraestructura Cloud',
  'CRM & Automatización',
  'Emailing',
  'CompuNegocio',
  'Integración Fiscal',
]

const features = [
  {
    title: 'Captación más clara',
    body: 'Sitios, formularios y rutas de conversión alineadas al negocio.',
  },
  {
    title: 'Seguimiento real',
    body: 'CRM, automatización y respuesta comercial sin perder leads.',
  },
  {
    title: 'Operación más estable',
    body: 'Correo, hosting, VPS y continuidad con enfoque empresarial.',
  },
  {
    title: 'Control administrativo',
    body: 'CompuNegocio, punto de venta y orden operativo diario.',
  },
]

const casePreview = [
  {
    title: 'iTimbre',
    body: 'De desarrollo a ecosistema funcional de facturación, integración y soporte técnico.',
  },
  {
    title: 'Presencia digital y captación',
    body: 'Sitios, SEO, SEM y estructura comercial más clara para atraer y convertir mejor.',
  },
  {
    title: 'Automatización comercial',
    body: 'Seguimiento mejor, lead scoring y una ruta más limpia hacia ventas.',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="nt-hero-section">
        <div className="nt-hero-section__grid" />
        <div className="nt-hero-section__glow nt-hero-section__glow--left" />
        <div className="nt-hero-section__glow nt-hero-section__glow--right" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1fr_1.02fr] lg:items-center lg:px-8 lg:pb-16 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">
              Tecnología que sí se conecta con tu operación
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.96] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              Centraliza crecimiento, operación e infraestructura en un solo ecosistema.
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)] sm:text-[16px]">
              Sitio web, CRM, automatización, correo corporativo, emailing, punto de venta,
              infraestructura cloud y conexión fiscal. Menos piezas sueltas. Más control real.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Iniciar diagnóstico inteligente
              </Link>
              <Link href="/soluciones" className="btn-secondary">
                Explorar soluciones
              </Link>
            </div>

            <p className="mt-4 text-sm text-[var(--brand-muted)]">
              Ruta guiada según tu empresa, tu etapa y tu operación actual.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['PyMEs', 'Retail', 'Servicios', 'Manufactura', 'Binacional'].map((item) => (
                <span key={item} className="nt-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <HeroStackBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="nt-trust-strip cinematic-reveal delay-2">
          <div className="nt-trust-strip__label">Confianza</div>
          <div className="nt-trust-strip__items">
            {trustItems.map((item) => (
              <span key={item} className="nt-trust-strip__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">
            No vendemos piezas. Ordenamos tu operación digital.
          </h2>
          <p className="nt-section-copy">
            NearTec integra presencia digital, seguimiento comercial, infraestructura y control
            operativo para que todo trabaje bajo una sola lógica.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <article
              key={item.title}
              className={`nt-problem-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="nt-problem-card__title">{item.title}</h3>
              <p className="nt-problem-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Plataforma NearTec</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">
              Una plataforma adaptable a la etapa de tu empresa
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
              Sitio, cloud, CRM, emailing, operación y capa fiscal según lo que tu empresa
              realmente necesita hoy.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {solutionChips.map((item) => (
              <span key={item} className="nt-soft-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/soluciones" className="btn-secondary">
              Ver la plataforma completa
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">
            De herramientas aisladas a una operación conectada
          </h2>
        </div>

        <div className="mt-8 nt-before-after cinematic-reveal delay-2">
          <article className="nt-before-after__col">
            <span className="nt-before-after__tag">Antes</span>
            <ul className="nt-before-after__list">
              <li>Sitio sin estrategia</li>
              <li>Leads sin seguimiento</li>
              <li>Correos y campañas separados</li>
              <li>Hosting como trámite</li>
              <li>Ventas sin trazabilidad</li>
              <li>Operación dependiente de improvisación</li>
            </ul>
          </article>

          <article className="nt-before-after__col nt-before-after__col--accent">
            <span className="nt-before-after__tag">Después</span>
            <ul className="nt-before-after__list">
              <li>Presencia clara</li>
              <li>CRM y automatización</li>
              <li>Campañas con recorrido medible</li>
              <li>Infraestructura con sentido operativo</li>
              <li>Módulos conectados</li>
              <li>Siguiente paso claro por cliente</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Capacidad real, no solo promesa</h2>
            <p className="nt-section-copy">
              NearTec ya tiene experiencia aplicable en desarrollo, automatización, presencia
              digital y operación.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {casePreview.map((item, index) => (
              <article
                key={item.title}
                className={`nt-feature-card cinematic-reveal delay-${(index % 3) + 1}`}
              >
                <h3 className="text-[1.05rem] font-black text-[var(--brand-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/casos" className="btn-secondary">
              Ver casos de éxito
            </Link>
          </div>
        </div>

        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>

        <div className="cinematic-reveal delay-2">
          <div className="nt-section-head">
            <h2 className="nt-section-title">
              Tu sitio no solo debe verse bien. Debe trabajar.
            </h2>
            <p className="nt-section-copy">
              Formularios inteligentes, clasificación automática, seguimiento conectado a CRM,
              agenda comercial y mejores señales para remarketing.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              'Lead scoring',
              'Respuesta automática',
              'Agenda comercial',
              'Secuencias por interés',
              'Resumen para ventas',
              'Panel de seguimiento',
            ].map((item, index) => (
              <article
                key={item}
                className={`nt-tool-card cinematic-reveal delay-${(index % 4) + 1}`}
              >
                <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{item}</h3>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/automatizacion" className="btn-secondary">
              Ver automatización
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">
            Descubre qué stack necesita tu empresa en menos de 2 minutos
          </h2>
          <p className="nt-section-copy">
            Diagnóstico guiado, recomendación por fases, rango orientativo y siguiente paso.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <div className="nt-cta-band cinematic-reveal">
          <div>
            <h2 className="nt-cta-band__title">
              Si tu operación ya creció, tu stack también tiene que crecer.
            </h2>
            <p className="nt-cta-band__copy">
              NearTec te ayuda a ordenar presencia, seguimiento, operación e infraestructura en una
              sola ruta.
            </p>
          </div>

          <div className="nt-cta-band__actions">
            <Link href="/contacto" className="btn-primary">
              Solicitar propuesta guiada
            </Link>
            <Link href="/recursos" className="btn-secondary btn-secondary--light">
              Ver insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}