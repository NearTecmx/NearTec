import QuoteEngine from '@/components/QuoteEngine'
import { QuoteAssetVisual } from '@/components/AssetVisuals'

export const metadata = {
  title: 'Cotizador NearTec',
  description: 'Calcula una base para CompuNegocio, CN7, soporte, desarrollo, timbres y soluciones tecnológicas NearTec.',
}

export default function CotizadorPage() {
  return (
    <section className="page-hero cotizador-page">
      <div className="container page-hero-grid">
        <div className="page-copy">
          <span className="eyebrow eyebrow-solid">Cotizador NearTec</span>
          <h1>Cotiza con claridad antes de comprar tecnología.</h1>
          <p>
            Estima una base inicial para CompuNegocio, CN7, timbres, soporte, desarrollo o una ruta tecnológica integral.
            Después puedes compartirla por WhatsApp, correo o PDF para avanzar con contexto.
          </p>
        </div>
        <QuoteAssetVisual />
      </div>
      <div className="container mt-10"><QuoteEngine /></div>
    </section>
  )
}
