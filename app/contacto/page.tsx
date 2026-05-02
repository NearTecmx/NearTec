import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta a NearTec para diagnóstico, cotización o soporte.',
}

export default function ContactoPage() {
  return (
    <ServicePage
      kind="contacto"
      eyebrow="Contacto"
      title="Hablemos de la tecnología que necesita tu empresa."
      description="Podemos revisar web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte, infraestructura o desarrollo a medida."
      proof={['WhatsApp 664 404 6194', 'meta@itimbre.com', 'Diagnóstico', 'Cotización']}
      features={[
        ['Diagnóstico', 'Identificamos necesidades técnicas, comerciales y operativas.'],
        ['Cotización', 'Preparamos una propuesta según alcance, tiempos y prioridades.'],
        ['Soporte', 'Damos seguimiento a operación, configuración y mejora continua.'],
      ]}
    />
  )
}
