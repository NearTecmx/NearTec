export function HeroStackBoard() {
  return (
    <section className="visual-card visual-card--hero">
      <div className="visual-card__header">
        <span className="visual-chip">Base digital</span>
        <span className="visual-chip visual-chip--soft">NearTec stack</span>
      </div>

      <div className="stack-grid">
        <article className="stack-stat stack-stat--highlight">
          <span>Leads activos</span>
          <strong>128</strong>
          <small>Captación + seguimiento</small>
        </article>
        <article className="stack-stat">
          <span>Conversión</span>
          <strong>18.4%</strong>
          <small>Ruta comercial más clara</small>
        </article>
        <article className="stack-stat">
          <span>Demo agendada</span>
          <strong>24</strong>
          <small>Acción siguiente</small>
        </article>
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

export function NearTecFlowMockup() {
  const steps = [
    ['Atracción', 'Te encuentran'],
    ['Filtro', 'Se detecta la necesidad'],
    ['Prioridad', 'Se define urgencia'],
    ['Seguimiento', 'Se atiende por la ruta correcta'],
    ['Propuesta', 'Se aterriza la inversión'],
  ]

  return (
    <section className="visual-card visual-card--light">
      <div className="visual-card__header">
        <span className="visual-chip">Ruta comercial</span>
        <span className="visual-chip visual-chip--soft">Paso a paso</span>
      </div>
      <h3 className="visual-title">Del primer clic a la propuesta.</h3>
      <div className="flow-timeline">
        {steps.map(([title, copy], index) => (
          <article key={title} className="flow-step">
            <span className="flow-step__count">{index + 1}</span>
            <div>
              <strong>{title}</strong>
              <small>{copy}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
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
        {[
          'Captura del lead',
          'Filtro automático',
          'Pase al asesor',
          'Seguimiento y cierre',
        ].map((item, index) => (
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
