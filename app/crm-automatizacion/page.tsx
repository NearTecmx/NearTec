import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CRM y automatización NearTec',
  description: 'Organiza prospectos, seguimientos y respuestas con CRM, automatización y WhatsApp conectados.',
}

export default function Page() {
  return (
    <ServicePage
      kind="crm"
      eyebrow="CRM y seguimiento"
      title="Responder mejor también vende más."
      description="Ordenamos tus prospectos, prioridades y recordatorios para que cada oportunidad avance."
      features={[
        ['Organiza tus prospectos', 'Clasifica contactos por intención, tamaño, necesidad o urgencia.'],
        ['Da seguimiento sin olvidar oportunidades', 'Evita que contactos valiosos se pierdan entre mensajes.'],
        ['Conecta tus canales clave', 'Formularios, WhatsApp y correo trabajan con más contexto.'],
      ]}
    />
  )
}
