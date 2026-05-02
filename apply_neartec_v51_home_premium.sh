#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

cd "$HOME/neartec-site" || exit 1

echo "== NearTec V5.1 Home Premium System =="
echo "Base: V5.0.2 funcional. Se conserva API, rutas, cotizador, assets, contacto y deploy."

git status --short

git pull --rebase origin main

BACKUP_BRANCH="backup/pre-v51-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push -u origin "$BACKUP_BRANCH"
git checkout main

ASSET_ZIP="/sdcard/Download/NearTec_V46_Assets_WebReady.zip"
if [ -f "$ASSET_ZIP" ]; then
  TMP_ASSETS="$HOME/neartec-v51-assets"
  rm -rf "$TMP_ASSETS"
  mkdir -p "$TMP_ASSETS"
  unzip -o "$ASSET_ZIP" -d "$TMP_ASSETS" >/dev/null
  rsync -a "$TMP_ASSETS/public/" public/
  echo "Assets V46/V51 sincronizados desde Download."
else
  echo "AVISO: no encontré $ASSET_ZIP. Continuo usando assets ya existentes en public/."
fi

mkdir -p app components lib public/images/visuals public/images/brand public/images/og

node - <<'NODE'
const fs = require('fs')
const pkgPath = 'package.json'
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
pkg.name = 'neartec-web-v51-home-premium-system'
pkg.version = '5.1.0'
pkg.scripts = pkg.scripts || {}
pkg.scripts['type-check'] = pkg.scripts['type-check'] || 'tsc --noEmit'
pkg.scripts['predeploy:check'] = 'node scripts/preflight.js'
pkg.scripts['smoke'] = 'node scripts/smoke-test.mjs && node scripts/test-api-local.mjs'
pkg.dependencies = pkg.dependencies || {}
pkg.dependencies['framer-motion'] = pkg.dependencies['framer-motion'] || '^11.18.2'
pkg.dependencies['recharts'] = pkg.dependencies['recharts'] || '^2.15.0'
pkg.dependencies['lucide-react'] = pkg.dependencies['lucide-react'] || '^0.468.0'
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
NODE

npm install --engine-strict=false

cat > lib/site-data.ts <<'EOF'
export const CONTACT = {
  phoneDisplay: '664 404 6194',
  phoneHref: 'tel:6644046194',
  whatsappNumber: '526644046194',
  email: 'meta@itimbre.com',
  commercialEmail: 'meta@itimbre.com',
  rfc: 'NEA040929DKA',
  legalName: 'NEARTEC',
  address: 'Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C., México, C.P. 22000',
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

export const heroMetrics = [
  { label: 'Desarrollo', value: 'Web · Apps · Código' },
  { label: 'Automatización', value: 'CRM · IA · Procesos' },
  { label: 'Operación', value: 'POS · Timbres · Control' },
  { label: 'Infraestructura', value: 'CN7 · Nube · Respaldo' },
]

export const techLayers = [
  {
    title: 'Presencia digital',
    tag: 'Web + landing',
    text: 'Sitios, landings, formularios y rutas claras hacia WhatsApp, diagnóstico o cotización.',
    icon: 'web',
  },
  {
    title: 'Desarrollo y apps',
    tag: 'Código a medida',
    text: 'Interfaces, flujos, módulos y soluciones digitales diseñadas para operar en serio.',
    icon: 'code',
  },
  {
    title: 'CRM, automatización e IA',
    tag: 'Procesos inteligentes',
    text: 'Seguimiento, recordatorios, respuestas, clasificación y automatizaciones aplicadas.',
    icon: 'ai',
  },
  {
    title: 'CompuNegocio',
    tag: 'Operación diaria',
    text: 'Ventas, inventario, usuarios, timbres, reportes, CSD y configuración operativa.',
    icon: 'pos',
  },
  {
    title: 'CN7, nube y respaldo',
    tag: 'Continuidad',
    text: 'Servidor, base de datos, respaldo automático, hospedaje, hosting, VPS, FTP y correo.',
    icon: 'cloud',
  },
  {
    title: 'Soporte e infraestructura',
    tag: 'Evolución técnica',
    text: 'Soporte remoto, capacitación, implementación, cambios mayores y desarrollo continuo.',
    icon: 'support',
  },
] as const

export const solutions = [
  {
    title: 'Web, apps y desarrollo a medida',
    href: '/diseno-web',
    tag: 'Desarrollo',
    summary: 'Diseñamos presencia digital, aplicaciones, interfaces y flujos que explican, venden y se integran con la operación.',
    bullets: ['Sitios y landings', 'Apps y módulos', 'SEO técnico + performance'],
    metric: 'Presencia sólida',
    asset: '/images/visuals/visual-web.webp',
    accent: 'lime',
  },
  {
    title: 'CRM, automatización e IA aplicada',
    href: '/crm-automatizacion',
    tag: 'Automatización',
    summary: 'Ordenamos prospectos, seguimiento, tareas, WhatsApp y procesos repetitivos con automatización e inteligencia aplicada.',
    bullets: ['CRM y seguimiento', 'Automatizaciones', 'IA operativa'],
    metric: 'Más respuesta',
    asset: '/images/visuals/visual-crm.webp',
    accent: 'mint',
  },
  {
    title: 'CompuNegocio, POS, timbres y operación',
    href: '/compunegocio',
    tag: 'Operación',
    summary: 'Implementamos CompuNegocio para controlar ventas, inventario, usuarios, timbres, reportes y configuración del sistema.',
    bullets: ['Desde $450 MXN / estación', 'Implementación remota', 'Timbres y reportes'],
    metric: 'Control diario',
    asset: '/images/visuals/visual-compunegocio.webp',
    accent: 'solar',
  },
  {
    title: 'CN7, nube, respaldo e infraestructura',
    href: '/cn7',
    tag: 'Infraestructura',
    summary: 'Configuramos CN7, respaldo automático, nube, hosting, VPS, FTP y correo para reducir riesgos operativos.',
    bullets: ['CN7 desde $99 USD', 'Respaldo automático', 'Hosting y correo'],
    metric: 'Continuidad real',
    asset: '/images/visuals/visual-cn7.webp',
    accent: 'aqua',
  },
] as const

export const processFlow = [
  { step: '01', title: 'Diagnóstico', text: 'Ubicamos si el problema es web, sistema, proceso, nube, soporte, fiscal o integración.' },
  { step: '02', title: 'Arquitectura', text: 'Definimos la ruta técnica: qué se desarrolla, qué se integra y qué se automatiza primero.' },
  { step: '03', title: 'Cotización', text: 'Separa precios base, horas, licencias, CN7, timbres y servicios a medida sin mezclar alcances.' },
  { step: '04', title: 'Implementación', text: 'Configuración, desarrollo, conexión, pruebas, capacitación y salida controlada.' },
  { step: '05', title: 'Operación', text: 'Soporte, respaldos, mejora continua, reportes y crecimiento del sistema.' },
]

export const pipeline = [
  'Nuevo lead',
  'Contactado',
  'Diagnóstico agendado',
  'Diagnóstico realizado',
  'Cotización enviada',
  'Negociación',
  'Onboarding',
]

export const scoreCriteria = [
  { label: 'Empresa formal / RFC activo', points: 20 },
  { label: 'Decisor o influencia directa', points: 20 },
  { label: 'Dolor claro y urgente', points: 20 },
  { label: 'Volumen o recurrencia', points: 20 },
  { label: 'Presupuesto / autoridad', points: 10 },
  { label: 'Implementación menor a 30 días', points: 10 },
]

export const slaItems = [
  ['Lead nuevo', 'Respuesta en menos de 10 minutos hábiles'],
  ['Lead calificado', 'Seguimiento el mismo día'],
  ['Diagnóstico realizado', 'Resumen en 24h hábiles'],
  ['Cotización enviada', '24 a 48h según alcance'],
]

export const pricingFamilies = [
  {
    title: 'CompuNegocio',
    eyebrow: 'Operación',
    price: 'Desde $450 MXN',
    note: 'por estación / mes',
    items: ['1 a 3 licencias: $450 mensual', '4 a 8 licencias: $400 mensual', '9+ licencias: $350 mensual'],
    cta: '/compunegocio',
  },
  {
    title: 'CN7 / Nube',
    eyebrow: 'Continuidad',
    price: 'Desde $99 USD',
    note: 'por mes',
    items: ['CN7 con respaldo: $99 USD', 'CN7 hospedado: $149 USD', 'Respaldo automático: $99 USD'],
    cta: '/cn7',
  },
  {
    title: 'Implementación',
    eyebrow: 'Arranque',
    price: '$1,500 MXN',
    note: 'pago único base',
    items: ['Instalación remota', 'Configuración CSD y logo', '2 horas de capacitación inicial'],
    cta: '/cotizador',
  },
  {
    title: 'Soporte / Desarrollo',
    eyebrow: 'Evolución',
    price: 'Desde $499 MXN',
    note: 'por hora con póliza',
    items: ['Soporte con póliza: $499/h', 'Desarrollo con póliza: $999/h', 'Regular sin póliza desde $999/h'],
    cta: '/soporte',
  },
] as const

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
  {
    title: 'Empresa que necesita sistema, no solo página',
    text: 'Creamos la presencia digital y conectamos formularios, CRM, WhatsApp, cotización y operación.',
  },
  {
    title: 'Negocio con mostrador, ventas e inventario',
    text: 'CompuNegocio ordena operación diaria y puede conectarse con timbres, soporte, CN7 y respaldo.',
  },
  {
    title: 'PyME que ya no puede depender de una computadora',
    text: 'CN7, nube y respaldo reducen riesgo local y preparan la operación para crecer con continuidad.',
  },
]

export function money(amount: number, currency: 'MXN' | 'USD' = 'MXN') {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
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
import { motion } from 'framer-motion'
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
  BrainCircuit,
  Cloud,
  Code2,
  DatabaseZap,
  MessageCircle,
  ServerCog,
  ShieldCheck,
  Store,
  Zap,
} from 'lucide-react'
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
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
}

const flowData = [
  { name: 'Diagnóstico', valor: 34 },
  { name: 'Arquitectura', valor: 52 },
  { name: 'Cotización', valor: 68 },
  { name: 'Implementación', valor: 83 },
  { name: 'Operación', valor: 94 },
]

const layerData = [
  { name: 'Web', valor: 76 },
  { name: 'Apps', valor: 64 },
  { name: 'CRM', valor: 82 },
  { name: 'CN7', valor: 71 },
  { name: 'Soporte', valor: 58 },
]

function IconFor({ type }: { type: string }) {
  const cls = 'v51-icon-svg'
  if (type === 'web') return <MessageCircle className={cls} />
  if (type === 'code') return <Code2 className={cls} />
  if (type === 'ai') return <BrainCircuit className={cls} />
  if (type === 'pos') return <Store className={cls} />
  if (type === 'cloud') return <Cloud className={cls} />
  return <ServerCog className={cls} />
}

export function HeroCommandCenter() {
  return (
    <motion.div className="v51-command" {...fadeUp}>
      <div className="v51-command-bg" />
      <picture className="v51-command-picture">
        <source media="(max-width: 760px)" srcSet="/images/visuals/hero-home-mobile.webp" />
        <img
          src="/images/visuals/hero-home-desktop.webp"
          alt="Ecosistema NearTec con desarrollo web, apps, CRM, automatización, CompuNegocio, CN7, nube y soporte conectados"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <svg className="v51-connector-lines" viewBox="0 0 900 620" aria-hidden="true">
        <path d="M132 142 C290 62, 520 78, 742 176" />
        <path d="M116 460 C268 354, 534 350, 790 476" />
        <path d="M212 80 C314 250, 426 330, 688 526" />
      </svg>

      <motion.div className="v51-orb orb-a" animate={{ y: [0, -14, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <Code2 /> Web · Apps
      </motion.div>
      <motion.div className="v51-orb orb-b" animate={{ y: [0, 12, 0] }} transition={{ duration: 5.2, repeat: Infinity }}>
        <BrainCircuit /> IA · CRM
      </motion.div>
      <motion.div className="v51-orb orb-c" animate={{ y: [0, -10, 0] }} transition={{ duration: 5.6, repeat: Infinity }}>
        <Cloud /> CN7 · Nube
      </motion.div>

      <div className="v51-command-panel">
        <span>NearTec Command Layer</span>
        <b>Arquitectura tecnológica conectada</b>
        <small>Desarrollo + operación + infraestructura</small>
      </div>
    </motion.div>
  )
}

export function HeroMetricStrip() {
  return (
    <motion.div className="v51-metric-strip" {...fadeUp}>
      {heroMetrics.map((item) => (
        <div key={item.label}>
          <span>{item.label}</span>
          <b>{item.value}</b>
        </div>
      ))}
    </motion.div>
  )
}

export function TechLayerGrid() {
  return (
    <section className="v51-section v51-layers" id="ecosistema">
      <div className="v51-container">
        <motion.div className="v51-section-head" {...fadeUp}>
          <span>Qué desarrolla e integra NearTec</span>
          <h2>Una capa tecnológica completa, no parches sueltos.</h2>
          <p>
            NearTec une presencia digital, código, automatización, operación e infraestructura
            para que la empresa pueda vender, operar y crecer con más control.
          </p>
        </motion.div>

        <div className="v51-layer-grid">
          {techLayers.map((layer, index) => (
            <motion.article key={layer.title} className="v51-layer-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.04 }}>
              <div className="v51-layer-icon"><IconFor type={layer.icon} /></div>
              <span>{layer.tag}</span>
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SolutionShowcase() {
  return (
    <section className="v51-section v51-solutions" id="soluciones">
      <div className="v51-container">
        <motion.div className="v51-section-head split" {...fadeUp}>
          <div>
            <span>Soluciones principales</span>
            <h2>El sistema NearTec se arma por necesidad, no por moda.</h2>
          </div>
          <p>
            Cada bloque puede funcionar solo, pero el mayor valor aparece cuando web, CRM,
            operación, nube y soporte trabajan como una misma ruta tecnológica.
          </p>
        </motion.div>

        <div className="v51-solution-grid">
          {solutions.map((solution, index) => (
            <motion.article key={solution.title} className={`v51-solution-card accent-${solution.accent}`} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
              <div className="v51-solution-visual">
                <Image src={solution.asset} alt={solution.title} fill sizes="(max-width: 900px) 100vw, 45vw" />
              </div>
              <div className="v51-solution-copy">
                <span>{solution.tag}</span>
                <h3>{solution.title}</h3>
                <p>{solution.summary}</p>
                <ul>
                  {solution.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <Link href={solution.href}>Ver solución <ArrowRight size={16} /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessAndCharts() {
  return (
    <section className="v51-section v51-process" id="proceso">
      <div className="v51-container v51-process-grid">
        <motion.div className="v51-process-copy" {...fadeUp}>
          <span>Ruta de implementación</span>
          <h2>Del diagnóstico a la operación, con alcance claro.</h2>
          <p>
            La ruta evita vender tecnología por piezas. Primero se entiende el problema,
            después se define arquitectura, cotización, implementación y soporte.
          </p>

          <div className="v51-flow-list">
            {processFlow.map((item) => (
              <div key={item.step} className="v51-flow-item">
                <b>{item.step}</b>
                <div><strong>{item.title}</strong><p>{item.text}</p></div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="v51-chart-stack" {...fadeUp}>
          <div className="v51-chart-card">
            <div className="v51-chart-head"><span>Implementación</span><b>Ruta activa</b></div>
            <ResponsiveContainer width="100%" height={235}>
              <AreaChart data={flowData} margin={{ top: 14, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="v51Green" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#20b847" stopOpacity={0.44} />
                    <stop offset="95%" stopColor="#20b847" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(12,36,18,.08)" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#55705d' }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid rgba(22,90,38,.12)' }} />
                <Area type="monotone" dataKey="valor" stroke="#16a34a" strokeWidth={3} fill="url(#v51Green)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="v51-chart-card compact">
            <div className="v51-chart-head"><span>Capas</span><b>Arquitectura</b></div>
            <ResponsiveContainer width="100%" height={210}>
              <BarChart data={layerData} margin={{ top: 14, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(12,36,18,.08)" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#55705d' }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid rgba(22,90,38,.12)' }} />
                <Bar dataKey="valor" fill="#7fd321" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function CommercialIntelligence() {
  return (
    <section className="v51-section v51-intelligence">
      <div className="v51-container v51-intelligence-grid">
        <motion.div className="v51-intelligence-panel" {...fadeUp}>
          <span>Seguimiento con contexto</span>
          <h2>Pipeline real para que la tecnología no se quede en “pendiente”.</h2>
          <div className="v51-pipeline">
            {pipeline.map((step, index) => <i key={step} style={{ ['--i' as string]: index }}>{step}</i>)}
          </div>
        </motion.div>

        <motion.div className="v51-score-card" {...fadeUp}>
          <div className="v51-score-ring"><b>80+</b><span>alta prioridad</span></div>
          <div>
            <span>Score comercial</span>
            <h3>Calificación sin inventar métricas.</h3>
            <ul>{scoreCriteria.map((item) => <li key={item.label}><span>{item.label}</span><b>{item.points}</b></li>)}</ul>
          </div>
        </motion.div>

        <motion.div className="v51-sla-card" {...fadeUp}>
          <span>SLA sugerido</span>
          {slaItems.map(([label, text]) => <div key={label}><b>{label}</b><p>{text}</p></div>)}
        </motion.div>
      </div>
    </section>
  )
}

export function PricingConstellation() {
  return (
    <section className="v51-section v51-pricing" id="precios">
      <div className="v51-container">
        <motion.div className="v51-section-head" {...fadeUp}>
          <span>Precios base reales</span>
          <h2>Costos claros para operación, nube, implementación y soporte.</h2>
          <p>
            Los proyectos a medida se cotizan por alcance, pero los servicios base de
            CompuNegocio, CN7, implementación, soporte y desarrollo mantienen referencias públicas.
          </p>
        </motion.div>

        <div className="v51-pricing-grid">
          {pricingFamilies.map((family, index) => (
            <motion.article key={family.title} className="v51-price-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.04 }}>
              <span>{family.eyebrow}</span>
              <h3>{family.title}</h3>
              <strong>{family.price}</strong>
              <small>{family.note}</small>
              <ul>{family.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link href={family.cta}>Cotizar <ArrowRight size={16} /></Link>
            </motion.article>
          ))}
        </div>

        <p className="v51-price-note">Precios sujetos a cambios. No incluyen IVA cuando así aplique. Proyectos especiales requieren diagnóstico y alcance.</p>
      </div>
    </section>
  )
}

export function ScenarioGrid() {
  return (
    <section className="v51-section v51-scenarios">
      <div className="v51-container">
        <motion.div className="v51-section-head split" {...fadeUp}>
          <div>
            <span>Escenarios reales</span>
            <h2>NearTec entra cuando una empresa necesita ordenar tecnología y operación.</h2>
          </div>
          <p>El objetivo no es vender una pieza aislada. Es construir una ruta que pueda crecer.</p>
        </motion.div>
        <div className="v51-scenario-grid">
          {scenarios.map((scenario, index) => (
            <motion.article key={scenario.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.06 }}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <h3>{scenario.title}</h3>
              <p>{scenario.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalTechCTA() {
  return (
    <section className="v51-section v51-final-cta">
      <div className="v51-container v51-final-card">
        <motion.div {...fadeUp}>
          <span>Diagnóstico tecnológico NearTec</span>
          <h2>Primero definimos la ruta. Después cotizamos lo que sí necesitas.</h2>
          <p>
            Cuéntanos si buscas web, app, automatización, IA, CompuNegocio, CN7, nube,
            soporte, infraestructura o una integración a medida.
          </p>
          <div className="v51-actions">
            <Link className="v51-btn primary" href="/landing">Agendar diagnóstico</Link>
            <a className="v51-btn ghost" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp {CONTACT.phoneDisplay}</a>
          </div>
        </motion.div>
        <div className="v51-final-visual">
          <Bot />
          <Zap />
          <ShieldCheck />
          <DatabaseZap />
        </div>
      </div>
    </section>
  )
}
EOF

cat > components/FloatingAssist.tsx <<'EOF'
'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

type Message = { role: 'bot' | 'user'; text: string }

const suggestions = [
  'Necesito una web o app',
  'Quiero automatizar procesos',
  'Necesito CompuNegocio o CN7',
  'Quiero soporte o desarrollo',
]

function answer(text: string) {
  const q = text.toLowerCase()
  if (q.includes('compu') || q.includes('pos') || q.includes('timbre')) return 'Para operación, CompuNegocio cubre ventas, inventario, usuarios, timbres y reportes. Podemos cotizar por estaciones, implementación y timbres.'
  if (q.includes('cn7') || q.includes('nube') || q.includes('respaldo')) return 'Para continuidad, CN7 y respaldo ayudan a no depender de una sola computadora. Podemos revisar si necesitas CN7 con respaldo, hospedado o respaldo automático.'
  if (q.includes('web') || q.includes('app') || q.includes('desarrollo')) return 'Para desarrollo, NearTec puede crear web, apps, módulos e integraciones. Lo correcto es definir objetivo, alcance, usuarios y urgencia antes de cotizar.'
  if (q.includes('automat') || q.includes('crm') || q.includes('ia')) return 'Para automatización, podemos conectar formularios, WhatsApp, CRM, recordatorios, scoring y tareas repetitivas con una ruta de seguimiento clara.'
  return 'Puedo ayudarte a ubicar si necesitas web, app, automatización, IA, CRM, CompuNegocio, CN7, nube, soporte o desarrollo a medida. Cuéntame qué quieres resolver.'
}

export default function FloatingAssist() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Soy Neary AI. Te ayudo a ubicar qué tecnología necesita tu empresa: web, apps, automatización, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.' },
  ])

  const waUrl = useMemo(
    () => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero diagnóstico o cotización para un proyecto tecnológico.')}`,
    []
  )

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return
    setMessages((items) => [...items, { role: 'user', text: clean }, { role: 'bot', text: answer(clean) }])
    setInput('')
    setOpen(true)
  }

  return (
    <div className="v51-assist-dock">
      {open && (
        <section className="v51-assist-panel" aria-label="Neary AI">
          <header>
            <div className="v51-assist-title">
              <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={38} height={38} />
              <div><b>Neary AI</b><span>Asistente tecnológico</span></div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar Neary"><X size={18} /></button>
          </header>

          <div className="v51-assist-messages">
            {messages.map((m, i) => <p key={i} className={m.role}>{m.text}</p>)}
          </div>

          <div className="v51-assist-suggestions">
            {suggestions.map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input) }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Cuéntame qué necesitas..." />
            <button aria-label="Enviar"><Send size={16} /></button>
          </form>
        </section>
      )}

      <div className="v51-floating-actions">
        <a className="v51-fab whatsapp" href={waUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp NearTec">
          <MessageCircle size={24} />
          <span>WhatsApp</span>
        </a>
        <button className="v51-fab neary" onClick={() => setOpen((v) => !v)} aria-label="Abrir Neary AI">
          <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={42} height={42} />
          <span>Neary AI</span>
        </button>
      </div>
    </div>
  )
}
EOF

cat > components/Navbar.tsx <<'EOF'
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CONTACT, navItems } from '@/lib/site-data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="v51-nav">
      <div className="v51-container v51-nav-inner">
        <Link href="/" className="v51-brand" aria-label="NearTec inicio" onClick={() => setOpen(false)}>
          <Image src="/images/neartec-logo-real.png" alt="NearTec" width={190} height={70} priority />
        </Link>

        <nav className="v51-desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="v51-nav-actions">
          <Link className="v51-nav-cta" href="/cotizador">Cotizar</Link>
          <button className="v51-menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú" aria-expanded={open}>
            <i /><i />
          </button>
        </div>
      </div>

      {open && (
        <div className="v51-mobile-menu">
          <div className="v51-mobile-card">
            <div className="v51-mobile-head">
              <b>NearTec</b>
              <button onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="v51-mobile-group">
              <span>Soluciones</span>
              {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            </div>
            <div className="v51-mobile-group actions">
              <span>Acción rápida</span>
              <Link href="/cotizador" onClick={() => setOpen(false)}>Cotizar proyecto</Link>
              <Link href="/landing" onClick={() => setOpen(false)}>Diagnóstico tecnológico</Link>
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} onClick={() => setOpen(false)}>WhatsApp {CONTACT.phoneDisplay}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
EOF

cat > app/page.tsx <<'EOF'
import Link from 'next/link'
import QuoteEngine from '@/components/QuoteEngine'
import {
  CommercialIntelligence,
  FinalTechCTA,
  HeroCommandCenter,
  HeroMetricStrip,
  PricingConstellation,
  ProcessAndCharts,
  ScenarioGrid,
  SolutionShowcase,
  TechLayerGrid,
} from '@/components/V5VisualSystem'
import { CONTACT } from '@/lib/site-data'

export default function HomePage() {
  return (
    <main className="v51-home">
      <section className="v51-hero">
        <div className="v51-hero-grid v51-container">
          <div className="v51-hero-copy">
            <span className="v51-eyebrow">Integrador tecnológico para empresas</span>
            <h1>Tecnología a medida para vender, operar y escalar.</h1>
            <p>
              Desarrollamos sitios web, apps, automatizaciones, IA, CRM, CompuNegocio,
              CN7, nube, soporte e infraestructura para empresas que necesitan crecer
              con control, no con parches digitales.
            </p>
            <div className="v51-actions">
              <Link className="v51-btn primary" href="/cotizador">Cotizar proyecto</Link>
              <Link className="v51-btn ghost" href="/landing">Agendar diagnóstico</Link>
            </div>
            <div className="v51-hero-proof">
              <span>RFC {CONTACT.rfc}</span>
              <span>Soporte remoto</span>
              <span>Precios base reales</span>
            </div>
          </div>

          <HeroCommandCenter />
        </div>
        <div className="v51-container"><HeroMetricStrip /></div>
      </section>

      <TechLayerGrid />
      <SolutionShowcase />
      <ProcessAndCharts />
      <CommercialIntelligence />
      <PricingConstellation />

      <section className="v51-section v51-quote" id="cotizador">
        <div className="v51-container">
          <div className="v51-section-head split">
            <div>
              <span>Cotizador</span>
              <h2>Convierte una necesidad en una propuesta clara.</h2>
            </div>
            <p>
              El cotizador usa precios base reales para CompuNegocio, CN7, implementación,
              soporte, desarrollo y timbres. Los proyectos a medida se validan por diagnóstico.
            </p>
          </div>
          <QuoteEngine />
        </div>
      </section>

      <ScenarioGrid />
      <FinalTechCTA />
    </main>
  )
}
EOF

python3 - <<'PY'
from pathlib import Path
p = Path('app/layout.tsx')
if p.exists():
    s = p.read_text()
    if "./v5.css" not in s and "app/v5.css" not in s:
        # Insert after globals import if present, otherwise near top
        if "import './globals.css'" in s:
            s = s.replace("import './globals.css'", "import './globals.css'\nimport './v5.css'")
        else:
            s = "import './v5.css'\n" + s
    s = s.replace('NearTec | Desarrollo, automatización e infraestructura para empresas', 'NearTec | Tecnología a medida para vender, operar y escalar')
    s = s.replace('NearTec desarrolla e integra sitios web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, respaldo, hosting, VPS, correo, soporte e infraestructura para empresas.', 'NearTec desarrolla sitios web, apps, automatizaciones, IA, CRM, CompuNegocio, CN7, nube, soporte e infraestructura para empresas que necesitan crecer con control.')
    p.write_text(s)
PY

cat > app/v5.css <<'EOF'
:root{
  --v51-ink:#06140c;
  --v51-graphite:#17231b;
  --v51-muted:#5b6b61;
  --v51-soft:#f6faf3;
  --v51-soft2:#edf6e9;
  --v51-line:rgba(34,88,45,.12);
  --v51-green:#16a34a;
  --v51-lime:#a7f83d;
  --v51-cyan:#48d7b2;
  --v51-shadow:0 30px 100px rgba(10,36,18,.12);
  --v51-shadow-soft:0 18px 60px rgba(10,36,18,.08);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:#fbfdf8;color:var(--v51-ink)}

.v51-container{width:min(1180px,calc(100% - 32px));margin-inline:auto}
.v51-home{overflow:hidden;background:linear-gradient(180deg,#fbfdf8 0%,#eef7ea 44%,#fbfdf8 100%)}

.v51-nav{position:sticky;top:0;z-index:80;background:rgba(251,253,248,.84);backdrop-filter:blur(18px);border-bottom:1px solid var(--v51-line)}
.v51-nav-inner{min-height:82px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.v51-brand{display:flex;width:158px;max-width:40vw}.v51-brand img{width:100%;height:auto;object-fit:contain}
.v51-desktop-nav{display:flex;align-items:center;gap:18px}.v51-desktop-nav a{font-size:.9rem;font-weight:850;color:#25362c;text-decoration:none}.v51-desktop-nav a:hover{color:var(--v51-green)}
.v51-nav-actions{display:flex;align-items:center;gap:10px}.v51-nav-cta{min-height:44px;padding:0 18px;border-radius:999px;background:linear-gradient(135deg,var(--v51-green),var(--v51-lime));color:#06140c;text-decoration:none;font-weight:1000;display:inline-flex;align-items:center;box-shadow:0 14px 40px rgba(22,163,74,.18)}
.v51-menu-btn{display:none;width:52px;height:52px;border-radius:999px;border:1px solid var(--v51-line);background:#fff;box-shadow:var(--v51-shadow-soft);align-items:center;justify-content:center;flex-direction:column;gap:7px}.v51-menu-btn i{width:20px;height:2px;background:#06140c;border-radius:20px}
.v51-mobile-menu{position:fixed;inset:0;z-index:90;background:rgba(6,20,12,.46);backdrop-filter:blur(16px);padding:92px 14px 18px}.v51-mobile-card{width:min(100%,520px);margin:auto;border-radius:32px;background:rgba(255,255,255,.97);box-shadow:0 40px 120px rgba(6,20,12,.28);border:1px solid rgba(255,255,255,.8);overflow:hidden}.v51-mobile-head{padding:18px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--v51-line)}.v51-mobile-head b{font-size:1.1rem;font-weight:1000}.v51-mobile-head button{width:42px;height:42px;border:0;border-radius:999px;background:#edf8e7;font-size:1.8rem}.v51-mobile-group{display:grid;gap:6px;padding:14px}.v51-mobile-group span{font-size:.72rem;font-weight:1000;letter-spacing:.14em;text-transform:uppercase;color:var(--v51-green);padding:4px 8px}.v51-mobile-group a{display:flex;align-items:center;justify-content:space-between;min-height:48px;border-radius:18px;padding:0 12px;background:#fff;color:#06140c;text-decoration:none;font-weight:900;border:1px solid rgba(34,88,45,.08)}.v51-mobile-group a:after{content:'→';color:var(--v51-green)}.v51-mobile-group.actions{background:#f2faee}

.v51-hero{position:relative;padding:clamp(34px,6vw,86px) 0 40px;background:radial-gradient(circle at 78% 12%,rgba(167,248,61,.26),transparent 30%),radial-gradient(circle at 8% 18%,rgba(72,215,178,.14),transparent 24%),linear-gradient(180deg,#fbfdf8,#eef7ea)}
.v51-hero:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(22,163,74,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,.05) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(180deg,#000,transparent 88%);pointer-events:none}
.v51-hero-grid{position:relative;display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);align-items:center;gap:clamp(24px,5vw,72px)}
.v51-hero-copy{display:grid;gap:18px}.v51-eyebrow,.v51-section-head span,.v51-process-copy>span,.v51-chart-head span,.v51-intelligence-panel>span,.v51-score-card span,.v51-sla-card>span,.v51-price-card>span,.v51-final-card span{color:var(--v51-green);font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;font-weight:1000}.v51-hero h1{margin:0;max-width:10.4ch;font-size:clamp(4rem,8vw,7.8rem);line-height:.88;letter-spacing:-.085em;font-weight:1000;color:var(--v51-ink);text-wrap:balance}.v51-hero p{max-width:62ch;margin:0;color:#3c4c42;font-size:clamp(1.04rem,1.4vw,1.28rem);line-height:1.62;font-weight:650}.v51-actions{display:flex;flex-wrap:wrap;gap:12px}.v51-btn{min-height:54px;padding:0 22px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-weight:1000;border:1px solid var(--v51-line)}.v51-btn.primary{background:linear-gradient(135deg,var(--v51-green),var(--v51-lime));color:#06140c;box-shadow:0 18px 48px rgba(22,163,74,.2)}.v51-btn.ghost{background:rgba(255,255,255,.72);color:#112018;backdrop-filter:blur(10px)}.v51-hero-proof{display:flex;flex-wrap:wrap;gap:8px}.v51-hero-proof span{padding:8px 11px;border-radius:999px;background:rgba(255,255,255,.76);border:1px solid var(--v51-line);font-size:.82rem;font-weight:850;color:#405648}

.v51-command{position:relative;min-height:640px;border-radius:46px;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,.92),rgba(236,248,230,.72));border:1px solid rgba(46,92,54,.14);box-shadow:var(--v51-shadow);isolation:isolate}.v51-command-bg{position:absolute;inset:0;background:radial-gradient(circle at 70% 40%,rgba(167,248,61,.2),transparent 30%),linear-gradient(135deg,rgba(255,255,255,.7),rgba(255,255,255,.05));z-index:-1}.v51-command-picture{position:absolute;inset:0}.v51-command-picture img{width:100%;height:100%;object-fit:cover;object-position:center}.v51-connector-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.v51-connector-lines path{fill:none;stroke:rgba(22,163,74,.56);stroke-width:2;stroke-dasharray:10 12;animation:v51-dash 18s linear infinite;filter:drop-shadow(0 0 10px rgba(167,248,61,.3))}@keyframes v51-dash{to{stroke-dashoffset:-420}}
.v51-orb{position:absolute;z-index:3;display:inline-flex;align-items:center;gap:8px;padding:10px 13px;border-radius:999px;background:rgba(255,255,255,.88);border:1px solid rgba(46,92,54,.14);box-shadow:0 18px 55px rgba(10,36,18,.1);font-size:.86rem;font-weight:1000;color:#17301f;backdrop-filter:blur(14px)}.v51-orb svg{width:17px;height:17px;color:var(--v51-green)}.orb-a{left:24px;top:24px}.orb-b{right:24px;top:82px}.orb-c{right:24px;bottom:26px}.v51-command-panel{position:absolute;left:24px;right:24px;bottom:24px;z-index:3;padding:18px;border-radius:28px;background:rgba(255,255,255,.86);border:1px solid rgba(46,92,54,.12);box-shadow:0 18px 55px rgba(10,36,18,.1);backdrop-filter:blur(18px);display:grid;gap:5px}.v51-command-panel span{color:var(--v51-green);font-size:.72rem;font-weight:1000;letter-spacing:.14em;text-transform:uppercase}.v51-command-panel b{font-size:1.26rem;letter-spacing:-.04em}.v51-command-panel small{color:var(--v51-muted);font-weight:700}
.v51-metric-strip{position:relative;margin-top:22px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.v51-metric-strip div{padding:18px;border-radius:26px;background:rgba(255,255,255,.76);border:1px solid var(--v51-line);box-shadow:var(--v51-shadow-soft);display:grid;gap:4px}.v51-metric-strip span{color:var(--v51-green);font-size:.74rem;text-transform:uppercase;letter-spacing:.13em;font-weight:1000}.v51-metric-strip b{font-size:1rem;color:#122017}

.v51-section{padding:clamp(64px,8vw,112px) 0}.v51-section-head{display:grid;gap:12px;max-width:820px;margin-bottom:30px}.v51-section-head.split{max-width:none;grid-template-columns:minmax(0,1fr) minmax(280px,.48fr);align-items:end;gap:32px}.v51-section-head h2,.v51-process-copy h2,.v51-final-card h2{margin:0;font-size:clamp(2.7rem,5.5vw,5.3rem);line-height:.92;letter-spacing:-.075em;font-weight:1000;color:var(--v51-ink);text-wrap:balance}.v51-section-head p,.v51-process-copy p,.v51-final-card p{margin:0;color:#506158;line-height:1.62;font-weight:650;font-size:1.03rem}
.v51-layer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.v51-layer-card{position:relative;padding:24px;border-radius:34px;background:linear-gradient(180deg,#fff,#f2faee);border:1px solid var(--v51-line);box-shadow:var(--v51-shadow-soft);overflow:hidden}.v51-layer-card:after{content:'';position:absolute;right:-30px;top:-30px;width:120px;height:120px;border-radius:50%;background:rgba(167,248,61,.16)}.v51-layer-icon{width:54px;height:54px;border-radius:20px;display:grid;place-items:center;background:linear-gradient(135deg,#e6f9df,#fff);border:1px solid var(--v51-line);box-shadow:0 14px 36px rgba(10,36,18,.08);margin-bottom:18px}.v51-icon-svg{width:25px;height:25px;color:var(--v51-green)}.v51-layer-card span{font-size:.74rem;color:var(--v51-green);font-weight:1000;text-transform:uppercase;letter-spacing:.13em}.v51-layer-card h3{font-size:1.55rem;line-height:1;letter-spacing:-.05em;margin:10px 0}.v51-layer-card p{margin:0;color:#53645a;line-height:1.55;font-weight:620}

.v51-solutions{background:linear-gradient(180deg,rgba(255,255,255,.0),rgba(237,246,233,.84),rgba(255,255,255,.0))}.v51-solution-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.v51-solution-card{background:#fff;border:1px solid var(--v51-line);border-radius:40px;box-shadow:var(--v51-shadow-soft);overflow:hidden}.v51-solution-visual{position:relative;min-height:290px;background:#f3f9ef}.v51-solution-visual img{object-fit:cover;object-position:center}.v51-solution-copy{padding:26px;display:grid;gap:13px}.v51-solution-copy span{font-size:.74rem;color:var(--v51-green);font-weight:1000;letter-spacing:.13em;text-transform:uppercase}.v51-solution-copy h3{margin:0;font-size:2.1rem;line-height:.96;letter-spacing:-.065em}.v51-solution-copy p{margin:0;color:#526158;line-height:1.55;font-weight:630}.v51-solution-copy ul{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0;list-style:none}.v51-solution-copy li{padding:7px 10px;border-radius:999px;background:#edf8e7;color:#18331f;font-size:.82rem;font-weight:900}.v51-solution-copy a,.v51-price-card a{display:inline-flex;align-items:center;gap:8px;color:#0c7e31;text-decoration:none;font-weight:1000}

.v51-process-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:32px;align-items:start}.v51-process-copy{display:grid;gap:16px}.v51-flow-list{display:grid;gap:12px;margin-top:10px}.v51-flow-item{display:grid;grid-template-columns:54px 1fr;gap:12px;padding:14px;border-radius:24px;background:#fff;border:1px solid var(--v51-line);box-shadow:0 10px 30px rgba(10,36,18,.05)}.v51-flow-item b{width:46px;height:46px;border-radius:18px;background:#edf8e7;display:grid;place-items:center;color:var(--v51-green);font-weight:1000}.v51-flow-item strong{display:block;font-size:1rem}.v51-flow-item p{font-size:.94rem;line-height:1.46}.v51-chart-stack{display:grid;gap:16px}.v51-chart-card{padding:20px;border-radius:34px;background:rgba(255,255,255,.86);border:1px solid var(--v51-line);box-shadow:var(--v51-shadow-soft);backdrop-filter:blur(12px)}.v51-chart-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.v51-chart-head b{font-size:1.2rem}

.v51-intelligence{background:#f6faf3}.v51-intelligence-grid{display:grid;grid-template-columns:1.1fr .9fr .78fr;gap:18px}.v51-intelligence-panel,.v51-score-card,.v51-sla-card{border-radius:36px;background:#fff;border:1px solid var(--v51-line);box-shadow:var(--v51-shadow-soft);padding:24px}.v51-intelligence-panel h2{font-size:2.35rem;line-height:.95;letter-spacing:-.06em;margin:10px 0 18px}.v51-pipeline{display:grid;gap:9px}.v51-pipeline i{font-style:normal;padding:12px 14px;border-radius:18px;background:linear-gradient(90deg,#edf8e7,#fff);border:1px solid rgba(34,88,45,.08);font-weight:900;color:#16311f;animation:v51-pipe 4s ease-in-out infinite;animation-delay:calc(var(--i) * .12s)}@keyframes v51-pipe{50%{transform:translateX(5px);box-shadow:0 10px 28px rgba(22,163,74,.1)}}.v51-score-card{display:grid;grid-template-columns:150px 1fr;gap:20px;align-items:center}.v51-score-ring{width:142px;height:142px;border-radius:50%;display:grid;place-items:center;text-align:center;background:conic-gradient(var(--v51-green) 0 82%,#e8f3e2 82% 100%);position:relative;box-shadow:inset 0 0 0 12px rgba(255,255,255,.75)}.v51-score-ring:after{content:'';position:absolute;inset:17px;border-radius:50%;background:#fff}.v51-score-ring b,.v51-score-ring span{position:relative;z-index:2}.v51-score-ring b{font-size:2.1rem}.v51-score-ring span{font-size:.72rem;font-weight:1000;color:var(--v51-green);text-transform:uppercase}.v51-score-card h3{margin:5px 0 12px;font-size:1.8rem;line-height:1;letter-spacing:-.05em}.v51-score-card ul{margin:0;padding:0;list-style:none;display:grid;gap:7px}.v51-score-card li{display:flex;justify-content:space-between;gap:12px;font-size:.86rem;color:#4b5f54}.v51-score-card li b{color:var(--v51-green)}.v51-sla-card{display:grid;gap:12px}.v51-sla-card div{padding:12px;border-radius:18px;background:#f5fbf1}.v51-sla-card b{display:block;font-size:.94rem}.v51-sla-card p{margin:3px 0 0;color:#516259;font-size:.86rem;line-height:1.35}

.v51-pricing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.v51-price-card{padding:24px;border-radius:34px;background:#fff;border:1px solid var(--v51-line);box-shadow:var(--v51-shadow-soft);display:grid;gap:11px}.v51-price-card h3{margin:0;font-size:1.45rem;line-height:1;letter-spacing:-.05em}.v51-price-card strong{font-size:2.05rem;letter-spacing:-.06em}.v51-price-card small{color:var(--v51-muted);font-weight:800}.v51-price-card ul{margin:5px 0 0;padding:0;list-style:none;display:grid;gap:8px}.v51-price-card li{font-size:.9rem;color:#516259}.v51-price-card li:before{content:'•';color:var(--v51-green);font-weight:1000;margin-right:6px}.v51-price-note{margin:18px 0 0;color:#65756b;font-size:.9rem}.v51-quote{background:#f6faf3}.v51-quote :is(.quote-engine,.quote-card,.quote-shell){position:relative;z-index:1}.v51-scenario-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.v51-scenario-grid article{padding:24px;border-radius:34px;background:#fff;border:1px solid var(--v51-line);box-shadow:var(--v51-shadow-soft)}.v51-scenario-grid b{color:var(--v51-green);font-size:.8rem}.v51-scenario-grid h3{font-size:1.55rem;line-height:1;letter-spacing:-.05em}.v51-scenario-grid p{color:#53645a;line-height:1.55}
.v51-final-cta{padding-bottom:140px}.v51-final-card{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:20px;align-items:center;border-radius:44px;padding:clamp(28px,5vw,54px);background:radial-gradient(circle at 78% 42%,rgba(167,248,61,.24),transparent 32%),linear-gradient(135deg,#102015,#1d3524);color:#fff;box-shadow:0 30px 120px rgba(6,20,12,.24);overflow:hidden}.v51-final-card h2{color:#fff}.v51-final-card p{color:rgba(255,255,255,.76)}.v51-final-visual{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.v51-final-visual svg{width:100%;height:118px;padding:34px;border-radius:28px;background:rgba(255,255,255,.1);color:var(--v51-lime);border:1px solid rgba(255,255,255,.14)}

.v51-assist-dock{position:fixed;right:18px;bottom:18px;z-index:120;display:grid;gap:12px;justify-items:end}.v51-floating-actions{display:flex;gap:10px;align-items:center}.v51-fab{position:relative;min-width:58px;height:58px;border-radius:999px;border:1px solid rgba(255,255,255,.78);background:#fff;box-shadow:0 18px 58px rgba(6,20,12,.18);display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:0 14px;text-decoration:none;color:#06140c;font-weight:1000;cursor:pointer}.v51-fab:before{content:'';position:absolute;inset:-8px;border-radius:inherit;border:1px solid rgba(22,163,74,.28);animation:v51-pulse 2.8s ease-out infinite}.v51-fab.whatsapp{background:linear-gradient(135deg,#16a34a,#a7f83d)}.v51-fab.neary img{width:40px;height:40px;object-fit:contain}.v51-fab span{font-size:.85rem}@keyframes v51-pulse{0%{opacity:.9;transform:scale(.86)}70%{opacity:0;transform:scale(1.28)}100%{opacity:0;transform:scale(1.28)}}.v51-assist-panel{width:min(380px,calc(100vw - 28px));border-radius:30px;background:rgba(255,255,255,.96);border:1px solid var(--v51-line);box-shadow:0 30px 110px rgba(6,20,12,.26);overflow:hidden;backdrop-filter:blur(18px)}.v51-assist-panel header{display:flex;justify-content:space-between;align-items:center;padding:16px;border-bottom:1px solid var(--v51-line)}.v51-assist-title{display:flex;align-items:center;gap:10px}.v51-assist-title b{display:block}.v51-assist-title span{display:block;color:var(--v51-green);font-size:.78rem;font-weight:900}.v51-assist-panel header button{border:0;background:#edf8e7;width:36px;height:36px;border-radius:999px}.v51-assist-messages{max-height:260px;overflow:auto;padding:16px;display:grid;gap:10px}.v51-assist-messages p{margin:0;padding:11px 13px;border-radius:18px;font-size:.9rem;line-height:1.42}.v51-assist-messages .bot{background:#edf8e7;color:#17301f}.v51-assist-messages .user{background:#102015;color:#fff;margin-left:30px}.v51-assist-suggestions{display:flex;gap:8px;overflow:auto;padding:0 16px 12px}.v51-assist-suggestions button{white-space:nowrap;border:1px solid var(--v51-line);background:#fff;border-radius:999px;padding:8px 10px;font-weight:850}.v51-assist-panel form{display:grid;grid-template-columns:1fr 44px;gap:8px;padding:14px;background:#f6faf3}.v51-assist-panel input{border:1px solid var(--v51-line);border-radius:999px;padding:0 14px;font-weight:700}.v51-assist-panel form button{border:0;border-radius:999px;background:var(--v51-green);color:#fff}

@media(max-width:1080px){.v51-hero-grid,.v51-process-grid,.v51-intelligence-grid{grid-template-columns:1fr}.v51-pricing-grid{grid-template-columns:repeat(2,1fr)}.v51-layer-grid{grid-template-columns:repeat(2,1fr)}.v51-final-card{grid-template-columns:1fr}.v51-command{min-height:560px}}
@media(max-width:820px){.v51-desktop-nav{display:none}.v51-menu-btn{display:flex}.v51-nav-inner{min-height:76px}.v51-brand{width:140px}.v51-section-head.split{grid-template-columns:1fr}.v51-solution-grid,.v51-scenario-grid{grid-template-columns:1fr}.v51-score-card{grid-template-columns:1fr}.v51-score-ring{margin:auto}.v51-metric-strip{grid-template-columns:repeat(2,1fr)}}
@media(max-width:620px){.v51-container{width:min(100% - 24px,1180px)}.v51-hero{padding-top:28px}.v51-hero h1{max-width:100%;font-size:clamp(3.35rem,15vw,5.05rem);line-height:.9;letter-spacing:-.082em}.v51-hero p{font-size:1.02rem;line-height:1.54}.v51-actions{display:grid}.v51-btn{width:100%}.v51-command{min-height:430px;border-radius:32px}.v51-command-picture img{object-position:center}.v51-orb{font-size:.74rem;padding:8px 10px}.orb-a{left:12px;top:12px}.orb-b{right:12px;top:58px}.orb-c{right:12px;bottom:12px}.v51-command-panel{left:12px;right:12px;bottom:58px;border-radius:22px;padding:14px}.v51-command-panel b{font-size:1.02rem}.v51-metric-strip,.v51-layer-grid,.v51-pricing-grid{grid-template-columns:1fr}.v51-section{padding:62px 0}.v51-section-head h2,.v51-process-copy h2,.v51-final-card h2{font-size:clamp(2.45rem,11vw,3.65rem);line-height:.95}.v51-solution-visual{min-height:260px}.v51-solution-copy{padding:20px}.v51-solution-copy h3{font-size:1.72rem}.v51-chart-card{padding:14px;border-radius:26px}.v51-final-card{border-radius:32px}.v51-final-visual svg{height:92px;padding:25px}.v51-assist-dock{right:12px;bottom:12px}.v51-floating-actions{flex-direction:column}.v51-fab{width:58px;padding:0}.v51-fab span{display:none}.v51-assist-panel{margin-bottom:8px}.v51-mobile-menu{padding-top:86px}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
EOF

cat > scripts/preflight.js <<'EOF'
const fs = require('node:fs')
const path = require('node:path')

const requiredFiles = [
  'package.json', 'next.config.js', 'app/layout.tsx', 'app/page.tsx', 'app/api/lead/route.ts', 'app/v5.css',
  'components/V5VisualSystem.tsx', 'components/FloatingAssist.tsx', 'components/Navbar.tsx', 'components/Footer.tsx',
  'components/ServicePage.tsx', 'components/QuoteEngine.tsx', 'lib/site-data.ts', 'lib/neartec-data.ts',
  'public/images/visuals/hero-home-desktop.webp', 'public/images/visuals/hero-home-mobile.webp',
  'public/images/visuals/visual-web.webp', 'public/images/visuals/visual-crm.webp',
  'public/images/visuals/visual-compunegocio.webp', 'public/images/visuals/visual-cn7.webp',
  'public/images/visuals/visual-cotizador.webp', 'public/images/brand/neary-symbol.webp',
]

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)))
if (missing.length) {
  console.error('Faltan archivos requeridos para V5.1:')
  for (const file of missing) console.error(`- ${file}`)
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
if (!pkg.name || !pkg.name.includes('v51')) {
  console.error(`Package no está actualizado a V5.1. Actual: ${pkg.name}`)
  process.exit(1)
}

for (const dep of ['framer-motion', 'recharts', 'lucide-react']) {
  if (!pkg.dependencies?.[dep]) {
    console.error(`Falta dependencia ${dep}`)
    process.exit(1)
  }
}

const layout = fs.readFileSync('app/layout.tsx', 'utf8')
if (!layout.includes('v5.css')) {
  console.error('app/layout.tsx no importa app/v5.css')
  process.exit(1)
}

const api = fs.readFileSync('app/api/lead/route.ts', 'utf8')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) {
  console.error('API /api/lead no contiene NEARTEC_LEAD_WEBHOOK_URL')
  process.exit(1)
}

console.log('Preflight OK: NearTec V5.1 Home Premium System listo para Vercel.')
EOF

cat > scripts/smoke-test.mjs <<'EOF'
import fs from 'node:fs'
const read = (file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''

const files = [
  'app/page.tsx','app/v5.css','components/V5VisualSystem.tsx','components/FloatingAssist.tsx','components/Navbar.tsx','lib/site-data.ts','lib/neartec-data.ts'
]
for (const file of files) if (!fs.existsSync(file)) throw new Error(`Falta archivo requerido: ${file}`)

const code = files.map(read).join('\n')
const requiredTerms = [
  'Tecnología a medida para vender, operar y escalar', 'CompuNegocio', 'CN7', 'CRM', 'automatización', 'IA', 'nube', 'soporte',
  'cotizador', '664 404 6194', 'meta@itimbre.com', 'NEA040929DKA', 'HeroCommandCenter', 'PricingConstellation', 'Neary AI'
]
for (const term of requiredTerms) {
  if (!code.toLowerCase().includes(term.toLowerCase())) throw new Error(`No se encontró término clave V5.1: ${term}`)
}

for (const asset of [
  'public/images/visuals/hero-home-desktop.webp', 'public/images/visuals/hero-home-mobile.webp', 'public/images/visuals/visual-web.webp',
  'public/images/visuals/visual-crm.webp', 'public/images/visuals/visual-compunegocio.webp', 'public/images/visuals/visual-cn7.webp',
  'public/images/brand/neary-symbol.webp'
]) {
  if (!fs.existsSync(asset)) throw new Error(`Falta asset V5.1: ${asset}`)
}

const visual = read('components/V5VisualSystem.tsx')
for (const term of ['motion', 'ResponsiveContainer', 'AreaChart', 'BarChart']) {
  if (!visual.includes(term)) throw new Error(`V5VisualSystem no contiene ${term}`)
}

const assist = read('components/FloatingAssist.tsx')
for (const term of ['neary-symbol.webp', 'WhatsApp', 'v51-fab', 'v51-assist-panel']) {
  if (!assist.includes(term)) throw new Error(`FloatingAssist no contiene ${term}`)
}

for (const forbidden of ['664 630 0473','664-630-04-73','526646300473','info@neartec.com','info@itimbre.com','Diseño premium, información real','El sitio debe vender visualmente','Panel demostrativo','Stack NearTec','Webhook preparado']) {
  if (code.includes(forbidden)) throw new Error(`Copy/contacto viejo o interno detectado: ${forbidden}`)
}

const api = read('app/api/lead/route.ts')
if (!api.includes('NEARTEC_LEAD_WEBHOOK_URL')) throw new Error('API no contiene NEARTEC_LEAD_WEBHOOK_URL')

console.log('Smoke test OK: NearTec V5.1 Home Premium validado con narrativa, assets, motion, charts, Neary/WhatsApp y contacto oficial.')
EOF

echo "== Validaciones V5.1 =="
npm run type-check
npm run predeploy:check
npm run smoke

git status --short

git add app components lib scripts package.json package-lock.json public/images
# No versionar scripts temporales descargados.
git reset apply_neartec_v5_master.sh apply_neartec_v501_hotfix.sh apply_neartec_v502_typefix.sh apply_neartec_v51_home_premium.sh 2>/dev/null || true

git commit -m "Upgrade NearTec home to V5.1 premium technology system" || echo "Sin cambios para commit."
git push origin main

echo "Backup creado en: $BACKUP_BRANCH"
echo "V5.1 OK: validaciones locales completadas. Deploy seguro recomendado:"
echo "if vercel --prod --logs; then export PROJECT_URL='https://neartecmx.vercel.app'; bash scripts/vercel-prod-test.sh; echo \$?; else echo 'DEPLOY FALLÓ: no ejecuto prod-test porque probaría la producción anterior.'; exit 1; fi"
