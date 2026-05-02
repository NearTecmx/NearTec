#!/usr/bin/env bash
set -euo pipefail

echo "== NearTec V5.2 Fusion Master =="

cd ~/neartec-site || exit 1

BACKUP_BRANCH="backup/pre-v52-fusion-$(date +%Y%m%d-%H%M%S)"

echo "== Backup Git =="
git branch "$BACKUP_BRANCH" || true
git push -u origin "$BACKUP_BRANCH" || true

echo "== Assets V46/V51 =="
ASSET_ZIP="/sdcard/Download/NearTec_V46_Assets_WebReady.zip"
if [ -f "$ASSET_ZIP" ]; then
  rm -rf "$HOME/neartec-v52-assets"
  mkdir -p "$HOME/neartec-v52-assets"
  unzip -o "$ASSET_ZIP" -d "$HOME/neartec-v52-assets"
  if [ -d "$HOME/neartec-v52-assets/public" ]; then
    mkdir -p public
    cp -R "$HOME/neartec-v52-assets/public/"* public/
  fi
  echo "OK: assets del ZIP sincronizados."
else
  echo "AVISO: no encontré $ASSET_ZIP. Uso assets actuales del repo."
fi

mkdir -p public/images/og public/images/visuals public/images/brand app scripts components lib

if [ -f public/images/og/og-home.png ]; then
  cp public/images/og/og-home.png app/opengraph-image.png || true
  cp public/images/og/og-home.png app/twitter-image.png || true
fi

if [ -f public/images/og/og-landing.png ]; then
  mkdir -p app/landing
  cp public/images/og/og-landing.png app/landing/opengraph-image.png || true
fi

if [ -f public/images/og/og-cotizador.png ]; then
  mkdir -p app/cotizador
  cp public/images/og/og-cotizador.png app/cotizador/opengraph-image.png || true
fi

touch app/v5.css

echo "== package.json V5.2 =="
node - <<'NODE'
const fs = require('fs')
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

pkg.name = 'neartec-web-v52-fusion-master'
pkg.version = '5.2.0'

pkg.scripts ||= {}
pkg.scripts['type-check'] = 'tsc --noEmit'
pkg.scripts['predeploy:check'] = 'node scripts/preflight.js'
pkg.scripts['smoke'] = 'node scripts/smoke-test.mjs && node scripts/test-api-local.mjs'

pkg.dependencies ||= {}
pkg.dependencies['framer-motion'] ||= '^11.18.2'
pkg.dependencies['recharts'] ||= '^2.15.0'
pkg.dependencies['lucide-react'] ||= '^0.468.0'

pkg.engines = { node: '20.x' }

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')
NODE

echo "== lib/site-data.ts =="
cat > lib/site-data.ts <<'EOF_TS'
export const siteUrl = 'https://neartecmx.vercel.app'

export const SITE = {
  name: 'NearTec',
  legalName: 'NEARTEC',
  url: siteUrl,
  title: 'NearTec | Desarrollo tecnológico, sistemas, web, nube y soporte para empresas',
  description:
    'NearTec desarrolla e integra sitios web, apps, sistemas, CRM, automatización, IA, CompuNegocio, CN7, nube, respaldo, soporte e infraestructura para que tu empresa venda, opere y escale con control.',
  ogTitle: 'NearTec | Tecnología para vender, operar y escalar',
  ogDescription:
    'Desarrollo tecnológico, sistemas, web, CRM, IA, CompuNegocio, CN7, nube y soporte para empresas.',
}

export const CONTACT = {
  legalName: 'NEARTEC',
  phoneDisplay: '664 404 6194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  rfc: 'NEA040929DKA',
  address: 'Benito Juárez 2034 601, Zona Centro, Tijuana, Baja California, México, C.P. 22000',
}

export const navItems = [
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Web / Apps', href: '/diseno-web' },
  { label: 'CRM / IA', href: '/crm-automatizacion' },
  { label: 'CompuNegocio', href: '/compunegocio' },
  { label: 'CN7 / Nube', href: '/cn7' },
  { label: 'Cotizador', href: '/cotizador' },
] as const

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary:
      'Diseñamos sitios web, landings, apps, paneles, módulos e integraciones preparadas para explicar, vender, automatizar y operar mejor.',
    bullets: ['Sitios web y landings', 'Apps y paneles', 'Integraciones a medida'],
    metric: 'Presencia sólida',
    visual: '/images/visuals/visual-web.webp',
    asset: '/images/visuals/visual-web.webp',
    accent: 'web',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary:
      'Ordenamos prospectos, seguimiento, tareas, WhatsApp, respuestas y procesos repetitivos con automatización e inteligencia aplicada.',
    bullets: ['CRM y seguimiento', 'Automatizaciones', 'IA operativa'],
    metric: 'Menos fugas',
    visual: '/images/visuals/visual-crm.webp',
    asset: '/images/visuals/visual-crm.webp',
    accent: 'crm',
  },
  {
    title: 'CompuNegocio, POS, timbres y operación',
    href: '/compunegocio',
    tag: 'Operación',
    summary:
      'Implementamos CompuNegocio para controlar ventas, inventario, usuarios, reportes, timbres, CSD y configuración operativa.',
    bullets: ['Ventas e inventario', 'Usuarios y reportes', 'Timbres y CSD'],
    metric: 'Desde $450 MXN',
    visual: '/images/visuals/visual-compunegocio.webp',
    asset: '/images/visuals/visual-compunegocio.webp',
    accent: 'pos',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    tag: 'Continuidad',
    summary:
      'Llevamos servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP, correo e infraestructura a una operación más estable.',
    bullets: ['CN7', 'Respaldo automático', 'Hosting e infraestructura'],
    metric: 'Desde $99 USD',
    visual: '/images/visuals/visual-cn7.webp',
    asset: '/images/visuals/visual-cn7.webp',
    accent: 'cloud',
  },
  {
    title: 'Soporte técnico y evolución continua',
    href: '/soporte',
    tag: 'Soporte',
    summary:
      'Acompañamos la operación con soporte, mantenimiento, configuración, monitoreo, ajustes y mejoras para que la tecnología siga funcionando.',
    bullets: ['Soporte remoto', 'Mantenimiento', 'Mejora continua'],
    metric: 'Atención técnica',
    visual: '/images/visuals/hero-home-desktop.webp',
    asset: '/images/visuals/hero-home-desktop.webp',
    accent: 'support',
  },
] as const

export const solutionLinks = solutions

export const techLayers = [
  {
    label: 'Web + landing',
    tag: 'Presencia',
    icon: 'web',
    title: 'Presencia digital',
    text:
      'Sitios, landings, formularios y rutas claras hacia WhatsApp, diagnóstico, cotización o CRM.',
  },
  {
    label: 'Código a medida',
    tag: 'Desarrollo',
    icon: 'code',
    title: 'Desarrollo y apps',
    text:
      'Interfaces, flujos, módulos, paneles y soluciones digitales diseñadas para operar en serio.',
  },
  {
    label: 'Procesos inteligentes',
    tag: 'Automatización',
    icon: 'automation',
    title: 'CRM, automatización e IA',
    text:
      'Seguimiento, recordatorios, respuestas, clasificación, tareas y automatizaciones aplicadas.',
  },
  {
    label: 'Operación diaria',
    tag: 'POS + timbres',
    icon: 'pos',
    title: 'CompuNegocio',
    text:
      'Ventas, inventario, usuarios, timbres, reportes, CSD y configuración operativa.',
  },
  {
    label: 'Continuidad',
    tag: 'Nube',
    icon: 'cloud',
    title: 'CN7, nube y respaldo',
    text:
      'Servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP y correo.',
  },
  {
    label: 'Evolución técnica',
    tag: 'Soporte',
    icon: 'support',
    title: 'Soporte e infraestructura',
    text:
      'Atención técnica, mantenimiento, ajustes, monitoreo, soporte remoto y mejora continua.',
  },
] as const

export const ecosystemLayers = techLayers

export const heroMetrics = [
  { label: 'Desarrollo', value: 'Web + Apps', text: 'Presencia digital, sistemas y paneles a medida' },
  { label: 'Automatización', value: 'CRM + IA', text: 'Seguimiento, tareas y procesos inteligentes' },
  { label: 'Operación', value: 'POS + Timbres', text: 'CompuNegocio, ventas, inventario y reportes' },
  { label: 'Continuidad', value: 'CN7 + Nube', text: 'Respaldo, hosting, VPS, FTP, correo y soporte' },
] as const

export const processFlow = [
  { step: '01', title: 'Diagnóstico', text: 'Entendemos qué necesita la empresa: vender, operar, automatizar, respaldarse o integrar sistemas.' },
  { step: '02', title: 'Arquitectura', text: 'Definimos la ruta tecnológica: web, app, CRM, IA, CompuNegocio, CN7, nube o desarrollo a medida.' },
  { step: '03', title: 'Implementación', text: 'Configuramos, desarrollamos, conectamos y dejamos la solución funcionando con datos reales.' },
  { step: '04', title: 'Operación', text: 'Acompañamos con soporte, seguimiento, mejoras, respaldo y continuidad técnica.' },
] as const

export const pipeline = [
  'Lead',
  'Diagnóstico',
  'Propuesta',
  'Cotización',
  'Implementación',
  'Operación',
  'Soporte',
] as const

export const scoreCriteria = [
  { label: 'Empresa formal / RFC activo', points: 20 },
  { label: 'Decisor o influencia directa', points: 20 },
  { label: 'Dolor claro y urgente', points: 20 },
  { label: 'Volumen o recurrencia', points: 20 },
  { label: 'Presupuesto / autoridad', points: 10 },
  { label: 'Implementación menor a 30 días', points: 10 },
] as const

export const slaItems = [
  ['Lead nuevo', 'Respuesta en menos de 10 minutos hábiles'],
  ['Lead calificado', 'Seguimiento el mismo día'],
  ['Diagnóstico realizado', 'Ruta y próximos pasos en 24h hábiles'],
  ['Cotización enviada', 'Entrega en 24–48h según alcance'],
] as const

export const pricingFamilies = [
  {
    eyebrow: 'Operación',
    title: 'CompuNegocio',
    price: 'Desde $450 MXN / estación',
    note: 'Licencias por estación, implementación y soporte según alcance.',
    cta: '/compunegocio',
    items: [
      '1 a 3 licencias: $450 MXN / mes',
      '4 a 8 licencias: $400 MXN / mes',
      '9 o más licencias: $350 MXN / mes',
      'Implementación base: $1,500 MXN',
    ],
  },
  {
    eyebrow: 'Continuidad',
    title: 'CN7 / Nube',
    price: 'Desde $99 USD / mes',
    note: 'Servidor, base de datos, respaldo automático y continuidad.',
    cta: '/cn7',
    items: [
      'CN7 con respaldo: $99 USD / mes',
      'CN7 hospedado en nube: $149 USD / mes',
      'Respaldo automático: $99 USD / mes',
    ],
  },
  {
    eyebrow: 'Soporte',
    title: 'Soporte y desarrollo',
    price: 'Por hora o proyecto',
    note: 'Soporte, capacitación, desarrollo e integraciones.',
    cta: '/soporte',
    items: [
      'Soporte con póliza: $499 MXN / hora',
      'Desarrollo con póliza: $999 MXN / hora',
      'Soporte regular: $999 MXN / hora',
      'Desarrollo regular: $1,499 MXN / hora',
    ],
  },
] as const

export const scenarios = [
  {
    title: 'Empresa que necesita presencia digital seria',
    text:
      'Requiere sitio, landing, formularios, WhatsApp, SEO técnico, paneles o apps para explicar mejor lo que vende.',
    tag: 'Web / Apps',
  },
  {
    title: 'Negocio con operación desordenada',
    text:
      'Necesita controlar ventas, inventario, usuarios, timbres, reportes, CSD y configuración operativa.',
    tag: 'CompuNegocio',
  },
  {
    title: 'Equipo que pierde seguimiento',
    text:
      'Necesita CRM, automatización, recordatorios, WhatsApp y clasificación de oportunidades.',
    tag: 'CRM / IA',
  },
  {
    title: 'Empresa que depende de una máquina local',
    text:
      'Necesita CN7, respaldo, nube, hosting, VPS, FTP, correo, infraestructura y soporte para operar con continuidad.',
    tag: 'CN7 / Nube',
  },
] as const

const visualMap: Record<string, string> = {
  '/': '/images/visuals/hero-home-desktop.webp',
  '/landing': '/images/visuals/hero-landing-desktop.webp',
  '/diseno-web': '/images/visuals/visual-web.webp',
  '/crm-automatizacion': '/images/visuals/visual-crm.webp',
  '/compunegocio': '/images/visuals/visual-compunegocio.webp',
  '/cn7': '/images/visuals/visual-cn7.webp',
  '/cotizador': '/images/visuals/visual-cotizador.webp',
  '/soporte': '/images/visuals/hero-home-desktop.webp',
  '/soluciones': '/images/visuals/hero-home-desktop.webp',
  '/casos': '/images/visuals/hero-home-desktop.webp',
  '/recursos': '/images/visuals/hero-home-desktop.webp',
  '/contacto': '/images/visuals/hero-home-desktop.webp',
}

const kindMap: Record<string, string> = {
  web: '/diseno-web',
  crm: '/crm-automatizacion',
  compunegocio: '/compunegocio',
  cn7: '/cn7',
  soporte: '/soporte',
  soluciones: '/soluciones',
  casos: '/casos',
  recursos: '/recursos',
  contacto: '/contacto',
}

export function kindToHref(kind: string) {
  return kindMap[kind] || `/${kind.replace(/^\//, '')}`
}

export function getSolutionVisual(input: string) {
  const href = input.startsWith('/') ? input : kindToHref(input)
  return visualMap[href] || '/images/visuals/hero-home-desktop.webp'
}
EOF_TS

echo "== lib/neartec-data.ts compatibilidad =="
python3 - <<'PY'
from pathlib import Path

p = Path("lib/neartec-data.ts")
s = p.read_text() if p.exists() else ""

if "export const siteUrl" not in s:
    s += "\nexport const siteUrl = 'https://neartecmx.vercel.app'\n"

if "export function money" not in s:
    s += """
export function money(value: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}
"""

if "export const compuPricing" not in s:
    s += """
export const compuPricing = {
  monthly: [
    { label: '1 a 3 licencias', price: 450 },
    { label: '4 a 8 licencias', price: 400 },
    { label: '9 o más licencias', price: 350 },
  ],
  annual: [
    { label: '1 a 3 licencias', price: 4050 },
    { label: '4 a 8 licencias', price: 3600 },
    { label: '9 o más licencias', price: 3150 },
  ],
  implementation: 1500,
  supportHour: 499,
  developmentHour: 999,
  regularSupportHour: 999,
  regularDevelopmentHour: 1499,
}
"""

if "export const cn7Pricing" not in s:
    s += """
export const cn7Pricing = {
  backup: 99,
  hosted: 149,
  databaseBackup: 99,
}
"""

if "export const stampPackages" not in s:
    s += """
export const stampPackages = [
  { stamps: 365, price: 730 },
  { stamps: 500, price: 1000 },
  { stamps: 1000, price: 1500 },
  { stamps: 2000, price: 2800 },
  { stamps: 3000, price: 4200 },
  { stamps: 4000, price: 5200 },
  { stamps: 5000, price: 6250 },
  { stamps: 6000, price: 7200 },
  { stamps: 8000, price: 8800 },
  { stamps: 10000, price: 9500 },
]
"""

p.write_text(s)
print("OK: neartec-data.ts compatible.")
PY

echo "== components/V52FusionSystem.tsx =="
cat > components/V52FusionSystem.tsx <<'EOF_TSX'
'use client'

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  DatabaseZap,
  LifeBuoy,
  MessageCircle,
  Server,
  ShieldCheck,
  Store,
  Zap,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  CONTACT,
  heroMetrics,
  pipeline,
  pricingFamilies,
  processFlow,
  scenarios,
  scoreCriteria,
  slaItems,
  solutions,
  techLayers,
} from '@/lib/site-data'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55 },
}

const lineData = [
  { name: 'Visita', valor: 18 },
  { name: 'Diagnóstico', valor: 34 },
  { name: 'Propuesta', valor: 52 },
  { name: 'Cotización', valor: 69 },
  { name: 'Implementación', valor: 86 },
  { name: 'Soporte', valor: 94 },
]

const barData = [
  { name: 'Web', valor: 82 },
  { name: 'CRM', valor: 74 },
  { name: 'POS', valor: 88 },
  { name: 'CN7', valor: 79 },
  { name: 'Soporte', valor: 91 },
]

const scoreData = [{ name: 'Score', value: 86, fill: '#34c759' }]

function IconFor({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    web: <Code2 />,
    code: <Code2 />,
    automation: <BrainCircuit />,
    crm: <BrainCircuit />,
    pos: <Store />,
    cloud: <Cloud />,
    support: <LifeBuoy />,
    security: <ShieldCheck />,
  }

  return icons[type] || <Zap />
}

export function V52Hero() {
  return (
    <section className="v52-hero">
      <div className="v52-container v52-hero-grid">
        <motion.div className="v52-hero-copy" {...fadeUp}>
          <span className="v52-pill">
            <span />
            Desarrollo tecnológico para empresas
          </span>

          <h1>
            Desarrollamos tecnología para que tu empresa venda, opere y escale.
          </h1>

          <p>
            NearTec integra sitios web, apps, sistemas, CRM, automatización, IA,
            CompuNegocio, CN7, nube, respaldo, soporte e infraestructura para
            que tu negocio deje de depender de piezas sueltas.
          </p>

          <div className="v52-hero-actions">
            <Link className="v52-btn primary" href="/cotizador">
              Cotizar proyecto <ArrowRight size={18} />
            </Link>
            <a
              className="v52-btn soft"
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero un diagnóstico para mi empresa.')}`}
            >
              WhatsApp {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="v52-chip-row">
            {['Web / Apps', 'CRM + IA', 'POS + Timbres', 'CN7 + Nube', 'Soporte'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div className="v52-hero-visual" {...fadeUp}>
          <div className="v52-visual-glow" />
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/visuals/hero-home-mobile.webp" />
            <img src="/images/visuals/hero-home-desktop.webp" alt="Ecosistema tecnológico NearTec" />
          </picture>
          <div className="v52-floating-card top">
            <b>Web + CRM + Operación</b>
            <span>Todo conectado</span>
          </div>
          <div className="v52-floating-card bottom">
            <b>CN7 + respaldo</b>
            <span>Continuidad técnica</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function HeroCommandCenter() {
  return <V52Hero />
}

export function V52Metrics() {
  return (
    <section className="v52-metrics">
      <div className="v52-container v52-metric-grid">
        {heroMetrics.map((item) => (
          <motion.article key={item.label} className="v52-metric" {...fadeUp}>
            <small>{item.label}</small>
            <b>{item.value}</b>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function V52TechLayers() {
  return (
    <section className="v52-section">
      <div className="v52-container">
        <motion.div className="v52-section-head" {...fadeUp}>
          <span>Capas del ecosistema</span>
          <h2>Todo conectado: de la presencia digital a la operación diaria.</h2>
          <p>
            La web no vive sola. El CRM, WhatsApp, punto de venta, timbres,
            nube y soporte deben trabajar como sistema.
          </p>
        </motion.div>

        <div className="v52-layer-grid">
          {techLayers.map((layer, index) => (
            <motion.article
              key={layer.title}
              className="v52-layer-card"
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <div className="v52-layer-icon">
                <IconFor type={layer.icon} />
              </div>
              <small>{layer.tag}</small>
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function V52SolutionsShowcase() {
  return (
    <section className="v52-section v52-section-soft">
      <div className="v52-container">
        <motion.div className="v52-section-head split" {...fadeUp}>
          <div>
            <span>Soluciones NearTec</span>
            <h2>Desarrollo, sistemas, nube y soporte en una misma ruta.</h2>
          </div>
          <p>
            Tomamos lo que ya funciona de tu empresa y lo conectamos con
            tecnología útil: no decoración, no procesos falsos.
          </p>
        </motion.div>

        <div className="v52-solution-grid">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              className={`v52-solution-card accent-${solution.accent}`}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="v52-solution-img">
                <Image
                  src={solution.asset}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>
              <div className="v52-solution-body">
                <span>{solution.tag}</span>
                <h3>{solution.title}</h3>
                <p>{solution.summary}</p>
                <ul>
                  {solution.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={17} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href={solution.href}>
                  Ver solución <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function V52AnimatedGraphs() {
  return (
    <section className="v52-section">
      <div className="v52-container v52-graph-grid">
        <motion.div className="v52-section-head sticky" {...fadeUp}>
          <span>Gráficos operativos</span>
          <h2>De diagnóstico a implementación, con visibilidad real.</h2>
          <p>
            El objetivo no es verse “tech” por verse tech: es que el cliente
            entienda cómo avanza su empresa cuando todo está conectado.
          </p>

          <div className="v52-process-list">
            {processFlow.map((item) => (
              <div key={item.step}>
                <b>{item.step}</b>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="v52-graph-stack">
          <motion.div className="v52-graph-card" {...fadeUp}>
            <div className="v52-card-head">
              <b>Avance tecnológico</b>
              <span>Ruta completa</span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={lineData} margin={{ top: 12, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="v52Area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#35d658" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="#35d658" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(8,30,20,.08)" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="valor" stroke="#17a541" strokeWidth={3} fill="url(#v52Area)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div className="v52-graph-card two" {...fadeUp}>
            <div className="v52-card-head">
              <b>Capas conectadas</b>
              <span>Operación</span>
            </div>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={barData} margin={{ top: 12, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(8,30,20,.08)" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="valor" radius={[14, 14, 0, 0]} fill="#35d658" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div className="v52-score-card" {...fadeUp}>
            <div>
              <small>Scoring comercial</small>
              <h3>Priorizamos oportunidades reales.</h3>
              <ul>
                {scoreCriteria.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <b>{item.points}</b>
                  </li>
                ))}
              </ul>
            </div>
            <ResponsiveContainer width="100%" height={210}>
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={scoreData}
                startAngle={90}
                endAngle={-270}
              >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar dataKey="value" cornerRadius={20} background />
              </RadialBarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function V52Pipeline() {
  return (
    <section className="v52-section v52-section-dark">
      <div className="v52-container">
        <motion.div className="v52-section-head center" {...fadeUp}>
          <span>Pipeline real</span>
          <h2>Captar, ordenar, cotizar, implementar y dar soporte.</h2>
          <p>
            La tecnología debe cerrar el ciclo, no quedarse en una página bonita.
          </p>
        </motion.div>

        <div className="v52-pipeline">
          {pipeline.map((step, index) => (
            <motion.div
              key={step}
              className="v52-pipeline-step"
              {...fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <small>{String(index + 1).padStart(2, '0')}</small>
              <b>{step}</b>
            </motion.div>
          ))}
        </div>

        <div className="v52-sla-grid">
          {slaItems.map(([label, text]) => (
            <motion.div key={label} {...fadeUp}>
              <b>{label}</b>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function V52Pricing() {
  return (
    <section className="v52-section">
      <div className="v52-container">
        <motion.div className="v52-section-head split" {...fadeUp}>
          <div>
            <span>Precios reales</span>
            <h2>Costos claros para operar, respaldar y crecer.</h2>
          </div>
          <p>
            Mostramos precios base donde sí existen y llevamos desarrollos e
            integraciones a cotización según alcance.
          </p>
        </motion.div>

        <div className="v52-price-grid">
          {pricingFamilies.map((family, index) => (
            <motion.article
              key={family.title}
              className="v52-price-card"
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <span>{family.eyebrow}</span>
              <h3>{family.title}</h3>
              <b>{family.price}</b>
              <p>{family.note}</p>
              <ul>
                {family.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={family.cta}>
                Cotizar <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function V52Scenarios() {
  return (
    <section className="v52-section v52-section-soft">
      <div className="v52-container">
        <motion.div className="v52-section-head" {...fadeUp}>
          <span>Escenarios reales</span>
          <h2>NearTec sirve cuando la empresa necesita tecnología que sí opere.</h2>
        </motion.div>

        <div className="v52-scenario-grid">
          {scenarios.map((scenario, index) => (
            <motion.article
              key={scenario.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <span>{scenario.tag}</span>
              <h3>{scenario.title}</h3>
              <p>{scenario.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function V52CTA() {
  return (
    <section className="v52-final">
      <div className="v52-container v52-final-card">
        <motion.div {...fadeUp}>
          <span>NearTec Fusion Master</span>
          <h2>Conecta tu presencia digital, operación, nube y soporte en una sola ruta.</h2>
          <p>
            Agenda diagnóstico para definir si necesitas web, app, sistema,
            CRM, automatización, IA, CompuNegocio, CN7, nube, soporte,
            infraestructura o una integración a medida.
          </p>
          <div className="v52-hero-actions">
            <Link className="v52-btn primary" href="/cotizador">
              Cotizar proyecto
            </Link>
            <a className="v52-btn soft dark" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
              WhatsApp {CONTACT.phoneDisplay}
            </a>
          </div>
        </motion.div>
        <div className="v52-final-icons">
          <Code2 />
          <Bot />
          <ShieldCheck />
          <DatabaseZap />
        </div>
      </div>
    </section>
  )
}

export function V52HomePage() {
  return (
    <>
      <V52Hero />
      <V52Metrics />
      <V52TechLayers />
      <V52SolutionsShowcase />
      <V52AnimatedGraphs />
      <V52Pipeline />
      <V52Pricing />
      <V52Scenarios />
      <V52CTA />
    </>
  )
}

export function V52LandingPage() {
  return (
    <>
      <section className="v52-hero compact">
        <div className="v52-container v52-hero-grid">
          <motion.div className="v52-hero-copy" {...fadeUp}>
            <span className="v52-pill"><span /> Diagnóstico NearTec</span>
            <h1>Identifica qué tecnología necesita tu empresa para avanzar.</h1>
            <p>
              Revisamos presencia digital, operación, CRM, automatización, nube,
              soporte e infraestructura para darte una ruta clara.
            </p>
            <div className="v52-hero-actions">
              <Link className="v52-btn primary" href="/cotizador">Cotizar proyecto</Link>
              <a className="v52-btn soft" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
          </motion.div>

          <motion.div className="v52-hero-visual" {...fadeUp}>
            <picture>
              <source media="(max-width: 760px)" srcSet="/images/visuals/hero-landing-mobile.webp" />
              <img src="/images/visuals/hero-landing-desktop.webp" alt="Diagnóstico tecnológico NearTec" />
            </picture>
          </motion.div>
        </div>
      </section>
      <V52AnimatedGraphs />
      <V52CTA />
    </>
  )
}

export function V52QuoteIntro() {
  return (
    <section className="v52-quote-intro">
      <div className="v52-container v52-hero-grid">
        <motion.div className="v52-hero-copy" {...fadeUp}>
          <span className="v52-pill"><span /> Cotizador NearTec</span>
          <h1>Cotiza tecnología con una ruta clara, no con datos sueltos.</h1>
          <p>
            Selecciona servicios base y genera una primera propuesta para web,
            CRM, CompuNegocio, CN7, soporte o desarrollo a medida.
          </p>
        </motion.div>
        <motion.div className="v52-hero-visual" {...fadeUp}>
          <img src="/images/visuals/visual-cotizador.webp" alt="Cotizador NearTec" />
        </motion.div>
      </div>
    </section>
  )
}

export function SolutionsExplorer() {
  return (
    <>
      <section className="v52-hero compact">
        <div className="v52-container v52-hero-grid">
          <motion.div className="v52-hero-copy" {...fadeUp}>
            <span className="v52-pill"><span /> Soluciones conectadas</span>
            <h1>Tecnología para vender, operar y crecer con una sola ruta.</h1>
            <p>
              NearTec integra presencia digital, desarrollo, automatización,
              CRM, IA, CompuNegocio, CN7, nube, respaldo, soporte e infraestructura.
            </p>
            <div className="v52-chip-row">
              {solutions.map((solution) => (
                <Link key={solution.href} href={solution.href}>{solution.tag}</Link>
              ))}
            </div>
          </motion.div>

          <motion.div className="v52-hero-visual" {...fadeUp}>
            <img src="/images/visuals/hero-home-desktop.webp" alt="Soluciones NearTec" />
          </motion.div>
        </div>
      </section>

      <V52TechLayers />
      <V52SolutionsShowcase />
      <V52Pricing />
      <V52CTA />
    </>
  )
}
EOF_TSX

echo "== components/ServicePage.tsx =="
cat > components/ServicePage.tsx <<'EOF_TSX'
'use client'

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CONTACT, getSolutionVisual } from '@/lib/site-data'

type Feature = readonly [string, string]

type ServicePageProps = {
  kind: string
  eyebrow: string
  title: string
  description: string
  features: ReadonlyArray<Feature>
  proof?: ReadonlyArray<string>
}

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

const serviceTags: Record<string, string[]> = {
  web: ['Sitios web', 'Apps', 'Paneles', 'Integraciones'],
  crm: ['CRM', 'Automatización', 'IA', 'WhatsApp'],
  compunegocio: ['POS', 'Inventario', 'Timbres', 'Reportes'],
  cn7: ['CN7', 'Nube', 'Respaldo', 'Hosting'],
  soporte: ['Soporte', 'Mantenimiento', 'Monitoreo', 'Mejora continua'],
  soluciones: ['Web', 'CRM', 'POS', 'CN7'],
  casos: ['Diagnóstico', 'Implementación', 'Operación', 'Soporte'],
  recursos: ['Guías', 'Cotizador', 'Diagnóstico', 'Soporte'],
  contacto: ['WhatsApp', 'Correo', 'Diagnóstico', 'Cotización'],
}

export default function ServicePage({
  kind,
  eyebrow,
  title,
  description,
  features,
  proof = [],
}: ServicePageProps) {
  const src = getSolutionVisual(kind)
  const tags = serviceTags[kind] || serviceTags.soluciones

  return (
    <>
      <section className="v52-service-hero">
        <div className="v52-container v52-service-grid">
          <motion.div className="v52-service-copy" {...fadeUp}>
            <span className="v52-pill"><span /> {eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="v52-chip-row">
              {tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>

            <div className="v52-hero-actions">
              <Link className="v52-btn primary" href="/cotizador">
                Cotizar mi solución <ArrowRight size={18} />
              </Link>
              <a className="v52-btn soft" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div className="v52-service-visual" {...fadeUp}>
            <img src={src} alt={title} />
            <div className="v52-service-label">{eyebrow}</div>
          </motion.div>
        </div>
      </section>

      <section className="v52-section">
        <div className="v52-container v52-feature-grid">
          {features.map(([name, text], index) => (
            <motion.article
              key={name}
              className="v52-feature-card"
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <CheckCircle2 />
              <h3>{name}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {proof.length > 0 && (
        <section className="v52-section v52-section-soft">
          <div className="v52-container">
            <motion.div className="v52-section-head" {...fadeUp}>
              <span>Lo que resuelve</span>
              <h2>Más claridad, menos piezas sueltas.</h2>
            </motion.div>
            <div className="v52-proof-grid">
              {proof.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>
      )}

      <section className="v52-final small">
        <div className="v52-container v52-final-card">
          <div>
            <span>Diagnóstico NearTec</span>
            <h2>Revisemos qué tecnología necesita tu empresa.</h2>
            <p>
              Podemos cotizar web, app, CRM, IA, CompuNegocio, CN7, nube,
              soporte, infraestructura o desarrollo a medida.
            </p>
          </div>
          <div className="v52-hero-actions">
            <Link className="v52-btn primary" href="/cotizador">Cotizar</Link>
            <a className="v52-btn soft dark" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
EOF_TSX

echo "== components/Navbar.tsx =="
cat > components/Navbar.tsx <<'EOF_TSX'
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="v52-navbar">
      <div className="v52-nav-inner">
        <Link href="/" className="v52-logo" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/neartec-logo-official.png"
            alt="NearTec"
            width={210}
            height={76}
            priority
          />
        </Link>

        <nav className="v52-nav-links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="v52-nav-actions">
          <Link className="v52-nav-cta" href="/cotizador">Cotizar</Link>
          <button
            className="v52-menu-btn"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="v52-mobile-menu">
          <div className="v52-mobile-card">
            <div className="v52-mobile-head">
              <b>NearTec</b>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X />
              </button>
            </div>

            <nav>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                  <span>→</span>
                </Link>
              ))}
            </nav>

            <a className="v52-mobile-contact" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
              WhatsApp {CONTACT.phoneDisplay}
            </a>
            <a className="v52-mobile-contact" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
EOF_TSX

echo "== components/Footer.tsx =="
cat > components/Footer.tsx <<'EOF_TSX'
import Link from 'next/link'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer className="v52-footer">
      <div className="v52-container v52-footer-grid">
        <div className="v52-footer-brand">
          <b>NearTec</b>
          <p>
            Desarrollo tecnológico, sistemas, web, nube, CompuNegocio, CN7,
            automatización, IA, soporte e infraestructura para empresas.
          </p>
          <small>RFC: {CONTACT.rfc}</small>
        </div>

        <nav className="v52-footer-links" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="v52-footer-contact">
          <a href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>{CONTACT.address}</span>
        </div>
      </div>
    </footer>
  )
}
EOF_TSX

echo "== components/FloatingAssist.tsx =="
cat > components/FloatingAssist.tsx <<'EOF_TSX'
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, Send, X } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

export default function FloatingAssist() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const send = () => {
    const text = message.trim() || 'Hola NearTec, quiero orientación para mi empresa.'
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="v52-assist">
      {open && (
        <div className="v52-assist-panel">
          <div className="v52-assist-head">
            <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={46} height={46} />
            <div>
              <b>Neary AI</b>
              <span>Asistente tecnológico</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar Neary">
              <X />
            </button>
          </div>

          <div className="v52-assist-body">
            <p>
              Soy Neary AI. Te ayudo a ubicar si necesitas web, app, CRM,
              automatización, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.
            </p>
            <div>
              <button type="button" onClick={() => setMessage('Necesito una web o app para mi empresa.')}>
                Web o app
              </button>
              <button type="button" onClick={() => setMessage('Quiero automatizar procesos y seguimiento.')}>
                Automatización
              </button>
              <button type="button" onClick={() => setMessage('Quiero revisar CompuNegocio, CN7 o soporte.')}>
                Operación
              </button>
            </div>
          </div>

          <div className="v52-assist-input">
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Cuéntame qué necesitas..."
            />
            <button type="button" onClick={send} aria-label="Enviar por WhatsApp">
              <Send />
            </button>
          </div>
        </div>
      )}

      <div className="v52-assist-dock">
        <a
          className="v52-wa-fab"
          href={`https://wa.me/${CONTACT.whatsappNumber}`}
          aria-label="WhatsApp NearTec"
        >
          <MessageCircle />
        </a>
        <button className="v52-ai-fab" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir Neary AI">
          <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={52} height={52} />
        </button>
      </div>
    </div>
  )
}
EOF_TSX

echo "== app/layout.tsx =="
cat > app/layout.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import './v5.css'
import './v52.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingAssist from '@/components/FloatingAssist'
import { CONTACT, SITE, siteUrl } from '@/lib/site-data'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE.title,
    template: '%s | NearTec',
  },
  description: SITE.description,
  applicationName: 'NearTec',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'NearTec',
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    images: [
      {
        url: '/images/og/og-home.png',
        width: 1200,
        height: 630,
        alt: 'NearTec | Tecnología para vender, operar y escalar',
      },
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'NearTec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    images: ['/images/og/og-home.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'contact:phone_number': CONTACT.phoneDisplay,
    'contact:email': CONTACT.email,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className={`${sora.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingAssist />
      </body>
    </html>
  )
}
EOF_TSX

echo "== app/page.tsx =="
cat > app/page.tsx <<'EOF_TSX'
import { V52HomePage } from '@/components/V52FusionSystem'

export default function HomePage() {
  return <V52HomePage />
}
EOF_TSX

echo "== app/landing/page.tsx =="
mkdir -p app/landing
cat > app/landing/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import { V52LandingPage } from '@/components/V52FusionSystem'

export const metadata: Metadata = {
  title: 'Diagnóstico tecnológico',
  description:
    'Diagnóstico NearTec para definir web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.',
}

export default function LandingPage() {
  return <V52LandingPage />
}
EOF_TSX

echo "== app/soluciones/page.tsx =="
mkdir -p app/soluciones
cat > app/soluciones/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import { SolutionsExplorer } from '@/components/V52FusionSystem'

export const metadata: Metadata = {
  title: 'Soluciones tecnológicas',
  description:
    'Soluciones NearTec: web, apps, CRM, IA, automatización, CompuNegocio, CN7, nube, soporte e infraestructura.',
}

export default function SolucionesPage() {
  return <SolutionsExplorer />
}
EOF_TSX

echo "== app/cotizador/page.tsx =="
mkdir -p app/cotizador
cat > app/cotizador/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import QuoteEngine from '@/components/QuoteEngine'
import { V52QuoteIntro } from '@/components/V52FusionSystem'

export const metadata: Metadata = {
  title: 'Cotizador',
  description:
    'Cotiza soluciones NearTec: web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte y desarrollo a medida.',
}

export default function CotizadorPage() {
  return (
    <>
      <V52QuoteIntro />
      <section className="v52-section">
        <div className="v52-container">
          <QuoteEngine />
        </div>
      </section>
    </>
  )
}
EOF_TSX

echo "== páginas internas principales =="
mkdir -p app/diseno-web app/crm-automatizacion app/compunegocio app/cn7 app/soporte app/contacto app/casos app/recursos

cat > app/diseno-web/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Web, apps y desarrollo',
  description: 'Desarrollo de sitios web, apps, paneles e integraciones a medida con NearTec.',
}

export default function WebPage() {
  return (
    <ServicePage
      kind="web"
      eyebrow="Web, apps y desarrollo"
      title="Desarrollamos presencia digital y herramientas que sí se usan."
      description="Creamos sitios web, landings, apps, paneles e integraciones preparadas para explicar, vender, automatizar y operar mejor."
      proof={['Sitios web claros', 'Apps y paneles', 'Formularios', 'Integraciones']}
      features={[
        ['Sitios web y landings', 'Páginas rápidas, claras y preparadas para conversión, pauta, búsqueda y WhatsApp.'],
        ['Apps y paneles', 'Interfaces internas o externas para operar procesos específicos de tu empresa.'],
        ['Integraciones', 'Conectamos formularios, CRM, WhatsApp, cotizador, sistemas y flujos comerciales.'],
      ]}
    />
  )
}
EOF_TSX

cat > app/crm-automatizacion/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'CRM, automatización e IA',
  description: 'CRM, automatización, WhatsApp, tareas e IA aplicada para empresas.',
}

export default function CRMPage() {
  return (
    <ServicePage
      kind="crm"
      eyebrow="CRM, automatización e IA"
      title="Ordena procesos y atiende oportunidades con más contexto."
      description="Implementamos CRM, seguimiento, automatizaciones, tareas, WhatsApp e IA aplicada para reducir fugas y responder mejor."
      proof={['Prospectos ordenados', 'Tareas claras', 'WhatsApp con contexto', 'IA operativa']}
      features={[
        ['CRM y seguimiento', 'Pipeline, estados, tareas, recordatorios y trazabilidad comercial.'],
        ['Automatizaciones', 'Flujos para capturar, clasificar, responder, cotizar y dar seguimiento.'],
        ['IA aplicada', 'Asistentes, clasificación, respuestas y apoyo operativo según el proceso real.'],
      ]}
    />
  )
}
EOF_TSX

cat > app/compunegocio/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'CompuNegocio',
  description: 'CompuNegocio para ventas, inventario, timbres, usuarios, reportes y operación diaria.',
}

export default function CompuNegocioPage() {
  return (
    <ServicePage
      kind="compunegocio"
      eyebrow="CompuNegocio"
      title="Vende, cobra y controla mejor tu operación diaria."
      description="Implementamos CompuNegocio para que tengas ventas, inventario, usuarios, timbres, CSD, reportes y configuración operativa con más orden."
      proof={['Desde $450 MXN / estación', 'Implementación base $1,500 MXN', 'Timbres disponibles', 'Soporte remoto']}
      features={[
        ['Ventas e inventario', 'Control de productos, clientes, movimientos, reportes y operación diaria.'],
        ['Timbres y CSD', 'Configuración operativa para emisión, timbrado y uso correcto del sistema.'],
        ['Implementación y soporte', 'Instalación, configuración, capacitación inicial y soporte según alcance.'],
      ]}
    />
  )
}
EOF_TSX

cat > app/cn7/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'CN7, nube y respaldo',
  description: 'CN7, nube, respaldo automático, hosting, VPS, FTP, correo e infraestructura.',
}

export default function CN7Page() {
  return (
    <ServicePage
      kind="cn7"
      eyebrow="CN7 y nube"
      title="Protege tu información y trabaja con más continuidad."
      description="Llevamos servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP, correo e infraestructura a una operación más estable."
      proof={['CN7 con respaldo desde $99 USD', 'CN7 hospedado desde $149 USD', 'Respaldo automático', 'Infraestructura']}
      features={[
        ['CN7 y respaldo', 'Servidor y base de datos en nube con respaldo automático para reducir riesgo local.'],
        ['Hosting e infraestructura', 'Hospedaje, VPS, FTP, correo y recursos técnicos para operar con más estabilidad.'],
        ['Continuidad operativa', 'Menos dependencia de una sola máquina y más control sobre la información.'],
      ]}
    />
  )
}
EOF_TSX

cat > app/soporte/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Soporte técnico',
  description: 'Soporte técnico, mantenimiento, configuración y mejora continua NearTec.',
}

export default function SoportePage() {
  return (
    <ServicePage
      kind="soporte"
      eyebrow="Soporte técnico"
      title="Soporte para que la tecnología siga funcionando."
      description="Atendemos configuración, mantenimiento, capacitación, ajustes, monitoreo, cambios operativos y acompañamiento técnico."
      proof={['Soporte remoto', 'Mantenimiento', 'Configuración', 'Mejora continua']}
      features={[
        ['Soporte remoto', 'Atención técnica para resolver incidencias, configuración y dudas operativas.'],
        ['Mantenimiento', 'Ajustes, actualizaciones menores y revisión de continuidad técnica.'],
        ['Mejora continua', 'Optimización de flujos, reportes, procesos e integraciones existentes.'],
      ]}
    />
  )
}
EOF_TSX

cat > app/contacto/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta a NearTec para diagnóstico, cotización o soporte.',
}

export default function ContactoPage() {
  return (
    <ServicePage
      kind="contacto"
      eyebrow="Contacto"
      title="Hablemos de la tecnología que necesita tu empresa."
      description="Podemos revisar web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte, infraestructura o desarrollo a medida."
      proof={['WhatsApp 664 404 6194', 'meta@itimbre.com', 'Diagnóstico', 'Cotización']}
      features={[
        ['Diagnóstico', 'Identificamos necesidades técnicas, comerciales y operativas.'],
        ['Cotización', 'Preparamos una propuesta según alcance, tiempos y prioridades.'],
        ['Soporte', 'Damos seguimiento a operación, configuración y mejora continua.'],
      ]}
    />
  )
}
EOF_TSX

cat > app/casos/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Casos y escenarios',
  description: 'Escenarios donde NearTec integra tecnología para empresas.',
}

export default function CasosPage() {
  return (
    <ServicePage
      kind="casos"
      eyebrow="Casos y escenarios"
      title="Tecnología aplicada a problemas reales de operación."
      description="NearTec ayuda cuando una empresa necesita vender mejor, ordenar procesos, respaldarse, operar con sistema o integrar herramientas."
      proof={['Web + CRM', 'POS + timbres', 'CN7 + nube', 'Soporte técnico']}
      features={[
        ['Presencia digital', 'Empresas que necesitan explicar mejor sus servicios y convertir contactos.'],
        ['Operación diaria', 'Negocios que requieren ventas, inventario, timbres y reportes.'],
        ['Continuidad', 'Equipos que necesitan respaldo, nube, hosting e infraestructura.'],
      ]}
    />
  )
}
EOF_TSX

cat > app/recursos/page.tsx <<'EOF_TSX'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Recursos',
  description: 'Recursos, cotizador y diagnóstico NearTec.',
}

export default function RecursosPage() {
  return (
    <ServicePage
      kind="recursos"
      eyebrow="Recursos"
      title="Herramientas para decidir mejor tu siguiente paso tecnológico."
      description="Usa el cotizador, solicita diagnóstico o revisa qué solución encaja mejor con tu operación."
      proof={['Cotizador', 'Diagnóstico', 'WhatsApp', 'Soporte']}
      features={[
        ['Cotizador', 'Calcula una primera ruta de servicios y costos base.'],
        ['Diagnóstico', 'Revisamos necesidades reales antes de proponer tecnología.'],
        ['Acompañamiento', 'Te guiamos para elegir entre web, CRM, CompuNegocio, CN7 o soporte.'],
      ]}
    />
  )
}
EOF_TSX

echo "== app/v52.css =="
cat > app/v52.css <<'EOF_CSS'
:root {
  --v52-bg: #f6fbf2;
  --v52-paper: #ffffff;
  --v52-ink: #05170f;
  --v52-muted: #5d6b62;
  --v52-line: rgba(9, 36, 22, .12);
  --v52-green: #16b43d;
  --v52-lime: #a8ff38;
  --v52-deep: #0b2518;
  --v52-shadow: 0 28px 90px rgba(6, 35, 20, .13);
  --v52-radius: 34px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at 18% 8%, rgba(168,255,56,.24), transparent 28%),
    radial-gradient(circle at 85% 20%, rgba(22,180,61,.10), transparent 32%),
    linear-gradient(180deg, #fbfff8 0%, #f6fbf2 100%);
  color: var(--v52-ink);
  font-family: var(--font-inter), system-ui, sans-serif;
  overflow-x: hidden;
}

main {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.v52-container {
  width: min(1180px, calc(100% - 44px));
  margin: 0 auto;
}

.v52-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(9, 36, 22, .08);
  background: rgba(251, 255, 248, .86);
  backdrop-filter: blur(22px);
}

.v52-nav-inner {
  width: min(1220px, calc(100% - 34px));
  height: 96px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 26px;
}

.v52-logo {
  display: flex;
  align-items: center;
  min-width: 160px;
}

.v52-logo img {
  width: 165px;
  height: auto;
  object-fit: contain;
}

.v52-nav-links {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 22px;
  font-size: .92rem;
  font-weight: 800;
  color: rgba(5, 23, 15, .72);
}

.v52-nav-links a:hover {
  color: var(--v52-green);
}

.v52-nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.v52-nav-cta,
.v52-btn.primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 26px;
  border-radius: 999px;
  background: linear-gradient(135deg, #05a33a, #a8ff38);
  color: #06160e;
  font-weight: 950;
  box-shadow: 0 18px 38px rgba(22, 180, 61, .30);
  border: 1px solid rgba(255,255,255,.5);
}

.v52-menu-btn {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid var(--v52-line);
  background: white;
  display: none;
  place-items: center;
  color: var(--v52-ink);
}

.v52-mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 140;
  background: rgba(5, 23, 15, .32);
  backdrop-filter: blur(10px);
  padding: 96px 18px 18px;
}

.v52-mobile-card {
  border-radius: 34px;
  background: rgba(255,255,255,.94);
  box-shadow: var(--v52-shadow);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.75);
}

.v52-mobile-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid var(--v52-line);
}

.v52-mobile-head b {
  font-family: var(--font-sora), sans-serif;
  font-size: 1.45rem;
}

.v52-mobile-head button {
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background: #effbea;
}

.v52-mobile-card nav {
  display: grid;
  padding: 16px 24px 26px;
}

.v52-mobile-card nav a {
  display: flex;
  justify-content: space-between;
  padding: 17px 0;
  font-size: 1.25rem;
  font-weight: 950;
  border-bottom: 1px solid rgba(9,36,22,.08);
}

.v52-mobile-contact {
  margin: 0 24px 14px;
  min-height: 58px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6fbf2;
  font-weight: 900;
  border: 1px solid var(--v52-line);
}

.v52-hero,
.v52-service-hero,
.v52-quote-intro {
  position: relative;
  padding: 86px 0 58px;
}

.v52-hero::before,
.v52-section::before,
.v52-service-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(9,36,22,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(9,36,22,.05) 1px, transparent 1px);
  background-size: 86px 86px;
  mask-image: linear-gradient(180deg, black, transparent 78%);
  pointer-events: none;
}

.v52-hero-grid,
.v52-service-grid {
  position: relative;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  align-items: center;
  gap: 52px;
}

.v52-hero-copy,
.v52-service-copy {
  position: relative;
  z-index: 2;
}

.v52-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  max-width: 100%;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid var(--v52-line);
  background: rgba(255,255,255,.72);
  box-shadow: 0 12px 42px rgba(6,35,20,.08);
  color: #155b2a;
  font-size: .82rem;
  font-weight: 950;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.v52-pill span {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--v52-lime);
  box-shadow: 0 0 0 10px rgba(168,255,56,.18);
}

.v52-hero h1,
.v52-service-copy h1 {
  max-width: 910px;
  margin: 24px 0 22px;
  font-family: var(--font-sora), sans-serif;
  font-size: clamp(4rem, 8vw, 7.7rem);
  line-height: .86;
  letter-spacing: -.08em;
  text-wrap: balance;
}

.v52-service-copy h1 {
  font-size: clamp(3.6rem, 7vw, 6.4rem);
}

.v52-hero p,
.v52-service-copy p,
.v52-section-head p {
  max-width: 720px;
  font-size: clamp(1.08rem, 2vw, 1.35rem);
  line-height: 1.65;
  color: var(--v52-muted);
  font-weight: 700;
}

.v52-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 30px 0 22px;
}

.v52-btn {
  min-height: 58px;
  padding: 0 28px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 950;
  white-space: nowrap;
}

.v52-btn.soft {
  background: rgba(255,255,255,.82);
  border: 1px solid var(--v52-line);
  box-shadow: 0 16px 42px rgba(6,35,20,.08);
}

.v52-btn.soft.dark {
  background: rgba(255,255,255,.16);
  color: white;
  border-color: rgba(255,255,255,.20);
}

.v52-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.v52-chip-row span,
.v52-chip-row a {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 15px;
  border-radius: 999px;
  background: rgba(255,255,255,.72);
  border: 1px solid var(--v52-line);
  color: #244134;
  font-weight: 900;
}

.v52-hero-visual,
.v52-service-visual {
  position: relative;
  min-height: 560px;
  border-radius: 46px;
  overflow: visible;
  isolation: isolate;
}

.v52-hero-visual picture,
.v52-hero-visual img,
.v52-service-visual img {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  min-height: 560px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 36px 70px rgba(6,35,20,.14));
}

.v52-visual-glow {
  position: absolute;
  inset: 8% 4%;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(168,255,56,.24), transparent 62%);
  filter: blur(24px);
  animation: v52Pulse 4s ease-in-out infinite;
}

.v52-floating-card {
  position: absolute;
  z-index: 4;
  display: grid;
  gap: 4px;
  padding: 18px 20px;
  border-radius: 24px;
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(255,255,255,.82);
  box-shadow: var(--v52-shadow);
  backdrop-filter: blur(14px);
}

.v52-floating-card.top {
  top: 10%;
  right: 4%;
}

.v52-floating-card.bottom {
  bottom: 8%;
  left: 4%;
}

.v52-floating-card b {
  font-size: .96rem;
}

.v52-floating-card span {
  color: var(--v52-muted);
  font-size: .86rem;
  font-weight: 800;
}

.v52-metrics {
  padding: 10px 0 58px;
}

.v52-metric-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.v52-metric {
  padding: 24px;
  border-radius: 28px;
  background: rgba(255,255,255,.74);
  border: 1px solid var(--v52-line);
  box-shadow: 0 18px 46px rgba(6,35,20,.08);
}

.v52-metric small,
.v52-section-head span,
.v52-solution-body span,
.v52-price-card span,
.v52-scenario-grid span,
.v52-final-card span,
.v52-service-label {
  color: #107b33;
  font-weight: 950;
  letter-spacing: .12em;
  text-transform: uppercase;
  font-size: .78rem;
}

.v52-metric b {
  display: block;
  margin: 8px 0;
  font-family: var(--font-sora), sans-serif;
  font-size: 1.35rem;
}

.v52-metric p {
  color: var(--v52-muted);
  line-height: 1.45;
  margin: 0;
  font-weight: 750;
}

.v52-section {
  position: relative;
  padding: 86px 0;
}

.v52-section-soft {
  background: linear-gradient(180deg, rgba(255,255,255,.62), rgba(233,248,226,.62));
}

.v52-section-dark {
  background:
    radial-gradient(circle at 20% 0%, rgba(168,255,56,.22), transparent 35%),
    linear-gradient(135deg, #06170f, #123d25);
  color: white;
}

.v52-section-head {
  max-width: 850px;
  margin-bottom: 36px;
}

.v52-section-head.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.v52-section-head.split {
  max-width: none;
  display: grid;
  grid-template-columns: 1fr .8fr;
  align-items: end;
  gap: 30px;
}

.v52-section-head h2 {
  margin: 12px 0 12px;
  font-family: var(--font-sora), sans-serif;
  font-size: clamp(2.5rem, 5vw, 5.3rem);
  line-height: .95;
  letter-spacing: -.065em;
  text-wrap: balance;
}

.v52-layer-grid,
.v52-feature-grid,
.v52-price-grid,
.v52-scenario-grid,
.v52-sla-grid {
  display: grid;
  gap: 18px;
}

.v52-layer-grid {
  grid-template-columns: repeat(3, 1fr);
}

.v52-layer-card,
.v52-feature-card,
.v52-price-card,
.v52-scenario-grid article,
.v52-graph-card,
.v52-score-card {
  border-radius: var(--v52-radius);
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(9,36,22,.10);
  box-shadow: 0 18px 58px rgba(6,35,20,.08);
  padding: 28px;
  backdrop-filter: blur(14px);
}

.v52-layer-icon,
.v52-feature-card svg {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: #0f8d37;
  background: linear-gradient(135deg, rgba(168,255,56,.26), rgba(255,255,255,.88));
  margin-bottom: 18px;
}

.v52-layer-icon svg {
  width: 28px;
  height: 28px;
}

.v52-layer-card h3,
.v52-feature-card h3,
.v52-price-card h3,
.v52-scenario-grid h3 {
  font-family: var(--font-sora), sans-serif;
  font-size: 1.55rem;
  line-height: 1.05;
  margin: 10px 0;
  letter-spacing: -.04em;
}

.v52-layer-card p,
.v52-feature-card p,
.v52-price-card p,
.v52-scenario-grid p {
  color: var(--v52-muted);
  line-height: 1.62;
  font-weight: 700;
}

.v52-solution-grid {
  display: grid;
  gap: 28px;
}

.v52-solution-card {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 24px;
  align-items: center;
  border-radius: 42px;
  padding: 22px;
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(9,36,22,.10);
  box-shadow: var(--v52-shadow);
  overflow: hidden;
}

.v52-solution-card:nth-child(even) {
  grid-template-columns: 1.05fr .95fr;
}

.v52-solution-card:nth-child(even) .v52-solution-img {
  order: 2;
}

.v52-solution-img {
  position: relative;
  min-height: 360px;
  border-radius: 34px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255,255,255,.8), rgba(221,246,216,.7));
}

.v52-solution-img img {
  object-fit: contain;
  padding: 14px;
  filter: saturate(1.05) contrast(1.02);
}

.v52-solution-body {
  padding: 18px;
}

.v52-solution-body h3 {
  font-family: var(--font-sora), sans-serif;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: .96;
  letter-spacing: -.06em;
  margin: 12px 0;
}

.v52-solution-body p {
  color: var(--v52-muted);
  font-size: 1.08rem;
  line-height: 1.65;
  font-weight: 750;
}

.v52-solution-body ul,
.v52-price-card ul,
.v52-score-card ul {
  list-style: none;
  padding: 0;
  margin: 18px 0;
  display: grid;
  gap: 10px;
}

.v52-solution-body li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
}

.v52-solution-body li svg {
  color: var(--v52-green);
}

.v52-solution-body a,
.v52-price-card a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 950;
  color: #0f8d37;
}

.v52-graph-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 34px;
  align-items: start;
}

.v52-section-head.sticky {
  position: sticky;
  top: 124px;
}

.v52-process-list {
  display: grid;
  gap: 12px;
  margin-top: 28px;
}

.v52-process-list div {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255,255,255,.72);
  border: 1px solid var(--v52-line);
}

.v52-process-list b {
  color: var(--v52-green);
  margin-right: 10px;
}

.v52-process-list span {
  color: var(--v52-ink);
  letter-spacing: 0;
  text-transform: none;
  font-size: 1rem;
}

.v52-process-list p {
  margin: 6px 0 0;
  font-size: .92rem;
  line-height: 1.45;
}

.v52-graph-stack {
  display: grid;
  gap: 20px;
}

.v52-card-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.v52-card-head b {
  font-family: var(--font-sora), sans-serif;
  font-size: 1.2rem;
}

.v52-card-head span {
  color: var(--v52-green);
  font-weight: 900;
}

.v52-score-card {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 20px;
  align-items: center;
}

.v52-score-card li,
.v52-price-card li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid rgba(9,36,22,.08);
  color: var(--v52-muted);
  font-weight: 800;
}

.v52-score-card li b {
  color: var(--v52-green);
}

.v52-pipeline {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
}

.v52-pipeline-step {
  min-height: 124px;
  border-radius: 26px;
  padding: 18px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.16);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.v52-pipeline-step small {
  color: var(--v52-lime);
  font-weight: 950;
}

.v52-pipeline-step b {
  font-family: var(--font-sora), sans-serif;
  line-height: 1.05;
}

.v52-sla-grid {
  grid-template-columns: repeat(4, 1fr);
  margin-top: 24px;
}

.v52-sla-grid div {
  padding: 22px;
  border-radius: 24px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.16);
}

.v52-sla-grid p {
  color: rgba(255,255,255,.72);
  margin-bottom: 0;
  line-height: 1.45;
}

.v52-price-grid {
  grid-template-columns: repeat(3, 1fr);
}

.v52-price-card b {
  display: block;
  font-family: var(--font-sora), sans-serif;
  font-size: 2rem;
  line-height: 1;
  margin: 12px 0;
  letter-spacing: -.05em;
}

.v52-scenario-grid {
  grid-template-columns: repeat(4, 1fr);
}

.v52-final {
  padding: 70px 0 90px;
}

.v52-final-card {
  border-radius: 46px;
  padding: 54px;
  background:
    radial-gradient(circle at 82% 20%, rgba(168,255,56,.28), transparent 35%),
    linear-gradient(135deg, #07180f, #123d25);
  color: white;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 30px;
  align-items: center;
  box-shadow: 0 36px 90px rgba(6,35,20,.22);
}

.v52-final.small .v52-final-card {
  grid-template-columns: 1fr auto;
}

.v52-final-card h2 {
  font-family: var(--font-sora), sans-serif;
  font-size: clamp(2.4rem, 5vw, 5rem);
  line-height: .95;
  letter-spacing: -.065em;
  margin: 12px 0;
}

.v52-final-card p {
  color: rgba(255,255,255,.76);
  font-size: 1.1rem;
  line-height: 1.65;
  font-weight: 750;
}

.v52-final-icons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.v52-final-icons svg {
  width: 100%;
  height: 145px;
  padding: 45px;
  border-radius: 32px;
  background: rgba(255,255,255,.10);
  color: var(--v52-lime);
  border: 1px solid rgba(255,255,255,.15);
}

.v52-service-hero {
  padding-top: 76px;
}

.v52-service-grid {
  grid-template-columns: .95fr 1.05fr;
}

.v52-service-visual {
  min-height: 520px;
  padding: 10px;
  border-radius: 46px;
  background: rgba(255,255,255,.58);
  border: 1px solid rgba(9,36,22,.10);
  box-shadow: var(--v52-shadow);
}

.v52-service-visual img {
  min-height: 500px;
  object-fit: contain;
}

.v52-service-label {
  position: absolute;
  left: 34px;
  right: 34px;
  bottom: 26px;
  z-index: 3;
  min-height: 58px;
  border-radius: 999px;
  background: rgba(255,255,255,.86);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 42px rgba(6,35,20,.10);
}

.v52-feature-grid {
  grid-template-columns: repeat(3, 1fr);
}

.v52-proof-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.v52-proof-grid span {
  padding: 14px 18px;
  border-radius: 999px;
  background: white;
  border: 1px solid var(--v52-line);
  font-weight: 950;
  color: #164f2b;
}

.v52-quote-intro {
  padding-bottom: 22px;
}

.v52-footer {
  padding: 58px 0;
  background: #fbfff8;
  border-top: 1px solid var(--v52-line);
}

.v52-footer-grid {
  display: grid;
  grid-template-columns: 1.2fr .8fr 1fr;
  gap: 34px;
  align-items: start;
}

.v52-footer-brand b {
  display: block;
  font-family: var(--font-sora), sans-serif;
  font-size: 1.7rem;
  margin-bottom: 10px;
}

.v52-footer p,
.v52-footer span,
.v52-footer small {
  color: var(--v52-muted);
  line-height: 1.55;
  font-weight: 700;
}

.v52-footer-links,
.v52-footer-contact {
  display: grid;
  gap: 12px;
}

.v52-footer-links a,
.v52-footer-contact a {
  font-weight: 900;
  color: var(--v52-ink);
}

.v52-assist {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 120;
  display: grid;
  justify-items: end;
  gap: 14px;
}

.v52-assist-dock {
  display: grid;
  gap: 12px;
}

.v52-wa-fab,
.v52-ai-fab {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.8);
  box-shadow: 0 18px 42px rgba(6,35,20,.20);
  cursor: pointer;
}

.v52-wa-fab {
  background: linear-gradient(135deg, #18c64c, #a8ff38);
  color: #06160e;
}

.v52-wa-fab svg {
  width: 31px;
  height: 31px;
}

.v52-ai-fab {
  background: white;
  overflow: hidden;
}

.v52-wa-fab::before,
.v52-ai-fab::before {
  content: "";
  position: absolute;
  inset: -9px;
  border-radius: inherit;
  border: 1px solid rgba(22,180,61,.35);
  animation: v52Ring 2.8s ease-out infinite;
}

.v52-ai-fab img {
  object-fit: cover;
  border-radius: 50%;
}

.v52-assist-panel {
  width: min(420px, calc(100vw - 34px));
  border-radius: 32px;
  background: rgba(255,255,255,.95);
  border: 1px solid rgba(255,255,255,.80);
  box-shadow: var(--v52-shadow);
  overflow: hidden;
  backdrop-filter: blur(20px);
}

.v52-assist-head {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  border-bottom: 1px solid var(--v52-line);
}

.v52-assist-head b {
  display: block;
  font-size: 1.1rem;
}

.v52-assist-head span {
  color: var(--v52-green);
  font-weight: 900;
}

.v52-assist-head button {
  margin-left: auto;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: #effbea;
}

.v52-assist-body {
  padding: 18px;
}

.v52-assist-body p {
  background: #edf9e8;
  border-radius: 22px;
  padding: 16px;
  line-height: 1.5;
  color: #234333;
  font-weight: 700;
}

.v52-assist-body div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.v52-assist-body button {
  border: 1px solid var(--v52-line);
  background: white;
  border-radius: 999px;
  padding: 12px 14px;
  font-weight: 900;
}

.v52-assist-input {
  display: grid;
  grid-template-columns: 1fr 54px;
  gap: 8px;
  padding: 14px 18px 18px;
  background: #f8fcf5;
}

.v52-assist-input input {
  min-width: 0;
  border: 1px solid var(--v52-line);
  border-radius: 999px;
  padding: 0 16px;
  font: inherit;
  font-weight: 800;
}

.v52-assist-input button {
  border: 0;
  border-radius: 999px;
  background: var(--v52-green);
  color: white;
  display: grid;
  place-items: center;
}

@keyframes v52Pulse {
  0%, 100% { opacity: .72; transform: scale(.98); }
  50% { opacity: 1; transform: scale(1.04); }
}

@keyframes v52Ring {
  0% { opacity: .72; transform: scale(.75); }
  100% { opacity: 0; transform: scale(1.35); }
}

@media (max-width: 1020px) {
  .v52-nav-links {
    display: none;
  }

  .v52-menu-btn {
    display: grid;
  }

  .v52-hero-grid,
  .v52-service-grid,
  .v52-graph-grid,
  .v52-final-card,
  .v52-final.small .v52-final-card,
  .v52-section-head.split {
    grid-template-columns: 1fr;
  }

  .v52-metric-grid,
  .v52-layer-grid,
  .v52-price-grid,
  .v52-scenario-grid,
  .v52-sla-grid,
  .v52-feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .v52-pipeline {
    grid-template-columns: repeat(4, 1fr);
  }

  .v52-section-head.sticky {
    position: static;
  }

  .v52-solution-card,
  .v52-solution-card:nth-child(even) {
    grid-template-columns: 1fr;
  }

  .v52-solution-card:nth-child(even) .v52-solution-img {
    order: 0;
  }
}

@media (max-width: 760px) {
  .v52-container {
    width: min(100% - 28px, 640px);
  }

  .v52-nav-inner {
    height: 88px;
    width: calc(100% - 24px);
  }

  .v52-logo img {
    width: 158px;
  }

  .v52-nav-cta {
    min-height: 48px;
    padding: 0 20px;
  }

  .v52-menu-btn {
    width: 54px;
    height: 54px;
  }

  .v52-hero,
  .v52-service-hero,
  .v52-quote-intro {
    padding: 46px 0 36px;
  }

  .v52-hero h1,
  .v52-service-copy h1 {
    font-size: clamp(3.15rem, 15vw, 5.5rem);
    line-height: .88;
    letter-spacing: -.075em;
  }

  .v52-hero p,
  .v52-service-copy p,
  .v52-section-head p {
    font-size: 1.03rem;
    line-height: 1.58;
  }

  .v52-hero-actions {
    display: grid;
    gap: 12px;
  }

  .v52-btn,
  .v52-nav-cta {
    width: 100%;
  }

  .v52-chip-row {
    gap: 8px;
  }

  .v52-chip-row span,
  .v52-chip-row a {
    min-height: 38px;
    font-size: .84rem;
  }

  .v52-hero-visual,
  .v52-service-visual {
    min-height: auto;
    border-radius: 34px;
    overflow: hidden;
    background: rgba(255,255,255,.55);
    border: 1px solid var(--v52-line);
    box-shadow: 0 18px 54px rgba(6,35,20,.10);
  }

  .v52-hero-visual picture,
  .v52-hero-visual img,
  .v52-service-visual img {
    min-height: 360px;
    height: 390px;
    object-fit: contain;
    padding: 6px;
  }

  .v52-floating-card {
    display: none;
  }

  .v52-section {
    padding: 58px 0;
  }

  .v52-section-head h2 {
    font-size: clamp(2.35rem, 11vw, 4.2rem);
  }

  .v52-metric-grid,
  .v52-layer-grid,
  .v52-price-grid,
  .v52-scenario-grid,
  .v52-sla-grid,
  .v52-feature-grid,
  .v52-pipeline {
    grid-template-columns: 1fr;
  }

  .v52-solution-card {
    padding: 12px;
    border-radius: 34px;
  }

  .v52-solution-img {
    min-height: 330px;
  }

  .v52-solution-body h3 {
    font-size: clamp(2rem, 10vw, 3.4rem);
  }

  .v52-score-card {
    grid-template-columns: 1fr;
  }

  .v52-final-card {
    padding: 30px;
    border-radius: 34px;
  }

  .v52-final-icons {
    grid-template-columns: repeat(2, 1fr);
  }

  .v52-final-icons svg {
    height: 105px;
    padding: 30px;
  }

  .v52-footer-grid {
    grid-template-columns: 1fr;
  }

  .v52-footer-links,
  .v52-footer-contact {
    gap: 14px;
  }

  .v52-assist {
    right: 14px;
    bottom: 14px;
  }

  .v52-wa-fab,
  .v52-ai-fab {
    width: 64px;
    height: 64px;
  }

  .v52-assist-panel {
    width: calc(100vw - 28px);
  }
}
EOF_CSS

echo "== scripts/preflight.js =="
cat > scripts/preflight.js <<'EOF_JS'
const fs = require('fs')
const path = require('path')

const requiredFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/soluciones/page.tsx',
  'app/cotizador/page.tsx',
  'app/v52.css',
  'components/V52FusionSystem.tsx',
  'components/ServicePage.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/FloatingAssist.tsx',
  'lib/site-data.ts',
  'app/api/lead/route.ts',
]

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)))
if (missing.length) {
  console.error('Faltan archivos V5.2:')
  for (const file of missing) console.error(`- ${file}`)
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (!pkg.name?.includes('v52')) {
  console.error(`package.json no está en V5.2. Actual: ${pkg.name}`)
  process.exit(1)
}

for (const dep of ['framer-motion', 'recharts', 'lucide-react']) {
  if (!pkg.dependencies?.[dep]) {
    console.error(`Falta dependencia ${dep}`)
    process.exit(1)
  }
}

const layout = fs.readFileSync('app/layout.tsx', 'utf8')
if (!layout.includes('v52.css')) {
  console.error('layout no importa app/v52.css')
  process.exit(1)
}

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  console.error('API /api/lead no conserva NEARTEC_LEAD_WEBHOOK_URL')
  process.exit(1)
}

console.log('Preflight OK: NearTec V5.2 Fusion Master listo para Vercel.')
EOF_JS

echo "== scripts/smoke-test.mjs =="
cat > scripts/smoke-test.mjs <<'EOF_JS'
import fs from 'node:fs'

const read = (file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''

const publicCode = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/landing/page.tsx',
  'app/soluciones/page.tsx',
  'app/cotizador/page.tsx',
  'app/diseno-web/page.tsx',
  'app/crm-automatizacion/page.tsx',
  'app/compunegocio/page.tsx',
  'app/cn7/page.tsx',
  'app/soporte/page.tsx',
  'components/V52FusionSystem.tsx',
  'components/ServicePage.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/FloatingAssist.tsx',
  'lib/site-data.ts',
  'app/v52.css',
].map(read).join('\n')

const requiredTerms = [
  'NearTec',
  'Desarrollamos tecnología',
  'web',
  'apps',
  'CRM',
  'automatización',
  'IA',
  'CompuNegocio',
  'CN7',
  'nube',
  'hosting',
  'VPS',
  'FTP',
  'correo',
  'soporte',
  '664 404 6194',
  'meta@itimbre.com',
  'NEA040929DKA',
]

for (const term of requiredTerms) {
  if (!publicCode.toLowerCase().includes(term.toLowerCase())) {
    throw new Error(`No se encontró término V5.2: ${term}`)
  }
}

const requiredAssets = [
  'public/images/visuals/hero-home-desktop.webp',
  'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/hero-landing-desktop.webp',
  'public/images/visuals/visual-web.webp',
  'public/images/visuals/visual-crm.webp',
  'public/images/visuals/visual-compunegocio.webp',
  'public/images/visuals/visual-cn7.webp',
  'public/images/visuals/visual-cotizador.webp',
  'public/images/brand/neary-symbol.webp',
  'public/images/og/og-home.png',
]

for (const file of requiredAssets) {
  if (!fs.existsSync(file)) {
    throw new Error(`Falta asset V5.2: ${file}`)
  }
}

for (const term of ['motion', 'ResponsiveContainer', 'AreaChart', 'BarChart', 'RadialBarChart']) {
  if (!publicCode.includes(term)) {
    throw new Error(`Falta motion/chart V5.2: ${term}`)
  }
}

for (const forbidden of [
  '664 630 0473',
  '664-630-04-73',
  '526646300473',
  'info@neartec.com',
  'info@itimbre.com',
  'Panel demostrativo',
  'Stack NearTec',
  'Webhook preparado',
]) {
  if (publicCode.includes(forbidden)) {
    throw new Error(`Copy/contacto viejo o interno detectado: ${forbidden}`)
  }
}

const api = read('app/api/lead/route.ts')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')
}

console.log('Smoke test OK: NearTec V5.2 Fusion Master validado.')
EOF_JS

echo "== Instalando dependencias =="
npm install --engine-strict=false

echo "== Validaciones =="
echo "Contacto viejo:"
grep -RInE "664 630 0473|664-630-04-73|526646300473|info@neartec.com|info@itimbre.com" app components lib --exclude-dir=node_modules || echo "OK: no hay contacto viejo."

npm run type-check
npm run predeploy:check
npm run smoke

echo "== Git commit =="
git status --short
git add -A
git commit -m "Launch NearTec V5.2 Fusion Master" || echo "Sin cambios para commit."
git push origin main

echo "== V5.2 Fusion Master aplicado y enviado a GitHub =="
echo "Backup creado en: $BACKUP_BRANCH"
echo "Siguiente paso: ejecutar deploy Vercel."
