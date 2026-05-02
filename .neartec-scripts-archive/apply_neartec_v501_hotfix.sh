#!/usr/bin/env bash
set -euo pipefail

cd "${REPO_DIR:-$HOME/neartec-site}"

printf '\n== NearTec V5.0.1 hotfix: type safety + AssetVisuals compatibility ==\n'

if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git checkout main || true
  git status --short || true
fi

mkdir -p components lib app

# 1) AssetVisuals compatible con V4.2/V4.6/V4.7/V5.
# Corrige el fallo más común: ServiceAssetVisual no acepta `kind` o faltan exports usados por rutas viejas.
cat > components/AssetVisuals.tsx <<'TSX'
import Image from 'next/image'

export type ServiceVisualKey =
  | 'suite'
  | 'web'
  | 'crm'
  | 'compunegocio'
  | 'cn7'
  | 'cotizador'
  | 'neary'
  | 'soporte'
  | 'casos'
  | 'soluciones'
  | 'contacto'
  | 'recursos'
  | string

export type ServiceAssetProps = {
  type?: ServiceVisualKey
  service?: ServiceVisualKey
  kind?: ServiceVisualKey
  title?: string
  eyebrow?: string
  src?: string
  alt?: string
  compact?: boolean
  priority?: boolean
}

type VisualMeta = { src: string; label: string; alt: string }

const serviceMap: Record<string, VisualMeta> = {
  suite: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Ecosistema NearTec',
    alt: 'Ecosistema tecnológico NearTec con web, CRM, automatización, CompuNegocio, CN7, nube y soporte',
  },
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
    label: 'Cotizador + PDF + WhatsApp',
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
    label: 'Casos y escenarios',
    alt: 'Visual NearTec de ecosistema tecnológico empresarial',
  },
  soluciones: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Soluciones NearTec',
    alt: 'Visual NearTec de soluciones tecnológicas conectadas',
  },
  contacto: {
    src: '/images/visuals/hero-landing-desktop.webp',
    label: 'Contacto y diagnóstico',
    alt: 'Visual NearTec de diagnóstico y contacto comercial',
  },
  recursos: {
    src: '/images/visuals/hero-home-desktop.webp',
    label: 'Recursos tecnológicos',
    alt: 'Visual NearTec de recursos, infraestructura y operación tecnológica',
  },
}

function normalizeKey(input?: ServiceVisualKey): string {
  const value = String(input || '').toLowerCase().trim()
  if (!value) return 'soluciones'
  if (value.includes('suite') || value.includes('integral') || value.includes('ecosistema')) return 'suite'
  if (value.includes('compu') || value.includes('pos') || value.includes('punto')) return 'compunegocio'
  if (value.includes('cn7') || value.includes('nube') || value.includes('cloud') || value.includes('respaldo')) return 'cn7'
  if (value.includes('crm') || value.includes('automat') || value.includes('seguimiento')) return 'crm'
  if (value.includes('cot')) return 'cotizador'
  if (value.includes('neary') || value.includes('ia') || value.includes('ai')) return 'neary'
  if (value.includes('soporte') || value.includes('mantenimiento')) return 'soporte'
  if (value.includes('contact')) return 'contacto'
  if (value.includes('recurso')) return 'recursos'
  if (value.includes('caso')) return 'casos'
  if (value.includes('soluc')) return 'soluciones'
  if (value.includes('web') || value.includes('app') || value.includes('desarrollo') || value.includes('codigo') || value.includes('código')) return 'web'
  return serviceMap[value] ? value : 'soluciones'
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
    <div className={`asset-frame ${className}`.trim()}>
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
  const key = normalizeKey(props.src ? undefined : props.kind || props.type || props.service || props.title)
  const mapped = serviceMap[key] || serviceMap.soluciones
  return (
    <VisualFrame
      src={props.src || mapped.src}
      alt={props.alt || mapped.alt}
      label={props.eyebrow || props.title || mapped.label}
      className={`asset-service-shell ${props.compact ? 'compact' : ''}`}
      priority={props.priority}
    />
  )
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
TSX

# 2) Garantiza el puente de data para componentes viejos que importan desde neartec-data.
if [ -f lib/site-data.ts ]; then
  cat > lib/neartec-data.ts <<'TS'
export * from './site-data'
TS
fi

# 3) Corrige imports tipados en V5VisualSystem si el TSConfig no expone React global.
if [ -f components/V5VisualSystem.tsx ] && ! grep -q "import type { CSSProperties, ReactNode }" components/V5VisualSystem.tsx; then
  python3 - <<'PY'
from pathlib import Path
p = Path('components/V5VisualSystem.tsx')
s = p.read_text()
s = s.replace("'use client'\n\n", "'use client'\n\nimport type { CSSProperties, ReactNode } from 'react'\n")
s = s.replace('children: React.ReactNode', 'children: ReactNode')
s = s.replace('as React.CSSProperties', 'as CSSProperties')
p.write_text(s)
PY
fi

# 4) Build con log útil. Si falla, deja el error exacto en v501-build.log.
printf '\n== Type-check ==\n'
npm run type-check 2>&1 | tee v501-typecheck.log

printf '\n== Build ==\n'
if npm run build 2>&1 | tee v501-build.log; then
  printf '\nV5.0.1 OK: build completado. Ya puedes ejecutar deploy seguro.\n'
else
  printf '\nV5.0.1 todavía falló. Error exacto abajo:\n'
  grep -nE "Type error:|Failed to compile|Error:|Attempted import error" v501-build.log | tail -40 || true
  exit 1
fi
