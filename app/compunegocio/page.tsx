import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import { CompuNegocioControlBoard } from '@/components/NearTecPremiumVisuals'

const capabilities = [
  {
    title: 'Punto de venta',
    copy: 'Cobros, tickets, cortes, formas de pago y una caja más rápida para atención diaria.',
  },
  {
    title: 'Inventario y compras',
    copy: 'Entradas, salidas, valuaciones, alertas de stock y recepción de mercancía.',
  },
  {
    title: 'Reportes gerenciales',
    copy: 'Ventas, márgenes e inventario para tomar decisiones con más claridad.',
  },
  {
    title: 'Usuarios por estación',
    copy: 'Control por usuario y estación para ordenar la operación y el acceso.',
  },
  {
    title: 'CN7 y nube',
    copy: 'Base de datos, respaldo y opciones hospedadas para operar con menos dependencia local.',
  },
  {
    title: 'Timbres y CFDI',
    copy: 'Paquetes reales de timbres para sumar cumplimiento cuando tu operación lo necesita.',
  },
]

const plans = [
  {
    title: '1 a 3 licencias',
    monthly: '$450 MXN / mes',
    yearly: '$4,050 MXN / año',
    note: 'Por estación',
  },
  {
    title: '4 a 8 licencias',
    monthly: '$400 MXN / mes',
    yearly: '$3,600 MXN / año',
    note: 'Por estación',
  },
  {
    title: '9 o más licencias',
    monthly: '$350 MXN / mes',
    yearly: '$3,150 MXN / año',
    note: 'Por estación',
  },
]

const extras = [
  'Implementación remota inicial: $1,500 MXN pago único.',
  'Soporte técnico: $499 MXN por hora.',
  'Desarrollo: $999 MXN por hora.',
  'CN7 con respaldo: $99 USD mensuales.',
  'CN7 hospedado en la nube: $149 USD mensuales.',
  'Respaldo automático sin póliza: $99 USD mensuales.',
]

const timbres = [
  '365 · $730',
  '500 · $1,000',
  '1,000 · $1,500',
  '2,000 · $2,800',
  '3,000 · $4,200',
  '4,000 · $5,200',
  '5,000 · $6,250',
  '6,000 · $7,200',
  '8,000 · $8,800',
  '10,000 · $9,500',
]

const fits = [
  'Tiendas y retail',
  'Negocios con varias estaciones',
  'Empresas que necesitan orden administrativo',
  'Operaciones en crecimiento que requieren control',
]

export default function CompuNegocioPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">CompuNegocio · punto de venta y control</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Si tu operación vende todos los días, también debe medirse, ordenarse y responder todos los días.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              CompuNegocio ayuda a controlar caja, inventario, compras, reportes, estaciones, nube y timbres con precios
              base reales y una ruta más clara para compra o demo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 hero-cta-group">
              <Link href="/contacto" className="btn-primary">
                Solicitar demo
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Calcular plan
              </Link>
            </div>
          </div>
          <div className="cinematic-reveal delay-2">
            <CompuNegocioControlBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Lo que sí resuelve</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Cada bloque tiene que dejar claro para qué sirve y por qué sí vale la pena.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <article key={item.title} className={`sales-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="sales-card__icon">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="sales-card__title">{item.title}</h3>
              <p className="sales-card__copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="nt-badge nt-badge--soft">Precios reales documentados</span>
              <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">Planes por estación con descuentos anuales ya aterrizados.</h2>
              <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
                El objetivo aquí no es esconder el precio. Es usarlo para calificar mejor al prospecto y acelerar la conversación.
              </p>
            </div>
            <span className="rounded-full bg-[#0f1115] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
              En anual se incluyen 3 meses de descuento
            </span>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {plans.map((item, index) => (
              <article key={item.title} className={`sales-card sales-card--offer cinematic-reveal delay-${(index % 3) + 1}`}>
                <p className="sales-card__kicker">{item.title}</p>
                <p className="sales-card__value">{item.monthly}</p>
                <p className="mt-2 text-sm font-semibold text-[#24303a]">{item.note}</p>
                <p className="sales-card__copy">{item.yearly}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal sm:p-7">
          <span className="nt-badge nt-badge--soft">Ideal para</span>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {fits.map((item) => (
              <div key={item} className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] px-4 py-4 text-sm font-semibold text-[#24303a] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal delay-2 sm:p-7">
          <span className="nt-badge nt-badge--soft">Extras y nube</span>
          <div className="mt-6 grid gap-4">
            {extras.map((item) => (
              <div key={item} className="rounded-[22px] border border-[#e6e8ea] bg-[#f9fbf4] px-4 py-4 text-sm leading-7 text-[#24303a] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="nt-badge nt-badge--soft">Timbres base</span>
              <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.1rem]">
                Paquetes reales para no dejar la conversación en el aire.
              </h2>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {timbres.map((item) => (
              <span key={item} className="rounded-full border border-[#dce8bf] bg-[#f7faef] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#24303a]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Siguiente paso</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Si ya te hizo sentido, aquí el paso correcto es cotizar con contexto.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            El cotizador debe usar estos precios como base, detectar prioridad y pasar el lead listo a ventas.
          </p>
        </div>
        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}