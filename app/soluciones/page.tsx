import type { Metadata } from 'next'
import { SolutionsExplorer } from '@/components/V52FusionSystem'

export const metadata: Metadata = {
  title: 'Soluciones tecnológicas',
  description:
    'Soluciones NearTec: web, apps, CRM, IA, automatización, CompuNegocio, CN7, nube, soporte e infraestructura.',
}

export default function SolucionesPage() {
  return <SolutionsExplorer />
}
