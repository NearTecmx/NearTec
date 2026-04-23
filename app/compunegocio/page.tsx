import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import { HeroStackBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

const modules = [
  ['Ventas (Punto de venta)', 'Cobros rápidos, tickets, formas de pago y cuentas abiertas.'],
  ['Inventario', 'Existencias, valuaciones, compras y alertas de stock.'],
  ['Compras', 'Órdenes, proveedores y recepción de mercancía.'],
  ['Reportes', 'Ventas, inventario, márgenes y análisis para decidir mejor.'],
  ['Usuarios por estación', 'Permisos por usuario y control total por estación.'],
  ['Timbres', 'Emisión de CFDI 4.0 con timbres y cancelaciones integradas.'],
]

const applies = [
  'Tiendas y retail',
  'Negocios con varias estaciones',
  'Empresas que necesitan control',
  'Negocios en crecimiento',
]

const plans = [
  ['1 a 3 licencias', '$450 MXN/mes', 'Incluye todas las funcionalidades y soporte estándar.'],
  ['4 a 8 licencias', '$400 MXN/mes', 'Mejor equilibrio para operación con varias estaciones.'],
  ['9 o más licencias', '$350 MXN/mes', 'Mejor precio por volumen para empresas en expansión.'],
]

const extras = ['Implementación', 'Soporte técnico', 'Desarrollo a la medida', 'Hosting en la nube', 'CN7', 'Respaldos']

export default function CompuNegocioPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">CompuNegocio / Punto de Venta</span>
            <h1 className="nt-page-title">Controla ventas, inventario y operación desde una sola plataforma.</h1>
            <p className="nt-page-copy">
              Administra tu negocio en el día a día con punto de venta rápido, inventario en tiempo real y control operativo completo desde cualquier lugar.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/contacto" className="btn-primary">Solicitar demo</Link>
              <Link href="/cotizador" className="btn-secondary">Calcular plan</Link>
            </div>
          </div>

          <HeroStackBoard />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Qué hace CompuNegocio</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map(([title, body], index) => (
              <article key={title} className={`nt-tool-card cinematic-reveal delay-${(index % 4) + 1}`}>
                <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{title}</h3>
                <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{body}</p>
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
          <h2 className="nt-section-title">¿Para quién aplica?</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {applies.map((item, index) => (
            <article key={item} className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="nt-layer-card__title">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Planes de licencia mensual por número de licencias</h2>
          <p className="nt-section-copy">El plan anual incluye equivalente a 3 meses de descuento.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plans.map(([title, price, body], index) => (
            <article key={title} className={`nt-price-card cinematic-reveal delay-${(index % 3) + 1}`}>
              <h3>{title}</h3>
              <strong>{price}</strong>
              <span>{body}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Extras y servicios en la nube</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {extras.map((item, index) => (
            <article key={item} className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="nt-layer-card__title">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Calcula tu plan mensual</h2>
          <p className="nt-section-copy">Usa el cotizador para obtener una recomendación por fases y un rango realista según estaciones, nube y timbres.</p>
        </div>
        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
