import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Soporte técnico',
  description: 'Soporte técnico, mantenimiento, configuración y mejora continua NearTec.',
}

export default function SoportePage() {
  return (
    <ServicePage
      kind="soporte"
      eyebrow="Soporte técnico"
      title="Soporte para que la tecnología siga funcionando."
      description="Atendemos configuración, mantenimiento, capacitación, ajustes, monitoreo, cambios operativos y acompañamiento técnico."
      proof={['Soporte remoto', 'Mantenimiento', 'Configuración', 'Mejora continua']}
      features={[
        ['Soporte remoto', 'Atención técnica para resolver incidencias, configuración y dudas operativas.'],
        ['Mantenimiento', 'Ajustes, actualizaciones menores y revisión de continuidad técnica.'],
        ['Mejora continua', 'Optimización de flujos, reportes, procesos e integraciones existentes.'],
      ]}
    />
  )
}
