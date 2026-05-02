'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { QUICK_SUGGESTIONS, getNearyAnswer } from '@/lib/neary-knowledge'

type Message = { id: string; role: 'bot' | 'user'; text: string }
const id = () => Math.random().toString(16).slice(2)

function NearyIcon() {
  return (
    <span className="v5-neary-icon">
      <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={34} height={34} />
    </span>
  )
}

export default function FloatingAssist() {
  const [open, setOpen] = useState(false)
  const [chat, setChat] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: id(),
      role: 'bot',
      text: 'Soy Neary AI. Puedo ayudarte a ubicar si necesitas web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, soporte o una solución integral.',
    },
  ])
  const bodyRef = useRef<HTMLDivElement>(null)

  const wa = useMemo(() => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero diagnóstico o cotización para un proyecto tecnológico.')}`, [])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, chat])

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return
    const res = getNearyAnswer(clean)
    setMessages((current) => [
      ...current,
      { id: id(), role: 'user', text: clean },
      { id: id(), role: 'bot', text: res.answer },
    ])
    setInput('')
    setChat(true)
    setOpen(false)
  }

  return (
    <div className="v5-assist">
      {chat && (
        <section className="v5-assist-chat" aria-label="Chat Neary AI">
          <header>
            <div>
              <NearyIcon />
              <span><b>Neary AI</b><small>Asistente tecnológico NearTec</small></span>
            </div>
            <button type="button" onClick={() => setChat(false)} aria-label="Cerrar chat"><X size={18}/></button>
          </header>
          <div className="v5-assist-body" ref={bodyRef}>
            {messages.map((message) => <p key={message.id} className={message.role}>{message.text}</p>)}
          </div>
          <div className="v5-assist-chips">
            {QUICK_SUGGESTIONS.slice(0, 4).map((suggestion) => (
              <button type="button" key={suggestion} onClick={() => send(suggestion)}>{suggestion}</button>
            ))}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); send(input) }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Cuéntame qué necesitas..." />
            <button type="submit" aria-label="Enviar"><Send size={17}/></button>
          </form>
        </section>
      )}

      {open && (
        <div className="v5-assist-dock">
          <button type="button" onClick={() => { setChat(true); setOpen(false) }}>
            <Bot size={18}/>
            <span>Hablar con Neary AI</span>
          </button>
          <a href={wa} target="_blank" rel="noreferrer">
            <MessageCircle size={18}/>
            <span>WhatsApp directo</span>
          </a>
        </div>
      )}

      <button type="button" className="v5-assist-trigger" aria-label="Abrir Neary AI y WhatsApp" onClick={() => chat ? setChat(false) : setOpen((value) => !value)}>
        <NearyIcon />
      </button>
    </div>
  )
}
