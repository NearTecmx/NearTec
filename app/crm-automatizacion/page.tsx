import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'CRM, automatización e IA',
  description: 'CRM, automatización, WhatsApp, tareas e IA aplicada para empresas.',
}

export default function CRMPage() {
  return (
    <ServicePage
      kind="crm"
      eyebrow="CRM, automatización e IA"
      title="Ordena procesos y atiende oportunidades con más contexto."
      description="Implementamos CRM, seguimiento, automatizaciones, tareas, WhatsApp e IA aplicada para reducir fugas y responder mejor."
      proof={['Prospectos ordenados', 'Tareas claras', 'WhatsApp con contexto', 'IA operativa']}
      features={[
        ['CRM y seguimiento', 'Pipeline, estados, tareas, recordatorios y trazabilidad comercial.'],
        ['Automatizaciones', 'Flujos para capturar, clasificar, responder, cotizar y dar seguimiento.'],
        ['IA aplicada', 'Asistentes, clasificación, respuestas y apoyo operativo según el proceso real.'],
      ]}
    />
  )
}
