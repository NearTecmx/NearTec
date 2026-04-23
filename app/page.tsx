import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
  HeroStackBoard,
  LiveMetricBars,
  NearTecFlowMockup,
  PlatformDeepBoard,
  ResourcePulsePanel,
} from '@/components/NearTecPremiumVisuals'

const services = [
  {
    title: 'Diseño web y conversión',
    copy: 'Sitios, landings y ecommerce que explican tu oferta y convierten más visitas en contactos.',
    href: '/diseno-web',
    icon: '◫',
  },
  {
    title: 'CRM y automatización',
    copy: 'Filtro de leads, seguimiento, agenda, WhatsApp y campañas para que ventas no pierda oportunidades.',
    href: '/automatizacion',
    icon: '✦',
  },
  {
    title: 'CompuNegocio / POS',
    copy: 'Punto de venta, inventario, reportes, timbres y control diario para retail y multisucursal.',
    href: '/compunegocio',
    icon: '▣',
  },
  {
    title: 'Cloud e infraestructura',
    copy: 'Hosting, VPS, correo, CN7, respaldo y soporte para operar con una base más estable.',
    href: '/infraestructura',
    icon: '◎',
  },
  {
    title: 'Emailing corporativo',
    copy: 'Campañas, segmentación, estadísticas y automatización para recuperar intención de compra.',
    href: '/emailing',
    icon: '✉',
  },
  {
    title: 'Conexión fiscal',
    copy: 'Cuando el proyecto necesita CFDI, timbres o capa fiscal, NearTec conecta la operación con iTimbre.',
    href: '/soluciones',
    icon: '✓',
  },
]

const pains = [
  ['Tu sitio no vende', 'La oferta no se entiende y los contactos no llegan con intención clara.'],
  ['Tus leads se enfrían', 'No hay filtro, prioridad, agenda ni seguimiento rápido.'],
  ['Tu operación está partida', 'Sitio, correo, POS, nube y soporte viven en proveedores diferentes.'],
  ['No sabes qué contratar', 'NearTec te ayuda a ordenar prioridad, inversión y siguiente paso.'],
]

const bundles = [
  ['Presencia para vender', 'Sitio web, landing, hosting, correo y estructura de conversión.'],
  ['Operación conectada', 'CompuNegocio, inventario, timbres, soporte y control diario.'],
  ['Automatización comercial', 'CRM, lead filtering, agenda, WhatsApp y seguimiento.'],
  ['Infraestructura y nube', 'VPS, CN7, respaldo, correo corporativo y continuidad.'],
]

const prices = [
  ['CompuNegocio', 'Desde $450 MXN / mes', '1 a 3 licencias por estación.'],
  ['Implementación', '$1,500 MXN', 'Instalación, validación y configuración base.'],
  ['CN7 con respaldo', '$99 USD / mes', 'Servidor y base de datos con respaldo.'],
  ['Timbres', '365 por $730 MXN', 'Escala hasta 10,000 por $9,500 MXN.'],
]

const faqs = [
  ['¿Qué vende NearTec?', 'Sitio web, CRM y automatización, CompuNegocio, hosting, VPS, correo, emailing, CN7, soporte e infraestructura conectada.'],
  ['¿Para quién es?', 'Para pymes, retail, multisucursal y empresas que necesitan vender mejor, ordenar operación o dejar de trabajar con piezas sueltas.'],
  ['¿NearTec reemplaza mi sistema actual?', 'No siempre. Puede ordenar la capa comercial, infraestructura u operación sin romper lo que ya funciona.'],
  ['¿Qué relación tiene con iTimbre?', 'NearTec ordena crecimiento e infraestructura. iTimbre cubre la capa fiscal cuando el proyecto necesita CFDI, timbres o cumplimiento.'],
]

export default function HomePage() {
  return (
    <div className="ntx-home">
      <section className="ntx-hero">
        <div className="ntx-container ntx-hero__grid">
          <div className="ntx-hero__copy">
            <span className="ntx-badge">NearTec · tecnología para crecer</span>
            <h1>Vende más. Opera sin fricción.</h1>
            <p>Sitio web, CRM, CompuNegocio, nube y soporte en una sola base para captar clientes, dar seguimiento y operar mejor.</p>
            <div className="ntx-hero__actions">
              <Link href="/cotizador" className="ntx-btn ntx-btn--green">Cotizar</Link>
              <Link href="/soluciones" className="ntx-btn ntx-btn--ghost">Ver servicios</Link>
            </div>
            <div className="ntx-hero__chips">
              {['Sitio web', 'CRM', 'Punto de venta', 'Cloud', 'Emailing'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <HeroStackBoard />
        </div>
      </section>

      <section className="ntx-section ntx-section--tight">
        <div className="ntx-container">
          <div className="ntx-proof-row">
            {['+12 años', 'Tijuana · MX', 'Soporte real', 'Operación conectada'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container">
          <div className="ntx-section-head">
            <span className="ntx-badge">Servicios principales</span>
            <h2>Lo que NearTec sí te ayuda a vender, operar y sostener.</h2>
            <p>Servicios claros, agrupados por necesidad. Sin contratar piezas sueltas a ciegas.</p>
          </div>
          <div className="ntx-service-grid">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="ntx-service-card">
                <span className="ntx-service-card__icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <strong>Ver más</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="ntx-section">
        <div className="ntx-container ntx-split">
          <div>
            <span className="ntx-badge">Dolores reales</span>
            <h2>Cuando tu empresa crece, improvisar sale caro.</h2>
            <p className="ntx-lead">NearTec es para dueños, operación, comercial y marketing que necesitan claridad, control y una ruta vendible.</p>
            <div className="ntx-pain-grid">
              {pains.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container ntx-split ntx-split--reverse">
          <PlatformDeepBoard />
          <div>
            <span className="ntx-badge">Bundles claros</span>
            <h2>Paquetes por necesidad, no por tecnicismos.</h2>
            <div className="ntx-bundle-list">
              {bundles.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container ntx-split">
          <div>
            <span className="ntx-badge">Automatización</span>
            <h2>Convierte tráfico en oportunidades con seguimiento real.</h2>
            <p className="ntx-lead">El objetivo no es llenar formularios: es filtrar leads, priorizarlos y llevarlos a propuesta con contexto.</p>
            <NearTecFlowMockup />
          </div>
          <AutomationSignalBoard />
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container ntx-split ntx-split--reverse">
          <LiveMetricBars />
          <div>
            <span className="ntx-badge">Rangos base</span>
            <h2>Precios documentados para aterrizar la conversación.</h2>
            <p className="ntx-lead">CompuNegocio, implementación, CN7, soporte, desarrollo y timbres ya tienen base para cotizar más rápido.</p>
            <div className="ntx-price-grid">
              {prices.map(([title, value, note]) => <article key={title}><span>{title}</span><strong>{value}</strong><p>{note}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container ntx-faq-panel">
          <div className="ntx-section-head">
            <span className="ntx-badge">Preguntas rápidas</span>
            <h2>Respuestas claras antes de cotizar.</h2>
          </div>
          <div className="ntx-faq-grid">
            {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          </div>
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container">
          <div className="ntx-final-cta">
            <span className="ntx-badge ntx-badge--dark">Siguiente paso</span>
            <h2>Recibe una propuesta más clara.</h2>
            <p>Filtra tu necesidad, revisa rangos base y manda el resumen a ventas por WhatsApp.</p>
            <div className="ntx-hero__actions">
              <Link href="/cotizador" className="ntx-btn ntx-btn--green">Cotizar</Link>
              <Link href="/blog" className="ntx-btn ntx-btn--ghost-dark">Ver blog</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
