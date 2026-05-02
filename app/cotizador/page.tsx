import QuoteEngine from '@/components/QuoteEngine'
import { QuoteAssetVisual } from '@/components/AssetVisuals'

export const metadata = {
  title: 'Cotizador NearTec',
  description: 'Calcula una base para CompuNegocio, CN7, soporte, desarrollo, timbres y soluciones NearTec.',
}

export default function CotizadorPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Cotizador</span>
        <h1>Cotiza con claridad antes de comprar tecnología.</h1>
        <p>
          Estima una solución inicial y compártela por WhatsApp, correo o PDF para avanzar con contexto.
        </p>
        <div className="mt-10">
          <QuoteAssetVisual />
        </div>
        <div className="mt-10">
          <QuoteEngine />
        </div>
      </div>
    </section>
  )
}
