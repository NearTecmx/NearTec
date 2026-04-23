'use client'

import { useMemo, useRef, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'
import { QUICK_SUGGESTIONS, getNearyAnswer } from '@/lib/neary-knowledge'

type MessageRole = 'bot' | 'user'

interface Message {
  id: string
  role: MessageRole
  text: string
}

const MAX_INPUT = 320

function createMessage(role: MessageRole, text: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  }
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M19.11 4.89A9.84 9.84 0 0 0 12.02 2C6.57 2 2.14 6.43 2.14 11.88c0 1.74.46 3.43 1.33 4.92L2 22l5.37-1.41a9.84 9.84 0 0 0 4.65 1.18h.01c5.45 0 9.88-4.43 9.88-9.88a9.8 9.8 0 0 0-2.8-7ZM12.03 20.1h-.01a8.12 8.12 0 0 1-4.13-1.13l-.3-.18-3.19.84.85-3.11-.2-.32a8.16 8.16 0 1 1 6.98 3.9Zm4.47-6.1c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.02-.37-1.95-1.17-.72-.64-1.22-1.43-1.36-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.25.35-.37.12-.12.16-.2.24-.33.08-.14.04-.25-.02-.37-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.41.06-.63.29-.22.24-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  )
}

function SparkGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path fill="currentColor" d="m12 2 1.95 5.3L19 9.25l-5.05 1.95L12 16.5l-1.95-5.3L5 9.25 10.05 7.3 12 2Zm7 10 1 2.7L22.7 16 20 17l-1 2.7-1-2.7L15.3 16 18 14.7 19 12ZM6 13l1.3 3.7L11 18l-3.7 1.3L6 23l-1.3-3.7L1 18l3.7-1.3L6 13Z" />
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
      'Hola, soy Neary AI. Puedo ayudarte con servicios, precios base, CompuNegocio, nube, CRM, emailing, infraestructura o integración con iTimbre.',
    ),
  ])
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const whatsappHref = useMemo(
    () => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero hablar con NearTec.')}`,
    [],
  )

  const handlePrompt = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const { answer, escalate } = getNearyAnswer(trimmed)
    const nextMessages = [
      ...messages,
      createMessage('user', trimmed),
      createMessage('bot', escalate ? `${answer}\n\nSi quieres, te paso directo a WhatsApp para revisar tu caso.` : answer),
    ]
    setMessages(nextMessages)
    setInput('')
    setChatOpen(true)
    setMenuOpen(false)
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    })
  }

  return (
    <div className="support-fab">
      {menuOpen && (
        <div className="support-fab__menu">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="support-action-card">
            <span className="support-action-card__icon support-action-card__icon--wa">
              <WhatsAppGlyph />
            </span>
            <span>
              <strong>WhatsApp</strong>
              <small>Hablar ahora</small>
            </span>
          </a>

          <button
            type="button"
            className="support-action-card support-action-card--button"
            onClick={() => {
              setChatOpen(true)
              setMenuOpen(false)
            }}
          >
            <span className="support-action-card__icon support-action-card__icon--ai">
              <SparkGlyph />
            </span>
            <span>
              <strong>Neary AI</strong>
              <small>Resolver y cotizar</small>
            </span>
          </button>
        </div>
      )}

      {chatOpen && (
        <div className="support-chat-panel">
          <div className="support-chat-panel__top">
            <div>
              <p className="support-chat-panel__eyebrow">Neary AI</p>
              <h3>Te ayudo a resolver rápido si NearTec sí encaja.</h3>
            </div>
            <button type="button" className="support-chat-panel__close" onClick={() => setChatOpen(false)}>
              Cerrar
            </button>
          </div>

          <div ref={scrollRef} className="support-chat-panel__scroll">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`support-chat-message ${message.role === 'user' ? 'support-chat-message--user' : 'support-chat-message--bot'}`}
              >
                {message.text.split('\n').map((line, index) => (
                  <p key={`${message.id}-${index}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="support-chat-panel__suggestions">
            {QUICK_SUGGESTIONS.slice(0, 6).map((question) => (
              <button key={question} type="button" onClick={() => handlePrompt(question)}>
                {question}
              </button>
            ))}
          </div>

          <div className="support-chat-panel__composer">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, MAX_INPUT))}
              placeholder="Escribe tu duda o tu necesidad"
            />
            <div className="support-chat-panel__composer-row">
              <span>{input.length}/{MAX_INPUT}</span>
              <button type="button" onClick={() => handlePrompt(input)}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="support-fab__button"
        aria-label={menuOpen ? 'Cerrar ayuda' : 'Abrir ayuda'}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </div>
  )
}
