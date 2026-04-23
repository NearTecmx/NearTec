import Link from 'next/link'

const values = [
  'Claridad comercial',
  'Diseño limpio',
  'Servicios reales',
  'Conversión',
  'Seguimiento',
  'Continuidad',
]

export default function NosotrosPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-3xl text-center cinematic-reveal">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Nosotros
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
            NearTec existe para que tu empresa venda y opere con más orden.
          </h1>
          <p className="mt-6 text-[15px] leading-8 text-[#67717a] sm:text-base">
            El enfoque es simple: menos confusión, más claridad, más seguimiento y más control.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {values.map((item, index) => (
            <article
              key={item}
              className={`rounded-[28px] border border-[#e6e8ea] bg-white p-5 shadow-[0_18px_40px_rgba(15,17,21,0.06)] cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h2 className="text-[1.08rem] font-black text-[#0f1115]">{item}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-[#0f1115] p-6 text-white shadow-[0_28px_70px_rgba(15,17,21,0.22)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                Filosofía
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-[2.35rem]">
                Un sitio bonito no basta. Tiene que dejar claro qué vende la empresa.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/soluciones" className="btn-primary">
                Ver servicios
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