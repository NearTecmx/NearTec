import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const cases = [
  {
    title: 'iTimbre',
    tag: 'Fiscal-Tech',
    body: 'De desarrollo a ecosistema funcional de facturación, integración y soporte técnico.',
  },
  {
    title: 'Presencia digital y captación',
    tag: 'Servicios',
    body: 'Sitios, SEO, SEM y estructura comercial más clara para atraer y convertir mejor.',
  },
  {
    title: 'Automatización comercial',
    tag: 'PyME',
    body: 'Menos seguimiento manual, mejor filtrado y una ruta comercial más ordenada.',
  },
  {
    title: 'Operación con CompuNegocio',
    tag: 'Retail',
    body: 'Control operativo, inventario y administración con mejor visibilidad diaria.',
  },
]

export default function CasosPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Casos de Éxito</span>
            <h1 className="nt-page-title">
              Casos reales donde NearTec resolvió crecimiento, operación e infraestructura.
            </h1>
            <p className="nt-page-copy">
              Aquí no mostramos solo logos. Mostramos problemas, arquitectura aplicada y un
              resultado más claro para el negocio.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">
                Revisar mi caso
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Empezar diagnóstico
              </Link>
            </div>
          </div>

          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <article className="nt-featured-case cinematic-reveal">
          <div className="nt-featured-case__top">
            <span className="nt-badge nt-badge--soft">Caso destacado</span>
            <h3>iTimbre</h3>
          </div>

          <div className="nt-featured-case__body">
            <div>
              <small>Problema</small>
              <p>
                Mucha profundidad técnica y comercial, pero dispersa en varias rutas y sin una
                historia simple para convertir mejor.
              </p>
            </div>

            <div>
              <small>Arquitectura aplicada</small>
              <p>
                NearTec como capa integradora de desarrollo, presencia digital, estructura de
                producto y conexión operativa.
              </p>
            </div>

            <div>
              <small>Resultado</small>
              <p>
                Un ecosistema más claro de facturación, integración, paneles, soporte y autoridad
                fiscal.
              </p>
            </div>
          </div>

          <div className="nt-featured-case__chips">
            {['Web Service', 'Panel productivo', 'Panel de pruebas', 'Soporte'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <div className="cinematic-reveal delay-2">
          <NearTecFlowMockup />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Más casos por necesidad</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`nt-case-tile nt-case-tile--animated cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <span className="nt-case-tile__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="nt-case-tile__arrow">→</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}