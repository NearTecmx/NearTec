import type { ReactNode } from 'react'

function PanelShell({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`nt-visual ${dark ? 'nt-visual--dark' : ''}`}>
      <div className="nt-visual__noise" />
      <div className="nt-visual__content">{children}</div>
    </div>
  )
}

function Dot({ className = '' }: { className?: string }) {
  return <span className={`nt-dot ${className}`} />
}

function MiniBars({ bars }: { bars: number[] }) {
  return (
    <div className="nt-bars">
      {bars.map((height, index) => (
        <span key={`${height}-${index}`} style={{ height }} className="nt-bars__item" />
      ))}
    </div>
  )
}

export function HeroStackBoard() {
  return (
    <PanelShell>
      <div className="nt-stack-board">
        <div>
          <p className="nt-visual__eyebrow">Stack conectado</p>
          <h3 className="nt-visual__title">Todo lo que una pyme necesita para vender mejor y operar con más orden.</h3>
        </div>

        <div className="nt-stack-grid">
          {[
            ['Sitio web', 'Explica y convierte'],
            ['CRM', 'Filtra y ordena'],
            ['CompuNegocio', 'Control diario'],
            ['Cloud', 'Continuidad real'],
          ].map(([title, copy]) => (
            <div key={title} className="nt-stack-card">
              <span className="nt-stack-card__dot" />
              <strong>{title}</strong>
              <small>{copy}</small>
            </div>
          ))}
        </div>

        <div className="nt-inline-metrics">
          <div>
            <span>Leads activos</span>
            <strong>128</strong>
          </div>
          <div>
            <span>Conversión</span>
            <strong>18.4%</strong>
          </div>
          <div>
            <span>Siguiente paso</span>
            <strong>Demo</strong>
          </div>
        </div>
      </div>
    </PanelShell>
  )
}

export function NearTecFlowMockup() {
  return (
    <PanelShell dark>
      <div>
        <p className="nt-visual__eyebrow nt-visual__eyebrow--dark">Ruta comercial</p>
        <h3 className="nt-visual__title nt-visual__title--dark">Del primer clic a la propuesta.</h3>
        <div className="nt-flow-list nt-flow-list--compact">
          {[
            ['Atracción', 'Te encuentran'],
            ['Filtro', 'Se detecta la necesidad'],
            ['Prioridad', 'Se define urgencia'],
            ['Seguimiento', 'Se atiende por la ruta correcta'],
            ['Propuesta', 'Se aterriza el siguiente paso'],
          ].map(([title, copy], index) => (
            <article key={title} className="nt-flow-card nt-flow-card--dark">
              <span className="nt-flow-card__index nt-flow-card__index--dark">{index + 1}</span>
              <div>
                <strong>{title}</strong>
                <small>{copy}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}

export function LiveMetricBars() {
  return (
    <PanelShell>
      <div>
        <div className="nt-visual__head">
          <div>
            <p className="nt-visual__eyebrow">Indicadores</p>
            <h3 className="nt-visual__title">Señales que sí ayudan a decidir.</h3>
          </div>
          <span className="nt-tag">Panel</span>
        </div>

        <div className="nt-metric-grid">
          {[
            ['Leads', '1,248'],
            ['Demo agendada', '76'],
            ['Score promedio', '72/100'],
            ['Cierre estimado', '$1.24M'],
          ].map(([label, value], index) => (
            <article key={label} className={`nt-metric-card ${index === 3 ? 'nt-metric-card--soft' : ''}`}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>

        <div className="nt-visual-chart">
          <svg viewBox="0 0 420 180" className="h-[180px] w-full">
            <defs>
              <linearGradient id="ntAreaMain" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(154,196,59,0.42)" />
                <stop offset="100%" stopColor="rgba(154,196,59,0.04)" />
              </linearGradient>
            </defs>
            <g opacity="0.12" stroke="#0f1115">
              {[30, 60, 90, 120, 150].map((y) => (
                <line key={y} x1="20" x2="396" y1={y} y2={y} />
              ))}
            </g>
            <path d="M20 150 C56 134, 84 122, 120 130 S176 120, 206 102 S264 62, 302 76 S348 104, 396 34 L396 160 L20 160 Z" fill="url(#ntAreaMain)" />
            <path d="M20 150 C56 134, 84 122, 120 130 S176 120, 206 102 S264 62, 302 76 S348 104, 396 34" fill="none" stroke="#0f1115" strokeWidth="4" strokeLinecap="round" className="nt-line-draw" />
          </svg>
        </div>
      </div>
    </PanelShell>
  )
}

export function AutomationSignalBoard() {
  return (
    <PanelShell>
      <div>
        <div className="nt-visual__head">
          <div>
            <p className="nt-visual__eyebrow">Automatización</p>
            <h3 className="nt-visual__title">Captación, seguimiento y operación conectados.</h3>
          </div>
          <span className="nt-tag">Activo</span>
        </div>

        <div className="nt-automation-grid">
          <article className="nt-card-lite">
            <span className="nt-card-lite__label">Servicios activos</span>
            <div className="nt-card-lite__stack">
              {['Sitio web', 'CRM', 'Automatización', 'CompuNegocio', 'Cloud'].map((item) => (
                <div key={item} className="nt-inline-row">
                  <strong>{item}</strong>
                  <Dot />
                </div>
              ))}
            </div>
          </article>

          <article className="nt-card-lite">
            <span className="nt-card-lite__label">Mapa de conexión</span>
            <div className="nt-map-box nt-map-box--light">
              <Dot className="left-[16%] top-[32%]" />
              <Dot className="left-[52%] top-[20%]" />
              <Dot className="left-[76%] top-[46%]" />
              <Dot className="left-[28%] top-[72%]" />
              <svg viewBox="0 0 220 160" className="absolute inset-0 h-full w-full">
                <path d="M34 56 C68 16, 118 18, 164 62 S166 114, 130 126 S68 124, 42 102 S18 72, 34 56 Z" fill="none" stroke="#cbd9af" strokeWidth="2" />
                <path d="M36 58 L114 34 L168 70 L76 116 Z" fill="none" stroke="#9ac43b" strokeWidth="2" strokeDasharray="6 6" className="nt-dash-orbit" />
              </svg>
            </div>
          </article>

          <article className="nt-card-lite">
            <span className="nt-card-lite__label">Intención de compra</span>
            <div className="rounded-[22px] border border-[#edf2df] bg-white p-4">
              <MiniBars bars={[24, 34, 28, 52, 44, 72, 82]} />
              <div className="mt-4 space-y-2 text-sm font-medium text-[#24303a]">
                <div className="flex items-center gap-2"><Dot />Listo para hablar</div>
                <div className="flex items-center gap-2"><Dot />Listo para cotizar</div>
                <div className="flex items-center gap-2"><Dot />Requiere propuesta</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </PanelShell>
  )
}

export function PlatformDeepBoard() {
  return (
    <PanelShell>
      <div>
        <p className="nt-visual__eyebrow">Plataforma</p>
        <h3 className="nt-visual__title">Presencia, seguimiento, operación e infraestructura en una sola arquitectura.</h3>
        <div className="nt-stack-grid nt-stack-grid--wide">
          {[
            ['Presencia', 'Sitio, landing, ecommerce'],
            ['Captación', 'SEO, campañas, formularios'],
            ['Seguimiento', 'CRM, automatización, agenda'],
            ['Operación', 'CompuNegocio y control diario'],
            ['Infraestructura', 'Hosting, VPS, correo y nube'],
            ['Conexión fiscal', 'Ruta hacia iTimbre cuando aplica'],
          ].map(([title, copy]) => (
            <div key={title} className="nt-stack-card">
              <strong>{title}</strong>
              <small>{copy}</small>
            </div>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}

export function ResourcePulsePanel() {
  return (
    <PanelShell dark>
      <div>
        <p className="nt-visual__eyebrow nt-visual__eyebrow--dark">Para quién aplica</p>
        <h3 className="nt-visual__title nt-visual__title--dark">Ideal para empresas que ya no quieren resolver todo por separado.</h3>
        <div className="nt-flow-list">
          {[
            ['PyME comercial', 'Sitio, seguimiento y orden'],
            ['Retail / multisucursal', 'POS, control y timbres'],
            ['Servicios', 'CRM, agenda y automatización'],
            ['Operación técnica', 'Nube, soporte e infraestructura'],
          ].map(([title, copy], index) => (
            <article key={title} className="nt-flow-card nt-flow-card--dark">
              <span className="nt-flow-card__index nt-flow-card__index--dark">{index + 1}</span>
              <div>
                <strong>{title}</strong>
                <small>{copy}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}

export function WebConversionBoard() {
  return (
    <PanelShell>
      <div>
        <p className="nt-visual__eyebrow">Diseño web</p>
        <h3 className="nt-visual__title">Un sitio más claro convierte mejor.</h3>
        <div className="nt-stack-grid">
          {[
            ['Oferta clara', 'Explica qué vendes'],
            ['CTA visible', 'Lleva al siguiente paso'],
            ['Conversión', 'Más contacto útil'],
            ['Integración', 'Se conecta con CRM'],
          ].map(([title, copy]) => (
            <div key={title} className="nt-stack-card">
              <strong>{title}</strong>
              <small>{copy}</small>
            </div>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <PanelShell>
      <div>
        <p className="nt-visual__eyebrow">Emailing</p>
        <h3 className="nt-visual__title">Segmentar, seguir y recuperar intención.</h3>
        <div className="nt-card-lite">
          <span className="nt-card-lite__label">Rendimiento</span>
          <MiniBars bars={[26, 34, 46, 58, 72, 54]} />
        </div>
      </div>
    </PanelShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <PanelShell dark>
      <div>
        <p className="nt-visual__eyebrow nt-visual__eyebrow--dark">Infraestructura</p>
        <h3 className="nt-visual__title nt-visual__title--dark">Base estable para operar, respaldar y crecer.</h3>
        <div className="nt-flow-list">
          {[
            ['Hosting / VPS', 'Disponibilidad y rendimiento'],
            ['Correo', 'Comunicación profesional'],
            ['CN7', 'Operación remota y respaldo'],
            ['Soporte', 'Acompañamiento real'],
          ].map(([title, copy], index) => (
            <article key={title} className="nt-flow-card nt-flow-card--dark">
              <span className="nt-flow-card__index nt-flow-card__index--dark">{index + 1}</span>
              <div>
                <strong>{title}</strong>
                <small>{copy}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}
