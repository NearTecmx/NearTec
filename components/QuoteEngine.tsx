'use client'
import { useMemo, useState, type CSSProperties } from 'react'
import { CONTACT, money, stampPackages } from '@/lib/neartec-data'
import { calculateQuote, defaultQuote, scoreLead, type QuoteInput } from '@/lib/quote'

const intentOptions = [
  ['suite','Solución integral'], ['web','Web / landing'], ['crm','CRM / automatización'], ['compunegocio','CompuNegocio'], ['cn7','CN7 / nube']
] as const
const userOptions=[1,3,5,8,12]
const hourOptions=[0,1,2,4,8]

export default function QuoteEngine({ compact=false }: { compact?: boolean }){
  const [input,setInput]=useState<QuoteInput>(defaultQuote)
  const quote=useMemo(()=>calculateQuote(input),[input])
  const lead=useMemo(()=>scoreLead(input),[input])
  const set=<K extends keyof QuoteInput>(key:K,value:QuoteInput[K])=>setInput(v=>({...v,[key]:value}))
  const summary = `COTIZACIÓN NEARTEC
Empresa: ${input.company || 'Pendiente'}
Contacto: ${input.name || 'Pendiente'}
WhatsApp: ${input.phone || 'Pendiente'}
Correo: ${input.email || 'Pendiente'}
Intención: ${lead.label} (${lead.score}/100)
Servicio: ${input.intent}
Usuarios: ${input.users}
Recurrente MXN: ${quote.monthlyMxn? money(quote.monthlyMxn,'MXN')+'/mes' : quote.annualMxn? money(quote.annualMxn,'MXN')+'/año':'—'}
Recurrente USD: ${quote.monthlyUsd? money(quote.monthlyUsd,'USD')+'/mes':'—'}
Cargo único: ${quote.oneTimeMxn? money(quote.oneTimeMxn,'MXN'):'—'}
Notas: ${input.notes || 'Sin notas'}`
  async function submitLead(){
    await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...input, score:lead.score, leadLabel:lead.label, source:'neartec-v4-quote'})}).catch(()=>null)
  }
  function pdf(){
    const rows=quote.items.map(i=>`<tr><td>${i.label}</td><td>${i.detail}</td><td>${i.frequency}</td><td>${money(i.amount,i.currency)}</td></tr>`).join('')
    const html=`<!doctype html><html><head><meta charset="utf-8"><title>Cotización NearTec</title><style>body{font-family:Arial,sans-serif;padding:36px;color:#111814}h1{font-size:34px}.brand{color:#6ca51a;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.box{border:1px solid #dce9d0;border-radius:18px;padding:18px;margin:18px 0}table{width:100%;border-collapse:collapse}td,th{border-bottom:1px solid #dce9d0;padding:12px;text-align:left}th{background:#f2f8e9}</style></head><body><div class="brand">NearTec</div><h1>Cotización preliminar</h1><div class="box"><b>${input.company||'Empresa pendiente'}</b><br>${input.name||'Contacto pendiente'} · ${input.phone||'WhatsApp pendiente'} · ${input.email||'Correo pendiente'}<br>Lead: ${lead.label} (${lead.score}/100)</div><table><thead><tr><th>Concepto</th><th>Detalle</th><th>Tipo</th><th>Importe</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Requiere propuesta manual.</td></tr>'}</tbody></table><div class="box"><b>Resumen:</b><pre>${summary}</pre></div><p>Precios base sujetos a alcance e IVA cuando aplique.</p><script>window.print()</script></body></html>`
    const w=window.open('','_blank','width=920,height=900'); if(!w)return; w.document.open(); w.document.write(html); w.document.close()
  }
  return <section className="quote-wrap" id="cotizador">
    <div className="nt-card quote-form"><span className="eyebrow">Cotizador comercial</span><h2 className="text-4xl font-black tracking-[-.05em] mt-4 mb-3">Filtra, calcula y manda contexto al asesor.</h2><p className="text-near-mute mb-6">Solo se suma lo que tiene precio documentado. Lo demás queda como alcance para propuesta.</p>
      <div className="field-grid"><div className="field"><label>Empresa</label><input value={input.company} onChange={e=>set('company',e.target.value)} placeholder="Nombre comercial"/></div><div className="field"><label>Contacto</label><input value={input.name} onChange={e=>set('name',e.target.value)} placeholder="Tu nombre"/></div><div className="field"><label>WhatsApp</label><input value={input.phone} onChange={e=>set('phone',e.target.value)} placeholder="664..."/></div><div className="field"><label>Correo</label><input value={input.email} onChange={e=>set('email',e.target.value)} placeholder="correo@empresa.com"/></div><div className="field"><label>Objetivo</label><select value={input.intent} onChange={e=>set('intent',e.target.value as QuoteInput['intent'])}>{intentOptions.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></div><div className="field"><label>Usuarios / estaciones</label><select value={input.users} onChange={e=>set('users',Number(e.target.value))}>{userOptions.map(v=><option key={v} value={v}>{v===12?'12+':v}</option>)}</select></div><div className="field"><label>Ciclo</label><select value={input.annual?'annual':'monthly'} onChange={e=>set('annual',e.target.value==='annual')}><option value="monthly">Mensual</option><option value="annual">Anual</option></select></div><div className="field"><label>CN7 / nube</label><select value={input.cn7} onChange={e=>set('cn7',e.target.value as QuoteInput['cn7'])}><option value="none">Sin CN7 por ahora</option><option value="backup">CN7 respaldo · $99 USD/mes</option><option value="hosted">CN7 hospedado · $149 USD/mes</option><option value="backup_only">Solo respaldo · $99 USD/mes</option></select></div><div className="field"><label>Horas soporte</label><select value={input.supportHours} onChange={e=>set('supportHours',Number(e.target.value))}>{hourOptions.map(v=><option key={v} value={v}>{v} h</option>)}</select></div><div className="field"><label>Horas desarrollo</label><select value={input.developmentHours} onChange={e=>set('developmentHours',Number(e.target.value))}>{hourOptions.map(v=><option key={v} value={v}>{v} h</option>)}</select></div><div className="field"><label>Timbres CN</label><select value={input.stamps} onChange={e=>set('stamps',Number(e.target.value))}><option value={0}>Sin timbres</option>{stampPackages.map(s=><option key={s.qty} value={s.qty}>{s.qty} timbres · {money(s.price,'MXN')}</option>)}</select></div><div className="field"><label>Urgencia</label><select value={input.urgency} onChange={e=>set('urgency',e.target.value as QuoteInput['urgency'])}><option value="now">Este mes</option><option value="month">Próximo mes</option><option value="exploring">Explorando</option></select></div><div className="field md:col-span-2"><label>Contexto</label><textarea value={input.notes} onChange={e=>set('notes',e.target.value)} placeholder="Tengo 2 sucursales, necesito web, POS, respaldo y seguimiento por WhatsApp..."/></div></div>
    </div>
    <aside className="nt-card quote-result"><div className="score-ring"><div className="score-num" style={{'--score': `${lead.score}%`} as CSSProperties}>{lead.score}</div><div><span className="eyebrow">{lead.label}</span><h3 className="text-2xl font-black mt-3">{lead.next}</h3></div></div><div className="money-grid"><div><span>Recurrente MXN</span><b>{quote.monthlyMxn?`${money(quote.monthlyMxn,'MXN')} / mes`:quote.annualMxn?`${money(quote.annualMxn,'MXN')} / año`:'—'}</b></div><div><span>Recurrente USD</span><b>{quote.monthlyUsd?`${money(quote.monthlyUsd,'USD')} / mes`:'—'}</b></div><div><span>Cargo único</span><b>{quote.oneTimeMxn?money(quote.oneTimeMxn,'MXN'):'—'}</b></div></div><div className="quote-actions"><a onClick={submitLead} className="btn btn-green" href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noreferrer">Enviar a WhatsApp</a><button className="btn btn-dark" onClick={pdf}>Descargar PDF</button><a className="btn btn-outline" href={`mailto:${CONTACT.email}?subject=Cotización NearTec&body=${encodeURIComponent(summary)}`}>Enviar por correo</a></div>{!compact && <p className="mt-5 text-sm text-near-mute">Precios en MXN/USD, no incluyen IVA salvo indicación. Web, hosting, VPS, correo, emailing y automatización se cotizan por alcance.</p>}</aside>
  </section>
}
