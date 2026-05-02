import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Web, apps y desarrollo NearTec',
  description: 'Sitios web, apps, landings, paneles, automatizaciones e integraciones a medida desarrolladas por NearTec.',
}

export default function Page() {
  return (
    <ServicePage
      kind="web"
      eyebrow="Web, apps y código"
      title="Desarrollamos presencia digital y herramientas que sí se usan."
      description="Creamos sitios web, landings, apps, paneles e integraciones preparadas para explicar, vender, automatizar y operar mejor."
      proof={['Sitios web y landings', 'Apps y paneles', 'Integraciones a medida']}
      features={[
        ['Sitios que explican y convierten', 'Mensaje claro, SEO técnico, carga rápida, formularios, WhatsApp y estructura preparada para campañas.'],
        ['Apps y herramientas internas', 'Paneles, flujos, módulos y sistemas para reducir tareas manuales y mejorar control operativo.'],
        ['Integraciones reales', 'Conexión con CRM, correo, WhatsApp, cotizador, CompuNegocio, nube o sistemas internos según alcance.'],
      ]}
    />
  )
}
