import type { CSSProperties, ReactNode } from 'react'


function VisualShell({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[34px] border p-5 shadow-[0_18px_42px_rgba(17,19,24,0.08)] backdrop-blur-sm sm:p-6 ${dark ? 'border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,#121923_0%,#182331_52%,#213423_100%)] text-white' : 'border-[var(--brand-line)] bg-[rgba(255,255,255,0.9)]'}`}>
      <div className={`pointer-events-none absolute inset-0 ${dark ? 'visual-dark-grid' : 'visual-light-grid'}`} />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}

function PulseDot({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return <span className={`pulse-dot ${className}`} style={style} />
}

function MiniBars({ bars }: { bars: number[] }) {
  return (
    <div className="flex h-[92px] items-end gap-2">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="bar-rise block w-4 rounded-full bg-[linear-gradient(180deg,#acd249_0%,#7da325_76%,#111318_100%)]"
          style={{ height }}
        />
      ))}
    </div>
  )
}

export function HeroStackBoard() {
  return (
    <VisualShell>
      <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Stack conectado</p>
          <h3 className="mt-3 max-w-xl text-[1.9rem] font-black leading-[1.02] text-[var(--brand-ink)]">
            Todo lo que una pyme necesita para vender mejor y operar con más orden.
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ['Sitio web', 'Explica y convierte'],
              ['CRM', 'Filtra y ordena'],
              ['CompuNegocio', 'Control diario'],
              ['Nube', 'Continuidad real'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[22px] border border-[rgba(219,228,215,0.92)] bg-[rgba(247,250,242,0.95)] p-4 shadow-[0_10px_26px_rgba(17,19,24,0.04)]">
                <div className="mb-3 flex items-center gap-2">
                  <PulseDot />
                  <strong className="text-[var(--brand-ink)]">{title}</strong>
                </div>
                <p className="text-sm leading-7 text-[var(--brand-muted)]">{copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[rgba(219,228,215,0.86)] bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ed_100%)] p-4 shadow-[0_14px_34px_rgba(17,19,24,0.05)]">
          <div className="mb-4 grid grid-cols-2 gap-3">
            {[
              ['Leads', '128'],
              ['Conversión', '18.4%'],
              ['Siguiente paso', 'Demo'],
              ['Estado', 'Activo'],
            ].map(([label, value], index) => (
              <div key={label} className={`rounded-[18px] border p-4 ${index === 3 ? 'border-[rgba(154,196,59,0.28)] bg-[rgba(154,196,59,0.12)]' : 'border-[rgba(219,228,215,0.92)] bg-white'}`}>
                <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">{label}</span>
                <strong className="mt-2 block text-2xl font-black text-[var(--brand-ink)]">{value}</strong>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-[24px] border border-[rgba(219,228,215,0.92)] bg-white p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(154,196,59,0.18),transparent_24%)]" />
            <svg viewBox="0 0 420 190" className="relative z-[1] h-[190px] w-full">
              <defs>
                <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(154,196,59,0.32)" />
                  <stop offset="100%" stopColor="rgba(154,196,59,0.02)" />
                </linearGradient>
              </defs>
              <g opacity="0.12" stroke="#12161c">
                {[30, 65, 100, 135, 170].map((y) => (
                  <line key={y} x1="16" x2="404" y1={y} y2={y} />
                ))}
              </g>
              <path d="M22 156 C66 118, 98 110, 138 118 S208 132, 244 100 S310 44, 398 34 L398 178 L22 178 Z" fill="url(#heroArea)" />
              <path d="M22 156 C66 118, 98 110, 138 118 S208 132, 244 100 S310 44, 398 34" fill="none" stroke="#131821" strokeWidth="5" strokeLinecap="round" className="fx-draw" />
              {[
                [22, 156],
                [138, 118],
                [244, 100],
                [332, 64],
                [398, 34],
              ].map(([x, y], index) => (
                <g key={index} className="fx-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  <circle cx={x} cy={y} r="14" fill="rgba(154,196,59,0.15)" />
                  <circle cx={x} cy={y} r="6" fill="#9ac43b" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  return (
    <VisualShell dark>
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/60">Ruta comercial</p>
        <h3 className="mt-3 text-[1.8rem] font-black leading-[1.02] text-white">Del primer clic a la propuesta.</h3>
        <div className="relative mt-6 rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
          <div className="absolute left-[32px] top-[36px] bottom-[36px] w-px bg-[linear-gradient(180deg,rgba(154,196,59,0.65),rgba(154,196,59,0.05))]" />
          <div className="space-y-4">
            {[
              ['Atracción', 'Te encuentran'],
              ['Filtro', 'Se detecta la necesidad'],
              ['Prioridad', 'Se define urgencia'],
              ['Seguimiento', 'Se atiende por la ruta correcta'],
              ['Propuesta', 'Se aterriza el siguiente paso'],
            ].map(([title, copy], index) => (
              <article key={title} className="relative ml-4 rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 pl-16 shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
                <span className="absolute left-[-12px] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[linear-gradient(180deg,#b1d84e_0%,#9ac43b_100%)] text-lg font-black text-[#111318] shadow-[0_12px_24px_rgba(154,196,59,0.26)]">
                  {index + 1}
                </span>
                <strong className="block text-xl text-white">{title}</strong>
                <small className="mt-1 block text-sm leading-7 text-white/70">{copy}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  return (
    <VisualShell>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Indicadores</p>
            <h3 className="mt-3 text-[1.8rem] font-black leading-[1.02] text-[var(--brand-ink)]">Señales que sí ayudan a decidir.</h3>
          </div>
          <span className="rounded-full border border-[rgba(154,196,59,0.26)] bg-[rgba(154,196,59,0.1)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[var(--brand-ink)]">Panel</span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ['Leads', '1,248'],
            ['Demos', '76'],
            ['Score promedio', '72/100'],
            ['Cierre estimado', '$1.24M'],
          ].map(([label, value], index) => (
            <article key={label} className={`rounded-[22px] border p-4 shadow-[0_10px_24px_rgba(17,19,24,0.04)] ${index === 3 ? 'border-[rgba(17,19,24,0.06)] bg-[rgba(17,19,24,0.04)]' : 'border-[rgba(219,228,215,0.92)] bg-white'}`}>
              <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">{label}</span>
              <strong className="mt-2 block text-2xl font-black text-[var(--brand-ink)]">{value}</strong>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-[26px] border border-[rgba(219,228,215,0.92)] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ef_100%)] p-4">
          <svg viewBox="0 0 420 200" className="h-[200px] w-full">
            <defs>
              <linearGradient id="metricArea" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(154,196,59,0.04)" />
                <stop offset="45%" stopColor="rgba(154,196,59,0.28)" />
                <stop offset="100%" stopColor="rgba(154,196,59,0.16)" />
              </linearGradient>
            </defs>
            <g opacity="0.12" stroke="#12161c">
              {[34, 70, 106, 142, 178].map((y) => (
                <line key={y} x1="24" x2="396" y1={y} y2={y} />
              ))}
            </g>
            <path d="M26 160 Q78 128 126 132 T216 108 T308 86 T394 32 L394 176 L26 176 Z" fill="url(#metricArea)" />
            <path d="M26 160 Q78 128 126 132 T216 108 T308 86 T394 32" fill="none" stroke="#111318" strokeWidth="4.5" strokeLinecap="round" className="fx-draw" />
            <path d="M26 160 Q78 128 126 132 T216 108 T308 86 T394 32" fill="none" stroke="rgba(154,196,59,0.22)" strokeWidth="11" strokeLinecap="round" strokeDasharray="3 26" className="fx-glow-line" />
          </svg>
        </div>
      </div>
    </VisualShell>
  )
}

export function AutomationSignalBoard() {
  return (
    <VisualShell>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Automatización</p>
            <h3 className="mt-3 text-[1.8rem] font-black leading-[1.02] text-[var(--brand-ink)]">Captación, filtro y operación conectados.</h3>
          </div>
          <span className="rounded-full border border-[rgba(154,196,59,0.26)] bg-[rgba(154,196,59,0.1)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[var(--brand-ink)]">Activo</span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
          <article className="rounded-[24px] border border-[rgba(219,228,215,0.92)] bg-white p-4 shadow-[0_10px_24px_rgba(17,19,24,0.04)]">
            <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Servicios activos</span>
            <div className="mt-4 space-y-3">
              {['Sitio web', 'CRM', 'Automatización', 'CompuNegocio', 'Cloud'].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-full border border-[rgba(219,228,215,0.92)] bg-[rgba(247,250,242,0.92)] px-4 py-3">
                  <strong className="text-[var(--brand-ink)]">{item}</strong>
                  <PulseDot className="fx-float" style={{ animationDelay: `${index * 0.2}s` } } />
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[24px] border border-[rgba(219,228,215,0.92)] bg-[linear-gradient(180deg,#fff_0%,#f6f9ef_100%)] p-4 shadow-[0_10px_24px_rgba(17,19,24,0.04)]">
            <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Mapa de operación</span>
            <div className="relative mt-4 h-[238px] overflow-hidden rounded-[22px] border border-[rgba(219,228,215,0.92)] bg-white/90">
              <PulseDot className="absolute left-[16%] top-[34%]" />
              <PulseDot className="absolute left-[56%] top-[16%]" />
              <PulseDot className="absolute left-[80%] top-[44%]" />
              <PulseDot className="absolute left-[30%] top-[74%]" />
              <svg viewBox="0 0 280 210" className="absolute inset-0 h-full w-full">
                <path d="M44 78 C78 30, 148 26, 200 78 S212 158, 144 170 S54 146, 42 104 S26 96, 44 78 Z" fill="none" stroke="#c6d7a1" strokeWidth="3" />
                <path d="M54 84 L144 48 L210 92 L88 150 Z" fill="none" stroke="#9ac43b" strokeWidth="4" strokeDasharray="10 10" className="fx-orbit" />
                <path d="M54 84 L88 150 M144 48 L210 92" fill="none" stroke="rgba(17,19,24,0.18)" strokeWidth="3" />
              </svg>
            </div>
            <div className="mt-4 rounded-[20px] border border-[rgba(219,228,215,0.92)] bg-white p-4">
              <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Intención de compra</span>
              <div className="mt-4 flex items-end justify-between gap-3">
                <MiniBars bars={[28, 38, 34, 56, 48, 74, 84]} />
                <div className="space-y-2 text-sm leading-7 text-[var(--brand-ink)]">
                  <div className="flex items-center gap-2"><PulseDot />Listo para hablar</div>
                  <div className="flex items-center gap-2"><PulseDot />Listo para cotizar</div>
                  <div className="flex items-center gap-2"><PulseDot />Requiere propuesta</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </VisualShell>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell>
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Arquitectura</p>
        <h3 className="mt-3 text-[1.8rem] font-black leading-[1.02] text-[var(--brand-ink)]">Presencia, seguimiento, operación e infraestructura en una sola arquitectura.</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {[
            ['Presencia', 'Sitio, landing, ecommerce'],
            ['Captación', 'SEO, formularios, campañas'],
            ['Seguimiento', 'CRM, automatización, agenda'],
            ['Operación', 'CompuNegocio y control diario'],
            ['Infraestructura', 'Hosting, VPS, correo y nube'],
            ['Conexión fiscal', 'Ruta hacia iTimbre cuando aplica'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[22px] border border-[rgba(219,228,215,0.92)] bg-[rgba(247,250,242,0.95)] p-4 shadow-[0_10px_26px_rgba(17,19,24,0.04)]">
              <strong className="block text-[var(--brand-ink)]">{title}</strong>
              <small className="mt-2 block text-sm leading-7 text-[var(--brand-muted)]">{copy}</small>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  )
}

export function ResourcePulsePanel() {
  return (
    <VisualShell dark>
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/60">Compradores / contexto</p>
        <h3 className="mt-3 text-[1.8rem] font-black leading-[1.02] text-white">Ideal para empresas que ya no quieren resolver todo por separado.</h3>
        <div className="mt-6 space-y-4">
          {[
            ['PyMEs comerciales', 'Sitio, seguimiento y orden'],
            ['Retail / multisucursal', 'POS, control y timbres'],
            ['Servicios', 'CRM, agenda y automatización'],
            ['Operación técnica', 'Nube, soporte e infraestructura'],
          ].map(([title, copy], index) => (
            <article key={title} className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,#b1d84e_0%,#9ac43b_100%)] text-base font-black text-[#111318]">
                  {index + 1}
                </span>
                <div>
                  <strong className="block text-lg text-white">{title}</strong>
                  <small className="mt-1 block text-sm leading-7 text-white/70">{copy}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </VisualShell>
  )
}
