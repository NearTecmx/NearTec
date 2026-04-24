import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import { AutomationSignalBoard, HeroStackBoard, LiveMetricBars, NearTecFlowMockup, PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const services = [
  ['Diseño web', 'Sitios y landings que explican tu oferta y convierten visitas en contactos.', '/diseno-web', '◫'],
  ['CRM y automatización', 'Filtro de leads, agenda, WhatsApp y seguimiento para no perder oportunidades.', '/automatizacion', '✦'],
  ['CompuNegocio', 'Punto de venta, inventario, reportes, timbres y control diario.', '/compunegocio', '▣'],
  ['Cloud e infraestructura', 'Hosting, VPS, correo, CN7, respaldo y soporte para operar estable.', '/infraestructura', '◎'],
  ['Emailing', 'Campañas, segmentación y métricas para recuperar intención de compra.', '/emailing', '✉'],
  ['Conexión fiscal', 'Cuando necesitas CFDI o timbres, conectamos tu operación con iTimbre.', '/soluciones', '✓'],
]

const pains = [['Tu sitio no vende', 'La oferta no se entiende y los contactos llegan fríos.'], ['Los leads se pierden', 'No hay filtro, prioridad ni seguimiento rápido.'], ['Todo está separado', 'Sitio, correo, POS, nube y soporte viven en piezas sueltas.'], ['No sabes qué contratar', 'Ordenamos prioridad, inversión y siguiente paso.']]
const bundles = [['Presencia para vender', 'Sitio web, landing, hosting, correo y conversión.'], ['Operación conectada', 'CompuNegocio, inventario, timbres y soporte.'], ['Automatización comercial', 'CRM, lead filtering, agenda y WhatsApp.'], ['Infraestructura y nube', 'VPS, CN7, respaldo y correo corporativo.']]
const prices = [['CompuNegocio', 'Desde $450 MXN / mes', 'Por estación, según volumen.'], ['Implementación', '$1,500 MXN', 'Instalación y configuración base.'], ['CN7 con respaldo', '$99 USD / mes', 'Servidor y base de datos con respaldo.'], ['Timbres', '365 por $730 MXN', 'Escala hasta 10,000 por $9,500 MXN.']]

export default function HomePage() {
  return (
    <>
      <section className="hero"><div className="container hero-grid"><div><span className="eyebrow">NearTec · tecnología para crecer</span><h1>Vende más. Opera sin fricción.</h1><p>Sitio web, CRM, CompuNegocio, nube y soporte en una sola base para captar clientes, dar seguimiento y operar mejor.</p><div className="button-row"><Link href="/cotizador" className="btn btn-green">Cotizar</Link><Link href="/soluciones" className="btn btn-outline">Ver servicios</Link></div><div className="chip-row">{['Sitio web', 'CRM', 'Punto de venta', 'Cloud', 'Emailing'].map((item) => <span key={item}>{item}</span>)}</div></div><HeroStackBoard /></div></section>
      <section className="section compact"><div className="container proof-row">{['+12 años', 'Tijuana · MX', 'Soporte real', 'Operación conectada'].map((item) => <span key={item}>{item}</span>)}</div></section>
      <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">Servicios principales</span><h2>Soluciones claras para vender, operar y crecer.</h2><p>Servicios agrupados por necesidad. Sin contratar piezas sueltas a ciegas.</p></div><div className="service-grid">{services.map(([title, copy, href, icon]) => <Link key={title} href={href} className="service-card"><i>{icon}</i><h3>{title}</h3><p>{copy}</p><b>Ver más</b></Link>)}</div></div></section>
      <ClientLogoStrip />
      <section className="section"><div className="container split"><div><span className="eyebrow">Dolores reales</span><h2>Cuando tu empresa crece, improvisar sale caro.</h2><p className="lead">NearTec ayuda a dueños, operación, comercial y marketing a trabajar con más claridad.</p><div className="mini-grid">{pains.map(([t,c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div></div><ResourcePulsePanel /></div></section>
      <section className="section"><div className="container split reverse"><PlatformDeepBoard /><div><span className="eyebrow">Bundles</span><h2>Paquetes por necesidad, no por tecnicismos.</h2><div className="stack-list">{bundles.map(([t,c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div></div></div></section>
      <section className="section"><div className="container split"><div><span className="eyebrow">Automatización</span><h2>Convierte tráfico en oportunidades reales.</h2><p className="lead">Filtra leads, prioriza intención y lleva cada contacto al siguiente paso.</p><NearTecFlowMockup /></div><AutomationSignalBoard /></div></section>
      <section className="section"><div className="container split reverse"><LiveMetricBars /><div><span className="eyebrow">Rangos base</span><h2>Precios documentados para cotizar más rápido.</h2><p className="lead">CompuNegocio, implementación, CN7, soporte, desarrollo y timbres ya tienen base.</p><div className="price-grid">{prices.map(([t,v,n]) => <article key={t}><span>{t}</span><b>{v}</b><p>{n}</p></article>)}</div></div></div></section>
      <section className="section"><div className="container"><CotizadorNearTec /></div></section>
      <section className="section"><div className="container final-cta"><span className="eyebrow light">Siguiente paso</span><h2>Recibe una propuesta más clara.</h2><p>Filtra tu necesidad, revisa rangos base y manda el resumen por WhatsApp.</p><div className="button-row"><Link href="/cotizador" className="btn btn-green">Cotizar</Link><Link href="/blog" className="btn btn-dark">Ver blog</Link></div></div></section>
    </>
  )
}
