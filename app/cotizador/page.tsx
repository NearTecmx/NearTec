import QuoteEngine from '@/components/QuoteEngine'
import { QuotePremiumVisual } from '@/components/VisualSystems'

export const metadata = {
  title: 'Cotizador NearTec',
  description: 'Calcula una base para CompuNegocio, CN7, soporte, desarrollo, timbres y soluciones NearTec.',
}

export default function CotizadorPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Cotizador</span>
        <h1>Obtén una base rápida para tomar una mejor decisión.</h1>
        <p>
          Estima una solución inicial y compártela por WhatsApp, correo o PDF para avanzar con contexto.
        </p>
        <div className="mt-10">
          <QuotePremiumVisual />
        </div>
        <div className="mt-10">
          <QuoteEngine />
        </div>
      </div>
    </section>
  )
}
