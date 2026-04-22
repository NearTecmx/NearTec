'use client'

import { useMemo, useState } from 'react'
import {
  calculateNearTecQuote,
  CONTACT,
  formatMoney,
  SERVICE_OPTIONS,
  TIMBRES_PACKAGES,
  type BillingCycle,
  type CloudPlan,
  type ServiceFocus,
} from '@/lib/neartec-pricing'

type BusinessType =
  | 'ecommerce'
  | 'servicios'
  | 'industria'
  | 'educacion'
  | 'salud'
  | 'otro'

type ChannelType = 'web' | 'whatsapp' | 'sucursales' | 'marketplaces' | 'ninguno'
type ProblemType = 'seguimiento' | 'operacion' | 'infraestructura' | 'ventas' | 'fiscal'
type ToolType = 'crm' | 'sitio' | 'email' | 'pos' | 'ninguno'
type PriorityType = 'rapidez' | 'control' | 'automatizacion' | 'escalabilidad'

const BUSINESS_OPTIONS: Array<{ value: BusinessType; label: string; hint: string }> = [
  { value: 'ecommerce', label: 'Comercio electrónico', hint: 'Vendemos productos o servicios en línea.' },
  { value: 'servicios', label: 'Servicios profesionales', hint: 'Agencias, consultoras, despachos y servicios.' },
  { value: 'industria', label: 'Manufactura / industria', hint: 'Producción, distribución o ensamblaje.' },
  { value: 'educacion', label: 'Educación', hint: 'Escuelas, cursos, academias o e-learning.' },
  { value: 'salud', label: 'Salud', hint: 'Clínicas, consultorios, hospitales o afines.' },
  { value: 'otro', label: 'Otro', hint: 'Otro tipo de negocio.' },
]

const CHANNEL_OPTIONS: Array<{ value: ChannelType; label: string }> = [
  { value: 'web', label: 'Sitio web' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'sucursales', label: 'Sucursales / mostrador' },
  { value: 'marketplaces', label: 'Marketplaces' },
  { value: 'ninguno', label: 'Aún no tengo canal claro' },
]

const PROBLEM_OPTIONS: Array<{ value: ProblemType; label: string }> = [
  { value: 'seguimiento', label: 'Seguimiento comercial lento' },
  { value: 'operacion', label: 'Operación dispersa' },
  { value: 'infraestructura', label: 'Infraestructura inestable' },
  { value: 'ventas', label: 'Sitio o captación floja' },
  { value: 'fiscal', label: 'Facturación / control fiscal' },
]

const TOOL_OPTIONS: Array<{ value: ToolType; label: string }> = [
  { value: 'crm', label: 'CRM' },
  { value: 'sitio', label: 'Sitio web' },
  { value: 'email', label: 'Email marketing' },
  { value: 'pos', label: 'Punto de venta' },
  { value: 'ninguno', label: 'Ninguno aún' },
]

const PRIORITY_OPTIONS: Array<{ value: PriorityType; label: string }> = [
  { value: 'rapidez', label: 'Implementar rápido' },
  { value: 'control', label: 'Tener más control' },
  { value: 'automatizacion', label: 'Automatizar más' },
  { value: 'escalabilidad', label: 'Escalar sin rearmar todo' },
]

function openWhatsApp(message: string) {
  const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

function toggleValue<T extends string>(current: T[], value: T) {
  return current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
}

export default function CotizadorNearTec() {
  const [step, setStep] = useState(1)
  const [businessType, setBusinessType] = useState<BusinessType>('ecommerce')
  const [teamSize, setTeamSize] = useState(11)
  const [channels, setChannels] = useState<ChannelType[]>(['web', 'whatsapp'])
  const [problems, setProblems] = useState<ProblemType[]>(['seguimiento'])
  const [tools, setTools] = useState<ToolType[]>(['ninguno'])
  const [priority, setPriority] = useState<PriorityType>('automatizacion')
  const [serviceFocus, setServiceFocus] = useState<ServiceFocus>('compunegocio')
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [seats, setSeats] = useState(3)
  const [includeImplementation, setIncludeImplementation] = useState(true)
  const [cloudPlan, setCloudPlan] = useState<CloudPlan>('none')
  const [supportHours, setSupportHours] = useState(0)
  const [developmentHours, setDevelopmentHours] = useState(0)
  const [timbresPackage, setTimbresPackage] = useState(0)
  const [customNeeds, setCustomNeeds] = useState('')

  const quote = useMemo(
    () =>
      calculateNearTecQuote({
        serviceFocus,
        seats,
        billingCycle,
        includeImplementation,
        supportHours,
        developmentHours,
        cloudPlan,
        timbresPackage,
        customNeeds,
      }),
    [
      billingCycle,
      cloudPlan,
      customNeeds,
      developmentHours,
      includeImplementation,
      seats,
      serviceFocus,
      supportHours,
      timbresPackage,
    ],
  )

  const diagnosis = useMemo(() => {
    let score = 0

    if (teamSize >= 51) score += 26
    else if (teamSize >= 11) score += 18
    else score += 10

    score += channels.filter((item) => item !== 'ninguno').length * 6
    score += problems.length * 7
    score += priority === 'automatizacion' || priority === 'escalabilidad' ? 10 : 6
    score += tools.includes('ninguno') ? 4 : 10
    score += serviceFocus === 'compunegocio' ? 8 : 6
    score += cloudPlan !== 'none' ? 6 : 0
    score += seats >= 4 ? 8 : 4
    score += timbresPackage >= 1000 ? 6 : 0

    const leadBand = score >= 78 ? 'Lead de alta prioridad' : score >= 56 ? 'Lead de prioridad media' : 'Lead exploratorio'

    const stack = [
      'Diseño Web / Landing clara',
      'Automatización & CRM',
      'Dashboard comercial',
    ]

    if (channels.includes('sucursales') || serviceFocus === 'compunegocio') {
      stack.push('CompuNegocio / operación por estaciones')
    }
    if (cloudPlan !== 'none' || problems.includes('infraestructura')) {
      stack.push('Infraestructura cloud + continuidad')
    }
    if (problems.includes('fiscal') || timbresPackage > 0) {
      stack.push('Conexión fiscal con iTimbre')
    }

    const priority1 =
      problems.includes('seguimiento') || priority === 'automatizacion'
        ? 'Automatizar marketing y seguimiento'
        : problems.includes('operacion')
          ? 'Ordenar operación y visibilidad'
          : problems.includes('infraestructura')
            ? 'Estabilizar infraestructura'
            : 'Clarificar captación y conversión'

    const priority2 =
      stack.includes('CompuNegocio / operación por estaciones')
        ? 'Control administrativo y KPIs operativos'
        : 'Dashboards y control de KPIs'

    const nextStep = score >= 78 ? 'Agenda con asesor' : score >= 56 ? 'Recibir propuesta guiada' : 'Revisión comercial breve'

    return {
      score,
      leadBand,
      stack: Array.from(new Set(stack)),
      priority1,
      priority2,
      nextStep,
    }
  }, [channels, cloudPlan, priority, problems, seats, serviceFocus, teamSize, timbresPackage, tools])

  const businessLabel = BUSINESS_OPTIONS.find((item) => item.value === businessType)?.label ?? 'Negocio'
  const serviceLabel = SERVICE_OPTIONS.find((item) => item.value === serviceFocus)?.label ?? 'NearTec'

  const whatsappMessage = useMemo(() => {
    return [
      'Hola, quiero continuar mi diagnóstico con NearTec.',
      '',
      `Tipo de negocio: ${businessLabel}`,
      `Equipo aproximado: ${teamSize}`,
      `Canales: ${channels.join(', ')}`,
      `Problemas: ${problems.join(', ')}`,
      `Herramientas actuales: ${tools.join(', ')}`,
      `Prioridad: ${priority}`,
      `Servicio base: ${serviceLabel}`,
      `Licencias/estaciones: ${seats}`,
      `Ciclo: ${billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
      `Plan cloud: ${cloudPlan}`,
      `Lead band: ${diagnosis.leadBand}`,
      `Score: ${diagnosis.score}`,
      `Prioridad 1: ${diagnosis.priority1}`,
      `Prioridad 2: ${diagnosis.priority2}`,
      `Stack sugerido: ${diagnosis.stack.join(' | ')}`,
      `Recurrente estimado MXN: ${quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? 'Sin recurrente'}`,
      `Cargo único MXN: ${quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : 'Sin cargo único'}`,
      `Cargo USD mensual: ${quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : 'Sin cargo USD'}`,
      customNeeds.trim() ? `Detalle adicional: ${customNeeds.trim()}` : '',
      '',
      'Quiero continuar con un asesor.',
    ]
      .filter(Boolean)
      .join('\n')
  }, [
    billingCycle,
    businessLabel,
    channels,
    cloudPlan,
    customNeeds,
    diagnosis.leadBand,
    diagnosis.priority1,
    diagnosis.priority2,
    diagnosis.score,
    diagnosis.stack,
    priority,
    problems,
    quote.annualRecurringLabel,
    quote.monthlyRecurringLabel,
    quote.monthlyUsd,
    quote.oneTimeMxn,
    seats,
    serviceLabel,
    teamSize,
    tools,
  ])

  const stepLabels = ['Tipo de negocio', 'Tamaño y canales', 'Problemas actuales', 'Herramientas que ya usas', 'Prioridades']

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-[rgba(12,75,255,0.1)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8">
          <span className="nt-badge nt-badge--soft">Cotizador inteligente & contacto</span>
          <h2 className="mt-5 text-3xl font-black leading-[1] text-[var(--brand-ink)] sm:text-[3rem]">
            Te decimos qué stack te conviene antes de que pierdas <span className="text-[var(--brand-green)]">tiempo y dinero.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[var(--brand-muted)]">
            Responde unas preguntas y recibe una ruta sugerida según tu empresa, etapa y operación actual.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={() => setStep(1)} className="btn-primary">
              Comenzar diagnóstico
            </button>
            <button type="button" onClick={() => openWhatsApp(whatsappMessage)} className="btn-secondary">
              Hablar con asesor
            </button>
          </div>
        </div>

        <div className="rounded-[32px] border border-[rgba(12,75,255,0.1)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <strong className="text-[var(--brand-ink)]">Ejemplo de diagnóstico</strong>
            <span className="rounded-full bg-[rgba(24,209,195,0.1)] px-3 py-1 text-xs font-bold text-[#0c8b82]">
              ROI desde 3 meses
            </span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[var(--brand-surface)] p-4">
              <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Lead band</small>
              <strong className="mt-2 block text-xl text-[var(--brand-ink)]">{diagnosis.leadBand}</strong>
            </div>
            <div className="rounded-3xl bg-[var(--brand-surface)] p-4">
              <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Score</small>
              <strong className="mt-2 block text-xl text-[var(--brand-ink)]">{diagnosis.score}/100</strong>
            </div>
          </div>
          <div className="mt-5 rounded-3xl bg-[var(--brand-surface)] p-5">
            <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Stack sugerido</small>
            <div className="mt-3 flex flex-wrap gap-2">
              {diagnosis.stack.map((item) => (
                <span key={item} className="nt-soft-chip">{item}</span>
              ))}
            </div>
          </div>
          <div className="mt-5 rounded-3xl bg-[var(--brand-surface)] p-5">
            <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Estimado orientativo</small>
            <strong className="mt-2 block text-2xl text-[var(--brand-ink)]">
              {quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? formatMoney(quote.oneTimeMxn, 'MXN')}
            </strong>
            {quote.monthlyUsd > 0 ? (
              <p className="mt-2 text-sm text-[var(--brand-muted)]">Más {formatMoney(quote.monthlyUsd, 'USD')} USD mensuales por nube CN7.</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-[rgba(12,75,255,0.1)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <strong className="text-[var(--brand-ink)]">1. Cuéntanos sobre tu empresa (5 pasos)</strong>
            <p className="mt-2 text-sm text-[var(--brand-muted)]">Así clasificamos el lead y te proponemos una ruta con prioridad real.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {stepLabels.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setStep(index + 1)}
                className={`rounded-full border px-3 py-2 text-xs font-bold ${step === index + 1 ? 'border-[var(--brand-green)] bg-[rgba(12,75,255,0.08)] text-[var(--brand-green)]' : 'border-[var(--brand-line)] bg-white text-[var(--brand-muted)]'}`}
              >
                {index + 1}. {label}
              </button>
            ))}
          </div>
        </div>

        {step === 1 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {BUSINESS_OPTIONS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setBusinessType(item.value)}
                className={`rounded-[26px] border p-5 text-left transition ${businessType === item.value ? 'border-[var(--brand-green)] bg-[rgba(12,75,255,0.06)] shadow-[0_18px_50px_rgba(12,75,255,0.08)]' : 'border-[var(--brand-line)] bg-white'}`}
              >
                <strong className="block text-[var(--brand-ink)]">{item.label}</strong>
                <span className="mt-2 block text-sm leading-7 text-[var(--brand-muted)]">{item.hint}</span>
              </button>
            ))}
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <label className="nt-field">
              <span>Tamaño aproximado del equipo</span>
              <input type="number" min={1} value={teamSize} onChange={(event) => setTeamSize(Number(event.target.value) || 1)} />
            </label>
            <div className="space-y-3">
              <span className="text-sm font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Canales actuales</span>
              <div className="flex flex-wrap gap-2">
                {CHANNEL_OPTIONS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setChannels((current) => toggleValue(current, item.value))}
                    className={`rounded-full border px-4 py-3 text-sm font-bold ${channels.includes(item.value) ? 'border-[var(--brand-green)] bg-[rgba(12,75,255,0.08)] text-[var(--brand-green)]' : 'border-[var(--brand-line)] bg-white text-[var(--brand-ink)]'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="mt-8 space-y-3">
            <span className="text-sm font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Problemas principales</span>
            <div className="flex flex-wrap gap-2">
              {PROBLEM_OPTIONS.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setProblems((current) => toggleValue(current, item.value))}
                  className={`rounded-full border px-4 py-3 text-sm font-bold ${problems.includes(item.value) ? 'border-[var(--brand-green)] bg-[rgba(12,75,255,0.08)] text-[var(--brand-green)]' : 'border-[var(--brand-line)] bg-white text-[var(--brand-ink)]'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="mt-8 space-y-6">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Herramientas actuales</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {TOOL_OPTIONS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setTools((current) => toggleValue(current, item.value))}
                    className={`rounded-full border px-4 py-3 text-sm font-bold ${tools.includes(item.value) ? 'border-[var(--brand-green)] bg-[rgba(12,75,255,0.08)] text-[var(--brand-green)]' : 'border-[var(--brand-line)] bg-white text-[var(--brand-ink)]'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <label className="nt-field">
                <span>Servicio base</span>
                <select value={serviceFocus} onChange={(event) => setServiceFocus(event.target.value as ServiceFocus)}>
                  {SERVICE_OPTIONS.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </label>
              <label className="nt-field">
                <span>Licencias / estaciones</span>
                <input type="number" min={0} value={seats} onChange={(event) => setSeats(Number(event.target.value) || 0)} />
              </label>
              <label className="nt-field">
                <span>Plan cloud</span>
                <select value={cloudPlan} onChange={(event) => setCloudPlan(event.target.value as CloudPlan)}>
                  <option value="none">Sin CN7</option>
                  <option value="cn7_backup">CN7 con respaldo</option>
                  <option value="cn7_hosted">CN7 hospedado</option>
                </select>
              </label>
              <label className="nt-field">
                <span>Timbres</span>
                <select value={timbresPackage} onChange={(event) => setTimbresPackage(Number(event.target.value) || 0)}>
                  {TIMBRES_PACKAGES.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <span className="text-sm font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Prioridad</span>
              <div className="flex flex-wrap gap-2">
                {PRIORITY_OPTIONS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setPriority(item.value)}
                    className={`rounded-full border px-4 py-3 text-sm font-bold ${priority === item.value ? 'border-[var(--brand-green)] bg-[rgba(12,75,255,0.08)] text-[var(--brand-green)]' : 'border-[var(--brand-line)] bg-white text-[var(--brand-ink)]'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="nt-field">
                  <span>Ciclo</span>
                  <div className="nt-toggle">
                    <button type="button" onClick={() => setBillingCycle('monthly')} className={billingCycle === 'monthly' ? 'is-active' : ''}>Mensual</button>
                    <button type="button" onClick={() => setBillingCycle('annual')} className={billingCycle === 'annual' ? 'is-active' : ''}>Anual</button>
                  </div>
                </label>
                <label className="nt-field">
                  <span>Implementación</span>
                  <div className="mt-3 flex items-center gap-3 rounded-full border border-[var(--brand-line)] px-4 py-3">
                    <input type="checkbox" checked={includeImplementation} onChange={(event) => setIncludeImplementation(event.target.checked)} />
                    <span className="text-sm text-[var(--brand-muted)]">Incluir implementación inicial</span>
                  </div>
                </label>
              </div>
            </div>

            <label className="nt-field">
              <span>Necesidad adicional</span>
              <textarea
                rows={6}
                value={customNeeds}
                onChange={(event) => setCustomNeeds(event.target.value.slice(0, 280))}
                placeholder="Describe tu operación actual, restricciones o integraciones importantes..."
              />
            </label>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} className="btn-secondary">
            Atrás
          </button>
          <button type="button" onClick={() => setStep((current) => Math.min(5, current + 1))} className="btn-primary">
            Continuar
          </button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-[rgba(12,75,255,0.1)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <strong className="text-[var(--brand-ink)]">2. Tu diagnóstico</strong>
              <p className="mt-2 text-sm text-[var(--brand-muted)]">Basado en tus respuestas y en la lógica comercial del ecosistema.</p>
            </div>
            <span className="rounded-full bg-[rgba(12,75,255,0.08)] px-3 py-1 text-xs font-bold text-[var(--brand-green)]">Basado en tus respuestas</span>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] bg-[var(--brand-surface)] p-5">
              <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Stack sugerido para tu negocio</small>
              <div className="mt-4 flex flex-wrap gap-2">
                {diagnosis.stack.map((item) => (
                  <span key={item} className="nt-soft-chip">{item}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[28px] bg-[var(--brand-surface)] p-5">
                <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Prioridad 1</small>
                <strong className="mt-2 block text-[var(--brand-ink)]">{diagnosis.priority1}</strong>
              </div>
              <div className="rounded-[28px] bg-[var(--brand-surface)] p-5">
                <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Prioridad 2</small>
                <strong className="mt-2 block text-[var(--brand-ink)]">{diagnosis.priority2}</strong>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] bg-[var(--brand-surface)] p-5">
              <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Estimado orientativo</small>
              <strong className="mt-2 block text-2xl text-[var(--brand-ink)]">{quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? 'Revisión con asesor'}</strong>
              <p className="mt-2 text-sm text-[var(--brand-muted)]">Siguiente mejor paso: {diagnosis.nextStep}</p>
            </div>
            <div className="rounded-[28px] bg-[var(--brand-surface)] p-5">
              <small className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">Cargo único estimado</small>
              <strong className="mt-2 block text-2xl text-[var(--brand-ink)]">{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : 'A revisar'}</strong>
              <p className="mt-2 text-sm text-[var(--brand-muted)]">Incluye implementación, ajustes y extras seleccionados.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={() => openWhatsApp(whatsappMessage)} className="btn-primary">
              Recibir propuesta
            </button>
            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20agendar%20una%20revisi%C3%B3n%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Agendar revisión
            </a>
          </div>
        </div>

        <div className="rounded-[32px] border border-[rgba(12,75,255,0.1)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8">
          <strong className="text-[var(--brand-ink)]">3. ¿Cómo podemos ayudarte hoy?</strong>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['Quiero una propuesta', 'Recibe una propuesta personalizada para tu empresa.'],
              ['Quiero una demo', 'Ver cómo funciona en vivo con un experto.'],
              ['Quiero soporte', 'Necesito ayuda con una solución actual.'],
              ['Quiero revisar infraestructura', 'Auditoría o validación de mi entorno actual.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[26px] border border-[var(--brand-line)] p-5">
                <strong className="block text-[var(--brand-ink)]">{title}</strong>
                <span className="mt-2 block text-sm leading-7 text-[var(--brand-muted)]">{body}</span>
              </div>
            ))}
          </div>

          <strong className="mt-8 block text-[var(--brand-ink)]">O elige un canal directo</strong>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <a href="https://wa.me/526631656898?text=Hola,%20quiero%20hablar%20con%20NearTec." target="_blank" rel="noreferrer" className="rounded-[26px] border border-[var(--brand-line)] p-5">
              <strong className="block text-[var(--brand-ink)]">WhatsApp</strong>
              <span className="mt-2 block text-sm leading-7 text-[var(--brand-muted)]">Respuesta rápida para ventas, propuesta o revisión.</span>
            </a>
            <a href="mailto:info@neartec.com" className="rounded-[26px] border border-[var(--brand-line)] p-5">
              <strong className="block text-[var(--brand-ink)]">Correo</strong>
              <span className="mt-2 block text-sm leading-7 text-[var(--brand-muted)]">Para contexto, requerimientos y seguimiento formal.</span>
            </a>
            <a href="tel:6631656898" className="rounded-[26px] border border-[var(--brand-line)] p-5">
              <strong className="block text-[var(--brand-ink)]">Teléfono</strong>
              <span className="mt-2 block text-sm leading-7 text-[var(--brand-muted)]">Atención directa para avanzar más rápido.</span>
            </a>
            <button type="button" onClick={() => setStep(1)} className="rounded-[26px] border border-[var(--brand-line)] p-5 text-left">
              <strong className="block text-[var(--brand-ink)]">Reiniciar diagnóstico</strong>
              <span className="mt-2 block text-sm leading-7 text-[var(--brand-muted)]">Vuelve a ajustar inputs y compara escenarios.</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
