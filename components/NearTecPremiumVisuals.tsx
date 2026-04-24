import type { ReactNode } from 'react'

function Shell({ children, dark = false, className = '' }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <div className={`nt-card nt-visual ${dark ? 'is-dark' : ''} ${className}`}>{children}</div>
}

function Dot({ active = false }: { active?: boolean }) {
  return <span className={`nt-dot ${active ? 'is-active' : ''}`} />
}

export function HeroStackBoard() {
  return (
    <Shell className="hero-board">
      <div className="visual-head"><span>Panel comercial</span><b>Operación conectada</b></div>
      <div className="hero-modules">
        {['Sitio web', 'CRM', 'CompuNegocio', 'Nube'].map((item, index) => <div key={item}><Dot active={index === 0} /><b>{item}</b><small>{['Convierte', 'Filtra', 'Controla', 'Respalda'][index]}</small></div>)}
      </div>
      <svg className="line-chart" viewBox="0 0 420 180" role="img" aria-label="Gráfica de oportunidades">
        <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(154,196,59,.42)" /><stop offset="1" stopColor="rgba(154,196,59,.02)" /></linearGradient></defs>
        {[40,80,120,160].map((y) => <line key={y} x1="20" x2="400" y1={y} y2={y} />)}
        <path d="M22 150 C78 120 95 124 132 102 C176 74 200 92 246 65 C300 34 340 58 398 24 L398 166 L22 166 Z" fill="url(#chartFill)" />
        <path className="draw-path" d="M22 150 C78 120 95 124 132 102 C176 74 200 92 246 65 C300 34 340 58 398 24" />
        {[22,132,246,398].map((x, i) => <circle key={x} cx={x} cy={[150,102,65,24][i]} r="6" />)}
      </svg>
    </Shell>
  )
}

export function NearTecFlowMockup() {
  const steps = ['Atracción', 'Filtro', 'Prioridad', 'Seguimiento', 'Propuesta']
  return (
    <Shell dark className="flow-board">
      <div className="visual-head"><span>Ruta comercial</span><b>De visita a oportunidad</b></div>
      <div className="flow-line">
        {steps.map((step, index) => <div key={step}><i>{index + 1}</i><b>{step}</b><small>{['Te encuentran', 'Se entiende necesidad', 'Se mide urgencia', 'Se atiende', 'Se cotiza'][index]}</small></div>)}
      </div>
    </Shell>
  )
}

export function LiveMetricBars() {
  return (
    <Shell className="bars-board">
      <div className="visual-head"><span>Indicadores</span><b>Señales del embudo</b></div>
      <div className="metric-row">
        {[68, 86, 52, 74, 61].map((value, index) => <span key={index} style={{ height: `${value}%`, animationDelay: `${index * 130}ms` }} />)}
      </div>
      <div className="metric-kpis">
        <div><b>Lead score</b><strong>82%</strong></div>
        <div><b>Demos</b><strong>12</strong></div>
        <div><b>Propuesta</b><strong>Alta</strong></div>
      </div>
    </Shell>
  )
}

export function AutomationSignalBoard() {
  return (
    <Shell className="signal-board">
      <div className="visual-head"><span>Automatización</span><b>Lead filtering</b></div>
      <div className="signal-list">
        {['Formulario recibido', 'Necesidad detectada', 'Prioridad asignada', 'WhatsApp listo'].map((item, index) => <div key={item}><Dot active={index < 3} /><span>{item}</span></div>)}
      </div>
    </Shell>
  )
}

export function PlatformDeepBoard() {
  return (
    <Shell dark className="orbit-board">
      <div className="visual-head"><span>Ecosistema</span><b>NearTec conecta las piezas</b></div>
      <div className="orbit-map" aria-hidden="true">
        <span className="orbit-center">NearTec</span>
        {['Web', 'CRM', 'POS', 'Cloud', 'Emailing', 'iTimbre'].map((item, index) => <span key={item} className={`orbit-node node-${index}`}>{item}</span>)}
      </div>
    </Shell>
  )
}

export function ResourcePulsePanel() {
  return (
    <Shell className="resource-board">
      <div className="visual-head"><span>Diagnóstico</span><b>Qué conviene primero</b></div>
      <div className="resource-steps">
        {['Vender mejor', 'Ordenar operación', 'Nube y respaldo', 'Automatizar seguimiento'].map((item) => <div key={item}><Dot active /><b>{item}</b></div>)}
      </div>
    </Shell>
  )
}

export function WebConversionBoard() {
  return (
    <Shell className="web-board">
      <div className="visual-head"><span>Web</span><b>Página que convierte</b></div>
      <div className="browser-lines"><i /><i /><i /><i /></div>
      <div className="web-cta">Contacto claro</div>
    </Shell>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <Shell className="mail-board">
      <div className="visual-head"><span>Emailing</span><b>Campañas medibles</b></div>
      <div className="mail-cards">{['Segmenta', 'Envía', 'Mide', 'Recupera'].map((item) => <span key={item}>{item}</span>)}</div>
    </Shell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <Shell dark className="infra-board">
      <div className="visual-head"><span>Cloud</span><b>Infraestructura estable</b></div>
      <div className="server-stack">{['Hosting', 'VPS', 'Correo', 'CN7', 'Backup'].map((item) => <span key={item}>{item}</span>)}</div>
    </Shell>
  )
}
