import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Contacto NearTec',
  description: 'Habla con NearTec por WhatsApp, correo o cotización.',
}

export default function Page() {
  return (
    <ServicePage
      kind="contacto"
      eyebrow="Contacto"
      title="Hablemos de lo que tu negocio necesita para vender mejor."
      description="Escríbenos por WhatsApp, correo o cotizador. Te ayudamos a entender qué solución te conviene."
      features={[
        ['WhatsApp directo', 'Resuelve dudas o pide orientación por WhatsApp.'],
        ['Correo comercial', 'También puedes escribirnos por correo si prefieres compartir más contexto.'],
        ['Diagnóstico o cotización', 'Podemos ayudarte con un problema puntual o una solución integral.'],
      ]}
    />
  )
}
