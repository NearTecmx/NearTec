import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const featuredCase = {
  title: 'iTimbre',
  problem:
    'Producto con profundidad real, pero con arquitectura comercial fragmentada, rutas dispersas y una narrativa que no capitalizaba toda su capacidad técnica.',
  architecture:
    'NearTec actuó como capa integradora de desarrollo, presencia digital, estructura de producto y conexión operativa alrededor del motor fiscal.',
  time: 'Implementación por fases',
  result:
    'Se consolidó como una solución funcional de facturación, integración y soporte técnico con mayor claridad comercial.',
  integrations: ['Web Service', 'Panel productivo', 'Panel de pruebas', 'Soporte'],
}

const cases = [
  {
    title: 'Presencia digital y captación',
    industry: 'Servicios',
    result: 'Sitios, SEO, SEM y estructura comercial más clara para atraer y convertir mejor.',
  },
  {
    title: 'Automatización comercial',
    industry: 'PyME',
    result: 'Menos seguimiento manual, mejor filtrado de leads y una ruta comercial más ordenada.',
  },
  {
    title: 'Operación con CompuNegocio',
    industry: 'Retail',
    result: 'Control operativo, inventario y administración con mejor visibilidad diaria.',
  },
  {
    title: 'Infraestructura y continuidad',
    industry: 'Operación',
    result: 'Hosting, correo, VPS y estructura cloud con una lógica más estable y empresarial.',
  },
]

export default function CasosPage() {
  return (
    <div className="page-shell">
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Casos de Éxito NearTec</span>
            <h1 className="nt-page-title">
              Casos reales donde NearTec resolvió crecimiento, operación e infraestructura.
            </h1>
            <p className="nt-page-copy">
              Aquí no mostramos solo logos. Mostramos problemas, arquitectura aplicada y el resultado
              de negocio.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">
                Revisar mi caso
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Iniciar diagnóstico
              </Link>
            </div>
          </div>

          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Caso destacado</h2>
          <p className="nt-section-copy">
            NearTec ya tiene material valioso; lo correcto es presentarlo como resolución de problema
            y no como simple galería.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="nt-featured-case cinematic-reveal">
            <div className="nt-featured-case__top">
              <span className="nt-badge nt-badge--soft">Destacado</span>
              <h3>{featuredCase.title}</h3>
            </div>

            <div className="nt-featured-case__body">
              <div>
                <small>Problema</small>
                <p>{featuredCase.problem}</p>
              </div>

              <div>
                <small>Arquitectura aplicada</small>
                <p>{featuredCase.architecture}</p>
              </div>

              <div>
                <small>Tiempo de implementación</small>
                <p>{featuredCase.time}</p>
              </div>

              <div>
                <small>Resultado</small>
                <p>{featuredCase.result}</p>
              </div>
            </div>

            <div className="nt-featured-case__chips">
              {featuredCase.integrations.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <div className="cinematic-reveal delay-2">
            <NearTecFlowMockup />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Más casos por tipo de necesidad</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`nt-case-tile nt-case-tile--animated cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <span className="nt-case-tile__tag">{item.industry}</span>
              <h3>{item.title}</h3>
              <p>{item.result}</p>
              <span className="nt-case-tile__arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-kpi-band cinematic-reveal">
          <div>
            <small>Enfoque</small>
            <strong>Crecimiento</strong>
          </div>
          <div>
            <small>Enfoque</small>
            <strong>Operación</strong>
          </div>
          <div>
            <small>Enfoque</small>
            <strong>Infraestructura</strong>
          </div>
          <div>
            <small>Enfoque</small>
            <strong>Integración</strong>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-cta-band cinematic-reveal">
          <div>
            <h2 className="nt-cta-band__title">
              Tu caso no necesita una propuesta genérica. Necesita una arquitectura correcta.
            </h2>
            <p className="nt-cta-band__copy">
              Hablamos de tu operación actual y te proponemos la ruta más útil para avanzar.
            </p>
          </div>

          <div className="nt-cta-band__actions">
            <Link href="/contacto" className="btn-primary">
              Hablar con NearTec
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
