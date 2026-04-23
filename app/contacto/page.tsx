import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'

const options = [
  ['WhatsApp', 'Respuesta rápida para cotización y seguimiento.'],
  ['Neary AI', 'Te guía al servicio correcto antes de hablar.'],
  ['Correo', 'Ideal para enviar requerimientos o información técnica.'],
  ['Llamada', 'Para revisar tu proyecto con un asesor.'],
]

export default function ContactoPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">Contacto NearTec</span>
          <h1 className="nt-page-title">Habla con NearTec y recibe la ruta correcta para tu negocio.</h1>
          <p className="nt-page-copy">
            Sitio web, automatización, cloud, CompuNegocio o integración fiscal. Elige el canal que te quede mejor.
          </p>
          <div className="nt-page-hero__actions">
            <a href="https://wa.me/526644046194?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec." target="_blank" rel="noreferrer" className="btn-primary">WhatsApp</a>
            <Link href="/cotizador" className="btn-secondary">Cotizar</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {options.map(([title, body], index) => (
            <article key={title} className={`nt-service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="nt-service-card__accent" />
              <h3 className="nt-service-card__title">{title}</h3>
              <p className="nt-service-card__copy">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="nt-contact-band cinematic-reveal">
            <div>
              <h2 className="nt-cta-band__title">Contacto directo</h2>
              <p className="nt-cta-band__copy">Teléfono, correo y WhatsApp para avanzar más rápido.</p>
            </div>
            <div className="grid gap-3 text-white">
              <a href="tel:6644046194" className="btn-secondary btn-secondary--light">664 404 6194</a>
              <a href="mailto:meta@itimbre.com" className="btn-secondary btn-secondary--light">meta@itimbre.com</a>
              <a href="https://wa.me/526644046194?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec." target="_blank" rel="noreferrer" className="btn-primary">Abrir WhatsApp</a>
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <CotizadorNearTec />
          </div>
        </div>
      </section>
    </div>
  )
}
