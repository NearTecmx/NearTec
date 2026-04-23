import type { ReactNode } from 'react'

function VisualShell({ children, dark = false, tone = 'green' }: { children: ReactNode; dark?: boolean; tone?: 'green' | 'blue' | 'amber' }) {
  return (
    <div className={`ntx-visual ${dark ? 'ntx-visual--dark' : ''} ntx-visual--${tone}`}>
      <span className="ntx-visual__mesh" aria-hidden="true" />
      <div className="ntx-visual__content">{children}</div>
    </div>
  )
}

function StatusDot({ pulse = false }: { pulse?: boolean }) {
  return <span className={`ntx-status-dot ${pulse ? 'is-pulsing' : ''}`} />
}

function MiniBars({ values }: { values: number[] }) {
  return (
    <div className="ntx-bars" aria-hidden="true">
      {values.map((value, index) => (
        <span key={`${value}-${index}`} style={{ height: `${value}%`, animationDelay: `${index * 90}ms` }} />
      ))}
    </div>
  )
}

export function HeroStackBoard() {
  const modules = [
    ['Sitio web', 'Explica y convierte'],
    ['CRM', 'Filtra leads'],
    ['CompuNegocio', 'Control diario'],
    ['Nube', 'Continuidad'],
  ]

  return (
    <VisualShell>
      <div className="ntx-hero-board">
        <div className="ntx-visual__head">
          <div>
            <p className="ntx-kicker">Panel NearTec</p>
            <h3>Captación, seguimiento y operación conectados.</h3>
          </div>
          <span className="ntx-live-chip"><StatusDot pulse /> Activo</span>
        </div>

        <div className="ntx-module-grid">
          {modules.map(([title, copy]) => (
            <article key={title} className="ntx-module-card">
              <StatusDot />
              <strong>{title}</strong>
              <span>{copy}</span>
            </article>
          ))}
        </div>

        <div className="ntx-hero-graph">
          <svg viewBox="0 0 420 170" role="img" aria-label="Crecimiento de oportunidades">
            <defs>
              <linearGradient id="ntxHeroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(154,196,59,.42)" />
                <stop offset="100%" stopColor="rgba(154,196,59,.04)" />
              </linearGradient>
            </defs>
            {[36, 68, 100, 132].map((y) => <line key={y} x1="22" x2="398" y1={y} y2={y} />)}
            <path d="M24 140 C70 112 98 118 134 100 C174 80 202 96 236 76 C280 50 320 62 396 30 L396 156 L24 156 Z" fill="url(#ntxHeroArea)" />
            <path className="ntx-draw-line" d="M24 140 C70 112 98 118 134 100 C174 80 202 96 236 76 C280 50 320 62 396 30" />
            {[24, 134, 236, 396].map((x, i) => <circle key={x} cx={x} cy={[140,100,76,30][i]} r="6" className="ntx-graph-dot" />)}
          </svg>
        </div>
      </div>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  const steps = [
    ['Atracción', 'Te encuentran'],
    ['Filtro', 'Detectamos necesidad'],
    ['Prioridad', 'Definimos urgencia'],
    ['Seguimiento', 'Atención correcta'],
    ['Propuesta', 'Rango y siguiente paso'],
  ]

  return (
    <VisualShell dark>
      <p className="ntx-kicker ntx-kicker--dark">Ruta comercial</p>
      <h3 className="ntx-dark-title">Del primer clic a la propuesta.</h3>
      <div className="ntx-timeline">
        {steps.map(([title, copy], index) => (
          <article key={title} className="ntx-timeline__item">
            <span>{index + 1}</span>
            <div>
              <strong>{title}</strong>
              <small>{copy}</small>
            </div>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  return (
    <VisualShell tone="blue">
      <p className="ntx-kicker">Indicadores comerciales</p>
      <h3>Señales rápidas para decidir mejor.</h3>
      <div className="ntx-metrics-grid">
        {[
          ['Leads', '1,248'],
          ['Demos', '76'],
          ['Score', '72/100'],
          ['Oportunidad', '$1.24M'],
        ].map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
      <div className="ntx-bars-card">
        <MiniBars values={[24, 36, 28, 54, 72, 64, 90]} />
      </div>
    </VisualShell>
  )
}

export function AutomationSignalBoard() {
  return (
    <VisualShell>
      <p className="ntx-kicker">Automatización</p>
      <h3>El lead entra, se filtra y llega a la ruta correcta.</h3>
      <div className="ntx-funnel-grid">
        {[
          ['Nuevos', '128'],
          ['Calificados', '76'],
          ['Demo', '24'],
          ['Cierre', '9'],
        ].map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
      <div className="ntx-flow-compact">
        {['Captura', 'Filtro', 'Asesor', 'Cierre'].map((item, index) => (
          <span key={item}><b>{index + 1}</b>{item}</span>
        ))}
      </div>
    </VisualShell>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell>
      <p className="ntx-kicker">Arquitectura NearTec</p>
      <h3>Presencia, seguimiento, operación e infraestructura en una misma base.</h3>
      <div className="ntx-orbit-map" aria-label="Mapa de ecosistema NearTec">
        {['Web', 'CRM', 'POS', 'Cloud', 'iTimbre'].map((item, index) => <span key={item} className={`node node-${index}`}>{item}</span>)}
        <svg viewBox="0 0 420 260" aria-hidden="true">
          <path d="M60 140 C110 34 282 32 356 122 C294 230 118 236 60 140Z" />
          <path className="route" d="M82 132 L202 66 L340 124 L238 206 L112 188 Z" />
        </svg>
      </div>
    </VisualShell>
  )
}

export function ResourcePulsePanel() {
  return (
    <VisualShell dark tone="amber">
      <p className="ntx-kicker ntx-kicker--dark">Buyer claro</p>
      <h3 className="ntx-dark-title">Para empresas que necesitan dejar de operar con piezas sueltas.</h3>
      <div className="ntx-resource-list">
        {['Dueño o dirección', 'Operaciones', 'Comercial y marketing', 'Retail o multisucursal'].map((item) => (
          <span key={item}><StatusDot />{item}</span>
        ))}
      </div>
    </VisualShell>
  )
}

export function WebConversionBoard() {
  return (
    <VisualShell>
      <p className="ntx-kicker">Sitio web</p>
      <h3>Tu oferta se entiende rápido y el contacto queda claro.</h3>
      <div className="ntx-screen-stack">
        <div className="screen big" />
        <div className="screen medium" />
        <div className="screen small" />
      </div>
    </VisualShell>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <VisualShell tone="amber">
      <p className="ntx-kicker">Emailing</p>
      <h3>Segmenta, mide y recupera oportunidades.</h3>
      <div className="ntx-mail-board">
        {['Newsletter', 'Promoción', 'Seguimiento'].map((item, index) => (
          <span key={item} style={{ animationDelay: `${index * 140}ms` }}>{item}</span>
        ))}
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell dark>
      <p className="ntx-kicker ntx-kicker--dark">Infraestructura</p>
      <h3 className="ntx-dark-title">Hosting, VPS, correo y continuidad.</h3>
      <div className="ntx-server-stack">
        {['Hosting', 'VPS', 'Correo', 'Backup'].map((item) => <span key={item}><StatusDot pulse />{item}</span>)}
      </div>
    </VisualShell>
  )
}
