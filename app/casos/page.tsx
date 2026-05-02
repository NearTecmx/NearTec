import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Casos de uso NearTec',
  description: 'Escenarios donde NearTec ayuda a captar mejor, operar con control y crecer con orden.',
}

export default function Page() {
  return (
    <ServicePage
      kind="casos"
      eyebrow="Casos de uso"
      title="NearTec tiene sentido cuando quieres crecer sin improvisar."
      description="Ideal para negocios que ya reciben mensajes, pero necesitan convertirlos en oportunidades reales."
      features={[
        ['Contactos que no convierten', 'Cuando necesitas una web o landing mejor estructurada.'],
        ['Equipos comerciales con ruido', 'Cuando el seguimiento depende de mensajes sueltos.'],
        ['Operación que necesita control', 'Cuando ya es momento de conectar ventas, respaldo, nube y soporte.'],
      ]}
    />
  )
}
