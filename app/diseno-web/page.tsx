import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Sitios web y landings NearTec',
  description: 'Creamos sitios web y landing pages enfocadas en convertir visitas en contactos.',
}

export default function Page() {
  return (
    <ServicePage
      kind="web"
      eyebrow="Diseño web NearTec"
      title="Tu sitio debe ayudarte a vender, no solo verse bien."
      description="Creamos páginas claras, rápidas y listas para campañas, SEO y WhatsApp."
      features={[
        ['Explica mejor lo que vendes', 'Reducimos la confusión con mensajes claros y llamadas a la acción.'],
        ['Convierte visitas en contactos', 'Diseñamos rutas directas hacia formulario, WhatsApp o cotización.'],
        ['Lista para crecer', 'Estructura preparada para campañas, búsqueda y medición.'],
      ]}
    />
  )
}
