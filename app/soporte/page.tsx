import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Soporte, mantenimiento y desarrollo NearTec',
  description: 'Soporte remoto, mantenimiento, configuración, desarrollo, ajustes, infraestructura y continuidad operativa NearTec.',
}

export default function Page() {
  return (
    <ServicePage
      kind="soporte"
      eyebrow="Soporte y mantenimiento"
      title="Soporte técnico para que tu operación no se quede atorada."
      description="Te apoyamos con soporte remoto, configuración, capacitación, mantenimiento, ajustes, desarrollo, infraestructura y continuidad."
      proof={['Soporte con póliza $499 MXN/h', 'Desarrollo con póliza $999 MXN/h', 'Atención remota']}
      features={[
        ['Atención para problemas reales', 'Configuraciones, errores, instalación, usuarios, correos, respaldos, sistemas y operación diaria.'],
        ['Mantenimiento y mejoras', 'Ajustes, formatos, reportes, cambios mayores, integraciones y evolución tecnológica.'],
        ['Escala según necesidad', 'Puedes empezar con soporte puntual y avanzar a infraestructura, automatización o desarrollo a medida.'],
      ]}
    />
  )
}
