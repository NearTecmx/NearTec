'use client'

import { useEffect, useMemo, useState } from 'react'

const WHATSAPP_NUMBER = '526631656898'
const MAX_MESSAGE_LENGTH = 500
const MAX_MESSAGES = 20

type MessageRole = 'bot' | 'user'

interface Message {
  id: string
  role: MessageRole
  text: string
}

function openWhatsApp(text: string): void {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

function getReply(input: string): string {
  const text = input.toLowerCase()

  if (text.includes('precio') || text.includes('costo') || text.includes('cotiz')) {
    return 'Claro. Podemos orientarte en infraestructura, sistemas, implementación y continuidad operativa. ¿Qué solución necesitas?'
  }

  if (
    text.includes('compunegocio') ||
    text.includes('cn7') ||
    text.includes('hosting') ||
    text.includes('servidor') ||
    text.includes('nube')
  ) {
    return 'Perfecto. NearTec integra sistemas, nube y acompañamiento comercial para acelerar la implementación.'
  }

  if (text.includes('soporte') || text.includes('asesor') || text.includes('humano')) {
    return 'Te conecto con un asesor para revisar tu necesidad y continuar el proceso por WhatsApp.'
  }

  return 'Te ayudo con infraestructura, sistemas empresariales, implementación y continuidad operativa. Cuéntame qué necesita tu empresa.'
}

function createMessage(role: MessageRole, text: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    createMessage('bot', 'Hola. Soy el asistente de NearTec. ¿Qué necesitas resolver o cotizar?'),
  ])

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('neartec:chat-toggle', {
        detail: { open: isOpen },
      }),
    )

    return () => {
      window.dispatchEvent(
        new CustomEvent('neartec:chat-toggle', {
          detail: { open: false },
        }),
      )
    }
  }, [isOpen])

  const quickReplies = useMemo(
    () => [
      'Quiero cotizar infraestructura',
      'Necesito sistemas empresariales',
      'Necesito implementación',
      'Hablar con asesor',
    ],
    [],
  )

  function sendMessage(text: string): void {
    const clean = text.trim().slice(0, MAX_MESSAGE_LENGTH)
    if (!clean) return

    const reply = getReply(clean)

    setMessages((current) => {
      const next = [...current, createMessage('user', clean), createMessage('bot', reply)]
      return next.slice(-MAX_MESSAGES)
    })

    setInput('')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    sendMessage(input)
  }

  const escalationMessage = messages
    .map((message) => `${message.role === 'user' ? 'Cliente' : 'Asistente'}: ${message.text}`)
    .join('\n')

  return (
    <div className={`chat-widget ${isOpen ? 'chat-widget--open' : ''}`}>
      {isOpen ? (
        <div className="chat-widget__panel">
          <div className="chat-widget__header">
            <div>
              <p className="chat-widget__eyebrow">Asistencia</p>
              <h3 className="chat-widget__title">NearTec</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="chat-widget__close"
              aria-label="Cerrar asistente"
            >
              Cerrar
            </button>
          </div>

          <div className="chat-widget__body" aria-live="polite" role="log">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === 'bot' ? 'chat-bubble chat-bubble--bot' : 'chat-bubble chat-bubble--user'}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-widget__footer">
            <div className="chat-widget__quick-replies">
              {quickReplies.map((reply) => (
                <button key={reply} type="button" onClick={() => sendMessage(reply)} className="chat-chip">
                  {reply}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="chat-widget__form">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                placeholder="Escribe tu mensaje..."
                className="chat-widget__input"
                maxLength={MAX_MESSAGE_LENGTH}
              />

              <button type="submit" className="btn-primary chat-widget__submit">
                Enviar
              </button>
            </form>

            <button
              type="button"
              onClick={() => openWhatsApp(`Hola, quiero hablar con un asesor de NearTec.\n\n${escalationMessage}`)}
              className="btn-secondary chat-widget__whatsapp"
            >
              Continuar por WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="chat-widget__trigger"
          aria-label="Abrir asistente de NearTec"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M12 3C7.03 3 3 6.92 3 11.75c0 2.46 1.05 4.68 2.74 6.27L5 21l3.06-1.1c1.2.39 2.53.6 3.94.6 4.97 0 9-3.92 9-8.75S16.97 3 12 3Zm-3 9.1c-.64 0-1.15-.51-1.15-1.15S8.36 9.8 9 9.8s1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Z" />
          </svg>
        </button>
      )}
    </div>
  )
}
