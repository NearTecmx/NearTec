tsx
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type VisualShellProps = {
  kicker: string
  title: string
  children?: ReactNode
  className?: string
}

const iconBase = '/images/neartec'

export const serviceIcons = {
  web: `${iconBase}/icon-web-design.webp`,
  crm: `${iconBase}/icon-crm-automation.webp`,
  pos: `${iconBase}/icon-pos-compunegocio.webp`,
  cn7: `${iconBase}/icon-cn7-cloud.webp`,
  hosting: `${iconBase}/icon-hosting-vps.webp`,
  correo: `${iconBase}/icon-correo-corporativo.webp`,
  emailing: `${iconBase}/icon-emailing.webp`,
  soporte: `${iconBase}/icon-soporte-remoto.webp`,
}

function VisualShell({ kicker, title, children, className = '' }: VisualShellProps) {
  return (
    <div className={`vfx-card ${className}`}>
      <div className="vfx-card__shine" />
      <div className="vfx-card__scan" />
      <div className="vfx-head">
        <span>{kicker}</span>
        <b>{title}</b>
      </div>
      {children}
    </div>
  )
}

function MiniLine() {
  return (
    <svg className="mini-line" viewBox="0 0 320 88" aria-hidden="true">
      <defs>
        <linearGradient id="nearTecLine" x1="0" x2="1">
          <stop offset="0" stopColor="#07110b" />
          <stop offset="0.44" stopColor="#1f6418" />
          <stop offset="1" stopColor="#9be238" />
        </linearGradient>
      </defs>
      <path
        d="M10 68 C38 60 44 42 70 47 C96 52 101 28 130 34 C158 39 168 18 198 22 C228 26 238 12 272 14 C292 15 304 10 314 8"
        fill="none"
        stroke="rgba(7,17,11,.14)"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        className="mini-line__path"
        d="M10 68 C38 60 44 42 70 47 C96 52 101 28 130 34 C158 39 168 18 198 22 C228 26 238 12 272 14 C292 15 304 10 314 8"
        fill="none"
        stroke="url(#nearTecLine)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BarSet() {
  return (
    <div className="bar-set" aria-hidden="true">
      {[44, 58, 51, 74, 66, 92, 82, 96].map((height, index) => (
        <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }} />
      ))}
    </div>
  )
}

function MexicoMap() {
  return (
    <svg className="mexico-map" viewBox="0 0 420 260" role="img" aria-label="Mapa visual de cobertura NearTec">
      <defs>
        <linearGradient id="mapFill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f9fff4" />
          <stop offset="1" stopColor="#d9e9d0" />
        </linearGradient>
        <linearGradient id="mapLine" x1="0" x2="1">
          <stop offset="0" stopColor="#07110b" />
          <stop offset="1" stopColor="#8ad12c" />
        </linearGradient>
      </defs>
      <path
        d="M34 82 76 58l44 10 36 28 46 6 28 28 42-6 40 22 34 8 30 34-22 22-54-6-48 24-58-6-52 26-60-28-38-46-52-20Z"
        fill="#dfe8d5"
      />
      <path
        d="M55 88 93 76l36 13 31 28 48 8 22 25 39-8 39 20 31 10 20 18-14 12-47-6-45 20-58-3-44 21-46-22-33-42-42-18Z"
        fill="url(#mapFill)"
      />
      <path
        d="M72 105 114 96 159 122 205 134 250 150 305 166 360 196"
        fill="none"
        stroke="url(#mapLine)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [90, 90],
        [144, 118],
        [206, 136],
        [270, 150],
        [326, 178],
        [222, 203],
      ].map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="18" fill="#82c91e" opacity=".13" />
          <circle cx={cx} cy={cy} r="6" fill="#367d16" />
          <circle
            className="map-pulse"
            cx={cx}
            cy={cy}
            r="24"
            fill="none"
            stroke="#77bd13"
            strokeWidth="1.7"
            opacity=".38"
            style={{ animationDelay: `${index * 0.18}s` }}
          />
        </g>
      ))}
    </svg>
  )
}

export function HeroStackBoard() {
  return (
    <div className="hero-board elite-hero-board" aria-label="Panel tecnológico NearTec">
      <div className="hero-board__image" />
      <div className="hero-board__mesh" />

      <div className="hero-product-shot" aria-hidden="true">
        <Image
          src="/images/neartec/neartec-hero-command.svg"
          alt=""
          width={1200}
          height={780}
          priority
          sizes="(max-width: 720px) 96vw, 50vw"
        />
      </div>

      <article className="dashboard-main">
        <div className="dash-head">
          <div>
            <span>Command center</span>
            <b>Operación conectada</b>
          </div>
          <div className="dash-tabs">
            <span>Leads</span>
            <span>Ventas</span>
            <span>Nube</span>
          </div>
        </div>

        <strong>
          Stack NearTec <small>en línea</small>
        </strong>
        <MiniLine />

        <div className="dash-grid">
          <div>
            <span>Servicios activos</span>
            <div className="donut" />
          </div>
          <div>
            <span>Cobertura operativa</span>
            <MexicoMap />
          </div>
        </div>
      </article>

      <div className="hero-chip-cloud">
        {['Web', 'CRM', 'POS', 'CN7', 'Hosting', 'Correo'].map((chip) => (
          <span key={chip}>{chip}</span>
        ))}
      </div>

      <article className="metric-card card-a">
        <span>Captación</span>
        <b>Web</b>
        <em>Landing + CTA</em>
      </article>
      <article className="metric-card card-b">
        <span>Seguimiento</span>
        <b>CRM</b>
        <em>Leads ordenados</em>
      </article>
      <article className="metric-card card-c">
        <span>Operación</span>
        <b>POS</b>
        <em>Ventas e inventario</em>
      </article>
      <article className="metric-card card-d">
        <span>Continuidad</span>
        <b>CN7</b>
        <em>Nube + respaldo</em>
      </article>
    </div>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell kicker="Arquitectura" title="Stack conectado" className="platform-board">
      <p className="platform-copy">
        Presencia digital, seguimiento comercial, punto de venta, infraestructura, correo y soporte trabajando como un solo sistema.
      </p>
      <div className="platform-stage">
        <div className="platform-ring platform-ring--one" />
        <div className="platform-ring platform-ring--two" />
        <div className="core-orb">
          <span>NearTec</span>
          <b>Technology near you</b>
        </div>
        {['Web', 'CRM', 'POS', 'CN7', 'Hosting', 'Correo'].map((item, index) => (
          <div key={item} className={`system-node node-${index + 1}`}>
            {item}
          </div>
        ))}
      </div>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  const flows = [
    ['Contacto', 'Web / WhatsApp / formulario'],
    ['Diagnóstico', 'Necesidad, alcance y prioridad'],
    ['Implementación', 'Web, CRM, POS, nube o soporte'],
    ['Continuidad', 'Capacitación, respaldo y seguimiento'],
  ]

  return (
    <VisualShell kicker="Ruta comercial" title="De contacto a solución" className="flow-cinema">
      <div className="flow-steps">
        {flows.map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <b>{title}</b>
            <small>{copy}</small>
          </article>
        ))}
      </div>
      <div className="route-line" />
    </VisualShell>
  )
}

export function AutomationSignalBoard() {
  const rows = [
    ['Web', 'Activo', 'Captación', 'Lead'],
    ['CRM', 'Activo', 'Seguimiento', 'Orden'],
    ['POS', 'Activo', 'Ventas e inventario', 'Control'],
    ['CN7', 'Activo', 'Servidor / respaldo', 'Continuidad'],
    ['Emailing', 'Activo', 'Campañas', 'Reactivación'],
  ]

  return (
    <VisualShell kicker="Módulos" title="Automatización visible" className="signal-board">
      <div className="animated-table tech-module-stack" role="table" aria-label="Módulos NearTec">
        <div className="animated-table__head" role="row">
          <span>Módulo</span>
          <span>Estado</span>
          <span>Función</span>
          <span>Resultado</span>
        </div>
        {rows.map(([module, status, functionText, result], index) => (
          <div className="animated-table__row" role="row" key={module} style={{ animationDelay: `${index * 0.1}s` }}>
            <b>{module}</b>
            <em>{status}</em>
            <i aria-label={functionText}>
              <span style={{ width: `${74 + index * 4}%` }} />
            </i>
            <strong>{result}</strong>
          </div>
        ))}
      </div>
      <div className="signal-summary">
        <div>
          <span>Meta</span>
          <b>Más SQLs</b>
        </div>
        <div>
          <span>Respuesta</span>
          <b>Menos fricción</b>
        </div>
        <div>
          <span>Ruta</span>
          <b>Medible</b>
        </div>
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  return (
    <VisualShell kicker="Precios base" title="Rangos documentados" className="priced-board">
      <div className="price-pulse-grid">
        {[
          ['CompuNegocio', '$350–$450', 'MXN / mes por estación'],
          ['Implementación', '$1,500', 'MXN base'],
          ['Soporte', '$499', 'MXN / hora'],
          ['CN7', '$99', 'USD / mes desde'],
        ].map(([title, price, caption], index) => (
          <article key={title} style={{ animationDelay: `${index * 0.12}s` }}>
            <span>{title}</span>
            <b>{price}</b>
            <small>{caption}</small>
            <BarSet />
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function ResourcePulsePanel() {
  return (
    <VisualShell kicker="Diagnóstico" title="Dónde se fuga la venta" className="resource-pulse">
      <div className="pulse-grid">
        {[
          ['Sitio web', 'No convierte contactos'],
          ['CRM', 'Los leads se enfrían'],
          ['Infraestructura', 'Correo, hosting o respaldos débiles'],
          ['POS', 'Inventario y ventas sin control'],
        ].map(([title, copy], index) => (
          <article key={title} style={{ animationDelay: `${index * 0.15}s` }}>
            <span />
            <b>{title}</b>
            <small>{copy}</small>
          </article>
        ))}
      </div>
      <div className="pulse-ring" />
    </VisualShell>
  )
}

export function ServiceVisualCard({
  title,
  copy,
  href,
  image,
  label,
}: {
  title: string
  copy: string
  href: string
  image: string
  label: string
}) {
  return (
    <Link href={href} className="service-visual-card">
      <div className="service-visual-card__image">
        <Image src={image} alt="" width={760} height={760} loading="lazy" sizes="(max-width: 720px) 92vw, 28vw" />
      </div>
      <div className="service-visual-card__body">
        <span>{label}</span>
        <h3>{title}</h3>
        <p>{copy}</p>
        <b>Saber más →</b>
      </div>
    </Link>
  )
}

export function AutomationRouteBoard() {
  return <AutomationSignalBoard />
}

export function TechCommandCenter() {
  return <HeroStackBoard />
}

export function WebConversionBoard() {
  return (
    <VisualShell kicker="Web" title="Presencia que convierte" className="browser-hero">
      <div className="asset-visual asset-visual--web">
        <Image src={serviceIcons.web} alt="" width={760} height={760} loading="lazy" sizes="(max-width: 720px) 92vw, 38vw" />
      </div>
      <div className="browser-mockup">
        <div className="browser-top">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-row featured" />
        <div className="browser-row short" />
        <div className="browser-row" />
        <div className="browser-row short" />
      </div>
    </VisualShell>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <VisualShell kicker="Emailing" title="Comunicación medible" className="emailing-board">
      <div className="asset-visual asset-visual--emailing">
        <Image src={serviceIcons.emailing} alt="" width={760} height={760} loading="lazy" sizes="(max-width: 720px) 92vw, 38vw" />
      </div>
      <MiniLine />
      <div className="signal-summary">
        <div>
          <span>Campañas</span>
          <b>Segmentadas</b>
        </div>
        <div>
          <span>Envíos</span>
          <b>Medibles</b>
        </div>
        <div>
          <span>Ventas</span>
          <b>Seguimiento</b>
        </div>
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell kicker="Infraestructura" title="Nube y continuidad" className="infra-map">
      <div className="asset-visual asset-visual--infra">
        <Image src={serviceIcons.hosting} alt="" width={760} height={760} loading="lazy" sizes="(max-width: 720px) 92vw, 38vw" />
      </div>
      <div className="signal-summary">
        <div>
          <span>Hosting</span>
          <b>Estable</b>
        </div>
        <div>
          <span>VPS / FTP</span>
          <b>Escalable</b>
        </div>
        <div>
          <span>Soporte</span>
          <b>Remoto</b>
        </div>
      </div>
    </VisualShell>
  )
}
