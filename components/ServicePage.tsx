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
