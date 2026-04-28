import type { ReactNode } from 'react'

const systemNodes = [
  { label: 'Web', detail: 'Capta prospectos', x: '11%', y: '22%' },
  { label: 'WhatsApp', detail: 'Activa contacto', x: '67%', y: '14%' },
  { label: 'Cotizador', detail: 'Filtra alcance', x: '17%', y: '68%' },
  { label: 'CompuNegocio', detail: 'Opera ventas', x: '67%', y: '66%' },
]

const pricedSignals = [
  ['CompuNegocio', '$350–$450 MXN / estación'],
  ['Implementación', '$1,500 MXN pago único'],
  ['Soporte remoto', '$499 MXN / hora'],
  ['CN7 / respaldo', 'Desde $99 USD / mes'],
]

const stackLayers = [
  ['Presencia digital', 'Sitios web, landings, SEO base y formularios que abren conversaciones reales.'],
  ['Operación comercial', 'Punto de venta, CompuNegocio, usuarios, inventario, reportes y timbres.'],
  ['Infraestructura', 'Hosting, VPS, FTP, CN7, respaldos, correo empresarial y soporte remoto.'],
  ['Crecimiento', 'Emailing, automatización, seguimiento, campañas y conexión con herramientas fiscales.'],
]

const flowSteps = [
  ['01', 'Atraer', 'El prospecto entra desde web, redes, Google, recomendación o campaña.'],
  ['02', 'Calificar', 'El sitio identifica necesidad, urgencia, operación y servicios cotizables.'],
  ['03', 'Proponer', 'El cotizador genera resumen, PDF y mensaje listo para WhatsApp.'],
  ['04', 'Implementar', 'NearTec configura, conecta, capacita y da soporte remoto.'],
]

function VisualShell({
  kicker,
  title,
  children,
  variant = 'dark',
  className = '',
}: {
  kicker: string
  title: string
  children: ReactNode
  variant?: 'dark' | 'light'
  className?: string
}) {
  return (
    <section className={`vfx-card vfx-card-v3 ${variant === 'light' ? 'vfx-card--light' : 'vfx-card--dark'} ${className}`}>
      <div className="vfx-noise" />
      <div className="vfx-gridline" />
      <div className="vfx-head">
        <span>{kicker}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  )
}

export function HeroStackBoard() {
  return <TechCommandCenter />
}

export function TechCommandCenter() {
  return (
    <VisualShell kicker="NearTec Command" title="Tecnología que se conecta con ventas" variant="dark" className="hero-console-card">
      <div className="command-console" aria-label="Mapa tecnológico NearTec">
        <div className="console-topbar">
          <span />
          <span />
          <span />
          <b>neartec://growth-stack</b>
        </div>
        <div className="console-radar">
          <div className="radar-ring ring-one" />
          <div className="radar-ring ring-two" />
          <div className="radar-ring ring-three" />
          <div className="core-orb core-orb-v3">
            <span>NT</span>
            <small>online</small>
          </div>
          <svg className="signal-lines signal-lines-v3" viewBox="0 0 520 360" aria-hidden="true">
            <path d="M260 178 C140 118 112 70 58 80" />
            <path d="M260 178 C385 95 420 56 468 78" />
            <path d="M260 178 C128 236 110 282 78 310" />
            <path d="M260 178 C380 238 414 280 458 306" />
          </svg>
          {systemNodes.map((node) => (
            <div key={node.label} className="system-node system-node-v3" style={{ left: node.x, top: node.y }}>
              <b>{node.label}</b>
              <small>{node.detail}</small>
            </div>
          ))}
        </div>
        <div className="console-panels">
          <article>
            <span>Lead scoring</span>
            <b>Alta intención</b>
            <small>cotizador + WhatsApp + PDF</small>
          </article>
          <article>
            <span>Stack</span>
            <b>Web + POS + Cloud</b>
            <small>solución total NearTec</small>
          </article>
        </div>
      </div>
    </VisualShell>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell kicker="Arquitectura" title="Un stack para operar, vender y sostener" variant="light" className="architecture-card-v3">
      <div className="architecture-grid architecture-grid-v3">
        {stackLayers.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  return <AutomationRouteBoard />
}

export function AutomationRouteBoard() {
  return (
    <VisualShell kicker="Ruta comercial" title="Del primer clic a la operación conectada" variant="dark" className="flow-card-v3">
      <div className="flow-cinema flow-cinema-v3">
        {flowSteps.map(([num, title, text]) => (
          <article key={num}>
            <i>{num}</i>
            <div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  return (
    <VisualShell kicker="Precios base" title="Cotiza lo documentado, no promesas al aire" variant="light" className="pricing-card-v3">
      <div className="priced-board priced-board-v3">
        {pricedSignals.map(([title, value]) => (
          <article key={title}>
            <span>{title}</span>
            <b>{value}</b>
          </article>
        ))}
      </div>
      <p className="vfx-note">Diseño web, hosting, VPS, FTP, correo, emailing y automatización se capturan como alcance para propuesta personalizada.</p>
    </VisualShell>
  )
}

export function AutomationSignalBoard() {
  return (
    <VisualShell kicker="Lead engine" title="Menos fricción antes de hablar con ventas" variant="dark" className="signal-card-v3">
      <div className="signal-board signal-board-v3">
        {[
          ['Entrada', 'El usuario llega con contexto desde web, redes, búsqueda, WhatsApp o campaña.'],
          ['Filtro', 'El sitio pregunta servicio, tamaño, urgencia, módulos y necesidades reales.'],
          ['Resumen', 'El equipo recibe precios base, alcance, PDF y mensaje listo para seguimiento.'],
          ['Cierre', 'WhatsApp, correo o llamada con una ruta comercial más limpia.'],
        ].map(([title, text], index) => (
          <article key={title}>
            <span>{index + 1}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function ResourcePulsePanel() {
  return (
    <VisualShell kicker="Recursos" title="Contenido que educa y empuja al diagnóstico" variant="dark" className="resource-card-v3">
      <div className="resource-pulse resource-pulse-v3">
        {[
          ['Guías', 'Checklists para dueños, operaciones, ventas y TI.'],
          ['Tendencias', 'Nube, seguridad, IA, comercio digital y operación PyME.'],
          ['Comparativas', 'Material para decidir qué implementar primero.'],
        ].map(([title, text]) => (
          <article key={title}>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function WebConversionBoard() {
  return (
    <VisualShell kicker="Web" title="Sitios que trabajan como canal comercial" variant="light">
      <div className="browser-mockup browser-mockup-v3">
        <div className="browser-top"><span /><span /><span /></div>
        <div className="browser-hero" />
        <div className="browser-row"><i /> <b /></div>
        <div className="browser-row short"><i /> <b /></div>
        <button type="button">Solicitar diagnóstico</button>
      </div>
    </VisualShell>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <VisualShell kicker="Emailing" title="Campañas con seguimiento medible" variant="dark">
      <div className="emailing-board emailing-board-v3">
        {['Segmentar', 'Enviar', 'Medir', 'Recuperar'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell kicker="Infraestructura" title="Base técnica para no detener la operación" variant="light">
      <div className="infra-map infra-map-v3">
        {['Hosting', 'VPS', 'FTP', 'Correo', 'CN7', 'Backups'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </VisualShell>
  )
}
