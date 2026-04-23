'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'

const MAX_MESSAGE_LENGTH = 500
const MAX_MESSAGES = 24

type MessageRole = 'bot' | 'user'
type Intent = 'compunegocio' | 'infraestructura' | 'automatizacion' | 'diseno' | 'general'
type Priority = 'alta' | 'media' | 'baja'

interface Message {
  id: string
  role: MessageRole
  text: string
}

function openWhatsApp(text: string): void {
  const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

function createMessage(role: MessageRole, text: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  }
}

function detectIntent(text: string): Intent {
  const normalized = text.toLowerCase()
  if (normalized.includes('compunegocio') || normalized.includes('inventario') || normalized.includes('punto de venta') || normalized.includes('caja') || normalized.includes('estacion')) return 'compunegocio'
  if (normalized.includes('hosting') || normalized.includes('vps') || normalized.includes('servidor') || normalized.includes('correo') || normalized.includes('cn7') || normalized.includes('nube')) return 'infraestructura'
  if (normalized.includes('crm') || normalized.includes('lead') || normalized.includes('automat') || normalized.includes('seguimiento') || normalized.includes('whatsapp') || normalized.includes('campaña')) return 'automatizacion'
  if (normalized.includes('sitio') || normalized.includes('landing') || normalized.includes('ecommerce') || normalized.includes('web')) return 'diseno'
  return 'general'
}

function detectPriority(text: string): Priority {
  const normalized = text.toLowerCase()
  if (normalized.includes('urgente') || normalized.includes('hoy') || normalized.includes('cotiz') || normalized.includes('precio') || normalized.includes('sucursales') || normalized.includes('demo')) return 'alta'
  if (normalized.includes('quiero') || normalized.includes('necesito') || normalized.includes('asesor')) return 'media'
  return 'baja'
}

function classifyLead(text: string): { area: string; fit: string; step: string } {
  const intent = detectIntent(text)
  const priority = detectPriority(text)

  if (intent === 'compunegocio') {
    return {
      area: 'CompuNegocio / punto de venta',
      fit: priority === 'alta' ? 'Alta prioridad' : 'Calificado',
      step: 'Mandar a demo o propuesta con licencias, timbres y CN7.',
    }
  }

  if (intent === 'infraestructura') {
    return {
      area: 'Infraestructura / nube',
      fit: priority === 'alta' ? 'Alta prioridad' : 'Calificado',
      step: 'Revisar hosting, respaldo, correo, VPS o CN7.',
    }
  }

  if (intent === 'automatizacion') {
    return {
      area: 'CRM y automatización',
      fit: priority === 'alta' ? 'Alta prioridad' : 'Calificado',
      step: 'Validar pipeline, seguimiento, nurturing y agenda comercial.',
    }
  }

  if (intent === 'diseno') {
    return {
      area: 'Diseño web / ecommerce',
      fit: priority === 'alta' ? 'Calificado' : 'Exploración',
      step: 'Revisar objetivo del sitio y ruta de conversión.',
    }
  }

  return {
    area: 'Diagnóstico general',
    fit: priority === 'alta' ? 'Calificado' : 'Exploración',
    step: 'Mandar a diagnóstico inteligente antes de cotizar.',
  }
}

function getReply(text: string): string {
  const lead = classifyLead(text)

  return `Ya entendí mejor tu necesidad. Esto cae en ${lead.area}. El fit actual del lead es ${lead.fit.toLowerCase()} y el siguiente paso recomendado es: ${lead.step}`
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    createMessage('bot', 'Hola. Soy el filtro comercial de NearTec. Escríbeme qué quieres resolver y te llevo por la ruta correcta.'),
  ])
  const bodyRef = useRef<HTMLDivElement | null>(null)

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
      'Quiero un sitio que venda mejor',
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

  const escalationSummary = [
    'Hola, quiero continuar con un asesor de NearTec.',
    '',
    `Área detectada: ${currentLead.area}`,
    `Fit del lead: ${currentLead.fit}`,
    `Siguiente paso sugerido: ${currentLead.step}`,
    '',
    'Contexto del chat:',
    messages.map((message) => `${message.role === 'user' ? 'Cliente' : 'Asistente'}: ${message.text}`).join('\n'),
  ].join('\n')

  return (
    <div className={`chat-widget ${isOpen ? 'chat-widget--open' : ''}`}>
      {isOpen ? (
        <div className="chat-widget__panel" role="dialog" aria-label="Asistente de NearTec">
          <div className="chat-widget__header">
            <div>
              <p className="chat-widget__eyebrow">Filtro comercial</p>
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

          <div className="chat-widget__summary-box">
            <span className="chat-widget__summary-pill">{currentLead.fit}</span>
            <p className="chat-widget__summary-title">{currentLead.area}</p>
            <p className="chat-widget__summary-text">{currentLead.step}</p>
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
                placeholder="Ejemplo: quiero CompuNegocio para varias sucursales"
                className="chat-widget__input"
                maxLength={MAX_MESSAGE_LENGTH}
              />

              <button type="submit" className="btn-primary chat-widget__submit">
                Filtrar
              </button>
            </form>

            <button type="button" onClick={() => openWhatsApp(escalationSummary)} className="btn-secondary chat-widget__whatsapp">
              Enviar resumen al asesor
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={() => setIsOpen(true)} className="chat-widget__trigger" aria-label="Abrir asistente de NearTec">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M12 3C7.03 3 3 6.92 3 11.75c0 2.46 1.05 4.68 2.74 6.27L5 21l3.06-1.1c1.2.39 2.53.6 3.94.6 4.97 0 9-3.92 9-8.75S16.97 3 12 3Zm-3 9.1c-.64 0-1.15-.51-1.15-1.15S8.36 9.8 9 9.8s1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Z" />
          </svg>
        </button>
      )}
    </div>
  )
}
