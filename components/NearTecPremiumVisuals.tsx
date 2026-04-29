import type { ReactNode } from 'react'

type VisualShellProps = {
  kicker: string
  title: string
  children: ReactNode
  className?: string
}

function VisualShell({ kicker, title, children, className = '' }: VisualShellProps) {
  return (
    <div className={`vfx-card ${className}`}>
      <div className="vfx-noise" />
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
  points = 'M0 54 C25 52 28 34 50 37 C69 40 67 22 90 26 C108 30 111 14 134 18 C154 21 160 7 188 10 C205 12 212 2 230 6',
}: {
  points?: string
}) {
  return (
    <svg className="mini-line" viewBox="0 0 230 64" aria-hidden="true">
      <defs>
        <linearGradient id="nearLine" x1="0" x2="1">
          <stop offset="0" stopColor="#5c9d18" />
          <stop offset="1" stopColor="#9be238" />
        </linearGradient>
      </defs>
      <path d={points} fill="none" stroke="url(#nearLine)" strokeWidth="3.2" strokeLinecap="round" />
      <path d={points} fill="none" stroke="#9be238" strokeWidth="9" strokeLinecap="round" opacity=".08" />
    </svg>
  )
}

function BarSet() {
  return (
    <div className="bar-set" aria-hidden="true">
      {[38, 52, 47, 64, 72, 86, 78, 92].map((height, index) => (
        <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 0.12}s` }} />
      ))}
    </div>
  )
}

function MexicoMap() {
  return (
    <svg className="mexico-map" viewBox="0 0 420 260" role="img" aria-label="Mapa visual de cobertura NearTec">
      <path
        d="M34 82 76 58l44 10 36 28 46 6 28 28 42-6 40 22 34 8 30 34-22 22-54-6-48 24-58-6-52 26-60-28-38-46-52-20Z"
        fill="#dfe9d4"
      />
      <path
        d="M55 88 93 76l36 13 31 28 48 8 22 25 39-8 39 20 31 10 20 18-14 12-47-6-45 20-58-3-44 21-46-22-33-42-42-18Z"
        fill="#f8fbf4"
      />
      {[
        [90, 90],
        [144, 118],
        [206, 136],
        [270, 150],
        [326, 178],
        [222, 203],
      ].map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="12" fill="#76b82a" opacity=".12" />
          <circle cx={cx} cy={cy} r="4.5" fill="#6aa51f" />
          <circle
            cx={cx}
            cy={cy}
            r="18"
            fill="none"
            stroke="#8dd12c"
            strokeWidth="1.2"
            opacity=".28"
            className="map-pulse"
            style={{ animationDelay: `${index * 0.18}s` }}
          />
        </g>
      ))}
    </svg>
  )
}

export function HeroStackBoard() {
  return (
    <div className="hero-board" aria-label="Panel visual NearTec">
      <div className="hero-board__halo" />
      <div className="hero-board__circuit" />

      <article className="dashboard-main">
        <div className="dash-head">
          <div>
            <span>Panel demostrativo</span>
            <b>Operación conectada</b>
          </div>
          <div className="dash-tabs">
            <span>Web</span>
            <span>POS</span>
            <span>Nube</span>
          </div>
        </div>

        <strong>
          Stack NearTec <small>activo</small>
        </strong>

        <MiniLine />

        <div className="dash-grid">
          <div>
            <span>Servicios</span>
            <div className="donut" />
          </div>
          <div>
            <span>Cobertura</span>
            <MexicoMap />
          </div>
        </div>
      </article>

      <article className="metric-card floating-card card-a">
        <span>Presencia digital</span>
        <b>Web</b>
        <em>Sitios y landings</em>
        <MiniLine points="M0 48 C18 44 23 30 40 33 C58 36 62 24 78 27 C98 31 104 13 128 17 C152 21 154 7 176 9 C197 11 206 2 230 5" />
      </article>

      <article className="metric-card floating-card card-b">
        <span>Operación</span>
        <b>POS</b>
        <em>CompuNegocio</em>
        <BarSet />
      </article>

      <article className="metric-card floating-card card-c">
        <span>Infraestructura</span>
        <b>CN7</b>
        <em>Cloud y respaldo</em>
        <div className="people-icon">
          <i />
          <i />
          <i />
        </div>
      </article>

      <article className="metric-card floating-card card-d">
        <span>Comunicación</span>
        <b>Emailing</b>
        <em>Campañas medibles</em>
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

      {['Web', 'POS', 'CN7', 'Hosting', 'FTP', 'Correo'].map((item, index) => (
        <div key={item} className={`system-node node-${index + 1}`}>
          {item}
        </div>
      ))}

      <div className="signal-lines" />
      <p className="vfx-note">
        Unimos presencia digital, sistemas de operación, infraestructura, correo, campañas y soporte para que la empresa funcione con orden.
      </p>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  const flows = [
    ['Contacto', 'Sitio web / WhatsApp / formulario'],
    ['Diagnóstico', 'Servicio, alcance y prioridad'],
    ['Implementación', 'Web, POS, nube, correo o soporte'],
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
    ['Web', 'Activo', 'Presencia digital', 'Captación'],
    ['POS', 'Activo', 'Ventas e inventario', 'Operación'],
    ['CN7', 'Activo', 'Servidor / respaldo', 'Continuidad'],
    ['Emailing', 'Activo', 'Campañas', 'Reactivación'],
    ['Soporte', 'Activo', 'Atención remota', 'Confianza'],
  ]

  return (
    <VisualShell kicker="Módulos" title="Tecnología entendible" className="signal-board">
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
            <i>
              <span style={{ width: `${76 + index * 4}%` }} />
            </i>
            <strong>{result}</strong>
          </div>
        ))}
      </div>

      <div className="signal-summary">
        <div>
          <span>Enfoque</span>
          <b>PyMEs</b>
        </div>
        <div>
          <span>Atención</span>
          <b>Remota</b>
        </div>
        <div>
          <span>Ruta</span>
          <b>Integral</b>
        </div>
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  return (
    <VisualShell kicker="Cotización" title="Precios base visibles" className="priced-board">
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
    <VisualShell kicker="Problemas comunes" title="Dónde se rompe la operación" className="resource-pulse">
      <div className="pulse-grid">
        {[
          ['Sitio web', 'No convierte contactos'],
          ['Punto de venta', 'Inventario sin control'],
          ['Infraestructura', 'Caídas, correos o respaldos débiles'],
          ['Campañas', 'Sin seguimiento medible'],
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
    <VisualShell kicker="Web" title="Presencia que convierte" className="browser-hero">
      <div className="browser-mockup">
        <div className="browser-top">
          <span />
          <span />
          <span />
        </div>
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
    <VisualShell kicker="Emailing" title="Comunicación empresarial" className="emailing-board">
      <MiniLine />
      <div className="signal-summary">
        <div>
          <span>Campañas</span>
          <b>Segmentadas</b>
        </div>
        <div>
          <span>Envíos</span>
          <b>Medibles</b>
        </div>
        <div>
          <span>Marca</span>
          <b>Profesional</b>
        </div>
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell kicker="Infraestructura" title="Nube, respaldo y servidores" className="infra-map">
      <MexicoMap />
      <div className="signal-summary">
        <div>
          <span>Hosting</span>
          <b>Seguro</b>
        </div>
        <div>
          <span>VPS / FTP</span>
          <b>Escalable</b>
        </div>
        <div>
          <span>Soporte</span>
          <b>Remoto</b>
        </div>
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