import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Soluciones NearTec',
  description: 'Soluciones para captar mejores prospectos, responder más rápido y operar con más control.',
}

export default function Page() {
  return (
    <ServicePage
      kind="suite"
      eyebrow="Soluciones NearTec"
      title="La tecnología correcta se nota cuando vender se vuelve más fácil."
      description="NearTec reúne web, WhatsApp, CRM, cotización, CompuNegocio, CN7, nube y soporte para que tu negocio avance con más claridad."
      features={[
        ['Atrae mejores prospectos', 'Tu negocio se ve profesional y explica mejor lo que ofrece.'],
        ['Responde con más orden', 'Cada contacto llega con más contexto y seguimiento.'],
        ['Opera con más control', 'Integramos herramientas para vender, respaldar y dar soporte.'],
      ]}
    />
  )
}
