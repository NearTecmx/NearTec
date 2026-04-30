'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'
import { QUICK_SUGGESTIONS, getNearyAnswer } from '@/lib/neary-knowledge'

type Message = {
  id: string
  role: 'bot' | 'user'
  text: string
}

function createMessage(role: Message['role'], text: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    text,
  }
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16.03 3.2A12.74 12.74 0 0 0 5.08 22.4L3.5 28.8l6.58-1.54A12.73 12.73 0 1 0 16.03 3.2Zm0 22.98c-2.07 0-4-.61-5.62-1.66l-.4-.25-3.91.91.94-3.8-.26-.4a10.2 10.2 0 1 1 9.25 5.2Zm5.6-7.63c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.69.16-.2.3-.79 1-.97 1.2-.18.21-.36.24-.67.08-.31-.15-1.3-.48-2.48-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.81.39-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.25 3.16c.15.2 2.15 3.28 5.2 4.6.73.31 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  )
}

function AiIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3.2 18.4 11l7.8-2.4-4.8 6.6 6.7 4.7-8.1.1.1 8.1-4.8-6.7-6.6 4.8 2.4-7.8L3.2 16l7.9-2.4-2.5-7.8 6.7 4.8L16 3.2Z" />
      <circle cx="16" cy="16" r="3.2" />
    </svg>
  )
}

export default function ChatWidget() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    createMessage(
      'bot',
      'Soy Neary AI. Te ayudo a saber si necesitas web, CRM, CompuNegocio, CN7, correo, emailing, infraestructura, soporte o una conexión fiscal con iTimbre. La meta es filtrar tu caso y llevarlo a ventas con contexto.',
    ),
  ])

  const listRef = useRef<HTMLDivElement>(null)

  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
        'Hola NearTec, quiero que me asesoren con una solución tecnológica.',
      )}`,
    [],
  )

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, chatOpen])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('neartec:chat-toggle', { detail: { open: chatOpen || menuOpen } }))
  }, [chatOpen, menuOpen])

  useEffect(() => {
    const close = () => {
      setMenuOpen(false)
      setChatOpen(false)
    }

    window.addEventListener('neartec:close-assist', close)
    return () => window.removeEventListener('neartec:close-assist', close)
  }, [])

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return

    const response = getNearyAnswer(clean)
    setMessages((current) => [
      ...current,
      createMessage('user', clean),
      createMessage('bot', response.answer),
    ])
    setInput('')
  }

  return (
    <div className={`assist ${chatOpen ? 'assist--chat-open' : ''}`}>
      {chatOpen && (
        <section className="assist-chat" aria-label="Chat Neary AI">
          <header>
            <div>
              <span>
                <AiIcon />
              </span>
              <div>
                <b>Neary AI</b>
                <small>Diagnóstico comercial NearTec</small>
              </div>
            </div>

            <button type="button" onClick={() => setChatOpen(false)} aria-label="Cerrar chat">
              ×
            </button>
          </header>

          <div className="assist-body" ref={listRef}>
            {messages.map((item) => (
              <p key={item.id} className={item.role === 'user' ? 'user' : 'bot'}>
                {item.text}
              </p>
            ))}
          </div>

          <div className="assist-chips">
            {QUICK_SUGGESTIONS.slice(0, 4).map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => send(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault()
              send(input)
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Describe tu necesidad..."
            />
            <button type="submit">Enviar</button>
          </form>
        </section>
      )}

      <div className={`assist-menu ${menuOpen ? 'open' : ''}`}>
        <a className="assist-wa" href={whatsappUrl} target="_blank" rel="noreferrer">
          <span className="assist-icon">
            <WhatsAppIcon />
          </span>
          <span>WhatsApp directo</span>
        </a>

        <button
          type="button"
          onClick={() => {
            setChatOpen(true)
            setMenuOpen(false)
          }}
        >
          <span className="assist-icon">
            <AiIcon />
          </span>
          <span>Neary AI</span>
        </button>
      </div>

      <button
        className="assist-trigger"
        type="button"
        aria-label="Abrir canales de atención NearTec"
        aria-expanded={menuOpen || chatOpen}
        onClick={() => {
          if (chatOpen) {
            setChatOpen(false)
            return
          }
          setMenuOpen((value) => !value)
        }}
      >
        <span>
          <AiIcon />
        </span>
      </button>
    </div>
  )
}
