'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

type Message = { role: 'bot' | 'user'; text: string }

const suggestions = [
  'Necesito una web o app',
  'Quiero automatizar procesos',
  'Necesito CompuNegocio o CN7',
  'Quiero soporte o desarrollo',
]

function answer(text: string) {
  const q = text.toLowerCase()
  if (q.includes('compu') || q.includes('pos') || q.includes('timbre')) return 'Para operación, CompuNegocio cubre ventas, inventario, usuarios, timbres y reportes. Podemos cotizar por estaciones, implementación y timbres.'
  if (q.includes('cn7') || q.includes('nube') || q.includes('respaldo')) return 'Para continuidad, CN7 y respaldo ayudan a no depender de una sola computadora. Podemos revisar si necesitas CN7 con respaldo, hospedado o respaldo automático.'
  if (q.includes('web') || q.includes('app') || q.includes('desarrollo')) return 'Para desarrollo, NearTec puede crear web, apps, módulos e integraciones. Lo correcto es definir objetivo, alcance, usuarios y urgencia antes de cotizar.'
  if (q.includes('automat') || q.includes('crm') || q.includes('ia')) return 'Para automatización, podemos conectar formularios, WhatsApp, CRM, recordatorios, scoring y tareas repetitivas con una ruta de seguimiento clara.'
  return 'Puedo ayudarte a ubicar si necesitas web, app, automatización, IA, CRM, CompuNegocio, CN7, nube, soporte o desarrollo a medida. Cuéntame qué quieres resolver.'
}

export default function FloatingAssist() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Soy Neary AI. Te ayudo a ubicar qué tecnología necesita tu empresa: web, apps, automatización, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.' },
  ])

  const waUrl = useMemo(
    () => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero diagnóstico o cotización para un proyecto tecnológico.')}`,
    []
  )

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return
    setMessages((items) => [...items, { role: 'user', text: clean }, { role: 'bot', text: answer(clean) }])
    setInput('')
    setOpen(true)
  }

  return (
    <div className="v51-assist-dock">
      {open && (
        <section className="v51-assist-panel" aria-label="Neary AI">
          <header>
            <div className="v51-assist-title">
              <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={38} height={38} />
              <div><b>Neary AI</b><span>Asistente tecnológico</span></div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar Neary"><X size={18} /></button>
          </header>

          <div className="v51-assist-messages">
            {messages.map((m, i) => <p key={i} className={m.role}>{m.text}</p>)}
          </div>

          <div className="v51-assist-suggestions">
            {suggestions.map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input) }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Cuéntame qué necesitas..." />
            <button aria-label="Enviar"><Send size={16} /></button>
          </form>
        </section>
      )}

      <div className="v51-floating-actions">
        <a className="v51-fab whatsapp" href={waUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp NearTec">
          <MessageCircle size={24} />
          <span>WhatsApp</span>
        </a>
        <button className="v51-fab neary" onClick={() => setOpen((v) => !v)} aria-label="Abrir Neary AI">
          <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={42} height={42} />
          <span>Neary AI</span>
        </button>
      </div>
    </div>
  )
}
