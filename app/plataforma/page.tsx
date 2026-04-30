import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AutomationSignalBoard,
  LiveMetricBars,
  NearTecFlowMockup,
  PlatformDeepBoard,
  ResourcePulsePanel,
} from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Plataforma NearTec | Ecosistema tecnológico empresarial',
  description:
    'Plataforma NearTec para conectar web comercial, CRM, automatización, CompuNegocio, CN7, hosting, correo corporativo, emailing, soporte remoto y capa fiscal con iTimbre cuando aplica.',
  alternates: { canonical: '/plataforma' },
}

const platformLayers = [
  {
    title: 'Captación digital',
    copy: 'Sitio web, landing pages, formularios, WhatsApp y rutas de conversión para convertir tráfico en oportunidades reales.',
  },
  {
    title: 'Seguimiento comercial',
    copy: 'CRM, automatización, clasificación de leads, agenda, nurturing y contexto para que ventas no trabaje a ciegas.',
  },
  {
    title: 'Operación empresarial',
    copy: 'CompuNegocio, punto de venta, inventario, usuarios, reportes, timbres y procesos administrativos conectados.',
  },
  {
    title: 'Infraestructura cloud',
    copy: 'CN7, hosting, VPS, FTP, correo corporativo, respaldo automático, continuidad y soporte remoto.',
  },
  {
    title: 'Comunicación y reactivación',
    copy: 'Emailing, campañas segmentadas, comunicación operativa, recuperación de prospectos y seguimiento a clientes.',
  },
  {
    title: 'Capa fiscal conectable',
    copy: 'Conexión con iTimbre cuando el flujo requiere facturación, timbrado, cumplimiento o integración fiscal.',
  },
]

const architectureFlow = [
  ['01', 'Atraer', 'Web, campañas, contenidos y formularios diseñados para captar intención.'],
  ['02', 'Filtrar', 'Diagnóstico, cotizador y rutas de contacto para separar curiosos de prospectos reales.'],
  ['03', 'Operar', 'Sistemas, CN7, infraestructura, correo y soporte para sostener la operación diaria.'],
  ['04', 'Escalar', 'Automatización, CRM, emailing y medición para crecer sin duplicar caos interno.'],
]

const businessCases = [
  {
    title: 'Empresa que quiere vender más',
    copy: 'Necesita web comercial, formularios, WhatsApp, CRM, seguimiento y campañas medibles.',
  },
  {
    title: 'Negocio con operación física',
    copy: 'Necesita punto de venta, inventario, usuarios, reportes, timbres, capacitación y soporte.',
  },
  {
    title: 'PyME con base tecnológica débil',
    copy: 'Necesita hosting, correo, respaldo, VPS, CN7, accesos ordenados y continuidad.',
  },
  {
    title: 'Empresa con procesos dispersos',
    copy: 'Necesita integrar captación, ventas, operación, comunicación y soporte en una sola ruta.',
  },
]

const ecosystemLinks = [
  ['Soluciones', '/soluciones', 'Mapa comercial por necesidad'],
  ['Sistemas', '/sistemas', 'CompuNegocio, CN7 y operación'],
  ['Automatización', '/automatizacion', 'CRM, leads y seguimiento'],
  ['Infraestructura', '/infraestructura', 'Hosting, VPS, correo y respaldo'],
  ['Emailing', '/emailing', 'Campañas y comunicación'],
  ['Cotizador', '/cotizador', 'Filtro comercial con precios base'],
]

export default function PlataformaPage() {
  return (
    <>
      <section className="section page nt-section nt-section--white">
        <div className="container split">
          <div className="copy-focus copy-focus--video">
            <span className="eyebrow">Plataforma NearTec</span>
            <h1>El ecosistema tecnológico para conectar ventas, operación e infraestructura.</h1>
            <p className="lead">
              NearTec no es una lista de servicios sueltos. Es una plataforma modular para ordenar cómo una
              empresa capta prospectos, los atiende, opera, protege su información y escala con procesos
              medibles.
            </p>

            <div className="button-row">
              <Link href="/cotizador" className="btn btn-green">
                Cotizar plataforma
              </Link>

              <Link href="/soluciones" className="btn btn-outline">
                Ver soluciones
              </Link>
            </div>
          </div>

          <PlatformDeepBoard />
        </div>
      </section>

      <section className="section compact nt-section">
        <div className="container proof-v2">
          {['Web + CRM', 'CompuNegocio + CN7', 'Hosting + correo', 'Emailing + soporte'].map((item) => (
            <article key={item}>
              <b>{item}</b>
              <span>Capa conectada del ecosistema</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section nt-section nt-section--white">
        <div className="container">
          <div className="section-head section-head--glass">
            <span className="eyebrow">Arquitectura modular</span>
            <h2>La plataforma ordena cada pieza según el problema real del negocio.</h2>
            <p>
              El objetivo es evitar duplicidad, improvisación y herramientas aisladas. Cada módulo tiene una
              función clara dentro del sistema: captar, filtrar, vender, operar, proteger o reactivar.
            </p>
          </div>

          <div className="mini-grid">
            {platformLayers.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section nt-section nt-section--dark">
        <div className="container split dark-conversion-grid">
          <div className="dark-copy-block">
            <span className="eyebrow light">Ruta operativa</span>
            <h2>De prospecto a operación conectada, sin piezas rotas en medio.</h2>
            <p className="lead light-text">
              La plataforma NearTec debe guiar al cliente desde la intención inicial hasta una solución
              implementable: web, CRM, punto de venta, infraestructura, correo, emailing, soporte o capa fiscal.
            </p>

            <div className="decision-cards">
              {architectureFlow.map(([step, title, copy]) => (
                <article key={step}>
                  <span>Paso {step}</span>
                  <b>{title}</b>
                  <small>Función</small>
                  <strong>{copy}</strong>
                </article>
              ))}
            </div>
          </div>

          <AutomationSignalBoard />
        </div>
      </section>

      <section className="section nt-section nt-section--white">
        <div className="container split reverse">
          <NearTecFlowMockup />

          <div className="copy-focus copy-focus--video">
            <span className="eyebrow">Casos de uso</span>
            <h2>No todas las empresas necesitan lo mismo. La plataforma decide por prioridad.</h2>
            <p className="lead">
              Una empresa puede empezar por ventas, otra por operación y otra por infraestructura. Lo
              importante es que cada fase conecte con la siguiente sin rehacer todo desde cero.
            </p>

            <div className="stack-list">
              {businessCases.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section nt-section nt-section--white">
        <div className="container">
          <div className="section-head section-head--glass">
            <span className="eyebrow">Conexión del sitio</span>
            <h2>La página Plataforma debe actuar como centro del ecosistema NearTec.</h2>
            <p>
              Desde aquí el usuario puede avanzar hacia la ruta correcta según su necesidad: soluciones,
              sistemas, automatización, infraestructura, emailing o cotización.
            </p>
          </div>

          <div className="mini-grid">
            {ecosystemLinks.map(([title, href, copy]) => (
              <article key={href}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link href={href} className="text-link">
                  Ir a {title} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact nt-section">
        <div className="container split">
          <LiveMetricBars />
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="section final-cta nt-section nt-section--final">
        <div className="container final-panel">
          <span className="eyebrow light">Siguiente paso</span>
          <h2>Convierte NearTec en una plataforma, no en un catálogo disperso.</h2>
          <p>
            Usa el cotizador si ya sabes qué necesitas, o inicia con diagnóstico si el proyecto mezcla ventas,
            sistemas, nube, correo, soporte y automatización.
          </p>

          <div className="button-row">
            <Link href="/cotizador" className="btn btn-green">
              Cotizar ahora
            </Link>

            <Link href="/diagnostico" className="btn btn-outline btn-on-dark">
              Hacer diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}