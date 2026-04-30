import type { Metadata } from 'next'
import CotizadorNearTec from '@/components/CotizadorNearTec'

export const metadata: Metadata = {
  title: 'Cotizador NearTec | Filtra leads y calcula precios base',
  description: 'Cotizador NearTec para CompuNegocio, CN7, implementación, soporte, desarrollo, timbres y servicios que requieren propuesta.',
  alternates: { canonical: '/cotizador' },
}

export default function CotizadorPage() {
  return <section className="section page"><div className="container quote-feature-shell"><CotizadorNearTec /></div></section>
}
