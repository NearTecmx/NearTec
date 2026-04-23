'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'
import { QUICK_SUGGESTIONS, getNearyAnswer } from '@/lib/neary-knowledge'

type MessageRole = 'bot' | 'user'
interface Message { id: string; role: MessageRole; text: string }

function makeMessage(role: MessageRole, text: string): Message {
  return { id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, role, text }
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.1 4.9A9.8 9.8 0 0 0 12 2 9.9 9.9 0 0 0 2.1 11.9c0 1.7.5 3.4 1.3 4.9L2 22l5.4-1.4a9.8 9.8 0 0 0 4.6 1.2h.1a9.9 9.9 0 0 0 7-16.9ZM12 20.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8.2 8.2 0 1 1 12 20.1Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.4.2-.3c.1-.1.1-.3 0-.4l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.9.8-.9 2s.9 2.4 1 2.5c.1.2 1.7 2.6 4.1 3.6.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0 0-.2-.1-.4-.2Z" /></svg>
  )
}

function SparkIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2 1.9 5.2L19 9.1l-5.1 1.9L12 16.2 10.1 11 5 9.1l5.1-1.9L12 2Zm7 10 1 2.7 2.7 1.3-2.7 1-1 2.7-1-2.7-2.7-1 2.7-1.3 1-2.7ZM6 13l1.3 3.7L11 18l-3.7 1.3L6 23l-1.3-3.7L1 18l3.7-1.3L6 13Z" /></svg>
}

export default function ChatWidget() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    makeMessage('bot', 'Soy Neary AI. Te ayudo a elegir servicio, revisar precios base o pasar directo a WhatsApp.'),
  ])
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, chatOpen])

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setChatOpen(false)
      }
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  const summary = useMemo(() => messages.map((m) => `${m.role === 'user' ? 'Cliente' : 'Neary AI'}: ${m.text}`).join('\n'), [messages])

  function sendWhatsApp(text?: string) {
    const finalText = text || `Hola, quiero continuar con NearTec.\n\nResumen:\n${summary}`
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(finalText)}`, '_blank', 'noopener,noreferrer')
  }

  function ask(text: string) {
    const clean = text.trim().slice(0, 320)
    if (!clean) return
    const result = getNearyAnswer(clean)
    const next = [...messages, makeMessage('user', clean), makeMessage('bot', result.answer)]
    if (result.escalate) next.push(makeMessage('bot', 'Toca WhatsApp y mando el contexto listo para que te atiendan más rápido.'))
    setMessages(next.slice(-16))
    setInput('')
  }

  return (
    <div className="ntx-assist" aria-live="polite">
      {chatOpen ? (
        <section className="ntx-assist-chat" role="dialog" aria-label="Neary AI">
          <header>
            <div><span>Neary AI</span><strong>Filtra tu necesidad</strong></div>
            <button type="button" onClick={() => setChatOpen(false)}>Cerrar</button>
          </header>
          <div ref={bodyRef} className="ntx-assist-chat__body">
            {messages.map((message) => <p key={message.id} className={message.role === 'user' ? 'is-user' : 'is-bot'}>{message.text}</p>)}
          </div>
          <div className="ntx-assist-chat__chips">
            {QUICK_SUGGESTIONS.map((item) => <button key={item} type="button" onClick={() => ask(item)}>{item}</button>)}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); ask(input) }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Pregunta en una frase" />
            <button type="submit">Enviar</button>
          </form>
          <button type="button" className="ntx-assist-chat__wa" onClick={() => sendWhatsApp()}>Pasar a WhatsApp</button>
        </section>
      ) : null}

      <div className={`ntx-assist-menu ${menuOpen ? 'is-open' : ''}`}>
        <button type="button" onClick={() => sendWhatsApp('Hola, quiero hablar con NearTec sobre sus servicios.')}>
          <span><WhatsAppIcon /></span><b>WhatsApp</b><small>Hablar ahora</small>
        </button>
        <button type="button" onClick={() => { setChatOpen(true); setMenuOpen(false) }}>
          <span><SparkIcon /></span><b>Neary AI</b><small>Filtrar y cotizar</small>
        </button>
      </div>

      <button type="button" className="ntx-assist-trigger" aria-label="Abrir WhatsApp o Neary AI" aria-expanded={menuOpen} onClick={() => { setMenuOpen((v) => !v); setChatOpen(false) }}>
        {menuOpen ? '×' : '+'}
      </button>
    </div>
  )
}
