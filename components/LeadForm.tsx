'use client'
import { useState } from 'react'
import { CONTACT } from '@/lib/neartec-data'

export default function LeadForm({ source='landing-v42' }: { source?: string }){
  const [form,setForm]=useState({company:'',name:'',phone:'',email:'',need:'Quiero que mi sitio genere más contactos',size:'1 a 3 usuarios'})
  const [sent,setSent]=useState(false)
  const set=(k:string,v:string)=>setForm(f=>({...f,[k]:v}))
  const summary=`DIAGNÓSTICO NEARTEC\nEmpresa: ${form.company}\nContacto: ${form.name}\nWhatsApp: ${form.phone}\nCorreo: ${form.email}\nTamaño: ${form.size}\nObjetivo: ${form.need}`

  async function submit(){
    setSent(true)
    await fetch('/api/lead',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({...form, service:form.need, source})
    }).catch(()=>null)
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(summary)}`,'_blank')
  }

  return <div className="lead-card">
    <div className="lead-card-head"><span className="eyebrow">Diagnóstico rápido</span><b>2 min</b></div>
    <h3>Cuéntanos qué quieres mejorar y te orientamos sin vueltas.</h3>
    <p>Déjanos tus datos y lo que buscas lograr. Te responderemos por WhatsApp con una ruta inicial clara para que sepas qué solución te conviene.</p>
    <div className="lead-mini">
      <input aria-label="Empresa" placeholder="Empresa" value={form.company} onChange={e=>set('company',e.target.value)}/>
      <input aria-label="Nombre" placeholder="Tu nombre" value={form.name} onChange={e=>set('name',e.target.value)}/>
      <input aria-label="WhatsApp" placeholder="WhatsApp 664..." value={form.phone} onChange={e=>set('phone',e.target.value)}/>
      <input aria-label="Correo" placeholder="Correo empresarial" value={form.email} onChange={e=>set('email',e.target.value)}/>
      <select aria-label="Tamaño aproximado" value={form.size} onChange={e=>set('size',e.target.value)}>
        <option>1 a 3 usuarios</option><option>4 a 8 usuarios</option><option>9+ usuarios</option><option>Varias sucursales</option>
      </select>
      <select aria-label="Objetivo principal" value={form.need} onChange={e=>set('need',e.target.value)}>
        <option>Quiero que mi sitio genere más contactos</option>
        <option>Quiero organizar mejor mis prospectos</option>
        <option>Quiero vender con CompuNegocio</option>
        <option>Quiero respaldo, nube o continuidad</option>
        <option>Quiero una solución integral</option>
      </select>
      <button className="btn btn-green" onClick={submit}>{sent?'Listo, te abrimos WhatsApp':'Quiero mi diagnóstico por WhatsApp'}</button>
    </div>
  </div>
}
