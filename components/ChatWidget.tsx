'use client'

import { useMemo, useRef, useState, useEffect } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'
import { QUICK_SUGGESTIONS, getNearyAnswer } from '@/lib/neary-knowledge'

type Message = { id: string; role: 'bot' | 'user'; text: string }
function msg(role: Message['role'], text: string): Message { return { id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`, role, text } }
function Icon({ type }: { type: 'wa' | 'ai' }) { return <span className="assist-icon" aria-hidden="true">{type === 'wa' ? '☏' : '✦'}</span> }

export default function ChatWidget() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([msg('bot', 'Soy Neary AI. Te ayudo a elegir servicio, revisar precios base o pasar a WhatsApp.')])
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const summary = useMemo(() => messages.map((m) => `${m.role === 'user' ? 'Cliente' : 'Neary AI'}: ${m.text}`).join('\n'), [messages])

  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight }, [messages, chatOpen])

  function openWhatsApp(text?: string) {
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text || `Hola, quiero continuar con NearTec.\n\nResumen:\n${summary}`)}`, '_blank', 'noopener,noreferrer')
  }

  function ask(text: string) {
    const clean = text.trim().slice(0, 340)
    if (!clean) return
    const result = getNearyAnswer(clean)
    const next = [...messages, msg('user', clean), msg('bot', result.answer)]
    if (result.escalate) next.push(msg('bot', 'Toca WhatsApp y mando el contexto para que te atiendan más rápido.'))
    setMessages(next.slice(-18))
    setInput('')
  }

  return (
    <div className="assist">
      {chatOpen && (
        <section className="assist-chat" role="dialog" aria-label="Neary AI">
          <header><div><span>Neary AI</span><b>Filtro rápido</b></div><button type="button" onClick={() => setChatOpen(false)}>Cerrar</button></header>
          <div ref={bodyRef} className="assist-body">{messages.map((m) => <p key={m.id} className={m.role === 'user' ? 'user' : 'bot'}>{m.text}</p>)}</div>
          <div className="assist-chips">{QUICK_SUGGESTIONS.map((item) => <button key={item} type="button" onClick={() => ask(item)}>{item}</button>)}</div>
          <form onSubmit={(e) => { e.preventDefault(); ask(input) }}><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Pregunta en una frase" /><button type="submit">Enviar</button></form>
          <button type="button" className="assist-wa" onClick={() => openWhatsApp()}>Pasar a WhatsApp</button>
        </section>
      )}
      <div className={`assist-menu ${menuOpen ? 'open' : ''}`}>
        <button type="button" onClick={() => openWhatsApp('Hola, quiero hablar con NearTec sobre sus servicios.')}><Icon type="wa" /><b>WhatsApp</b><small>Hablar ahora</small></button>
        <button type="button" onClick={() => { setChatOpen(true); setMenuOpen(false) }}><Icon type="ai" /><b>Neary AI</b><small>Filtrar necesidad</small></button>
      </div>
      <button type="button" aria-label="Abrir cotizador y contacto" className="assist-trigger" title="Cotizar / WhatsApp" onClick={() => { setMenuOpen((v) => !v); setChatOpen(false) }}>{menuOpen ? '×' : '↗'}</button>
    </div>
  )
}
