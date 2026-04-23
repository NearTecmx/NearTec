import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
} from '@/components/NearTecPremiumVisuals'

const quickServices = [
  {
    title: 'Sitios web y tiendas en línea',
    copy: 'Para que tu negocio se entienda, se vea profesional y tenga una ruta clara a ventas.',
    href: '/diseno-web',
  },
  {
    title: 'CompuNegocio',
    copy: 'Para punto de venta, inventario, estaciones, timbres y control administrativo.',
    href: '/compunegocio',
  },
  {
    title: 'Automatización comercial',
    copy: 'Para responder más rápido, filtrar leads y no perder prospectos por falta de seguimiento.',
    href: '/automatizacion',
  },
  {
    title: 'Infraestructura',
    copy: 'Para hosting, VPS, correo corporativo, respaldo y continuidad de tu operación.',
    href: '/infraestructura',
  },
  {
    title: 'Emailing',
    copy: 'Para campañas y secuencias que acompañen la venta y reactiven oportunidades.',
    href: '/emailing',
  },
  {
    title: 'Integración con iTimbre',
    copy: 'Cuando tu operación necesita facturación o conexión fiscal sin romper lo demás.',
    href: '/soluciones',
  },
]

const process = [
  {
    title: '1. Te explicamos la opción correcta',
    copy: 'Primero aclaramos qué servicio sí te conviene y cuál no.',
  },
  {
    title: '2. Cotizas con una base real',
    copy: 'Usamos precios documentados donde sí existen y validamos el resto por alcance.',
  },
  {
    title: '3. Pasas a demo o propuesta',
    copy: 'El siguiente paso queda claro desde el inicio.',
  },
]

const priceHighlights = [
  {
    title: 'CompuNegocio',
    value: 'Desde $450 MXN / mes',
    note: '1 a 3 licencias por estación. 4 a 8: $400. 9 o más: $350.',
  },
  {
    title: 'Implementación',
    value: '$1,500 MXN',
    note: 'Instalación, configuración inicial, CSD, logo y 2 horas de capacitación remota.',
  },
  {
    title: 'CN7 con respaldo',
    value: '$99 USD / mes',
    note: 'CN7 hospedado: $149 USD / mes. Respaldo automático sin póliza: $99 USD / mes.',
  },
  {
    title: 'Timbres',
    value: '365 por $730 MXN',
    note: 'Escala hasta 10,000 timbres por $9,500 MXN.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">NearTec · servicios digitales para empresas</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              NearTec vende sitios web, sistemas, automatización e infraestructura para empresas que quieren vender y operar mejor.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              Si necesitas una página clara, un sistema de punto de venta, mejor seguimiento comercial o una base técnica más sólida,
              aquí puedes entender qué servicio te conviene y cotizarlo de forma simple.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 hero-cta-group">
              <Link href="/soluciones" className="btn-primary">
                Ver servicios
              </Link>
              <Link href="/cotizador" className="btn-secondary">
                Cotizar
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Sitios web', 'CompuNegocio', 'Automatización', 'Infraestructura', 'Emailing'].map((item) => (
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
            <p className="mt-3 text-center text-sm font-medium text-[#67717a]">
              Este panel representa cómo NearTec conecta sitio web, seguimiento comercial, sistemas e infraestructura.
            </p>
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Qué vende NearTec</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Servicios claros, directos y fáciles de entender.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Cada bloque está pensado para que una persona que no domina el tema entienda rápido qué se ofrece y para qué sirve.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickServices.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`sales-card sales-card--service cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <div className="sales-card__icon">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="sales-card__title">{item.title}</h3>
              <p className="sales-card__copy">{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
          <p className="mt-3 text-center text-sm font-medium text-[#67717a]">
            Esta animación muestra el recorrido del lead: entra, se filtra, se atiende y se convierte en propuesta o demo.
          </p>
        </div>
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
          <p className="mt-3 text-center text-sm font-medium text-[#67717a]">
            Esta gráfica representa la visibilidad que necesitas para medir respuesta, seguimiento y oportunidades.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="mx-auto max-w-3xl text-center">
            <span className="nt-badge nt-badge--soft">Cómo funciona</span>
            <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.25rem]">
              Una ruta simple para pasar de interés a venta.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {process.map((item, index) => (
              <article key={item.title} className={`sales-card cinematic-reveal delay-${(index % 3) + 1}`}>
                <div className="sales-card__icon">{index + 1}</div>
                <h3 className="sales-card__title">{item.title}</h3>
                <p className="sales-card__copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="nt-badge nt-badge--soft">Precios visibles</span>
              <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
                Donde sí tenemos precio documentado, lo mostramos.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
                Para CompuNegocio, CN7, implementación y timbres ya existe una base real. Los demás servicios se cotizan según alcance.
              </p>
            </div>
            <Link href="/compunegocio" className="btn-secondary">
              Ver precios
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {priceHighlights.map((item, index) => (
              <article key={item.title} className={`sales-card sales-card--offer cinematic-reveal delay-${(index % 4) + 1}`}>
                <p className="sales-card__kicker">{item.title}</p>
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
          <p className="mt-3 text-center text-sm font-medium text-[#67717a]">
            Este bloque representa cómo se filtran leads, se priorizan y se envían al canal correcto.
          </p>
        </div>
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal delay-2 sm:p-7">
          <span className="nt-badge nt-badge--soft">Blog y contenido</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.25rem]">
            Además del sitio, NearTec necesita contenido que atraiga leads.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Ya quedó una página aparte para blog, noticias y artículos útiles. Sirve para posicionar, responder dudas y generar más contactos calificados.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog" className="btn-primary">
              Ver blog
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Hablar con ventas
            </Link>
          </div>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Cotizador</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.55rem]">
            Cotiza de forma simple y manda a ventas un lead mejor filtrado.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            El objetivo no es llenarte de campos. Es ayudarte a entender la opción correcta y dejar lista la conversación comercial.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}