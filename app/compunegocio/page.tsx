import type { Metadata } from 'next'
import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import { LiveMetricBars } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'CompuNegocio, CN7 y punto de venta',
  description:
    'CompuNegocio operado por NearTec: licencias por estación, implementación remota, CN7, soporte, desarrollo, timbres e infraestructura para control diario.',
}

const plans = [
  ['1 a 3 licencias', '$450 MXN / mes', '$4,050 MXN anual por estación'],
  ['4 a 8 licencias', '$400 MXN / mes', '$3,600 MXN anual por estación'],
  ['9 o más licencias', '$350 MXN / mes', '$3,150 MXN anual por estación'],
]

const extras = [
  ['Implementación remota', '$1,500 MXN', 'Instalación, configuración, validación de CSD, logo y 2 horas de capacitación inicial.'],
  ['Soporte técnico', '$499 MXN / h', 'Atención remota para capacitación, dudas y operación.'],
  ['Desarrollo', '$999 MXN / h', 'Ajustes, formatos, reportes y mejoras específicas.'],
  ['CN7 con respaldo', '$99 USD / mes', 'Servidor y base de datos en nube con respaldo.'],
]

export default function CompuNegocioPage() {
  return (
    <>
      <section className="section page">
        <div className="container split">
          <div>
            <span className="eyebrow">CompuNegocio + CN7</span>
            <h1>Punto de venta y control diario para operar mejor.</h1>
            <p className="lead">Controla ventas, inventario, reportes, usuarios, timbres y operación diaria con soporte remoto e infraestructura NearTec.</p>
            <div className="price-grid">{plans.map(([t,v,n])=><article key={t}><span>{t}</span><b>{v}</b><p>{n}</p></article>)}</div>
            <div className="button-row"><Link href="/cotizador" className="btn btn-green">Cotizar POS</Link><Link href="/contacto" className="btn btn-outline">Solicitar orientación</Link></div>
          </div>
          <LiveMetricBars />
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <div className="section-head left"><span className="eyebrow">Extras documentados</span><h2>Precios base para implementar sin adivinar.</h2><p>Los precios no incluyen IVA y pueden cambiar según alcance.</p></div>
          <div className="service-grid">{extras.map(([t,v,c])=><article key={t} className="service-card"><i>✓</i><h3>{t}</h3><p>{c}</p><b>{v}</b></article>)}</div>
        </div>
      </section>

      <section className="section"><div className="container"><CotizadorNearTec /></div></section>
    </>
  )
}
