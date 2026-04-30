import type { Metadata } from 'next'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import { LiveMetricBars } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Casos, clientes y prueba social',
  description: 'Casos y experiencia NearTec en web, operación, sistemas, infraestructura, clientes y proyectos tecnológicos para empresas.',
  alternates: { canonical: '/casos' },
}

const cases = [
  ['iTimbre', 'Ecosistema fiscal, timbrado, conectores y operación conectada.'],
  ['Gasmart', 'Experiencia en proyectos y comunicación digital.'],
  ['Retail y servicios', 'Web, sistemas, soporte e infraestructura para operación real.'],
]

export default function CasosPage() {
  return (
    <>
      <section className="section page">
        <div className="container split">
          <div>
            <span className="eyebrow">Casos y clientes</span>
            <h1>Prueba social para vender con más confianza.</h1>
            <p className="lead">NearTec tiene experiencia en web, operación, sistemas e infraestructura conectada.</p>
            <div className="stack-list">{cases.map(([t, c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div>
          </div>
          <LiveMetricBars />
        </div>
      </section>
      <ClientLogoStrip />
    </>
  )
}
