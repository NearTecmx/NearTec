import { compuPricing, cn7Pricing, stampPackages } from './neartec-data'

export type QuoteInput = {
  company: string
  name: string
  phone: string
  email: string
  intent: 'web' | 'crm' | 'compunegocio' | 'cn7' | 'suite'
  users: number
  annual: boolean
  cn7: 'none' | 'backup' | 'hosted' | 'backup_only'
  implementation: boolean
  supportHours: number
  developmentHours: number
  stamps: number
  urgency: 'now' | 'month' | 'exploring'
  notes: string
}

export const defaultQuote: QuoteInput = {
  company: '', name: '', phone: '', email: '', intent: 'suite', users: 3, annual: false,
  cn7: 'none', implementation: true, supportHours: 0, developmentHours: 0, stamps: 0,
  urgency: 'month', notes: ''
}

export function getCompuRate(users: number) {
  if (users <= 3) return compuPricing[0]
  if (users <= 8) return compuPricing[1]
  return compuPricing[2]
}

export function scoreLead(input: QuoteInput) {
  let score = 20
  if (input.intent === 'suite') score += 28
  if (input.intent === 'compunegocio') score += 24
  if (input.intent === 'crm') score += 20
  if (input.intent === 'web') score += 16
  if (input.users >= 5) score += 14
  if (input.cn7 !== 'none') score += 14
  if (input.implementation) score += 8
  if (input.supportHours || input.developmentHours) score += 10
  if (input.stamps > 0) score += 8
  if (input.urgency === 'now') score += 16
  if (input.notes.trim().length > 25) score += 8
  const label = score >= 76 ? 'Listo para cotizar' : score >= 48 ? 'Requiere diagnóstico' : 'Explorando opciones'
  const next = score >= 76 ? 'Te conviene hablar con un asesor y cerrar alcance' : score >= 48 ? 'Revisemos tu caso por WhatsApp' : 'Aclaremos dudas y detectemos qué necesitas primero'
  return { score: Math.min(score, 100), label, next }
}

export function calculateQuote(input: QuoteInput) {
  const items: Array<{ label: string; detail: string; amount: number; currency: 'MXN' | 'USD'; frequency: string }> = []
  const includesCompu = input.intent === 'compunegocio' || input.intent === 'suite'
  if (includesCompu) {
    const rate = getCompuRate(input.users)
    items.push({ label: input.annual ? 'CompuNegocio anual' : 'CompuNegocio mensual', detail: `${input.users} estación(es) · ${rate.range}`, amount: input.annual ? rate.annual * input.users : rate.monthly * input.users, currency: 'MXN', frequency: input.annual ? 'año' : 'mes' })
  }
  if (input.implementation || input.intent === 'compunegocio') items.push({ label: 'Implementación remota base', detail: 'Instalación, CSD, logo y capacitación inicial', amount: 1500, currency: 'MXN', frequency: 'único' })
  if (input.supportHours > 0) items.push({ label: 'Soporte técnico con póliza', detail: `${input.supportHours} hora(s)`, amount: input.supportHours * 499, currency: 'MXN', frequency: 'único' })
  if (input.developmentHours > 0) items.push({ label: 'Desarrollo / ajustes con póliza', detail: `${input.developmentHours} hora(s)`, amount: input.developmentHours * 999, currency: 'MXN', frequency: 'único' })
  const stamp = stampPackages.find(s => s.qty === input.stamps)
  if (stamp) items.push({ label: `${stamp.qty} timbres CN`, detail: 'Precio no incluye IVA', amount: stamp.price, currency: 'MXN', frequency: 'único' })
  if (input.cn7 !== 'none') {
    const map = { backup: cn7Pricing[0], hosted: cn7Pricing[1], backup_only: cn7Pricing[2] } as const
    const selected = map[input.cn7]
    items.push({ label: selected.label, detail: 'Continuidad operativa', amount: selected.amount, currency: 'USD', frequency: selected.period })
  }
  const monthlyMxn = items.filter(i => i.currency === 'MXN' && i.frequency === 'mes').reduce((a,b)=>a+b.amount,0)
  const annualMxn = items.filter(i => i.currency === 'MXN' && i.frequency === 'año').reduce((a,b)=>a+b.amount,0)
  const oneTimeMxn = items.filter(i => i.currency === 'MXN' && i.frequency === 'único').reduce((a,b)=>a+b.amount,0)
  const monthlyUsd = items.filter(i => i.currency === 'USD').reduce((a,b)=>a+b.amount,0)
  return { items, monthlyMxn, annualMxn, oneTimeMxn, monthlyUsd }
}
