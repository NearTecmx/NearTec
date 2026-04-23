import Link from 'next/link'
import { WebConversionBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

const includes = [
  'UX y estructura comercial',
  'SEO base',
  'Velocidad y claridad visual',
  'Formularios y rutas de contacto',
  'WhatsApp integrado',
  'CMS o estructura administrable',
]

const siteTypes = [
  {
    title: 'Corporativo',
    body: 'Para empresas que necesitan explicar mejor su valor y verse más sólidas.',
  },
  {
    title: 'Landing',
    body: 'Para campañas o soluciones específicas con una ruta de conversión más directa.',
  },
  {
    title: 'Ecommerce',
    body: 'Para vender productos con una experiencia clara, visual y funcional.',
  },
  {
    title: 'Catálogo',
    body: 'Para presentar productos o servicios sin saturar ni confundir al usuario.',
  },
]

const levels = [
  {
    title: 'Sitio base',
    body: 'Presencia clara, estructura comercial y mejor percepción de marca.',
  },
  {
    title: 'Sitio con conversión',
    body: 'Más enfoque en formularios, CTA, WhatsApp y seguimiento comercial.',
  },
  {
    title: 'Sitio con operación',
    body: 'Integrado con CRM, automatización, agenda o la capa que el negocio ya necesita.',
  },
]

export default function DisenoWebPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Diseño Web & Ecommerce</span>
            <h1 className="nt-page-title">
              Sitios que venden, explican y convierten.
            </h1>
            <p className="nt-page-copy">
              Diseño web orientado a captación, posicionamiento, claridad comercial y una experiencia
              que sí ayuda a mover la compra.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">
                Cotizar sitio
              </Link>
              <Link href="/casos" className="btn-secondary">
                Ver ejemplos
              </Link>
            </div>
          </div>

          <WebConversionBoard />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Qué sí debe resolver un sitio bien hecho</h2>
            <p className="nt-section-copy">
              Un sitio no solo debe verse bonito. Debe explicar, ordenar y ayudar al usuario a tomar
              la siguiente acción.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {includes.map((item, index) => (
              <article
                key={item}
                className={`nt-tool-card cinematic-reveal delay-${(index % 4) + 1}`}
              >
                <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{item}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Tipos de sitio según objetivo</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteTypes.map((item, index) => (
            <article
              key={item.title}
              className={`nt-feature-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1.08rem] font-black text-[var(--brand-ink)]">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Niveles</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">
              El sitio correcto depende del punto donde hoy está la empresa
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {levels.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Lanzamiento</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Un mejor sitio cambia la percepción, ordena la compra y mejora la entrada comercial.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Cotizar sitio
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