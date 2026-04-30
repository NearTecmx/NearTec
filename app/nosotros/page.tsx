import type { Metadata } from 'next'
import Link from 'next/link'
import { PlatformDeepBoard } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Nosotros | Integrador tecnológico NearTec',
  description: 'NearTec integra crecimiento, operación e infraestructura para empresas: web, CRM, POS, nube, correo, emailing y soporte.',
  alternates: { canonical: '/nosotros' },
}

export default function NosotrosPage() {
  return <section className="section page"><div className="container split"><div><span className="eyebrow">Nosotros</span><h1>NearTec integra crecimiento, operación e infraestructura.</h1><p className="lead">Somos un frente tecnológico para empresas que necesitan vender mejor, operar con más orden y sostener su operación digital.</p><Link href="/contacto" className="btn btn-green">Hablar con NearTec</Link></div><PlatformDeepBoard /></div></section>
}
