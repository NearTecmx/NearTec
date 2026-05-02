import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'CN7, nube y respaldo',
  description: 'CN7, nube, respaldo automático, hosting, VPS, FTP, correo e infraestructura.',
}

export default function CN7Page() {
  return (
    <ServicePage
      kind="cn7"
      eyebrow="CN7 y nube"
      title="Protege tu información y trabaja con más continuidad."
      description="Llevamos servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP, correo e infraestructura a una operación más estable."
      proof={['CN7 con respaldo desde $99 USD', 'CN7 hospedado desde $149 USD', 'Respaldo automático', 'Infraestructura']}
      features={[
        ['CN7 y respaldo', 'Servidor y base de datos en nube con respaldo automático para reducir riesgo local.'],
        ['Hosting e infraestructura', 'Hospedaje, VPS, FTP, correo y recursos técnicos para operar con más estabilidad.'],
        ['Continuidad operativa', 'Menos dependencia de una sola máquina y más control sobre la información.'],
      ]}
    />
  )
}
