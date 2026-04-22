function StepNode({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="nt-step-visual-card">
      <div className="nt-step-visual-card__num">{number}</div>
      <strong>{title}</strong>
      <span>{body}</span>
    </div>
  )
}

function MiniLineChart() {
  return (
    <svg viewBox="0 0 320 120" className="nt-line-chart" aria-hidden="true">
      <defs>
        <linearGradient id="ntLineFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(12,75,255,0.32)" />
          <stop offset="100%" stopColor="rgba(12,75,255,0)" />
        </linearGradient>
      </defs>
      <path d="M10 104 L65 82 L110 90 L155 61 L210 66 L250 38 L310 14" fill="none" stroke="#0C4BFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 104 L65 82 L110 90 L155 61 L210 66 L250 38 L310 14 L310 118 L10 118 Z" fill="url(#ntLineFill)" />
      <circle cx="310" cy="14" r="7" fill="#18D1C3" />
    </svg>
  )
}

export function HeroStackBoard() {
  return (
    <div className="nt-dashboard-board">
      <div className="nt-dashboard-board__shell">
        <aside className="nt-dashboard-board__sidebar">
          <div className="nt-dashboard-board__brand">NearTec</div>
          {['Resumen', 'CRM', 'Automatización', 'Emailing', 'Infraestructura', 'CompuNegocio', 'Fiscal'].map((item, index) => (
            <span key={item} className={`nt-dashboard-board__nav ${index === 0 ? 'is-active' : ''}`}>
              {item}
            </span>
          ))}
        </aside>

        <div className="nt-dashboard-board__main">
          <div className="nt-dashboard-board__kpis">
            <div className="nt-dashboard-board__kpi">
              <small>Ventas del mes</small>
              <strong>$1,248,000</strong>
              <span>+18%</span>
            </div>
            <div className="nt-dashboard-board__kpi">
              <small>Leads nuevos</small>
              <strong>356</strong>
              <span>+22%</span>
            </div>
            <div className="nt-dashboard-board__kpi">
              <small>Órdenes</small>
              <strong>124</strong>
              <span>+14%</span>
            </div>
          </div>

          <div className="nt-dashboard-board__chart-card">
            <div className="nt-dashboard-board__chart-head">
              <strong>Pipeline + resultado</strong>
              <span>Actualizado</span>
            </div>
            <MiniLineChart />
          </div>

          <div className="nt-dashboard-board__bottom">
            <div className="nt-dashboard-board__mini-card">
              <strong>Embudo</strong>
              <ul>
                <li><span>Nuevo lead</span><b>356</b></li>
                <li><span>Contacto</span><b>210</b></li>
                <li><span>Propuesta</span><b>96</b></li>
                <li><span>Cierre</span><b>45</b></li>
              </ul>
            </div>
            <div className="nt-dashboard-board__mini-card">
              <strong>Automatizaciones</strong>
              <ul>
                <li><span>Email de bienvenida</span><b>OK</b></li>
                <li><span>Lead scoring</span><b>Activo</b></li>
                <li><span>Agenda comercial</span><b>3</b></li>
                <li><span>Remarketing</span><b>Listo</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LiveMetricBars() {
  return (
    <div className="nt-kpi-stack-board">
      <div className="nt-kpi-stack-board__head">
        <strong>Pipeline comercial</strong>
        <span>Este mes</span>
      </div>
      <div className="nt-kpi-stack-board__grid">
        {[
          ['Leads', '1,248', '+18%'],
          ['Oportunidades', '356', '+22%'],
          ['Negociación', '124', '+15%'],
          ['Ganadas', '76', '+28%'],
        ].map(([label, value, delta]) => (
          <div key={label} className="nt-kpi-stack-board__tile">
            <small>{label}</small>
            <strong>{value}</strong>
            <span>{delta}</span>
          </div>
        ))}
      </div>
      <div className="nt-kpi-stack-board__chart">
        <MiniLineChart />
      </div>
    </div>
  )
}

export function NearTecFlowMockup() {
  return (
    <div className="nt-flow-board">
      <div className="nt-flow-board__head">
        <strong>Máquina de seguimiento</strong>
        <span>Mobile + Web</span>
      </div>
      <div className="nt-flow-board__steps">
        <StepNode number="1" title="Captura" body="Formularios y entradas claras" />
        <StepNode number="2" title="Clasifica" body="Scoring por intención" />
        <StepNode number="3" title="Asigna" body="Ruta correcta al equipo" />
        <StepNode number="4" title="Activa" body="Email, WhatsApp y agenda" />
        <StepNode number="5" title="Mide" body="KPIs y reactivación" />
      </div>
    </div>
  )
}

export function PlatformDeepBoard() {
  const nodes = [
    ['Presencia digital', 'top'],
    ['Captación', 'right-top'],
    ['Seguimiento', 'right-bottom'],
    ['Operación', 'bottom'],
    ['Infraestructura', 'left-bottom'],
    ['Facturación', 'left-top'],
  ] as const

  return (
    <div className="nt-ecosystem-board">
      <div className="nt-ecosystem-board__center">NearTec</div>
      {nodes.map(([label, pos]) => (
        <div key={label} className={`nt-ecosystem-board__node nt-ecosystem-board__node--${pos}`}>
          {label}
        </div>
      ))}
      <div className="nt-ecosystem-board__ring nt-ecosystem-board__ring--one" />
      <div className="nt-ecosystem-board__ring nt-ecosystem-board__ring--two" />
    </div>
  )
}

export function ResourcePulsePanel() {
  return (
    <div className="nt-architecture-board">
      <div className="nt-architecture-board__col">
        <strong>Integraciones</strong>
        <ul>
          <li>Meta Ads</li>
          <li>Google Ads</li>
          <li>Slack</li>
          <li>Stripe</li>
          <li>CONTPAQi</li>
        </ul>
      </div>
      <div className="nt-architecture-board__col">
        <strong>Operación</strong>
        <ul>
          <li>CRM</li>
          <li>Automatización</li>
          <li>Cloud</li>
          <li>CompuNegocio</li>
          <li>Fiscal</li>
        </ul>
      </div>
      <div className="nt-architecture-board__chart">
        <MiniLineChart />
      </div>
    </div>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <div className="nt-infra-board">
      <div className="nt-infra-board__head">
        <strong>Infraestructura cloud</strong>
        <span>99.9% base operativa</span>
      </div>
      <div className="nt-infra-board__grid">
        <div className="nt-infra-board__card"><small>Hosting</small><strong>Activo</strong></div>
        <div className="nt-infra-board__card"><small>Correo</small><strong>Sincronizado</strong></div>
        <div className="nt-infra-board__card"><small>Backups</small><strong>Automáticos</strong></div>
        <div className="nt-infra-board__card"><small>CN7</small><strong>Nube</strong></div>
      </div>
      <div className="nt-infra-board__bars">
        <span /><span /><span /><span /><span /><span />
      </div>
    </div>
  )
}

export function WebConversionBoard() {
  return (
    <div className="nt-browser-board">
      <div className="nt-browser-board__top"><span /><span /><span /></div>
      <div className="nt-browser-board__hero">
        <div>
          <small>Landing / Ecommerce</small>
          <strong>Explica, convierte y acompaña la compra</strong>
        </div>
        <div className="nt-browser-board__badge">+31% CTR</div>
      </div>
      <div className="nt-browser-board__grid">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <div className="nt-email-board">
      <div className="nt-email-board__header">
        <strong>Emailing</strong>
        <span>Secuencias activas</span>
      </div>
      <div className="nt-email-board__stats">
        <div><small>Apertura</small><strong>42%</strong></div>
        <div><small>CTR</small><strong>11%</strong></div>
        <div><small>Respuesta</small><strong>8%</strong></div>
      </div>
      <div className="nt-email-board__timeline"><span /><span /><span /><span /><span /></div>
    </div>
  )
}
