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
      ? 'Ya entendí que vienes por CompuNegocio o punto de venta. Lo mejor aquí es mandarte a propuesta guiada con licencias, timbres y nube ya filtrados.'
      : 'Perfecto. Si buscas CompuNegocio, te puedo orientar sobre estaciones, timbres, CN7 y rango base antes de pasar con ventas.'
  }

  if (intent === 'infraestructura') {
    return priority === 'alta'
      ? 'Esto suena a infraestructura con decisión cercana. Lo mejor aquí es revisar nube, respaldo, correo y continuidad en una llamada corta.'
      : 'Perfecto. NearTec te ayuda con hosting, VPS, correo corporativo, CN7 y continuidad operativa sin meter ruido.'
  }

  if (intent === 'automatizacion') {
    return 'Si tu dolor es seguimiento, CRM o automatización, conviene filtrar qué entra a ventas, qué va a nurturing y qué pasa a demo.'
  }

  if (intent === 'diseno') {
    return 'Si el enfoque es sitio, landing o ecommerce, lo importante no es solo diseño: es explicar mejor, convertir mejor y conectar con seguimiento.'
  }

  return 'Te ayudo a filtrar si tu necesidad cae en CompuNegocio, infraestructura, automatización o diseño web para enviarte por la ruta correcta.'
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    createMessage('bot', 'Hola. Soy el filtro inteligente de NearTec. Cuéntame qué quieres resolver y te llevo por la ruta correcta.'),
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
      'Quiero CompuNegocio',
      'Necesito infraestructura',
      'Quiero CRM y automatización',
      'Necesito sitio web',
      'Quiero una cotización hoy',
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
      messages.map((message) => `${message.role === 'user' ? 'Cliente' : 'Asistente'}: ${message.text}`).join('\n'),
    ].join('\n')
  }, [messages])

  return (
    <div className={`chat-widget ${isOpen ? 'chat-widget--open' : ''}`}>
      {isOpen ? (
        <div className="chat-widget__panel" role="dialog" aria-label="Asistente de NearTec">
          <div className="chat-widget__header">
            <div>
              <p className="chat-widget__eyebrow">Lead filtering</p>
              <h3 className="chat-widget__title">NearTec</h3>
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
