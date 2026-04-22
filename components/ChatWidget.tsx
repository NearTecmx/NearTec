'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

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

function classifyLead(input: string) {
  const text = input.toLowerCase()
  const highIntentWords = ['cotizar', 'precio', 'costo', 'demo', 'implementación', 'compunegocio', 'cn7', 'automatización']
  const infraWords = ['hosting', 'servidor', 'vps', 'correo', 'nube', 'infraestructura']
  const automationWords = ['crm', 'lead', 'whatsapp', 'seguimiento', 'automatización', 'emailing']
  const fit = highIntentWords.some((word) => text.includes(word)) ? 'alta' : infraWords.some((word) => text.includes(word)) || automationWords.some((word) => text.includes(word)) ? 'media' : 'exploratoria'

  if (automationWords.some((word) => text.includes(word))) {
    return { fit, area: 'automatización comercial' }
  }
  if (infraWords.some((word) => text.includes(word))) {
    return { fit, area: 'infraestructura y cloud' }
  }
  if (text.includes('compunegocio') || text.includes('punto de venta') || text.includes('inventario')) {
    return { fit, area: 'compunegocio y operación' }
  }
  return { fit, area: 'diagnóstico general' }
}

function getReply(input: string): string {
  const { fit, area } = classifyLead(input)

  if (fit === 'alta') {
    return `Veo intención alta para ${area}. Lo correcto es pasarte a revisión guiada para que no pierdas tiempo.`
  }

  if (fit === 'media') {
    return `Parece que tu necesidad cae en ${area}. Te puedo orientar aquí o llevarte a WhatsApp con contexto.`
  }

  return 'Te ayudo con crecimiento, operación e infraestructura. Cuéntame qué necesita tu empresa y te digo la ruta correcta.'
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
  const bodyRef = useRef<HTMLDivElement | null>(null)

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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!bodyRef.current) return
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, isOpen])

  const quickReplies = useMemo(
    () => [
      'Quiero cotizar CompuNegocio',
      'Necesito automatización y CRM',
      'Quiero revisar infraestructura cloud',
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

  const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user')?.text ?? 'Sin contexto'
  const currentLead = classifyLead(lastUserMessage)
  const escalationMessage = [
    'Hola, quiero continuar con un asesor de NearTec.',
    `Lead fit: ${currentLead.fit}`,
    `Área detectada: ${currentLead.area}`,
    '',
    ...messages.map((message) => `${message.role === 'user' ? 'Cliente' : 'Asistente'}: ${message.text}`),
  ].join('\n')

  return (
    <div className={`chat-widget ${isOpen ? 'chat-widget--open' : ''}`}>
      {isOpen ? (
        <div className="chat-widget__panel" role="dialog" aria-label="Asistente de NearTec">
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

          <div ref={bodyRef} className="chat-widget__body" aria-live="polite" role="log">
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

            <div className="rounded-[18px] border border-[rgba(12,75,255,0.1)] bg-[var(--brand-surface)] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
              Lead detectado: <span className="text-[var(--brand-green)]">{currentLead.fit}</span> · Área: <span className="text-[var(--brand-ink)]">{currentLead.area}</span>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp(escalationMessage)}
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
