'use client'
import { useState } from 'react'
import { CONTACT } from '@/lib/neartec-data'

export default function LeadForm({ source='landing-v4' }: { source?: string }){
  const [form,setForm]=useState({company:'',name:'',phone:'',email:'',need:'Mi web no genera leads claros',size:'1 a 3 usuarios'})
  const [sent,setSent]=useState(false)
  const set=(k:string,v:string)=>setForm(f=>({...f,[k]:v}))
  const summary=`DIAGNÓSTICO NEARTEC
Empresa: ${form.company}
Contacto: ${form.name}
WhatsApp: ${form.phone}
Correo: ${form.email}
Tamaño: ${form.size}
Dolor: ${form.need}`
  async function submit(){ setSent(true); await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form, service:form.need, source})}).catch(()=>null); window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(summary)}`,'_blank') }
  return <div className="nt-card p-6"><span className="eyebrow">Aplicar ahora</span><h3 className="text-3xl font-black tracking-[-.05em] mt-4">Diagnóstico inicial NearTec</h3><p className="text-near-mute mt-2 mb-5">Formulario corto para perfilar necesidad y mandar contexto a ventas.</p><div className="lead-mini"><input placeholder="Empresa" value={form.company} onChange={e=>set('company',e.target.value)}/><input placeholder="Tu nombre" value={form.name} onChange={e=>set('name',e.target.value)}/><input placeholder="WhatsApp" value={form.phone} onChange={e=>set('phone',e.target.value)}/><input placeholder="Correo" value={form.email} onChange={e=>set('email',e.target.value)}/><select value={form.size} onChange={e=>set('size',e.target.value)}><option>1 a 3 usuarios</option><option>4 a 8 usuarios</option><option>9+ usuarios</option><option>Varias sucursales</option></select><select value={form.need} onChange={e=>set('need',e.target.value)}><option>Mi web no genera leads claros</option><option>Necesito CRM y seguimiento</option><option>Quiero CompuNegocio</option><option>Necesito CN7, nube o respaldo</option><option>Necesito web + POS + CRM</option></select><button className="btn btn-green" onClick={submit}>{sent?'Enviado, abriendo WhatsApp':'Aplicar y enviar contexto'}</button></div></div>
}
