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
  transition: { duration: 0.72 },
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
