type ServiceKind =
  | 'suite'
  | 'web'
  | 'crm'
  | 'compunegocio'
  | 'cn7'
  | 'soporte'
  | 'contacto'
  | 'recursos'
  | 'casos'

const serviceVisuals: Record<ServiceKind, {
  eyebrow: string
  headline: string
  promise: string
  badge: string
  nodes: [string, string][]
}> = {
  suite: {
    eyebrow: 'Soluciones NearTec',
    headline: 'Todo conectado para que vendas con más claridad.',
    promise: 'Tu sitio, WhatsApp, seguimiento, cotización y operación trabajando como una sola ruta comercial.',
    badge: 'Más ventas',
    nodes: [
      ['Sitio web', 'Explica y convierte'],
      ['Leads', 'Llegan con datos útiles'],
      ['CRM', 'Seguimiento ordenado'],
      ['WhatsApp', 'Respuesta rápida'],
      ['Cotizador', 'Propuesta clara'],
      ['Operación', 'Más control diario'],
    ],
  },
  web: {
    eyebrow: 'Web y landing',
    headline: 'Tu página debe convencer antes de que te escriban.',
    promise: 'Creamos sitios claros, rápidos y preparados para convertir visitantes en contactos reales.',
    badge: 'Web que vende',
    nodes: [
      ['Mensaje claro', 'Entienden tu oferta'],
      ['CTA visible', 'Saben qué hacer'],
      ['Formulario', 'Dejan datos útiles'],
      ['WhatsApp', 'Contacto inmediato'],
      ['SEO', 'Mejor estructura'],
      ['Pauta', 'Lista para anuncios'],
    ],
  },
  crm: {
    eyebrow: 'CRM y seguimiento',
    headline: 'Deja de perder prospectos entre mensajes.',
    promise: 'Organizamos contactos, prioridades y recordatorios para que ventas responda mejor y cierre antes.',
    badge: 'Más cierres',
    nodes: [
      ['Nuevo contacto', 'Entrada ordenada'],
      ['Prioridad', 'Detecta interés real'],
      ['Recordatorio', 'No se enfría'],
      ['Historial', 'Más contexto'],
      ['Asesor', 'Respuesta preparada'],
      ['Cierre', 'Seguimiento claro'],
    ],
  },
  compunegocio: {
    eyebrow: 'CompuNegocio',
    headline: 'Vende, cobra y controla tu operación sin improvisar.',
    promise: 'Implementamos punto de venta, usuarios, inventario, timbres y soporte para operar mejor.',
    badge: 'Control POS',
    nodes: [
      ['Ventas', 'Caja más clara'],
      ['Inventario', 'Control diario'],
      ['Usuarios', 'Accesos definidos'],
      ['Timbres', 'Paquetes cotizables'],
      ['Reportes', 'Decisiones rápidas'],
      ['Soporte', 'Acompañamiento'],
    ],
  },
  cn7: {
    eyebrow: 'CN7 y nube',
    headline: 'Tu negocio no debe detenerse por una falla local.',
    promise: 'Con respaldo, nube y continuidad, tu información queda mejor protegida y disponible.',
    badge: 'Continuidad',
    nodes: [
      ['Servidor', 'Operación estable'],
      ['Base de datos', 'Más protegida'],
      ['Respaldo', 'Recuperación posible'],
      ['Acceso', 'Trabajo flexible'],
      ['Nube', 'Menos riesgo local'],
      ['Soporte', 'Acompañamiento'],
    ],
  },
  soporte: {
    eyebrow: 'Soporte experto',
    headline: 'Cuando algo falla, necesitas respuesta clara.',
    promise: 'Te ayudamos con configuración, ajustes, capacitación y solución remota para seguir operando.',
    badge: 'Resuelto',
    nodes: [
      ['Diagnóstico', 'Detectamos el problema'],
      ['Ajuste', 'Aplicamos solución'],
      ['Validación', 'Confirmamos avance'],
      ['Capacitación', 'Tu equipo entiende'],
      ['Mejora', 'Optimizamos uso'],
      ['Continuidad', 'Sigues trabajando'],
    ],
  },
  contacto: {
    eyebrow: 'Contacto NearTec',
    headline: 'Dinos qué necesitas y te damos el siguiente paso.',
    promise: 'Puedes escribir por WhatsApp, correo o pedir diagnóstico para entender qué solución te conviene.',
    badge: 'Hablemos',
    nodes: [
      ['Mensaje', 'Nos cuentas tu caso'],
      ['Objetivo', 'Qué quieres resolver'],
      ['Diagnóstico', 'Ruta inicial'],
      ['Cotización', 'Base clara'],
      ['Asesor', 'Contacto directo'],
      ['Cierre', 'Siguiente paso'],
    ],
  },
  recursos: {
    eyebrow: 'Recursos',
    headline: 'Decide mejor antes de invertir en tecnología.',
    promise: 'Te ayudamos a identificar si necesitas web, CRM, punto de venta, nube o soporte.',
    badge: 'Decisión',
    nodes: [
      ['Problema', 'Qué te frena'],
      ['Prioridad', 'Qué va primero'],
      ['Solución', 'Qué conviene'],
      ['Costo', 'Base estimada'],
      ['Impacto', 'Qué mejora'],
      ['Acción', 'Siguiente paso'],
    ],
  },
  casos: {
    eyebrow: 'Casos de uso',
    headline: 'Cuando vender se vuelve desordenado, NearTec pone estructura.',
    promise: 'Ideal para negocios que necesitan captar más, responder mejor y operar con más control.',
    badge: 'Fit',
    nodes: [
      ['Atraer', 'Más interesados'],
      ['Filtrar', 'Mejor calidad'],
      ['Cotizar', 'Más rápido'],
      ['Responder', 'Con contexto'],
      ['Operar', 'Con control'],
      ['Crecer', 'Con soporte'],
    ],
  },
}

export function HeroSalesScene() {
  const cards: [string, string][] = [
    ['Sitio web', 'Convierte visitas en contactos'],
    ['Leads calificados', 'Datos útiles desde el inicio'],
    ['CRM inteligente', 'Seguimiento sin perder oportunidades'],
    ['WhatsApp rápido', 'Respuestas con contexto'],
    ['Cotizador', 'Propuestas claras en minutos'],
    ['CompuNegocio', 'Ventas e inventario bajo control'],
    ['Nube y respaldo', 'Operación más segura'],
    ['Soporte experto', 'Acompañamiento cuando lo necesitas'],
  ]

  return (
    <div className="hero-sales-scene" aria-label="Ecosistema comercial NearTec">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="hero-dashboard">
        <div className="dash-sidebar">
          <b>N</b>
          <i /><i /><i /><i />
        </div>

        <div className="dash-main">
          <div className="dash-top">
            <span>Resumen comercial</span>
            <em>Activo</em>
          </div>

          <div className="dash-kpis">
            <div><b>+ prospectos</b><small>mejor perfilados</small></div>
            <div><b>+ respuesta</b><small>menos espera</small></div>
            <div><b>+ control</b><small>operación clara</small></div>
          </div>

          <div className="dash-chart">
            <span /><span /><span /><span /><span /><span />
          </div>

          <div className="dash-pipeline">
            <i>Visita</i><i>Contacto</i><i>Cotización</i><i>Cierre</i>
          </div>
        </div>
      </div>

      {cards.map(([title, detail], index) => (
        <div className={`hero-float-card hero-float-card-${index + 1}`} key={title}>
          <span>{index + 1}</span>
          <b>{title}</b>
          <small>{detail}</small>
        </div>
      ))}

      <div className="hero-cloud-stack">
        <div />
        <div />
        <div />
        <b>datos respaldados</b>
      </div>
    </div>
  )
}

export function LandingSalesScene() {
  const steps: [string, string][] = [
    ['Te encuentran', 'Desde web, anuncio o recomendación'],
    ['Entienden tu oferta', 'Mensaje claro y directo'],
    ['Dejan datos útiles', 'No solo nombre y teléfono'],
    ['Reciben respuesta', 'WhatsApp con contexto'],
    ['Avanzan a cotización', 'Siguiente paso claro'],
  ]

  return (
    <div className="landing-sales-scene" aria-label="Diagnóstico comercial NearTec">
      <div className="prospect-card">
        <span>Nuevo prospecto</span>
        <b>Contacto con intención real</b>
        <div className="prospect-lines"><i /><i /><i /><i /></div>
      </div>

      <div className="diagnosis-card">
        <span>Diagnóstico</span>
        <strong>Listo</strong>
        <b>Tu cliente entiende qué sigue</b>
        <div className="diagnosis-bars"><i /><i /><i /><i /></div>
      </div>

      <div className="route-card">
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

export function SalesFunnelScene() {
  const flow: [string, string][] = [
    ['Atraer', 'Web, anuncios y búsqueda'],
    ['Capturar', 'Formulario y WhatsApp'],
    ['Filtrar', 'Interés real y urgencia'],
    ['Conectar', 'Respuesta rápida'],
    ['Convertir', 'Cotización y cierre'],
  ]

  return (
    <div className="sales-funnel-scene" aria-label="Flujo para vender más">
      <div className="sales-funnel-copy">
        <span className="eyebrow">Así te ayudamos a vender más</span>
        <h3>Más prospectos. Mejor filtrados. Más ventas.</h3>
        <p>El objetivo es simple: que más personas entiendan tu negocio, te contacten y lleguen al asesor con información suficiente para avanzar.</p>
      </div>

      <div className="sales-funnel-flow">
        {flow.map(([title, detail], index) => (
          <div key={title}>
            <span>{index + 1}</span>
            <b>{title}</b>
            <small>{detail}</small>
          </div>
        ))}
      </div>

      <div className="sales-funnel-result">
        <b>Venta más clara</b>
        <small>menos caos, más seguimiento</small>
      </div>
    </div>
  )
}

export function ServiceHeroVisual({ kind = 'suite' }: { kind?: ServiceKind }) {
  const cfg = serviceVisuals[kind]

  return (
    <div className={`service-hero-visual service-hero-${kind}`} aria-label={cfg.headline}>
      <div className="service-visual-top">
        <span>{cfg.eyebrow}</span>
        <b>{cfg.badge}</b>
      </div>

      <h2>{cfg.headline}</h2>
      <p>{cfg.promise}</p>

      <div className="service-node-grid">
        {cfg.nodes.map(([title, detail], index) => (
          <div key={title}>
            <i>{String(index + 1).padStart(2, '0')}</i>
            <b>{title}</b>
            <small>{detail}</small>
          </div>
        ))}
      </div>

      <div className="service-visual-orbit">
        <span /><span /><span />
      </div>
    </div>
  )
}

export function QuotePremiumVisual() {
  return (
    <div className="quote-premium-visual" aria-label="Cotización NearTec">
      <span>Cotización clara</span>
      <h3>De una idea suelta a una propuesta accionable.</h3>
      <div className="quote-preview-grid">
        <div><b>Solución</b><small>Web · CRM · POS · CN7</small></div>
        <div><b>Alcance</b><small>Usuarios, soporte y timbres</small></div>
        <div><b>Salida</b><small>WhatsApp · PDF · correo</small></div>
      </div>
    </div>
  )
}
