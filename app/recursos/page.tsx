import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Recursos',
  description: 'Recursos, cotizador y diagnóstico NearTec.',
}

export default function RecursosPage() {
  return (
    <ServicePage
      kind="recursos"
      eyebrow="Recursos"
      title="Herramientas para decidir mejor tu siguiente paso tecnológico."
      description="Usa el cotizador, solicita diagnóstico o revisa qué solución encaja mejor con tu operación."
      proof={['Cotizador', 'Diagnóstico', 'WhatsApp', 'Soporte']}
      features={[
        ['Cotizador', 'Calcula una primera ruta de servicios y costos base.'],
        ['Diagnóstico', 'Revisamos necesidades reales antes de proponer tecnología.'],
        ['Acompañamiento', 'Te guiamos para elegir entre web, CRM, CompuNegocio, CN7 o soporte.'],
      ]}
    />
  )
}
