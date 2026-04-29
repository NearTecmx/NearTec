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
import { CONTACT } from '@/lib/neartec-pricing'

const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  'Hola NearTec, quiero un diagnóstico para mi empresa.',
)}`

const services = [
  {
    title: 'Diseño web',
    copy: 'Sitios, landings y presencia digital para que tu empresa comunique mejor y genere contactos.',
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
    copy: 'Hosting, VPS, shared servers, servidores FTP, CN7, respaldos y continuidad operativa.',
    href: '/infraestructura',
    label: 'Sostener',
  },
  {
    title: 'Correo empresarial',
    copy: 'Correo con dominio, configuración profesional y comunicación confiable para tu equipo.',
    href: '/infraestructura',
    label: 'Comunicar',
  },
  {
    title: 'Emailing',
    copy: 'Campañas, newsletters, comunicados y seguimiento por correo con enfoque medible.',
    href: '/emailing',
    label: 'Reactivar',
  },
  {
    title: 'Solución total NearTec',
    copy: 'Un solo proveedor para web, sistemas, infraestructura, correo, campañas y soporte.',
    href: '/soluciones',
    label: 'Integrar',
  },
]

const pains = [
  ['Web sin conversiones', 'Tu sitio existe, pero no explica tu valor ni facilita el contacto.', '◎'],
  ['Ventas sin control operativo', 'Mensajes, pedidos e inventario viven separados y retrasan decisiones.', '☏'],
  ['Infraestructura frágil', 'Hosting, correo, respaldos o servidores fallan justo cuando más los necesitas.', '◇'],
  ['Campañas sin seguimiento', 'Hay comunicación, pero no hay medición clara ni continuidad comercial.', '▣'],
]

const industries = [
  ['Retail y mostrador', 'Punto de venta, inventario, reportes, productos, usuarios y operación diaria.'],
  ['Servicios profesionales', 'Sitio web, formularios, correo empresarial, campañas y seguimiento.'],
  ['PyMEs en crecimiento', 'Infraestructura, soporte remoto, hosting, correo, nube y ruta de implementación.'],
  ['Negocios con operación fiscal', 'Conexión con iTimbre cuando el flujo necesita CFDI, timbres o autofactura.'],
]

const process = [
  ['Diagnóstico', 'Detectamos qué parte frena ventas, operación o continuidad.'],
  ['Arquitectura', 'Definimos servicios, prioridades, alcance y ruta tecnológica.'],
  ['Implementación', 'Configuramos, conectamos, capacitamos y dejamos la operación lista.'],
  ['Soporte', 'Acompañamos cambios, respaldos, ajustes, soporte remoto y crecimiento.'],
]

const proof = [
  ['+12 años', 'trayectoria tecnológica'],
  ['Tijuana · México', 'atención local y soporte remoto'],
  ['Solución integral', 'web + sistemas + nube + soporte'],
  ['Cotizador activo', 'filtra leads y genera PDF'],
]

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="hero section-separated">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Integrador tecnológico para empresas</span>
            <h1>
              Desarrollamos tecnología para que tu empresa <span>venda, opere y crezca.</span>
            </h1>
            <p>
              NearTec integra diseño web, punto de venta, CompuNegocio, CN7, hosting, VPS, servidores FTP, correo empresarial,
              emailing, automatización y soporte remoto en una ruta clara para empresas que quieren operar mejor.
            </p>

            <div className="button-row">
              <Link href="/cotizador" className="btn btn-green">
                Cotizar proyecto
              </Link>
              <a href={whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
              <Link href="/soluciones" className="btn btn-dark">
                Ver servicios
              </Link>
            </div>

            <div className="trust-strip" aria-label="Servicios principales NearTec">
              {['Web', 'Punto de venta', 'CN7', 'Hosting', 'VPS', 'FTP', 'Correo', 'Emailing'].map((item) => (
                <span key={item}>{item}</span>
              ))}
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
            <h2>No somos una agencia genérica. Somos un integrador tecnológico.</h2>
            <p className="lead">
              Creamos y conectamos herramientas para la operación del negocio: presencia digital, punto de venta, sistemas,
              infraestructura, servidores, correo, campañas y soporte. El objetivo es que la tecnología deje de estar suelta y
              empiece a trabajar como una sola ruta.
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
            <h2>Soluciones tecnológicas que impulsan tu negocio.</h2>
            <p>
              La oferta se organiza por necesidad real: captar clientes, operar ventas, sostener infraestructura, comunicar,
              reactivar prospectos e integrar todo en una solución clara.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="service-card">
                <i>{service.label}</i>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <b>Saber más →</b>
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
            <h2>La tecnología mal conectada también cuesta dinero.</h2>
            <p className="lead">
              Cuando web, punto de venta, correo, hosting, respaldos, campañas y soporte viven separados, la empresa pierde
              tiempo, control y oportunidades.
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

      <section className="section section-separated">
        <div className="container split reverse">
          <NearTecFlowMockup />

          <div>
            <span className="eyebrow">Por tipo de operación</span>
            <h2>La solución cambia según tu empresa. La ruta no debe improvisarse.</h2>
            <p className="lead">
              NearTec puede ayudar a negocios con mostrador, empresas de servicios, PyMEs en crecimiento y operaciones que
              también necesitan conexión fiscal con iTimbre.
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

      <section className="section dark-section section-separated">
        <div className="container split">
          <div>
            <span className="eyebrow light">Decisiones con datos</span>
            <h2>Una buena página no solo se ve bien. También filtra y vende.</h2>
            <p className="lead light-text">
              El cotizador ayuda a separar servicios con precio base de proyectos que requieren propuesta personalizada. Así el
              equipo comercial recibe mejores datos desde el primer contacto.
            </p>

            <div className="decision-table" role="region" aria-label="Matriz comercial NearTec">
              <table>
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Acción en sitio</th>
                    <th>Salida comercial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CompuNegocio / CN7</td>
                    <td>Cotiza rangos base</td>
                    <td>WhatsApp + PDF</td>
                  </tr>
                  <tr>
                    <td>Web / hosting / VPS / FTP</td>
                    <td>Captura alcance</td>
                    <td>Propuesta manual</td>
                  </tr>
                  <tr>
                    <td>Correo / emailing</td>
                    <td>Define necesidad</td>
                    <td>Diagnóstico comercial</td>
                  </tr>
                  <tr>
                    <td>Solución total</td>
                    <td>Clasifica módulos</td>
                    <td>Lead calificado</td>
                  </tr>
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
            <span className="eyebrow">Precios base</span>
            <h2>Transparencia donde sí existe precio documentado.</h2>
            <p className="lead">
              Algunos servicios tienen rango base. Otros, como diseño web, hosting, VPS, FTP, correo o solución integral,
              necesitan alcance antes de cotizar correctamente.
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

      <section className="section quote-section section-separated">
        <div className="container">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="section section-separated">
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

      <section className="section final-cta section-separated">
        <div className="container final-panel">
          <span className="eyebrow light">Siguiente paso</span>
          <h2>Convierte tu operación digital en una solución tecnológica real.</h2>
          <p>
            Empieza con un diagnóstico. NearTec te ayuda a saber qué cotizar primero, qué conectar y qué dejar para una segunda
            etapa.
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