import type { ReactNode } from 'react'

function VisualShell({ kicker, title, children, className = '' }: { kicker: string; title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`vfx-card ${className}`}>
      <div className="vfx-noise" />
      <div className="vfx-head">
        <span>{kicker}</span>
        <b>{title}</b>
      </div>
      {children}
    </div>
  )
}

function MiniLine({ points = 'M0 54 C25 52 28 34 50 37 C69 40 67 22 90 26 C108 30 111 14 134 18 C154 21 160 7 188 10 C205 12 212 2 230 6' }: { points?: string }) {
  return (
    <svg className="mini-line" viewBox="0 0 230 64" aria-hidden="true">
      <defs>
        <linearGradient id="lineGlow" x1="0" x2="1">
          <stop offset="0" stopColor="#5d8f18" />
          <stop offset="1" stopColor="#9bd834" />
        </linearGradient>
      </defs>
      <path d={points} fill="none" stroke="url(#lineGlow)" strokeWidth="3.2" strokeLinecap="round" />
      <path d={points} fill="none" stroke="#9bd834" strokeWidth="9" strokeLinecap="round" opacity=".08" />
    </svg>
  )
}

function BarSet() {
  return (
    <div className="bar-set" aria-hidden="true">
      {[42, 52, 47, 64, 71, 83, 76, 92].map((height, index) => (
        <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 0.12}s` }} />
      ))}
    </div>
  )
}

function MexicoMap() {
  return (
    <svg className="mexico-map" viewBox="0 0 420 260" role="img" aria-label="Mapa de operaciones en México">
      <path d="M34 82 76 58l44 10 36 28 46 6 28 28 42-6 40 22 34 8 30 34-22 22-54-6-48 24-58-6-52 26-60-28-38-46-52-20Z" fill="#dce7d1" opacity=".85" />
      <path d="M55 88 93 76l36 13 31 28 48 8 22 25 39-8 39 20 31 10 20 18-14 12-47-6-45 20-58-3-44 21-46-22-33-42-42-18Z" fill="#f6faf1" opacity=".9" />
      {[
        [88, 91],
        [142, 117],
        [205, 135],
        [271, 150],
        [326, 178],
        [222, 203],
      ].map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="12" fill="#76b82a" opacity=".12" />
          <circle cx={cx} cy={cy} r="4.5" fill="#6aa51f" />
          <circle cx={cx} cy={cy} r="18" fill="none" stroke="#8dd12c" strokeWidth="1.2" opacity=".28" className="map-pulse" style={{ animationDelay: `${index * 0.18}s` }} />
        </g>
      ))}
    </svg>
  )
}

export function HeroStackBoard() {
  return (
    <div className="hero-board" aria-label="Panel visual de NearTec">
      <div className="hero-board__halo" />
      <div className="hero-board__circuit" />

      <article className="metric-card floating-card card-a">
        <span>Ventas hoy</span>
        <b>$128,540</b>
        <em>▲ 18.6%</em>
        <MiniLine points="M0 48 C18 44 23 30 40 33 C58 36 62 24 78 27 C98 31 104 13 128 17 C152 21 154 7 176 9 C197 11 206 2 230 5" />
      </article>

      <article className="dashboard-main">
        <div className="dash-head">
          <div>
            <span>Panel de control</span>
            <b>Ingresos</b>
          </div>
          <div className="dash-tabs"><span>Hoy</span><span>Semana</span><span>Mes</span></div>
        </div>
        <strong>$1,248,750 <small>▲ 24.3%</small></strong>
        <MiniLine />
        <div className="dash-grid">
          <div>
            <span>Canales</span>
            <div className="donut" />
          </div>
          <div>
            <span>Mapa operativo</span>
            <MexicoMap />
          </div>
        </div>
      </article>

      <article className="metric-card floating-card card-b">
        <span>Órdenes</span>
        <b>248</b>
        <em>▲ 12.5%</em>
        <BarSet />
      </article>

      <article className="metric-card floating-card card-c">
        <span>Clientes nuevos</span>
        <b>32</b>
        <em>▲ 8.2%</em>
        <div className="people-icon"><i /><i /><i /></div>
      </article>

      <article className="metric-card floating-card card-d">
        <span>Productos activos</span>
        <b>1,248</b>
        <em>Inventario conectado</em>
      </article>
    </div>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell kicker="Arquitectura" title="Stack conectado" className="platform-board">
      <div className="core-orb">
        <span>NearTec</span>
        <b>Integrador</b>
      </div>
      {['Web', 'POS', 'CN7', 'Correo', 'Emailing', 'Soporte'].map((item, index) => (
        <div key={item} className={`system-node node-${index + 1}`}>
          {item}
        </div>
      ))}
      <div className="signal-lines" />
      <p className="vfx-note">Unimos presencia digital, operación, infraestructura y soporte para que el negocio no dependa de piezas sueltas.</p>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  const flows = [
    ['Lead', 'Formulario / WhatsApp'],
    ['Diagnóstico', 'Prioridad comercial'],
    ['Implementación', 'Web + POS + nube'],
    ['Soporte', 'Continuidad operativa'],
  ]

  return (
    <VisualShell kicker="Flujo NearTec" title="De contacto a operación" className="flow-cinema">
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
    ['Ventas', 'Activo', '95%', '+28%'],
    ['Inventario', 'Activo', '90%', '+22%'],
    ['Clientes', 'Activo', '85%', '+35%'],
    ['Compras', 'Activo', '80%', '+18%'],
    ['Reportes', 'Activo', '100%', '+40%'],
  ]

  return (
    <VisualShell kicker="Decisiones" title="Automatización viva" className="signal-board">
      <div className="animated-table" role="table" aria-label="Módulos automatizados NearTec">
        <div className="animated-table__head" role="row">
          <span>Módulo</span>
          <span>Estado</span>
          <span>Automatización</span>
          <span>Impacto</span>
        </div>
        {rows.map(([module, status, automation, impact], index) => (
          <div className="animated-table__row" role="row" key={module} style={{ animationDelay: `${index * 0.1}s` }}>
            <b>{module}</b>
            <em>{status}</em>
            <i><span style={{ width: automation }} /></i>
            <strong>{impact}</strong>
          </div>
        ))}
      </div>
      <div className="signal-summary">
        <div><span>ROI</span><b>278%</b></div>
        <div><span>Eficiencia</span><b>+42%</b></div>
        <div><span>Ahorro anual</span><b>$1.2M</b></div>
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  return (
    <VisualShell kicker="Precios base" title="Transparencia comercial" className="priced-board">
      <div className="price-pulse-grid">
        {[
          ['CompuNegocio', '$350–$450', 'MXN / mes'],
          ['Implementación', '$1,500', 'MXN'],
          ['Soporte', '$499', 'MXN / h'],
          ['CN7', '$99', 'USD / mes'],
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
    <VisualShell kicker="Dolor operativo" title="Dónde se fuga el crecimiento" className="resource-pulse">
      <div className="pulse-grid">
        {[
          ['Web', 'No convierte'],
          ['WhatsApp', 'Sin seguimiento'],
          ['Inventario', 'Sin claridad'],
          ['Infra', 'Caídas y lentitud'],
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

export function TechCommandCenter() {
  return <HeroStackBoard />
}

export function AutomationRouteBoard() {
  return <AutomationSignalBoard />
}

export function WebConversionBoard() {
  return (
    <VisualShell kicker="Web" title="Conversión clara" className="browser-hero">
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
    <VisualShell kicker="Emailing" title="Campañas medibles" className="emailing-board">
      <MiniLine />
      <div className="signal-summary">
        <div><span>Apertura</span><b>48%</b></div>
        <div><span>Click</span><b>12%</b></div>
        <div><span>Leads</span><b>+31</b></div>
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell kicker="Infraestructura" title="Continuidad operativa" className="infra-map">
      <MexicoMap />
      <div className="signal-summary">
        <div><span>Uptime</span><b>99.9%</b></div>
        <div><span>Backups</span><b>Activo</b></div>
        <div><span>Soporte</span><b>Remoto</b></div>
      </div>
    </VisualShell>
  )
}