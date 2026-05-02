import Image from 'next/image'

type ServiceVisualKey =
  | 'web'
  | 'crm'
  | 'compunegocio'
  | 'cn7'
  | 'cotizador'
  | 'neary'
  | 'soporte'
  | 'casos'
  | 'soluciones'

type ServiceAssetProps = {
  type?: ServiceVisualKey | string
  service?: ServiceVisualKey | string
  title?: string
  eyebrow?: string
  src?: string
  alt?: string
  compact?: boolean
}

const serviceMap: Record<string, { src: string; label: string; alt: string }> = {
  web: {
    src: '/images/visuals/visual-web.webp',
    label: 'Web, apps y desarrollo',
    alt: 'Visual NearTec de desarrollo web, apps y tecnología conectada',
  },
  crm: {
    src: '/images/visuals/visual-crm.webp',
    label: 'CRM, automatización e IA',
    alt: 'Visual NearTec de CRM, automatización e inteligencia operativa',
  },
  compunegocio: {
    src: '/images/visuals/visual-compunegocio.webp',
    label: 'CompuNegocio y operación',
    alt: 'Visual NearTec de CompuNegocio, punto de venta, inventario y timbres',
  },
  cn7: {
    src: '/images/visuals/visual-cn7.webp',
    label: 'CN7, nube y respaldo',
    alt: 'Visual NearTec de CN7, nube, respaldo e infraestructura',
  },
  cotizador: {
    src: '/images/visuals/visual-cotizador.webp',
    label: 'Cotización clara',
    alt: 'Visual NearTec de cotizador, propuesta PDF y WhatsApp',
  },
  neary: {
    src: '/images/visuals/visual-neary.webp',
    label: 'Neary AI',
    alt: 'Visual NearTec de asistente inteligente Neary AI',
  },
  soporte: {
    src: '/images/visuals/visual-neary.webp',
    label: 'Soporte tecnológico',
    alt: 'Visual NearTec de soporte remoto y diagnóstico tecnológico',
  },
  casos: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Ecosistema NearTec',
    alt: 'Visual NearTec de ecosistema tecnológico empresarial',
  },
  soluciones: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Soluciones NearTec',
    alt: 'Visual NearTec de soluciones tecnológicas conectadas',
  },
}

function normalizeKey(input?: string): string {
  const value = String(input || '').toLowerCase()
  if (value.includes('compu')) return 'compunegocio'
  if (value.includes('cn7') || value.includes('nube') || value.includes('cloud')) return 'cn7'
  if (value.includes('crm') || value.includes('automat')) return 'crm'
  if (value.includes('cot')) return 'cotizador'
  if (value.includes('neary') || value.includes('ia') || value.includes('ai')) return 'neary'
  if (value.includes('soporte')) return 'soporte'
  if (value.includes('caso')) return 'casos'
  if (value.includes('soluc')) return 'soluciones'
  if (value.includes('web') || value.includes('app') || value.includes('desarrollo')) return 'web'
  return 'soluciones'
}

function VisualFrame({
  src,
  alt,
  label,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  label: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`asset-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="asset-img"
        priority={priority}
        sizes="(max-width: 900px) 100vw, 50vw"
      />
      <span className="asset-frame-label">{label}</span>
    </div>
  )
}

export function HomeHeroAsset() {
  return (
    <div className="asset-hero-shell" aria-label="Ecosistema tecnológico NearTec">
      <div className="asset-hero-stack asset-desktop">
        <Image
          src="/images/visuals/hero-home-desktop.webp"
          alt="Ecosistema tecnológico NearTec con web, CRM, automatización, nube, CompuNegocio y soporte"
          fill
          className="asset-hero-img"
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
      </div>

      <div className="asset-hero-stack asset-mobile">
        <Image
          src="/images/visuals/hero-home-mobile.webp"
          alt="Ecosistema tecnológico NearTec en formato móvil"
          fill
          className="asset-hero-img"
          priority
          sizes="100vw"
        />
      </div>

      <div className="asset-hero-badge badge-a">Web · Apps · Código</div>
      <div className="asset-hero-badge badge-b">CRM · IA · Automatización</div>
      <div className="asset-hero-badge badge-c">CN7 · Nube · Soporte</div>
    </div>
  )
}

export function LandingAssetScene() {
  return (
    <div className="asset-landing-shell" aria-label="Diagnóstico tecnológico NearTec">
      <div className="asset-landing-stack asset-desktop">
        <Image
          src="/images/visuals/hero-landing-desktop.webp"
          alt="Diagnóstico tecnológico NearTec para convertir necesidades en una ruta clara"
          fill
          className="asset-hero-img"
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
      </div>

      <div className="asset-landing-stack asset-mobile">
        <Image
          src="/images/visuals/hero-landing-mobile.webp"
          alt="Diagnóstico tecnológico NearTec en formato móvil"
          fill
          className="asset-hero-img"
          priority
          sizes="100vw"
        />
      </div>

      <div className="asset-hero-badge badge-a">Diagnóstico</div>
      <div className="asset-hero-badge badge-b">Ruta tecnológica</div>
      <div className="asset-hero-badge badge-c">Cotización clara</div>
    </div>
  )
}

export function QuoteAssetVisual() {
  return (
    <VisualFrame
      src="/images/visuals/visual-cotizador.webp"
      alt="Cotizador NearTec con propuesta, PDF y envío por WhatsApp"
      label="Cotizador + PDF + WhatsApp"
      className="asset-quote-shell"
      priority
    />
  )
}

export function ServiceAssetVisual(props: ServiceAssetProps = {}) {
  const key = normalizeKey(props.src ? '' : props.type || props.service || props.title)
  const mapped = serviceMap[key] || serviceMap.soluciones
  const src = props.src || mapped.src
  const label = props.eyebrow || props.title || mapped.label
  const alt = props.alt || mapped.alt

  return (
    <VisualFrame
      src={src}
      alt={alt}
      label={label}
      className={`asset-service-shell ${props.compact ? 'compact' : ''}`}
    />
  )
}

export function ServiceShowcaseVisual() {
  const cards = [
    serviceMap.web,
    serviceMap.crm,
    serviceMap.compunegocio,
    serviceMap.cn7,
  ]

  return (
    <div className="asset-service-showcase" aria-label="Visuales de servicios NearTec">
      {cards.map(card => (
        <div key={card.label} className="asset-service-card">
          <div className="asset-service-image">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="asset-service-img"
              sizes="(max-width: 900px) 100vw, 24vw"
            />
          </div>
          <b>{card.label}</b>
        </div>
      ))}
    </div>
  )
}

export function NearyAssistantVisual() {
  return (
    <VisualFrame
      src="/images/visuals/visual-neary.webp"
      alt="Neary AI, asistente inteligente NearTec"
      label="Neary AI"
      className="asset-neary-shell"
    />
  )
}

export function CloudOpsVisual() {
  return <ServiceAssetVisual type="cn7" title="CN7, nube y respaldo" />
}

export function CompuNegocioVisual() {
  return <ServiceAssetVisual type="compunegocio" title="CompuNegocio, POS y timbres" />
}
