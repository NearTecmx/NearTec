import type { Metadata } from 'next'
import CotizadorNearTec from '@/components/CotizadorNearTec'

export const metadata: Metadata = {
  title: 'Diagnóstico digital empresarial',
  description: 'Filtra tu necesidad de web, automatización, CompuNegocio, CN7, nube o soporte y envía un resumen listo por WhatsApp.',
}

export default function DiagnosticoPage() {
  return (
    <section className="section page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Diagnóstico NearTec</span>
          <h1>Define qué necesita tu operación antes de invertir.</h1>
          <p>
            Responde rápido, revisa rangos base y manda un resumen con contexto. Menos vueltas, mejor seguimiento y una propuesta más clara.
          </p>
        </div>
        <CotizadorNearTec />
      </div>
    </section>
  )
}
