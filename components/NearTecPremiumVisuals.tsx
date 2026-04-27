import type { ReactNode } from 'react'

const systemNodes = [
  { label: 'Web', detail: 'Captación', x: '12%', y: '24%' },
  { label: 'WhatsApp', detail: 'Contacto', x: '72%', y: '18%' },
  { label: 'CRM', detail: 'Seguimiento', x: '20%', y: '70%' },
  { label: 'CN7', detail: 'Operación', x: '70%', y: '68%' },
]

const pricedSignals = [
  ['CompuNegocio', 'Desde $450 MXN / estación'],
  ['Implementación', '$1,500 MXN pago único'],
  ['Soporte', 'Desde $499 MXN / hora'],
  ['CN7 nube', 'Desde $99 USD / mes'],
]

const flowSteps = [
  ['01', 'Captar', 'Web, landing, redes, SEO o recomendación.'],
  ['02', 'Filtrar', 'Necesidad, urgencia, giro y tamaño del negocio.'],
  ['03', 'Operar', 'CompuNegocio, CN7, inventario, reportes y timbres.'],
  ['04', 'Sostener', 'Hosting, correo, VPS, respaldo y soporte remoto.'],
]

function VisualShell({
  kicker,
  title,
  children,
  variant = 'dark',
}: {
  kicker: string
  title: string
  children: ReactNode
  variant?: 'dark' | 'light'
}) {
  return (
    <section className={`vfx-card ${variant === 'light' ? 'vfx-card--light' : 'vfx-card--dark'}`}>
      <div className="vfx-noise" />
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
    <VisualShell kicker="NearTec OS" title="Sistema comercial-operativo" variant="dark">
      <div className="tech-core" aria-label="Sistema NearTec conectado">
        <div className="scanline" />
        <div className="core-orb">
          <span>NT</span>
          <small>live stack</small>
        </div>
        <svg className="signal-lines" viewBox="0 0 520 360" aria-hidden="true">
          <path d="M260 178 C140 120 120 70 64 82" />
          <path d="M260 178 C382 92 410 60 462 76" />
          <path d="M260 178 C130 238 110 278 84 310" />
          <path d="M260 178 C380 238 410 282 456 304" />
        </svg>
        {systemNodes.map((node) => (
          <div key={node.label} className="system-node" style={{ left: node.x, top: node.y }}>
            <b>{node.label}</b>
            <small>{node.detail}</small>
          </div>
        ))}
        <div className="terminal-card">
          <span>diagnóstico</span>
          <b>Ruta lista para ventas</b>
          <small>web + operación + infraestructura</small>
        </div>
      </div>
    </VisualShell>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell kicker="Arquitectura" title="Tecnología conectada, no piezas sueltas" variant="light">
      <div className="architecture-grid">
        {[
          ['Presencia', 'Sitio web, landings, SEO base y formularios.'],
          ['Comunicación', 'Correo empresarial, WhatsApp y rutas de contacto.'],
          ['Operación', 'CompuNegocio, CN7, inventario, reportes y timbres.'],
          ['Infraestructura', 'Hosting, VPS, FTP, respaldos, cloud y soporte remoto.'],
        ].map(([title, text], index) => (
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
    <VisualShell kicker="Ruta de conversión" title="Del contacto al siguiente paso" variant="dark">
      <div className="flow-cinema">
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
    <VisualShell kicker="Precios base" title="Cotiza solo lo documentado" variant="light">
      <div className="priced-board">
        {pricedSignals.map(([title, value]) => (
          <article key={title}>
            <span>{title}</span>
            <b>{value}</b>
          </article>
        ))}
      </div>
      <p className="vfx-note">Web, hosting, VPS, correo, emailing y solución total se capturan como requerimiento para cotización manual.</p>
    </VisualShell>
  )
}

export function AutomationSignalBoard() {
  return (
    <VisualShell kicker="Automatización" title="Menos fricción para vender" variant="dark">
      <div className="signal-board">
        {[
          ['Entrada', 'El usuario llega desde web, redes, WhatsApp o campaña.'],
          ['Contexto', 'El cotizador pregunta lo necesario antes de pasar a ventas.'],
          ['Resumen', 'El equipo recibe módulos, precios base y necesidades.'],
          ['Acción', 'WhatsApp, correo o PDF con una ruta clara.'],
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
    <VisualShell kicker="Contenido" title="Recursos para atraer intención" variant="dark">
      <div className="resource-pulse">
        {[
          ['Guías', 'Checklist para dueños, operaciones y ventas.'],
          ['Noticias', 'Tendencias de nube, IA, seguridad y comercio.'],
          ['Comparativas', 'Contexto para decidir sin depender de moda.'],
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
      <div className="browser-mockup">
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
      <div className="emailing-board">
        {['Segmentar', 'Enviar', 'Medir', 'Recuperar'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell kicker="Infraestructura" title="Base técnica para no detener la operación" variant="light">
      <div className="infra-map">
        {['Hosting', 'VPS', 'FTP', 'Correo', 'CN7', 'Backups'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </VisualShell>
  )
}
