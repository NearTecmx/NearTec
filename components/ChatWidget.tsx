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
  if (normalized.includes('compunegocio') || normalized.includes('inventario') || normalized.includes('punto de venta') || normalized.includes('caja')) return 'compunegocio'
  if (normalized.includes('hosting') || normalized.includes('vps') || normalized.includes('servidor') || normalized.includes('correo') || normalized.includes('cn7') || normalized.includes('nube')) return 'infraestructura'
  if (normalized.includes('crm') || normalized.includes('lead') || normalized.includes('automat') || normalized.includes('seguimiento') || normalized.includes('whatsapp')) return 'automatizacion'
  if (normalized.includes('sitio') || normalized.includes('landing') || normalized.includes('ecommerce') || normalized.includes('web')) return 'diseno'
  return 'general'
}

function detectPriority(text: string): Priority {
  const normalized = text.toLowerCase()
  if (normalized.includes('urgente') || normalized.includes('hoy') || normalized.includes('cotiz') || normalized.includes('precio') || normalized.includes('varias sucursales') || normalized.includes('8') || normalized.includes('10')) return 'alta'
  if (normalized.includes('demo') || normalized.includes('asesor') || normalized.includes('quiero')) return 'media'
  return 'baja'
}

function getReply(text: string): string {
  const intent = detectIntent(text)
  const priority = detectPriority(text)

  if (intent === 'compunegocio') {
    return priority === 'alta'
      ? 'Ya vi que vienes por CompuNegocio. Lo mejor es revisar licencias, timbres y nube para pasarte directo a propuesta.'
      : 'Perfecto. Te ayudo a ubicar estaciones, timbres y nube para que llegues mejor filtrado a ventas.'
  }

  if (intent === 'infraestructura') {
    return priority === 'alta'
      ? 'Suena a una decisión cercana. Lo mejor aquí es revisar nube, respaldo, correo y continuidad en una llamada corta.'
      : 'Perfecto. NearTec te ayuda con hosting, VPS, correo, CN7 y continuidad operativa sin meter ruido.'
  }

  if (intent === 'automatizacion') {
    return 'Si tu dolor es seguimiento o CRM, te conviene filtrar qué entra a ventas, qué va a nurturing y qué necesita demo.'
  }

  if (intent === 'diseno') {
    return 'Si el enfoque es sitio o ecommerce, aquí lo importante es explicar mejor tu servicio y convertir mejor el tráfico.'
  }

  return 'Te ayudo a ubicar si tu necesidad entra por CompuNegocio, infraestructura, automatización o diseño web para enviarte por la ruta correcta.'
}

function BubbleIcon({ type }: { type: 'hub' | 'ai' | 'whatsapp' }) {
  if (type === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.02 2C6.56 2 2.12 6.44 2.12 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.12-2.87-7.01Zm-7.03 15.24h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31A8.17 8.17 0 0 1 3.8 11.9c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.27.85 5.82 2.41a8.15 8.15 0 0 1 2.4 5.81c0 4.53-3.69 8.23-8.22 8.23Zm4.51-6.16c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.8-.8.96-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.42 1.03 2.59c.13.17 1.76 2.69 4.26 3.77.6.26 1.07.42 1.43.54.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" />
      </svg>
    )
  }

  if (type === 'ai') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3 14.4 8.1 20 10.4 14.9 12.8 12.6 18 10.2 12.9 5 10.6 10.1 8.2 12 3Z" />
        <path d="M18 17.5 18.8 19.2 20.5 20 18.8 20.8 18 22.5 17.2 20.8 15.5 20 17.2 19.2 18 17.5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 12h16" />
      <path d="M12 4v16" />
    </svg>
  )
}

export default function ChatWidget() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    createMessage('bot', 'Hola. Soy Neary AI. Cuéntame qué quieres resolver y te llevo por la ruta correcta.'),
  ])
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!bodyRef.current) return
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, isOpen])

  const quickReplies = useMemo(
    () => ['Quiero CompuNegocio', 'Necesito infraestructura', 'Quiero CRM y automatización', 'Necesito sitio web', 'Quiero cotizar hoy'],
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

  const escalationSummary = useMemo(() => {
    const userText = messages.filter((message) => message.role === 'user').map((message) => message.text).join(' | ')
    const intent = detectIntent(userText)
    const priority = detectPriority(userText)

    const intentMap: Record<Intent, string> = {
      compunegocio: 'CompuNegocio / punto de venta',
      infraestructura: 'Infraestructura / nube',
      automatizacion: 'CRM y automatización',
      diseno: 'Diseño web / ecommerce',
      general: 'Diagnóstico general',
    }

    return [
      'Hola, quiero continuar con un asesor de NearTec.',
      '',
      `Intento detectado: ${intentMap[intent]}`,
      `Prioridad detectada: ${priority}`,
      '',
      'Contexto del chat:',
      messages.map((message) => `${message.role === 'user' ? 'Cliente' : 'Neary AI'}: ${message.text}`).join('\n'),
    ].join('\n')
  }, [messages])

  return (
    <div className={`chat-widget ${isOpen ? 'chat-widget--open' : ''}`}>
      {isOpen ? (
        <div className="chat-widget__panel" role="dialog" aria-label="Neary AI">
          <div className="chat-widget__header">
            <div>
              <p className="chat-widget__eyebrow">Asistente comercial</p>
              <h3 className="chat-widget__title">Neary AI</h3>
            </div>

            <button type="button" onClick={() => setIsOpen(false)} className="chat-widget__close" aria-label="Cerrar asistente">
              Cerrar
            </button>
          </div>

          <div ref={bodyRef} className="chat-widget__body" aria-live="polite" role="log">
            {messages.map((message) => (
              <div key={message.id} className={message.role === 'bot' ? 'chat-bubble chat-bubble--bot' : 'chat-bubble chat-bubble--user'}>
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
                placeholder="Escribe tu necesidad en una frase..."
                className="chat-widget__input"
                maxLength={MAX_MESSAGE_LENGTH}
              />

              <button type="submit" className="btn-primary chat-widget__submit">
                Enviar
              </button>
            </form>

            <button type="button" onClick={() => openWhatsApp(escalationSummary)} className="btn-secondary chat-widget__whatsapp">
              Enviar a asesor
            </button>
          </div>
        </div>
      ) : (
        <div className={`contact-hub ${menuOpen ? 'contact-hub--open' : ''}`}>
          {menuOpen ? (
            <div className="contact-hub__menu">
              <button type="button" className="contact-hub__option" onClick={() => openWhatsApp('Hola, quiero información de NearTec.') }>
                <span className="contact-hub__icon contact-hub__icon--wa"><BubbleIcon type="whatsapp" /></span>
                <span>
                  <strong>WhatsApp</strong>
                  <small>Hablar ahora</small>
                </span>
              </button>
              <button type="button" className="contact-hub__option" onClick={() => { setIsOpen(true); setMenuOpen(false) }}>
                <span className="contact-hub__icon contact-hub__icon--ai"><BubbleIcon type="ai" /></span>
                <span>
                  <strong>Neary AI</strong>
                  <small>Filtrar y cotizar</small>
                </span>
              </button>
            </div>
          ) : null}

          <button type="button" onClick={() => setMenuOpen((prev) => !prev)} className="chat-widget__trigger" aria-label="Abrir opciones de contacto">
            <BubbleIcon type="hub" />
          </button>
        </div>
      )}
    </div>
  )
}
