import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Web, apps y desarrollo',
  description: 'Desarrollo de sitios web, apps, paneles e integraciones a medida con NearTec.',
}

export default function WebPage() {
  return (
    <ServicePage
      kind="web"
      eyebrow="Web, apps y desarrollo"
      title="Desarrollamos presencia digital y herramientas que sí se usan."
      description="Creamos sitios web, landings, apps, paneles e integraciones preparadas para explicar, vender, automatizar y operar mejor."
      proof={['Sitios web claros', 'Apps y paneles', 'Formularios', 'Integraciones']}
      features={[
        ['Sitios web y landings', 'Páginas rápidas, claras y preparadas para conversión, pauta, búsqueda y WhatsApp.'],
        ['Apps y paneles', 'Interfaces internas o externas para operar procesos específicos de tu empresa.'],
        ['Integraciones', 'Conectamos formularios, CRM, WhatsApp, cotizador, sistemas y flujos comerciales.'],
      ]}
    />
  )
}
