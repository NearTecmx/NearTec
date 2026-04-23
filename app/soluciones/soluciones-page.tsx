import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const solutions = [
  {
    title: 'Diseño web y ecommerce',
    body: 'Sitios, landings y ecommerce para presentar mejor la oferta, captar leads y vender más.',
    href: '/diseno-web',
  },
  {
    title: 'CRM y automatización',
    body: 'Lead filtering, agenda, secuencias y seguimiento para que ventas responda con más orden.',
    href: '/automatizacion',
  },
  {
    title: 'CompuNegocio y punto de venta',
    body: 'Ventas, inventario, timbres, control diario y operación multisucursal desde una sola base.',
    href: '/compunegocio',
  },
  {
    title: 'Hosting y VPS',
    body: 'Infraestructura, servidores, continuidad y rendimiento para operar con menos fricción.',
    href: '/infraestructura',
  },
  {
    title: 'Correo corporativo y emailing',
    body: 'Correo profesional, campañas segmentadas, newsletters y comunicación comercial continua.',
    href: '/emailing',
  },
  {
    title: 'Conexión con iTimbre',
    body: 'Cuando el proyecto necesita capa fiscal, NearTec puede conectar la operación con iTimbre.',
    href: '/plataforma',
  },
]

const bundles = [
  {
    title: 'Bundle para vender mejor',
    body: 'Sitio web + formularios + CRM + seguimiento comercial.',
  },
  {
    title: 'Bundle para retail y multisucursal',
    body: 'CompuNegocio + timbres + control operativo + continuidad.',
  },
  {
    title: 'Bundle para crecer con infraestructura',
    body: 'Hosting + VPS + correo + CN7 + respaldo.',
  },
  {
    title: 'Bundle de comunicación comercial',
    body: 'Emailing + audiencias + nurtures + campañas de continuidad.',
  },
]

const pains = [
  'Tengo sitio, correo, hosting o POS por separado y nadie me resuelve el sistema completo.',
  'Mis leads entran, pero no existe un flujo claro para dar seguimiento.',
  'Necesito vender más sin volver más caótica la operación.',
  'No sé qué me conviene contratar primero para crecer con orden.',
]

export default function SolucionesPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Soluciones NearTec</span>
            <h1 className="nt-page-title">Servicios conectados para vender mejor y operar con más orden.</h1>
            <p className="nt-page-copy">
              NearTec integra diseño web, automatización, CompuNegocio, infraestructura, correo y nube en una propuesta más clara para empresas que ya no quieren comprar todo por separado.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Hablar con un asesor
              </Link>
            </div>
          </div>

          <PlatformDeepBoard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Qué puedes contratar</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.35rem]">
            Lo que NearTec sí vende y cómo se conecta.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => (
            <Link key={item.title} href={item.href} className={`service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="service-card__icon" aria-hidden="true">
                →
              </div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__copy">{item.body}</p>
              <span className="service-card__link">Ver detalle</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Paquetes más claros por dolor y por necesidad</h2>
            <p className="nt-section-copy">
              NearTec funciona mejor cuando la propuesta entra por la necesidad correcta y no por una lista larga de servicios sueltos.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {bundles.map((item, index) => (
              <article key={item.title} className={`story-card cinematic-reveal delay-${(index % 4) + 1}`}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {pains.map((item) => (
              <div key={item} className="pain-chip">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="cinematic-reveal delay-2">
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Ruta correcta</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Si todavía no sabes qué combinación te conviene, entra por diagnóstico.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cotizador" className="btn-primary">
              Iniciar cotización
            </Link>
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Hablar con NearTec
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
