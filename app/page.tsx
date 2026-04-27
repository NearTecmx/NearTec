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

const services = [
  ['Diagnóstico digital', 'Ordenamos qué contratar primero: web, CRM, CompuNegocio, nube, correo o soporte.', '/cotizador', '01'],
  ['Diseño web que vende', 'Sitios, landings y ecommerce con mensaje claro, velocidad, SEO base y formularios conectados.', '/diseno-web', '02'],
  ['Automatización comercial', 'Lead filtering, WhatsApp, agenda, CRM y seguimiento para no perder oportunidades.', '/automatizacion', '03'],
  ['CompuNegocio / CN7', 'Punto de venta, inventario, reportes, timbres, hosting y respaldo para operación diaria.', '/compunegocio', '04'],
  ['Infraestructura cloud', 'Hosting, VPS, correo corporativo, CN7, respaldos y continuidad para trabajar estable.', '/infraestructura', '05'],
  ['Soporte y desarrollo', 'Ajustes, capacitación, configuración, formatos, reportes y mejoras para operación real.', '/sistemas', '06'],
]

const pains = [
  ['Tu sitio no vende', 'La propuesta no se entiende, los CTA están escondidos y no hay ruta clara a contacto.'],
  ['Los leads se pierden', 'Llegan por redes, WhatsApp o correo, pero nadie sabe prioridad ni siguiente paso.'],
  ['Todo está separado', 'Web, POS, correo, nube, timbres y soporte viven como piezas sueltas.'],
  ['No tienes control', 'Los reportes llegan tarde, las decisiones se toman con datos incompletos y el equipo improvisa.'],
]

const bundles = [
  ['Presencia que convierte', 'Sitio web, landing, SEO base, hosting, correo y formularios conectados.'],
  ['Operación conectada', 'CompuNegocio, inventario, reportes, CN7, timbres y soporte remoto.'],
  ['Automatización comercial', 'CRM, scoring, WhatsApp, agenda, recordatorios y nurturing.'],
  ['Infraestructura estable', 'Hosting, VPS, correo corporativo, respaldos, continuidad y seguridad base.'],
]

const prices = [
  ['CompuNegocio', 'Desde $450 MXN / mes', 'Por estación, con rangos por volumen.'],
  ['Implementación', '$1,500 MXN', 'Instalación, configuración, CSD, logo y capacitación inicial.'],
  ['CN7 con respaldo', '$99 USD / mes', 'Servidor y base de datos en nube con respaldo.'],
  ['Timbres CN', '365 por $730 MXN', 'Paquetes hasta 10,000 timbres. No incluye IVA.'],
]

const operations = [
  ['Atraer', 'Web, SEO, redes y campañas'],
  ['Filtrar', 'Formulario, WhatsApp y preguntas clave'],
  ['Operar', 'CompuNegocio, CN7, inventario y reportes'],
  ['Retener', 'Emailing, seguimiento y soporte'],
]

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">NearTec · tecnología para crecer con orden</span>
            <h1>Vende mejor. Opera con control. Escala sin parches.</h1>
            <p>
              Sitio web, automatización comercial, CompuNegocio, CN7, nube, correo y soporte en una sola ruta para captar clientes, dar seguimiento y operar mejor.
            </p>
            <div className="button-row">
              <Link href="/cotizador" className="btn btn-green">Hacer diagnóstico</Link>
              <Link href="/soluciones" className="btn btn-outline">Ver soluciones</Link>
            </div>
            <div className="chip-row">
              {['Web', 'CRM', 'WhatsApp', 'CompuNegocio', 'CN7', 'Cloud'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <HeroStackBoard />
        </div>
      </section>

      <section className="section compact">
        <div className="container proof-row">
          {['Tijuana · México', 'Soporte remoto', 'Cotizador activo', 'Mobile-first', 'Operación conectada'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <PlatformDeepBoard />
          <div>
            <span className="eyebrow">Arquitectura comercial</span>
            <h2>NearTec no vende piezas sueltas. Ordena el sistema completo.</h2>
            <p className="lead">
              La estrategia correcta es transformar “hacemos de todo” en rutas claras: vender mejor, operar mejor y sostener la infraestructura sin fricción.
            </p>
            <div className="operation-map" aria-label="Mapa de operación NearTec">
              {operations.map(([title, text], index) => (
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Servicios principales</span>
            <h2>Soluciones empaquetadas por dolor real de negocio.</h2>
            <p>Diseñadas para dueños, dirección operativa, ventas y marketing que necesitan claridad antes de invertir.</p>
          </div>
          <div className="service-grid">
            {services.map(([title, copy, href, icon]) => (
              <Link key={title} href={href} className="service-card">
                <i>{icon}</i>
                <h3>{title}</h3>
                <p>{copy}</p>
                <b>Explorar →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Dolores reales</span>
            <h2>Cuando una empresa crece, improvisar sale caro.</h2>
            <p className="lead">NearTec ayuda a ordenar la captación, la operación y la base técnica antes de que el caos se vuelva costo.</p>
            <div className="mini-grid">{pains.map(([t, c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div>
          </div>
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <NearTecFlowMockup />
          <div>
            <span className="eyebrow">Bundles</span>
            <h2>Paquetes por necesidad, no por tecnicismos.</h2>
            <p className="lead">Cada ruta tiene una función comercial clara: atraer, convertir, operar o sostener.</p>
            <div className="stack-list">{bundles.map(([t, c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Automatización</span>
            <h2>Convierte tráfico en oportunidades reales.</h2>
            <p className="lead">El sitio no debe terminar en “gracias por contactarnos”. Debe filtrar, priorizar y llevar al siguiente paso.</p>
            <div className="decision-table" role="region" aria-label="Matriz de decisión comercial">
              <table>
                <thead><tr><th>Señal</th><th>Acción</th><th>Resultado</th></tr></thead>
                <tbody>
                  <tr><td>Lead sin contexto</td><td>Pregunta guiada</td><td>Mejor calificación</td></tr>
                  <tr><td>WhatsApp saturado</td><td>Etiquetas y respuestas</td><td>Menos fugas</td></tr>
                  <tr><td>Cotización manual</td><td>Resumen automático</td><td>Más velocidad</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <AutomationSignalBoard />
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <LiveMetricBars />
          <div>
            <span className="eyebrow">Rangos base</span>
            <h2>Precios documentados para cotizar más rápido.</h2>
            <p className="lead">Muestra rangos cuando existen y manda el caso con contexto. Eso reduce fricción y acelera ventas.</p>
            <div className="price-grid">{prices.map(([t, v, n]) => <article key={t}><span>{t}</span><b>{v}</b><p>{n}</p></article>)}</div>
            <p className="fine-print">Precios base sujetos a alcance, configuración e IVA cuando aplique.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CotizadorNearTec />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow">Noticias y recursos 2026</span>
            <h2>Contenido actual para tomar mejores decisiones digitales.</h2>
            <p>Artículos pensados para captar intención, educar prospectos y activar remarketing.</p>
          </div>
          <div className="blog-grid">
            {latestPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <b>Leer análisis →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <span className="eyebrow light">Siguiente paso</span>
          <h2>Recibe una propuesta más clara antes de gastar en herramientas sueltas.</h2>
          <p>Filtra tu necesidad, revisa rangos base y manda el resumen por WhatsApp para recibir orientación.</p>
          <div className="button-row"><Link href="/cotizador" className="btn btn-green">Hacer diagnóstico</Link><Link href="/blog" className="btn btn-dark">Ver blog</Link></div>
        </div>
      </section>
    </>
  )
}
