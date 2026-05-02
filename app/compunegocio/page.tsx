import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'CompuNegocio',
  description: 'CompuNegocio para ventas, inventario, timbres, usuarios, reportes y operación diaria.',
}

export default function CompuNegocioPage() {
  return (
    <ServicePage
      kind="compunegocio"
      eyebrow="CompuNegocio"
      title="Vende, cobra y controla mejor tu operación diaria."
      description="Implementamos CompuNegocio para que tengas ventas, inventario, usuarios, timbres, CSD, reportes y configuración operativa con más orden."
      proof={['Desde $450 MXN / estación', 'Implementación base $1,500 MXN', 'Timbres disponibles', 'Soporte remoto']}
      features={[
        ['Ventas e inventario', 'Control de productos, clientes, movimientos, reportes y operación diaria.'],
        ['Timbres y CSD', 'Configuración operativa para emisión, timbrado y uso correcto del sistema.'],
        ['Implementación y soporte', 'Instalación, configuración, capacitación inicial y soporte según alcance.'],
      ]}
    />
  )
}
