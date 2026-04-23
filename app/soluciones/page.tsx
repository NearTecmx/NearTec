import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const coreLayers = [
  {
    title: 'Presencia digital',
    body: 'Sitio, landing, catálogo o ecommerce con una estructura comercial clara.',
  },
  {
    title: 'Captación',
    body: 'Formularios, campañas, SEO, SEM y rutas de entrada más limpias.',
  },
  {
    title: 'Seguimiento',
    body: 'CRM, automatización, agenda y continuidad comercial.',
  },
  {
    title: 'Operación',
    body: 'CompuNegocio, control administrativo y mejor ritmo diario.',
  },
  {
    title: 'Infraestructura',
    body: 'Hosting, VPS, correo, nube y continuidad con criterio empresarial.',
  },
  {
    title: 'Conexión fiscal',
    body: 'Integración con iTimbre cuando la empresa ya lo necesita.',
  },
]

const deepPages = [
  {
    title: 'Plataforma',
    body: 'Una vista profunda de la arquitectura digital completa de NearTec.',
    href: '/plataforma',
  },
  {
    title: 'Infraestructura',
    body: 'Hosting, VPS, correo, respaldos y continuidad operativa.',
    href: '/infraestructura',
  },
  {
    title: 'Diseño Web',
    body: 'Sitios y ecommerce que explican, convierten y acompañan la compra.',
    href: '/diseno-web',
  },
  {
    title: 'Emailing',
    body: 'Campañas, secuencias y continuidad comercial conectada con CRM.',
    href: '/emailing',
  },
]

export default function SolucionesPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Soluciones NearTec</span>
            <h1 className="nt-page-title">
              Una arquitectura digital completa para empresas que ya no quieren improvisar.
            </h1>
            <p className="nt-page-copy">
              NearTec no vende piezas sueltas. Construye una plataforma modular para captar mejor,
              operar mejor y sostener la continuidad del negocio.
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

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Las capas que ordenan una operación moderna</h2>
            <p className="nt-section-copy">
              Cada capa resuelve una fricción distinta, pero juntas construyen una empresa más clara,
              más medible y menos improvisada.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {coreLayers.map((item, index) => (
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
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Explora soluciones más específicas</h2>
          <p className="nt-section-copy">
            Estas páginas viven debajo de Soluciones para mantener un navbar limpio y una navegación
            más premium.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {deepPages.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nt-case-tile nt-case-tile--animated cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <span className="nt-case-tile__tag">NearTec</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="nt-case-tile__arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Ruta correcta</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Si todavía no sabes qué solución te conviene, no elijas por intuición. Entra por diagnóstico.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cotizador" className="btn-primary">
              Iniciar diagnóstico
            </Link>
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Hablar con NearTec
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}