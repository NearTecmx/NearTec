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
import { blogPosts } from '@/lib/blog-data'

const whatsappHref = 'https://wa.me/526646300473?text=Hola%20NearTec,%20quiero%20un%20diagn%C3%B3stico%20para%20mi%20empresa.'

const services = [
  {
    title: 'Diseño web',
    copy: 'Sitios, landings y formularios conectados para convertir visitas en contactos reales.',
    href: '/diseno-web',
    label: 'Captar',
  },
  {
    title: 'Sistema punto de venta',
    copy: 'CompuNegocio para ventas, inventario, usuarios, reportes y operación diaria.',
    href: '/compunegocio',
    label: 'Operar',
  },
  {
    title: 'Infraestructura cloud',
    copy: 'Hosting, VPS, shared servers, CN7, respaldos, FTP y continuidad operativa.',
    href: '/infraestructura',
    label: 'Sostener',
  },
  {
    title: 'Correo empresarial',
    copy: 'Correo con dominio, configuración, seguridad base y comunicación profesional.',
    href: '/infraestructura',
    label: 'Confiar',
  },
  {
    title: 'Emailing',
    copy: 'Campañas, newsletters, contacto en frío y seguimiento de oportunidades.',
    href: '/emailing',
    label: 'Reactivar',
  },
  {
    title: 'Solución total NearTec',
    copy: 'Un solo proveedor para web, sistemas, infraestructura, operación y soporte.',
    href: '/soluciones',
    label: 'Integrar',
  },
]

const pains = [
  ['Web sin conversiones', 'El usuario entra, no entiende la oferta y se va sin pedir información.', '◎'],
  ['Ventas en WhatsApp sin control', 'Los mensajes llegan, pero no hay prioridad, seguimiento ni trazabilidad.', '☏'],
  ['Inventario y reportes desordenados', 'La operación depende de capturas manuales y decisiones tardías.', '▣'],
  ['Infraestructura frágil', 'Correo, hosting, nube, respaldos y accesos viven como piezas separadas.', '◇'],
]

const industries = [
  ['Retail y mostrador', 'Punto de venta, inventario, timbres, reportes y operación multisucursal.'],
  ['Servicios profesionales', 'Sitio web, formularios, CRM, correo empresarial y seguimiento comercial.'],
  ['PyMEs en crecimiento', 'Infraestructura, soporte remoto, correo, nube y ruta de implementación.'],
  ['Negocios con operación fiscal', 'Conexión con iTimbre cuando el flujo necesita CFDI, timbres o autofactura.'],
]

const process = [
  ['Diagnóstico', 'Detectamos qué parte frena ventas, operación o continuidad.'],
  ['Arquitectura', 'Definimos módulos, prioridades, alcances y rangos cotizables.'],
  ['Implementación', 'Configuramos, conectamos, capacitamos y dejamos la operación lista.'],
  ['Soporte', 'Acompañamos cambios, ajustes, respaldos, desarrollo y crecimiento.'],
]

const proof = [
  ['+12 años', 'trayectoria tecnológica'],
  ['Tijuana · México', 'soporte remoto y operación empresarial'],
  ['Solución total', 'web + sistemas + nube + soporte'],
  ['Cotizador activo', 'filtra leads y descarga PDF'],
]

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="hero hero-v2 section-separated">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Integrador tecnológico para empresas</span>
            <h1>
              Desarrollamos tecnología para que tu empresa <span>venda, opere y escale.</span>
            </h1>
            <p>
              Integramos diseño web, punto de venta, CompuNegocio, CN7, hosting, VPS, FTP, correo empresarial, emailing, automatización y soporte remoto en una ruta clara para crecer sin parches digitales.
            </p>
            <div className="button-row">
              <Link href="/cotizador" className="btn btn-green">Cotizar proyecto</Link>
              <a href={whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">WhatsApp directo</a>
              <Link href="/soluciones" className="btn btn-dark">Ver servicios</Link>
            </div>
            <div className="trust-strip" aria-label="Servicios principales de NearTec">
              {['Web', 'POS', 'CN7', 'Hosting', 'VPS', 'FTP', 'Correo', 'Emailing'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <HeroStackBoard />
        </div>
      </section>

      <section className="section compact section-separated">
        <div className="container proof-v2">
          {proof.map(([title, copy]) => (
            <article key={title}>
              <b>{title}</b>
              <span>{copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-separated">
        <div className="container split reverse">
          <PlatformDeepBoard />
          <div>
            <span className="eyebrow">Qué es NearTec</span>
            <h2>Un integrador tecnológico para empresas, no una agencia genérica.</h2>
            <p className="lead">
              NearTec crea y conecta herramientas para la operación del negocio: presencia digital, sistemas administrativos, punto de venta, servidores, correo, campañas, nube y soporte. La promesa no es “hacer de todo”; es ordenar el stack correcto para que la empresa funcione mejor.
            </p>
            <div className="operation-map">
              {process.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section service-section section-separated">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Servicios NearTec</span>
            <h2>Servicios reales convertidos en rutas de venta.</h2>
            <p>La home comunica el portafolio completo con prioridad comercial: captar, operar, sostener, reactivar e integrar.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="service-card service-card-v2">
                <i>{service.label}</i>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <b>Explorar →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="section section-separated">
        <div className="container split">
          <div>
            <span className="eyebrow">Dolor de negocio</span>
            <h2>La tecnología mal conectada frena ventas y operación.</h2>
            <p className="lead">El problema no es tener pocas herramientas. El problema es tener sitio, WhatsApp, correo, inventario, nube y soporte sin una ruta clara.</p>
            <div className="mini-grid problem-grid">
              {pains.map(([title, copy, icon]) => (
                <article key={title}>
                  <i>{icon}</i>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="section section-separated">
        <div className="container split reverse">
          <NearTecFlowMockup />
          <div>
            <span className="eyebrow">Por industria</span>
            <h2>NearTec se adapta al tipo de operación, no al revés.</h2>
            <p className="lead">El sitio habla a compradores reales: dueños, operaciones, comercial, marketing y TI.</p>
            <div className="stack-list">
              {industries.map(([title, copy]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section section-separated">
        <div className="container split">
          <div>
            <span className="eyebrow light">Automatización aplicada</span>
            <h2>El sitio filtra antes de mandar tráfico a ventas.</h2>
            <p className="lead light-text">El cotizador suma importes documentados y separa lo que requiere propuesta. Así se reduce fricción sin inventar precios.</p>
            <div className="decision-table" role="region" aria-label="Matriz de decisión comercial">
              <table>
                <thead><tr><th>Servicio</th><th>Acción en sitio</th><th>Salida comercial</th></tr></thead>
                <tbody>
                  <tr><td>CompuNegocio / CN7</td><td>Cotiza rangos base</td><td>WhatsApp + PDF</td></tr>
                  <tr><td>Web / hosting / VPS / FTP</td><td>Captura alcance</td><td>Propuesta manual</td></tr>
                  <tr><td>Correo / emailing</td><td>Define necesidad</td><td>Diagnóstico comercial</td></tr>
                  <tr><td>Solución total</td><td>Clasifica módulos</td><td>Lead calificado</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <AutomationSignalBoard />
        </div>
      </section>

      <section className="section section-separated">
        <div className="container split reverse">
          <LiveMetricBars />
          <div>
            <span className="eyebrow">Precios reales</span>
            <h2>Transparencia donde sí existe precio documentado.</h2>
            <p className="lead">Mostramos rangos base de CompuNegocio, CN7, soporte, desarrollo, implementación y timbres. Los demás servicios se capturan para cotización personalizada.</p>
            <div className="price-grid">
              <article><span>CompuNegocio</span><b>Desde $350–$450 MXN / mes</b><p>Según volumen de estaciones.</p></article>
              <article><span>Implementación</span><b>$1,500 MXN</b><p>Instalación, CSD, logo y 2 horas de capacitación.</p></article>
              <article><span>Soporte</span><b>Desde $499 MXN / h</b><p>Atención remota documentada.</p></article>
              <article><span>CN7</span><b>Desde $99 USD / mes</b><p>Servidor, base de datos o respaldo.</p></article>
            </div>
            <p className="fine-print">Precios base no incluyen IVA y están sujetos a alcance.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section section-separated">
        <div className="container">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="section section-separated">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow">Recursos 2026</span>
            <h2>Blog orientado a ventas, confianza y remarketing.</h2>
            <p>Artículos para educar al prospecto, activar búsqueda y llevarlo al diagnóstico correcto.</p>
          </div>
          <div className="blog-grid">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <b>Leer recurso →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta section-separated">
        <div className="container final-panel">
          <span className="eyebrow light">Siguiente paso</span>
          <h2>Convierte tu operación digital en un sistema que sí trabaja.</h2>
          <p>Empieza con un diagnóstico. NearTec te ayuda a saber qué cotizar primero, qué conectar y qué dejar para una segunda etapa.</p>
          <div className="button-row">
            <Link href="/cotizador" className="btn btn-green">Iniciar cotización</Link>
            <a href={whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}

