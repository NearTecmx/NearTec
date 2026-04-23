import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const trustItems = [
  '+12 años de trayectoria',
  'Tijuana + operación binacional',
  'Infraestructura, sistemas y conversión',
  'Integración con iTimbre cuando aplica',
]

const solutions = [
  {
    title: 'Diseño web y ecommerce',
    copy: 'Sitios claros, rápidos y hechos para explicar mejor y vender mejor.',
  },
  {
    title: 'CRM y automatización',
    copy: 'Lead filtering, seguimiento, agenda y continuidad comercial sin caos.',
  },
  {
    title: 'CompuNegocio',
    copy: 'Punto de venta, inventario, timbres y operación diaria con más control.',
  },
  {
    title: 'Infraestructura cloud',
    copy: 'Hosting, VPS, correo corporativo, respaldo y continuidad operativa.',
  },
  {
    title: 'CN7 y nube',
    copy: 'Entornos hospedados y respaldo para operar sin depender del equipo local.',
  },
  {
    title: 'Capa fiscal conectada',
    copy: 'Cuando el negocio lo necesita, NearTec se conecta con iTimbre.',
  },
]

const realCostCards = [
  {
    title: 'CompuNegocio desde',
    value: '$450 MXN / mes',
    note: '1 a 3 licencias por estación.',
  },
  {
    title: 'Implementación base',
    value: '$1,500 MXN',
    note: 'Pago único documentado.',
  },
  {
    title: 'CN7 con respaldo',
    value: '$99 USD / mes',
    note: 'Base de datos con respaldo.',
  },
  {
    title: 'Timbres CompuNegocio',
    value: '365 desde $730 MXN',
    note: 'Escala hasta 10,000 por $9,500 MXN.',
  },
]

const commercialGroups = [
  {
    title: 'Retail y multi-sucursal',
    copy: 'Para cajas, inventario, autofacturación, timbres y operación sin cuellos de botella.',
  },
  {
    title: 'Servicios y PyME',
    copy: 'Para empresas que necesitan sitio, CRM, automatización y seguimiento real.',
  },
  {
    title: 'Manufactura y logística',
    copy: 'Para operación más robusta, infraestructura y capas de cumplimiento conectadas.',
  },
  {
    title: 'Despachos e integradores',
    copy: 'Para quienes quieren conectar sistemas, escalar servicios o vender mejor la solución.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              NearTec · technology near you
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Centraliza crecimiento, operación e infraestructura sin volver tu web un caos.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              NearTec integra sitio web, CRM, automatización, cloud, correo corporativo,
              CompuNegocio y continuidad operativa en una sola lógica. Menos piezas sueltas. Más
              claridad para vender y operar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Iniciar diagnóstico inteligente
              </Link>
              <Link href="/plataforma" className="btn-secondary">
                Ver plataforma
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['PyME', 'Retail', 'Servicios', 'Manufactura', 'Binacional'].map((item) => (
                <span key={item} className="rounded-full border border-[#dce8bf] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#24303a] shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <HeroStackBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 rounded-[28px] border border-[#dce8bf] bg-white/90 p-4 shadow-[0_18px_44px_rgba(15,17,21,0.06)] backdrop-blur">
          {trustItems.map((item) => (
            <span key={item} className="rounded-full bg-[#f7faef] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#24303a]">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Qué resuelve NearTec
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            No vendemos piezas. Ordenamos la parte digital de tu negocio.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            El objetivo no es que tengas más herramientas; es que entiendas qué sí te ayuda a
            captar, dar seguimiento, operar y crecer sin saturar el sitio ni confundir al cliente.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[28px] border border-[#e6e8ea] bg-white p-5 shadow-[0_18px_40px_rgba(15,17,21,0.06)] cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1.08rem] font-black text-[#0f1115]">{item.title}</h3>
              <p className="mt-3 text-sm leading-8 text-[#67717a]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#dce8bf] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
                Costos reales del proyecto
              </span>
              <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
                El sitio debe aterrizar ofertas reales, no promesas vacías.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
                Estos rangos sí salen de tus documentos internos y ayudan a que la conversación se
                sienta más seria y más comprable desde el primer scroll.
              </p>
            </div>
            <Link href="/compunegocio" className="btn-secondary">
              Ver CompuNegocio
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {realCostCards.map((item, index) => (
              <article key={item.title} className={`rounded-[26px] border border-[#e6e8ea] bg-white p-5 shadow-sm cinematic-reveal delay-${(index % 4) + 1}`}>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">{item.title}</p>
                <p className="mt-3 text-2xl font-black text-[#0f1115]">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[#67717a]">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="cinematic-reveal">
          <AutomationSignalBoard />
        </div>
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal delay-2 sm:p-7">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            UX + conversión
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
            El sitio tiene que ser entendible para cualquier persona, no solo para alguien técnico.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Por eso la redacción debe explicar beneficios, siguiente paso y contexto comercial sin
            meter tecnicismos innecesarios. Diseño limpio, contraste claro y una sola acción fuerte
            por sección.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {commercialGroups.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] p-4">
                <h3 className="text-base font-black text-[#0f1115]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#67717a]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Cotizador destacado
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.55rem]">
            El cotizador debe filtrar mejor el lead y facilitar que sí se convierta en venta.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            No es un formulario ciego. Es una entrada comercial con precios base, prioridad del
            lead, stack sugerido y salida directa a WhatsApp o correo con contexto útil.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
