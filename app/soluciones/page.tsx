import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const bundles = [
  {
    title: 'Presencia para vender',
    body: 'Sitio web, landing, ecommerce, correo y estructura comercial más clara.',
  },
  {
    title: 'Automatización comercial',
    body: 'CRM, filtros de leads, seguimiento, agenda, WhatsApp y emailing conectado.',
  },
  {
    title: 'Operación retail',
    body: 'CompuNegocio, estaciones, inventario, timbres y control diario para tienda o multisucursal.',
  },
  {
    title: 'Infraestructura y nube',
    body: 'Hosting, VPS, correo corporativo, CN7, respaldo y continuidad.',
  },
]

const services = [
  { title: 'Diseño web', copy: 'Sitios y landing pages con foco en claridad, captación y conversión.', href: '/diseno-web' },
  { title: 'CompuNegocio', copy: 'Punto de venta, inventario, timbres y operación diaria.', href: '/compunegocio' },
  { title: 'Infraestructura', copy: 'Hosting, VPS, correo, transferencias y continuidad operativa.', href: '/infraestructura' },
  { title: 'Emailing', copy: 'Campañas segmentadas, pruebas A/B, automatización y métricas.', href: '/emailing' },
  { title: 'Automatización', copy: 'CRM, lead filtering, seguimiento y agenda comercial.', href: '/automatizacion' },
  { title: 'Plataforma', copy: 'Ruta completa para conectar presencia, operación y capa fiscal.', href: '/plataforma' },
]

const industries = ['PyMEs comerciales', 'Retail y multisucursal', 'Servicios', 'Operación técnica', 'Empresas con leads fríos', 'Equipos que ya crecieron y necesitan orden']

export default function SolucionesPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Soluciones NearTec</span>
            <h1 className="nt-page-title">Una arquitectura clara para vender mejor y operar con menos fricción.</h1>
            <p className="nt-page-copy">
              NearTec integra sitio web, automatización, operación, nube y servicios conectados para que no resuelvas todo con proveedores separados.
            </p>
            <div className="nt-page-hero__actions">
              <Link href="/cotizador" className="btn-primary">Cotizar</Link>
              <Link href="/contacto" className="btn-secondary">Hablar con asesor</Link>
            </div>
          </div>
          <PlatformDeepBoard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="nt-badge nt-badge--soft">Bundles</span>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.4rem]">
            Entra por el dolor correcto, no por una lista eterna de servicios.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {bundles.map((item, index) => (
            <article key={item.title} className={`service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__copy">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <div className="nt-section-head cinematic-reveal">
            <h2 className="nt-section-title">Servicios reales del ecosistema NearTec</h2>
            <p className="nt-section-copy">
              La base pública actual de NearTec ya incluye diseño web, punto de venta, infraestructura, correo, emailing y soluciones conectadas con iTimbre. Aquí se ordenan como oferta comprable.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => (
              <Link key={item.href} href={item.href} className={`nt-case-tile nt-case-tile--animated cinematic-reveal delay-${(index % 4) + 1}`}>
                <span className="nt-case-tile__tag">NearTec</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="nt-case-tile__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="cinematic-reveal delay-2">
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="value-panel cinematic-reveal">
          <div className="max-w-3xl">
            <span className="nt-badge nt-badge--soft">Ideal para</span>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.2rem]">
              Empresas que ya no quieren seguir parchando su crecimiento.
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((item) => (
              <span key={item} className="service-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
