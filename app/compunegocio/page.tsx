import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CompuNegocio NearTec',
  description: 'Impulsa tu operación con CompuNegocio: ventas, inventario, usuarios y timbres.',
}

export default function Page() {
  return (
    <ServicePage
      kind="compunegocio"
      eyebrow="CompuNegocio"
      title="Vende, cobra y controla mejor tu operación diaria."
      description="Implementamos CompuNegocio para que tengas ventas, inventario, usuarios y timbres con más orden."
      features={[
        ['Licencias según tu tamaño', 'Te orientamos con precios base por estación para empezar bien.'],
        ['Implementación más simple', 'Configuramos el sistema para que se adapte mejor a tu operación.'],
        ['Timbres y soporte listos para cotizar', 'Calcula una base clara y avanza sin adivinar.'],
      ]}
    />
  )
}
