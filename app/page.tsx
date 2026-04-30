import Image from 'next/image'
import Link from 'next/link'
import ClientLogoStrip from '@/components/ClientLogoStrip'
import CotizadorNearTec from '@/components/CotizadorNearTec'
import {
  AutomationSignalBoard,
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
    title: 'Web que vende',
    copy: 'Landing, sitio o ecommerce con mensaje claro, velocidad, CTAs, formularios y seguimiento.',
    href: '/diseno-web',
    label: 'Captar',
    image: serviceIcons.web,
  },
  {
    title: 'CRM y automatización',
    copy: 'Filtra leads, prioriza intención, conecta WhatsApp, agenda y seguimiento comercial.',
    href: '/automatizacion',
    label: 'Cerrar',
    image: serviceIcons.crm,
  },
  {
    title: 'CompuNegocio / POS',
    copy: 'Punto de venta, inventario, usuarios, reportes, timbres y control diario con precios base.',
    href: '/compunegocio',
    label: 'Operar',
    image: serviceIcons.pos,
  },
  {
    title: 'CN7, hosting y VPS',
    copy: 'Servidor, respaldo, nube, hosting, VPS y FTP para sostener operación sin piezas frágiles.',
    href: '/infraestructura',
    label: 'Sostener',
    image: serviceIcons.hosting,
  },
  {
    title: 'Correo corporativo',
    copy: 'Comunicación profesional, configuración, continuidad y base técnica para operar mejor.',
    href: '/infraestructura',
    label: 'Confiar',
    image: serviceIcons.correo,
  },
  {
    title: 'Emailing medible',
    copy: 'Campañas, newsletters, recuperación de prospectos y reactivación conectada al CRM.',
    href: '/emailing',
    label: 'Reactivar',
    image: serviceIcons.emailing,
  },
]

const bundles = [
  {
    title: 'Presencia + seguimiento',
    price: 'Proyecto a medida',
    text: 'Web, landing, formulario, WhatsApp, CRM básico y medición para convertir tráfico en leads.',
  },
  {
    title: 'Retail operativo',
    price: '$350–$450 MXN / estación',
    text: 'CompuNegocio para ventas, inventario, reportes y operación diaria. Implementación base desde $1,500 MXN.',
  },
  {
    title: 'Nube + continuidad',
    price: 'CN7 desde $99 USD / mes',
    text: 'Servidor, base de datos, hospedaje, respaldo automático y continuidad para operación crítica.',
  },
  {
    title: 'Fiscal conectado',
    price: 'iTimbre cuando aplica',
    text: 'CFDI, timbres, autofactura, conectores, web service o capa fiscal integrada al proceso.',
  },
]

const pains = [
  ['Tu sitio no vende', 'Se ve activo, pero no explica rápido qué haces, para quién eres ni cuál es el siguiente paso.', '01'],
  ['Los leads se enfrían', 'WhatsApp, correo y formularios quedan sueltos; no hay prioridad ni seguimiento automático.', '02'],
  ['La operación está fragmentada', 'Web, POS, correo, hosting, timbres, respaldo y soporte dependen de proveedores separados.', '03'],
  ['No sabes qué contratar primero', 'Sin diagnóstico, se compra diseño, nube o software sin ruta de implementación.', '04'],
]

const process = [
  ['Diagnóstico', 'Identificamos qué frena ventas, seguimiento, operación o continuidad.'],
  ['Arquitectura', 'Definimos módulos, prioridades, costos base y lo que requiere propuesta.'],
  ['Implementación', 'Configuramos web, CRM, POS, CN7, correo, nube o soporte según el caso.'],
  ['Cierre comercial', 'El cotizador envía contexto a WhatsApp/correo para avanzar con menos vueltas.'],
]

const industries = [
  ['Retail y mostrador', 'Punto de venta, inventario, usuarios, reportes, timbres y operación diaria.'],
  ['Servicios profesionales', 'Sitio web, formularios, correo empresarial, CRM, campañas y seguimiento.'],
  ['PyMEs en crecimiento', 'Infraestructura, hosting, VPS, correo, respaldos, soporte remoto y automatización.'],
  ['Operación con capa fiscal', 'Conexión con iTimbre cuando el flujo requiere CFDI, timbres, autofactura o web service.'],
]

const decisionCards = [
  ['CompuNegocio / CN7', 'Rangos base visibles', 'WhatsApp + resumen'],
  ['Web / hosting / VPS / FTP', 'Captura alcance', 'Propuesta manual'],
  ['CRM / emailing', 'Define flujo comercial', 'Diagnóstico de automatización'],
  ['Solución total', 'Clasifica módulos', 'Lead calificado'],
]

const proof = [
  ['+20 años', 'operación empresarial desde NearTec'],
  ['Tijuana · México', 'base local con atención remota'],
  ['Stack integral', 'web + CRM + POS + nube + soporte'],
  ['Cotizador activo', 'filtra prospectos y reduce fricción'],
]

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="hero nt-section nt-section--hero" id="inicio">
        <div className="hero-video-layer" aria-hidden="true">
          <video
            className="hero-video hero-video--desktop"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/neartec/hero-tech-bg.webp"
          >
            <source src="/images/video-hero.mp4" type="video/mp4" />
          </video>

          <video
            className="hero-video hero-video--mobile"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/neartec/hero-tech-bg.webp"
          >
            <source src="/images/video-hero-vertical.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container hero-grid hero-grid--sales">
          <div className="hero-copy hero-copy--cinematic">
            <span className="eyebrow eyebrow--hero">NearTec · Integrador tecnológico B2B</span>
            <h1>
              Tecnología que convierte tráfico en <span>ventas, operación y crecimiento.</span>
            </h1>
            <p>
              NearTec integra web, automatización, CRM, CompuNegocio, CN7, hosting, VPS, FTP, correo, emailing, soporte e iTimbre cuando aplica. Una sola ruta para vender mejor, filtrar leads y operar con control.
            </p>

            <div className="hero-actions">
              <Link href="#cotizador" className="btn btn-green btn-hero-primary">
                Cotizar ahora
              </Link>
              <a href={whatsappHref} className="btn btn-dark" target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
              <Link href="/soluciones" className="btn btn-outline btn-on-dark">
                Ver servicios
              </Link>
            </div>

            <div className="hero-proofline hero-proofline--dark" aria-label="Servicios principales NearTec">
              <span>Web + CRM</span>
              <span>POS + CN7</span>
              <span>Hosting + correo</span>
              <span>iTimbre cuando aplica</span>
            </div>
          </div>

          <div className="hero-command-stage" aria-label="Centro visual de operación NearTec">
            <div className="hero-command-stage__glow" />
            <div className="hero-command-stage__panel">
              <Image
                src="/images/neartec/neartec-hero-command.svg"
                alt="Dashboard tecnológico NearTec con métricas, nube, servidores y automatización"
                width={980}
                height={760}
                priority
                sizes="(max-width: 720px) 92vw, 46vw"
              />
            </div>
            <div className="hero-command-metrics" aria-hidden="true">
              <article><b>Leads</b><span>filtrados</span></article>
              <article><b>POS</b><span>operativo</span></article>
              <article><b>CN7</b><span>respaldo</span></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section compact nt-section nt-section--proof">
        <div className="container proof-v2 proof-v2--sales">
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
            <h2>No vendemos diseño suelto. Vendemos una operación comercial conectada.</h2>
            <p className="lead">
              NearTec debe funcionar como el frente que conecta captación, seguimiento, punto de venta, infraestructura, correo, respaldo y soporte. Un sitio bonito sin operación no vende; una operación sin seguimiento pierde oportunidades.
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
            <span className="eyebrow">Servicios reales</span>
            <h2>Paquetes claros por dolor de venta y operación.</h2>
            <p>
              Cada servicio empuja una venta: captar, filtrar, cerrar, operar, sostener o reactivar. Los precios documentados se muestran; lo que depende de alcance se filtra para propuesta.
            </p>
          </div>

          <div className="service-visual-grid">
            {services.map((service) => (
              <ServiceVisualCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section compact nt-section nt-section--bundles">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow">Ofertas que sí se pueden vender</span>
            <h2>Bundles comerciales para cerrar más rápido.</h2>
          </div>
          <div className="sales-bundle-grid">
            {bundles.map((bundle) => (
              <article key={bundle.title}>
                <span>{bundle.price}</span>
                <h3>{bundle.title}</h3>
                <p>{bundle.text}</p>
                <Link href="#cotizador">Filtrar este caso →</Link>
              </article>
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

      <section className="section dark-section nt-section nt-section--dark">
        <div className="container split dark-conversion-grid">
          <div className="dark-copy-block">
            <span className="eyebrow light">Conversión y seguimiento</span>
            <h2>El sitio debe filtrar antes de mandar tráfico a ventas.</h2>
            <p className="lead light-text">
              La meta no es “verse bonito”: es detectar intención, separar precios base de propuesta manual y mandar al equipo comercial un lead con contexto.
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
            <span className="eyebrow">Costos reales documentados</span>
            <h2>Transparencia donde sí existe precio base.</h2>
            <p className="lead">
              Mostramos costos reales documentados para CompuNegocio, implementación, soporte, desarrollo, timbres y CN7. Web, hosting, VPS, FTP, correo, emailing y automatización se cotizan según alcance.
            </p>
            <div className="price-grid price-grid--sales">
              <article><span>CompuNegocio</span><b>$350–$450 MXN / mes</b><p>Por estación según volumen. Anual con 3 meses de descuento documentado.</p></article>
              <article><span>Implementación</span><b>$1,500 MXN</b><p>Instalación, configuración, CSD, logo y capacitación inicial.</p></article>
              <article><span>Soporte</span><b>Desde $499 MXN / h</b><p>Atención remota; precio puede variar por póliza o alcance.</p></article>
              <article><span>CN7</span><b>$99–$149 USD / mes</b><p>Servidor, base de datos, hospedaje o respaldo.</p></article>
            </div>
            <p className="fine-print">Precios base sujetos a alcance, configuración e IVA cuando aplique.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section nt-section nt-section--quote" id="cotizador">
        <div className="container quote-feature-shell">
          <div className="quote-feature-head">
            <span className="eyebrow">Motor de ventas</span>
            <h2>Cotizador destacado para filtrar leads y cerrar más rápido.</h2>
            <p>
              El cotizador separa servicios con precio público de los que requieren propuesta, calcula rangos base y genera resumen para WhatsApp, correo o PDF. Eso reduce vueltas y aumenta intención comercial.
            </p>
          </div>
          <CotizadorNearTec />
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
            <Link href="#cotizador" className="btn btn-green">
              Iniciar cotización
            </Link>
            <a href={whatsappHref} className="btn btn-outline btn-on-dark" target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
