import Image from 'next/image'

export function HeroStackBoard() {
  return (
    <div className="nt-hero-visual">
      <div className="nt-hero-visual__media">
        <Image
          src="/images/neartec-hero.jpg"
          alt="NearTec plataforma"
          fill
          priority
          className="object-cover"
        />
        <div className="nt-hero-visual__overlay" />
      </div>

      <div className="nt-hero-visual__hud">
        <span className="nt-hud">Sitio</span>
        <span className="nt-hud">CRM</span>
        <span className="nt-hud">Automatización</span>
        <span className="nt-hud">CompuNegocio</span>
        <span className="nt-hud">Cloud</span>
        <span className="nt-hud">Fiscal</span>
      </div>
    </div>
  )
}

export function LiveMetricBars() {
  return (
    <div className="nt-live-metrics">
      <div className="nt-live-metrics__head">
        <span>Visibilidad operativa</span>
        <span>NearTec</span>
      </div>

      <div className="nt-live-metrics__grid">
        <div>
          <small>Captación</small>
          <strong>+24%</strong>
        </div>
        <div>
          <small>Seguimiento</small>
          <strong>356</strong>
        </div>
        <div>
          <small>Conversión</small>
          <strong>14.6%</strong>
        </div>
        <div>
          <small>Operación</small>
          <strong>CN7</strong>
        </div>
      </div>

      <div className="nt-live-metrics__bars">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export function NearTecFlowMockup() {
  return (
    <div className="nt-flow-mockup">
      <div className="nt-flow-mockup__line" />

      <div className="nt-flow-mockup__node">
        <strong>Sitio & Landing</strong>
        <span>Captación clara</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>CRM</strong>
        <span>Seguimiento centralizado</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>Automatización</strong>
        <span>Secuencias y scoring</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>CompuNegocio</strong>
        <span>Control operativo</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>Infraestructura</strong>
        <span>Cloud, correo y continuidad</span>
      </div>
    </div>
  )
}

export function ResourcePulsePanel() {
  return (
    <div className="nt-resource-pulse">
      <div className="nt-resource-pulse__header">
        <span>Insights</span>
        <span>NearTec</span>
      </div>

      <div className="nt-resource-pulse__cards">
        <div>
          <small>Guía</small>
          <strong>Automatización comercial</strong>
        </div>
        <div>
          <small>Checklist</small>
          <strong>Infraestructura PyME</strong>
        </div>
        <div>
          <small>Comparativa</small>
          <strong>Antes vs stack integrado</strong>
        </div>
      </div>

      <div className="nt-resource-pulse__chart">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}