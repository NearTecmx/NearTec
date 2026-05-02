import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Contacto NearTec',
  description: 'Habla con NearTec por WhatsApp, correo, diagnóstico o cotización tecnológica.',
}

export default function Page() {
  return (
    <ServicePage
      kind="contacto"
      eyebrow="Contacto"
      title="Hablemos de la tecnología que tu empresa necesita resolver."
      description="Escríbenos por WhatsApp, correo o cotizador. Te ayudamos a definir si necesitas web, app, automatización, CompuNegocio, CN7, nube, soporte o desarrollo a medida."
      proof={['WhatsApp 664 404 6194', 'meta@itimbre.com', 'Diagnóstico tecnológico']}
      features={[
        ['WhatsApp directo', 'Comparte tu caso, número de usuarios, sistema actual y qué problema quieres resolver primero.'],
        ['Correo comercial', 'Útil cuando necesitas mandar contexto, archivos, alcances o requerimientos más detallados.'],
        ['Diagnóstico o cotización', 'Podemos ayudarte con un problema puntual o con una ruta tecnológica integral.'],
      ]}
    />
  )
}
