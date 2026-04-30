import type { Metadata } from 'next'
import Link from 'next/link'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Sistemas, CompuNegocio, CN7 y operación',
  description: 'Sistemas NearTec para punto de venta, inventario, reportes, CompuNegocio, FacturWin, CN7, timbres y operación diaria.',
  alternates: { canonical: '/sistemas' },
}

export default function SistemasPage() {
  return <section className="section page"><div className="container split"><div><span className="eyebrow">Sistemas</span><h1>Sistemas y operación para empresas que necesitan control.</h1><p className="lead">Punto de venta, reportes, inventario, nube y flujos conectados a la operación diaria.</p><div className="mini-grid">{['CompuNegocio','FacturWin','CN7','Timbres'].map(i => <article key={i}><h3>{i}</h3><p>Solución operativa para ordenar ventas y administración.</p></article>)}</div><Link href="/cotizador" className="btn btn-green">Cotizar sistemas</Link></div><LiveMetricBars /></div><div className="container section compact"><NearTecFlowMockup /></div></section>
}
