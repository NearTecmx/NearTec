function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <article className="ntv-metric-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{note}</span>
    </article>
  )
}

export function HeroStackBoard() {
  return (
    <section className="ntv-board ntv-board--hero">
      <div className="ntv-board__grid" />
      <div className="ntv-board__glow ntv-board__glow--one" />
      <div className="ntv-board__glow ntv-board__glow--two" />

      <div className="ntv-hero-top">
        <span className="ntv-chip">NearTec Stack</span>
        <span className="ntv-chip ntv-chip--dark">Live</span>
      </div>

      <div className="ntv-hero-shell">
        <div className="ntv-stack-card ntv-stack-card--main">
          <p>Base conectada</p>
          <h3>Captación, seguimiento, operación y nube en una sola ruta.</h3>
          <div className="ntv-mini-flow">
            <span>Web</span>
            <span>CRM</span>
            <span>POS</span>
            <span>Cloud</span>
          </div>
        </div>

        <div className="ntv-stack-side">
          <MetricCard label="Leads activos" value="128" note="Filtrados y priorizados" />
          <MetricCard label="Respuesta" value="&lt; 10 min" note="Ruta comercial más clara" />
        </div>
      </div>

      <div className="ntv-module-row">
        {['Sitio web', 'CRM', 'CompuNegocio', 'Hosting', 'CN7', 'iTimbre'].map((item, index) => (
          <div key={item} className={`ntv-module ntv-module--${(index % 3) + 1}`}>
            <small>Módulo</small>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export function NearTecFlowMockup() {
  return (
    <section className="ntv-board ntv-board--light">
      <div className="ntv-board__head">
        <span className="ntv-chip">Ruta comercial</span>
        <h3>Del primer clic a la propuesta</h3>
      </div>

      <div className="ntv-timeline">
        {[
          ['Atracción', 'Te encuentran'],
          ['Filtro', 'Se detecta la necesidad'],
          ['Prioridad', 'Se define urgencia'],
          ['Seguimiento', 'Se atiende por la ruta correcta'],
          ['Propuesta', 'Ya llega con más contexto'],
        ].map(([title, copy], index) => (
          <article key={title} className="ntv-timeline-card">
            <span>{index + 1}</span>
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

export function AutomationSignalBoard() {
  return (
    <section className="ntv-board ntv-board--dark">
      <div className="ntv-board__head ntv-board__head--dark">
        <span className="ntv-chip ntv-chip--green">Indicadores</span>
        <h3>Comportamiento, prioridad y avance del pipeline.</h3>
      </div>

      <div className="ntv-stats-grid">
        <MetricCard label="Leads" value="1,248" note="Entrada total" />
        <MetricCard label="Demo agendada" value="76" note="Interés validado" />
        <MetricCard label="Score promedio" value="72/100" note="Filtrado útil" />
        <MetricCard label="Cierre estimado" value="$1.24M" note="Referencia visual" />
      </div>

      <div className="ntv-chart-card">
        <p>Señal del embudo</p>
        <div className="ntv-area-chart">
          <span className="ntv-area-chart__grid" />
          <svg viewBox="0 0 420 170" aria-hidden="true">
            <defs>
              <linearGradient id="ntvArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(167, 210, 67, 0.35)" />
                <stop offset="100%" stopColor="rgba(167, 210, 67, 0.02)" />
              </linearGradient>
            </defs>
            <path d="M20 132 C 70 110, 120 122, 165 106 S 270 55, 340 80 S 390 60, 400 34 L 400 150 L 20 150 Z" fill="url(#ntvArea)" />
            <path d="M20 132 C 70 110, 120 122, 165 106 S 270 55, 340 80 S 390 60, 400 34" stroke="#a7d243" strokeWidth="5" fill="none" strokeLinecap="round" className="ntv-stroke-draw" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export function LiveMetricBars() {
  return (
    <section className="ntv-board ntv-board--light">
      <div className="ntv-board__head">
        <span className="ntv-chip">Actividad</span>
        <h3>Un mapa distinto para ver operación y señal comercial.</h3>
      </div>

      <div className="ntv-map-card">
        <div className="ntv-map-card__canvas">
          <span className="ntv-node ntv-node--1" />
          <span className="ntv-node ntv-node--2" />
          <span className="ntv-node ntv-node--3" />
          <span className="ntv-node ntv-node--4" />
          <svg viewBox="0 0 420 220" aria-hidden="true">
            <path d="M80 150 C 120 70, 240 40, 340 126" className="ntv-map-line ntv-map-line--base" />
            <path d="M120 168 L 190 90 L 330 132 L 210 180 Z" className="ntv-map-line ntv-map-line--accent" />
          </svg>
        </div>
      </div>

      <div className="ntv-bars-card">
        <p>Intención de compra</p>
        <div className="ntv-bars-row">
          {[28, 42, 36, 58, 49, 76].map((height, index) => (
            <span key={index} style={{ height }} />
          ))}
        </div>
        <div className="ntv-bars-copy">
          <span>Listo para hablar</span>
          <span>Listo para cotizar</span>
          <span>Requiere propuesta</span>
        </div>
      </div>
    </section>
  )
}

export function PlatformDeepBoard() {
  return (
    <section className="ntv-board ntv-board--hero ntv-board--dense">
      <div className="ntv-board__head ntv-board__head--dark">
        <span className="ntv-chip ntv-chip--green">Arquitectura</span>
        <h3>Presencia, operación, automatización e infraestructura conectadas.</h3>
      </div>

      <div className="ntv-platform-grid">
        {[
          'Sitio y ecommerce',
          'CRM y seguimiento',
          'CompuNegocio',
          'Hosting y VPS',
          'CN7 y respaldo',
          'Conexión fiscal',
        ].map((item) => (
          <article key={item}>
            <small>Capa</small>
            <strong>{item}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ResourcePulsePanel() {
  return (
    <section className="ntv-board ntv-board--light ntv-board--resource">
      <div className="ntv-board__head">
        <span className="ntv-chip">Bundles</span>
        <h3>NearTec vende mejor cuando entra por la necesidad correcta.</h3>
      </div>
      <div className="ntv-pulse-grid">
        {[
          ['Presencia + seguimiento', 'Sitio, formulario, CRM y agenda.'],
          ['POS + operación', 'CompuNegocio, timbres y control diario.'],
          ['Infraestructura + nube', 'Hosting, VPS, correo y continuidad.'],
          ['Emailing + nurture', 'Campañas, newsletters y continuidad comercial.'],
        ].map(([title, copy]) => (
          <article key={title} className="ntv-pulse-card">
            <strong>{title}</strong>
            <span>{copy}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export function WebConversionBoard() {
  return (
    <section className="ntv-board ntv-board--light">
      <div className="ntv-board__head">
        <span className="ntv-chip">Web</span>
        <h3>Una estructura clara para explicar mejor lo que vendes.</h3>
      </div>
      <div className="ntv-device-grid">
        <div className="ntv-screen ntv-screen--desktop" />
        <div className="ntv-screen ntv-screen--mobile" />
      </div>
    </section>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <section className="ntv-board ntv-board--light">
      <div className="ntv-board__head">
        <span className="ntv-chip">Emailing</span>
        <h3>Campañas, audiencias y continuidad comercial.</h3>
      </div>
      <div className="ntv-envelope-card">
        <div className="ntv-envelope-card__bars">
          {[45, 68, 54, 78, 90].map((height, index) => (
            <span key={index} style={{ height }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <section className="ntv-board ntv-board--hero ntv-board--dense">
      <div className="ntv-board__head ntv-board__head--dark">
        <span className="ntv-chip ntv-chip--green">Infraestructura</span>
        <h3>Continuidad, rendimiento y respaldo sin ruido visual.</h3>
      </div>
      <div className="ntv-server-grid">
        <article>
          <small>Uptime</small>
          <strong>99.9%</strong>
        </article>
        <article>
          <small>CN7</small>
          <strong>Backup / Hosted</strong>
        </article>
        <article>
          <small>Correo</small>
          <strong>Corporativo</strong>
        </article>
      </div>
    </section>
  )
}
