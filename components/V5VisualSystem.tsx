'use client'

import type { CSSProperties, ReactNode } from 'react'
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

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
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
          <div className="v5-score-ring" style={{ '--score': '85%' } as CSSProperties}>
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
