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
  ServiceVisualCard,
  serviceIcons,
} from '@/components/NearTecPremiumVisuals'
import { blogPosts } from '@/lib/blog-data'
import { CONTACT } from '@/lib/neartec-pricing'

const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  'Hola NearTec, quiero diagnosticar mi operación digital y cotizar una solución.',
)}`

const services = [
  {
    title: 'Web que convierte',
    copy: 'Sitios y landings con mensaje claro, CTAs, estructura comercial, SEO base y seguimiento.',
    href: '/diseno-web',
    label: 'Captar',
    image: serviceIcons.web,
  },
  {
    title: 'CRM y automatización',
    copy: 'Formularios, WhatsApp, calificación, agenda y seguimiento para que los leads no se enfríen.',
    href: '/automatizacion',
    label: 'Cerrar',
    image: serviceIcons.crm,
  },
  {
    title: 'Punto de venta',
    copy: 'CompuNegocio, CN7, ventas, inventario, usuarios, reportes, timbres y soporte remoto.',
    href: '/compunegocio',
    label: 'Operar',
    image: serviceIcons.pos,
  },
  {
    title: 'Infraestructura cloud',
    copy: 'Hosting, VPS, FTP, correo, respaldos y continuidad para sostener la operación.',
    href: '/infraestructura',
    label: 'Sostener',
    image: serviceIcons.hosting,
  },
  {
    title: 'Correo corporativo',
    copy: 'Correo empresarial profesional, seguridad, configuración y continuidad de comunicación.',
    href: '/infraestructura',
    label: 'Comunicar',
    image: serviceIcons.correo,
  },
  {
    title: 'Emailing medible',
    copy: 'Campañas, newsletters, comunicados y recuperación de prospectos conectada al seguimiento.',
    href: '/emailing',
    label: 'Reactivar',
    image: serviceIcons.emailing,
  },
]

const pains = [
  ['Tu web no vende', 'Existe, pero no explica rápido qué haces, para quién eres ni cuál es el siguiente paso.', '01'],
  ['Los leads se pierden', 'WhatsApp, correo y formularios quedan sueltos; no hay prioridad ni seguimiento.', '02'],
  ['Tu operación está fragmentada', 'Ventas, inventario, correo, hosting y soporte dependen de piezas separadas.', '03'],
  ['No sabes qué contratar primero', 'Sin diagnóstico, se compra diseño, nube o software sin ruta de implementación.', '04'],
]

const industries = [
  ['Retail y mostrador', 'Punto de venta, inventario, usuarios, reportes, timbres y operación diaria.'],
  ['Servicios profesionales', 'Sitio web, formularios, correo empresarial, CRM, campañas y seguimiento.'],
  ['PyMEs en crecimiento', 'Infraestructura, hosting, VPS, correo, respaldos, soporte remoto y automatización.'],
  ['Operación con capa fiscal', 'Conexión con iTimbre cuando el flujo requiere CFDI, timbres, autofactura o web service.'],
]

const process = [
  ['Diagnóstico', 'Detectamos qué está frenando ventas, seguimiento, operación o continuidad.'],
  ['Arquitectura', 'Definimos módulos, prioridades, alcance y ruta comercial/técnica.'],
  ['Implementación', 'Configuramos, conectamos, capacitamos y dejamos una operación usable.'],
  ['Optimización', 'Medimos, ajustamos, damos soporte y preparamos la siguiente etapa.'],
]

const proof = [
  ['+20 años', 'operación empresarial desde NearTec'],
  ['Tijuana · México', 'base local con atención remota'],
  ['Stack integral', 'web + CRM + POS + nube + soporte'],
  ['Cotizador activo', 'filtra prospectos y reduce fricción'],
]

const decisionCards = [
  ['CompuNegocio / CN7', 'Rangos base visibles', 'WhatsApp + resumen'],
  ['Web / hosting / VPS / FTP', 'Captura alcance', 'Propuesta manual'],
  ['CRM / emailing', 'Define flujo comercial', 'Diagnóstico de automatización'],
  ['Solución total', 'Clasifica módulos', 'Lead calificado'],
]

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="hero nt-section nt-section--hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Integrador tecnológico para empresas</span>
            <h1>
              Deja de tener piezas sueltas. <span>Conecta ventas, operación y tecnología.</span>
            </h1>
            <p>
              NearTec integra web, automatización, CRM, CompuNegocio, CN7, hosting, VPS, FTP, correo, emailing y soporte en una ruta clara para empresas que necesitan vender más y operar con control.
            </p>

            <div className="hero-actions">
              <Link href="/cotizador" className="btn btn-green">
                Diagnosticar mi empresa
              </Link>
              <a href={whatsappHref} className="btn btn-dark" target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
              <Link href="/soluciones" className="btn btn-outline">
                Ver soluciones
              </Link>
            </div>

            <div className="hero-proofline" aria-label="Pruebas comerciales NearTec">
              <span>Web + CRM</span>
              <span>POS + CN7</span>
              <span>Hosting + correo</span>
              <span>iTimbre cuando aplica</span>
            </div>
          </div>

          <HeroStackBoard />
        </div>
      </section>

      <section className="section compact nt-section nt-section--proof">
        <div className="container proof-v2">
          {proof.map(([title, copy]) => (
            <article key={title}>
              <b>{title}</b>
              <span>{copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section nt-section nt-section--white">
        <div className="container split reverse">
          <PlatformDeepBoard />
          <div>
            <span className="eyebrow">Qué vende NearTec</span>
            <h2>No somos una agencia genérica. Somos el integrador que ordena tu stack.</h2>
            <p className="lead">
              La diferencia está en conectar captación, seguimiento, punto de venta, infraestructura y soporte. Un sitio bonito sin operación no vende; una operación sin seguimiento pierde oportunidades.
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

      <section className="section nt-section nt-section--services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Servicios NearTec</span>
            <h2>Paquetes claros por dolor real de negocio.</h2>
            <p>
              Cada servicio debe empujar a una venta: captar, filtrar, operar, sostener o reactivar. Diseño visual premium, pero con ruta comercial clara.
            </p>
          </div>

          <div className="service-visual-grid">
            {services.map((service) => (
              <ServiceVisualCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="section nt-section nt-section--white">
        <div className="container split">
          <div>
            <span className="eyebrow">Dolor de negocio</span>
            <h2>La tecnología mal conectada también cuesta dinero.</h2>
            <p className="lead">
              Si web, WhatsApp, correo, POS, hosting, respaldos y soporte no están alineados, el negocio pierde velocidad, control y oportunidades comerciales.
            </p>
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

      <section className="section nt-section nt-section--white">
        <div className="container split reverse">
          <NearTecFlowMockup />
          <div>
            <span className="eyebrow">Por tipo de operación</span>
            <h2>La solución cambia según tu empresa. La ruta no debe improvisarse.</h2>
            <p className="lead">
              NearTec puede ayudar a negocios de mostrador, servicios profesionales, PyMEs en crecimiento y operaciones que también necesitan conexión fiscal con iTimbre.
            </p>
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

      <section className="section dark-section nt-section nt-section--dark">
        <div className="container split dark-conversion-grid">
          <div className="dark-copy-block">
            <span className="eyebrow light">Conversión y seguimiento</span>
            <h2>Una buena página no solo se ve bien. También filtra y vende.</h2>
            <p className="lead light-text">
              El cotizador reduce fricción: separa servicios con precio base, detecta necesidades sin precio público y manda al equipo comercial un lead con contexto.
            </p>

            <div className="decision-cards" role="list" aria-label="Matriz comercial NearTec">
              {decisionCards.map(([service, action, result]) => (
                <article key={service} role="listitem">
                  <span>Servicio</span>
                  <b>{service}</b>
                  <small>Acción en sitio</small>
                  <strong>{action}</strong>
                  <em>{result}</em>
                </article>
              ))}
            </div>
          </div>

          <AutomationSignalBoard />
        </div>
      </section>

      <section className="section nt-section nt-section--white">
        <div className="container split reverse">
          <LiveMetricBars />
          <div>
            <span className="eyebrow">Precios base</span>
            <h2>Transparencia donde sí existe precio documentado.</h2>
            <p className="lead">
              Algunos servicios tienen rango base; otros necesitan alcance antes de cotizar. Esta diferencia debe verse clara para aumentar confianza y reducir vueltas comerciales.
            </p>
            <div className="price-grid">
              <article>
                <span>CompuNegocio</span>
                <b>Desde $350–$450 MXN / mes</b>
                <p>Según volumen de estaciones.</p>
              </article>
              <article>
                <span>Implementación</span>
                <b>$1,500 MXN</b>
                <p>Instalación, configuración y capacitación inicial.</p>
              </article>
              <article>
                <span>Soporte</span>
                <b>Desde $499 MXN / h</b>
                <p>Atención remota documentada.</p>
              </article>
              <article>
                <span>CN7</span>
                <b>Desde $99 USD / mes</b>
                <p>Servidor, base de datos o respaldo.</p>
              </article>
            </div>
            <p className="fine-print">Precios base sujetos a alcance, configuración e IVA cuando aplique.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section nt-section nt-section--quote">
        <div className="container">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="section nt-section nt-section--white">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow">Recursos</span>
            <h2>Contenido para tomar mejores decisiones tecnológicas.</h2>
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

      <section className="section final-cta nt-section nt-section--final">
        <div className="container final-panel">
          <span className="eyebrow light">Siguiente paso</span>
          <h2>Convierte tu operación digital en un sistema que sí venda.</h2>
          <p>
            Empieza con diagnóstico. NearTec te ayuda a saber qué cotizar primero, qué conectar y qué dejar para una segunda etapa.
          </p>
          <div className="button-row">
            <Link href="/cotizador" className="btn btn-green">
              Iniciar cotización
            </Link>
            <a href={whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
