import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'

export default function CompuNegocioPage() {
  return (
    <div className="page-shell">
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">CompuNegocio / Punto de venta</span>
          <h1 className="nt-page-title">
            Controla ventas, inventario y operación desde una sola plataforma.
          </h1>
          <p className="nt-page-copy">
            CompuNegocio ayuda a administrar tu operación diaria con mejor visibilidad, más orden y
            menos fricción en caja y administración.
          </p>

          <div className="nt-page-hero__actions">
            <Link href="/contacto" className="btn-primary">
              Solicitar demo
            </Link>
            <a href="#planes" className="btn-secondary">
              Calcular plan
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            'Ventas',
            'Inventario',
            'Compras',
            'Reportes',
            'Usuarios por estación',
            'Timbres',
          ].map((item, index) => (
            <article key={item} className={`nt-tool-card cinematic-reveal delay-${(index % 3) + 1}`}>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Para quién aplica</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            'Retail',
            'Negocios con varias estaciones',
            'Empresas que necesitan control básico + crecimiento',
            'Operaciones que quieren orden sin brincar a un ERP gigante',
          ].map((item, index) => (
            <article key={item} className={`nt-info-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Empieza con el número de estaciones que sí necesitas</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ['1 a 3 licencias', '$450 MXN / mes', '$4,050 MXN / año'],
            ['4 a 8 licencias', '$400 MXN / mes', '$3,600 MXN / año'],
            ['9 o más', '$350 MXN / mes', '$3,150 MXN / año'],
          ].map(([title, monthly, yearly], index) => (
            <article key={title} className={`nt-price-card cinematic-reveal delay-${index + 1}`}>
              <h3>{title}</h3>
              <strong>{monthly}</strong>
              <span>{yearly}</span>
            </article>
          ))}
        </div>

        <p className="mt-4 text-sm text-[#66726c]">
          En contrataciones anuales se incluyen 3 meses de descuento.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="nt-layer-card cinematic-reveal">
            <h3 className="nt-layer-card__title">Implementación y extras</h3>
            <p className="nt-layer-card__body">
              Implementación remota inicial: $1,500 MXN pago único. Soporte técnico: $499 MXN por
              hora. Desarrollo: $999 MXN por hora.
            </p>
          </article>

          <article className="nt-layer-card cinematic-reveal delay-2">
            <h3 className="nt-layer-card__title">CN7 y nube</h3>
            <p className="nt-layer-card__body">
              Sin póliza: CN7 con respaldo $99 USD mensuales. CN7 hospedado en la nube $149 USD
              mensuales. Respaldo automático incluido según esquema contratado.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Calculadora con base real</h2>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
