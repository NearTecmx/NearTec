import Image from 'next/image'

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

const serviceAssets: Record<ServiceKind, {
  src: string
  alt: string
  label: string
  title: string
  bullets: string[]
}> = {
  suite: {
    src: '/images/visuals/hero-home-desktop.webp',
    alt: 'Ecosistema comercial NearTec con web, WhatsApp, CRM, cotización, nube y soporte conectados',
    label: 'Sistema comercial conectado',
    title: 'Una ruta completa para captar, responder y vender mejor.',
    bullets: ['Web clara', 'WhatsApp rápido', 'Cotización profesional'],
  },
  web: {
    src: '/images/visuals/visual-web.webp',
    alt: 'Visual de sitio web y formularios conectados para captar prospectos',
    label: 'Web que convierte',
    title: 'Tu página debe explicar, convencer y generar contacto.',
    bullets: ['Mensaje claro', 'CTA visible', 'Formulario útil'],
  },
  crm: {
    src: '/images/visuals/visual-crm.webp',
    alt: 'CRM visual para seguimiento de prospectos, oportunidades y WhatsApp',
    label: 'Seguimiento comercial',
    title: 'Prospectos ordenados para que no se pierdan ventas.',
    bullets: ['Prioridad', 'Historial', 'Recordatorios'],
  },
  compunegocio: {
    src: '/images/visuals/visual-compunegocio.webp',
    alt: 'Punto de venta CompuNegocio con ventas, inventario, timbrado y clientes',
    label: 'Operación y punto de venta',
    title: 'Controla ventas, inventario, usuarios y timbres.',
    bullets: ['Ventas', 'Inventario', 'Timbrado'],
  },
  cn7: {
    src: '/images/visuals/visual-cn7.webp',
    alt: 'Nube, respaldo y continuidad operativa para negocios',
    label: 'Nube y respaldo',
    title: 'Menos riesgo local, más continuidad para operar.',
    bullets: ['Respaldo', 'Acceso', 'Protección'],
  },
  soporte: {
    src: '/images/backgrounds/bg-cta-flow.webp',
    alt: 'Flujo visual de soporte, diagnóstico y resolución',
    label: 'Soporte experto',
    title: 'Respuesta clara cuando necesitas seguir operando.',
    bullets: ['Diagnóstico', 'Ajuste', 'Validación'],
  },
  contacto: {
    src: '/images/visuals/visual-neary.webp',
    alt: 'Isotipo tecnológico NearTec como asistente visual',
    label: 'Contacto directo',
    title: 'Cuéntanos qué necesitas y te damos el siguiente paso.',
    bullets: ['WhatsApp', 'Correo', 'Diagnóstico'],
  },
  recursos: {
    src: '/images/visuals/hero-landing-desktop.webp',
    alt: 'Flujo visual para decidir qué solución tecnológica implementar primero',
    label: 'Decisión clara',
    title: 'Elige mejor antes de invertir en tecnología.',
    bullets: ['Prioridad', 'Costo base', 'Siguiente paso'],
  },
  casos: {
    src: '/images/visuals/hero-home-desktop.webp',
    alt: 'Ecosistema NearTec para casos de uso comercial y operativo',
    label: 'Casos de uso',
    title: 'Cuando vender se vuelve desordenado, NearTec pone estructura.',
    bullets: ['Atraer', 'Filtrar', 'Cerrar'],
  },
}

export function HeroAssetScene() {
  return (
    <div className="asset-hero-shell">
      <picture>
        <source media="(max-width: 760px)" srcSet="/images/visuals/hero-home-mobile.webp" />
        <Image
          src="/images/visuals/hero-home-desktop.webp"
          alt="Ecosistema comercial NearTec conectado con web, WhatsApp, CRM, cotizador, CompuNegocio, nube y soporte"
          width={1672}
          height={941}
          priority
          className="asset-hero-img"
        />
      </picture>

      <div className="asset-hero-badge badge-a">Web que convierte</div>
      <div className="asset-hero-badge badge-b">WhatsApp con contexto</div>
      <div className="asset-hero-badge badge-c">Cotización rápida</div>
    </div>
  )
}

export function LandingAssetScene() {
  return (
    <div className="asset-landing-shell">
      <picture>
        <source media="(max-width: 760px)" srcSet="/images/visuals/hero-landing-mobile.webp" />
        <Image
          src="/images/visuals/hero-landing-desktop.webp"
          alt="Flujo comercial NearTec desde tráfico y formulario hasta WhatsApp, cotización y oportunidad calificada"
          width={1672}
          height={941}
          className="asset-landing-img"
        />
      </picture>
    </div>
  )
}

export function ServiceAssetVisual({ kind = 'suite' }: { kind?: ServiceKind }) {
  const asset = serviceAssets[kind]

  return (
    <div className="asset-service-shell">
      <Image
        src={asset.src}
        alt={asset.alt}
        width={1672}
        height={941}
        className="asset-service-img"
      />

      <div className="asset-service-copy">
        <span>{asset.label}</span>
        <h2>{asset.title}</h2>
        <div>
          {asset.bullets.map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
      </div>
    </div>
  )
}

export function QuoteAssetVisual() {
  return (
    <div className="asset-quote-shell">
      <Image
        src="/images/visuals/visual-cotizador.webp"
        alt="Cotizador NearTec con propuesta, PDF, WhatsApp y envío comercial"
        width={1731}
        height={909}
        className="asset-quote-img"
      />
      <div className="asset-quote-copy">
        <span>Cotizador comercial</span>
        <h2>De una necesidad suelta a una propuesta clara.</h2>
        <p>El cálculo real se mantiene en el cotizador. La imagen solo refuerza el proceso.</p>
      </div>
    </div>
  )
}

export function NearyAssetSymbol() {
  return (
    <Image
      src="/images/brand/neary-symbol.webp"
      alt="Neary AI NearTec"
      width={240}
      height={240}
      className="neary-asset-symbol"
    />
  )
}
