import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const trustItems = ['+12 años', 'Tijuana · MX', 'Soporte real', 'Integración con iTimbre']

const services = [
  {
    title: 'Diseño web y ecommerce',
    copy: 'Sitios y landing pages que explican mejor tu oferta y convierten más.',
  },
  {
    title: 'CRM y automatización',
    copy: 'Seguimiento comercial, filtros de leads y agenda sin trabajo manual innecesario.',
  },
  {
    title: 'CompuNegocio',
    copy: 'Punto de venta, inventario, timbres y control diario en una sola operación.',
  },
  {
    title: 'Infraestructura cloud',
    copy: 'Hosting, VPS, correo corporativo, respaldo y continuidad para trabajar sin fricción.',
  },
  {
    title: 'CN7 y nube',
    copy: 'Base de datos, respaldo y operación remota para no depender de una sola máquina.',
  },
  {
    title: 'Conexión fiscal',
    copy: 'Cuando tu negocio lo necesita, NearTec se conecta con iTimbre y baja la fricción operativa.',
  },
]

const realCostCards = [
  {
    title: 'CompuNegocio desde',
    value: '$450 MXN / mes',
    note: '1 a 3 licencias por estación.',
  },
  {
    title: 'Implementación',
    value: '$1,500 MXN',
    note: 'Pago único documentado.',
  },
  {
    title: 'CN7 con respaldo',
    value: '$99 USD / mes',
    note: 'Servidor y base de datos con respaldo.',
  },
  {
    title: 'Timbres',
    value: '365 desde $730 MXN',
    note: 'Escala hasta 10,000 por $9,500 MXN.',
  },
]

const valueRows = [
  {
    title: 'Captas mejor',
    copy: 'Tu sitio deja claro qué vendes y hace más fácil que te contacten.',
  },
  {
    title: 'Das seguimiento',
    copy: 'Tus leads se filtran, se priorizan y llegan por la ruta correcta.',
  },
  {
    title: 'Operas con control',
    copy: 'Inventario, ventas, nube y soporte quedan conectados.',
  },
  {
    title: 'Escalas sin caos',
    copy: 'Tu negocio crece sobre una base más clara, más estable y más vendible.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              NearTec · tecnología para crecer
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Vende mejor. Opera mejor. Todo desde una sola base tecnológica.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              NearTec diseña sitios, automatiza seguimiento, implementa CompuNegocio y monta infraestructura cloud para que tu empresa capte, atienda y cobre mejor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
              </Link>
              <Link href="/soluciones" className="btn-secondary">
                Ver servicios
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Sitio web', 'Automatización', 'CompuNegocio', 'Cloud', 'Soporte'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dce8bf] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#24303a] shadow-sm"
                >
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
            Servicios principales
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Lo que NearTec sí te ayuda a vender, operar y mejorar.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Elige una necesidad clara y llévala a una propuesta real, con precios base y una ruta de atención más rápida.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
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
                Precios reales
              </span>
              <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
                Ya puedes aterrizar la conversación con rangos reales.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
                CompuNegocio, implementación, nube y timbres ya tienen base de precio documentada para vender con más claridad.
              </p>
            </div>
            <Link href="/compunegocio" className="btn-secondary">
              Ver costos
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
            Qué ganas
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
            Un sitio más claro, una operación más ordenada y una venta mejor encaminada.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            La experiencia tiene que ayudar a entender, decidir y avanzar. Menos ruido. Más intención de compra.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {valueRows.map((item) => (
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
            Cotizador
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.55rem]">
            Cotiza rápido y llega a la propuesta correcta.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Filtra tu necesidad, revisa rangos base y manda el contexto completo para acelerar la venta.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
