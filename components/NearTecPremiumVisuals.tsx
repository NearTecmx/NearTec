const flowStages = [
  {
    step: '01',
    title: 'Atracción',
    text: 'El prospecto llega desde sitio, pauta, WhatsApp o contenido.',
  },
  {
    step: '02',
    title: 'Filtro',
    text: 'Neary AI etiqueta la intención y manda el lead al carril correcto.',
  },
  {
    step: '03',
    title: 'Diagnóstico',
    text: 'Se aclara qué conviene comprar y qué no.',
  },
  {
    step: '04',
    title: 'Demo o cotización',
    text: 'El prospecto recibe una ruta clara para decidir.',
  },
  {
    step: '05',
    title: 'Cierre',
    text: 'La venta entra con contexto y menos fricción.',
  },
]

const metricBars = [
  { label: 'Leads captados', value: 86, meta: 'Volumen inicial y remarketing' },
  { label: 'Leads calificados', value: 64, meta: 'Filtro por dolor, prioridad y tamaño' },
  { label: 'Demos / reuniones', value: 46, meta: 'Interés real con siguiente paso claro' },
  { label: 'Cierres potenciales', value: 28, meta: 'Venta defendible, no ruido' },
]

function SectionTitle({
  badge,
  title,
  copy,
}: {
  badge: string
  title: string
  copy: string
}) {
  return (
    <div className="mb-6">
      <span className="nt-badge nt-badge--soft">{badge}</span>
      <h3 className="mt-4 text-[1.55rem] font-black leading-[1.02] text-white md:text-[1.9rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{copy}</p>
    </div>
  )
}

export function HeroStackBoard() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-glow tech-glow--one" />
      <div className="tech-glow tech-glow--two" />
      <div className="tech-scan" />

      <div className="relative z-10 grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <SectionTitle
            badge="Ecosistema NearTec"
            title="Una sola operación para vender, operar y sostener tu empresa."
            copy="Sitio web, seguimiento comercial, punto de venta, infraestructura y capa fiscal conectados en una misma ruta."
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ['Sitio + oferta', 'Explica qué vendes y empuja al siguiente paso.'],
              ['Operación diaria', 'Caja, inventario, reportes y control de sucursales.'],
              ['Infraestructura', 'Hosting, VPS, correo, respaldo y continuidad.'],
            ].map(([title, text]) => (
              <article
                key={title}
                className="float-card rounded-[24px] border border-[#2a3520] bg-[rgba(8,12,10,0.78)] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.26)]"
              >
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#9ac43b]">{title}</p>
                <p className="mt-3 text-sm leading-7 text-white/72">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[26px] border border-[#27311e] bg-[rgba(8,12,10,0.82)] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.26)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/58">Ruta activa</p>
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#9ac43b] shadow-[0_0_18px_rgba(154,196,59,0.86)]" />
            </div>

            <div className="grid gap-3">
              {[
                ['Lead detectado', 'Sitio web / pauta / WhatsApp'],
                ['Servicio correcto', 'Sitio, CompuNegocio, automatización o infraestructura'],
                ['Salida comercial', 'Demo, cotización o propuesta'],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="relative overflow-hidden rounded-[20px] border border-[#26311d] bg-[#0a0f0c] px-4 py-3"
                >
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-[#9ac43b]" />
                  <p className="text-sm font-black text-white">{title}</p>
                  <p className="mt-1 text-xs leading-6 text-white/62">{text}</p>
                  <span className="mt-3 inline-flex rounded-full border border-[#2e3a25] bg-[#101612] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#9ac43b]">
                    paso {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['+12 años', 'trayectoria pública'],
              ['PAC + stack', 'ventaja de ecosistema'],
              ['Retail + B2B', 'dos frentes reales'],
              ['Demo + cotización', 'salida comercial'],
            ].map(([number, text], index) => (
              <div
                key={number}
                className={`rounded-[22px] border border-[#29341f] bg-[rgba(10,15,12,0.76)] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.2)] float-card delay-${(index % 4) + 1}`}
              >
                <p className="text-2xl font-black text-[#9ac43b]">{number}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function NearTecFlowMockup() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-glow tech-glow--three" />
      <div className="route-beam" />

      <div className="relative z-10">
        <SectionTitle
          badge="Ruta comercial"
          title="Así entra un lead. Así se convierte en venta."
          copy="Cada bloque indica qué pasa, para qué sirve y qué fricción elimina."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          {flowStages.map((item) => (
            <article
              key={item.step}
              className="route-stage rounded-[24px] border border-[#27311e] bg-[rgba(8,12,10,0.82)] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
            >
              <span className="inline-flex rounded-full border border-[#334125] bg-[#121911] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#9ac43b]">
                {item.step}
              </span>
              <h4 className="mt-4 text-[1.02rem] font-black text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-[#27311e] bg-[rgba(8,12,10,0.86)] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.22)]">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/58">Qué indica este tablero</p>
              <p className="mt-3 text-base font-black text-white">
                La meta no es traer tráfico. La meta es mover tráfico con intención hacia demo, cotización o cierre.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['Qué es', 'Embudo comercial visible'],
                ['Para qué sirve', 'Acelerar respuesta y cierre'],
                ['Qué problema resuelve', 'Leads perdidos y mensajes sin seguimiento'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-[#2a3520] bg-[#0b110d] p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#9ac43b]">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LiveMetricBars() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-scan tech-scan--soft" />

      <div className="relative z-10">
        <SectionTitle
          badge="Embudo visible"
          title="Una gráfica hecha para ventas, no para adornar."
          copy="Aquí se ve qué entra, qué se califica, qué pasa a demo y qué sí tiene potencial de cierre."
        />

        <div className="space-y-4">
          {metricBars.map((item, index) => (
            <div key={item.label} className="rounded-[24px] border border-[#2a3520] bg-[rgba(8,12,10,0.82)] p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-white">{item.label}</p>
                  <p className="text-xs leading-6 text-white/58">{item.meta}</p>
                </div>
                <span className="text-sm font-black text-[#9ac43b]">{item.value}%</span>
              </div>
              <div className="metric-bar">
                <span
                  className={`metric-bar__fill metric-bar__fill--${(index % 4) + 1}`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AutomationSignalBoard() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-glow tech-glow--two" />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="orbit-shell">
          <div className="orbit-ring orbit-ring--one" />
          <div className="orbit-ring orbit-ring--two" />
          <div className="orbit-ring orbit-ring--three" />
          <div className="orbit-core">Neary AI</div>
          <span className="orbit-node orbit-node--a">Lead</span>
          <span className="orbit-node orbit-node--b">Urgente</span>
          <span className="orbit-node orbit-node--c">Demo</span>
          <span className="orbit-node orbit-node--d">Seguimiento</span>
        </div>

        <div>
          <SectionTitle
            badge="Neary AI"
            title="Clasifica, prioriza y empuja el lead al canal correcto."
            copy="Ya no debe quedarse todo en un buzón genérico. Esta capa existe para decidir qué requiere demo, qué requiere cotización y qué solo necesita seguimiento."
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ['Qué es', 'Filtro comercial con IA'],
              ['Para qué sirve', 'Responder más rápido'],
              ['Qué indica', 'Prioridad, intención y siguiente paso'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[20px] border border-[#2a3520] bg-[#0b110d] p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#9ac43b]">{title}</p>
                <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CompuNegocioControlBoard() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-scan" />

      <div className="relative z-10">
        <SectionTitle
          badge="CompuNegocio"
          title="Controla caja, inventario y operación diaria sin improvisar."
          copy="Este panel representa lo que el cliente compra: caja ágil, inventario visible y estaciones conectadas."
        />

        <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[26px] border border-[#283320] bg-[#0a0f0c] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/58">Caja / ticket</p>
            <div className="mt-4 rounded-[22px] border border-[#24301b] bg-[#08100a] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm font-black text-white">Venta del día</span>
                <span className="rounded-full border border-[#314026] bg-[#121911] px-3 py-1 text-xs font-black text-[#9ac43b]">
                  Ticket 0148
                </span>
              </div>
              <div className="space-y-2 text-sm text-white/72">
                <div className="flex items-center justify-between"><span>Mostrador</span><span>$ 12,480</span></div>
                <div className="flex items-center justify-between"><span>Servicios</span><span>$ 3,240</span></div>
                <div className="flex items-center justify-between"><span>Tarjeta</span><span>61%</span></div>
                <div className="flex items-center justify-between"><span>Efectivo</span><span>39%</span></div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[26px] border border-[#283320] bg-[#0a0f0c] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/58">Inventario</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ['Stock alto', '68%'],
                  ['Reposición', '21%'],
                  ['Crítico', '11%'],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-[20px] border border-[#24301b] bg-[#08100a] p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/56">{title}</p>
                    <p className="mt-3 text-2xl font-black text-[#9ac43b]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] border border-[#283320] bg-[#0a0f0c] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/58">Estaciones activas</p>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {['Caja 1', 'Caja 2', 'Sucursal A', 'Sucursal B'].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[18px] border border-[#24301b] bg-[#08100a] p-3 text-center float-card delay-${(index % 4) + 1}`}
                  >
                    <span className="mx-auto mb-2 inline-flex h-3 w-3 rounded-full bg-[#9ac43b] shadow-[0_0_14px_rgba(154,196,59,0.8)]" />
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/66">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PlatformDeepBoard() {
  const layers = [
    'Presencia digital',
    'Captación y contenido',
    'CRM y seguimiento',
    'Operación y punto de venta',
    'Infraestructura y continuidad',
    'Capa fiscal / iTimbre',
  ]

  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-glow tech-glow--one" />

      <div className="relative z-10">
        <SectionTitle
          badge="Arquitectura"
          title="Capas distintas. Una sola lógica de negocio."
          copy="Este mapa sí indica qué compone la plataforma y cómo se apila de arriba hacia abajo."
        />

        <div className="space-y-3">
          {layers.map((item, index) => (
            <div
              key={item}
              className={`layer-strip rounded-[24px] border border-[#29341f] bg-[rgba(8,12,10,0.82)] px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.22)] delay-${(index % 4) + 1}`}
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#334125] bg-[#121911] text-xs font-black tracking-[0.14em] text-[#9ac43b]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-white">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResourcePulsePanel() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="pulse-lines" />

      <div className="relative z-10">
        <SectionTitle
          badge="Contenido y posicionamiento"
          title="Contenido que atrae tráfico y empuja a contacto."
          copy="No es un blog por tener blog. Es una capa para traer búsqueda, responder objeciones y activar leads."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Noticias fiscales',
            'Casos por industria',
            'Guías para developers',
            'Comparativas de solución',
          ].map((item) => (
            <div
              key={item}
              className="rounded-[22px] border border-[#29341f] bg-[rgba(8,12,10,0.82)] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
            >
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#9ac43b]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InfrastructurePulseBoard() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-glow tech-glow--three" />

      <div className="relative z-10">
        <SectionTitle
          badge="Infraestructura"
          title="La base técnica que evita lentitud, caídas y correos improvisados."
          copy="Este mapa representa hosting, VPS, correo, respaldo y continuidad. No es decoración: es la columna vertebral."
        />

        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className={`server-node rounded-[20px] border border-[#2a3520] bg-[#0a0f0c] p-4 text-center delay-${(index % 4) + 1}`}
              >
                <span className="mx-auto mb-3 inline-flex h-3 w-3 rounded-full bg-[#9ac43b] shadow-[0_0_14px_rgba(154,196,59,0.82)]" />
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/64">Node {index + 1}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3">
            {[
              ['Uptime objetivo', '99.9%'],
              ['Respaldo', 'Automático'],
              ['Correo corporativo', 'Dominio propio'],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-[22px] border border-[#2a3520] bg-[rgba(8,12,10,0.82)] p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/58">{title}</p>
                <p className="mt-3 text-2xl font-black text-[#9ac43b]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function WebConversionBoard() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-scan" />

      <div className="relative z-10">
        <SectionTitle
          badge="Sitio web"
          title="Un diseño que explica, empuja y convierte."
          copy="Este mockup marca las zonas que sí deben vender: propuesta, CTA, prueba social y salida a contacto."
        />

        <div className="rounded-[28px] border border-[#29341f] bg-[#0a0f0c] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
          <div className="rounded-[22px] border border-[#24301b] bg-[#071009] p-4">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#9ac43b]" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-3">
                <div className="h-5 w-32 rounded-full bg-white/10" />
                <div className="h-10 w-full max-w-[420px] rounded-[16px] bg-white/12" />
                <div className="h-4 w-full max-w-[380px] rounded-full bg-white/8" />
                <div className="h-4 w-full max-w-[340px] rounded-full bg-white/8" />
                <div className="mt-4 flex gap-3">
                  <div className="h-11 w-36 rounded-full bg-[#9ac43b]" />
                  <div className="h-11 w-28 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="relative min-h-[220px] rounded-[24px] border border-[#24301b] bg-[radial-gradient(circle_at_center,rgba(154,196,59,0.16),transparent_64%)]">
                <span className="web-hotspot web-hotspot--a">Hook</span>
                <span className="web-hotspot web-hotspot--b">CTA</span>
                <span className="web-hotspot web-hotspot--c">Prueba</span>
                <span className="web-hotspot web-hotspot--d">Conversión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EmailingPerformanceBoard() {
  return (
    <section className="premium-board premium-board--dark">
      <div className="tech-grid" />
      <div className="tech-glow tech-glow--two" />

      <div className="relative z-10">
        <SectionTitle
          badge="Emailing"
          title="Secuencias que acompañan la venta y reactivan oportunidades."
          copy="Este panel representa una secuencia real: envío, apertura, clic y respuesta."
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-3">
            {['Bienvenida', 'Seguimiento', 'Reactivación', 'Oferta'].map((item, index) => (
              <div
                key={item}
                className={`email-step rounded-[22px] border border-[#29341f] bg-[#0a0f0c] px-4 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.22)] delay-${(index % 4) + 1}`}
              >
                <p className="text-sm font-black uppercase tracking-[0.12em] text-white">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ['Apertura', '42%'],
              ['Clic', '19%'],
              ['Respuesta', '8%'],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-[22px] border border-[#29341f] bg-[rgba(8,12,10,0.82)] p-4 text-center"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/58">{title}</p>
                <p className="mt-4 text-2xl font-black text-[#9ac43b]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}