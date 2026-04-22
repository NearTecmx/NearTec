import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import { HeroStackBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

const modules = [
  'Ventas',
  'Inventario',
  'Compras',
  'Reportes',
  'Usuarios por estación',
  'Timbres',
]

const plans = [
  {
    title: '1 a 3 licencias',
    monthly: '$450 MXN / mes',
    yearly: '$4,050 MXN / año',
  },
  {
    title: '4 a 8 licencias',
    monthly: '$400 MXN / mes',
    yearly: '$3,600 MXN / año',
  },
  {
    title: '9 o más',
    monthly: '$350 MXN / mes',
    yearly: '$3,150 MXN / año',
  },
]

const timbres = [
  '365 · $730',
  '500 · $1,000',
  '1,000 · $1,500',
  '2,000 · $2,800',
  '3,000 · $4,200',
  '5,000 · $6,250',
  '10,000 · $9,500',
]

export default function CompuNegocioPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">CompuNegocio / Punto de Venta</span>
            <h1 className="nt-page-title">
              Controla ventas, inventario y operación desde una sola plataforma.
            </h1>
            <p className="nt-page-copy">
              CompuNegocio ayuda a administrar la operación diaria con más orden, mejor
              visibilidad y menos fricción en caja y administración.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">
                Solicitar demo
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Calcular plan
              </Link>
            </div>
          </div>

          <HeroStackBoard />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Qué controla el sistema</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item, index) => (
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
          <h2 className="nt-section-title">Empieza con el número de estaciones que sí necesitas</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plans.map((item, index) => (
            <article
              key={item.title}
              className={`nt-price-card cinematic-reveal delay-${(index % 3) + 1}`}
            >
              <h3>{item.title}</h3>
              <strong>{item.monthly}</strong>
              <span>{item.yearly}</span>
            </article>
          ))}
        </div>

        <p className="mt-4 text-sm text-[var(--brand-muted)]">
          En contratación anual se incluyen 3 meses de descuento.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="nt-layer-card cinematic-reveal">
          <h3 className="nt-layer-card__title">Extras operativos</h3>
          <p className="nt-layer-card__body">
            Implementación remota inicial: $1,500 MXN pago único. Soporte técnico: $499 MXN por
            hora. Desarrollo: $999 MXN por hora.
          </p>
        </article>

        <article className="nt-layer-card cinematic-reveal delay-2">
          <h3 className="nt-layer-card__title">CN7 y nube</h3>
          <p className="nt-layer-card__body">
            Sin póliza: CN7 con respaldo $99 USD mensuales. CN7 hospedado en la nube $149 USD
            mensuales. Los precios especiales y beneficios dependen del esquema contratado.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Paquetes de timbres</h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {timbres.map((item) => (
            <span key={item} className="nt-soft-chip">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Calculadora base NearTec / CompuNegocio</h2>
          <p className="nt-section-copy">
            Usa el cotizador para obtener una recomendación por fases y un rango orientativo.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}