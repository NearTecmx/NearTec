import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Casos y escenarios',
  description: 'Escenarios donde NearTec integra tecnología para empresas.',
}

export default function CasosPage() {
  return (
    <ServicePage
      kind="casos"
      eyebrow="Casos y escenarios"
      title="Tecnología aplicada a problemas reales de operación."
      description="NearTec ayuda cuando una empresa necesita vender mejor, ordenar procesos, respaldarse, operar con sistema o integrar herramientas."
      proof={['Web + CRM', 'POS + timbres', 'CN7 + nube', 'Soporte técnico']}
      features={[
        ['Presencia digital', 'Empresas que necesitan explicar mejor sus servicios y convertir contactos.'],
        ['Operación diaria', 'Negocios que requieren ventas, inventario, timbres y reportes.'],
        ['Continuidad', 'Equipos que necesitan respaldo, nube, hosting e infraestructura.'],
      ]}
    />
  )
}
