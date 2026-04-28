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

const serviceRoutes = [
  {
    title: 'Diseño web y landings',
    copy: 'Sitios, páginas de venta, formularios, SEO base y rutas a WhatsApp para captar prospectos con intención real.',
    href: '/diseno-web',
    label: 'Captación',
  },
  {
    title: 'CompuNegocio / punto de venta',
    copy: 'Sistema para ventas, inventario, usuarios, reportes, timbres y operación diaria de comercios y PyMEs.',
    href: '/compunegocio',
    label: 'Operación',
  },
  {
    title: 'CN7 e infraestructura cloud',
    copy: 'Servidor, base de datos, hospedaje, respaldo, FTP, VPS y continuidad para que la operación no dependa de parches.',
    href: '/infraestructura',
    label: 'Cloud',
  },
  {
    title: 'Correo empresarial',
    copy: 'Correo con dominio, configuración, seguridad base y comunicación profesional para ventas, soporte y administración.',
    href: '/infraestructura',
    label: 'Confianza',
  },
  {
    title: 'Emailing y reactivación',
    copy: 'Campañas, newsletters y comunicación comercial para recuperar oportunidades y mantener relación con clientes.',
    href: '/emailing',
    label: 'Seguimiento',
  },
  {
    title: 'Solución Total NearTec',
    copy: 'Unimos web, sistema, nube, soporte, correo y automatización en una implementación por etapas y con prioridad comercial.',
    href: '/soluciones',
    label: 'Integración',
  },
]

const pains = [
  ['Web que no vende', 'El sitio existe, pero no explica rápido, no filtra prospectos y no lleva a una acción comercial clara.'],
  ['Operación dispersa', 'Ventas, inventario, reportes, archivos y seguimiento viven en herramientas separadas.'],
  ['Infraestructura débil', 'Hosting, correo, respaldos, servidores y soporte no tienen dueño técnico ni plan de continuidad.'],
  ['Cotizaciones lentas', 'El prospecto quiere avanzar, pero el proceso depende de mensajes manuales, dudas repetidas y tiempos muertos.'],
]

const industries = [
  ['Retail y mostrador', 'Punto de venta, inventario, timbres, reportes, usuarios, cajas y operación por sucursal.'],
  ['PyMEs de servicios', 'Sitio web, formularios, correo profesional, WhatsApp, seguimiento y cotización rápida.'],
  ['Empresas con operación técnica', 'Hosting, VPS, FTP, correo, respaldos, CN7 y soporte remoto para operar sin interrupciones.'],
  ['Negocios con flujo fiscal', 'Conexión con iTimbre cuando la operación necesita CFDI, timbres, autofactura o integración fiscal.'],
]

const process = [
  ['Diagnóstico', 'Detectamos si el cuello de botella está en ventas, operación, infraestructura o seguimiento.'],
  ['Ruta técnica', 'Definimos qué se implementa primero, qué se cotiza con precio base y qué requiere propuesta.'],
  ['Implementación', 'Configuramos, conectamos, capacitamos y dejamos la operación lista para usarse.'],
  ['Soporte y mejora', 'Acompañamos cambios, ajustes, desarrollo, respaldos y crecimiento por etapas.'],
]

const conversionStack = [
  ['Sitio web', 'explica, posiciona y convierte'],
  ['Cotizador', 'filtra, resume y genera PDF'],
  ['WhatsApp', 'abre conversación comercial'],
  ['CompuNegocio', 'ordena ventas e inventario'],
  ['CN7 / Cloud', 'sostiene operación y respaldo'],
  ['Soporte', 'mantiene continuidad'],
]

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="hero hero-v2 hero-v3">
        <div className="container hero-grid hero-grid-v3">
          <div className="hero-copy hero-copy-v3">
            <span className="eyebrow">NearTec · Technology near you</span>
            <h1>Tecnología real para vender, operar y escalar sin improvisar.</h1>
            <p>
              Desarrollamos e implementamos sitios web, sistemas, punto de venta, CompuNegocio, CN7, hosting, VPS, FTP, correo empresarial, emailing y soporte remoto para empresas que necesitan resultados, no presentaciones bonitas.
            </p>
            <div className="hero-actions button-row">
              <Link href="/cotizador" className="btn btn-green">Cotizar ahora</Link>
              <a href="https://wa.me/526646300473?text=Hola%20NearTec,%20quiero%20un%20diagn%C3%B3stico%20para%20mi%20empresa." className="btn btn-dark" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
              <Link href="/soluciones" className="btn btn-outline">Ver soluciones</Link>
            </div>
            <div className="trust-strip trust-strip-v3" aria-label="Servicios NearTec principales">
              {['Web', 'POS', 'CompuNegocio', 'CN7', 'Hosting', 'VPS', 'FTP', 'Correo', 'Emailing', 'Soporte'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <HeroStackBoard />
        </div>
      </section>

      <section className="section compact proof-section-v3">
        <div className="container proof-v2 proof-v3">
          <article><b>Desde 2004</b><span>trayectoria tecnológica empresarial</span></article>
          <article><b>Tijuana · México</b><span>operación local con atención remota</span></article>
          <article><b>Stack completo</b><span>web + sistemas + nube + soporte</span></article>
          <article><b>Cotizador + PDF</b><span>menos fricción para ventas</span></article>
        </div>
      </section>

      <section className="section section-v3">
        <div className="container split reverse">
          <PlatformDeepBoard />
          <div>
            <span className="eyebrow">Qué es NearTec</span>
            <h2>Un proveedor tecnológico integral para empresas que ya no pueden operar con parches.</h2>
            <p className="lead">
              NearTec no debe verse como una agencia de automatización. Debe sentirse como un equipo que construye, integra y sostiene la capa tecnológica del negocio: presencia digital, sistemas, servidores, correo, datos, ventas y soporte.
            </p>
            <div className="operation-map operation-map-v3">
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

      <section className="section dark-section dark-section-v3">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow light">Servicios NearTec</span>
            <h2>Servicios empaquetados para vender mejor y ejecutar sin confusión.</h2>
            <p>La página debe llevar al usuario a una decisión: cotizar, preguntar, pedir diagnóstico o entender qué solución corresponde a su etapa.</p>
          </div>
          <div className="service-grid service-grid-dark service-grid-v3">
            {serviceRoutes.map(({ title, copy, href, label }) => (
              <Link key={title} href={href} className="service-card service-card-v2 service-card-v3">
                <i>{label}</i>
                <h3>{title}</h3>
                <p>{copy}</p>
                <b>Explorar solución →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="section section-v3">
        <div className="container split">
          <div>
            <span className="eyebrow">Dolor de negocio</span>
            <h2>Cuando la tecnología no está conectada, el crecimiento se vuelve más caro.</h2>
            <p className="lead">El problema no es “necesitar más herramientas”. El problema es que la web, ventas, inventario, correo, servidores, reportes y soporte no trabajan como un solo sistema.</p>
            <div className="mini-grid mini-grid-v3">{pains.map(([t, c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div>
          </div>
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="section section-v3 split-feature-v3">
        <div className="container split reverse">
          <NearTecFlowMockup />
          <div>
            <span className="eyebrow">Sistema comercial-operativo</span>
            <h2>La web no debe ser un folleto. Debe iniciar la operación comercial.</h2>
            <p className="lead">El usuario entra, entiende qué ofrece NearTec, selecciona una ruta, cotiza lo documentado y llega a WhatsApp con contexto. Ese es el estándar que necesitamos para vender.</p>
            <div className="stack-list stack-list-v3">
              {conversionStack.map(([t, c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section dark-section-v3">
        <div className="container split">
          <div>
            <span className="eyebrow light">Automatización aplicada</span>
            <h2>El sitio filtra leads antes de consumir tiempo comercial.</h2>
            <p className="lead light-text">El cotizador no promete precios donde no existen. Suma únicamente conceptos documentados y separa servicios que requieren propuesta por alcance.</p>
            <div className="decision-table decision-table-v3" role="region" aria-label="Matriz de decisión comercial">
              <table>
                <thead><tr><th>Servicio</th><th>Acción del sitio</th><th>Salida comercial</th></tr></thead>
                <tbody>
                  <tr><td>CompuNegocio / CN7</td><td>Cotiza precio base</td><td>WhatsApp + PDF</td></tr>
                  <tr><td>Implementación / soporte / desarrollo</td><td>Suma horas o cargo único</td><td>Resumen para ventas</td></tr>
                  <tr><td>Web / hosting / VPS / FTP</td><td>Captura alcance</td><td>Propuesta personalizada</td></tr>
                  <tr><td>Solución Total</td><td>Clasifica módulos</td><td>Lead priorizado</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <AutomationSignalBoard />
        </div>
      </section>

      <section className="section section-v3">
        <div className="container split reverse">
          <LiveMetricBars />
          <div>
            <span className="eyebrow">Precios reales</span>
            <h2>Transparencia donde sí se puede cotizar desde el sitio.</h2>
            <p className="lead">CompuNegocio, implementación, soporte, desarrollo, CN7 y timbres tienen base documentada. Web, hosting, VPS, FTP, correo, emailing y automatización dependen del alcance.</p>
            <div className="price-grid price-grid-v3">
              <article><span>CompuNegocio</span><b>$350–$450 MXN / mes</b><p>Por estación, según volumen.</p></article>
              <article><span>Implementación</span><b>$1,500 MXN</b><p>Instalación, CSD, logo y 2 horas de capacitación.</p></article>
              <article><span>Soporte remoto</span><b>$499 MXN / h</b><p>Atención técnica y capacitación remota.</p></article>
              <article><span>CN7 / nube</span><b>Desde $99 USD / mes</b><p>Servidor, base de datos, hospedaje o respaldo.</p></article>
            </div>
            <p className="fine-print">Precios base no incluyen IVA y están sujetos a alcance, validación y cambios.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section quote-section-v3">
        <div className="container">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="section section-v3">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow">Recursos 2026</span>
            <h2>Blog pensado para posicionamiento, confianza y remarketing.</h2>
            <p>Los artículos deben educar al prospecto, resolver objeciones y llevarlo a una acción comercial: diagnóstico, cotización o WhatsApp.</p>
          </div>
          <div className="blog-grid blog-grid-v3">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card blog-card-v3">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <b>Leer recurso →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-shell-v3">
        <div className="container final-panel final-panel-v3">
          <span className="eyebrow light">Siguiente paso</span>
          <h2>Haz que tu tecnología trabaje como equipo de ventas y operación.</h2>
          <p>Empieza por un diagnóstico. NearTec te ayuda a definir qué cotizar, qué conectar y qué implementar primero.</p>
          <div className="button-row">
            <Link href="/cotizador" className="btn btn-green">Iniciar cotización</Link>
            <a href="https://wa.me/526646300473?text=Hola%20NearTec,%20quiero%20hablar%20con%20un%20asesor." className="btn btn-outline" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
