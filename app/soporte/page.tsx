import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Soporte NearTec',
  description: 'Recibe soporte remoto para mantener tu operación en marcha con más seguridad.',
}

export default function Page() {
  return (
    <ServicePage
      kind="soporte"
      eyebrow="Soporte NearTec"
      title="Cuando algo falla, necesitas una respuesta que resuelva."
      description="Te apoyamos con soporte remoto, configuración, ajustes, capacitación y acompañamiento."
      features={[
        ['Atención para problemas reales', 'Desde configuraciones y errores hasta ajustes operativos.'],
        ['Más continuidad para tu equipo', 'Recupera velocidad cuando algo impide trabajar bien.'],
        ['Escala según lo que necesites', 'Puedes empezar por soporte y avanzar a mejoras o infraestructura.'],
      ]}
    />
  )
}
