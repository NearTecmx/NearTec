import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Recursos NearTec',
  description: 'Recursos para entender web, apps, automatización, CompuNegocio, CN7, nube, soporte y desarrollo tecnológico.',
}

export default function Page() {
  return (
    <ServicePage
      kind="recursos"
      eyebrow="Recursos"
      title="Claridad para decidir qué tecnología implementar primero."
      description="Organizamos la información de servicios, precios base, rutas de implementación y próximos pasos para que compres tecnología con menos confusión."
      proof={['Precios base', 'Diagnóstico', 'Cotizador']}
      features={[
        ['Guías por necesidad', 'Web, app, CRM, IA, CompuNegocio, CN7, nube, correo, hosting o soporte.'],
        ['Costos de referencia', 'Bases documentadas para orientar la conversación antes de una propuesta formal.'],
        ['Siguiente paso claro', 'Diagnóstico, cotización o contacto directo según el nivel de definición del proyecto.'],
      ]}
    />
  )
}
