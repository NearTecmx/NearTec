import Link from 'next/link'
import {
  HeroStackBoard,
  NearTecFlowMockup,
  LiveMetricBars,
} from '@/components/NearTecPremiumVisuals'

const modules = [
  {
    title: 'Presencia digital',
    body: 'Sitios corporativos, landing pages, ecommerce y estructura visual clara para captar mejor.',
  },
  {
    title: 'Captación',
    body: 'Formularios, campañas, automatización y rutas de entrada más limpias.',
  },
  {
    title: 'Seguimiento',
    body: 'CRM, trazabilidad comercial y contexto real para ventas.',
  },
  {
    title: 'Operación',
    body: 'Procesos más ordenados, control operativo y menos improvisación.',
  },
  {
    title: 'Infraestructura',
    body: 'Hosting, VPS, correo, cloud y continuidad con criterio empresarial.',
  },
  {
    title: 'Facturación',
    body: 'Conexión con capa fiscal cuando el negocio necesita cumplimiento e integración.',
  },
]

const routes = [
  'Quiero vender más',
  'Quiero ordenar mi operación',
  'Quiero modernizar mi infraestructura',
  'Quiero digitalizar administración y ventas',
  'Quiero conectar mi operación con facturación',
]

export default function SolucionesPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Plataforma NearTec</span>
            <h1 className="nt-page-title">
              La arquitectura digital para empresas que ya no quieren improvisar.
            </h1>
            <p className="nt-page-copy">
              Conecta presencia digital, infraestructura, automatización, operación y facturación
              sin depender de proveedores aislados.
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

          <HeroStackBoard />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>

        <div className="cinematic-reveal delay-2">
          <div className="nt-section-head">
            <h2 className="nt-section-title">Una capa correcta para cada fricción del negocio</h2>
            <p className="nt-section-copy">
              Cada módulo resuelve una necesidad concreta, pero juntos forman una operación más
              estable, medible y escalable.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {modules.map((item, index) => (
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
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="cinematic-reveal">
          <div className="nt-section-head">
            <h2 className="nt-section-title">No todas las empresas necesitan lo mismo</h2>
            <p className="nt-section-copy">
              NearTec no se arma igual para todos. La ruta correcta depende del punto donde hoy
              está tu empresa.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {routes.map((item, index) => (
              <article
                key={item}
                className={`nt-route-card cinematic-reveal delay-${(index % 4) + 1}`}
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

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-cta-band cinematic-reveal">
          <div>
            <h2 className="nt-cta-band__title">
              Arma la versión correcta de NearTec para tu empresa
            </h2>
            <p className="nt-cta-band__copy">
              Diagnóstico guiado, stack sugerido y una recomendación más clara del siguiente paso.
            </p>
          </div>

          <div className="nt-cta-band__actions">
            <Link href="/cotizador" className="btn-primary">
              Empezar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}