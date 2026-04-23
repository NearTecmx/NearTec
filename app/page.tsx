import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const trustItems = [
  '+12 años de experiencia',
  'Operación en Tijuana',
  'Diseño + cloud + sistemas',
  'Integración con iTimbre cuando aplica',
]

const serviceCards = [
  {
    title: 'Sitios web y ecommerce',
    copy: 'Páginas claras, rápidas y pensadas para que el cliente entienda y avance a venta.',
  },
  {
    title: 'Infraestructura cloud',
    copy: 'Hosting, VPS, correo, respaldo y continuidad para que la operación no dependa del azar.',
  },
  {
    title: 'CRM y automatización',
    copy: 'Más seguimiento, mejor filtrado de leads y menos trabajo manual para tu equipo.',
  },
  {
    title: 'CompuNegocio',
    copy: 'Punto de venta, inventario, estaciones, timbres y control administrativo con costos reales.',
  },
  {
    title: 'Emailing comercial',
    copy: 'Campañas, secuencias y nurturing para no perder prospectos por falta de continuidad.',
  },
  {
    title: 'Conexión fiscal',
    copy: 'Cuando el negocio lo necesita, se conecta con iTimbre sin romper el resto del flujo.',
  },
]

const offers = [
  {
    kicker: 'CompuNegocio desde',
    value: '$450 MXN / mes',
    note: '1 a 3 licencias por estación. 4 a 8: $400. 9 o más: $350.',
  },
  {
    kicker: 'Implementación base',
    value: '$1,500 MXN',
    note: 'Instalación, configuración inicial, CSD, logo y 2 horas de capacitación remota.',
  },
  {
    kicker: 'CN7 con respaldo',
    value: '$99 USD / mes',
    note: 'CN7 hospedado: $149 USD / mes. Respaldo automático sin póliza: $99 USD / mes.',
  },
  {
    kicker: 'Timbres base',
    value: '365 por $730 MXN',
    note: 'Escala hasta 10,000 timbres por $9,500 MXN.',
  },
]

const salesReasons = [
  'Hablas claro desde el primer scroll',
  'Filtras mejor al prospecto antes de gastar tiempo comercial',
  'Aterrizas productos y costos reales en vez de promesas genéricas',
  'Le das al cliente una siguiente acción obvia',
]

export default function HomePage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">NearTec · growth, operations & infrastructure</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Tu sitio tiene que vender, tu operación tiene que responder y tu infraestructura tiene que aguantar.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              NearTec integra sitio web, automatización, cloud, CompuNegocio, correo corporativo y continuidad operativa
              en una sola lógica. Menos piezas sueltas. Más control real para crecer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 hero-cta-group">
              <Link href="/cotizador" className="btn-primary">
                Iniciar diagnóstico inteligente
              </Link>
              <Link href="/soluciones" className="btn-secondary">
                Ver servicios reales
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['PyME', 'Retail', 'Servicios', 'Multi-sucursal', 'Infraestructura'].map((item) => (
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
        <div className="flex flex-wrap gap-3 rounded-[28px] border border-[#dce8bf] bg-white/92 p-4 shadow-[0_18px_44px_rgba(15,17,21,0.06)] backdrop-blur">
          {trustItems.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#f7faef] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#24303a]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <ClientLogoStrip />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Lo que sí vendes</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Cada bloque tiene que comunicar una oferta, no un texto corrido.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Aquí el objetivo es que cualquier persona entienda rápido qué hace NearTec, por qué le conviene y qué
            sigue después.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((item, index) => (
            <article
              key={item.title}
              className={`sales-card sales-card--service cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <div className="sales-card__icon">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="sales-card__title">{item.title}</h3>
              <p className="sales-card__copy">{item.copy}</p>
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
              <span className="nt-badge nt-badge--soft">Precios reales del proyecto</span>
              <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
                Costos base visibles para que la conversación se acerque a compra.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
                No todos los precios deben ir en portada, pero sí los que ayudan a que el lead entienda orden de inversión,
                detecte encaje y llegue mejor preparado.
              </p>
            </div>
            <Link href="/compunegocio" className="btn-secondary">
              Ver detalle de CompuNegocio
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {offers.map((item, index) => (
              <article key={item.kicker} className={`sales-card sales-card--offer cinematic-reveal delay-${(index % 4) + 1}`}>
                <p className="sales-card__kicker">{item.kicker}</p>
                <p className="sales-card__value">{item.value}</p>
                <p className="sales-card__copy">{item.note}</p>
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
          <span className="nt-badge nt-badge--soft">Por qué convierte mejor</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
            El sitio debe empujar a venta, no solo a verse bonito.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {salesReasons.map((item) => (
              <div key={item} className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] px-4 py-4 text-sm leading-7 text-[#24303a] shadow-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#9ac43b] text-xs font-black text-[#0f1115]">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-8 text-[#67717a]">
            Menos saturación, mejor contraste, botones más pro y secciones más claras hacen que el contenido se vea completo
            tanto en celular como en web.
          </p>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Cotizador de conversión</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.55rem]">
            El cotizador debe sobresalir, explicar y filtrar mejor el lead.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            No es un formulario decorativo. Es una entrada comercial con precio base, prioridad, tipo de solución y siguiente paso.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
