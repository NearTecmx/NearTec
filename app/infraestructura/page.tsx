import Link from 'next/link'
import { InfrastructurePulseBoard } from '@/components/NearTecPremiumVisuals'

const infraItems = [
  'Hosting administrado',
  'VPS',
  'Correo corporativo',
  'Backups',
  'Continuidad',
  'Seguridad básica',
]

const pains = [
  'Tu sitio es lento',
  'El correo falla',
  'No hay respaldo',
  'Tu servidor ya no alcanza',
  'La empresa depende de una sola máquina',
  'El cliente pierde confianza por la operación',
]

export default function InfraestructuraPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              Infraestructura NearTec
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              La base técnica que tu empresa necesita para no caerse cuando más vende.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              NearTec puede ayudarte con hosting, VPS, correo corporativo, respaldo y continuidad
              para que tu operación no dependa de una sola computadora o de una sola persona.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Hablar
              </Link>
            </div>
          </div>
          <div className="cinematic-reveal delay-2">
            <InfrastructurePulseBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Qué resuelve
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Problemas técnicos que frenan ventas, atención y confianza.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pains.map((item, index) => (
            <article
              key={item}
              className={`rounded-[28px] border border-[#e6e8ea] bg-white p-5 shadow-[0_18px_40px_rgba(15,17,21,0.06)] cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1.08rem] font-black text-[#0f1115]">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-7">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              Servicios típicos
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
              Infraestructura clara, sin palabras de más.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {infraItems.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] px-4 py-4 text-sm font-semibold text-[#24303a]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[#0f1115] p-6 text-white shadow-[0_28px_70px_rgba(15,17,21,0.22)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                Cierre
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-[2.35rem]">
                La infraestructura correcta te da continuidad, confianza y menos urgencias.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
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