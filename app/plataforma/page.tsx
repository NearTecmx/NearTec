import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const layers = [
  {
    title: 'Presencia digital',
    body: 'Sitio, landing, catálogo o ecommerce con estructura comercial clara.',
  },
  {
    title: 'Captación',
    body: 'Formularios, campañas, SEO, SEM y rutas de entrada más limpias.',
  },
  {
    title: 'Seguimiento',
    body: 'CRM, automatización, agenda y recorrido comercial con más trazabilidad.',
  },
  {
    title: 'Operación',
    body: 'CompuNegocio, control administrativo y una operación más ordenada.',
  },
  {
    title: 'Infraestructura',
    body: 'Hosting, correo, VPS, continuidad y respaldo con criterio empresarial.',
  },
  {
    title: 'Conexión fiscal',
    body: 'Integración con iTimbre cuando el negocio ya necesita una capa fiscal conectada.',
  },
]

const profiles = [
  'Dueño PyME',
  'Retail',
  'Servicios',
  'Operación con varias sedes',
  'Empresa que ya necesita más control',
]

export default function PlataformaPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Plataforma profunda</span>
            <h1 className="nt-page-title">
              Una arquitectura digital completa para empresas que ya no quieren improvisar.
            </h1>
            <p className="nt-page-copy">
              NearTec organiza presencia digital, captación, seguimiento, operación, infraestructura y
              conexión fiscal en una sola plataforma modular.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/cotizador" className="btn-primary">
                Construir mi stack
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Hablar con un asesor
              </Link>
            </div>
          </div>

          <PlatformDeepBoard />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Una plataforma por capas, no un menú de servicios sueltos</h2>
            <p className="nt-section-copy">
              Cada capa resuelve una fricción distinta, pero juntas construyen una empresa con más
              claridad y menos improvisación.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {layers.map((item, index) => (
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
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Rutas por perfil</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">
              No todas las empresas necesitan el mismo stack
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profiles.map((item) => (
              <span key={item} className="nt-soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Arquitectura</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              La ventaja no está en sumar herramientas. Está en conectarlas con criterio.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/soluciones" className="btn-secondary btn-secondary--light">
              Ver soluciones
            </Link>
            <Link href="/cotizador" className="btn-primary">
              Iniciar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}