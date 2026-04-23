import Image from 'next/image'

function StatCard({ label, value, tone = 'green' }: { label: string; value: string; tone?: 'green' | 'dark' }) {
  return (
    <div
      className={`rounded-2xl border p-3 shadow-sm ${
        tone === 'green' ? 'border-[#dce8bf] bg-white' : 'border-[#e6e8ea] bg-[#f8f9f7]'
      }`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#67717a]">{label}</p>
      <p className="mt-2 text-lg font-black text-[#0f1115]">{value}</p>
    </div>
  )
}

function BarSeries({ heights }: { heights: number[] }) {
  return (
    <div className="flex h-20 items-end gap-2">
      {heights.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="w-3 rounded-full bg-gradient-to-t from-[#0f1115] via-[#658c24] to-[#9ac43b] [transform-origin:bottom] animate-[ntBarFloat_4s_ease-in-out_infinite]"
          style={{ height: `${height}%`, animationDelay: `${index * 0.18}s` }}
        />
      ))}
    </div>
  )
}

function PulseDot({ className = '' }: { className?: string }) {
  return (
    <span className={`absolute h-3 w-3 rounded-full bg-[#9ac43b] shadow-[0_0_0_8px_rgba(154,196,59,0.12)] animate-[ntPulseHalo_2.8s_ease-in-out_infinite] ${className}`} />
  )
}

export function HeroStackBoard() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-4 shadow-[0_28px_70px_rgba(15,17,21,0.1)] sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(154,196,59,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(15,17,21,0.08),transparent_30%)]" />
      <div className="relative z-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-white/70 bg-white/95 p-4 shadow-[0_20px_40px_rgba(15,17,21,0.08)] backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Panel NearTec</p>
              <h3 className="mt-2 text-xl font-black text-[#0f1115]">Lo que ves: captación, seguimiento y operación conectados</h3>
            </div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#dce8bf] bg-[radial-gradient(circle_at_top,#ffffff_0%,#eef7d7_45%,#dceab8_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_30px_rgba(15,17,21,0.14)]">
              <span className="absolute inset-2 rounded-[18px] bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.95),transparent_60%)]" />
              <Image src="/images/neartec-logo.png" alt="NearTec" width={88} height={50} className="relative h-auto w-14 drop-shadow-[0_8px_18px_rgba(15,17,21,0.25)]" />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <StatCard label="Leads filtrados" value="128" />
            <StatCard label="Conversión" value="18.4%" />
            <StatCard label="Siguiente paso" value="Demo" tone="dark" />
          </div>

          <div className="mt-5 rounded-[26px] border border-[#e7edd8] bg-[#f9fbf4] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#67717a]">Qué muestra este panel</p>
              <span className="rounded-full bg-[#0f1115] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">Actualizado</span>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <svg viewBox="0 0 320 140" className="h-[140px] w-full overflow-visible rounded-2xl bg-white p-2 shadow-sm">
                <defs>
                  <linearGradient id="ntLineGreen" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#0f1115" />
                    <stop offset="55%" stopColor="#658c24" />
                    <stop offset="100%" stopColor="#9ac43b" />
                  </linearGradient>
                </defs>
                <g opacity="0.1" stroke="#0f1115">
                  <line x1="20" y1="20" x2="20" y2="120" />
                  <line x1="20" y1="120" x2="300" y2="120" />
                  <line x1="20" y1="90" x2="300" y2="90" />
                  <line x1="20" y1="60" x2="300" y2="60" />
                  <line x1="20" y1="30" x2="300" y2="30" />
                </g>
                <path d="M20 108 C48 94, 62 84, 88 90 S138 112, 162 94 S210 54, 238 68 S270 108, 300 34" fill="none" stroke="url(#ntLineGreen)" strokeWidth="6" strokeLinecap="round" className="animate-[ntDashLine_4.4s_ease-in-out_infinite]" />
                {[
                  [20, 108],
                  [88, 90],
                  [162, 94],
                  [238, 68],
                  [300, 34],
                ].map(([x, y], index) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#9ac43b" className="animate-[ntPulseHalo_2.5s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.2}s` }} />
                ))}
              </svg>

              <div className="rounded-2xl border border-[#e7edd8] bg-white p-3 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#67717a]">Servicios activos</p>
                <div className="mt-3 space-y-2 text-sm font-semibold text-[#24303a]">
                  {['Sitio web', 'CRM', 'Automatización', 'CompuNegocio', 'Cloud'].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-[#edf2df] px-3 py-2">
                      <span>{item}</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#9ac43b]" style={{ boxShadow: `0 0 0 6px rgba(154,196,59,${0.08 + index * 0.01})` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e2e7da] bg-[#0f1115] p-4 text-white shadow-[0_24px_46px_rgba(15,17,21,0.24)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,196,59,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_35%)]" />
            <div className="relative z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">Ruta comercial</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                {['Te cotizan', 'Te orientan', 'Te implementan'].map((item, index) => (
                  <div key={item} className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9ac43b] text-sm font-black text-[#0f1115]">{index + 1}</span>
                    <span className="text-sm font-semibold text-white/88">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-6 text-white/68">Qué ves: avance de oportunidades conforme el prospecto se acerca al cierre.</p>
              <div className="mt-4 grid grid-cols-6 gap-2">
                {[48, 62, 44, 76, 86, 58].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="rounded-full bg-gradient-to-t from-[#9ac43b] via-[#b8dc67] to-[#eef7d7] [transform-origin:bottom] animate-[ntBarFloat_4s_ease-in-out_infinite]"
                    style={{ height: `${item}px`, animationDelay: `${index * 0.16}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#dce8bf] bg-white p-4 shadow-[0_20px_40px_rgba(15,17,21,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(154,196,59,0.18),transparent_30%)]" />
            <div className="relative z-10 grid gap-4 sm:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Mapa de operación</p>
                <div className="relative mt-4 h-40 rounded-[24px] border border-[#edf2df] bg-[#f9fbf4]">
                  <PulseDot className="left-[16%] top-[32%]" />
                  <PulseDot className="left-[52%] top-[20%]" />
                  <PulseDot className="left-[76%] top-[46%]" />
                  <PulseDot className="left-[28%] top-[72%]" />
                  <svg viewBox="0 0 220 160" className="absolute inset-0 h-full w-full">
                    <path d="M34 56 C68 16, 118 18, 164 62 S166 114, 130 126 S68 124, 42 102 S18 72, 34 56 Z" fill="none" stroke="#dae6c2" strokeWidth="2" />
                    <path d="M36 58 L114 34 L168 70 L76 116 Z" fill="none" stroke="#9ac43b" strokeWidth="2" strokeDasharray="6 6" className="animate-[ntDashOrbit_8s_linear_infinite]" />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Intención de compra</p>
                <div className="mt-4 rounded-[24px] border border-[#edf2df] bg-[#f9fbf4] p-4">
                  <BarSeries heights={[25, 38, 31, 57, 45, 74, 86]} />
                  <div className="mt-4 space-y-2">
                    {['Listo para hablar', 'Listo para cotizar', 'Requiere propuesta'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-medium text-[#24303a]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#9ac43b]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LiveMetricBars() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-4 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Indicadores comerciales</p>
          <h3 className="mt-2 text-2xl font-black text-[#0f1115]">Qué ves: comportamiento, prioridad y avance del pipeline</h3>
        </div>
        <span className="rounded-full bg-[#eef7d7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">Panel</span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Leads" value="1,248" />
        <StatCard label="Demo agendada" value="76" />
        <StatCard label="Score promedio" value="72/100" />
        <StatCard label="Cierre estimado" value="$1.24M" tone="dark" />
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[26px] border border-[#edf2df] bg-[#f9fbf4] p-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Qué muestra la gráfica</p>
          <svg viewBox="0 0 420 180" className="mt-3 h-[180px] w-full rounded-2xl bg-white p-2 shadow-sm">
            <defs>
              <linearGradient id="ntAreaGreen" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(154,196,59,0.42)" />
                <stop offset="100%" stopColor="rgba(154,196,59,0.02)" />
              </linearGradient>
            </defs>
            <g opacity="0.12" stroke="#0f1115">
              {[30, 60, 90, 120, 150].map((y) => (
                <line key={y} x1="20" x2="396" y1={y} y2={y} />
              ))}
            </g>
            <path d="M20 150 C56 134, 84 122, 120 130 S176 120, 206 102 S264 62, 302 76 S348 104, 396 34 L396 160 L20 160 Z" fill="url(#ntAreaGreen)" />
            <path d="M20 150 C56 134, 84 122, 120 130 S176 120, 206 102 S264 62, 302 76 S348 104, 396 34" fill="none" stroke="#0f1115" strokeWidth="4" strokeLinecap="round" className="animate-[ntDashLine_5s_ease-in-out_infinite]" />
          </svg>
        </div>

        <div className="rounded-[26px] border border-[#edf2df] bg-[#0f1115] p-4 text-white shadow-[0_18px_40px_rgba(15,17,21,0.22)]">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">Mapa de conexión</p>
          <div className="relative mt-4 h-[180px] overflow-hidden rounded-[22px] border border-white/10 bg-white/5">
            <PulseDot className="left-[18%] top-[40%]" />
            <PulseDot className="left-[38%] top-[20%]" />
            <PulseDot className="left-[64%] top-[28%]" />
            <PulseDot className="left-[76%] top-[58%]" />
            <PulseDot className="left-[34%] top-[70%]" />
            <svg viewBox="0 0 260 180" className="absolute inset-0 h-full w-full">
              <path d="M48 72 L98 34 L170 50 L204 102 L148 142 L84 134 Z" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
              <path d="M48 72 L170 50 L204 102 L84 134 Z" fill="none" stroke="#9ac43b" strokeWidth="2.4" strokeDasharray="8 7" className="animate-[ntDashOrbit_8s_linear_infinite]" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function NearTecFlowMockup() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Embudo comercial</p>
          <h3 className="mt-2 text-2xl font-black text-[#0f1115]">Del primer clic a la propuesta</h3>
        </div>
        <span className="rounded-full bg-[#f3f6ec] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">Flow map</span>
      </div>

      <div className="relative mt-6 grid gap-4 lg:grid-cols-5">
        {[
          ['Atracción', 'Te encuentran'],
          ['Filtro', 'Se detecta la necesidad'],
          ['Prioridad', 'Se define quién está listo'],
          ['Seguimiento', 'Se atiende por la ruta correcta'],
          ['Cierre', 'Se envía propuesta o demo'],
        ].map(([title, body], index) => (
          <div key={title} className="relative rounded-[24px] border border-[#edf2df] bg-[#f9fbf4] p-4 shadow-sm">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f1115] text-sm font-black text-white">
              {index + 1}
            </span>
            <h4 className="text-base font-black text-[#0f1115]">{title}</h4>
            <p className="mt-2 text-sm leading-7 text-[#67717a]">{body}</p>
            {index < 4 ? <span className="absolute -right-3 top-1/2 hidden h-[2px] w-6 -translate-y-1/2 rounded-full bg-[#9ac43b] lg:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ResourcePulsePanel() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Insights y playbooks</p>
          <h3 className="mt-2 text-2xl font-black text-[#0f1115]">Contenido útil para mover el lead al siguiente paso</h3>
        </div>
        <span className="rounded-full bg-[#0f1115] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">NearTec</span>
      </div>

      <div className="mt-5 grid gap-3">
        {[
          ['Automatización comercial', 'Qué entra, qué se filtra y cómo se atiende mejor.'],
          ['Infraestructura para PyME', 'Qué sí conviene mover a nube y qué no.'],
          ['CompuNegocio por etapas', 'Cómo arrancar con operación real sin meter fricción.'],
        ].map(([title, body], index) => (
          <div key={title} className="rounded-[24px] border border-white/80 bg-white/95 p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[12px] font-black text-[#0f1115]">{title}</p>
                <p className="mt-1 text-sm leading-7 text-[#67717a]">{body}</p>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eef7d7] text-sm font-black text-[#0f1115]">{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[26px] border border-[#e7edd8] bg-[#0f1115] p-4 text-white shadow-[0_20px_40px_rgba(15,17,21,0.22)]">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">Pulso de atención</p>
        <div className="mt-4 flex items-end gap-2">
          {[26, 40, 52, 38, 74, 68, 96].map((value, index) => (
            <span key={`${value}-${index}`} className="w-full rounded-full bg-gradient-to-t from-[#0f1115] via-[#658c24] to-[#9ac43b] [transform-origin:bottom] animate-[ntBarFloat_4s_ease-in-out_infinite]" style={{ height: `${value}px`, animationDelay: `${index * 0.16}s` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-[#0f1115] p-5 text-white shadow-[0_24px_60px_rgba(15,17,21,0.22)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Infraestructura</p>
          <h3 className="mt-2 text-2xl font-black">Cloud, respaldo y continuidad sin ruido visual</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">CN7</span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
          <svg viewBox="0 0 360 180" className="h-[180px] w-full">
            <path d="M48 120 C86 72, 124 48, 170 58 S254 96, 308 48" fill="none" stroke="rgba(154,196,59,0.88)" strokeWidth="4" strokeLinecap="round" className="animate-[ntDashLine_5s_ease-in-out_infinite]" />
            {[48, 110, 172, 236, 308].map((x, index) => (
              <circle key={x} cx={x} cy={index === 0 ? 120 : index === 1 ? 74 : index === 2 ? 60 : index === 3 ? 94 : 48} r="5" fill="#9ac43b" />
            ))}
            <rect x="18" y="18" width="86" height="44" rx="16" fill="rgba(255,255,255,0.08)" />
            <rect x="256" y="112" width="86" height="44" rx="16" fill="rgba(255,255,255,0.08)" />
            <text x="32" y="45" fill="white" fontSize="12" fontWeight="700">Hosting</text>
            <text x="270" y="139" fill="white" fontSize="12" fontWeight="700">Backup</text>
          </svg>
        </div>
        <div className="space-y-3">
          {['Hosting', 'VPS', 'Correo', 'FTP', 'Backups'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-sm font-semibold text-white/88">{item}</span>
              <span className="rounded-full bg-[#9ac43b] px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#0f1115]">Activo</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function WebConversionBoard() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-4 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="rounded-[28px] border border-[#e7edd8] bg-[#f9fbf4] p-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#9ac43b]" />
          <span className="h-3 w-3 rounded-full bg-[#dbe4d7]" />
          <span className="h-3 w-3 rounded-full bg-[#dbe4d7]" />
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Landing / ecommerce</p>
            <h3 className="mt-2 text-xl font-black text-[#0f1115]">Explica, convierte y acompaña la compra</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {['Hero claro', 'Oferta visible', 'Prueba social', 'CTA persistente'].map((item) => (
                <div key={item} className="rounded-[20px] border border-[#edf2df] bg-white px-3 py-3 text-sm font-semibold text-[#24303a] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-[#edf2df] bg-white p-4 shadow-sm">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Comportamiento</p>
            <div className="mt-4 flex items-end gap-2">
              {[28, 36, 52, 61, 72].map((item, index) => (
                <span key={`${item}-${index}`} className="w-full rounded-full bg-gradient-to-t from-[#0f1115] via-[#658c24] to-[#9ac43b] [transform-origin:bottom] animate-[ntBarFloat_4s_ease-in-out_infinite]" style={{ height: `${item}px`, animationDelay: `${index * 0.18}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-4 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="rounded-[28px] border border-[#e7edd8] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Emailing y nurturing</p>
            <h3 className="mt-2 text-xl font-black text-[#0f1115]">Secuencias más claras, medibles y fáciles de entender</h3>
          </div>
          <span className="rounded-full bg-[#0f1115] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">A/B</span>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[24px] border border-[#edf2df] bg-white p-4 shadow-sm">
            <div className="space-y-3">
              {['Bienvenida', 'Seguimiento', 'Oferta', 'Reactivación'].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-[18px] border border-[#edf2df] px-3 py-2">
                  <span className="text-sm font-semibold text-[#24303a]">{item}</span>
                  <span className="rounded-full bg-[#eef7d7] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#0f1115]">{index === 1 ? 'Programado' : 'Activo'}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-[#edf2df] bg-[#0f1115] p-4 text-white shadow-[0_20px_38px_rgba(15,17,21,0.2)]">
            <BarSeries heights={[22, 38, 51, 44, 68, 80]} />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ['Apertura', '42%'],
                ['CTR', '11%'],
                ['Respuesta', '8%'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-white/55">{label}</p>
                  <p className="mt-2 text-lg font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlatformDeepBoard() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(154,196,59,0.18),transparent_32%)]" />
      <div className="relative z-10 flex min-h-[360px] items-center justify-center">
        <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-[#dce8bf] bg-white/80 shadow-[inset_0_0_0_18px_rgba(247,250,239,0.9)]">
          <div className="absolute inset-6 rounded-full border border-dashed border-[#dce8bf] animate-[ntSpinSlow_18s_linear_infinite]" />
          <div className="absolute inset-14 rounded-full border border-dashed border-[#c8d8a4] animate-[ntSpinSlow_24s_linear_infinite_reverse]" />
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#dce8bf] bg-[radial-gradient(circle_at_top,#ffffff_0%,#eef7d7_52%,#dceab8_100%)] shadow-[0_18px_40px_rgba(15,17,21,0.16)]">
            <Image src="/images/neartec-logo.png" alt="NearTec" width={96} height={56} className="h-auto w-16 drop-shadow-[0_8px_18px_rgba(15,17,21,0.2)]" />
          </div>

          {[
            ['Presencia', 'top-[2%] left-1/2 -translate-x-1/2'],
            ['Captación', 'right-[1%] top-[23%]'],
            ['Seguimiento', 'right-[5%] bottom-[20%]'],
            ['Operación', 'bottom-[1%] left-1/2 -translate-x-1/2'],
            ['Infraestructura', 'left-[4%] bottom-[18%]'],
            ['Fiscal', 'left-[1%] top-[24%]'],
          ].map(([label, pos], index) => (
            <div key={label} className={`absolute ${pos}`}>
              <div className="rounded-full border border-[#dce8bf] bg-white px-4 py-2 text-sm font-semibold text-[#24303a] shadow-[0_10px_24px_rgba(15,17,21,0.08)] animate-[ntFloatSoft_5s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.2}s` }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AutomationSignalBoard() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-4 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[26px] border border-[#e7edd8] bg-[#f9fbf4] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Embudo comercial</p>
              <h3 className="mt-2 text-xl font-black text-[#0f1115]">Qué ves: cómo entra el lead, cómo se filtra y cómo avanza</h3>
            </div>
            <span className="rounded-full bg-[#0f1115] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">IA</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <StatCard label="Nuevos" value="128" />
            <StatCard label="Calificados" value="76" />
            <StatCard label="Demo" value="24" />
            <StatCard label="Cierre" value="9" tone="dark" />
          </div>
          <div className="mt-4 rounded-[22px] border border-[#edf2df] bg-white p-4 shadow-sm">
            <BarSeries heights={[18, 32, 44, 52, 68, 80]} />
          </div>
        </div>
        <div className="rounded-[26px] border border-[#e7edd8] bg-[#0f1115] p-4 text-white shadow-[0_20px_40px_rgba(15,17,21,0.22)]">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">Pasos automáticos</p>
          <div className="mt-4 space-y-3">
            {['Captura del lead', 'Filtro automático', 'Pase al asesor', 'Seguimiento y cierre'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/5 px-3 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9ac43b] text-sm font-black text-[#0f1115]">{index + 1}</span>
                <span className="text-sm font-semibold text-white/88">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CompuNegocioControlBoard() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-4 shadow-[0_24px_60px_rgba(15,17,21,0.1)] sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="rounded-[28px] border border-[#e7edd8] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">CompuNegocio</p>
              <h3 className="mt-2 text-xl font-black text-[#0f1115]">Punto de venta con inventario y control</h3>
            </div>
            <span className="rounded-full bg-[#eef7d7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">En vivo</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <StatCard label="Ventas del día" value="$24,580" />
            <StatCard label="Tickets" value="128" />
            <StatCard label="Artículos" value="356" />
            <StatCard label="Promedio" value="$192" tone="dark" />
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[22px] border border-[#edf2df] bg-[#f9fbf4] p-4">
              {['Teclado inalámbrico', 'Mouse óptico', 'Dock USB-C', 'Monitor 24” IPS'].map((item, index) => (
                <div key={item} className="flex items-center justify-between border-b border-[#edf2df] py-2 text-sm last:border-b-0">
                  <span className="font-medium text-[#24303a]">{item}</span>
                  <span className="font-black text-[#0f1115]">{['$450', '$280', '$1,250', '$2,799'][index]}</span>
                </div>
              ))}
              <div className="mt-4 flex items-center justify-between rounded-[18px] bg-white px-3 py-3 shadow-sm">
                <span className="text-sm font-semibold text-[#24303a]">Total</span>
                <span className="text-lg font-black text-[#0f1115]">$4,779</span>
              </div>
            </div>
            <div className="rounded-[22px] border border-[#edf2df] bg-white p-4 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Últimos 7 días</p>
              <svg viewBox="0 0 220 140" className="mt-3 h-[140px] w-full">
                <path d="M12 118 C36 108, 54 86, 82 94 S132 110, 158 84 S188 46, 208 36" fill="none" stroke="#0f1115" strokeWidth="4" strokeLinecap="round" className="animate-[ntDashLine_5s_ease-in-out_infinite]" />
                {[12, 82, 158, 208].map((x, index) => (
                  <circle key={x} cx={x} cy={[118, 94, 84, 36][index]} r="5" fill="#9ac43b" />
                ))}
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-[28px] border border-[#e7edd8] bg-[#0f1115] p-4 text-white shadow-[0_20px_40px_rgba(15,17,21,0.22)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">Mapa de operación</p>
              <h3 className="mt-2 text-xl font-black">Estaciones, caja y decisiones claras</h3>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">Retail</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Ventas (POS)', 'Inventario', 'Compras', 'Reportes', 'Usuarios', 'Timbres'].map((item, index) => (
              <div key={item} className="rounded-[20px] border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-white/88 animate-[ntFloatSoft_5s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.18}s` }}>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[22px] border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">Top categorías</p>
            <div className="mt-4 flex items-end gap-2">
              {[64, 48, 42, 30].map((item, index) => (
                <span key={`${item}-${index}`} className="w-full rounded-full bg-gradient-to-t from-[#1d2810] via-[#658c24] to-[#9ac43b] [transform-origin:bottom] animate-[ntBarFloat_4s_ease-in-out_infinite]" style={{ height: `${item}px`, animationDelay: `${index * 0.16}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
