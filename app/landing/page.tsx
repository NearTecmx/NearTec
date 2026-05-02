import type { Metadata } from 'next'
import { V52LandingPage } from '@/components/V52FusionSystem'

export const metadata: Metadata = {
  title: 'Diagnóstico tecnológico',
  description:
    'Diagnóstico NearTec para definir web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.',
}

export default function LandingPage() {
  return <V52LandingPage />
}
