import QuoteEngine from '@/components/QuoteEngine'
export const metadata = { title: 'Cotizador NearTec', description: 'Calcula una base para CompuNegocio, CN7, soporte, desarrollo, timbres y soluciones NearTec.' }
export default function CotizadorPage(){
  return <section className="page-hero">
    <div className="container">
      <span className="eyebrow">Cotizador</span>
      <h1>Obtén una base rápida para tomar una mejor decisión.</h1>
      <p>Usa este cotizador para estimar una solución inicial. Está pensado para ayudarte a entender rangos y avanzar más rápido por WhatsApp, correo o PDF.</p>
      <div className="mt-10"><QuoteEngine/></div>
    </div>
  </section>
}
