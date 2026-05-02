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
  | 'suite'
  | 'contacto'
  | 'recursos'

type ServiceAssetProps = {
  type?: ServiceVisualKey | string
  service?: ServiceVisualKey | string
  kind?: ServiceVisualKey | string
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
    alt: 'Visual NearTec de desarrollo web, apps, landing e integraciones digitales',
  },
  crm: {
    src: '/images/visuals/visual-crm.webp',
    label: 'CRM, automatización e IA',
    alt: 'Visual NearTec de CRM, automatización, inteligencia artificial y seguimiento',
  },
  compunegocio: {
    src: '/images/visuals/visual-compunegocio.webp',
    label: 'CompuNegocio, POS y timbres',
    alt: 'Visual NearTec de CompuNegocio, punto de venta, inventario, ventas y timbres',
  },
  cn7: {
    src: '/images/visuals/visual-cn7.webp',
    label: 'CN7, nube y respaldo',
    alt: 'Visual NearTec de CN7, nube, respaldo, hosting e infraestructura',
  },
  cotizador: {
    src: '/images/visuals/visual-cotizador.webp',
    label: 'Cotizador, PDF y WhatsApp',
    alt: 'Visual NearTec de cotizador, propuesta PDF y envío por WhatsApp',
  },
  neary: {
    src: '/images/visuals/visual-neary.webp',
    label: 'Neary AI',
    alt: 'Visual NearTec de asistente inteligente Neary AI',
  },
  soporte: {
    src: '/images/visuals/visual-neary.webp',
    label: 'Soporte y mantenimiento',
    alt: 'Visual NearTec de soporte remoto, diagnóstico y asistencia tecnológica',
  },
  casos: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Ecosistema NearTec',
    alt: 'Visual NearTec de ecosistema tecnológico empresarial conectado',
  },
  soluciones: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Soluciones NearTec',
    alt: 'Visual NearTec de soluciones tecnológicas conectadas',
  },
  suite: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Ruta tecnológica integral',
    alt: 'Visual NearTec de ruta tecnológica integral para empresas',
  },
  contacto: {
    src: '/images/visuals/visual-cotizador.webp',
    label: 'Contacto con contexto',
    alt: 'Visual NearTec de contacto, cotización y asesoría tecnológica',
  },
  recursos: {
    src: '/images/visuals/visual-web.webp',
    label: 'Recursos y claridad',
    alt: 'Visual NearTec de recursos tecnológicos y documentación comercial',
  },
}

function normalizeKey(input?: string): string {
  const value = String(input || '').toLowerCase()
  if (value.includes('compu') || value.includes('pos') || value.includes('timbre')) return 'compunegocio'
  if (value.includes('cn7') || value.includes('nube') || value.includes('cloud') || value.includes('hosting') || value.includes('vps')) return 'cn7'
  if (value.includes('crm') || value.includes('automat') || value.includes('ia') || value.includes('ai')) return 'crm'
  if (value.includes('cot')) return 'cotizador'
  if (value.includes('neary')) return 'neary'
  if (value.includes('soporte') || value.includes('mantenimiento')) return 'soporte'
  if (value.includes('caso')) return 'casos'
  if (value.includes('contacto')) return 'contacto'
  if (value.includes('recurso')) return 'recursos'
  if (value.includes('web') || value.includes('app') || value.includes('desarrollo') || value.includes('código') || value.includes('codigo')) return 'web'
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
      <Image src={src} alt={alt} fill className="asset-img" priority={priority} sizes="(max-width: 900px) 100vw, 50vw" />
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
          alt="Ecosistema tecnológico NearTec con web, apps, CRM, IA, automatización, nube, CompuNegocio, CN7 y soporte"
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
  const key = normalizeKey(props.src ? '' : props.kind || props.type || props.service || props.title)
  const mapped = serviceMap[key] || serviceMap.soluciones
  const src = props.src || mapped.src
  const label = props.eyebrow || props.title || mapped.label
  const alt = props.alt || mapped.alt

  return <VisualFrame src={src} alt={alt} label={label} className={`asset-service-shell ${props.compact ? 'compact' : ''}`} />
}

export function ServiceShowcaseVisual() {
  const cards = [serviceMap.web, serviceMap.crm, serviceMap.compunegocio, serviceMap.cn7]

  return (
    <div className="asset-service-showcase" aria-label="Visuales de servicios NearTec">
      {cards.map((card) => (
        <div key={card.label} className="asset-service-card">
          <div className="asset-service-image">
            <Image src={card.src} alt={card.alt} fill className="asset-service-img" sizes="(max-width: 900px) 100vw, 24vw" />
          </div>
          <b>{card.label}</b>
        </div>
      ))}
    </div>
  )
}

export function NearyAssistantVisual() {
  return <VisualFrame src="/images/visuals/visual-neary.webp" alt="Neary AI, asistente inteligente NearTec" label="Neary AI" className="asset-neary-shell" />
}

export function CloudOpsVisual() {
  return <ServiceAssetVisual type="cn7" title="CN7, nube y respaldo" />
}

export function CompuNegocioVisual() {
  return <ServiceAssetVisual type="compunegocio" title="CompuNegocio, POS y timbres" />
}
