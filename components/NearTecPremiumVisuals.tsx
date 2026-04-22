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
        <span>Actualizado</span>
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
          <small>Control</small>
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
        <strong>Sitio</strong>
        <span>Captación clara</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>CRM</strong>
        <span>Seguimiento</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>Automatización</strong>
        <span>Secuencias</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>CompuNegocio</strong>
        <span>Operación</span>
      </div>

      <div className="nt-flow-mockup__node">
        <strong>Fiscal</strong>
        <span>Conexión</span>
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

export function InfrastructurePulseBoard() {
  return (
    <div className="nt-visual-shell nt-visual-shell--dark">
      <div className="nt-visual-shell__bg">
        <Image
          src="/images/neartec-tech-bg.png"
          alt="Infraestructura NearTec"
          fill
          className="object-cover opacity-35"
        />
      </div>

      <div className="nt-visual-shell__content">
        <div className="nt-mini-kpis">
          <div>
            <small>Hosting</small>
            <strong>Activo</strong>
          </div>
          <div>
            <small>Correo</small>
            <strong>Sincronizado</strong>
          </div>
          <div>
            <small>Backups</small>
            <strong>Automáticos</strong>
          </div>
        </div>

        <div className="nt-server-grid">
          <div className="nt-server-grid__col">
            <span className="nt-server-node nt-server-node--green" />
            <span className="nt-server-node" />
            <span className="nt-server-node" />
            <span className="nt-server-node nt-server-node--green" />
          </div>

          <div className="nt-server-grid__chart">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="nt-visual-tags">
          <span>Hosting</span>
          <span>VPS</span>
          <span>Correo</span>
          <span>FTP</span>
          <span>Backups</span>
        </div>
      </div>
    </div>
  )
}

export function WebConversionBoard() {
  return (
    <div className="nt-visual-shell">
      <div className="nt-visual-shell__content">
        <div className="nt-browser-card">
          <div className="nt-browser-card__bar">
            <span />
            <span />
            <span />
          </div>

          <div className="nt-browser-card__hero">
            <div className="nt-browser-card__copy">
              <small>Landing / Ecommerce</small>
              <strong>Explica, convierte y acompaña la compra</strong>
            </div>

            <div className="nt-browser-card__chart">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="nt-browser-card__grid">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <div className="nt-visual-shell">
      <div className="nt-visual-shell__content">
        <div className="nt-email-board">
          <div className="nt-email-board__header">
            <span>Campañas</span>
            <span>Secuencias</span>
          </div>

          <div className="nt-email-board__stats">
            <div>
              <small>Apertura</small>
              <strong>42%</strong>
            </div>
            <div>
              <small>CTR</small>
              <strong>11%</strong>
            </div>
            <div>
              <small>Respuesta</small>
              <strong>8%</strong>
            </div>
          </div>

          <div className="nt-email-board__timeline">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="nt-visual-tags">
            <span>Segmentación</span>
            <span>Secuencias</span>
            <span>A/B</span>
            <span>Remarketing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlatformDeepBoard() {
  return (
    <div className="nt-visual-shell nt-visual-shell--deep">
      <div className="nt-platform-deep">
        <div className="nt-platform-deep__center">NearTec</div>

        <div className="nt