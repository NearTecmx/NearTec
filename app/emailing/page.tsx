import type { Metadata } from 'next'
import Link from 'next/link'
import { EmailingPerformanceBoard, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Emailing, campañas y recuperación de prospectos',
  description: 'NearTec implementa emailing, campañas, newsletters, segmentación, medición y recuperación de prospectos conectada al CRM.',
  alternates: { canonical: '/emailing' },
}

export default function EmailingPage() {
  return <section className="section page"><div className="container split"><div><span className="eyebrow">Emailing</span><h1>Campañas que recuperan intención de compra.</h1><p className="lead">Segmenta, mide y automatiza comunicación para mantener vivos tus prospectos.</p><div className="stack-list"><article><h3>Segmentación</h3><p>Mensajes por tipo de cliente o interés.</p></article><article><h3>Métricas</h3><p>Aperturas, clics y señales comerciales.</p></article><article><h3>Automatización</h3><p>Seguimiento conectado con CRM y ventas.</p></article></div><Link href="/cotizador" className="btn btn-green">Cotizar emailing</Link></div><EmailingPerformanceBoard /></div><div className="container section compact"><NearTecFlowMockup /></div></section>
}
