import Link from 'next/link'
import { HeroStackBoard } from '@/components/NearTecPremiumVisuals'

const services = [
  {
    title: 'Sitios web y tiendas en línea',
    copy: 'Página clara, rápida y con estructura para vender mejor.',
  },
  {
    title: 'CompuNegocio',
    copy: 'Punto de venta, inventario, estaciones, timbres y control.',
  },
  {
    title: 'Automatización',
    copy: 'Seguimiento de leads, CRM, respuestas y agenda.',
  },
  {
    title: 'Infraestructura',
    copy: 'Hosting, VPS, correo, respaldo y continuidad.',
  },
  {
    title: 'Emailing',
    copy: 'Campañas y secuencias para nutrir y reactivar prospectos.',
  },
  {
    title: 'Integración fiscal',
    copy: 'Conexión con iTimbre cuando el proceso lo necesita.',
  },
]

export default function SolucionesPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              Servicios NearTec
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Servicios claros para vender mejor y operar con más orden.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              Aquí puedes ver de forma simple qué vende NearTec, para qué sirve cada servicio y por dónde te conviene entrar.
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
            <HeroStackBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Qué incluye NearTec
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Todo lo que entra en una misma lógica comercial.
          </h2>
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[#0f1115] p-6 text-white shadow-[0_28px_70px_rgba(15,17,21,0.22)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                Siguiente paso
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-[2.35rem]">
                El servicio correcto depende de tu problema, no de la moda del momento.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-white/72">
                Si tu empresa necesita vender mejor, ordenar operación o mejorar infraestructura, aquí ya tienes una ruta clara.
              </p>
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