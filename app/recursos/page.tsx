import type { Metadata } from 'next'
import Link from 'next/link'
import { ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Recursos para vender y operar mejor',
  description: 'Guías NearTec para web, CRM, automatización, nube, CompuNegocio, CN7, ventas y operación empresarial.',
  alternates: { canonical: '/recursos' },
}

const resources = ['Cómo saber si tu sitio no está vendiendo','Cuándo usar CRM y automatización','Qué necesita una pyme para operar en nube','Cómo ordenar punto de venta e inventario']

export default function RecursosPage() {
  return <section className="section page"><div className="container split"><div><span className="eyebrow">Recursos</span><h1>Guías para vender mejor y operar con más orden.</h1><p className="lead">Contenido para dueños, operación, ventas y marketing.</p><div className="stack-list">{resources.map(i => <article key={i}><h3>{i}</h3><p>Lectura práctica para tomar mejores decisiones.</p></article>)}</div><Link href="/blog" className="btn btn-green">Ver blog</Link></div><ResourcePulsePanel /></div></section>
}
