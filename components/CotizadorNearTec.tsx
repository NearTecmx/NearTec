'use client'

import { useMemo, useState } from 'react'
import {
  CONTACT,
  QUOTE_BASE_NOTES,
  SERVICE_OPTIONS,
  TIMBRES_PACKAGES,
  calculateNearTecQuote,
  formatMoney,
  getLeadQualification,
  getRecommendedModules,
  type BillingCycle,
  type CloudPlan,
  type NearTecQuoteInput,
  type ServiceFocus,
} from '@/lib/neartec-pricing'

const seatOptions = [1, 3, 5, 8, 12]
const supportOptions = [0, 1, 2, 4]
const developmentOptions = [0, 2, 4, 8]

const defaultInput: NearTecQuoteInput = {
  serviceFocus: 'compunegocio',
  seats: 3,
  billingCycle: 'monthly',
  includeImplementation: true,
  supportHours: 0,
  developmentHours: 0,
  cloudPlan: 'none',
  timbresPackage: 0,
  customNeeds: '',
}

function getServiceLabel(value: ServiceFocus): string {
  return SERVICE_OPTIONS.find((item) => item.value === value)?.label ?? 'Servicio'
}

export default function CotizadorNearTec() {
  const [input, setInput] = useState<NearTecQuoteInput>(defaultInput)

  const quote = useMemo(() => calculateNearTecQuote(input), [input])
  const modules = useMemo(() => getRecommendedModules(input), [input])
  const qualification = useMemo(() => getLeadQualification(input), [input])

  const whatsappText = useMemo(() => {
    return [
      'Hola, quiero continuar con NearTec.',
      '',
      `Necesidad: ${getServiceLabel(input.serviceFocus)}`,
      `Licencias / estaciones: ${input.seats}`,
      `Ciclo: ${input.billingCycle === 'monthly' ? 'Mensual' : 'Anual'}`,
      `Cloud: ${
        input.cloudPlan === 'cn7_backup'
          ? 'CN7 con respaldo'
          : input.cloudPlan === 'cn7_hosted'
            ? 'CN7 hospedado'
            : 'Sin CN7 por ahora'
      }`,
      `Implementación: ${input.includeImplementation ? 'Sí' : 'No'}`,
      `Timbres: ${TIMBRES_PACKAGES.find((item) => item.value === input.timbresPackage)?.label ?? 'Sin paquete'}`,
      `Soporte: ${input.supportHours} h`,
      `Desarrollo: ${input.developmentHours} h`,
      `Recurrencia MXN: ${quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? '—'}`,
      `Recurrencia USD: ${quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}`,
      `Cargo único MXN: ${quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}`,
      '',
      `Contexto: ${input.customNeeds || 'Sin comentarios extra.'}`,
    ].join('\n')
  }, [input, quote])

  const qualificationClass =
    qualification.tone === 'hot'
      ? 'quote-tag quote-tag--hot'
      : qualification.tone === 'warm'
        ? 'quote-tag quote-tag--warm'
        : 'quote-tag quote-tag--cool'

  return (
    <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
      <section className="quote-main">
        <div className="quote-block quote-block--compact">
          <span className="nt-badge nt-badge--soft">Cotizador inteligente</span>
          <h3 className="mt-4 text-3xl font-black text-[var(--brand-ink)] md:text-[2.15rem]">
            Entiende tu inversión antes de hablar con ventas.
          </h3>
          <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">
            Elige tu necesidad, ajusta tamaño, nube y acompañamiento. Después manda el resumen por WhatsApp.
          </p>
        </div>

        <div className="quote-block quote-block--compact">
          <p className="quote-step">1. Qué necesitas</p>
          <div className="quote-choice-grid">
            {SERVICE_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setInput((current) => ({ ...current, serviceFocus: option.value }))}
                className={`quote-service ${input.serviceFocus === option.value ? 'quote-service--active' : ''}`}
              >
                <strong>{option.label}</strong>
                <span>{option.description}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="quote-block quote-block--split quote-block--compact">
          <div>
            <p className="quote-step">2. Tamaño y ciclo</p>
            <label className="quote-label">Número de licencias / estaciones</label>
            <div className="quote-pill-row">
              {seatOptions.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setInput((current) => ({ ...current, seats: value }))}
                  className={`quote-pill ${input.seats === value ? 'quote-pill--active' : ''}`}
                >
                  {value === 12 ? '12 +' : value}
                </button>
              ))}
            </div>

            <label className="quote-label mt-6">Ciclo de pago</label>
            <div className="quote-pill-row">
              {[
                { label: 'Mensual', value: 'monthly' },
                { label: 'Anual', value: 'annual' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setInput((current) => ({ ...current, billingCycle: option.value as BillingCycle }))}
                  className={`quote-pill ${input.billingCycle === option.value ? 'quote-pill--active' : ''}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="quote-step">3. Nube</p>
            <label className="quote-label">CN7 / nube</label>
            <div className="quote-option-stack">
              {[
                { label: 'Sin CN7 por ahora', value: 'none' },
                { label: 'CN7 con respaldo — $99 USD/mes', value: 'cn7_backup' },
                { label: 'CN7 hospedado — $149 USD/mes', value: 'cn7_hosted' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setInput((current) => ({ ...current, cloudPlan: option.value as CloudPlan }))}
                  className={`quote-option ${input.cloudPlan === option.value ? 'quote-option--active' : ''}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="quote-block quote-block--compact">
          <p className="quote-step">4. Extras y acompañamiento</p>
          <label className="quote-toggle">
            <input
              type="checkbox"
              checked={input.includeImplementation}
              onChange={(event) => setInput((current) => ({ ...current, includeImplementation: event.target.checked }))}
            />
            <span>Incluir implementación base — $1,500 MXN</span>
          </label>

          <div className="quote-block__stack mt-5">
            <div>
              <label className="quote-label">Paquete de timbres</label>
              <select
                value={input.timbresPackage}
                onChange={(event) => setInput((current) => ({ ...current, timbresPackage: Number(event.target.value) }))}
                className="quote-select"
              >
                {TIMBRES_PACKAGES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} {option.priceMxn > 0 ? `— ${formatMoney(option.priceMxn, 'MXN')}` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="quote-label">Horas de soporte</label>
              <div className="quote-pill-row">
                {supportOptions.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setInput((current) => ({ ...current, supportHours: value }))}
                    className={`quote-pill ${input.supportHours === value ? 'quote-pill--active' : ''}`}
                  >
                    {value} h
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="quote-label">Horas de desarrollo</label>
              <div className="quote-pill-row">
                {developmentOptions.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setInput((current) => ({ ...current, developmentHours: value }))}
                    className={`quote-pill ${input.developmentHours === value ? 'quote-pill--active' : ''}`}
                  >
                    {value} h
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="quote-label">Cuéntanos el contexto</label>
            <textarea
              value={input.customNeeds}
              onChange={(event) => setInput((current) => ({ ...current, customNeeds: event.target.value.slice(0, 240) }))}
              placeholder="Ejemplo: tenemos varias sucursales y queremos nube, soporte y una ruta más ordenada de ventas."
              className="quote-textarea quote-textarea--short"
            />
          </div>
        </div>
      </section>

      <aside className="quote-side">
        <div className="quote-summary-card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className={qualificationClass}>{qualification.label}</span>
            <span className="nt-badge nt-badge--soft">{getServiceLabel(input.serviceFocus)}</span>
          </div>

          <h3 className="mt-5 text-3xl font-black text-[var(--brand-ink)]">Tu recomendación inicial</h3>
          <p className="mt-3 text-[15px] leading-8 text-[var(--brand-muted)]">{qualification.note}</p>

          <div className="mt-6 rounded-[24px] border border-[var(--brand-line)] bg-[var(--brand-surface)] p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[var(--brand-muted)]">Módulos sugeridos</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {modules.map((module) => (
                <span key={module} className="service-pill service-pill--soft">
                  {module}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <article className="quote-metric">
              <span>Recurrente MXN</span>
              <strong>{quote.monthlyRecurringLabel ?? quote.annualRecurringLabel ?? '—'}</strong>
            </article>
            <article className="quote-metric">
              <span>Recurrente USD</span>
              <strong>{quote.monthlyUsd > 0 ? formatMoney(quote.monthlyUsd, 'USD') : '—'}</strong>
            </article>
            <article className="quote-metric">
              <span>Cargo único</span>
              <strong>{quote.oneTimeMxn > 0 ? formatMoney(quote.oneTimeMxn, 'MXN') : '—'}</strong>
            </article>
          </div>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-[var(--brand-ink)] p-5 text-white shadow-[var(--brand-shadow-strong)]">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/55">Rangos base</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/82">
              {QUOTE_BASE_NOTES.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-primary--full"
            >
              Recibir por WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Resumen cotizador NearTec')}&body=${encodeURIComponent(whatsappText)}`}
              className="btn-secondary btn-secondary--full"
            >
              Enviar resumen
            </a>
          </div>

          <p className="mt-5 text-sm leading-7 text-[var(--brand-muted)]">{qualification.nextStep}</p>
        </div>
      </aside>
    </div>
  )
}
