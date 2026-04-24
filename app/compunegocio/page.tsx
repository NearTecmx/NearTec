import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import { LiveMetricBars } from '@/components/NearTecPremiumVisuals'
const plans=[['1 a 3 licencias','$450 MXN/mes'],['4 a 8 licencias','$400 MXN/mes'],['9 o más','$350 MXN/mes']]
export default function Page(){return <><section className="section page"><div className="container split"><div><span className="eyebrow">CompuNegocio</span><h1>Punto de venta y control diario para operar mejor.</h1><p className="lead">Ventas, inventario, reportes, timbres, soporte y operación para retail o multisucursal.</p><div className="price-grid">{plans.map(([t,v])=><article key={t}><span>{t}</span><b>{v}</b><p>Precio por estación.</p></article>)}</div><Link href="/cotizador" className="btn btn-green">Cotizar POS</Link></div><LiveMetricBars /></div></section><section className="section"><div className="container"><CotizadorNearTec /></div></section></>}
