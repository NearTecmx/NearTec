set -euo pipefail

cd "${REPO_DIR:-$HOME/neartec-site}"

BACKUP_BRANCH="backup/pre-v47-$(date +%Y%m%d-%H%M%S)"
git fetch origin main || true
git checkout main
git pull origin main || true
git checkout -b "$BACKUP_BRANCH"
git push -u origin "$BACKUP_BRANCH" || true
git checkout main

# Assets: conserva los existentes; si faltan y el ZIP está en Descargas, los reinyecta.
if [ ! -f public/images/visuals/hero-home-desktop.webp ] && [ -f "/sdcard/Download/NearTec_V46_Assets_WebReady.zip" ]; then
  rm -rf /tmp/neartec-v47-assets
  mkdir -p /tmp/neartec-v47-assets
  unzip -o "/sdcard/Download/NearTec_V46_Assets_WebReady.zip" -d /tmp/neartec-v47-assets
  cp -R /tmp/neartec-v47-assets/public/images/* public/images/
fi

node - <<'JS'
const fs = require('fs')
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'))
pkg.name = 'neartec-web-v47-technology-integrator'
pkg.version = '4.7.0'
pkg.scripts = {
  ...pkg.scripts,
  'type-check': 'tsc --noEmit',
  'predeploy:check': 'node scripts/preflight.js',
  'smoke': 'node scripts/smoke-test.mjs && node scripts/test-api-local.mjs'
}
pkg.engines = { node: '20.x' }
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')
JS

cat > app/layout.tsx <<'EOF'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingAssist from '@/components/FloatingAssist'
import { siteUrl } from '@/lib/neartec-data'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7fbf2',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NearTec | Desarrollo, automatización e infraestructura para empresas',
    template: '%s | NearTec',
  },
  description:
    'NearTec desarrolla e integra sitios web, apps, automatizaciones, CRM, inteligencia artificial, CompuNegocio, CN7, nube, correo, soporte e infraestructura para empresas.',
  keywords: [
    'NearTec',
    'desarrollo web',
    'apps',
    'automatización',
    'CRM',
    'inteligencia artificial',
    'CompuNegocio',
    'CN7',
    'nube',
    'hosting',
    'VPS',
    'correo corporativo',
    'soporte remoto',
    'Tijuana',
    'iTimbre',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteUrl,
    siteName: 'NearTec',
    title: 'NearTec | Tecnología desarrollada e integrada para empresas',
    description:
      'Web, apps, automatización, IA, CRM, CompuNegocio, CN7, nube, correo, soporte e infraestructura en una ruta tecnológica clara.',
    images: ['/images/og/og-home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec',
    description: 'Desarrollo, automatización e infraestructura para empresas.',
    images: ['/images/og/og-home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NearTec',
  url: siteUrl,
  telephone: '+52 664 404 6194',
  email: 'meta@itimbre.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Benito Juárez 2034 601, Zona Centro',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    postalCode: '22000',
    addressCountry: 'MX',
  },
  areaServed: ['Tijuana', 'Baja California', 'México'],
  description:
    'Servicios de desarrollo tecnológico, automatización, CRM, IA, CompuNegocio, CN7, nube, correo, hosting, soporte remoto e infraestructura para empresas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body>
        <div className="site-bg" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingAssist />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  )
}
EOF

cat > lib/neartec-data.ts <<'EOF'
export const CONTACT = {
  phoneDisplay: '664 404 6194',
  phoneHref: 'tel:6644046194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  commercialEmail: 'meta@itimbre.com',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
  rfc: 'NEA040929DKA',
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neartec.mx'

export const navItems = [
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/diseno-web', label: 'Web y apps' },
  { href: '/crm-automatizacion', label: 'Automatización e IA' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/cn7', label: 'CN7 / nube' },
  { href: '/soporte', label: 'Soporte' },
]

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary:
      'Sitios web, landings, interfaces, aplicaciones y módulos digitales para explicar, vender, automatizar y operar mejor.',
    bullets: ['Sitios y landings rápidos', 'Apps y paneles a medida', 'SEO técnico, formularios e integraciones'],
    metric: 'Presencia + código',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary:
      'CRM, flujos de seguimiento, WhatsApp, formularios, alertas e inteligencia artificial aplicada a procesos reales.',
    bullets: ['Seguimiento y recordatorios', 'Automatización de tareas', 'IA para atención, operación y análisis'],
    metric: 'Procesos claros',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio, punto de venta y timbres',
    href: '/compunegocio',
    tag: 'Operación',
    summary:
      'Implementación de CompuNegocio para ventas, inventario, usuarios, reportes, timbres y operación diaria.',
    bullets: ['Desde $450 MXN por estación / mes', 'Implementación remota base $1,500 MXN', 'Timbres CN y soporte operativo'],
    metric: 'POS + control',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    tag: 'Infraestructura',
    summary:
      'CN7, respaldo, nube, hosting, VPS, correo, FTP, continuidad y administración técnica para reducir riesgos.',
    bullets: ['CN7 desde $99 USD / mes', 'Nube, respaldo y recuperación', 'Hosting, VPS, correo y soporte'],
    metric: 'Continuidad',
    accent: 'aqua',
  },
  {
    title: 'Soporte, mantenimiento y evolución',
    href: '/soporte',
    tag: 'Soporte',
    summary:
      'Atención remota, configuración, ajustes, capacitación, mantenimiento, mejoras y desarrollo evolutivo.',
    bullets: ['Soporte con póliza desde $499 MXN/h', 'Desarrollo con póliza desde $999 MXN/h', 'Acompañamiento remoto'],
    metric: 'Operación estable',
    accent: 'lime',
  },
]

export const techLayers = [
  ['Presencia digital', 'Sitios web, landings, SEO técnico, formularios y rutas de contacto.'],
  ['Desarrollo y apps', 'Interfaces, paneles, herramientas internas y módulos a medida.'],
  ['Automatización e IA', 'CRM, WhatsApp, alertas, seguimiento, análisis y tareas repetitivas automatizadas.'],
  ['Operación comercial', 'CompuNegocio, ventas, inventario, clientes, timbres y reportes.'],
  ['Infraestructura', 'CN7, nube, respaldo, hosting, VPS, correo, FTP y continuidad.'],
  ['Soporte y seguridad', 'Soporte remoto, configuración, mantenimiento, recuperación y buenas prácticas.'],
] as const

export const proofStats = [
  ['Web + apps', 'presencia y herramientas digitales'],
  ['CRM + IA', 'automatización y seguimiento'],
  ['POS + timbres', 'operación diaria con control'],
  ['CN7 + nube', 'respaldo e infraestructura'],
]

export const leadPains = [
  ['Tecnología dispersa', 'Web, WhatsApp, correo, punto de venta, nube y soporte no deben vivir como piezas sueltas.'],
  ['Procesos manuales', 'Automatizar tareas repetitivas libera tiempo y reduce errores operativos.'],
  ['Operación frágil', 'Una sola computadora, respaldos débiles o sistemas aislados ponen en riesgo la continuidad.'],
  ['Cotizaciones sin contexto', 'Antes de comprar tecnología conviene definir alcance, prioridad, costos base y siguiente paso.'],
]

export const priceSignals = [
  ['CompuNegocio', 'desde $450 MXN por estación / mes'],
  ['CN7 con respaldo', 'desde $99 USD / mes'],
  ['Implementación base', '$1,500 MXN pago único'],
]

export const compuPricing = [
  { range: '1 a 3 licencias', monthly: 450, annual: 4050 },
  { range: '4 a 8 licencias', monthly: 400, annual: 3600 },
  { range: '9 o más licencias', monthly: 350, annual: 3150 },
]

export const cn7Pricing = [
  { label: 'CN7 con respaldo', amount: 99, currency: 'USD', period: 'mes' },
  { label: 'CN7 hospedado', amount: 149, currency: 'USD', period: 'mes' },
  { label: 'Respaldo automático', amount: 99, currency: 'USD', period: 'mes' },
]

export const serviceRates = [
  { label: 'Implementación remota base', price: '$1,500 MXN pago único' },
  { label: 'Soporte técnico remoto con póliza', price: '$499 MXN por hora' },
  { label: 'Desarrollo / ajustes con póliza', price: '$999 MXN por hora' },
  { label: 'Soporte regular sin póliza', price: '$999 MXN por hora' },
  { label: 'Desarrollo regular sin póliza', price: '$1,499 MXN por hora' },
]

export const stampPackages = [
  { qty: 365, price: 730 },
  { qty: 500, price: 1000 },
  { qty: 1000, price: 1500 },
  { qty: 2000, price: 2800 },
  { qty: 3000, price: 4200 },
  { qty: 4000, price: 5200 },
  { qty: 5000, price: 6250 },
  { qty: 6000, price: 7200 },
  { qty: 8000, price: 8800 },
  { qty: 10000, price: 9500 },
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
EOF

cat > components/AssetVisuals.tsx <<'EOF'
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
EOF

cat > components/Navbar.tsx <<'EOF'
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CONTACT } from '@/lib/neartec-data'

const primaryLinks = [
  ['Soluciones', '/soluciones'],
  ['Web y apps', '/diseno-web'],
  ['Automatización e IA', '/crm-automatizacion'],
  ['CompuNegocio', '/compunegocio'],
  ['CN7/Nube', '/cn7'],
  ['Soporte', '/soporte'],
]

const actionLinks = [
  ['Cotizador', '/cotizador'],
  ['Diagnóstico', '/landing'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nt-navbar">
      <div className="container nt-navbar-inner">
        <Link href="/" className="nt-brand" aria-label="NearTec inicio" onClick={close}>
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={196} height={70} priority />
        </Link>

        <nav className="nt-desktop-nav" aria-label="Navegación principal">
          {primaryLinks.slice(0, 5).map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <div className="nt-nav-actions">
          <Link className="nt-nav-cta" href="/cotizador">Cotizar</Link>
          <button className="nt-menu-button" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nt-mobile-panel" role="dialog" aria-modal="true" aria-label="Menú NearTec">
          <div className="nt-mobile-card">
            <div className="nt-mobile-head">
              <b>NearTec</b>
              <button type="button" onClick={close} aria-label="Cerrar menú">×</button>
            </div>

            <div className="nt-mobile-group">
              <small>Soluciones principales</small>
              <div className="nt-mobile-links">
                {primaryLinks.map(([label, href]) => (
                  <Link key={href} href={href} onClick={close}>{label}<span>→</span></Link>
                ))}
              </div>
            </div>

            <div className="nt-mobile-group compact">
              <small>Acción</small>
              <div className="nt-mobile-links two-col">
                {actionLinks.map(([label, href]) => (
                  <Link key={href} href={href} onClick={close}>{label}<span>→</span></Link>
                ))}
              </div>
            </div>

            <div className="nt-mobile-contact">
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={close}>WhatsApp {CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`} onClick={close}>{CONTACT.email}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
EOF

cat > components/Footer.tsx <<'EOF'
import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>NearTec</h2>
          <p>
            Desarrollo, automatización, infraestructura y soporte para empresas que necesitan tecnología útil, estable y conectada.
          </p>
          <div className="footer-badges">
            <span>{CONTACT.rfc}</span>
            <span>Tijuana, B.C.</span>
          </div>
        </div>

        <div>
          <b>Empieza</b>
          <p><Link href="/landing">Diagnóstico tecnológico</Link></p>
          <p><Link href="/cotizador">Cotizador</Link></p>
          <p><Link href="/contacto">Contacto</Link></p>
        </div>

        <div>
          <b>Soluciones</b>
          <p><Link href="/diseno-web">Web, apps y desarrollo</Link></p>
          <p><Link href="/crm-automatizacion">CRM, automatización e IA</Link></p>
          <p><Link href="/compunegocio">CompuNegocio, POS y timbres</Link></p>
          <p><Link href="/cn7">CN7, nube e infraestructura</Link></p>
        </div>

        <div>
          <b>Contacto</b>
          <p><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p>
          <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          <p>{CONTACT.address}</p>
        </div>
      </div>
    </footer>
  )
}
EOF

cat > lib/neary-knowledge.ts <<'EOF'
import { CONTACT } from './neartec-data'

export const QUICK_SUGGESTIONS = [
  'Necesito una web o app',
  'Quiero automatizar procesos',
  'Quiero CompuNegocio',
  'Necesito CN7 o respaldo',
  'Precios base',
  'Hablar por WhatsApp',
]

type Answer = { answer: string; escalate?: boolean; action?: 'quote' | 'whatsapp' | 'landing' }
const whatsapp = `WhatsApp NearTec: ${CONTACT.phoneDisplay}`

const rules: Array<{ keys: string[]; answer: string; escalate?: boolean; action?: Answer['action'] }> = [
  {
    keys: ['web', 'landing', 'pagina', 'página', 'app', 'apps', 'desarrollo', 'codigo', 'código', 'software'],
    answer:
      'NearTec puede desarrollar sitios web, landings, apps, paneles, módulos e integraciones a medida. Lo correcto es definir objetivo, funciones, usuarios, integraciones y prioridad para cotizar con contexto.',
    action: 'landing',
  },
  {
    keys: ['crm', 'automatizacion', 'automatización', 'ia', 'ai', 'seguimiento', 'proceso'],
    answer:
      'Para CRM, automatización e IA revisamos qué tareas se repiten, qué datos se pierden y qué canales deben conectarse: formularios, WhatsApp, correo, CRM, reportes o sistemas internos.',
    action: 'quote',
  },
  {
    keys: ['compunegocio', 'pos', 'punto de venta', 'inventario', 'ventas'],
    answer:
      'CompuNegocio cubre punto de venta, inventario, usuarios, reportes y operación. Base: $450 MXN/mes por estación de 1 a 3 usuarios, $400 de 4 a 8 y $350 desde 9 o más. Implementación base: $1,500 MXN.',
    action: 'quote',
  },
  {
    keys: ['cn7', 'nube', 'respaldo', 'hosting', 'vps', 'ftp', 'correo', 'infraestructura'],
    answer:
      'CN7 e infraestructura cubren servidor, base de datos, respaldo, hosting, VPS, FTP, correo y continuidad. CN7 con respaldo parte de $99 USD/mes y CN7 hospedado de $149 USD/mes.',
    action: 'quote',
  },
  {
    keys: ['precio', 'precios', 'costo', 'cotizar', 'cuanto', 'cuánto'],
    answer:
      'Precios base documentados: CompuNegocio $350–$450 MXN/mes por estación, implementación $1,500 MXN, soporte con póliza $499 MXN/h, desarrollo con póliza $999 MXN/h, CN7 desde $99 USD/mes y timbres CN por paquete.',
    action: 'quote',
  },
  {
    keys: ['itimbre', 'factura', 'cfdi', 'timbre', 'fiscal'],
    answer:
      'NearTec puede orientarte con CFDI, timbres, operación fiscal e integraciones relacionadas. Para darte una ruta clara conviene revisar tu sistema actual, volumen de timbres y operación.',
    escalate: true,
    action: 'whatsapp',
  },
  {
    keys: ['whatsapp', 'asesor', 'llamar', 'humano'],
    answer: `Claro. ${whatsapp}. Te conviene mandar: empresa, número de usuarios, si ya tienes web/POS/nube y qué quieres resolver primero.`,
    escalate: true,
    action: 'whatsapp',
  },
]

export function getNearyAnswer(question: string): Answer {
  const normalized = question.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  const found = rules.find((rule) =>
    rule.keys.some((key) => normalized.includes(key.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()))
  )
  if (found) return { answer: found.answer, escalate: found.escalate, action: found.action }
  return {
    answer: `Para perfilar bien tu caso necesito saber qué quieres resolver: web/app, automatización/IA, CRM, CompuNegocio, CN7/nube, hosting/correo, soporte o integración fiscal. ${whatsapp}.`,
    escalate: true,
    action: 'whatsapp',
  }
}
EOF

cat > components/ServicePage.tsx <<'EOF'
import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import { ServiceAssetVisual } from '@/components/AssetVisuals'
import { CONTACT } from '@/lib/neartec-data'

type Kind =
  | 'suite'
  | 'web'
  | 'crm'
  | 'compunegocio'
  | 'cn7'
  | 'soporte'
  | 'contacto'
  | 'recursos'
  | 'casos'

export default function ServicePage({
  kind,
  eyebrow,
  title,
  description,
  features,
  proof,
}: {
  kind: Kind
  eyebrow: string
  title: string
  description: string
  features: [string, string][]
  proof?: string[]
}) {
  return (
    <>
      <section className="page-hero service-hero">
        <div className="container page-hero-grid">
          <div className="page-copy">
            <span className="eyebrow eyebrow-solid">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            {proof && (
              <div className="proof-pills">
                {proof.map((item) => <span key={item}>{item}</span>)}
              </div>
            )}
            <div className="hero-actions">
              <Link className="btn btn-green" href="/cotizador">Cotizar mi solución</Link>
              <Link className="btn btn-outline" href="/landing">Diagnóstico tecnológico</Link>
              <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>Hablar por WhatsApp</a>
            </div>
          </div>
          <ServiceAssetVisual kind={kind} />
        </div>
      </section>

      <section className="section section-separated">
        <div className="container feature-grid">
          {features.map(([heading, body], index) => (
            <div className="feature-tile" key={heading}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <b>{heading}</b>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuoteEngine compact />
        </div>
      </section>
    </>
  )
}
EOF

cat > app/page.tsx <<'EOF'
import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import LeadForm from '@/components/LeadForm'
import { HomeHeroAsset, ServiceShowcaseVisual } from '@/components/AssetVisuals'
import { CONTACT, leadPains, priceSignals, proofStats, solutions, techLayers } from '@/lib/neartec-data'

export default function HomePage() {
  return (
    <>
      <section className="hero hero-v47">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-solid">Integrador tecnológico para empresas</span>
            <h1>Desarrollamos tecnología para que tu empresa venda, opere y escale.</h1>
            <p>
              NearTec diseña e integra web, apps, automatizaciones, CRM, inteligencia artificial,
              CompuNegocio, CN7, nube, correo, soporte e infraestructura para que tu operación funcione
              como una sola ruta tecnológica.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-green" href="/cotizador">Cotizar proyecto</Link>
              <Link className="btn btn-outline" href="/landing">Diagnóstico tecnológico</Link>
              <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
          </div>

          <HomeHeroAsset />
        </div>

        <div className="container trust-strip elevated-strip">
          {proofStats.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}
        </div>
      </section>

      <section className="section section-separated">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Soluciones conectadas</span>
              <h2>Una misma ruta para presencia, desarrollo, automatización, operación e infraestructura.</h2>
            </div>
            <p>
              NearTec no es solo una agencia de leads. Es un socio tecnológico que desarrolla, integra,
              automatiza, da soporte y sostiene la operación digital de tu empresa.
            </p>
          </div>

          <ServiceShowcaseVisual />

          <div className="solutions-grid premium-grid">
            {solutions.map((s) => (
              <Link href={s.href} className={`solution-card-v2 accent-${s.accent}`} key={s.title}>
                <div className="card-topline"><small>{s.tag}</small><span>{s.metric}</span></div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <b className="card-link">Ver solución →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-system">
        <div className="container system-panel">
          <div className="section-heading center">
            <span className="eyebrow">Arquitectura NearTec</span>
            <h2>No vendemos piezas sueltas. Conectamos la tecnología que tu empresa necesita para operar mejor.</h2>
            <p>Desde presencia digital hasta sistemas, nube, soporte, automatizaciones e integraciones a medida.</p>
          </div>

          <div className="layer-grid">
            {techLayers.map(([title, body]) => <div className="layer-card" key={title}><b>{title}</b><p>{body}</p></div>)}
          </div>

          <div className="pricing-signal">
            {priceSignals.map(([label, value]) => <span key={label}>{label} <b>{value}</b></span>)}
          </div>

          <div className="pain-grid refined-pain">
            {leadPains.map(([a, b]) => <div className="pain-card" key={a}><b>{a}</b><p>{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="cotizador">
        <div className="container"><QuoteEngine /></div>
      </section>

      <section className="section section-separated compact-section">
        <div className="container split lead-block">
          <div className="section-heading">
            <span className="eyebrow">Diagnóstico y contacto</span>
            <h2>Cuéntanos qué necesitas y definimos qué conviene desarrollar, integrar, automatizar o respaldar primero.</h2>
            <p>
              Si tu proyecto necesita web, app, IA, CRM, CompuNegocio, CN7, nube, soporte o una solución a medida,
              te ayudamos a aterrizar el siguiente paso.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-dark" href="/landing">Abrir diagnóstico</Link>
              <a className="btn btn-outline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <LeadForm source="home-v47" />
        </div>
      </section>
    </>
  )
}
EOF

cat > app/soluciones/page.tsx <<'EOF'
import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import { ServiceShowcaseVisual } from '@/components/AssetVisuals'
import { CONTACT, solutions, techLayers } from '@/lib/neartec-data'

export const metadata = {
  title: 'Soluciones NearTec',
  description: 'NearTec desarrolla e integra tecnología: web, apps, automatización, IA, CompuNegocio, CN7, nube, soporte, hosting, correo y proyectos a medida.',
}

export default function Page() {
  return (
    <>
      <section className="page-hero page-hero-v47">
        <div className="container page-hero-grid">
          <div className="page-copy">
            <span className="eyebrow eyebrow-solid">Soluciones NearTec</span>
            <h1>Tecnología para vender, operar, automatizar y crecer con más control.</h1>
            <p>
              Desarrollamos e integramos sitios web, apps, CRM, automatizaciones, IA, CompuNegocio,
              CN7, nube, hosting, correo, soporte y proyectos tecnológicos a medida.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-green" href="/cotizador">Cotizar solución</Link>
              <Link className="btn btn-outline" href="/landing">Diagnóstico tecnológico</Link>
              <a className="btn btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
          </div>
          <ServiceShowcaseVisual />
        </div>
      </section>

      <section className="section section-separated">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Capas de servicio</span><h2>NearTec cubre desde código hasta operación diaria.</h2></div>
            <p>La idea no es venderte herramientas aisladas; es conectar lo que tu empresa necesita para trabajar mejor.</p>
          </div>
          <div className="feature-grid">
            {techLayers.map(([heading, body], index) => (
              <div className="feature-tile" key={heading}><span>{String(index + 1).padStart(2, '0')}</span><b>{heading}</b><p>{body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-separated light-section">
        <div className="container solutions-grid premium-grid">
          {solutions.map((s) => (
            <Link href={s.href} className={`solution-card-v2 accent-${s.accent}`} key={s.title}>
              <div className="card-topline"><small>{s.tag}</small><span>{s.metric}</span></div>
              <h3>{s.title}</h3><p>{s.summary}</p>
              <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <b className="card-link">Ver solución →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-tight"><div className="container"><QuoteEngine compact /></div></section>
    </>
  )
}
EOF

cat > app/landing/page.tsx <<'EOF'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import { LandingAssetScene } from '@/components/AssetVisuals'
import { CONTACT } from '@/lib/neartec-data'

export const metadata = {
  title: 'Diagnóstico tecnológico NearTec',
  description: 'Detecta qué necesita tu empresa: web, apps, automatización, CRM, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.',
}

export default function LandingPage() {
  return (
    <>
      <section className="landing-hero">
        <div className="container landing-grid">
          <div className="page-copy">
            <span className="eyebrow eyebrow-solid">Diagnóstico tecnológico</span>
            <h1>Detecta qué tecnología necesita tu empresa para vender, operar y crecer mejor.</h1>
            <p>
              Revisamos si necesitas web, app, automatización, CRM, IA, CompuNegocio, CN7, nube,
              soporte, infraestructura o desarrollo a medida. Sin humo: una ruta clara y cotizable.
            </p>
            <div className="hero-actions">
              <a className="btn btn-green" href="#aplicar">Quiero mi diagnóstico</a>
              <a className="btn btn-outline" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
            </div>
            <div className="landing-proof">
              <span>Web / apps</span><span>CRM / IA</span><span>POS / CN7</span><span>Nube / soporte</span>
            </div>
          </div>
          <div className="landing-visual-stack"><LandingAssetScene /><LeadForm source="landing-v47" /></div>
        </div>
      </section>

      <section className="section section-separated">
        <div className="container conversion-grid">
          <div className="conversion-card"><span>01</span><b>Detectamos el cuello de botella</b><p>Presencia digital, operación, seguimiento, sistemas, nube, soporte o seguridad.</p></div>
          <div className="conversion-card"><span>02</span><b>Definimos la ruta técnica</b><p>Qué desarrollar, integrar, automatizar, migrar, respaldar o configurar primero.</p></div>
          <div className="conversion-card"><span>03</span><b>Avanzas con cotización clara</b><p>Con alcance, prioridad, módulos base y siguiente paso entendible.</p></div>
        </div>
      </section>

      <div id="aplicar" className="container pb-16"><Link className="btn btn-dark" href="/cotizador">Abrir cotizador completo</Link></div>
    </>
  )
}
EOF

cat > app/diagnostico/page.tsx <<'EOF'
export { default, metadata } from '../landing/page'
EOF

cat > app/compunegocio/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CompuNegocio NearTec',
  description: 'Implementa CompuNegocio para ventas, inventario, usuarios, reportes, timbres y operación diaria.',
}

export default function Page() {
  return (
    <ServicePage
      kind="compunegocio"
      eyebrow="CompuNegocio"
      title="Vende, cobra y controla mejor tu operación diaria."
      description="Implementamos CompuNegocio para punto de venta, inventario, usuarios, reportes, timbres y operación con más orden."
      proof={['Desde $450 MXN por estación / mes', 'Implementación base $1,500 MXN', 'Timbres CN disponibles']}
      features={[
        ['Punto de venta e inventario', 'Controla ventas, productos, clientes, usuarios y movimientos diarios desde una operación más clara.'],
        ['Implementación remota base', 'Instalación, configuración inicial, CSD, logo y capacitación para arrancar con mejor estructura.'],
        ['Timbres, reportes y soporte', 'Cotiza paquetes de timbres, soporte, ajustes y desarrollo según el tamaño real de tu operación.'],
      ]}
    />
  )
}
EOF

cat > app/cn7/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CN7, nube y respaldo NearTec',
  description: 'CN7, nube, respaldo, hosting, VPS, correo y continuidad para empresas que necesitan operar con menos riesgo.',
}

export default function Page() {
  return (
    <ServicePage
      kind="cn7"
      eyebrow="CN7, nube e infraestructura"
      title="Menos riesgo local, más continuidad para operar."
      description="Llevamos tu sistema, respaldo o infraestructura a una ruta más estable con CN7, nube, hosting, VPS, correo, FTP y soporte técnico."
      proof={['CN7 desde $99 USD / mes', 'CN7 hospedado $149 USD / mes', 'Respaldo automático disponible']}
      features={[
        ['CN7 con respaldo', 'Ideal para negocios que necesitan proteger base de datos, sistema y continuidad operativa.'],
        ['Hosting, VPS, correo y FTP', 'Infraestructura administrada para proyectos, sistemas, correos corporativos y operación técnica.'],
        ['Recuperación y soporte', 'Mejor preparación ante fallas, cambios de equipo, pérdida de información o crecimiento operativo.'],
      ]}
    />
  )
}
EOF

cat > app/crm-automatizacion/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CRM, automatización e IA NearTec',
  description: 'CRM, automatizaciones, WhatsApp, formularios, IA y seguimiento para empresas que necesitan procesos más claros.',
}

export default function Page() {
  return (
    <ServicePage
      kind="crm"
      eyebrow="CRM, automatización e IA"
      title="Automatiza procesos y atiende oportunidades con más contexto."
      description="Diseñamos flujos con CRM, formularios, WhatsApp, correo, recordatorios e inteligencia artificial aplicada para reducir trabajo repetitivo."
      proof={['CRM y seguimiento', 'Automatizaciones', 'IA aplicada a procesos']}
      features={[
        ['Procesos más ordenados', 'Centraliza prospectos, tareas, prioridades y seguimiento para que nada importante se pierda.'],
        ['Automatización útil', 'Conecta formularios, WhatsApp, correo, cotizaciones, alertas y recordatorios sin meter ruido innecesario.'],
        ['IA aplicada al negocio', 'Asistentes, respuestas, análisis, clasificación y apoyo operativo según el proceso real de tu empresa.'],
      ]}
    />
  )
}
EOF

cat > app/diseno-web/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Web, apps y desarrollo NearTec',
  description: 'Sitios web, apps, landings, paneles, automatizaciones e integraciones a medida desarrolladas por NearTec.',
}

export default function Page() {
  return (
    <ServicePage
      kind="web"
      eyebrow="Web, apps y código"
      title="Desarrollamos presencia digital y herramientas que sí se usan."
      description="Creamos sitios web, landings, apps, paneles e integraciones preparadas para explicar, vender, automatizar y operar mejor."
      proof={['Sitios web y landings', 'Apps y paneles', 'Integraciones a medida']}
      features={[
        ['Sitios que explican y convierten', 'Mensaje claro, SEO técnico, carga rápida, formularios, WhatsApp y estructura preparada para campañas.'],
        ['Apps y herramientas internas', 'Paneles, flujos, módulos y sistemas para reducir tareas manuales y mejorar control operativo.'],
        ['Integraciones reales', 'Conexión con CRM, correo, WhatsApp, cotizador, CompuNegocio, nube o sistemas internos según alcance.'],
      ]}
    />
  )
}
EOF

cat > app/soporte/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Soporte, mantenimiento y desarrollo NearTec',
  description: 'Soporte remoto, mantenimiento, configuración, desarrollo, ajustes, infraestructura y continuidad operativa NearTec.',
}

export default function Page() {
  return (
    <ServicePage
      kind="soporte"
      eyebrow="Soporte y mantenimiento"
      title="Soporte técnico para que tu operación no se quede atorada."
      description="Te apoyamos con soporte remoto, configuración, capacitación, mantenimiento, ajustes, desarrollo, infraestructura y continuidad."
      proof={['Soporte con póliza $499 MXN/h', 'Desarrollo con póliza $999 MXN/h', 'Atención remota']}
      features={[
        ['Atención para problemas reales', 'Configuraciones, errores, instalación, usuarios, correos, respaldos, sistemas y operación diaria.'],
        ['Mantenimiento y mejoras', 'Ajustes, formatos, reportes, cambios mayores, integraciones y evolución tecnológica.'],
        ['Escala según necesidad', 'Puedes empezar con soporte puntual y avanzar a infraestructura, automatización o desarrollo a medida.'],
      ]}
    />
  )
}
EOF

cat > app/contacto/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Contacto NearTec',
  description: 'Habla con NearTec por WhatsApp, correo, diagnóstico o cotización tecnológica.',
}

export default function Page() {
  return (
    <ServicePage
      kind="contacto"
      eyebrow="Contacto"
      title="Hablemos de la tecnología que tu empresa necesita resolver."
      description="Escríbenos por WhatsApp, correo o cotizador. Te ayudamos a definir si necesitas web, app, automatización, CompuNegocio, CN7, nube, soporte o desarrollo a medida."
      proof={['WhatsApp 664 404 6194', 'meta@itimbre.com', 'Diagnóstico tecnológico']}
      features={[
        ['WhatsApp directo', 'Comparte tu caso, número de usuarios, sistema actual y qué problema quieres resolver primero.'],
        ['Correo comercial', 'Útil cuando necesitas mandar contexto, archivos, alcances o requerimientos más detallados.'],
        ['Diagnóstico o cotización', 'Podemos ayudarte con un problema puntual o con una ruta tecnológica integral.'],
      ]}
    />
  )
}
EOF

cat > app/casos/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Casos y proyectos NearTec',
  description: 'Ejemplos de rutas tecnológicas NearTec para web, apps, automatización, CompuNegocio, CN7, nube y soporte.',
}

export default function Page() {
  return (
    <ServicePage
      kind="casos"
      eyebrow="Casos NearTec"
      title="Proyectos donde la tecnología deja de estar suelta y empieza a trabajar conectada."
      description="Cada negocio requiere una combinación distinta: web, apps, CRM, automatización, CompuNegocio, CN7, nube, soporte o desarrollo a medida."
      proof={['Arquitectura por necesidad', 'Implementación por fases', 'Soporte continuo']}
      features={[
        ['Presencia y captación', 'Sitios, landings, formularios, WhatsApp y contenido técnico para explicar mejor el servicio.'],
        ['Operación y control', 'CompuNegocio, timbres, inventario, usuarios, reportes y mejoras operativas.'],
        ['Infraestructura y continuidad', 'CN7, nube, respaldo, hosting, correo, VPS, soporte y mantenimiento.'],
      ]}
    />
  )
}
EOF

cat > app/recursos/page.tsx <<'EOF'
import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Recursos NearTec',
  description: 'Recursos para entender web, apps, automatización, CompuNegocio, CN7, nube, soporte y desarrollo tecnológico.',
}

export default function Page() {
  return (
    <ServicePage
      kind="recursos"
      eyebrow="Recursos"
      title="Claridad para decidir qué tecnología implementar primero."
      description="Organizamos la información de servicios, precios base, rutas de implementación y próximos pasos para que compres tecnología con menos confusión."
      proof={['Precios base', 'Diagnóstico', 'Cotizador']}
      features={[
        ['Guías por necesidad', 'Web, app, CRM, IA, CompuNegocio, CN7, nube, correo, hosting o soporte.'],
        ['Costos de referencia', 'Bases documentadas para orientar la conversación antes de una propuesta formal.'],
        ['Siguiente paso claro', 'Diagnóstico, cotización o contacto directo según el nivel de definición del proyecto.'],
      ]}
    />
  )
}
EOF

cat > app/cotizador/page.tsx <<'EOF'
import QuoteEngine from '@/components/QuoteEngine'
import { QuoteAssetVisual } from '@/components/AssetVisuals'

export const metadata = {
  title: 'Cotizador NearTec',
  description: 'Calcula una base para CompuNegocio, CN7, soporte, desarrollo, timbres y soluciones tecnológicas NearTec.',
}

export default function CotizadorPage() {
  return (
    <section className="page-hero cotizador-page">
      <div className="container page-hero-grid">
        <div className="page-copy">
          <span className="eyebrow eyebrow-solid">Cotizador NearTec</span>
          <h1>Cotiza con claridad antes de comprar tecnología.</h1>
          <p>
            Estima una base inicial para CompuNegocio, CN7, timbres, soporte, desarrollo o una ruta tecnológica integral.
            Después puedes compartirla por WhatsApp, correo o PDF para avanzar con contexto.
          </p>
        </div>
        <QuoteAssetVisual />
      </div>
      <div className="container mt-10"><QuoteEngine /></div>
    </section>
  )
}
EOF

cat > app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --nt-bg:#f7fbf2;
  --nt-bg-2:#eef8e9;
  --nt-card:rgba(255,255,255,.86);
  --nt-text:#06140d;
  --nt-muted:#526158;
  --nt-soft:#e0ecd8;
  --nt-line:rgba(8,34,18,.12);
  --nt-green:#08a33e;
  --nt-green-2:#95f72b;
  --nt-lime:#a8fb32;
  --nt-dark:#082015;
  --nt-shadow:0 24px 70px rgba(12,44,24,.12);
  --nt-radius:34px;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  min-height:100vh;
  background:var(--nt-bg);
  color:var(--nt-text);
  font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-rendering:optimizeLegibility;
  -webkit-font-smoothing:antialiased;
}
a{color:inherit;text-decoration:none}
img{max-width:100%;height:auto}
button,input,select,textarea{font:inherit}
main{position:relative;z-index:1;overflow:hidden}
.site-bg{position:fixed;inset:0;z-index:0;pointer-events:none;background:radial-gradient(circle at 16% 8%,rgba(163,255,45,.25),transparent 28%),radial-gradient(circle at 88% 16%,rgba(0,166,70,.14),transparent 26%),linear-gradient(180deg,#fbfff7 0%,#eef8e9 52%,#f9fff6 100%)}
.site-bg:after{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(9,67,32,.055) 1px, transparent 1px),linear-gradient(90deg,rgba(9,67,32,.055) 1px, transparent 1px);background-size:88px 88px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.75),transparent 82%)}
.container{width:min(1180px,calc(100% - 40px));margin-inline:auto}.pb-16{padding-bottom:64px}.mt-10{margin-top:40px}.text-near-mute{color:var(--nt-muted)}

.nt-navbar{position:sticky;top:0;z-index:50;background:rgba(251,255,248,.82);backdrop-filter:blur(22px);border-bottom:1px solid rgba(9,45,22,.08)}
.nt-navbar-inner{height:88px;display:flex;align-items:center;gap:26px;justify-content:space-between}.nt-brand{display:flex;align-items:center;min-width:180px}.nt-brand img{width:178px;height:auto}.nt-desktop-nav{display:flex;gap:18px;align-items:center;font-size:.9rem;font-weight:850;color:#244032}.nt-desktop-nav a{opacity:.84}.nt-desktop-nav a:hover{opacity:1;color:var(--nt-green)}.nt-nav-actions{display:flex;align-items:center;gap:12px}.nt-nav-cta{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 24px;border-radius:999px;background:linear-gradient(135deg,var(--nt-green),var(--nt-lime));font-weight:950;box-shadow:0 15px 36px rgba(27,184,55,.24)}.nt-menu-button{width:54px;height:54px;border:1px solid var(--nt-line);background:#fff;border-radius:50%;display:none;place-items:center;position:relative}.nt-menu-button span{position:absolute;width:22px;height:2px;background:var(--nt-text);border-radius:8px}.nt-menu-button span:first-child{transform:translateY(-4px)}.nt-menu-button span:last-child{transform:translateY(4px)}
.nt-mobile-panel{position:fixed;inset:0;z-index:80;background:rgba(235,245,231,.72);backdrop-filter:blur(18px);padding:108px 16px 20px;overflow:auto}.nt-mobile-card{background:rgba(255,255,255,.96);border:1px solid rgba(8,34,18,.1);border-radius:34px;box-shadow:0 30px 80px rgba(8,34,18,.18);overflow:hidden}.nt-mobile-head{height:80px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid rgba(8,34,18,.08)}.nt-mobile-head b{font-size:1.35rem}.nt-mobile-head button{width:52px;height:52px;border:0;border-radius:50%;background:#eef8e9;font-size:2rem;line-height:1}.nt-mobile-group{padding:22px 24px 8px}.nt-mobile-group small{display:block;margin-bottom:12px;text-transform:uppercase;letter-spacing:.18em;font-weight:950;color:#1a6b30;font-size:.72rem}.nt-mobile-links{display:grid;gap:8px}.nt-mobile-links.two-col{grid-template-columns:1fr 1fr}.nt-mobile-links a{display:flex;align-items:center;justify-content:space-between;min-height:54px;padding:0 14px;border-radius:18px;background:#f8fbf5;font-weight:950;font-size:1.04rem}.nt-mobile-links a span{color:var(--nt-green)}.nt-mobile-contact{display:grid;gap:10px;padding:20px 24px 24px;background:linear-gradient(180deg,rgba(239,250,232,.2),rgba(239,250,232,.9))}.nt-mobile-contact a{display:flex;align-items:center;justify-content:center;min-height:54px;border-radius:999px;background:#fff;border:1px solid var(--nt-line);font-weight:950}

.hero,.page-hero,.landing-hero{position:relative;padding:76px 0 46px}.hero-grid,.page-hero-grid,.landing-grid{display:grid;grid-template-columns:minmax(0,.96fr) minmax(0,1.04fr);gap:54px;align-items:center}.hero-copy,.page-copy{position:relative;z-index:2}.eyebrow{display:inline-flex;align-items:center;gap:10px;padding:10px 16px;border:1px solid var(--nt-line);border-radius:999px;background:rgba(255,255,255,.78);font-size:.78rem;font-weight:950;text-transform:uppercase;letter-spacing:.18em;color:#145e28;box-shadow:0 10px 30px rgba(8,34,18,.06)}.eyebrow:before{content:"";width:13px;height:13px;border-radius:50%;background:linear-gradient(135deg,var(--nt-green),var(--nt-lime));box-shadow:0 0 0 8px rgba(145,247,43,.18)}h1,h2,h3{letter-spacing:-.065em;line-height:.91;margin:0;font-family:Inter, ui-sans-serif, system-ui, sans-serif}h1{font-size:clamp(3.15rem,7.6vw,6.8rem);max-width:970px}.page-hero h1,.landing-hero h1{font-size:clamp(2.85rem,6.2vw,5.5rem)}h2{font-size:clamp(2.2rem,4.4vw,4.8rem)}h3{font-size:clamp(1.6rem,2.4vw,2.7rem)}.hero-copy p,.page-copy p,.section-heading p,.landing-hero p{font-size:clamp(1.05rem,1.6vw,1.35rem);line-height:1.65;color:var(--nt-muted);font-weight:750;margin:28px 0 0}.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:58px;padding:0 28px;border-radius:999px;border:1px solid var(--nt-line);font-weight:950;transition:transform .2s ease,box-shadow .2s ease,background .2s ease;cursor:pointer}.btn:hover{transform:translateY(-2px)}.btn-green{background:linear-gradient(135deg,var(--nt-green),var(--nt-lime));box-shadow:0 20px 44px rgba(27,184,55,.24);color:#06140d;border-color:rgba(0,0,0,.02)}.btn-outline{background:rgba(255,255,255,.88)}.btn-dark{background:var(--nt-dark);color:#fff}.btn-ghost{background:rgba(239,250,232,.72);color:#193c23}.trust-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:34px;border:1px solid var(--nt-line);border-radius:28px;overflow:hidden;background:var(--nt-line);box-shadow:var(--nt-shadow)}.trust-strip div{background:rgba(255,255,255,.82);padding:23px}.trust-strip b{display:block;font-size:1.08rem}.trust-strip span{display:block;margin-top:4px;color:var(--nt-muted);font-weight:750}

.asset-hero-shell,.asset-landing-shell{position:relative;min-height:560px}.asset-hero-stack,.asset-landing-stack{position:relative;min-height:560px;border-radius:42px;overflow:hidden;background:rgba(255,255,255,.55);box-shadow:var(--nt-shadow);border:1px solid rgba(255,255,255,.75)}.asset-mobile{display:none}.asset-hero-img,.asset-img,.asset-service-img{object-fit:cover}.asset-hero-badge{position:absolute;z-index:2;display:inline-flex;align-items:center;gap:8px;padding:12px 16px;border-radius:999px;background:rgba(255,255,255,.9);border:1px solid rgba(8,34,18,.1);box-shadow:0 18px 44px rgba(8,34,18,.12);font-weight:950;color:#123d20}.badge-a{left:6%;top:9%}.badge-b{right:5%;top:19%}.badge-c{left:16%;bottom:10%}.asset-frame{position:relative;min-height:430px;border-radius:42px;overflow:hidden;border:1px solid rgba(255,255,255,.78);background:rgba(255,255,255,.76);box-shadow:var(--nt-shadow)}.asset-frame:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 52%,rgba(247,251,242,.86));pointer-events:none}.asset-frame-label{position:absolute;left:24px;bottom:24px;z-index:2;padding:12px 18px;border-radius:999px;background:rgba(255,255,255,.92);font-weight:950;color:#114b24;box-shadow:0 16px 34px rgba(8,34,18,.12)}.asset-service-showcase{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin:34px 0}.asset-service-card{background:rgba(255,255,255,.78);border:1px solid var(--nt-line);border-radius:28px;padding:12px;box-shadow:0 18px 48px rgba(8,34,18,.08)}.asset-service-image{position:relative;min-height:180px;border-radius:22px;overflow:hidden;background:#fff}.asset-service-card b{display:block;padding:14px 8px 6px;font-size:1rem;letter-spacing:-.03em}.asset-quote-shell{min-height:420px}.asset-neary-shell{min-height:380px}

.section{padding:78px 0}.section-tight{padding:42px 0 78px}.section-separated{border-top:1px solid rgba(8,34,18,.08)}.light-section{background:rgba(255,255,255,.22)}.compact-section{padding-top:62px}.section-heading{margin-bottom:34px}.section-heading.center{text-align:center;max-width:880px;margin-inline:auto}.split-heading{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:end}.split-heading p{margin:0}.solutions-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.solution-card-v2,.feature-tile,.pain-card,.layer-card,.conversion-card,.nt-card{background:var(--nt-card);border:1px solid var(--nt-line);border-radius:var(--nt-radius);box-shadow:0 18px 48px rgba(8,34,18,.08)}.solution-card-v2{padding:28px;display:flex;min-height:360px;flex-direction:column}.solution-card-v2 h3{margin-top:22px;font-size:2.35rem}.solution-card-v2 p{margin:18px 0;color:var(--nt-muted);line-height:1.55;font-weight:720}.solution-card-v2 ul{display:grid;gap:10px;padding:0;margin:8px 0 26px;list-style:none}.solution-card-v2 li{font-weight:850;color:#1d3c2a}.solution-card-v2 li:before{content:"✓";margin-right:10px;color:var(--nt-green)}.card-topline{display:flex;align-items:center;justify-content:space-between;gap:12px}.card-topline small{font-weight:950;text-transform:uppercase;letter-spacing:.16em;color:#167331}.card-topline span{padding:8px 12px;border-radius:999px;background:#eef8e9;font-weight:950;color:#173d24}.card-link{margin-top:auto;color:#0a9438}.feature-grid,.layer-grid,.pain-grid,.conversion-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.feature-tile,.layer-card,.pain-card,.conversion-card{padding:26px}.feature-tile span,.conversion-card span{display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:16px;background:#092016;color:var(--nt-lime);font-weight:950;margin-bottom:22px}.feature-tile b,.layer-card b,.pain-card b,.conversion-card b{display:block;font-size:1.35rem;letter-spacing:-.04em}.feature-tile p,.layer-card p,.pain-card p,.conversion-card p{color:var(--nt-muted);line-height:1.55;font-weight:720;margin:12px 0 0}.system-panel{padding:42px;border-radius:46px;background:linear-gradient(180deg,rgba(255,255,255,.7),rgba(239,250,232,.72));border:1px solid var(--nt-line);box-shadow:var(--nt-shadow)}.pricing-signal{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:26px 0}.pricing-signal span{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px;border-radius:999px;background:rgba(255,255,255,.82);border:1px solid var(--nt-line);font-weight:800;color:#42584a}.pricing-signal b{color:#06140d}.proof-pills,.landing-proof{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}.proof-pills span,.landing-proof span{padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.82);border:1px solid var(--nt-line);font-weight:900;color:#173d24}

.split,.lead-block{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start}.quote-wrap{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr);gap:20px;align-items:start}.nt-card{padding:28px}.quote-form h2{line-height:1;letter-spacing:-.06em}.field-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.field{display:grid;gap:8px}.field label{font-size:.82rem;text-transform:uppercase;letter-spacing:.12em;font-weight:950;color:#1a6b30}.field input,.field select,.field textarea{width:100%;border:1px solid var(--nt-line);border-radius:18px;background:rgba(255,255,255,.82);padding:14px 15px;outline:none;color:var(--nt-text)}.field textarea{min-height:110px;resize:vertical}.md\:col-span-2{grid-column:span 2}.quote-result{position:sticky;top:110px}.score-ring{display:grid;grid-template-columns:110px 1fr;gap:18px;align-items:center}.score-num{width:110px;height:110px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at center,#fff 58%,transparent 59%),conic-gradient(var(--nt-green) var(--score),#e6efdf 0);font-size:2.2rem;font-weight:950;color:#06140d;box-shadow:inset 0 0 0 1px rgba(8,34,18,.08)}.money-grid{display:grid;gap:10px;margin-top:24px}.money-grid div{display:flex;justify-content:space-between;gap:18px;border-bottom:1px solid var(--nt-line);padding:14px 0}.money-grid span{color:var(--nt-muted)}.money-grid b{font-size:1.2rem}.quote-actions{display:grid;gap:10px;margin-top:22px}.quote-actions .btn{width:100%}

.assist{position:fixed;right:22px;bottom:22px;z-index:70}.assist-trigger{width:66px;height:66px;border-radius:50%;border:1px solid rgba(255,255,255,.7);background:linear-gradient(135deg,var(--nt-green),var(--nt-lime));box-shadow:0 20px 50px rgba(17,168,53,.28);display:grid;place-items:center;padding:0}.neary-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.2)}.neary-mark img{width:100%;height:100%;object-fit:cover;border-radius:50%;transform:scale(1.18)}.assist-menu{position:absolute;right:0;bottom:78px;display:grid;gap:10px;opacity:0;transform:translateY(10px);pointer-events:none;transition:.2s ease}.assist-menu.open{opacity:1;transform:none;pointer-events:auto}.assist-menu a,.assist-menu button{white-space:nowrap;display:flex;align-items:center;gap:10px;border:1px solid var(--nt-line);background:white;border-radius:999px;padding:12px 16px;font-weight:950;box-shadow:0 14px 32px rgba(8,34,18,.12)}.assist-menu svg{width:20px;height:20px;color:var(--nt-green)}.assist-chat{position:absolute;right:0;bottom:80px;width:min(380px,calc(100vw - 32px));background:white;border:1px solid var(--nt-line);border-radius:28px;overflow:hidden;box-shadow:0 28px 80px rgba(8,34,18,.2)}.assist-chat header{display:flex;align-items:center;justify-content:space-between;padding:16px;border-bottom:1px solid var(--nt-line)}.assist-headline{display:flex;gap:10px;align-items:center}.assist-headline small{display:block;color:var(--nt-muted);font-weight:750}.assist-chat header button{border:0;background:#eef8e9;border-radius:50%;width:38px;height:38px;font-size:1.4rem}.assist-body{max-height:310px;overflow:auto;padding:16px;display:grid;gap:10px}.assist-body p{margin:0;padding:12px 14px;border-radius:18px;line-height:1.45;font-weight:700}.assist-body .bot{background:#eef8e9}.assist-body .user{background:#092016;color:white;margin-left:32px}.assist-chips{display:flex;gap:8px;overflow:auto;padding:0 16px 12px}.assist-chips button{white-space:nowrap;border:1px solid var(--nt-line);background:white;border-radius:999px;padding:8px 10px;font-weight:800}.assist-chat form{display:grid;grid-template-columns:1fr auto;gap:8px;padding:14px;border-top:1px solid var(--nt-line)}.assist-chat input{border:1px solid var(--nt-line);border-radius:999px;padding:12px 14px}.assist-chat form button{border:0;border-radius:999px;background:var(--nt-dark);color:white;font-weight:950;padding:0 14px}

.footer{position:relative;z-index:1;padding:58px 0;background:#06140d;color:white}.footer-grid{display:grid;grid-template-columns:1.2fr repeat(3,1fr);gap:28px}.footer h2{font-size:2.4rem}.footer p{color:rgba(255,255,255,.72);line-height:1.55}.footer b{display:block;margin-bottom:12px}.footer-badges{display:flex;gap:10px;flex-wrap:wrap}.footer-badges span{border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:8px 12px;color:rgba(255,255,255,.74)}

@media (max-width: 980px){
  .container{width:min(100% - 40px,720px)}.nt-navbar-inner{height:86px}.nt-brand img{width:156px}.nt-desktop-nav{display:none}.nt-menu-button{display:grid}.hero,.page-hero,.landing-hero{padding:38px 0 34px}.hero-grid,.page-hero-grid,.landing-grid,.split,.lead-block,.quote-wrap{grid-template-columns:1fr;gap:28px}h1{font-size:clamp(3rem,13vw,4.8rem);line-height:.89}.page-hero h1,.landing-hero h1{font-size:clamp(2.65rem,11vw,4.4rem);line-height:.9}.hero-copy p,.page-copy p,.section-heading p,.landing-hero p{font-size:1.06rem;line-height:1.58;margin-top:22px}.hero-actions{display:grid;grid-template-columns:1fr;gap:12px}.btn{width:100%;min-height:60px}.asset-hero-shell,.asset-landing-shell{min-height:auto;order:-1}.hero-copy + .asset-hero-shell{order:0}.asset-desktop{display:none}.asset-mobile{display:block}.asset-hero-stack,.asset-landing-stack{min-height:520px;border-radius:32px}.asset-hero-badge{font-size:.85rem;padding:10px 12px}.badge-a{left:6%;top:7%}.badge-b{right:5%;top:17%}.badge-c{left:7%;bottom:8%}.trust-strip,.asset-service-showcase,.solutions-grid,.feature-grid,.layer-grid,.pain-grid,.conversion-grid,.pricing-signal,.footer-grid{grid-template-columns:1fr}.split-heading{grid-template-columns:1fr;gap:18px}.section{padding:58px 0}.section-tight{padding:32px 0 58px}.system-panel{padding:24px;border-radius:34px}.asset-service-showcase{gap:16px}.asset-service-image{min-height:280px}.asset-frame{min-height:420px;border-radius:32px}.solution-card-v2{min-height:auto;padding:24px}.solution-card-v2 h3{font-size:2rem}.field-grid{grid-template-columns:1fr}.md\:col-span-2{grid-column:auto}.quote-result{position:static}.score-ring{grid-template-columns:88px 1fr}.score-num{width:88px;height:88px;font-size:1.7rem}.assist{right:16px;bottom:16px}.assist-trigger{width:58px;height:58px}.neary-mark{width:38px;height:38px}.footer{padding-bottom:110px}
}

@media (max-width: 520px){
  .container{width:calc(100% - 28px)}.nt-navbar-inner{height:82px}.nt-brand img{width:145px}.nt-nav-cta{min-height:46px;padding:0 19px}.nt-menu-button{width:50px;height:50px}.nt-mobile-panel{padding:96px 12px 18px}.nt-mobile-card{border-radius:30px}.hero,.page-hero,.landing-hero{padding-top:28px}.eyebrow{font-size:.68rem;letter-spacing:.15em;padding:9px 12px}h1{font-size:clamp(3.15rem,14.8vw,4.65rem);line-height:.86;letter-spacing:-.075em}.page-hero h1,.landing-hero h1{font-size:clamp(2.75rem,13vw,4.25rem)}.hero-copy p,.page-copy p{font-size:1.02rem}.asset-hero-stack,.asset-landing-stack{min-height:440px}.asset-service-image{min-height:220px}.asset-frame{min-height:360px}.asset-frame-label{left:16px;bottom:16px;right:16px;text-align:center}.trust-strip div{padding:18px}.pricing-signal span{border-radius:22px;align-items:flex-start;flex-direction:column}.feature-tile,.layer-card,.pain-card,.conversion-card,.nt-card{border-radius:28px;padding:22px}.solution-card-v2{border-radius:28px}.assist-chat{right:-2px}.assist{bottom:18px}.assist-trigger{width:56px;height:56px}.neary-mark{width:36px;height:36px}.nt-mobile-links.two-col{grid-template-columns:1fr}.footer-grid{gap:18px}
}

@media (prefers-reduced-motion: reduce){*{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
EOF

cat > scripts/preflight.js <<'EOF'
const fs = require('node:fs')

const required = [
  'package.json',
  'next.config.js',
  'app/layout.tsx',
  'app/page.tsx',
  'app/api/lead/route.ts',
  'components/QuoteEngine.tsx',
  'components/FloatingAssist.tsx',
  'components/AssetVisuals.tsx',
  'components/ServicePage.tsx',
  'public/images/neartec-logo-real.png',
  'public/images/visuals/hero-home-desktop.webp',
  'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/visual-compunegocio.webp',
  'public/images/visuals/visual-cn7.webp',
  'public/images/brand/neary-symbol.webp',
]

const missing = required.filter((f) => !fs.existsSync(f))
if (missing.length) {
  console.error('Faltan archivos:', missing.join(', '))
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (pkg.engines?.node !== '20.x') {
  console.error('Node no está fijado en 20.x')
  process.exit(1)
}
if (!String(pkg.name).includes('v47')) {
  console.error('Package no está actualizado a V4.7')
  process.exit(1)
}

console.log('Preflight OK: V4.7 technology integrator system lista para GitHub y Vercel.')
EOF

cat > scripts/smoke-test.mjs <<'EOF'
import fs from 'node:fs'

const requiredFiles = [
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/cotizador/page.tsx',
  'app/compunegocio/page.tsx',
  'app/cn7/page.tsx',
  'app/crm-automatizacion/page.tsx',
  'app/diseno-web/page.tsx',
  'components/AssetVisuals.tsx',
  'components/FloatingAssist.tsx',
  'components/ServicePage.tsx',
  'components/QuoteEngine.tsx',
  'public/images/visuals/hero-home-desktop.webp',
  'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/hero-landing-desktop.webp',
  'public/images/visuals/hero-landing-mobile.webp',
  'public/images/visuals/visual-web.webp',
  'public/images/visuals/visual-crm.webp',
  'public/images/visuals/visual-compunegocio.webp',
  'public/images/visuals/visual-cn7.webp',
  'public/images/visuals/visual-cotizador.webp',
  'public/images/visuals/visual-neary.webp',
  'public/images/brand/neary-symbol.webp',
  'public/images/og/og-home.png',
  'public/images/og/og-landing.png',
  'public/images/og/og-cotizador.png',
]

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`Falta archivo requerido: ${file}`)
}

const assetVisuals = fs.readFileSync('components/AssetVisuals.tsx', 'utf8')
for (const term of [
  'export function HomeHeroAsset',
  'export function LandingAssetScene',
  'export function QuoteAssetVisual',
  'export function ServiceAssetVisual',
  'export function ServiceShowcaseVisual',
  'export function NearyAssistantVisual',
]) {
  if (!assetVisuals.includes(term)) throw new Error(`AssetVisuals no contiene ${term}`)
}

const publicCode = [
  fs.readFileSync('app/page.tsx', 'utf8'),
  fs.readFileSync('app/soluciones/page.tsx', 'utf8'),
  fs.readFileSync('app/landing/page.tsx', 'utf8'),
  fs.readFileSync('app/cotizador/page.tsx', 'utf8'),
  fs.readFileSync('app/compunegocio/page.tsx', 'utf8'),
  fs.readFileSync('app/cn7/page.tsx', 'utf8'),
  fs.readFileSync('app/crm-automatizacion/page.tsx', 'utf8'),
  fs.readFileSync('app/diseno-web/page.tsx', 'utf8'),
  fs.readFileSync('components/AssetVisuals.tsx', 'utf8'),
  fs.readFileSync('components/FloatingAssist.tsx', 'utf8'),
  fs.readFileSync('components/Footer.tsx', 'utf8'),
  fs.readFileSync('lib/neartec-data.ts', 'utf8'),
].join('\n')

for (const term of [
  '664 404 6194',
  'meta@itimbre.com',
  'web',
  'apps',
  'automatización',
  'inteligencia artificial',
  'CompuNegocio',
  'CN7',
  'nube',
  'hosting',
  'VPS',
  'soporte',
  '$450 MXN',
  '$99 USD',
]) {
  if (!publicCode.toLowerCase().includes(term.toLowerCase())) {
    throw new Error(`No se encontró término clave: ${term}`)
  }
}

for (const forbidden of [
  '664 630 0473',
  'info@neartec.com',
  'info@itimbre.com',
  'Panel demostrativo',
  'Stack NearTec',
  'Webhook preparado',
  'Lead Score',
  'lead score',
  'Haz que cada lead llegue',
]) {
  if (publicCode.includes(forbidden)) {
    throw new Error(`Copy/contacto interno o viejo detectado: ${forbidden}`)
  }
}

const layout = fs.readFileSync('app/layout.tsx', 'utf8')
if (layout.includes('next/font/google')) throw new Error('Layout aún depende de next/font/google')

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')

console.log('Smoke test OK: V4.7 narrativa tecnológica integral, assets, mobile-first, contacto, cotizador y API validados.')
EOF

cat > README.md <<'EOF'
# NearTec Web V4.7 — Technology Integrator System

Versión enfocada en NearTec como integrador tecnológico: desarrollo web, apps, automatización, CRM, IA, CompuNegocio, CN7, nube, hosting, VPS, correo, soporte, timbres y desarrollo a medida.

## Validación

```bash
npm install --engine-strict=false
npm run predeploy:check
npm run smoke
npm run type-check
```

## Deploy

```bash
vercel --prod --logs
export PROJECT_URL="https://neartecmx.vercel.app"
bash scripts/vercel-prod-test.sh
```

## Leads reales

Configurar en Vercel:

```bash
NEARTEC_LEAD_WEBHOOK_URL=https://...
```
EOF

node - <<'JS'
const fs = require('fs')
const postcss = require('postcss')
try {
  postcss.parse(fs.readFileSync('app/globals.css', 'utf8'))
  console.log('CSS OK: globals.css parsea correctamente.')
} catch (err) {
  console.error('CSS ERROR:', err.message)
  process.exit(1)
}
JS

npm install --engine-strict=false
npm run predeploy:check
npm run smoke
npm run type-check

echo "Chequeo de copy/contacto viejo:"
grep -RInE "664 630 0473|info@itimbre.com|info@neartec.com|Panel demostrativo|Stack NearTec|Webhook preparado|Lead Score|lead score|Haz que cada lead llegue" app components lib --exclude-dir=node_modules || true

git status --short
git add -A
git commit -m "Upgrade NearTec to V4.7 technology integrator system"
git push origin main

echo "Backup creado en: $BACKUP_BRANCH"

echo "Deploy seguro V4.7:"
if vercel --prod --logs; then
  export PROJECT_URL="https://neartecmx.vercel.app"
  bash scripts/vercel-prod-test.sh
  echo $?
else
  echo "DEPLOY FALLÓ: no ejecuto prod-test porque probaría la producción anterior."
  exit 1
fi
