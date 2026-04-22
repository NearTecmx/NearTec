import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const intents = [
  {
    title: 'Quiero una propuesta',
    body: 'Ruta guiada para revisar objetivo, stack y siguiente paso.',
    whatsapp:
      'Hola, quiero una propuesta guiada para mi empresa con NearTec.',
  },
  {
    title: 'Quiero un sitio',
    body: 'Web corporativa, landing, catálogo o ecommerce con mejor estructura de conversión.',
    whatsapp:
      'Hola, quiero revisar una solución de sitio web con NearTec.',
  },
  {
    title: 'Quiero automatización',
    body: 'CRM, lead scoring, respuestas automáticas, agenda y seguimiento comercial.',
    whatsapp:
      'Hola, quiero revisar automatización comercial con NearTec.',
  },
  {
    title: 'Quiero CompuNegocio',
    body: 'Control de ventas, inventario, estaciones, CN7 y operación diaria.',
    whatsapp:
      'Hola, quiero información de CompuNegocio con NearTec.',
  },
  {
    title: 'Quiero revisar infraestructura',
    body: 'Hosting, VPS, correo corporativo, continuidad y nube.',
    whatsapp:
      'Hola, quiero revisar infraestructura y cloud con NearTec.',
  },
  {
    title: 'Necesito soporte',
    body: 'Atención directa para revisar continuidad, configuración o implementación.',
    whatsapp:
      'Hola, necesito soporte o revisión operativa con NearTec.',
  },
]

const channels = [
  {
    title: 'WhatsApp',
    body: 'Canal más rápido para continuar ventas, demo o revisión.',
    href: 'https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec.',
    external: true,
  },
  {
    title: 'Correo',
    body: 'Para contexto, requerimientos y seguimiento formal.',
    href: 'mailto:info@neartec.com',
    external: true,
  },
  {
    title: 'Teléfono',
    body: 'Atención directa para avanzar más rápido.',
    href: 'tel:6631656898',
    external: true,
  },
  {
    title: 'Diagnóstico',
    body: 'Entrada guiada para obtener stack sugerido y rango.',
    href: '/cotizador',
    external: false,
  },
]

export default function ContactoPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Contacto / Agenda</span>
            <h1 className="nt-page-title">
              Habla con NearTec por la ruta correcta desde el inicio.
            </h1>
            <p className="nt-page-copy">
              Elige si necesitas propuesta, diagnóstico, demo, CompuNegocio, infraestructura o
              soporte. Nosotros acomodamos el resto.
            </p>

            <div className="nt-page-hero__actions">
              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20hablar%20con%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Abrir WhatsApp
              </a>

              <Link href="/cotizador" className="btn-secondary">
                Iniciar diagnóstico
              </Link>
            </div>
          </div>

          <LiveMetricBars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Selector de intención</h2>
          <p className="nt-section-copy">
            Entra por la necesidad correcta y NearTec te dirige a la solución más útil desde el
            primer paso.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {intents.map((item, index) => (
            <a
              key={item.title}
              href={`https://wa.me/526631656898?text=${encodeURIComponent(item.whatsapp)}`}
              target="_blank"
              rel="noreferrer"
              className={`nt-route-card cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1rem] font-black text-[var(--brand-ink)]">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-8 text-[var(--brand-muted)]">{item.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>

        <div className="cinematic-reveal delay-2">
          <div className="nt-section-head">
            <h2 className="nt-section-title">Canales de entrada</h2>
            <p className="nt-section-copy">
              Sin formularios eternos y sin rutas confusas. Elige canal y avanzamos desde ahí.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {channels.map((item, index) =>
              item.external ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}
                >
                  <h3 className="nt-layer-card__title">{item.title}</h3>
                  <p className="nt-layer-card__body">{item.body}</p>
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}
                >
                  <h3 className="nt-layer-card__title">{item.title}</h3>
                  <p className="nt-layer-card__body">{item.body}</p>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Promesa</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Sin vueltas, sin formularios eternos y con una ruta clara desde la primera interacción.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[rgba(255,255,255,0.72)]">
              Si ya sabes lo que necesitas, entras por WhatsApp. Si aún estás definiendo,
              entras por diagnóstico.
            </p>
          </div>

          <div className="nt-cta-band__actions">
            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20una%20propuesta%20guiada%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Abrir WhatsApp
            </a>

            <Link href="/cotizador" className="btn-secondary btn-secondary--light">
              Iniciar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}