'use client'

import { useMemo, useState } from 'react'

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
    return 'Claro. NearTec puede cotizar licencias, CN7, soporte, implementación y desarrollo. ¿Qué necesitas exactamente?'
  }

  if (
    text.includes('compunegocio') ||
    text.includes('cn7') ||
    text.includes('hosting') ||
    text.includes('servidor') ||
    text.includes('nube')
  ) {
    return 'Perfecto. NearTec trabaja con operación, nube, licencias y seguimiento comercial. Si quieres, te paso directo con un asesor por WhatsApp.'
  }

  if (text.includes('soporte') || text.includes('asesor') || text.includes('humano')) {
    return 'Te conecto con un asesor por WhatsApp para seguimiento real y cotización.'
  }

  return 'Te ayudo con licencias, CN7, nube, soporte, implementación y desarrollo. Escríbeme qué necesita tu empresa.'
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
    createMessage('bot', 'Hola. Soy el asistente de NearTec. ¿Qué necesitas cotizar o resolver?'),
  ])

  const quickReplies = useMemo(
    () => [
      'Quiero cotizar licencias',
      'Necesito CN7',
      'Necesito soporte',
      'Hablar con asesor',
    ],
    [],
  )

  function sendMessage(text: string): void {
    const clean = text.trim().slice(0, MAX_MESSAGE_LENGTH)

    if (!clean) return

    const reply = getReply(clean)

    setMessages((current) => {
      const next = [
        ...current,
        createMessage('user', clean),
        createMessage('bot', reply),
      ]

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
    <div className="fixed bottom-24 left-4 z-50 sm:bottom-6 sm:left-6">
      {isOpen ? (
        <div className="w-[calc(100vw-32px)] max-w-sm overflow-hidden rounded-[28px] border border-[var(--brand-line)] bg-white shadow-[var(--brand-shadow)]">
          <div className="flex items-start justify-between gap-4 border-b border-[var(--brand-line)] bg-[var(--brand-soft)] px-4 py-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--brand-muted)]">
                Asistente
              </p>
              <h3 className="mt-1 text-lg font-black text-[var(--brand-ink)]">NearTec</h3>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-[var(--brand-line)] px-3 py-1 text-xs font-bold text-[var(--brand-muted)] transition hover:border-[var(--brand-green)] hover:text-[var(--brand-ink)]"
              aria-label="Cerrar asistente"
            >
              Cerrar
            </button>
          </div>

          <div
            className="flex max-h-[360px] min-h-[280px] flex-col gap-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
            aria-label="Historial del asistente"
            role="log"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === 'bot'
                    ? 'max-w-[88%] rounded-[22px] bg-[var(--brand-soft)] px-4 py-3 text-sm leading-6 text-[var(--brand-ink)]'
                    : 'ml-auto max-w-[88%] rounded-[22px] bg-[var(--brand-green)] px-4 py-3 text-sm font-semibold leading-6 text-[#111]'
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--brand-line)] px-4 py-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="rounded-full border border-[var(--brand-line)] bg-white px-3 py-2 text-xs font-bold text-[var(--brand-ink)] transition hover:border-[var(--brand-green)]"
                >
                  {reply}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                placeholder="Escribe tu mensaje..."
                className="flex-1 rounded-2xl border border-[var(--brand-line)] px-4 py-3 text-sm text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-green)]"
                maxLength={MAX_MESSAGE_LENGTH}
              />

              <button type="submit" className="btn-primary !rounded-2xl !px-4 !py-3">
                Enviar
              </button>
            </form>

            <button
              type="button"
              onClick={() => openWhatsApp(`Hola, quiero hablar con un asesor de NearTec.\n\n${escalationMessage}`)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[var(--brand-line)] bg-white px-5 py-3 text-sm font-extrabold text-[var(--brand-ink)] transition hover:border-[var(--brand-green)]"
            >
              Escalar a WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--brand-line)] bg-white text-[var(--brand-ink)] shadow-[var(--brand-shadow)] transition hover:-translate-y-0.5"
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