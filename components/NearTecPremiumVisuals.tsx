import Image from 'next/image'

function MiniStat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-[22px] border p-4 ${accent ? 'border-[#b8d473] bg-[#eef7d7]' : 'border-[#edf2df] bg-white'}`}>
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">{label}</p>
      <p className="mt-2 text-xl font-black text-[#0f1115]">{value}</p>
    </div>
  )
}

function BarSet({ values }: { values: number[] }) {
  return (
    <div className="mt-4 grid min-h-[110px] grid-cols-6 items-end gap-2 sm:grid-cols-6">
      {values.map((value, index) => (
        <span
          key={`${value}-${index}`}
          className="rounded-full bg-gradient-to-t from-[#0f1115] via-[#5f7f24] to-[#9ac43b] [transform-origin:bottom] animate-[ntBarFloat_3.6s_ease-in-out_infinite]"
          style={{ height: `${value}px`, animationDelay: `${index * 0.15}s` }}
        />
      ))}
    </div>
  )
}

function NodeMap({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`relative h-[220px] overflow-hidden rounded-[24px] border ${dark ? 'border-white/10 bg-white/5' : 'border-[#edf2df] bg-[#f9fbf4]'}`}>
      {[['left-[14%] top-[30%]', 'Sitio'], ['left-[48%] top-[16%]', 'Lead'], ['left-[76%] top-[38%]', 'CRM'], ['left-[62%] top-[70%]', 'Venta'], ['left-[24%] top-[72%]', 'Cloud']].map(([pos, label], index) => (
        <div key={label} className={`absolute ${pos}`}>
          <span className={`absolute -inset-2 rounded-full ${dark ? 'bg-[#9ac43b]/20' : 'bg-[#9ac43b]/16'} animate-[ntPulseHalo_2.8s_ease-in-out_infinite]`} style={{ animationDelay: `${index * 0.2}s` }} />
          <span className={`relative inline-flex rounded-full px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] ${dark ? 'bg-[#0f1115] text-white border border-white/10' : 'bg-white text-[#0f1115] border border-[#dce8bf]'}`}>
            {label}
          </span>
        </div>
      ))}
      <svg viewBox="0 0 320 220" className="absolute inset-0 h-full w-full">
        <path d="M52 84 L154 46 L246 92 L198 166 L92 164 Z" fill="none" stroke={dark ? 'rgba(255,255,255,0.18)' : '#d5e3b2'} strokeWidth="2" />
        <path d="M52 84 L154 46 L246 92 L198 166 L92 164 Z" fill="none" stroke="#9ac43b" strokeWidth="2.5" strokeDasharray="8 7" className="animate-[ntDashOrbit_8s_linear_infinite]" />
      </svg>
    </div>
  )
}

export function HeroStackBoard() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[linear-gradient(160deg,#ffffff_0%,#f4f8ea_54%,#eef7d7_100%)] p-4 shadow-[0_28px_70px_rgba(15,17,21,0.08)] sm:p-5">
      <div className="rounded-[28px] border border-[#1a2026] bg-[linear-gradient(180deg,#12171d_0%,#1c2430_100%)] p-4 text-white shadow-[0_24px_46px_rgba(15,17,21,0.28)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/55">Panel NearTec</p>
            <h3 className="mt-2 text-2xl font-black">Sitio, CRM, sistema y nube en una sola vista.</h3>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/5 px-3 py-3">
            <Image src="/images/neartec-logo.png" alt="NearTec" width={110} height={64} className="h-auto w-[92px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.32)]" />
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <MiniStat label="Leads activos" value="356" />
          <MiniStat label="Cotizaciones" value="96" />
          <MiniStat label="Cierres" value="45" accent />
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Gráfica</p>
                <p className="mt-1 text-sm font-semibold text-white/85">Leads y cierres de la semana</p>
              </div>
              <span className="rounded-full bg-[#9ac43b] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#0f1115]">En vivo</span>
            </div>
            <BarSet values={[30, 52, 40, 76, 58, 92]} />
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Mapa</p>
                <p className="mt-1 text-sm font-semibold text-white/85">Cómo se conectan tus áreas</p>
              </div>
            </div>
            <NodeMap dark />
          </div>
        </div>
      </div>
    </div>
  )
}

export function LiveMetricBars() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Indicadores</p>
          <h3 className="mt-2 text-2xl font-black text-[#0f1115]">Lo que sí debes medir para vender mejor</h3>
        </div>
        <span className="rounded-full bg-[#eef7d7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">Actualizado</span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MiniStat label="Leads" value="1,248" />
        <MiniStat label="MQL" value="356" />
        <MiniStat label="Demos" value="76" />
        <MiniStat label="Cierre estimado" value="$1.24M" accent />
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[24px] border border-[#edf2df] bg-[#f9fbf4] p-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Gráfica principal</p>
          <p className="mt-1 text-sm font-semibold text-[#24303a]">De lead a venta en tiempo real</p>
          <BarSet values={[42, 64, 48, 82, 66, 98]} />
        </div>
        <div className="rounded-[24px] border border-[#edf2df] bg-[#0f1115] p-4 text-white shadow-[0_18px_40px_rgba(15,17,21,0.22)]">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Mapa de operación</p>
          <p className="mt-1 text-sm font-semibold text-white/82">Qué área recibe, filtra y convierte</p>
          <div className="mt-4">
            <NodeMap dark />
          </div>
        </div>
      </div>
    </div>
  )
}

export function NearTecFlowMockup() {
  const steps = [
    ['1', 'Atracción', 'Anuncios, sitio o landing'],
    ['2', 'Filtro', 'WhatsApp o Neary AI'],
    ['3', 'Calificación', 'Prioridad y necesidad'],
    ['4', 'Seguimiento', 'CRM, cotización y demo'],
    ['5', 'Cierre', 'Venta, implementación y soporte'],
  ]

  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Ruta comercial</p>
          <h3 className="mt-2 text-2xl font-black text-[#0f1115]">Así se convierte un lead en una venta real</h3>
        </div>
        <span className="rounded-full bg-[#f3f6ec] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">Paso a paso</span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {steps.map(([num, title, body], index) => (
          <div key={title} className="relative rounded-[24px] border border-[#edf2df] bg-[#f9fbf4] p-4 shadow-sm">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f1115] text-sm font-black text-white">{num}</span>
            <h4 className="text-base font-black text-[#0f1115]">{title}</h4>
            <p className="mt-2 text-sm leading-7 text-[#67717a]">{body}</p>
            {index < steps.length - 1 ? <span className="absolute -right-3 top-1/2 hidden h-[2px] w-6 -translate-y-1/2 rounded-full bg-[#9ac43b] lg:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function PlatformDeepBoard() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="flex min-h-[360px] items-center justify-center">
        <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-[#dce8bf] bg-white/90 shadow-[inset_0_0_0_18px_rgba(247,250,239,0.9)]">
          <div className="absolute inset-6 rounded-full border border-dashed border-[#dce8bf] animate-[ntSpinSlow_18s_linear_infinite]" />
          <div className="absolute inset-14 rounded-full border border-dashed border-[#c8d8a4] animate-[ntSpinSlow_24s_linear_infinite_reverse]" />
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#dce8bf] bg-[radial-gradient(circle_at_top,#ffffff_0%,#eef7d7_52%,#dceab8_100%)] shadow-[0_18px_40px_rgba(15,17,21,0.16)]">
            <Image src="/images/neartec-logo.png" alt="NearTec" width={96} height={56} className="h-auto w-16 drop-shadow-[0_8px_18px_rgba(15,17,21,0.22)]" />
          </div>
          {[
            ['Sitio', 'top-[2%] left-1/2 -translate-x-1/2'],
            ['Leads', 'right-[1%] top-[24%]'],
            ['CRM', 'right-[4%] bottom-[22%]'],
            ['Sistema', 'bottom-[1%] left-1/2 -translate-x-1/2'],
            ['Cloud', 'left-[4%] bottom-[18%]'],
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

export function ResourcePulsePanel() {
  const rows = [
    ['Blog', 'Atrae tráfico de búsqueda y resuelve dudas reales.'],
    ['Guías', 'Explican cómo elegir, implementar o comparar.'],
    ['Noticias', 'Te ayudan a reaccionar a cambios del mercado.'],
  ]
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-[linear-gradient(180deg,#ffffff_0%,#f7faef_100%)] p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Contenido que vende</p>
          <h3 className="mt-2 text-2xl font-black text-[#0f1115]">Publicaciones que atraen leads y aceleran la decisión</h3>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {rows.map(([title, body], index) => (
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

      <div className="mt-5 rounded-[24px] border border-[#edf2df] bg-[#0f1115] p-4 text-white shadow-[0_20px_40px_rgba(15,17,21,0.22)]">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Rendimiento del contenido</p>
        <p className="mt-1 text-sm font-semibold text-white/82">Qué tema atrae visitas, clics y oportunidades</p>
        <BarSet values={[26, 40, 52, 38, 74, 96]} />
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
          <h3 className="mt-2 text-2xl font-black">Cloud, respaldo y continuidad</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">CN7</span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Tráfico y estabilidad</p>
          <BarSet values={[46, 72, 54, 88, 68, 98]} />
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
    <div className="overflow-hidden rounded-[30px] border border-[#dce8bf] bg-white p-5 shadow-[0_24px_60px_rgba(15,17,21,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Conversión web</p>
          <h3 className="mt-2 text-2xl font-black text-[#0f1115]">Una landing clara vende mejor que una página bonita</h3>
        </div>
        <span className="rounded-full bg-[#eef7d7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">UX + CTA</span>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[24px] border border-[#edf2df] bg-[#f9fbf4] p-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Bloques</p>
          <div className="mt-4 space-y-3">
            {['Hook claro', 'Beneficio principal', 'Prueba social', 'CTA visible'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-[18px] border border-[#edf2df] bg-white px-3 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f1115] text-xs font-black text-white">{index + 1}</span>
                <span className="text-sm font-semibold text-[#24303a]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[24px] border border-[#edf2df] bg-[#0f1115] p-4 text-white">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Rendimiento</p>
          <BarSet values={[34, 90, 56, 72, 84, 62]} />
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
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Emailing</p>
            <h3 className="mt-2 text-xl font-black text-[#0f1115]">Secuencias que reactivan y empujan la venta</h3>
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
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Rendimiento</p>
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
            <BarSet values={[30, 60, 42, 78, 92, 70]} />
          </div>
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
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Automatización comercial</p>
              <h3 className="mt-2 text-xl font-black text-[#0f1115]">Qué entra, qué se filtra y qué llega listo a ventas</h3>
            </div>
            <span className="rounded-full bg-[#0f1115] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">Neary AI</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <MiniStat label="Nuevos" value="128" />
            <MiniStat label="Calificados" value="76" />
            <MiniStat label="Demo" value="24" />
            <MiniStat label="Cierre" value="9" accent />
          </div>
          <div className="mt-4 rounded-[22px] border border-[#edf2df] bg-white p-4 shadow-sm">
            <BarSet values={[18, 32, 44, 52, 68, 80]} />
          </div>
        </div>
        <div className="rounded-[26px] border border-[#e7edd8] bg-[#0f1115] p-4 text-white shadow-[0_20px_40px_rgba(15,17,21,0.22)]">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">Secuencia</p>
          <div className="mt-4 space-y-3">
            {['Captura', 'Filtra', 'Asigna', 'Agenda'].map((item, index) => (
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
