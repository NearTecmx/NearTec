import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const layers = [
  ['Presencia digital', 'Web, ecommerce y activos que posicionan tu marca y generan confianza.'],
  ['Captación y marketing', 'Formularios, campañas, automatización y entradas con intención.'],
  ['Operación comercial', 'CRM, pipeline, agenda, cotizaciones y seguimiento del lead.'],
  ['Infraestructura', 'Hosting, dominios, VPS, correo y continuidad operativa.'],
  ['Control administrativo', 'CompuNegocio, reportes y control operativo diario.'],
  ['Cumplimiento fiscal', 'Ruta conectada hacia iTimbre cuando el negocio ya la necesita.'],
]

const needs = [
  'Quiero vender más',
  'Quiero ordenar mi operación',
  'Quiero modernizar mi infraestructura',
  'Quiero digitalizar administración y ventas',
  'Quiero conectar mi operación con facturación',
]

export default function PlataformaPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Plataforma NearTec / Solución Integral</span>
            <h1 className="nt-page-title">
              La arquitectura digital para empresas que ya no quieren improvisar.
            </h1>
            <p className="nt-page-copy">
              Conecta tu presencia digital, infraestructura, automatización, operación y facturación en un solo ecosistema para crecer con orden, control y resultados.
            </p>

            <div className="nt-page-hero__actions">
              <Link href="/cotizador" className="btn-primary">
                Construir mi stack
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
        <div className="nt-section-head cinematic-reveal">
          <h2 className="nt-section-title">Un ecosistema que trabaja como una sola empresa</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {layers.map(([title, body], index) => (
            <article key={title} className={`nt-layer-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <h3 className="nt-layer-card__title">{title}</h3>
              <p className="nt-layer-card__body">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="nt-software-band cinematic-reveal">
          <div className="max-w-3xl">
            <h2 className="mt-4 text-3xl font-black leading-[1.02] text-[var(--brand-ink)] md:text-[2.4rem]">No todas las empresas necesitan lo mismo</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {needs.map((item) => (
              <article key={item} className="nt-layer-card">
                <h3 className="nt-layer-card__title">{item}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="cinematic-reveal delay-2">
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Arquitectura abierta</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Arma la versión correcta de NearTec para tu empresa.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[rgba(255,255,255,0.72)]">
              Respondes unas preguntas y te recomendamos el stack ideal para tus objetivos, ritmo de implementación y presupuesto.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cotizador" className="btn-primary">
              Empezar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
