import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CRM, automatización e IA NearTec',
  description: 'CRM, automatizaciones, WhatsApp, formularios, IA y seguimiento para empresas que necesitan procesos más claros.',
}

export default function Page() {
  return (
    <ServicePage
      kind="crm"
      eyebrow="CRM, automatización e IA"
      title="Automatiza procesos y atiende oportunidades con más contexto."
      description="Diseñamos flujos con CRM, formularios, WhatsApp, correo, recordatorios e inteligencia artificial aplicada para reducir trabajo repetitivo."
      proof={['CRM y seguimiento', 'Automatizaciones', 'IA aplicada a procesos']}
      features={[
        ['Procesos más ordenados', 'Centraliza prospectos, tareas, prioridades y seguimiento para que nada importante se pierda.'],
        ['Automatización útil', 'Conecta formularios, WhatsApp, correo, cotizaciones, alertas y recordatorios sin meter ruido innecesario.'],
        ['IA aplicada al negocio', 'Asistentes, respuestas, análisis, clasificación y apoyo operativo según el proceso real de tu empresa.'],
      ]}
    />
  )
}
