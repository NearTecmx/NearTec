import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import { ServiceShowcaseVisual } from '@/components/AssetVisuals'
import { CONTACT } from '@/lib/neartec-data'

export const metadata = {
  title: 'Soluciones NearTec',
  description: 'NearTec desarrolla e integra tecnología: web, apps, automatización, CompuNegocio, CN7, nube, soporte y proyectos a medida.'
}

export default function Page(){
  return <>
    <section className="page-hero page-hero-v46">
      <div className="container page-hero-grid page-hero-grid-v46">
        <div>
          <span className="eyebrow eyebrow-solid">Soluciones NearTec</span>
          <h1>Tecnología para vender, operar y crecer con más control.</h1>
          <p>
            NearTec desarrolla e integra sitios web, apps, CRM, automatizaciones,
            CompuNegocio, CN7, nube, soporte y proyectos tecnológicos a medida.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-green" href="/cotizador">Quiero cotizar</Link>
            <Link className="btn btn-outline" href="/landing">Quiero diagnóstico</Link>
            <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
          </div>
        </div>

        <ServiceShowcaseVisual/>
      </div>
    </section>

    <section className="section section-separated">
      <div className="container feature-grid">
        <div className="feature-tile"><span>01</span><b>Web, landings y desarrollo</b><p>Presencia digital clara, rápida y profesional para explicar mejor lo que haces.</p></div>
        <div className="feature-tile"><span>02</span><b>CRM, automatización e IA</b><p>Procesos más ordenados, seguimiento inteligente y menos trabajo repetitivo.</p></div>
        <div className="feature-tile"><span>03</span><b>CompuNegocio e iTimbre</b><p>Punto de venta, inventario, operación y conexión fiscal con costos documentados.</p></div>
        <div className="feature-tile"><span>04</span><b>CN7, nube y respaldo</b><p>Infraestructura y continuidad para operar con más estabilidad y menos riesgo.</p></div>
        <div className="feature-tile"><span>05</span><b>Hosting, VPS, correo y FTP</b><p>Servicios técnicos para sostener proyectos reales y ambientes empresariales.</p></div>
        <div className="feature-tile"><span>06</span><b>Soporte y desarrollo a medida</b><p>Ajustes, integraciones, acompañamiento remoto y evolución tecnológica continua.</p></div>
      </div>
    </section>

    <section className="section-tight">
      <div className="container"><QuoteEngine compact/></div>
    </section>
  </>
}
