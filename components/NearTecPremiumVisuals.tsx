const metricCards = [
  ['Leads activos', '128', 'Captación + seguimiento'],
  ['Conversión', '18.4%', 'Ruta comercial más clara'],
  ['Demo agendada', '24', 'Acción siguiente'],
]

const platformNodes = ['Sitio web', 'CRM', 'CompuNegocio', 'Nube', 'Emailing', 'iTimbre']

const routeSteps = [
  { number: '1', title: 'Atracción', desc: 'Te encuentran por web, redes, campañas o recomendación.' },
  { number: '2', title: 'Filtro', desc: 'Se entiende necesidad, servicio y nivel de urgencia.' },
  { number: '3', title: 'Prioridad', desc: 'Se mide intención para saber quién avanza primero.' },
  { number: '4', title: 'Seguimiento', desc: 'El equipo recibe contexto y una ruta clara.' },
  { number: '5', title: 'Propuesta', desc: 'Se cotiza con menos fricción y más precisión.' },
]

export function HeroStackBoard() {
  return (
    <section className="visual-card visual-card--hero">
      <div className="visual-card__header">
        <span className="visual-chip">Base digital</span>
        <span className="visual-chip visual-chip--soft">NearTec stack</span>
      </div>

      <div className="stack-grid">
        {metricCards.map(([label, value, copy], index) => (
          <article key={label} className={`stack-stat ${index === 0 ? 'stack-stat--highlight' : ''}`}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{copy}</small>
          </article>
        ))}

        <article className="stack-stat stack-stat--accent">
          <span>Servicios conectados</span>
          <ul>
            <li>Sitio web</li>
            <li>CRM</li>
            <li>CompuNegocio</li>
            <li>Nube</li>
          </ul>
        </article>
      </div>

      <div className="stack-wave" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  )
}

export function AutomationRouteBoard() {
  return (
    <section className="visual-card visual-card--dark automation-route-board">
      <div className="visual-card__header automation-route-board__header">
        <span className="visual-chip visual-chip--dark">Ruta comercial</span>
        <span className="visual-chip visual-chip--dark-soft">De visita a oportunidad</span>
      </div>

      <div className="automation-route-grid" aria-label="Ruta comercial automatizada">
        {routeSteps.map((step) => (
          <article key={step.number} className="automation-route-step">
            <span className="automation-route-step__number">{step.number}</span>
            <strong>{step.title}</strong>
            <small>{step.desc}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

export function NearTecFlowMockup() {
  return <AutomationRouteBoard />
}

export function LiveMetricBars() {
  return (
    <section className="visual-card visual-card--dark">
      <div className="visual-card__header">
        <span className="visual-chip visual-chip--dark">Indicadores</span>
        <span className="visual-chip visual-chip--dark-soft">Pipeline</span>
      </div>
      <h3 className="visual-title visual-title--dark">Comportamiento, prioridad y avance comercial.</h3>
      <div className="metric-grid">
        <article>
          <span>Leads</span>
          <strong>1,248</strong>
        </article>
        <article>
          <span>Demos</span>
          <strong>76</strong>
        </article>
        <article>
          <span>Score promedio</span>
          <strong>72/100</strong>
        </article>
        <article>
          <span>Cierre estimado</span>
          <strong>$1.24M</strong>
        </article>
      </div>
      <div className="metric-chart" aria-hidden="true">
        <svg viewBox="0 0 520 220" className="metric-chart__svg">
          <defs>
            <linearGradient id="ntArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(154,196,59,0.38)" />
              <stop offset="100%" stopColor="rgba(154,196,59,0.02)" />
            </linearGradient>
          </defs>
          <path d="M20 180 C90 145, 110 150, 150 138 S260 78, 320 92 S405 130, 500 52" fill="none" stroke="#9ac43b" strokeWidth="10" strokeLinecap="round" className="draw-path" />
          <path d="M20 180 C90 145, 110 150, 150 138 S260 78, 320 92 S405 130, 500 52 L500 220 L20 220 Z" fill="url(#ntArea)" opacity="0.9" />
        </svg>
      </div>
    </section>
  )
}

export function AutomationSignalBoard() {
  return (
    <section className="visual-card visual-card--light-soft">
      <div className="visual-card__header">
        <span className="visual-chip">Automatización</span>
        <span className="visual-chip visual-chip--soft">Filtrado y respuesta</span>
      </div>
      <h3 className="visual-title">Menos trabajo manual. Más respuesta comercial.</h3>
      <div className="automation-list">
        {['Captura del lead', 'Filtro automático', 'Pase al asesor', 'Seguimiento y cierre'].map((item, index) => (
          <article key={item} className="automation-item">
            <span>{index + 1}</span>
            <strong>{item}</strong>
          </article>
        ))}
      </div>
      <div className="network-map" aria-hidden="true">
        <span className="node node--a" />
        <span className="node node--b" />
        <span className="node node--c" />
        <span className="node node--d" />
        <span className="node node--e" />
        <svg viewBox="0 0 360 180" className="network-map__svg">
          <path d="M58 100 L148 42 L255 60 L306 110 L180 142 Z" className="network-map__line network-map__line--solid" />
          <path d="M58 100 L255 60 L306 110 L118 136 Z" className="network-map__line network-map__line--dash" />
        </svg>
      </div>
    </section>
  )
}

export function PlatformDeepBoard() {
  return (
    <section className="visual-card visual-card--dark">
      <div className="visual-card__header">
        <span className="visual-chip visual-chip--dark">Plataforma</span>
        <span className="visual-chip visual-chip--dark-soft">Ecosistema</span>
      </div>
      <h3 className="visual-title visual-title--dark">Una arquitectura que conecta captación, operación y continuidad.</h3>
      <div className="network-map" aria-hidden="true">
        <span className="node node--a" />
        <span className="node node--b" />
        <span className="node node--c" />
        <span className="node node--d" />
        <span className="node node--e" />
        <svg viewBox="0 0 360 180" className="network-map__svg">
          <path d="M58 100 L148 42 L255 60 L306 110 L180 142 Z" className="network-map__line network-map__line--solid" />
          <path d="M148 42 L255 60 L180 142 L58 100 Z" className="network-map__line network-map__line--dash" />
        </svg>
      </div>
    </section>
  )
}

export function ResourcePulsePanel() {
  return (
    <section className="visual-card visual-card--light-soft">
      <div className="visual-card__header">
        <span className="visual-chip">Recursos</span>
        <span className="visual-chip visual-chip--soft">Señal pública</span>
      </div>
      <h3 className="visual-title">Contenido y autoridad para atraer mejores oportunidades.</h3>
      <div className="stack-grid">
        <article className="stack-stat">
          <span>Blog</span>
          <strong>Actual</strong>
          <small>Noticias, guías y comparativas.</small>
        </article>
        <article className="stack-stat">
          <span>Casos</span>
          <strong>Reales</strong>
          <small>Prueba social y credibilidad.</small>
        </article>
      </div>
    </section>
  )
}

export function WebConversionBoard() {
  return (
    <section className="visual-card visual-card--light">
      <div className="visual-card__header">
        <span className="visual-chip">Sitio web</span>
        <span className="visual-chip visual-chip--soft">Conversión</span>
      </div>
      <h3 className="visual-title">Una web que explica mejor y mueve más contacto.</h3>
      <div className="stack-wave" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <section className="visual-card visual-card--dark">
      <div className="visual-card__header">
        <span className="visual-chip visual-chip--dark">Emailing</span>
        <span className="visual-chip visual-chip--dark-soft">Continuidad</span>
      </div>
      <h3 className="visual-title visual-title--dark">Secuencias que siguen la conversación y no dejan caer el lead.</h3>
      <div className="metric-grid">
        <article>
          <span>Apertura</span>
          <strong>42%</strong>
        </article>
        <article>
          <span>Respuesta</span>
          <strong>18%</strong>
        </article>
      </div>
    </section>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <section className="visual-card visual-card--light-soft">
      <div className="visual-card__header">
        <span className="visual-chip">Infraestructura</span>
        <span className="visual-chip visual-chip--soft">Continuidad</span>
      </div>
      <h3 className="visual-title">Hosting, correo, VPS y nube sin volver frágil la operación.</h3>
      <div className="stack-grid">
        <article className="stack-stat">
          <span>Correo</span>
          <strong>Activo</strong>
        </article>
        <article className="stack-stat">
          <span>Respaldo</span>
          <strong>Listo</strong>
        </article>
      </div>
    </section>
  )
}
