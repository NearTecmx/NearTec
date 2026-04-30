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
  title: 'Soluciones tecnológicas para empresas',
  description:
    'Soluciones NearTec para captación, automatización, CRM, CompuNegocio, CN7, hosting, VPS, correo, emailing, soporte remoto y conexión fiscal cuando aplica.',
  alternates: { canonical: '/soluciones' },
}

const solutionBlocks = [
  {
    title: 'Captación y web comercial',
    copy: 'Sitios, landings y formularios diseñados para explicar rápido la oferta, llevar a WhatsApp o cotizador y medir intención.',
  },
  {
    title: 'CRM y automatización',
    copy: 'Rutas de seguimiento para clasificar leads, priorizar ventas, activar recordatorios y evitar que las oportunidades se enfríen.',
  },
  {
    title: 'Operación con CompuNegocio',
    copy: 'Punto de venta, inventario, reportes, usuarios, timbres y operación diaria para empresas que necesitan control.',
  },
  {
    title: 'Infraestructura y continuidad',
    copy: 'CN7, hosting, VPS, FTP, correo corporativo, respaldo y soporte remoto para sostener la operación sin piezas sueltas.',
  },
]

const routes = [
  ['01', 'Diagnosticar', 'Detectar problema real: ventas, seguimiento, operación, infraestructura o fiscal.'],
  ['02', 'Priorizar', 'Separar lo urgente de lo que puede ir en segunda etapa para no cotizar a ciegas.'],
  ['03', 'Implementar', 'Configurar los módulos correctos: web, CRM, POS, CN7, correo o soporte.'],
  ['04', 'Medir', 'Dar seguimiento a leads, operación y continuidad para mejorar la conversión.'],
]

export default function SolucionesPage() {
  return (
    <>
      <section className="section page nt-section nt-section--white">
        <div className="container split">
          <div className="copy-focus copy-focus--video">
            <span className="eyebrow">Soluciones NearTec</span>
            <h1>Una arquitectura completa para vender, operar y crecer.</h1>
            <p className="lead">
              NearTec no debe presentarse como servicios aislados. El valor fuerte está en conectar captación,
              seguimiento, punto de venta, nube, correo, soporte y capa fiscal cuando el flujo lo requiere.
            </p>

            <div className="button-row">
              <Link href="/cotizador" className="btn btn-green">
                Cotizar solución
              </Link>

              <Link href="/diagnostico" className="btn btn-outline">
                Hacer diagnóstico
              </Link>
            </div>
          </div>

          <PlatformDeepBoard />
        </div>
      </section>

      <section className="section compact nt-section">
        <div className="container proof-v2">
          {['Web + CRM', 'POS + CN7', 'Correo + hosting', 'Soporte + continuidad'].map((item) => (
            <article key={item}>
              <b>{item}</b>
              <span>Bloque operativo conectable</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section nt-section nt-section--white">
        <div className="container">
          <div className="section-head section-head--glass">
            <span className="eyebrow">Mapa de soluciones</span>
            <h2>Cada módulo debe empujar una acción comercial u operativa.</h2>
            <p>
              La estructura correcta evita duplicidad de mensajes: primero se identifica el dolor, después se
              propone el módulo y finalmente se lleva al prospecto a cotización con contexto.
            </p>
          </div>

          <div className="mini-grid">
            {solutionBlocks.map((item) => (
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
            <span className="eyebrow light">Sistema de decisión</span>
            <h2>La solución no se vende igual para una PyME, retail o empresa con operación fiscal.</h2>
            <p className="lead light-text">
              El sitio debe guiar al usuario hacia el flujo correcto: cotizador para precios base, diagnóstico
              para proyectos complejos y WhatsApp para atención inmediata.
            </p>

            <div className="decision-cards">
              {routes.map(([step, title, copy]) => (
                <article key={step}>
                  <span>Paso {step}</span>
                  <b>{title}</b>
                  <small>Objetivo</small>
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
            <span className="eyebrow">Implementación modular</span>
            <h2>Empieza por lo que genera más control y avanza por fases.</h2>
            <p className="lead">
              Una empresa puede iniciar con web y seguimiento, otra con punto de venta y CN7, y otra con
              infraestructura o soporte. El objetivo es que cada fase deje una operación más medible.
            </p>

            <div className="stack-list">
              <article>
                <h3>Fase comercial</h3>
                <p>Landing, formularios, WhatsApp, CRM, campañas y seguimiento.</p>
              </article>

              <article>
                <h3>Fase operativa</h3>
                <p>CompuNegocio, inventario, reportes, usuarios, timbres y capacitación.</p>
              </article>

              <article>
                <h3>Fase infraestructura</h3>
                <p>CN7, hosting, VPS, FTP, correo corporativo, respaldo y soporte remoto.</p>
              </article>
            </div>
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
          <h2>Filtra tu caso y evita cotizar piezas que no resuelven el problema real.</h2>
          <p>
            Usa el cotizador para precios base o el diagnóstico para una solución integral con alcance manual.
          </p>

          <div className="button-row">
            <Link href="/cotizador" className="btn btn-green">
              Ir al cotizador
            </Link>

            <Link href="/contacto" className="btn btn-outline btn-on-dark">
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}