import Link from 'next/link'

const cases = [
  {
    title: 'Retail con caja e inventario',
    copy: 'CompuNegocio + timbres + estructura más clara para operación diaria.',
  },
  {
    title: 'Empresa de servicios',
    copy: 'Sitio web + formularios + CRM para dar seguimiento real a cada prospecto.',
  },
  {
    title: 'Negocio con infraestructura débil',
    copy: 'Hosting, VPS, correo corporativo y respaldo para dar continuidad.',
  },
  {
    title: 'Operación que quiere vender mejor',
    copy: 'Landing, automatización y contenido para captar y convertir más rápido.',
  },
]

export default function CasosPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-3xl text-center cinematic-reveal">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Casos de uso
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
            Cómo se aplica NearTec en distintos tipos de negocio.
          </h1>
          <p className="mt-6 text-[15px] leading-8 text-[#67717a] sm:text-base">
            No son historias decorativas. Son rutas concretas de entrada para entender qué servicio
            conviene según el problema.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[28px] border border-[#e6e8ea] bg-white p-5 shadow-[0_18px_40px_rgba(15,17,21,0.06)] cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h2 className="text-[1.08rem] font-black text-[#0f1115]">{item.title}</h2>
              <p className="mt-3 text-sm leading-8 text-[#67717a]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-[#0f1115] p-6 text-white shadow-[0_28px_70px_rgba(15,17,21,0.22)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                Siguiente paso
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-[2.35rem]">
                Cada caso se convierte en una propuesta o una cotización más clara.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
              </Link>
              <Link href="/blog" className="btn-secondary btn-secondary--light">
                Ver blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}