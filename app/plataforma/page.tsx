import type { Metadata } from 'next'
import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Plataforma tecnológica y operación conectada',
  description: 'Arquitectura NearTec para conectar captación, CRM, sistemas, nube, soporte, correo y capa fiscal cuando aplica.',
  alternates: { canonical: '/plataforma' },
}

export default function PlataformaPage() {
  return <section className="section page"><div className="container split"><div><span className="eyebrow">Plataforma</span><h1>Una arquitectura para conectar crecimiento, operación e infraestructura.</h1><p className="lead">NearTec ordena web, CRM, sistemas, nube y soporte en una base escalable.</p><div className="stack-list">{['Captación','Seguimiento','Operación','Infraestructura','Capa fiscal'].map(i => <article key={i}><h3>{i}</h3><p>Una capa clara para reducir fricción y mejorar conversión.</p></article>)}</div><Link href="/cotizador" className="btn btn-green">Cotizar</Link></div><PlatformDeepBoard /></div><div className="container section compact"><ResourcePulsePanel /></div></section>
}
