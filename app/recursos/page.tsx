import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Recursos NearTec',
  description: 'Guías para elegir la solución adecuada y avanzar con más claridad.',
}

export default function Page() {
  return (
    <ServicePage
      kind="recursos"
      eyebrow="Recursos"
      title="Decidir mejor también ahorra tiempo y dinero."
      description="Te ayudamos a identificar qué solución necesitas, qué priorizar y cómo avanzar sin comprar tecnología innecesaria."
      features={[
        ['Cuándo rediseñar tu web', 'Detecta si pierdes oportunidades por falta de claridad.'],
        ['Cuándo ordenar seguimiento', 'Si WhatsApp ya no da abasto, necesitas una ruta más clara.'],
        ['Cuándo pasar a una operación más sólida', 'POS, nube y soporte ayudan cuando tu negocio ya necesita estructura.'],
      ]}
    />
  )
}
