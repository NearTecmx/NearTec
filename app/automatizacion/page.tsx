import type { Metadata } from 'next'
import Link from 'next/link'
import { AutomationRouteBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'
import { CONTACT } from '@/lib/neartec-pricing'

export const metadata: Metadata = {
  title: 'Automatización, CRM y seguimiento comercial | NearTec',
  description:
    'NearTec automatiza captación, filtrado de leads, seguimiento comercial, CRM, agenda y campañas para convertir tráfico en oportunidades reales.',
}

const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero automatizar mis leads y mejorar mi seguimiento comercial.')}`

const automationBlocks = [
  {
    label: 'Captación',
    title: 'Más prospectos útiles',
    text: 'Formularios, landing pages y rutas de contacto pensadas para que el usuario avance sin fricción.',
    icon: '↗',
  },
  {
    label: 'Filtro',
    title: 'Leads mejor calificados',
    text: 'Separamos interés real, urgencia, tipo de servicio y siguiente paso antes de pasar a ventas.',
    icon: '◎',
  },
  {
    label: 'CRM',
    title: 'Seguimiento ordenado',
    text: 'Cada contacto entra con contexto, prioridad y trazabilidad para que no se pierda en WhatsApp o correo.',
    icon: '▦',
  },
  {
    label: 'Agenda',
    title: 'Menos ida y vuelta',
    text: 'El prospecto puede avanzar a llamada, demo o cotización según su nivel de intención.',
    icon: '◷',
  },
  {
    label: 'Campañas',
    title: 'Más oportunidades activas',
    text: 'Secuencias, remarketing y mensajes de seguimiento para recuperar prospectos que aún no compran.',
    icon: '✦',
  },
  {
    label: 'Ventas',
    title: 'Mejor cierre',
    text: 'El equipo recibe un caso más claro: qué necesita, cuánto urge y qué solución conviene ofrecer.',
    icon: '✓',
  },
]

const buyerRoutes = [
  {
    title: 'Empresas que reciben leads pero no los atienden rápido',
    text: 'Ideal cuando los contactos llegan por redes, web o WhatsApp, pero no hay seguimiento ordenado.',
  },
  {
    title: 'Negocios que cotizan manualmente todo',
    text: 'Ayuda a filtrar necesidades, estimar rangos base y mandar contexto antes de hablar con ventas.',
  },
  {
    title: 'Equipos comerciales que necesitan más control',
    text: 'Permite saber quién pidió información, qué necesita y en qué etapa está cada oportunidad.',
  },
  {
    title: 'PyMEs que quieren crecer sin contratar más caos',
    text: 'Automatiza tareas repetitivas y deja al equipo enfocado en atender prospectos con intención real.',
  },
]

const deliverables = [
  'Formulario inteligente por tipo de servicio',
  'Clasificación de leads por intención',
  'Ruta de seguimiento comercial',
  'Conexión a WhatsApp, correo o CRM',
  'Secuencias básicas de nurturing',
  'Eventos de conversión para medición',
  'Resumen del lead para ventas',
  'Recomendación de siguiente paso',
]

const stages = [
  {
    step: '01',
    title: 'Detectamos el flujo actual',
    text: 'Revisamos cómo llegan hoy tus prospectos, qué canales usas y dónde se pierde la venta.',
  },
  {
    step: '02',
    title: 'Diseñamos la ruta comercial',
    text: 'Definimos qué debe pasar cuando alguien pide información: filtrar, priorizar, cotizar o agendar.',
  },
  {
    step: '03',
    title: 'Automatizamos el seguimiento',
    text: 'Conectamos formularios, WhatsApp, correo, CRM o agenda para reducir trabajo manual.',
  },
  {
    step: '04',
    title: 'Medimos y mejoramos',
    text: 'Revisamos señales de conversión para optimizar mensajes, campañas y cierre comercial.',
  },
]

export default function AutomatizacionPage() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#b5d760]/40 bg-white/75 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#66841f] shadow-[0_12px_34px_rgba(80,110,30,0.08)] backdrop-blur">
              Automatización comercial
            </div>

            <h1 className="max-w-4xl text-[clamp(3.6rem,8vw,7.8rem)] font-black leading-[0.88] tracking-[-0.075em] text-[#101410]">
              Convierte tráfico en ventas reales.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-[1.7] text-[#5d675f] sm:text-2xl">
              Filtra leads, prioriza intención, agenda mejor y entrega a ventas un contacto listo para avanzar.
            </p>

            <div className="mt-9 grid gap-4 sm:flex">
              <Link
                href="/cotizador"
                className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-[#9bc832] px-8 text-base font-black text-[#101410] shadow-[inset_0_-3px_0_rgba(0,0,0,0.12),0_18px_34px_rgba(113,149,28,0.24)] transition hover:-translate-y-0.5"
              >
                Cotizar
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-[#a6bd7c]/35 bg-white/80 px-8 text-base font-black text-[#111611] shadow-[0_14px_34px_rgba(40,50,20,0.08)] backdrop-blur transition hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['CRM', 'Lead filtering', 'Agenda', 'WhatsApp', 'Campañas'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#b4c98d]/30 bg-white/70 px-4 py-2 text-sm font-extrabold text-[#263021] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <AutomationRouteBoard />
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c4d7a4]/35 bg-white/75 p-5 shadow-[0_24px_60px_rgba(55,70,30,0.08)] backdrop-blur md:p-7">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ['Menos leads perdidos', 'Cada contacto entra con ruta clara.'],
              ['Respuesta más rápida', 'Ventas recibe contexto desde el inicio.'],
              ['Mejor prioridad', 'Detectas quién está listo para avanzar.'],
              ['Más control', 'El seguimiento deja de vivir disperso.'],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-[1.45rem] border border-[#d8e7be]/55 bg-[#fbfcf7] p-5"
              >
                <h2 className="text-lg font-black tracking-[-0.03em] text-[#101410]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#66705f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-[#ecf7d8] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#66841f]">
                Qué automatizamos
              </span>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.6rem,5vw,5.3rem)] font-black leading-[0.94] tracking-[-0.065em] text-[#101410]">
                Del primer clic al seguimiento correcto.
              </h2>
            </div>

            <p className="max-w-2xl text-xl leading-[1.7] text-[#687267]">
              NearTec ordena la entrada de prospectos para que tu equipo no adivine qué necesita cada contacto.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {automationBlocks.map((item) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-[#d8e7be]/65 bg-white/82 p-6 shadow-[0_18px_45px_rgba(45,60,20,0.07)] backdrop-blur transition hover:-translate-y-1 hover:border-[#9bc832]/65"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#eff8dc] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#66841f]">
                    {item.label}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#101410] text-xl font-black text-[#a9d841] shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-[-0.045em] text-[#101410]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#66705f]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS + PROCESS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <LiveMetricBars />

          <div className="rounded-[2rem] border border-[#c8dca8]/45 bg-white/82 p-6 shadow-[0_24px_60px_rgba(45,60,20,0.08)] backdrop-blur md:p-8">
            <span className="inline-flex rounded-full bg-[#ecf7d8] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#66841f]">
              Implementación
            </span>

            <h2 className="mt-6 text-[clamp(2.3rem,4.4vw,4.5rem)] font-black leading-[0.96] tracking-[-0.06em] text-[#101410]">
              Un flujo comercial claro, no otro formulario suelto.
            </h2>

            <div className="mt-8 grid gap-4">
              {stages.map((stage) => (
                <article
                  key={stage.step}
                  className="grid gap-4 rounded-[1.6rem] border border-[#d8e7be]/65 bg-[#fbfcf7] p-5 sm:grid-cols-[76px_1fr]"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#101410] text-sm font-black text-[#a9d841]">
                    {stage.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.04em] text-[#101410]">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[#66705f]">{stage.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUYERS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.3rem] border border-[#c8dca8]/45 bg-[#101410] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="inline-flex rounded-full bg-white/8 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#a9d841]">
                Para quién
              </span>
              <h2 className="mt-6 text-[clamp(2.4rem,5vw,5rem)] font-black leading-[0.94] tracking-[-0.06em]">
                Si llegan leads, deben llegar con contexto.
              </h2>
            </div>

            <div className="grid gap-4">
              {buyerRoutes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5"
                >
                  <h3 className="text-xl font-black tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-white/72">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full bg-[#ecf7d8] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#66841f]">
                Entregables
              </span>
              <h2 className="mt-6 text-[clamp(2.6rem,5vw,5rem)] font-black leading-[0.94] tracking-[-0.06em] text-[#101410]">
                Lo que queda funcionando.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#66705f]">
                La automatización se configura según tu proceso real: captación, filtros, equipo, canales y tipo de venta.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#d8e7be]/65 bg-white/82 p-4 shadow-[0_14px_32px_rgba(45,60,20,0.06)]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#9bc832] text-sm font-black text-[#101410]">
                    ✓
                  </span>
                  <span className="text-base font-bold leading-6 text-[#263021]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-[#c8dca8]/45 bg-white/85 p-7 shadow-[0_28px_80px_rgba(45,60,20,0.1)] backdrop-blur md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#ecf7d8] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#66841f]">
                Siguiente paso
              </span>
              <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5.5vw,5.6rem)] font-black leading-[0.92] tracking-[-0.07em] text-[#101410]">
                Automatiza la entrada de leads y vende con más orden.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#66705f]">
                Cuéntanos qué vendes, cómo llegan tus contactos y qué tan rápido necesita responder tu equipo.
              </p>
            </div>

            <div className="grid gap-3 sm:min-w-[280px]">
              <Link
                href="/cotizador"
                className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-[#9bc832] px-8 text-base font-black text-[#101410] shadow-[inset_0_-3px_0_rgba(0,0,0,0.12),0_18px_34px_rgba(113,149,28,0.24)]"
              >
                Cotizar
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-[#a6bd7c]/35 bg-white px-8 text-base font-black text-[#101410]"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}