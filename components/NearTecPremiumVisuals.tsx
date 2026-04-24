type Step = {
  number: string
  title: string
  desc: string
}

const automationSteps: Step[] = [
  {
    number: '1',
    title: 'Atracción',
    desc: 'Te encuentran por sitio, campañas, contenido o recomendación.',
  },
  {
    number: '2',
    title: 'Filtro',
    desc: 'Se entiende la necesidad y se separa lo urgente de lo consultivo.',
  },
  {
    number: '3',
    title: 'Prioridad',
    desc: 'Se mide intención, valor, urgencia y siguiente mejor paso.',
  },
  {
    number: '4',
    title: 'Seguimiento',
    desc: 'Se atiende con contexto útil y una ruta comercial más clara.',
  },
  {
    number: '5',
    title: 'Propuesta',
    desc: 'Se cotiza mejor, con orden comercial y menos fricción.',
  },
]

export function AutomationRouteBoard() {
  return (
    <section className="visual-card automation-board">
      <div className="automation-board-head">
        <span className="visual-kicker">Ruta comercial</span>
        <h3>De visita a oportunidad</h3>
      </div>

      <div className="automation-steps-scroll">
        <div className="automation-steps-grid">
          {automationSteps.map((step) => (
            <article key={step.number} className="automation-step-card">
              <div className="automation-step-number">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Si ya exportas otros visuales, déjalos aquí abajo tal como los tengas.
   Solo asegúrate de conservar los exports existentes. */

export function LiveMetricBars() {
  return (
    <section className="visual-card metric-bars-board">
      <div className="metric-bars-head">
        <span className="visual-kicker">Embudo comercial</span>
        <h3>Cómo entra, se filtra y avanza un lead</h3>
      </div>

      <div className="metric-bars-grid">
        <div className="metric-box">
          <span>Nuevos</span>
          <strong>128</strong>
        </div>
        <div className="metric-box">
          <span>Calificados</span>
          <strong>76</strong>
        </div>
        <div className="metric-box">
          <span>Demo</span>
          <strong>24</strong>
        </div>
        <div className="metric-box">
          <span>Cierre</span>
          <strong>9</strong>
        </div>
      </div>

      <div className="bar-cluster" aria-hidden="true">
        <span style={{ height: '26px' }} />
        <span style={{ height: '44px' }} />
        <span style={{ height: '60px' }} />
        <span style={{ height: '76px' }} />
        <span style={{ height: '92px' }} />
      </div>
    </section>
  )
}

export function WebConversionBoard() {
  return (
    <section className="visual-card simple-visual-board">
      <div className="simple-visual-head">
        <span className="visual-kicker">Diseño web</span>
        <h3>Experiencia pensada para convertir</h3>
      </div>

      <div className="simple-visual-list">
        <div className="simple-visual-item">
          <strong>Claridad</strong>
          <span>Mensaje, estructura y CTA bien definidos.</span>
        </div>
        <div className="simple-visual-item">
          <strong>Conversión</strong>
          <span>Menos fricción y mejor intención de contacto.</span>
        </div>
        <div className="simple-visual-item">
          <strong>Seguimiento</strong>
          <span>Integración con formularios, CRM o WhatsApp.</span>
        </div>
      </div>
    </section>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <section className="visual-card simple-visual-board">
      <div className="simple-visual-head">
        <span className="visual-kicker">Emailing</span>
        <h3>Mensajes con mejor ritmo comercial</h3>
      </div>

      <div className="simple-visual-list">
        <div className="simple-visual-item">
          <strong>Activación</strong>
          <span>Secuencias de bienvenida, seguimiento y recuperación.</span>
        </div>
        <div className="simple-visual-item">
          <strong>Segmentación</strong>
          <span>Contactos mejor organizados por intención.</span>
        </div>
        <div className="simple-visual-item">
          <strong>Medición</strong>
          <span>Apertura, clic y avance comercial más claros.</span>
        </div>
      </div>
    </section>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <section className="visual-card simple-visual-board">
      <div className="simple-visual-head">
        <span className="visual-kicker">Infraestructura</span>
        <h3>Base operativa más estable</h3>
      </div>

      <div className="simple-visual-list">
        <div className="simple-visual-item">
          <strong>Continuidad</strong>
          <span>Hosting, nube, correo y soporte coordinados.</span>
        </div>
        <div className="simple-visual-item">
          <strong>Escalabilidad</strong>
          <span>Más orden para crecer sin caos técnico.</span>
        </div>
        <div className="simple-visual-item">
          <strong>Respaldo</strong>
          <span>Servicios más confiables y menos fricción operativa.</span>
        </div>
      </div>
    </section>
  )
}