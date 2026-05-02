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
