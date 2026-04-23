import Link from 'next/link'
import { HeroStackBoard } from '@/components/NearTecPremiumVisuals'

const services = [
  {
    title: 'Sitios web y ecommerce',
    copy: 'Para explicar mejor tu oferta, verte más sólido y llevar al usuario a acción.',
    href: '/diseno-web',
  },
  {
    title: 'CompuNegocio',
    copy: 'Para ventas, inventario, reportes, estaciones y control operativo.',
    href: '/compunegocio',
  },
  {
    title: 'Automatización',
    copy: 'Para captar mejor, filtrar mejor y cerrar con menos fuga de leads.',
    href: '/automatizacion',
  },
  {
    title: 'Infraestructura',
    copy: 'Para hosting, correo, VPS, respaldo y continuidad del negocio.',
    href: '/infraestructura',
  },
  {
    title: 'Emailing',
    copy: 'Para campañas y secuencias que acompañen el proceso comercial.',
    href: '/emailing',
  },
  {
    title: 'Integración con iTimbre',
    copy: 'Para unir operación, facturación, web service y cumplimiento fiscal.',
    href: '/contacto',
  },
]

export default function SolucionesPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">Soluciones NearTec</span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.9] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Todo lo que necesitas para vender, operar y sostener tu empresa.
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#5f6871] sm:text-base">
              Aquí no compras piezas sueltas sin sentido. Compras una capa clara para resolver un problema real.
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
          <span className="nt-badge nt-badge--soft">Servicios</span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Elige la ruta correcta según el problema que quieres resolver.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[#0f1115] p-6 text-white shadow-[0_28px_70px_rgba(15,17,21,0.22)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="nt-badge nt-badge--dark">Cierre</span>
              <h2 className="mt-4 text-3xl font-black md:text-[2.35rem]">
                La solución correcta se vende más fácil cuando se entiende desde el primer scroll.
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