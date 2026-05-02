#!/usr/bin/env bash
set -euo pipefail

cd "${REPO_DIR:-$HOME/neartec-site}"

BACKUP_BRANCH="backup/pre-v5-master-$(date +%Y%m%d-%H%M%S)"
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git checkout main || true
  git pull origin main || true
  git checkout -b "$BACKUP_BRANCH" || true
  git push -u origin "$BACKUP_BRANCH" || true
  git checkout main || true
fi

npm install framer-motion recharts lucide-react

node - <<'JS'
const fs = require('fs')
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'))
pkg.name = 'neartec-web-v50-technology-integrator-master'
pkg.version = '5.0.0'
pkg.scripts = {
  ...pkg.scripts,
  'type-check': 'tsc --noEmit',
  'predeploy:check': pkg.scripts?.['predeploy:check'] || 'node scripts/preflight.js',
  'smoke': pkg.scripts?.smoke || 'node scripts/smoke-test.mjs && node scripts/test-api-local.mjs'
}
pkg.engines = { node: '20.x' }
pkg.dependencies = {
  ...pkg.dependencies,
  'framer-motion': pkg.dependencies?.['framer-motion'] || '^11.18.2',
  'lucide-react': pkg.dependencies?.['lucide-react'] || '^0.468.0',
  'recharts': pkg.dependencies?.recharts || '^2.15.0'
}
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')
JS

mkdir -p app components lib

cat > lib/site-data.ts <<'EOF'
export const CONTACT = {
  phoneDisplay: '664 404 6194',
  phoneHref: 'tel:6644046194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  commercialEmail: 'meta@itimbre.com',
  legalPhoneDisplay: '664 630 0473',
  legalEmail: 'info@itimbre.com',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
  rfc: 'NEA040929DKA',
  legalName: 'NEARTEC',
  startDate: '29 de septiembre de 2004',
  status: 'Activo',
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neartec.mx'

export const navItems = [
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/diseno-web', label: 'Web / Apps' },
  { href: '/crm-automatizacion', label: 'CRM / IA' },
  { href: '/compunegocio', label: 'CompuNegocio' },
  { href: '/cn7', label: 'CN7 / Nube' },
  { href: '/soporte', label: 'Soporte' },
]

export const techLayers = [
  {
    title: 'Presencia digital',
    text: 'Sitios web, landings, SEO técnico, formularios y rutas claras hacia WhatsApp o cotización.',
    tag: 'Web + lead flow',
  },
  {
    title: 'Desarrollo y apps',
    text: 'Interfaces, paneles, herramientas internas y módulos digitales hechos a la medida del proceso.',
    tag: 'Código útil',
  },
  {
    title: 'CRM, automatización e IA',
    text: 'Seguimiento, formularios, alertas, WhatsApp, tareas repetitivas e inteligencia aplicada a operación.',
    tag: 'Seguimiento',
  },
  {
    title: 'Operación comercial',
    text: 'CompuNegocio para ventas, inventario, usuarios, reportes, timbres y control diario.',
    tag: 'POS + timbres',
  },
  {
    title: 'Infraestructura',
    text: 'CN7, nube, respaldo, hosting, VPS, FTP, correo corporativo y continuidad operativa.',
    tag: 'Nube + respaldo',
  },
  {
    title: 'Soporte y evolución',
    text: 'Soporte remoto, configuración, capacitación, mantenimiento, mejoras y desarrollo evolutivo.',
    tag: 'Acompañamiento',
  },
] as const

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary: 'Sitios, landings, apps, interfaces y módulos digitales para explicar, vender, automatizar y operar mejor.',
    bullets: ['Sitios y landings rápidos', 'Apps y paneles a medida', 'SEO técnico + formularios + tracking'],
    metric: 'Presencia + código',
    visual: '/images/visuals/visual-web.webp',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary: 'CRM, scoring, WhatsApp, formularios, alertas e IA aplicada a procesos comerciales y operativos reales.',
    bullets: ['Seguimiento y recordatorios', 'Calificación de prospectos', 'IA para atención, operación y análisis'],
    metric: 'Procesos claros',
    visual: '/images/visuals/visual-crm.webp',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio, punto de venta y timbres',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Implementación de CompuNegocio para ventas, inventario, usuarios, reportes, timbres y operación diaria.',
    bullets: ['Desde $450 MXN por estación / mes', 'Implementación remota base $1,500 MXN', 'Timbres CN y soporte operativo'],
    metric: 'POS + control',
    visual: '/images/visuals/visual-compunegocio.webp',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    tag: 'Infraestructura',
    summary: 'CN7, respaldo, nube, hosting, VPS, correo, FTP, continuidad y administración técnica para reducir riesgos.',
    bullets: ['CN7 desde $99 USD / mes', 'Nube, respaldo y recuperación', 'Hosting, VPS, correo y soporte'],
    metric: 'Continuidad',
    visual: '/images/visuals/visual-cn7.webp',
    accent: 'aqua',
  },
  {
    title: 'Soporte, mantenimiento y evolución',
    href: '/soporte',
    tag: 'Soporte',
    summary: 'Atención remota, configuración, capacitación, mantenimiento, recuperación, mejoras y desarrollo evolutivo.',
    bullets: ['Soporte con póliza desde $499 MXN/h', 'Desarrollo con póliza desde $999 MXN/h', 'Acompañamiento remoto'],
    metric: 'Operación estable',
    visual: '/images/visuals/hero-landing-desktop.webp',
    accent: 'lime',
  },
]

export const workflow = [
  ['1. Atraer', 'Visitantes llegan desde sitio web, anuncios, tráfico orgánico, redes o WhatsApp.'],
  ['2. Capturar', 'El prospecto deja datos en landing, cotizador, formulario o conversación.'],
  ['3. Filtrar', 'Se califica por necesidad, urgencia, autoridad, volumen, presupuesto y tiempo.'],
  ['4. Conectar', 'El seguimiento pasa a WhatsApp, CRM, asesor o diagnóstico según prioridad.'],
  ['5. Cotizar', 'Se genera una base clara o propuesta manual según alcance e integración.'],
  ['6. Implementar', 'NearTec aterriza web, CRM, IA, CompuNegocio, CN7, nube, soporte o desarrollo.'],
] as const

export const scoringCriteria = [
  ['Empresa formal / RFC activo', 20],
  ['Decisor o influencia directa', 20],
  ['Dolor claro y urgente', 20],
  ['Volumen o recurrencia', 20],
  ['Presupuesto / autoridad de compra', 10],
  ['Implementación menor a 30 días', 10],
] as const

export const pipeline = [
  'Nuevo lead',
  'Contactado',
  'Diagnóstico agendado',
  'Diagnóstico realizado',
  'Cotización enviada',
  'Negociación',
  'Ganado / perdido',
  'Onboarding',
] as const

export const slaItems = [
  ['Lead nuevo', 'menos de 10 minutos hábiles'],
  ['Lead calificado', 'mismo día'],
  ['Diagnóstico realizado', '24 horas hábiles'],
  ['Cotización enviada', '24–48 horas'],
  ['Recuperación', 'secuencia 1, 3, 7 y 14 días'],
] as const

export const proofStats = [
  ['Web + Apps', 'presencia y herramientas digitales'],
  ['CRM + IA', 'automatización y seguimiento'],
  ['POS + Timbres', 'operación diaria con control'],
  ['CN7 + Nube', 'respaldo e infraestructura'],
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
  { label: 'Soporte técnico con póliza', price: '$499 MXN por hora' },
  { label: 'Desarrollo con póliza', price: '$999 MXN por hora' },
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

export const scenarios = [
  ['Más claridad comercial', 'Sitio o landing que explica rápido, captura datos y conecta con WhatsApp/cotizador.'],
  ['Mostrador y operación diaria', 'CompuNegocio para ventas, inventario, usuarios, reportes, timbres y soporte.'],
  ['Continuidad y respaldo', 'CN7, nube, respaldo automático, hosting, VPS, correo y administración técnica.'],
  ['Ruta integral', 'Web + CRM + WhatsApp + IA + operación + soporte para crecer con menos piezas sueltas.'],
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'USD' ? 0 : 0,
  }).format(amount)
}
EOF

cat > lib/neartec-data.ts <<'EOF'
export * from './site-data'
EOF

cat > components/V5VisualSystem.tsx <<'EOF'
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  DatabaseBackup,
  Gauge,
  LifeBuoy,
  MessageCircle,
  MonitorSmartphone,
  Network,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
  Zap,
} from 'lucide-react'
import {
  cn7Pricing,
  compuPricing,
  money,
  pipeline,
  priceSignals,
  scenarios,
  scoringCriteria,
  serviceRates,
  slaItems,
  solutions,
  techLayers,
  workflow,
} from '@/lib/site-data'

const lineData = [
  { name: 'Visita', value: 28 },
  { name: 'Lead', value: 47 },
  { name: 'Score', value: 68 },
  { name: 'Cita', value: 74 },
  { name: 'Propuesta', value: 83 },
  { name: 'Cierre', value: 92 },
]

const barData = [
  { name: 'Web', value: 78 },
  { name: 'CRM', value: 86 },
  { name: 'POS', value: 72 },
  { name: 'CN7', value: 82 },
]

const iconMap = [MonitorSmartphone, Code2, Bot, Store, Cloud, LifeBuoy]

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function V5HeroVisual() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="v5-hero-visual"
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Ecosistema tecnológico NearTec"
      >
        <div className="v5-orbit" aria-hidden="true" />
        <div className="v5-hero-image-wrap">
          <Image
            src="/images/visuals/hero-home-desktop.webp"
            alt="Ecosistema tecnológico NearTec con web, CRM, automatización, CompuNegocio, CN7, nube y soporte"
            fill
            priority
            className="v5-hero-image v5-desktop-img"
            sizes="(max-width: 980px) 100vw, 52vw"
          />
          <Image
            src="/images/visuals/hero-home-mobile.webp"
            alt="Ecosistema tecnológico NearTec en formato móvil"
            fill
            priority
            className="v5-hero-image v5-mobile-img"
            sizes="100vw"
          />
        </div>

        <motion.div className="v5-floating-card v5-card-web" animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <MonitorSmartphone size={19} />
          <span>Web / Apps</span>
        </motion.div>
        <motion.div className="v5-floating-card v5-card-crm" animate={{ y: [0, 10, 0] }} transition={{ duration: 5.6, repeat: Infinity }}>
          <Bot size={19} />
          <span>CRM + IA</span>
        </motion.div>
        <motion.div className="v5-floating-card v5-card-cn" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <Cloud size={19} />
          <span>CN7 / Nube</span>
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function TechLayerGrid() {
  return (
    <section className="v5-section v5-section-tight">
      <div className="v5-container">
        <Reveal className="v5-section-head v5-center">
          <span className="v5-eyebrow">Capas del ecosistema</span>
          <h2>NearTec conecta la parte comercial, operativa y técnica de tu empresa.</h2>
          <p>La ruta no es comprar piezas sueltas. Es integrar presencia, desarrollo, seguimiento, operación, infraestructura y soporte.</p>
        </Reveal>

        <div className="v5-layer-grid">
          {techLayers.map((layer, index) => {
            const Icon = iconMap[index]
            return (
              <Reveal key={layer.title} delay={index * 0.05} className="v5-layer-card">
                <div className="v5-icon-bubble"><Icon size={22} /></div>
                <small>{layer.tag}</small>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SolutionShowcase() {
  return (
    <section className="v5-section v5-section-soft" id="soluciones-v5">
      <div className="v5-container">
        <Reveal className="v5-section-head v5-split-head">
          <div>
            <span className="v5-eyebrow">Soluciones principales</span>
            <h2>Diseño premium, información real y servicios ordenados por impacto.</h2>
          </div>
          <p>El sitio debe vender visualmente como producto tecnológico, pero sin inventar métricas. Cada bloque comunica una línea real de NearTec.</p>
        </Reveal>

        <div className="v5-solution-grid">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className={`v5-solution-card accent-${item.accent}`}>
              <div className="v5-solution-img">
                <Image src={item.visual} alt={item.title} fill sizes="(max-width: 760px) 100vw, 44vw" />
              </div>
              <div className="v5-solution-copy">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={16} />{bullet}</li>)}
                </ul>
                <Link href={item.href}>Ver solución <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkflowSystem() {
  return (
    <section className="v5-section">
      <div className="v5-container">
        <Reveal className="v5-section-head v5-center">
          <span className="v5-eyebrow">Cómo funciona</span>
          <h2>Del interés al seguimiento: una ruta visual, medible y operable.</h2>
          <p>La estructura comercial se basa en capturar, calificar, responder, cotizar e implementar con seguimiento.</p>
        </Reveal>

        <div className="v5-flow-panel">
          <div className="v5-flow-line" aria-hidden="true" />
          {workflow.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.05} className="v5-flow-step">
              <div>{index + 1}</div>
              <b>{title}</b>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <div className="v5-chart-grid">
          <Reveal className="v5-chart-card">
            <div className="v5-card-top"><b>Pipeline comercial</b><span>Lead → cierre</span></div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={lineData} margin={{ top: 12, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="ntArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#18b84f" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#18b84f" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 10" stroke="#dceadc" />
                <XAxis dataKey="name" stroke="#66756b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#66756b" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#16a647" strokeWidth={3} fill="url(#ntArea)" />
              </AreaChart>
            </ResponsiveContainer>
          </Reveal>

          <Reveal className="v5-chart-card" delay={0.08}>
            <div className="v5-card-top"><b>Capas activas</b><span>Arquitectura NearTec</span></div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={barData} margin={{ top: 12, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 10" stroke="#dceadc" />
                <XAxis dataKey="name" stroke="#66756b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#66756b" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#18b84f" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function ScoringAndTracking() {
  return (
    <section className="v5-section v5-section-dark">
      <div className="v5-container v5-score-grid">
        <Reveal className="v5-section-head">
          <span className="v5-eyebrow v5-eyebrow-dark">Scoring y seguimiento</span>
          <h2>La pauta no se escala por mensajes baratos: se escala por oportunidades trazables.</h2>
          <p>El sistema real prioriza leads con negocio formal, decisor, dolor urgente, volumen, presupuesto y tiempo de implementación.</p>
        </Reveal>

        <Reveal className="v5-score-console" delay={0.1}>
          <div className="v5-score-ring" style={{ '--score': '85%' } as React.CSSProperties}>
            <span>85</span>
            <small>/100</small>
          </div>
          <div className="v5-score-list">
            {scoringCriteria.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{value} pts</b>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="v5-pipeline-card" delay={0.14}>
          <div className="v5-card-top"><b>Pipeline NearTec</b><span>Etapas obligatorias</span></div>
          <div className="v5-pipeline-list">
            {pipeline.map((step, index) => <span key={step}>{index + 1}. {step}</span>)}
          </div>
        </Reveal>

        <Reveal className="v5-sla-card" delay={0.18}>
          <div className="v5-card-top"><b>SLA comercial</b><span>respuesta real</span></div>
          {slaItems.map(([label, value]) => <p key={label}><b>{label}</b><span>{value}</span></p>)}
        </Reveal>
      </div>
    </section>
  )
}

export function PricingSystem() {
  return (
    <section className="v5-section" id="precios-v5">
      <div className="v5-container">
        <Reveal className="v5-section-head v5-center">
          <span className="v5-eyebrow">Precios documentados</span>
          <h2>Precios públicos claros para CompuNegocio, CN7, soporte, desarrollo y timbres.</h2>
          <p>Los precios se muestran como base comercial. El alcance final puede requerir validación, IVA y propuesta según implementación.</p>
        </Reveal>

        <div className="v5-price-signal-grid">
          {priceSignals.map(([label, value]) => <Reveal key={label} className="v5-price-signal"><small>{label}</small><b>{value}</b></Reveal>)}
        </div>

        <div className="v5-price-grid">
          <Reveal className="v5-price-card v5-price-main">
            <div className="v5-card-top"><b>CompuNegocio</b><span>por estación</span></div>
            {compuPricing.map((row) => (
              <div className="v5-price-row" key={row.range}>
                <span>{row.range}</span>
                <b>{money(row.monthly, 'MXN')} <small>/ mes</small></b>
                <em>{money(row.annual, 'MXN')} anual</em>
              </div>
            ))}
          </Reveal>

          <Reveal className="v5-price-card" delay={0.06}>
            <div className="v5-card-top"><b>CN7 / Nube</b><span>continuidad</span></div>
            {cn7Pricing.map((row) => (
              <div className="v5-mini-row" key={row.label}>
                <span>{row.label}</span>
                <b>{money(row.amount, 'USD')} / {row.period}</b>
              </div>
            ))}
          </Reveal>

          <Reveal className="v5-price-card" delay={0.1}>
            <div className="v5-card-top"><b>Servicios</b><span>remoto</span></div>
            {serviceRates.map((row) => (
              <div className="v5-mini-row" key={row.label}>
                <span>{row.label}</span>
                <b>{row.price}</b>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function ScenarioGrid() {
  return (
    <section className="v5-section v5-section-soft">
      <div className="v5-container">
        <Reveal className="v5-section-head v5-center">
          <span className="v5-eyebrow">Escenarios reales</span>
          <h2>NearTec tiene sentido cuando necesitas conectar ventas, operación e infraestructura.</h2>
        </Reveal>
        <div className="v5-scenario-grid">
          {scenarios.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.04} className="v5-scenario-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTAFlow() {
  return (
    <section className="v5-section v5-final-cta">
      <div className="v5-container">
        <Reveal className="v5-final-panel">
          <div>
            <span className="v5-eyebrow">Siguiente paso</span>
            <h2>Define si necesitas web, app, CRM, IA, CompuNegocio, CN7, nube, soporte o una solución integrada.</h2>
            <p>El diagnóstico aterriza alcance, prioridad, costos base y ruta de implementación sin venderte piezas sueltas.</p>
          </div>
          <div className="v5-final-actions">
            <Link className="v5-btn v5-btn-green" href="/cotizador">Cotizar proyecto</Link>
            <Link className="v5-btn v5-btn-light" href="/landing">Agendar diagnóstico</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export const V5Icons = {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  DatabaseBackup,
  Gauge,
  MessageCircle,
  Network,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
}
EOF

cat > components/Navbar.tsx <<'EOF'
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CONTACT, navItems } from '@/lib/site-data'

const extraLinks = [
  { href: '/cotizador', label: 'Cotizador' },
  { href: '/landing', label: 'Diagnóstico' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="v5-nav">
      <div className="v5-container v5-nav-inner">
        <Link href="/" className="v5-brand" aria-label="NearTec inicio" onClick={() => setOpen(false)}>
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={190} height={68} priority />
        </Link>

        <nav className="v5-desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="v5-nav-actions">
          <Link className="v5-nav-cta" href="/cotizador">Cotizar</Link>
          <button className="v5-menu-btn" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="v5-mobile-menu" role="dialog" aria-modal="true" aria-label="Menú NearTec">
          <div className="v5-mobile-menu-backdrop" onClick={() => setOpen(false)} />
          <div className="v5-mobile-menu-card">
            <div className="v5-mobile-menu-head">
              <b>NearTec</b>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú">×</button>
            </div>
            <div className="v5-mobile-menu-links">
              {[...navItems, ...extraLinks].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  <span>{item.label}</span>
                  <em>→</em>
                </Link>
              ))}
            </div>
            <div className="v5-mobile-contact">
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={() => setOpen(false)}>WhatsApp {CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`} onClick={() => setOpen(false)}>{CONTACT.email}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
EOF

cat > components/FloatingAssist.tsx <<'EOF'
'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { QUICK_SUGGESTIONS, getNearyAnswer } from '@/lib/neary-knowledge'

type Message = { id: string; role: 'bot' | 'user'; text: string }
const id = () => Math.random().toString(16).slice(2)

function NearyIcon() {
  return (
    <span className="v5-neary-icon">
      <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={34} height={34} />
    </span>
  )
}

export default function FloatingAssist() {
  const [open, setOpen] = useState(false)
  const [chat, setChat] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: id(),
      role: 'bot',
      text: 'Soy Neary AI. Puedo ayudarte a ubicar si necesitas web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte o una solución integral.',
    },
  ])
  const bodyRef = useRef<HTMLDivElement>(null)

  const wa = useMemo(() => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero diagnóstico o cotización para un proyecto tecnológico.')}`, [])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, chat])

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return
    const res = getNearyAnswer(clean)
    setMessages((current) => [
      ...current,
      { id: id(), role: 'user', text: clean },
      { id: id(), role: 'bot', text: res.answer },
    ])
    setInput('')
    setChat(true)
    setOpen(false)
  }

  return (
    <div className="v5-assist">
      {chat && (
        <section className="v5-assist-chat" aria-label="Chat Neary AI">
          <header>
            <div>
              <NearyIcon />
              <span><b>Neary AI</b><small>Asistente tecnológico NearTec</small></span>
            </div>
            <button type="button" onClick={() => setChat(false)} aria-label="Cerrar chat"><X size={18}/></button>
          </header>
          <div className="v5-assist-body" ref={bodyRef}>
            {messages.map((message) => <p key={message.id} className={message.role}>{message.text}</p>)}
          </div>
          <div className="v5-assist-chips">
            {QUICK_SUGGESTIONS.slice(0, 4).map((suggestion) => (
              <button type="button" key={suggestion} onClick={() => send(suggestion)}>{suggestion}</button>
            ))}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); send(input) }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Cuéntame qué necesitas..." />
            <button type="submit" aria-label="Enviar"><Send size={17}/></button>
          </form>
        </section>
      )}

      {open && (
        <div className="v5-assist-dock">
          <button type="button" onClick={() => { setChat(true); setOpen(false) }}>
            <Bot size={18}/>
            <span>Hablar con Neary AI</span>
          </button>
          <a href={wa} target="_blank" rel="noreferrer">
            <MessageCircle size={18}/>
            <span>WhatsApp directo</span>
          </a>
        </div>
      )}

      <button type="button" className="v5-assist-trigger" aria-label="Abrir Neary AI y WhatsApp" onClick={() => chat ? setChat(false) : setOpen((value) => !value)}>
        <NearyIcon />
      </button>
    </div>
  )
}
EOF

cat > components/Footer.tsx <<'EOF'
import Link from 'next/link'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer className="v5-footer">
      <div className="v5-container v5-footer-grid">
        <div>
          <h2>NearTec</h2>
          <p>Integrador tecnológico-comercial para empresas: web, apps, CRM, IA, CompuNegocio, CN7, nube, infraestructura, correo y soporte.</p>
          <div className="v5-footer-badges">
            <span>{CONTACT.rfc}</span>
            <span>{CONTACT.status}</span>
            <span>Tijuana, B.C.</span>
          </div>
        </div>
        <div>
          <b>Soluciones</b>
          {navItems.slice(1).map((item) => <p key={item.href}><Link href={item.href}>{item.label}</Link></p>)}
        </div>
        <div>
          <b>Acción</b>
          <p><Link href="/cotizador">Cotizador</Link></p>
          <p><Link href="/landing">Diagnóstico</Link></p>
          <p><Link href="/contacto">Contacto</Link></p>
          <p><Link href="/privacidad">Privacidad</Link></p>
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

cat > app/layout.tsx <<'EOF'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Sora } from 'next/font/google'
import './globals.css'
import './v5.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingAssist from '@/components/FloatingAssist'
import { CONTACT, siteUrl } from '@/lib/site-data'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], display: 'swap', variable: '--font-display' })
const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' })

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
    'NearTec desarrolla e integra sitios web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, respaldo, hosting, VPS, correo, soporte e infraestructura para empresas.',
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
  name: CONTACT.legalName,
  alternateName: 'NearTec',
  url: siteUrl,
  telephone: '+52 664 404 6194',
  email: CONTACT.email,
  taxID: CONTACT.rfc,
  foundingDate: '2004-09-29',
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
    <html lang="es-MX" className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <body>
        <div className="v5-site-bg" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingAssist />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  )
}
EOF

cat > app/page.tsx <<'EOF'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import QuoteEngine from '@/components/QuoteEngine'
import {
  CTAFlow,
  PricingSystem,
  ScenarioGrid,
  ScoringAndTracking,
  SolutionShowcase,
  TechLayerGrid,
  V5HeroVisual,
  WorkflowSystem,
} from '@/components/V5VisualSystem'
import { CONTACT, proofStats } from '@/lib/site-data'

export default function HomePage() {
  return (
    <>
      <section className="v5-hero">
        <div className="v5-container v5-hero-grid">
          <div className="v5-hero-copy">
            <span className="v5-eyebrow">Integrador tecnológico-comercial</span>
            <h1>Desarrollo, automatización e infraestructura para que tu empresa venda, opere y crezca con control.</h1>
            <p>
              NearTec integra sitios web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte e infraestructura para conectar la parte comercial, operativa y técnica de tu negocio.
            </p>
            <div className="v5-hero-actions">
              <Link className="v5-btn v5-btn-green" href="/cotizador">Cotizar proyecto</Link>
              <Link className="v5-btn v5-btn-light" href="/landing">Agendar diagnóstico</Link>
              <a className="v5-btn v5-btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
            <div className="v5-proof-strip">
              {proofStats.map(([title, text]) => <div key={title}><b>{title}</b><span>{text}</span></div>)}
            </div>
          </div>
          <V5HeroVisual />
        </div>
      </section>

      <TechLayerGrid />
      <SolutionShowcase />
      <WorkflowSystem />
      <ScoringAndTracking />
      <PricingSystem />

      <section className="v5-section" id="cotizador">
        <div className="v5-container">
          <div className="v5-section-head v5-center v5-before-quote">
            <span className="v5-eyebrow">Cotizador</span>
            <h2>Cotiza con base real antes de comprar tecnología.</h2>
            <p>Calcula una base preliminar para CompuNegocio, CN7, timbres, soporte y desarrollo; si el alcance es mayor, lo convertimos en propuesta.</p>
          </div>
          <QuoteEngine />
        </div>
      </section>

      <ScenarioGrid />

      <section className="v5-section v5-section-soft">
        <div className="v5-container v5-lead-grid">
          <div className="v5-section-head">
            <span className="v5-eyebrow">Diagnóstico y contacto</span>
            <h2>Cuéntanos qué necesitas y definimos la ruta correcta.</h2>
            <p>
              Puede ser web, app, automatización, CRM, IA, CompuNegocio, CN7, nube, soporte, correo o una solución integrada. El punto es ordenar el siguiente paso sin improvisar.
            </p>
            <div className="v5-hero-actions">
              <a className="v5-btn v5-btn-green" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
              <a className="v5-btn v5-btn-light" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <LeadForm source="home-v50" />
        </div>
      </section>

      <CTAFlow />
    </>
  )
}
EOF

cat > app/v5.css <<'EOF'
:root{
  --v5-green:#16a647;
  --v5-green-2:#59d62f;
  --v5-lime:#b8ff3e;
  --v5-ink:#06120c;
  --v5-graphite:#15231b;
  --v5-muted:#66756b;
  --v5-soft:#f7fbf2;
  --v5-soft-2:#edf7e8;
  --v5-line:#dceadc;
  --v5-card:rgba(255,255,255,.84);
  --v5-shadow:0 28px 90px rgba(9,42,19,.13);
  --v5-shadow-strong:0 42px 140px rgba(6,28,13,.20);
}

html{scroll-behavior:smooth;}
body{background:#f8fbf5;color:var(--v5-ink);font-family:var(--font-inter),system-ui,sans-serif;overflow-x:hidden;}
a{text-decoration:none;color:inherit;}
button,input,select,textarea{font:inherit;}
.v5-container{width:min(1190px,calc(100% - 36px));margin-inline:auto;}
.v5-site-bg{position:fixed;inset:0;z-index:-40;background:radial-gradient(circle at 18% -4%,rgba(184,255,62,.22),transparent 32%),radial-gradient(circle at 84% 2%,rgba(22,166,71,.13),transparent 28%),linear-gradient(180deg,#ffffff 0%,#f8fbf4 42%,#eef7e9 100%);}
.v5-site-bg:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(0,98,48,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(0,98,48,.055) 1px,transparent 1px);background-size:72px 72px;mask-image:linear-gradient(180deg,#000 0%,rgba(0,0,0,.72) 50%,transparent 100%);}
.v5-site-bg:after{content:"";position:absolute;inset:-10%;background:linear-gradient(112deg,transparent 0 32%,rgba(22,166,71,.08) 33%,transparent 36% 100%);animation:v5-scan 13s ease-in-out infinite alternate;}
@keyframes v5-scan{from{transform:translateX(-4%)}to{transform:translateX(5%)}}
@keyframes v5-pulse{0%,100%{transform:scale(1);opacity:.68}50%{transform:scale(1.26);opacity:.18}}
@keyframes v5-float{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-12px,0)}}
@keyframes v5-line{to{stroke-dashoffset:0}}

.v5-eyebrow{display:inline-flex;align-items:center;gap:.55rem;border:1px solid rgba(22,166,71,.18);background:rgba(255,255,255,.72);color:#17491f;border-radius:999px;padding:.52rem .82rem;font-weight:950;letter-spacing:.13em;text-transform:uppercase;font-size:.72rem;box-shadow:0 10px 30px rgba(40,70,36,.06);backdrop-filter:blur(18px);}
.v5-eyebrow:before{content:"";width:.58rem;height:.58rem;border-radius:99px;background:linear-gradient(135deg,var(--v5-green),var(--v5-lime));box-shadow:0 0 0 7px rgba(22,166,71,.11);}
.v5-eyebrow-dark{background:rgba(255,255,255,.1);border-color:rgba(184,255,62,.22);color:#dcffd0;}
.v5-btn{display:inline-flex;align-items:center;justify-content:center;gap:.65rem;border-radius:999px;min-height:52px;padding:.95rem 1.25rem;font-weight:950;border:1px solid transparent;transition:transform .24s ease,box-shadow .24s ease,background .24s ease;}
.v5-btn:hover{transform:translateY(-2px);}
.v5-btn-green,.v5-nav-cta{background:linear-gradient(135deg,#049735 0%,var(--v5-green-2) 62%,var(--v5-lime) 100%);color:#06120c;box-shadow:0 18px 52px rgba(22,166,71,.25),inset 0 1px 0 rgba(255,255,255,.5);}
.v5-btn-light{background:rgba(255,255,255,.82);border-color:rgba(18,70,31,.13);color:#0b1a11;box-shadow:0 16px 42px rgba(20,45,24,.08);}
.v5-btn-ghost{background:rgba(237,247,232,.82);border-color:rgba(22,166,71,.16);color:#17351d;}

.v5-nav{position:sticky;top:0;z-index:80;background:rgba(255,255,255,.72);border-bottom:1px solid rgba(220,234,220,.78);backdrop-filter:blur(22px);}
.v5-nav-inner{height:82px;display:flex;align-items:center;justify-content:space-between;gap:1rem;}
.v5-brand{display:flex;align-items:center;min-width:184px;}
.v5-brand img{width:184px;height:auto;object-fit:contain;filter:drop-shadow(0 14px 22px rgba(20,40,18,.08));}
.v5-desktop-nav{display:flex;align-items:center;gap:.12rem;}
.v5-desktop-nav a{padding:.72rem .78rem;border-radius:999px;color:#445347;font-weight:850;font-size:.92rem;transition:.2s ease;}
.v5-desktop-nav a:hover{background:#eef8e9;color:#07130c;}
.v5-nav-actions{display:flex;align-items:center;gap:.7rem;}
.v5-nav-cta{padding:.82rem 1.2rem;border-radius:999px;font-weight:950;}
.v5-menu-btn{display:none;width:54px;height:54px;border-radius:22px;border:1px solid var(--v5-line);background:#fff;box-shadow:0 12px 36px rgba(20,45,24,.08);place-items:center;gap:5px;}
.v5-menu-btn span{display:block;width:20px;height:2px;background:#06120c;border-radius:999px;}
.v5-mobile-menu{position:fixed;inset:0;z-index:100;display:grid;place-items:start center;padding:88px 14px 18px;}
.v5-mobile-menu-backdrop{position:absolute;inset:0;background:rgba(7,18,12,.22);backdrop-filter:blur(8px);}
.v5-mobile-menu-card{position:relative;width:min(100%,640px);background:rgba(255,255,255,.94);border:1px solid rgba(220,234,220,.92);border-radius:34px;box-shadow:0 34px 110px rgba(6,28,13,.24);overflow:hidden;}
.v5-mobile-menu-head{height:74px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid var(--v5-line);}
.v5-mobile-menu-head b{font-family:var(--font-display);font-size:1.35rem;}
.v5-mobile-menu-head button{width:46px;height:46px;border-radius:999px;border:0;background:#edf8e9;font-size:2rem;line-height:1;}
.v5-mobile-menu-links{display:grid;padding:14px 24px 20px;}
.v5-mobile-menu-links a{display:flex;align-items:center;justify-content:space-between;padding:17px 0;border-bottom:1px solid rgba(220,234,220,.76);font-size:1.26rem;font-weight:950;}
.v5-mobile-menu-links em{font-style:normal;color:var(--v5-green);}
.v5-mobile-contact{display:grid;gap:10px;padding:18px 24px 24px;background:linear-gradient(180deg,rgba(237,248,233,.55),rgba(255,255,255,.9));}
.v5-mobile-contact a{display:flex;justify-content:center;padding:15px;border-radius:999px;background:#fff;border:1px solid var(--v5-line);font-weight:950;}

.v5-hero{position:relative;overflow:hidden;padding:88px 0 58px;}
.v5-hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(420px,.98fr);gap:54px;align-items:center;}
.v5-hero-copy{position:relative;z-index:2;}
.v5-hero h1,.v5-section-head h2,.v5-final-panel h2{font-family:var(--font-display),var(--font-inter),sans-serif;font-weight:900;letter-spacing:-.07em;line-height:.92;color:#06120c;}
.v5-hero h1{font-size:clamp(3rem,6.4vw,6.25rem);margin:20px 0 22px;max-width:850px;}
.v5-hero p{font-size:clamp(1.04rem,1.5vw,1.25rem);line-height:1.68;color:#4f5f54;max-width:720px;font-weight:650;}
.v5-hero-actions{display:flex;gap:.86rem;flex-wrap:wrap;margin:30px 0;}
.v5-proof-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:34px;}
.v5-proof-strip div{border:1px solid rgba(220,234,220,.88);background:rgba(255,255,255,.68);backdrop-filter:blur(16px);border-radius:24px;padding:15px 16px;box-shadow:0 12px 36px rgba(20,45,24,.06);}
.v5-proof-strip b{display:block;font-size:.95rem;}
.v5-proof-strip span{display:block;color:var(--v5-muted);font-size:.78rem;margin-top:3px;line-height:1.35;}
.v5-hero-visual{position:relative;min-height:650px;display:grid;place-items:center;}
.v5-orbit{position:absolute;width:88%;aspect-ratio:1;border-radius:999px;background:radial-gradient(circle,rgba(184,255,62,.36),rgba(22,166,71,.12) 38%,transparent 64%);filter:blur(32px);animation:v5-float 7s ease-in-out infinite;}
.v5-hero-image-wrap{position:relative;width:100%;height:min(640px,54vw);min-height:520px;border-radius:42px;overflow:hidden;background:linear-gradient(145deg,#fff,rgba(237,247,232,.72));box-shadow:var(--v5-shadow-strong);border:1px solid rgba(255,255,255,.9);}
.v5-hero-image{object-fit:contain;object-position:center;transform:scale(.985);filter:saturate(1.03) contrast(1.02);}
.v5-mobile-img{display:none;}
.v5-floating-card{position:absolute;z-index:3;display:flex;align-items:center;gap:9px;padding:.72rem .9rem;border:1px solid rgba(255,255,255,.9);background:rgba(255,255,255,.78);backdrop-filter:blur(20px);box-shadow:0 18px 55px rgba(17,54,23,.14);border-radius:999px;font-weight:950;color:#112218;}
.v5-floating-card svg{color:var(--v5-green);}
.v5-card-web{left:5%;top:18%;}.v5-card-crm{right:3%;top:30%;}.v5-card-cn{left:18%;bottom:9%;}

.v5-section{padding:104px 0;position:relative;}
.v5-section-tight{padding-top:72px;}
.v5-section-soft{background:linear-gradient(180deg,rgba(255,255,255,.24),rgba(237,247,232,.52));}
.v5-section-head{max-width:780px;}
.v5-center{text-align:center;margin-inline:auto;}
.v5-section-head h2{font-size:clamp(2.35rem,4.8vw,4.65rem);margin:18px 0 16px;}
.v5-section-head p{font-size:1.07rem;line-height:1.7;color:var(--v5-muted);font-weight:620;}
.v5-split-head{max-width:none;display:grid;grid-template-columns:1.1fr .8fr;gap:36px;align-items:end;margin-bottom:42px;}
.v5-layer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px;}
.v5-layer-card,.v5-scenario-card,.v5-chart-card,.v5-price-card,.v5-price-signal,.v5-score-console,.v5-pipeline-card,.v5-sla-card,.v5-final-panel{border:1px solid rgba(220,234,220,.86);background:var(--v5-card);backdrop-filter:blur(18px);box-shadow:var(--v5-shadow);border-radius:32px;}
.v5-layer-card{padding:26px;min-height:230px;transition:transform .22s ease,box-shadow .22s ease;}
.v5-layer-card:hover,.v5-scenario-card:hover,.v5-solution-card:hover{transform:translateY(-4px);box-shadow:var(--v5-shadow-strong);}
.v5-icon-bubble{width:52px;height:52px;border-radius:18px;background:linear-gradient(135deg,#eff9ea,#fff);border:1px solid var(--v5-line);display:grid;place-items:center;color:var(--v5-green);box-shadow:0 12px 32px rgba(22,166,71,.12);}
.v5-layer-card small,.v5-solution-copy span{display:inline-flex;margin:18px 0 10px;color:#1c6b2b;font-weight:950;letter-spacing:.12em;text-transform:uppercase;font-size:.72rem;}
.v5-layer-card h3,.v5-solution-copy h3,.v5-scenario-card h3{font-family:var(--font-display);font-size:1.35rem;letter-spacing:-.045em;margin:0 0 10px;}
.v5-layer-card p,.v5-scenario-card p{color:var(--v5-muted);line-height:1.62;margin:0;}

.v5-solution-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;}
.v5-solution-card{position:relative;overflow:hidden;border:1px solid rgba(220,234,220,.88);background:rgba(255,255,255,.82);border-radius:38px;box-shadow:var(--v5-shadow);transition:.24s ease;}
.v5-solution-img{position:relative;height:310px;background:#f7fbf4;overflow:hidden;}
.v5-solution-img img{object-fit:contain;object-position:center;padding:14px;transform:scale(.99);}
.v5-solution-copy{padding:28px;}
.v5-solution-copy h3{font-size:1.65rem;}
.v5-solution-copy p{color:var(--v5-muted);line-height:1.65;font-weight:600;}
.v5-solution-copy ul{list-style:none;display:grid;gap:10px;padding:0;margin:18px 0 22px;}
.v5-solution-copy li{display:flex;align-items:flex-start;gap:9px;color:#203326;font-weight:760;}
.v5-solution-copy li svg{color:var(--v5-green);flex:0 0 auto;margin-top:2px;}
.v5-solution-copy a{display:inline-flex;align-items:center;gap:8px;font-weight:950;color:#0f8133;}

.v5-flow-panel{position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:14px;margin-top:46px;}
.v5-flow-line{position:absolute;left:5%;right:5%;top:31px;height:2px;background:linear-gradient(90deg,transparent,var(--v5-green),transparent);opacity:.55;}
.v5-flow-step{position:relative;z-index:2;background:rgba(255,255,255,.82);border:1px solid var(--v5-line);border-radius:26px;padding:18px;box-shadow:0 16px 48px rgba(20,45,24,.07);}
.v5-flow-step div{width:34px;height:34px;border-radius:13px;background:#102016;color:var(--v5-lime);display:grid;place-items:center;font-weight:1000;margin-bottom:20px;}
.v5-flow-step b{display:block;font-size:.98rem;}
.v5-flow-step p{color:var(--v5-muted);font-size:.88rem;line-height:1.5;margin:.45rem 0 0;}
.v5-chart-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:24px;}
.v5-chart-card{padding:24px;min-height:360px;}
.v5-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:18px;}
.v5-card-top b{font-family:var(--font-display);font-size:1.25rem;letter-spacing:-.04em;}
.v5-card-top span{font-family:var(--font-mono);font-size:.78rem;color:var(--v5-muted);background:#f0f8eb;border:1px solid var(--v5-line);border-radius:999px;padding:.45rem .62rem;}

.v5-section-dark{background:linear-gradient(135deg,#06120c,#12241a 54%,#0b1b10);color:#fff;overflow:hidden;}
.v5-section-dark:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(184,255,62,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(184,255,62,.05) 1px,transparent 1px);background-size:72px 72px;opacity:.7;}
.v5-score-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:start;}
.v5-section-dark .v5-section-head h2{color:#fff;}
.v5-section-dark .v5-section-head p{color:#c4d6c7;}
.v5-score-console{display:grid;grid-template-columns:190px 1fr;gap:22px;align-items:center;padding:26px;background:rgba(255,255,255,.08);border-color:rgba(184,255,62,.16);}
.v5-score-ring{--score:85%;width:168px;height:168px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--v5-lime) var(--score),rgba(255,255,255,.12) 0);position:relative;box-shadow:0 0 60px rgba(184,255,62,.14);}
.v5-score-ring:before{content:"";position:absolute;inset:15px;border-radius:50%;background:#08140d;border:1px solid rgba(255,255,255,.1);}
.v5-score-ring span,.v5-score-ring small{position:relative;z-index:1;}
.v5-score-ring span{font-family:var(--font-display);font-size:3.2rem;font-weight:950;letter-spacing:-.06em;}
.v5-score-ring small{position:absolute;bottom:48px;color:#9fbba5;}
.v5-score-list{display:grid;gap:10px;}
.v5-score-list div,.v5-sla-card p{display:flex;align-items:center;justify-content:space-between;gap:1rem;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.06);border-radius:18px;padding:12px 14px;}
.v5-score-list span,.v5-sla-card span{color:#d8eadb;}
.v5-score-list b,.v5-sla-card b{color:var(--v5-lime);}
.v5-pipeline-card,.v5-sla-card{padding:24px;background:rgba(255,255,255,.08);border-color:rgba(184,255,62,.16);}
.v5-pipeline-list{display:flex;flex-wrap:wrap;gap:10px;}
.v5-pipeline-list span{display:inline-flex;border:1px solid rgba(184,255,62,.16);background:rgba(184,255,62,.07);border-radius:999px;padding:.58rem .74rem;font-weight:800;color:#edffe8;}
.v5-sla-card p{margin:10px 0;}

.v5-price-signal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:38px 0 22px;}
.v5-price-signal{padding:22px;}
.v5-price-signal small{display:block;color:var(--v5-muted);font-weight:900;text-transform:uppercase;letter-spacing:.12em;font-size:.72rem;margin-bottom:8px;}
.v5-price-signal b{font-family:var(--font-display);font-size:1.45rem;letter-spacing:-.04em;}
.v5-price-grid{display:grid;grid-template-columns:1.15fr .92fr .92fr;gap:18px;}
.v5-price-card{padding:26px;}
.v5-price-row{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;border-top:1px solid var(--v5-line);padding:18px 0;}
.v5-price-row span,.v5-mini-row span{font-weight:850;color:#243328;}
.v5-price-row b{font-family:var(--font-display);font-size:1.42rem;letter-spacing:-.05em;}
.v5-price-row small{font-family:var(--font-inter);font-size:.82rem;color:var(--v5-muted);}
.v5-price-row em{grid-column:1/-1;font-style:normal;color:var(--v5-muted);font-size:.9rem;}
.v5-mini-row{display:grid;gap:7px;border-top:1px solid var(--v5-line);padding:15px 0;}
.v5-mini-row b{color:#0c772f;}

.v5-before-quote{margin-bottom:34px;}
.v5-lead-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:28px;align-items:start;}
.v5-scenario-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:36px;}
.v5-scenario-card{padding:26px;}
.v5-scenario-card span{font-family:var(--font-mono);color:#0f8133;font-weight:900;}
.v5-scenario-card h3{margin-top:30px;}
.v5-final-cta{padding-top:0;}
.v5-final-panel{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;padding:40px;background:linear-gradient(135deg,rgba(255,255,255,.88),rgba(237,248,232,.86));overflow:hidden;}
.v5-final-panel h2{font-size:clamp(2rem,4vw,3.8rem);margin:16px 0;}
.v5-final-panel p{color:var(--v5-muted);font-weight:650;line-height:1.65;max-width:760px;}
.v5-final-actions{display:grid;gap:12px;min-width:240px;}

.v5-footer{padding:74px 0 110px;background:#06120c;color:#e8f5e9;}
.v5-footer-grid{display:grid;grid-template-columns:1.2fr .7fr .7fr 1fr;gap:34px;}
.v5-footer h2{font-family:var(--font-display);font-size:2rem;letter-spacing:-.06em;margin:0 0 14px;}
.v5-footer p{color:#bdd0c1;line-height:1.65;margin:.45rem 0;}
.v5-footer b{display:block;color:#fff;margin-bottom:12px;}
.v5-footer a:hover{color:var(--v5-lime);}
.v5-footer-badges{display:flex;flex-wrap:wrap;gap:9px;margin-top:18px;}
.v5-footer-badges span{border:1px solid rgba(184,255,62,.14);background:rgba(184,255,62,.06);border-radius:999px;padding:.48rem .62rem;font-family:var(--font-mono);font-size:.74rem;color:#edffe8;}

.v5-assist{position:fixed;right:22px;bottom:22px;z-index:90;}
.v5-assist-trigger{position:relative;width:70px;height:70px;border:0;border-radius:26px;background:linear-gradient(135deg,#06a83b,var(--v5-lime));display:grid;place-items:center;box-shadow:0 22px 80px rgba(22,166,71,.34);cursor:pointer;}
.v5-assist-trigger:before,.v5-assist-trigger:after{content:"";position:absolute;inset:-10px;border-radius:31px;border:1px solid rgba(22,166,71,.38);animation:v5-pulse 3.6s ease-in-out infinite;}
.v5-assist-trigger:after{animation-delay:1.2s;}
.v5-neary-icon{position:relative;z-index:1;width:44px;height:44px;display:grid;place-items:center;border-radius:18px;background:rgba(255,255,255,.34);box-shadow:inset 0 1px 0 rgba(255,255,255,.5);overflow:hidden;}
.v5-neary-icon img{width:38px;height:38px;object-fit:contain;}
.v5-assist-dock{position:absolute;right:0;bottom:84px;display:grid;gap:10px;}
.v5-assist-dock a,.v5-assist-dock button{white-space:nowrap;display:flex;align-items:center;gap:10px;border:1px solid var(--v5-line);background:rgba(255,255,255,.92);border-radius:20px;padding:.9rem 1rem;font-weight:950;color:#102016;box-shadow:0 18px 55px rgba(28,51,24,.12);cursor:pointer;}
.v5-assist-dock svg{color:var(--v5-green);}
.v5-assist-chat{position:absolute;right:0;bottom:84px;width:min(420px,calc(100vw - 28px));background:#fff;border:1px solid var(--v5-line);border-radius:32px;box-shadow:0 34px 110px rgba(28,51,24,.24);overflow:hidden;}
.v5-assist-chat header{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;background:linear-gradient(135deg,#f2f8e9,#fff);}
.v5-assist-chat header>div{display:flex;align-items:center;gap:12px;}
.v5-assist-chat b{display:block;}.v5-assist-chat small{display:block;color:var(--v5-muted);}
.v5-assist-chat header button{width:38px;height:38px;border:0;border-radius:999px;background:#edf8e8;}
.v5-assist-body{height:286px;overflow:auto;padding:16px;display:grid;align-content:start;gap:10px;}
.v5-assist-body p{margin:0;padding:12px 14px;border-radius:18px;line-height:1.45;}
.v5-assist-body .bot{background:#f1f8e9;color:#142018;}
.v5-assist-body .user{background:#142018;color:#fff;margin-left:32px;}
.v5-assist-chips{display:flex;gap:8px;overflow:auto;padding:0 16px 12px;}
.v5-assist-chips button{border:1px solid var(--v5-line);border-radius:999px;background:#fff;padding:.55rem .72rem;font-size:.78rem;font-weight:850;white-space:nowrap;}
.v5-assist-chat form{display:grid;grid-template-columns:1fr auto;gap:8px;padding:14px;border-top:1px solid var(--v5-line);}
.v5-assist-chat input{border:1px solid var(--v5-line);border-radius:16px;padding:.85rem 1rem;outline:none;}
.v5-assist-chat form button{border:0;background:#142018;color:#fff;border-radius:16px;padding:.8rem 1rem;}

/* Compatibility polish for existing QuoteEngine + LeadForm */
.quote-wrap{display:grid;grid-template-columns:1.05fr .85fr;gap:22px;align-items:start;}
.nt-card,.quote-form,.quote-result,.lead-card{border:1px solid rgba(220,234,220,.86)!important;background:rgba(255,255,255,.86)!important;box-shadow:var(--v5-shadow)!important;backdrop-filter:blur(18px);}
.quote-form,.quote-result,.lead-card{border-radius:34px!important;}
.quote-form h2,.lead-card h3{font-family:var(--font-display);letter-spacing:-.055em;}
.field-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
.field{display:grid;gap:7px;}.field label{font-weight:900;color:#243328;font-size:.9rem;}
.field input,.field select,.field textarea,.lead-mini input,.lead-mini select{width:100%;border:1px solid var(--v5-line);background:#fff;border-radius:16px;padding:.9rem 1rem;outline:none;}
.field textarea{min-height:118px;resize:vertical;}
.quote-result{position:sticky;top:104px;padding:26px;}
.score-ring{display:flex;align-items:center;gap:16px;}
.score-num{--score:0%;width:92px;height:92px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--v5-green) var(--score),#e7f1e1 0);font-family:var(--font-display);font-size:1.65rem;font-weight:950;position:relative;}
.score-num:before{content:"";position:absolute;inset:9px;border-radius:50%;background:#fff;}.score-num{color:#06120c;}.score-num{isolation:isolate;}
.score-num::after{content:attr(data-empty);}
.money-grid{display:grid;gap:10px;margin:20px 0;}.money-grid div{border:1px solid var(--v5-line);border-radius:20px;padding:14px;background:#fff;}.money-grid span{display:block;color:var(--v5-muted);font-size:.84rem;font-weight:800;}.money-grid b{display:block;margin-top:4px;font-size:1.08rem;}
.quote-actions{display:grid;gap:10px;}.quote-actions .btn,.lead-mini .btn{width:100%;}
.lead-card{padding:28px;}.lead-card-head{display:flex;justify-content:space-between;align-items:center;gap:1rem;}.lead-card-head b{font-family:var(--font-mono);color:#0f8133;}.lead-card p{color:var(--v5-muted);line-height:1.62;}.lead-mini{display:grid;gap:12px;margin-top:18px;}
.text-near-mute{color:var(--v5-muted);}.btn{border-radius:999px!important;font-weight:950!important;}.btn-green{background:linear-gradient(135deg,#049735,var(--v5-green-2),var(--v5-lime))!important;color:#06120c!important;}.btn-dark{background:#102016!important;color:#fff!important;}.btn-outline{background:#fff!important;border:1px solid var(--v5-line)!important;color:#102016!important;}

@media (max-width:1080px){
  .v5-desktop-nav{display:none}.v5-menu-btn{display:grid}.v5-hero-grid{grid-template-columns:1fr;gap:32px}.v5-hero-visual{min-height:auto}.v5-hero-image-wrap{height:620px;min-height:620px}.v5-layer-grid,.v5-price-grid{grid-template-columns:1fr 1fr}.v5-flow-panel{grid-template-columns:repeat(3,1fr)}.v5-score-grid,.v5-lead-grid,.quote-wrap{grid-template-columns:1fr}.quote-result{position:static}.v5-footer-grid{grid-template-columns:1fr 1fr}
}
@media (max-width:760px){
  .v5-container{width:min(100% - 24px,1190px)}.v5-nav-inner{height:76px}.v5-brand img{width:170px}.v5-nav-cta{padding:.76rem 1rem}.v5-hero{padding:58px 0 32px}.v5-hero h1{font-size:clamp(3rem,14vw,4.65rem);line-height:.9}.v5-hero p{font-size:1rem}.v5-hero-actions .v5-btn{width:100%}.v5-proof-strip,.v5-layer-grid,.v5-solution-grid,.v5-flow-panel,.v5-chart-grid,.v5-price-signal-grid,.v5-price-grid,.v5-scenario-grid,.field-grid{grid-template-columns:1fr}.v5-hero-image-wrap{height:680px;min-height:680px;border-radius:34px}.v5-desktop-img{display:none}.v5-mobile-img{display:block}.v5-hero-image{object-fit:contain;transform:scale(.96)}.v5-floating-card{font-size:.78rem;padding:.58rem .68rem}.v5-card-web{left:4%;top:10%}.v5-card-crm{right:4%;top:18%}.v5-card-cn{left:8%;bottom:7%}.v5-section{padding:72px 0}.v5-section-head h2{font-size:clamp(2.25rem,10vw,3.3rem)}.v5-split-head{grid-template-columns:1fr;gap:10px}.v5-solution-img{height:260px}.v5-flow-line{display:none}.v5-score-console{grid-template-columns:1fr;justify-items:center}.v5-final-panel{grid-template-columns:1fr;padding:28px}.v5-final-actions{min-width:0}.v5-footer-grid{grid-template-columns:1fr}.v5-mobile-menu{padding-top:82px}.v5-mobile-menu-links a{font-size:1.12rem}.v5-assist{right:14px;bottom:14px}.v5-assist-trigger{width:62px;height:62px;border-radius:23px}.v5-neary-icon{width:39px;height:39px}.v5-assist-chat{bottom:76px}.v5-assist-dock{bottom:76px}.quote-form,.quote-result,.lead-card{padding:20px!important;border-radius:28px!important}.v5-footer{padding-bottom:96px}
}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.v5-site-bg:after{display:none}}
EOF

cat > components/ServicePage.tsx <<'EOF'
import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import { ServiceAssetVisual } from '@/components/AssetVisuals'
import { CONTACT } from '@/lib/site-data'

type Kind = 'suite' | 'web' | 'crm' | 'compunegocio' | 'cn7' | 'soporte' | 'contacto' | 'recursos' | 'casos'

export default function ServicePage({
  kind,
  eyebrow,
  title,
  description,
  features,
}: {
  kind: Kind
  eyebrow: string
  title: string
  description: string
  features: [string, string][]
}) {
  return (
    <>
      <section className="v5-hero v5-service-hero">
        <div className="v5-container v5-hero-grid">
          <div className="v5-hero-copy">
            <span className="v5-eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="v5-hero-actions">
              <Link className="v5-btn v5-btn-green" href="/cotizador">Cotizar mi solución</Link>
              <Link className="v5-btn v5-btn-light" href="/landing">Quiero mi diagnóstico</Link>
              <a className="v5-btn v5-btn-ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a>
            </div>
          </div>
          <div className="v5-service-visual">
            <ServiceAssetVisual kind={kind} />
          </div>
        </div>
      </section>

      <section className="v5-section v5-section-soft">
        <div className="v5-container v5-layer-grid">
          {features.map(([heading, body], index) => (
            <article className="v5-layer-card" key={heading}>
              <div className="v5-icon-bubble">{String(index + 1).padStart(2, '0')}</div>
              <small>Prioridad</small>
              <h3>{heading}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v5-section">
        <div className="v5-container"><QuoteEngine compact /></div>
      </section>
    </>
  )
}
EOF

# V5-specific service visual polish, appended so it can override older AssetVisual CSS safely.
cat >> app/v5.css <<'EOF'
.v5-service-hero .v5-hero-grid{align-items:center;}
.v5-service-visual .asset-frame,.v5-service-visual .asset-service-shell{width:100%;min-height:520px;border-radius:42px;overflow:hidden;box-shadow:var(--v5-shadow-strong);background:rgba(255,255,255,.82);}
.v5-service-visual img,.v5-service-visual .asset-img{object-fit:contain!important;object-position:center!important;padding:10px;}
@media (max-width:760px){.v5-service-visual .asset-frame,.v5-service-visual .asset-service-shell{min-height:430px;border-radius:32px}.v5-service-visual img,.v5-service-visual .asset-img{padding:8px}}
EOF

npm run type-check
npm run build
