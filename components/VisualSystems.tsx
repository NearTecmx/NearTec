type SolutionKind =
  | 'suite'
  | 'web'
  | 'crm'
  | 'compunegocio'
  | 'cn7'
  | 'soporte'
  | 'contacto'
  | 'recursos'
  | 'casos'

const solutionConfig: Record<SolutionKind, {
  eyebrow: string
  title: string
  subtitle: string
  nodes: string[]
  stat: string
}> = {
  suite: {
    eyebrow: 'Sistema comercial conectado',
    title: 'Web + CRM + WhatsApp + operación trabajando juntos',
    subtitle: 'Un ecosistema para atraer, responder, cotizar y vender con más orden.',
    nodes: ['Sitio web', 'Landing', 'CRM', 'WhatsApp', 'Cotizador', 'POS', 'Nube'],
    stat: '+ claridad',
  },
  web: {
    eyebrow: 'Web que convierte',
    title: 'De visitante confundido a contacto listo para avanzar',
    subtitle: 'Mensajes claros, formularios simples, CTA visibles y estructura lista para pauta.',
    nodes: ['Mensaje', 'SEO', 'CTA', 'Formulario', 'WhatsApp', 'Tracking'],
    stat: 'Lead',
  },
  crm: {
    eyebrow: 'Seguimiento comercial',
    title: 'Cada prospecto con prioridad, contexto y siguiente paso',
    subtitle: 'Menos mensajes perdidos. Más oportunidades atendidas a tiempo.',
    nodes: ['Nuevo lead', 'Score', 'Prioridad', 'Recordatorio', 'Asesor', 'Cierre'],
    stat: '87',
  },
  compunegocio: {
    eyebrow: 'Operación de venta',
    title: 'Ventas, inventario, usuarios y timbres bajo control',
    subtitle: 'Punto de venta preparado para operar con más claridad desde el primer día.',
    nodes: ['Caja', 'Inventario', 'Usuarios', 'Reportes', 'Timbres', 'Soporte'],
    stat: 'POS',
  },
  cn7: {
    eyebrow: 'Nube y respaldo',
    title: 'Tu operación protegida aunque el equipo local falle',
    subtitle: 'Continuidad, respaldo y entorno administrado para trabajar con menos riesgo.',
    nodes: ['Servidor', 'Base de datos', 'Backup', 'Acceso', 'Recuperación', 'Soporte'],
    stat: 'Cloud',
  },
  soporte: {
    eyebrow: 'Soporte experto',
    title: 'Cuando algo falla, tu operación no se queda sola',
    subtitle: 'Ajustes, configuración, solución remota y acompañamiento para seguir trabajando.',
    nodes: ['Ticket', 'Diagnóstico', 'Ajuste', 'Validación', 'Entrega', 'Seguimiento'],
    stat: 'Help',
  },
  contacto: {
    eyebrow: 'Contacto directo',
    title: 'Dinos qué necesitas y te damos ruta clara',
    subtitle: 'WhatsApp, correo, diagnóstico o cotización con contexto para avanzar rápido.',
    nodes: ['Mensaje', 'Necesidad', 'Contexto', 'Asesor', 'Cotización', 'Cierre'],
    stat: 'Hola',
  },
  recursos: {
    eyebrow: 'Decisión inteligente',
    title: 'Aprende qué implementar antes de gastar de más',
    subtitle: 'Contenido útil para decidir entre web, CRM, POS, nube o soporte.',
    nodes: ['Problema', 'Prioridad', 'Solución', 'Costo', 'Impacto', 'Siguiente paso'],
    stat: 'Guía',
  },
  casos: {
    eyebrow: 'Casos de uso',
    title: 'Escenarios reales donde NearTec sí tiene sentido',
    subtitle: 'Cuando necesitas más prospectos, mejor seguimiento y operación más estable.',
    nodes: ['Captar', 'Filtrar', 'Cotizar', 'Responder', 'Operar', 'Crecer'],
    stat: 'Fit',
  },
}

export function SalesGalaxy() {
  const cards = [
    ['Sitio web', 'Explica tu oferta y convierte visitas'],
    ['Leads', 'Captura datos útiles, no mensajes sueltos'],
    ['CRM', 'Prioriza y da seguimiento con orden'],
    ['WhatsApp', 'Responde más rápido con contexto'],
    ['Cotizador', 'Acelera propuestas y decisiones'],
    ['CompuNegocio', 'Vende y controla operación diaria'],
    ['CN7 / Nube', 'Protege continuidad y respaldo'],
    ['Soporte', 'Acompañamiento para seguir operando'],
  ]

  return (
    <div className="sales-galaxy" aria-label="Sistema comercial NearTec">
      <div className="galaxy-core">
        <span>NearTec</span>
        <b>Motor comercial conectado</b>
        <small>atraer → filtrar → cotizar → cerrar → operar</small>
      </div>

      <div className="galaxy-path path-one" />
      <div className="galaxy-path path-two" />
      <div className="galaxy-path path-three" />

      {cards.map(([title, detail], index) => (
        <div className={`galaxy-card galaxy-card-${index + 1}`} key={title}>
          <i>{String(index + 1).padStart(2, '0')}</i>
          <b>{title}</b>
          <small>{detail}</small>
        </div>
      ))}

      <div className="galaxy-cloud">
        <b>Datos seguros</b>
        <small>nube · respaldo · continuidad</small>
      </div>
    </div>
  )
}

export function LeadFilterVisual() {
  const steps = [
    ['Nuevo prospecto', 'Llega desde web, anuncio o WhatsApp'],
    ['Diagnóstico', 'Entendemos necesidad, tamaño y urgencia'],
    ['Score comercial', 'Detectamos intención real'],
    ['Ruta recomendada', 'Cotización, CRM, web, POS o nube'],
    ['Asesor', 'Recibe contexto para avanzar'],
  ]

  return (
    <div className="lead-filter-visual" aria-label="Flujo de diagnóstico NearTec">
      <div className="lead-device">
        <span>Nuevo prospecto</span>
        <b>Datos útiles desde el primer contacto</b>
        <small>Empresa · nombre · WhatsApp · objetivo</small>
        <div className="mini-form-lines">
          <i /><i /><i /><i />
        </div>
      </div>

      <div className="score-panel">
        <span>Diagnóstico</span>
        <strong>87</strong>
        <b>Alta intención</b>
        <div className="score-bars">
          <i /><i /><i /><i />
        </div>
      </div>

      <div className="route-panel">
        {steps.map(([title, detail], index) => (
          <div key={title}>
            <span>{index + 1}</span>
            <b>{title}</b>
            <small>{detail}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ConversionFunnelVisual() {
  const items = [
    ['Ads / SEO / Web', 'Atraer'],
    ['Landing / Formulario', 'Capturar'],
    ['Neary AI / CRM', 'Filtrar'],
    ['WhatsApp / Correo', 'Conectar'],
    ['Cotización / Asesor', 'Cerrar'],
  ]

  return (
    <div className="conversion-funnel-visual" aria-label="Embudo comercial NearTec">
      <div className="funnel-copy">
        <span className="eyebrow">Ruta comercial clara</span>
        <h3>Más prospectos. Mejor filtrados. Más ventas.</h3>
        <p>El visitante entiende, deja datos útiles, recibe respuesta y llega al asesor con contexto.</p>
      </div>

      <div className="funnel-system">
        {items.map(([top, bottom], index) => (
          <div className="funnel-step" key={top}>
            <i>{index + 1}</i>
            <b>{top}</b>
            <small>{bottom}</small>
          </div>
        ))}
      </div>

      <div className="funnel-result">
        <b>76%</b>
        <span>oportunidad en seguimiento</span>
      </div>
    </div>
  )
}

export function SolutionVisual({ kind = 'suite' }: { kind?: SolutionKind }) {
  const cfg = solutionConfig[kind]

  return (
    <div className={`solution-visual solution-visual-${kind}`} aria-label={cfg.title}>
      <div className="solution-visual-head">
        <span>{cfg.eyebrow}</span>
        <b>{cfg.stat}</b>
      </div>

      <h2>{cfg.title}</h2>
      <p>{cfg.subtitle}</p>

      <div className="solution-node-grid">
        {cfg.nodes.map((node, index) => (
          <div key={node}>
            <i>{String(index + 1).padStart(2, '0')}</i>
            <b>{node}</b>
          </div>
        ))}
      </div>

      <div className="solution-orbit">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
