import type { Metadata } from 'next'
import QuoteEngine from '@/components/QuoteEngine'
import { V52QuoteIntro } from '@/components/V52FusionSystem'

export const metadata: Metadata = {
  title: 'Cotizador',
  description:
    'Cotiza soluciones NearTec: web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte y desarrollo a medida.',
}

export default function CotizadorPage() {
  return (
    <>
      <V52QuoteIntro />
      <section className="v52-section">
        <div className="v52-container">
          <QuoteEngine />
        </div>
      </section>
    </>
  )
}
