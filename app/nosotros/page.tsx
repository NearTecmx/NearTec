import Link from 'next/link'
import { PlatformDeepBoard } from '@/components/NearTecPremiumVisuals'
export default function Page(){return <section className="section page"><div className="container split"><div><span className="eyebrow">Nosotros</span><h1>NearTec integra crecimiento, operación e infraestructura.</h1><p className="lead">Somos un frente tecnológico para empresas que necesitan vender mejor, operar con más orden y sostener su operación digital.</p><Link href="/contacto" className="btn btn-green">Hablar con NearTec</Link></div><PlatformDeepBoard /></div></section>}
