const metricCards = [
  ['Leads filtrados', '128', 'Contactos con intención detectada'],
  ['Conversión', '18.4%', 'Avance estimado por ruta comercial'],
  ['Demo', '24', 'Oportunidades listas para atención'],
]

const routeSteps = [
  { number: '1', title: 'Atracción', desc: 'Te encuentran por web, redes, campañas o recomendación.' },
  { number: '2', title: 'Filtro', desc: 'Se entiende necesidad, servicio y nivel de urgencia.' },
  { number: '3', title: 'Prioridad', desc: 'Se mide intención para saber quién avanza primero.' },
  { number: '4', title: 'Seguimiento', desc: 'El equipo recibe contexto y una ruta clara.' },
  { number: '5', title: 'Propuesta', desc: 'Se cotiza con menos fricción y más precisión.' },
]

const platformNodes = ['Sitio web', 'CRM', 'Emailing', 'CompuNegocio', 'Cloud', 'iTimbre']

function VisualShell({
  kicker,
  title,
  children,
  variant = 'dark',
}: {
  kicker: string
  title: string
  children: React.ReactNode
  variant?: 'dark' | 'light'
}) {
  const dark = variant === 'dark'

  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] border p-5 shadow-[0_24px_70px_rgba(35,50,20,0.10)] sm:p-7 ${
        dark
          ? 'border-white/10 bg-[#101410] text-white'
          : 'border-[#d9e8bf]/70 bg-white/85 text-[#101410] backdrop-blur'
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${
          dark ? 'bg-[#9bc832]/20' : 'bg-[#9bc832]/18'
        }`}
      />
      <div className="relative z-10 mb-5 flex flex-wrap items-start justify-between gap-4">
        <span
          className={`inline-flex rounded-full px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.2em] ${
            dark ? 'bg-white/8 text-[#a9d841]' : 'bg-[#edf8d7] text-[#66841f]'
          }`}
        >
          {kicker}
        </span>
        <h3 className="max-w-[22rem] text-balance text-right text-[clamp(1.55rem,2.6vw,2.35rem)] font-black leading-[0.98] tracking-[-0.055em] max-sm:text-left">
          {title}
        </h3>
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export function HeroStackBoard() {
  return (
    <VisualShell kicker="Panel comercial" title="Operación conectada" variant="light">
      <div className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {metricCards.map(([label, value, desc]) => (
            <div key={label} className="rounded-[1.35rem] border border-[#dce9c4] bg-white p-4 shadow-sm">
              <p className="text-[0.72rem] font-black uppercase tracking-[0.18em] text-[#6d7569]">{label}</p>
              <strong className="mt-3 block text-3xl font-black tracking-[-0.06em] text-[#101410]">{value}</strong>
              <span className="mt-2 block text-sm leading-5 text-[#66705f]">{desc}</span>
            </div>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-[#dce9c4] bg-[#fbfcf7] p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-[0.75rem] font-black uppercase tracking-[0.18em] text-[#6d7569]">Servicios activos</span>
            <span className="rounded-full bg-[#101410] px-3 py-1 text-xs font-black text-[#a9d841]">Live</span>
          </div>
          <div className="grid gap-2">
            {platformNodes.slice(0, 5).map((node) => (
              <div key={node} className="flex items-center justify-between rounded-full border border-[#e2edcc] bg-white px-4 py-3">
                <span className="font-extrabold text-[#253021]">{node}</span>
                <span className="h-3 w-3 rounded-full bg-[#9bc832] shadow-[0_0_0_8px_rgba(155,200,50,0.10)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  )
}

export function NearTecFlowMockup() {
  return <AutomationRouteBoard />
}

export function AutomationRouteBoard() {
  return (
    <VisualShell kicker="Ruta comercial" title="De visita a oportunidad">
      <div className="overflow-x-auto pb-2 [scrollbar-width:thin]">
        <div className="grid min-w-[760px] grid-cols-5 gap-3 md:min-w-0">
          {routeSteps.map((step) => (
            <article
              key={step.number}
              className="min-h-[210px] rounded-[1.45rem] border border-white/10 bg-white/[0.065] p-4 backdrop-blur"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#9bc832] text-xl font-black text-[#101410]">
                {step.number}
              </div>
              <h4 className="mt-5 break-words text-[clamp(1.1rem,1.5vw,1.55rem)] font-black leading-[1.02] tracking-[-0.045em] text-white">
                {step.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-white/72">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </VisualShell>
  )
}

export function LiveMetricBars() {
  const bars = [26, 42, 55, 72, 88, 108]

  return (
    <VisualShell kicker="Indicadores" title="Señales del pipeline" variant="light">
      <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr] md:items-end">
        <div className="grid gap-3">
          {[
            ['Leads', '1,248'],
            ['Demo agendada', '76'],
            ['Score promedio', '72/100'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1.25rem] border border-[#dce9c4] bg-white p-4 shadow-sm">
              <p className="text-[0.72rem] font-black uppercase tracking-[0.18em] text-[#6d7569]">{label}</p>
              <strong className="mt-2 block text-2xl font-black tracking-[-0.04em] text-[#101410]">{value}</strong>
            </div>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-[#dce9c4] bg-[#fbfcf7] p-5">
          <div className="flex h-40 items-end gap-3">
            {bars.map((height, index) => (
              <span
                key={height}
                className="w-8 rounded-full bg-gradient-to-t from-[#172018] to-[#a9d841] shadow-[0_12px_22px_rgba(65,90,25,0.14)]"
                style={{ height, animation: `metricRise 1.8s ease ${index * 0.08}s infinite alternate` }}
              />
            ))}
          </div>
          <p className="mt-4 text-sm font-bold text-[#66705f]">Actividad, prioridad e intención comercial.</p>
        </div>
      </div>
    </VisualShell>
  )
}

export function AutomationSignalBoard() {
  return (
    <VisualShell kicker="Automatización" title="Leads con siguiente paso claro">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ['Nuevo lead', 'Captura desde web, campañas o WhatsApp.'],
          ['Filtro automático', 'Detecta necesidad, urgencia y servicio.'],
          ['Asignación', 'Llega al canal o asesor correcto.'],
          ['Seguimiento', 'Activa recordatorio, agenda o propuesta.'],
        ].map(([title, text], index) => (
          <article key={title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.065] p-5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#9bc832] text-sm font-black text-[#101410]">
              {index + 1}
            </span>
            <h4 className="mt-5 text-xl font-black tracking-[-0.04em] text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function PlatformDeepBoard() {
  return (
    <VisualShell kicker="Ecosistema" title="Capas que trabajan juntas" variant="light">
      <div className="grid gap-3 sm:grid-cols-2">
        {platformNodes.map((node, index) => (
          <div key={node} className="rounded-[1.3rem] border border-[#dce9c4] bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#edf8d7] text-sm font-black text-[#66841f]">
                {index + 1}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#9bc832]" />
            </div>
            <h4 className="text-xl font-black tracking-[-0.045em] text-[#101410]">{node}</h4>
            <p className="mt-2 text-sm leading-6 text-[#66705f]">Una capa conectada para captar, operar o dar seguimiento.</p>
          </div>
        ))}
      </div>
    </VisualShell>
  )
}

export function ResourcePulsePanel() {
  return (
    <VisualShell kicker="Recursos" title="Contenido que atrae leads">
      <div className="grid gap-3">
        {[
          ['Guías', 'Educación para prospectos que aún comparan opciones.'],
          ['Noticias', 'Cambios digitales, operación, nube y automatización.'],
          ['Checklist', 'Material descargable para captación y nurturing.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[1.2rem] border border-white/10 bg-white/[0.065] p-4">
            <h4 className="text-lg font-black tracking-[-0.035em] text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
          </div>
        ))}
      </div>
    </VisualShell>
  )
}

export function WebConversionBoard() {
  return (
    <VisualShell kicker="Diseño web" title="Experiencia lista para vender" variant="light">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ['Claridad', 'La oferta se entiende rápido.'],
          ['Conversión', 'CTAs visibles y rutas simples.'],
          ['Seguimiento', 'Formularios conectados a ventas.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-[1.25rem] border border-[#dce9c4] bg-white p-4">
            <h4 className="text-xl font-black tracking-[-0.04em] text-[#101410]">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-[#66705f]">{text}</p>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <VisualShell kicker="Emailing" title="Campañas con mejor seguimiento">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ['Segmentación', 'Contactos agrupados por intención.'],
          ['Secuencias', 'Mensajes para madurar prospectos.'],
          ['Medición', 'Clics, aperturas y avance comercial.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.065] p-4">
            <h4 className="text-xl font-black tracking-[-0.04em] text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
          </article>
        ))}
      </div>
    </VisualShell>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <VisualShell kicker="Infraestructura" title="Base estable para operar" variant="light">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dce9c4] bg-[#fbfcf7] p-5">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(126,160,54,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(126,160,54,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative grid gap-4 sm:grid-cols-3">
          {[
            ['Hosting', 'Sitios y servicios alojados.'],
            ['VPS / Cloud', 'Capacidad para crecer.'],
            ['Correo', 'Comunicación corporativa.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[1.2rem] border border-[#dce9c4] bg-white/90 p-4">
              <span className="mb-4 block h-3 w-3 rounded-full bg-[#9bc832] shadow-[0_0_0_8px_rgba(155,200,50,0.12)]" />
              <h4 className="text-xl font-black tracking-[-0.04em] text-[#101410]">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-[#66705f]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </VisualShell>
  )
}
