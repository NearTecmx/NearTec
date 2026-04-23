import Link from 'next/link'
import { AutomationSignalBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

const pains = [
  'Leads sin respuesta',
  'Seguimiento lento',
  'Ventas sin prioridad',
  'Campañas sin cierre medible',
  'Formularios que no convierten',
]

const flow = [
  'Captura inteligente',
  'Clasificación automática',
  'Asignación a ventas',
  'Secuencia por interés',
  'Agenda y remarketing',
]

const features = [
  'Formularios inteligentes',
  'Lead scoring',
  'CRM',
  'Campañas automáticas',
  'Respuesta por WhatsApp',
  'Agenda comercial',
  'Panel comercial',
  'Resumen IA del lead',
]

export default function AutomatizacionPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              Automatización, CRM e IA
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Convierte leads en seguimiento real, no en formularios olvidados.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              NearTec debe verse y operar como una máquina de seguimiento: captar, filtrar,
              priorizar, agendar y pasar a ventas con contexto. No como un sitio bonito que luego
              abandona el lead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Ver diagnóstico
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Solicitar demo
              </Link>
            </div>
          </div>
          <div className="cinematic-reveal delay-2">
            <AutomationSignalBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Problemas reales
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Antes de automatizar, hay que dejar claro qué frena tu crecimiento.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pains.map((item, index) => (
            <article
              key={item}
              className={`rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-base font-black text-[#0f1115]">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              Cómo funciona
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
              La máquina correcta no se siente compleja. Se siente clara.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {flow.map((item, index) => (
              <article key={item} className="rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f1115] text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-black text-[#0f1115]">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal sm:p-7">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Lo que sí debe incluir
          </span>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-[#e6e8ea] bg-[#f9fbf4] px-4 py-4 text-sm font-semibold text-[#24303a]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="cinematic-reveal delay-2">
          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[#0f1115] p-6 text-white shadow-[0_28px_70px_rgba(15,17,21,0.22)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                Conversión
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-[2.35rem]">
                Tu próxima mejora comercial no es otro anuncio. Es una mejor máquina de seguimiento.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-white/72">
                Si el sitio ya explica mejor, el sistema detrás también tiene que clasificar mejor.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Activar diagnóstico
              </Link>
              <Link href="/contacto" className="btn-secondary btn-secondary--light">
                Hablar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}