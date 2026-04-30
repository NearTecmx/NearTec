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

const heroSignals = [
  ['Web', 'Captación', '92%'],
  ['CRM', 'Seguimiento', '86%'],
  ['POS', 'Operación', '78%'],
  ['CN7', 'Continuidad', '84%'],
]

const heroNodes = ['Web', 'CRM', 'POS', 'CN7', 'Correo', 'Hosting']

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="hero nt-section nt-section--hero relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050c08]" id="inicio">
        
        {/* VIDEO CINEMATOGRÁFICO: Cero cortes, atmósfera premium */}
        <div className="absolute inset-0 w-full h-full -z-10" aria-hidden="true">
          {/* Capa de oscurecimiento superior para que el Navbar resalte */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050c08] to-transparent z-10"></div>
          
          <video
            className="hidden md:block absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-screen"
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
            className="block md:hidden absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/neartec/hero-tech-bg.webp"
          >
            <source src="/images/video-hero-vertical.mp4" type="video/mp4" />
          </video>
          
          {/* Difuminado inferior profundo para que el corte del video desaparezca mágicamente en la siguiente sección */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050c08] via-[#050c08]/80 to-transparent z-10"></div>
        </div>

        <div className="container hero-grid hero-grid--sales relative z-20">
          <div className="hero-copy hero-copy--cinematic">
            <span className="eyebrow eyebrow--hero text-green-400 font-bold tracking-widest uppercase text-xs mb-4 block">NearTec · Integrador tecnológico B2B</span>
            <h1 className="text-white drop-shadow-lg">
              Tecnología que convierte tráfico en <span>ventas, operación y crecimiento.</span>
            </h1>
            <p className="text-gray-300">
              NearTec integra web, automatización, CRM, CompuNegocio, CN7, hosting, VPS, FTP, correo, emailing, soporte e iTimbre cuando aplica. Una sola ruta para vender mejor, filtrar leads y operar con control.
            </p>

            <div className="hero-actions">
              <Link href="#cotizador" className="btn btn-green btn-hero-primary shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Cotizar ahora
              </Link>
              <a href={whatsappHref} className="btn btn-dark backdrop-blur-md bg-black/40 border border-white/10 hover:bg-black/60" target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
              <Link href="/soluciones" className="btn btn-outline btn-on-dark border-gray-600 text-gray-300">
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
            <div className="hero-command-stage__glow opacity-50" />

            <div className="hero-command-stage__panel hero-command-stage__panel--live bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl">
              <div className="hero-live-board">
                <div className="hero-live-board__top">
                  <div>
                    <span className="text-gray-400">Command center</span>
                    <b className="text-white">Operación conectada</b>
                  </div>

                  <div className="hero-live-board__status text-green-400">
                    <i className="bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                    Stack activo
                  </div>
                </div>

                <strong className="hero-live-board__title text-white">
                  Stack NearTec <small className="text-gray-500">en línea</small>
                </strong>

                <div className="hero-live-board__signal" aria-hidden="true">
                  <span className="bg-green-500/20" />
                  <span className="bg-green-500/40" />
                  <span className="bg-green-500/60" />
                  <span className="bg-green-500/80" />
                  <span className="bg-green-500" />
                </div>

                <div className="hero-live-board__grid">
                  <div className="hero-live-card hero-live-card--modules bg-black/50 border border-white/5">
                    <span className="text-gray-400">Ruta comercial</span>

                    {heroSignals.map(([name, area, width]) => (
                      <article key={name}>
                        <div>
                          <b className="text-gray-200">{name}</b>
                          <small className="text-gray-500">{area}</small>
                        </div>

                        <i aria-hidden="true" className="bg-gray-800">
                          <span style={{ width }} className="bg-green-500" />
                        </i>
                      </article>
                    ))}
                  </div>

                  <div className="hero-live-card hero-live-card--system bg-black/50 border border-white/5">
                    <span className="text-gray-400">Arquitectura</span>

                    <div className="hero-live-orbital" aria-hidden="true">
                      <div className="hero-live-orbital__ring hero-live-orbital__ring--one border-green-500/20" />
                      <div className="hero-live-orbital__ring hero-live-orbital__ring--two border-green-500/10" />

                      <div className="hero-live-orbital__core bg-black border border-green-500/30">
                        <strong className="text-green-400">NearTec</strong>
                        <small className="text-gray-500">Tech</small>
                      </div>

                      {heroNodes.map((node, index) => (
                        <b key={node} className={`hero-live-orbital__node hero-live-orbital__node--${index + 1} text-gray-300 bg-black/80 border border-white/10 px-2 py-1 rounded text-xs`}>
                          {node}
                        </b>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-command-metrics" aria-hidden="true">
              <article className="bg-black/40 backdrop-blur-md border border-white/5 text-white">
                <b>Leads</b>
                <span className="text-gray-400">filtrados</span>
              </article>

              <article className="bg-black/40 backdrop-blur-md border border-white/5 text-white">
                <b>POS</b>
                <span className="text-gray-400">operativo</span>
              </article>

              <article className="bg-black/40 backdrop-blur-md border border-white/5 text-white">
                <b>CN7</b>
                <span className="text-gray-400">respaldo</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIONES POSTERIORES: Cambiadas a Dark Theme / Glassmorphism */}
      <section className="section compact nt-section nt-section--dark bg-[#050c08] border-t border-white/5">
        <div className="container proof-v2 proof-v2--sales">
          {proof.map(([title, copy]) => (
            <article key={title} className="text-gray-300">
              <b className="text-white">{title}</b>
              <span className="text-gray-500">{copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section nt-section nt-section--dark bg-[#030805]">
        <div className="container split reverse">
          <PlatformDeepBoard />

          <div className="copy-focus copy-focus--video">
            <span className="eyebrow text-green-400">Qué vende NearTec</span>
            <h2 className="text-white">No vendemos diseño suelto. Vendemos una operación comercial conectada.</h2>
            <p className="lead text-gray-400">
              NearTec debe funcionar como el frente que conecta captación, seguimiento, punto de venta, infraestructura, correo, respaldo y soporte. Un sitio bonito sin operación no vende; una operación sin seguimiento pierde oportunidades.
            </p>

            <div className="operation-map">
              {process.map(([title, text], index) => (
                <article key={title} className="bg-black/30 border border-white/5 rounded-xl p-6">
                  <span className="text-green-500/50 text-2xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-white mt-2">{title}</h3>
                  <p className="text-gray-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section nt-section nt-section--services bg-[#050c08]">
        <div className="container">
          <div className="section-head section-head--glass">
            <span className="eyebrow text-green-400">Servicios reales</span>
            <h2 className="text-white">Paquetes claros por dolor de venta y operación.</h2>
            <p className="text-gray-400">
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

      <section className="section compact nt-section nt-section--bundles bg-[#030805]">
        <div className="container">
          <div className="section-head left section-head--glass">
            <span className="eyebrow text-green-400">Ofertas que sí se pueden vender</span>
            <h2 className="text-white">Bundles comerciales para cerrar más rápido.</h2>
          </div>

          <div className="sales-bundle-grid">
            {bundles.map((bundle) => (
              <article key={bundle.title} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-colors">
                <span className="text-green-400 font-mono text-sm bg-green-500/10 px-3 py-1 rounded-full">{bundle.price}</span>
                <h3 className="text-white mt-4 text-xl font-bold">{bundle.title}</h3>
                <p className="text-gray-400 mt-2">{bundle.text}</p>
                <Link href="#cotizador" className="text-green-400 mt-6 inline-block hover:text-green-300">Filtrar este caso →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="section nt-section nt-section--dark bg-[#050c08]">
        <div className="container split">
          <div className="copy-focus copy-focus--video">
            <span className="eyebrow text-green-400">Dolor de negocio</span>
            <h2 className="text-white">La tecnología mal conectada también cuesta dinero.</h2>
            <p className="lead text-gray-400">
              Si web, WhatsApp, correo, POS, hosting, respaldos y soporte no están alineados, el negocio pierde velocidad, control y oportunidades comerciales.
            </p>

            <div className="mini-grid problem-grid">
              {pains.map(([title, copy, icon]) => (
                <article key={title} className="bg-black/30 border border-white/5 rounded-xl p-6">
                  <i className="text-gray-600 font-bold">{icon}</i>
                  <h3 className="text-white">{title}</h3>
                  <p className="text-gray-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>

          <ResourcePulsePanel />
        </div>
      </section>

      <section className="section dark-section nt-section nt-section--dark bg-[#030805]">
        <div className="container split dark-conversion-grid">
          <div className="dark-copy-block">
            <span className="eyebrow light text-green-400">Conversión y seguimiento</span>
            <h2 className="text-white">El sitio debe filtrar antes de mandar tráfico a ventas.</h2>
            <p className="lead light-text text-gray-400">
              La meta no es “verse bonito”: es detectar intención, separar precios base de propuesta manual y mandar al equipo comercial un lead con contexto.
            </p>

            <div className="decision-cards" role="list" aria-label="Matriz comercial NearTec">
              {decisionCards.map(([service, action, result]) => (
                <article key={service} role="listitem" className="bg-black/40 border border-white/5 rounded-lg p-4">
                  <span className="text-gray-500 text-xs uppercase">Servicio</span>
                  <b className="text-white block mb-2">{service}</b>
                  <small className="text-gray-500 text-xs uppercase">Acción en sitio</small>
                  <strong className="text-green-400 block">{action}</strong>
                  <em className="text-gray-400 text-sm not-italic">{result}</em>
                </article>
              ))}
            </div>
          </div>

          <AutomationSignalBoard />
        </div>
      </section>

      <section className="section nt-section nt-section--dark bg-[#050c08]">
        <div className="container split reverse">
          <LiveMetricBars />

          <div className="copy-focus copy-focus--video">
            <span className="eyebrow text-green-400">Costos reales documentados</span>
            <h2 className="text-white">Transparencia donde sí existe precio base.</h2>
            <p className="lead text-gray-400">
              Mostramos costos reales documentados para CompuNegocio, implementación, soporte, desarrollo, timbres y CN7. Web, hosting, VPS, FTP, correo, emailing y automatización se cotizan según alcance.
            </p>

            <div className="price-grid price-grid--sales">
              <article className="bg-black/30 border border-white/5 rounded-xl p-6">
                <span className="text-gray-400 text-sm">CompuNegocio</span>
                <b className="text-white text-xl block mt-1">$350–$450 MXN / mes</b>
                <p className="text-gray-500 text-sm mt-2">Por estación según volumen. Anual con 3 meses de descuento documentado.</p>
              </article>

              <article className="bg-black/30 border border-white/5 rounded-xl p-6">
                <span className="text-gray-400 text-sm">Implementación</span>
                <b className="text-white text-xl block mt-1">$1,500 MXN</b>
                <p className="text-gray-500 text-sm mt-2">Instalación, configuración, CSD, logo y capacitación inicial.</p>
              </article>

              <article className="bg-black/30 border border-white/5 rounded-xl p-6">
                <span className="text-gray-400 text-sm">Soporte</span>
                <b className="text-white text-xl block mt-1">Desde $499 MXN / h</b>
                <p className="text-gray-500 text-sm mt-2">Atención remota; precio puede variar por póliza o alcance.</p>
              </article>

              <article className="bg-black/30 border border-white/5 rounded-xl p-6">
                <span className="text-gray-400 text-sm">CN7</span>
                <b className="text-white text-xl block mt-1">$99–$149 USD / mes</b>
                <p className="text-gray-500 text-sm mt-2">Servidor, base de datos, hospedaje o respaldo.</p>
              </article>
            </div>

            <p className="fine-print text-gray-600 mt-6 text-sm">Precios base sujetos a alcance, configuración e IVA cuando aplique.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section nt-section nt-section--quote bg-[#030805] py-20" id="cotizador">
        <div className="container quote-feature-shell">
          <div className="quote-feature-head section-head--glass text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow text-green-400">Motor de ventas</span>
            <h2 className="text-white text-3xl font-bold mt-2">Cotizador destacado para filtrar leads y cerrar más rápido.</h2>
            <p className="text-gray-400 mt-4">
              El cotizador separa servicios con precio público de los que requieren propuesta, calcula rangos base y genera resumen para WhatsApp, correo o PDF. Eso reduce vueltas y aumenta intención comercial.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-2 md:p-8 shadow-2xl">
            <CotizadorNearTec />
          </div>
        </div>
      </section>

      <section className="section nt-section nt-section--dark bg-[#050c08]">
        <div className="container split reverse">
          <NearTecFlowMockup />

          <div className="copy-focus copy-focus--video">
            <span className="eyebrow text-green-400">Por tipo de operación</span>
            <h2 className="text-white">La solución cambia según tu empresa. La ruta no debe improvisarse.</h2>
            <p className="lead text-gray-400">
              NearTec puede ayudar a negocios de mostrador, servicios profesionales, PyMEs en crecimiento y operaciones que también necesitan conexión fiscal con iTimbre.
            </p>

            <div className="stack-list">
              {industries.map(([title, copy]) => (
                <article key={title} className="mb-6 border-l-2 border-green-500/30 pl-4">
                  <h3 className="text-white font-bold">{title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section nt-section nt-section--dark bg-[#030805]">
        <div className="container">
          <div className="section-head left section-head--glass">
            <span className="eyebrow text-green-400">Recursos</span>
            <h2 className="text-white">Contenido para tomar mejores decisiones tecnológicas.</h2>
            <p className="text-gray-400">Artículos para educar al prospecto, activar búsqueda y llevarlo al diagnóstico correcto.</p>
          </div>

          <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card bg-black/40 border border-white/5 rounded-xl p-6 hover:border-green-500/50 transition-all group">
                <span className="text-green-400 text-xs font-mono mb-3 block">{post.category}</span>
                <h3 className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mt-3 line-clamp-3">{post.excerpt}</p>
                <b className="text-gray-300 text-sm mt-4 inline-block group-hover:text-white">Leer recurso →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta nt-section nt-section--final bg-gradient-to-b from-[#050c08] to-black py-32">
        <div className="container final-panel text-center max-w-4xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
          <span className="eyebrow light text-green-400 mb-4 block">Siguiente paso</span>
          <h2 className="text-white text-4xl font-bold mb-6">Convierte tu operación digital en un sistema que sí venda.</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Empieza con diagnóstico. NearTec te ayuda a saber qué cotizar primero, qué conectar y qué dejar para una segunda etapa.
          </p>

          <div className="button-row flex justify-center gap-4 flex-wrap">
            <Link href="#cotizador" className="btn btn-green px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all">
              Iniciar cotización
            </Link>

            <a href={whatsappHref} className="btn btn-outline btn-on-dark px-8 py-4 border border-white/20 text-white hover:bg-white/10 rounded-xl transition-all" target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
