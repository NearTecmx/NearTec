'use client'
import { useState } from 'react'
import { CONTACT } from '@/lib/neartec-data'

export default function LeadForm({ source='landing-v41' }: { source?: string }){
  const [form,setForm]=useState({company:'',name:'',phone:'',email:'',need:'Mi web no genera leads claros',size:'1 a 3 usuarios'})
  const [sent,setSent]=useState(false)
  const set=(k:string,v:string)=>setForm(f=>({...f,[k]:v}))
  const summary=`DIAGNÓSTICO NEARTEC\nEmpresa: ${form.company}\nContacto: ${form.name}\nWhatsApp: ${form.phone}\nCorreo: ${form.email}\nTamaño: ${form.size}\nDolor: ${form.need}`
  async function submit(){ setSent(true); await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form, service:form.need, source})}).catch(()=>null); window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(summary)}`,'_blank') }
  return <div className="lead-card">
    <div className="lead-card-head"><span className="eyebrow">Filtro rápido</span><b>2 min</b></div>
    <h3>Recibe una ruta inicial para convertir más prospectos.</h3>
    <p>Déjanos contexto mínimo y lo mandamos directo a WhatsApp con la información que ventas necesita para avanzar.</p>
    <div className="lead-mini">
      <input aria-label="Empresa" placeholder="Empresa" value={form.company} onChange={e=>set('company',e.target.value)}/>
      <input aria-label="Nombre" placeholder="Tu nombre" value={form.name} onChange={e=>set('name',e.target.value)}/>
      <input aria-label="WhatsApp" placeholder="WhatsApp 664..." value={form.phone} onChange={e=>set('phone',e.target.value)}/>
      <input aria-label="Correo" placeholder="Correo empresarial" value={form.email} onChange={e=>set('email',e.target.value)}/>
      <select aria-label="Tamaño aproximado" value={form.size} onChange={e=>set('size',e.target.value)}><option>1 a 3 usuarios</option><option>4 a 8 usuarios</option><option>9+ usuarios</option><option>Varias sucursales</option></select>
      <select aria-label="Dolor principal" value={form.need} onChange={e=>set('need',e.target.value)}><option>Mi web no genera leads claros</option><option>Necesito CRM y seguimiento</option><option>Quiero CompuNegocio</option><option>Necesito CN7, nube o respaldo</option><option>Necesito web + POS + CRM</option></select>
      <button className="btn btn-green" onClick={submit}>{sent?'Contexto enviado':'Enviar diagnóstico a WhatsApp'}</button>
    </div>
  </div>
}
