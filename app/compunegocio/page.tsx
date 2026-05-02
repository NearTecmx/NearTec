import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CompuNegocio NearTec',
  description: 'Implementa CompuNegocio para ventas, inventario, usuarios, reportes, timbres y operación diaria.',
}

export default function Page() {
  return (
    <ServicePage
      kind="compunegocio"
      eyebrow="CompuNegocio"
      title="Vende, cobra y controla mejor tu operación diaria."
      description="Implementamos CompuNegocio para punto de venta, inventario, usuarios, reportes, timbres y operación con más orden."
      proof={['Desde $450 MXN por estación / mes', 'Implementación base $1,500 MXN', 'Timbres CN disponibles']}
      features={[
        ['Punto de venta e inventario', 'Controla ventas, productos, clientes, usuarios y movimientos diarios desde una operación más clara.'],
        ['Implementación remota base', 'Instalación, configuración inicial, CSD, logo y capacitación para arrancar con mejor estructura.'],
        ['Timbres, reportes y soporte', 'Cotiza paquetes de timbres, soporte, ajustes y desarrollo según el tamaño real de tu operación.'],
      ]}
    />
  )
}
