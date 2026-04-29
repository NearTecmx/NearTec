import type { ReactNode } from 'react'

type VisualShellProps = {
  kicker: string
  title: string
  children?: ReactNode
  className?: string
}

function VisualShell({ kicker, title, children, className = '' }: VisualShellProps) {
  return (
    <div className={`vfx-card ${className}`}>
      <div className="vfx-orbit" />
      <div className="vfx-scan" />
      <div className="vfx-head">
        <span>{kicker}</span>
        <b>{title}</b>
      </div>
      {children}
    </div>
  )
}

function MiniLine({
  points = 'M0 58 C24 52 32 36 54 39 C78 42 82 24 108 28 C134 32 142 16 168 18 C194 21 206 7 238 10 C262 12 276 4 304 7',
}: {
  points?: string
}) {
  return (
    <svg className="mini-line" viewBox="0 0 310 72" aria-hidden="true">
      <defs>
        <linearGradient id="nearLine" x1="0" x2="1">
          <stop offset="0" stopColor="#1b3a16" />
          <stop offset="0.48" stopColor="#72b51a" />
          <stop offset="1" stopColor="#a4e635" />
        </linearGradient>
      </defs>
      <path d={points} fill="none" stroke="rgba(16,36,14,.11)" strokeWidth="12" strokeLinecap="round" />
      <path className="mini-line__path" d={points} fill="none" stroke="url(#nearLine)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function BarSet() {
  return (
    <div className="bar-set" aria-hidden="true">
      {[38, 52, 47, 64, 72, 86, 78, 92].map((height, index) => (
        <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 0.11}s` }} />
      ))}
    </div>
  )
}

function MexicoMap() {
  return (
    <svg className="mexico-map" viewBox="0 0 420 260" role="img" aria-label="Mapa visual de cobertura NearTec">
      <path d="M34 82 76 58l44 10 36 28 46 6 28 28 42-6 40 22 34 8 30 34-22 22-54-6-48 24-58-6-52 26-60-28-38-46-52-20Z" fill="#dfe8d5" />
      <path d="M55 88 93 76l36 13 31 28 48 8 22 25 39-8 39 20 31 10 20 18-14 12-47-6-45 20-58-3-44 21-46-22-33-42-42-18Z" fill="#fbfff8" />
      <path d="M55 88 93 76l36 13 31 28 48 8 22 25 39-8 39 20" fill="none" stroke="rgba(22,47,18,.2)" strokeWidth="3" strokeLinecap="round" />
      {[[90, 90], [144, 118], [206, 136], [270, 150], [326, 178], [222, 203]].map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="16" fill="#75b91a" opacity=".12" />
          <circle cx={cx} cy={cy} r="5" fill="#5d9715" />
          <circle className="map-pulse" cx={cx} cy={cy} r="22" fill="none" stroke="#72b51a" strokeWidth="1.6" opacity=".34" style={{ animationDelay: `${index * 0.18}s` }} />
        </g>
      ))}
    </svg>
  )
}

export function HeroStackBoard() {
  const chips = ['Web', 'CRM', 'POS', 'CN7', 'Hosting', 'Correo']

  return (
    <div className="hero-board" aria-label="Panel visual NearTec">
      <div className="hero-board__depth" />
      <div className="hero-board__rails" />

      <article className="dashboard-main">
        <div className="dash-head">
          <div>
            <span>Command center</span>
            <b>Operación conectada</b>
          </div>
          <div className="dash-tabs">
            <span>Leads</span>
            <span>Ventas</span>
            <span>Nube</span>
          </div>
        </div>

        <strong>
          Stack NearTec <small>en línea</small>
        </strong>
        <MiniLine />

        <div className="dash-grid">
          <div>
            <span>Servicios activos</span>
            <div className="donut" />
          </div>
          <div>
            <span>Cobertura operativa</span>
            <MexicoMap />
          </div>
        </div>
      </article>

      <div className="hero-chip-cloud">
        {chips.map((chip) => (
          <span key={chip}>{chip}</span>
        ))}
      </div>

      <article className="metric-card card-a">
        <span>Captación</span>
        <b>Web</b>
        <em>Landing + CTA</em>
      </article>
      <article className="metric-card card-b">
        <span>Seguimiento</span>
        <b>CRM</b>
        <em>Leads ordenados</em>
      </article>
      <article className="metric-card card-c">
        <span>Operación</span>
        <b>POS</b>
        <em>Ventas e inventario</em>
      </article>
      <article className="metric-card card-d">
        <span>Continuidad</span>
        <b>CN7</b>
        <em>Nube + respaldo</em>
      </article>
    </div>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell kicker="Arquitectura" title="Stack conectado" className="platform-board">
      <div className="core-orb">
        <span>NearTec</span>
        <b>Technology near you</b>
      </div>
      {['Web', 'CRM', 'POS', 'CN7', 'Hosting', 'Correo'].map((item, index) => (
        <div key={item} className={`system-node node-${index + 1}`}>{item}</div>
      ))}
      <div className="signal-lines" />
      <p className="vfx-note">Presencia digital, seguimiento comercial, punto de venta, infraestructura, correo y soporte trabajando como un solo sistema.</p>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  const flows = [
    ['Contacto', 'Web / WhatsApp / formulario'],
    ['Diagnóstico', 'Necesidad, alcance y prioridad'],
    ['Implementación', 'Web, CRM, POS, nube o soporte'],
    ['Continuidad', 'Capacitación, respaldo y seguimiento'],
  ]

  return (
    <VisualShell kicker="Ruta comercial" title="De contacto a solución" className="flow-cinema">
      <div className="flow-steps">
        {flows.map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <b>{title}</b>
            <small>{copy}</small>
          </article>
        ))}
      </div>
      <div className="route-line" />
    </VisualShell>
  )
}

export function AutomationSignalBoard() {
  const rows = [
    ['Web', 'Activo', 'Captación', 'Lead'],
    ['CRM', 'Activo', 'Seguimiento', 'Orden'],
    ['POS', 'Activo', 'Ventas e inventario', 'Control'],
    ['CN7', 'Activo', 'Servidor / respaldo', 'Continuidad'],
    ['Emailing', 'Activo', 'Campañas', 'Reactivación'],
  ]

  return (
    <VisualShell kicker="Módulos" title="Automatización visible" className="signal-board">
      <div className="animated-table" role="table" aria-label="Módulos NearTec">
        <div className="animated-table__head" role="row">
          <span>Módulo</span>
          <span>Estado</span>
          <span>Función</span>
          <span>Resultado</span>
        </div>
        {rows.map(([module, status, functionText, result], index) => (
          <div className="animated-table__row" role="row" key={module} style={{ animationDelay: `${index * 0.1}s` }}>
            <b>{module}</b>
            <em>{status}</em>
            <i><span style={{ width: `${74 + index * 4}%` }} /></i>
            <strong>{result}</strong>
          </div>
        ))}
      </div>
      <div className="signal-summary">
        <div><span>Meta</span><b>Más SQLs</b></div>
        <div><span>Respuesta</span><b>Menos fricción</b></div>
        <div><span>Ruta</span><b>Medible</b></div>
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  return (
    <VisualShell kicker="Precios base" title="Rangos documentados" className="priced-board">
      <div className="price-pulse-grid">
        {[
          ['CompuNegocio', '$350–$450', 'MXN / mes por estación'],
          ['Implementación', '$1,500', 'MXN base'],
          ['Soporte', '$499', 'MXN / hora'],
          ['CN7', '$99', 'USD / mes desde'],
        ].map(([title, price, caption], index) => (
          <article key={title} style={{ animationDelay: `${index * 0.12}s` }}>
            <span>{title}</span>
            <b>{price}</b>
            <small>{caption}</small>
            <BarSet />
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function ResourcePulsePanel() {
  return (
    <VisualShell kicker="Diagnóstico" title="Dónde se fuga la venta" className="resource-pulse">
      <div className="pulse-grid">
        {[
          ['Sitio web', 'No convierte contactos'],
          ['CRM', 'Los leads se enfrían'],
          ['Infraestructura', 'Caídas, correo o respaldos débiles'],
          ['POS', 'Inventario y ventas sin control'],
        ].map(([title, copy], index) => (
          <article key={title} style={{ animationDelay: `${index * 0.15}s` }}>
            <span />
            <b>{title}</b>
            <small>{copy}</small>
          </article>
        ))}
      </div>
      <div className="pulse-ring" />
    </VisualShell>
  )
}

export function WebConversionBoard() {
  return (
    <VisualShell kicker="Web" title="Presencia que vende" className="browser-hero">
      <div className="browser-mockup">
        <div className="browser-top"><span /><span /><span /></div>
        <div className="browser-row featured" />
        <div className="browser-row short" />
        <div className="browser-row" />
        <div className="browser-row short" />
      </div>
    </VisualShell>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <VisualShell kicker="Emailing" title="Comunicación medible" className="emailing-board">
      <MiniLine />
      <div className="signal-summary">
        <div><span>Campañas</span><b>Segmentadas</b></div>
        <div><span>Envíos</span><b>Medibles</b></div>
        <div><span>Ventas</span><b>Seguimiento</b></div>
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell kicker="Infraestructura" title="Nube y continuidad" className="infra-map">
      <MexicoMap />
      <div className="signal-summary">
        <div><span>Hosting</span><b>Estable</b></div>
        <div><span>VPS / FTP</span><b>Escalable</b></div>
        <div><span>Soporte</span><b>Remoto</b></div>
      </div>
    </VisualShell>
  )
}

export function TechCommandCenter() {
  return <HeroStackBoard />
}

export function AutomationRouteBoard() {
  return <AutomationSignalBoard />
}