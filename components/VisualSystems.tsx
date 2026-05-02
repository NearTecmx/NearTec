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

const serviceCopy: Record<ServiceKind, {
  eyebrow: string
  headline: string
  promise: string
  badge: string
  nodes: [string, string][]
}> = {
  suite: {
    eyebrow: 'Soluciones NearTec',
    headline: 'Todo conectado para que vendas con más claridad.',
    promise: 'Unimos web, WhatsApp, seguimiento, cotización y operación para que tus prospectos avancen sin perderse.',
    badge: 'Más ventas',
    nodes: [
      ['Sitio web', 'Tu oferta se entiende rápido'],
      ['Leads', 'Llegan con datos útiles'],
      ['WhatsApp', 'Respondes con contexto'],
      ['CRM', 'Das seguimiento sin caos'],
      ['Cotizador', 'Propuestas más claras'],
      ['Operación', 'Más control diario'],
    ],
  },
  web: {
    eyebrow: 'Web y landing',
    headline: 'Tu página debe vender antes de que te escriban.',
    promise: 'Diseñamos sitios rápidos, claros y listos para convertir visitantes en contactos reales.',
    badge: 'Web que vende',
    nodes: [
      ['Mensaje claro', 'Entienden qué ofreces'],
      ['CTA visible', 'Saben qué hacer'],
      ['Formulario', 'Dejan datos útiles'],
      ['WhatsApp', 'Contacto inmediato'],
      ['SEO', 'Estructura preparada'],
      ['Pauta', 'Lista para campañas'],
    ],
  },
  crm: {
    eyebrow: 'CRM y seguimiento',
    headline: 'Deja de perder prospectos entre mensajes.',
    promise: 'Ordenamos contactos, prioridades y recordatorios para que tu equipo responda mejor y cierre antes.',
    badge: 'Más cierres',
    nodes: [
      ['Contacto nuevo', 'Entrada ordenada'],
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
    promise: 'Implementamos punto de venta, usuarios, inventario, timbres y soporte para que operes mejor.',
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
    headline: 'Cuando algo falla, necesitas una respuesta clara.',
    promise: 'Te apoyamos con configuración, ajustes, capacitación y solución remota para seguir operando.',
    badge: 'Resuelto',
    nodes: [
      ['Diagnóstico', 'Ubicamos el problema'],
      ['Ajuste', 'Aplicamos solución'],
      ['Validación', 'Confirmamos avance'],
      ['Capacitación', 'Tu equipo entiende'],
      ['Mejora', 'Optimizamos uso'],
      ['Continuidad', 'Sigues trabajando'],
    ],
  },
  contacto: {
    eyebrow: 'Contacto NearTec',
    headline: 'Cuéntanos qué necesitas y te damos el siguiente paso.',
    promise: 'Puedes escribir por WhatsApp, correo o pedir diagnóstico para saber qué solución te conviene.',
    badge: 'Hablemos',
    nodes: [
      ['Mensaje', 'Nos cuentas tu caso'],
      ['Objetivo', 'Qué quieres resolver'],
      ['Diagnóstico', 'Ruta inicial'],
      ['Cotización', 'Base clara'],
      ['Asesor', 'Contacto directo'],
      ['Avance', 'Siguiente paso'],
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
    ['CRM', 'Seguimiento sin perder oportunidades'],
    ['WhatsApp', 'Respuestas rápidas con contexto'],
    ['Cotizador', 'Propuestas claras en minutos'],
    ['CompuNegocio', 'Ventas e inventario bajo control'],
    ['CN7 / Nube', 'Operación protegida'],
    ['Soporte', 'Acompañamiento cuando lo necesitas'],
  ]

  return (
    <div className="v45-hero" aria-label="Ecosistema comercial NearTec">
      <div className="v45-hero-glow v45-hero-glow-a" />
      <div className="v45-hero-glow v45-hero-glow-b" />

      <div className="v45-dashboard">
        <div className="v45-sidebar">
          <b>N</b>
          <i /><i /><i /><i />
        </div>

        <div className="v45-main-panel">
          <div className="v45-panel-top">
            <span>Tu venta más clara</span>
            <em>En marcha</em>
          </div>

          <div className="v45-kpis">
            <div><b>+ prospectos</b><small>mejor perfilados</small></div>
            <div><b>+ respuesta</b><small>menos espera</small></div>
            <div><b>+ control</b><small>operación clara</small></div>
          </div>

          <div className="v45-chart">
            <span /><span /><span /><span /><span /><span />
          </div>

          <div className="v45-pipeline">
            <i>Visita</i><i>Contacto</i><i>Cotización</i><i>Venta</i>
          </div>
        </div>
      </div>

      {cards.map(([title, detail], index) => (
        <div className={`v45-float-card v45-float-card-${index + 1}`} key={title}>
          <span>{index + 1}</span>
          <b>{title}</b>
          <small>{detail}</small>
        </div>
      ))}

      <div className="v45-cloud">
        <div /><div /><div />
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
    <div className="v45-landing-scene" aria-label="Diagnóstico comercial NearTec">
      <div className="v45-prospect-card">
        <span>Nuevo prospecto</span>
        <b>Contacto con intención real</b>
        <div className="v45-prospect-lines"><i /><i /><i /><i /></div>
      </div>

      <div className="v45-diagnosis-card">
        <span>Diagnóstico</span>
        <strong>Listo</strong>
        <b>Tu cliente entiende qué sigue</b>
        <div className="v45-diagnosis-bars"><i /><i /><i /><i /></div>
      </div>

      <div className="v45-route-card">
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
    ['Convertir', 'Cotización y venta'],
  ]

  return (
    <div className="v45-funnel-scene" aria-label="Flujo para vender más">
      <div className="v45-funnel-copy">
        <span className="eyebrow">Así te ayudamos a vender más</span>
        <h3>Más prospectos. Mejor filtrados. Más ventas.</h3>
        <p>El objetivo es simple: que más personas entiendan tu negocio, te contacten y lleguen al asesor con información suficiente para avanzar.</p>
      </div>

      <div className="v45-funnel-flow">
        {flow.map(([title, detail], index) => (
          <div key={title}>
            <span>{index + 1}</span>
            <b>{title}</b>
            <small>{detail}</small>
          </div>
        ))}
      </div>

      <div className="v45-funnel-result">
        <b>Venta más clara</b>
        <small>menos caos, más seguimiento</small>
      </div>
    </div>
  )
}

export function ServiceHeroVisual({ kind = 'suite' }: { kind?: ServiceKind }) {
  const cfg = serviceCopy[kind]

  return (
    <div className={`v45-service-visual v45-service-${kind}`} aria-label={cfg.headline}>
      <div className="v45-service-top">
        <span>{cfg.eyebrow}</span>
        <b>{cfg.badge}</b>
      </div>

      <h2>{cfg.headline}</h2>
      <p>{cfg.promise}</p>

      <div className="v45-service-grid">
        {cfg.nodes.map(([title, detail], index) => (
          <div key={title}>
            <i>{String(index + 1).padStart(2, '0')}</i>
            <b>{title}</b>
            <small>{detail}</small>
          </div>
        ))}
      </div>

      <div className="v45-service-orbit">
        <span /><span /><span />
      </div>
    </div>
  )
}

export function QuotePremiumVisual() {
  return (
    <div className="v45-quote-visual" aria-label="Cotización NearTec">
      <span>Cotización clara</span>
      <h3>De una idea suelta a una propuesta accionable.</h3>
      <div>
        <p><b>Solución</b><small>Web · CRM · POS · CN7</small></p>
        <p><b>Alcance</b><small>Usuarios, soporte y timbres</small></p>
        <p><b>Salida</b><small>WhatsApp · PDF · correo</small></p>
      </div>
    </div>
  )
}
