'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CONTACT } from '@/lib/neartec-pricing'

type ChatRole = 'bot' | 'user'

interface ChatMessage {
  id: string
  role: ChatRole
  text: string
}

const MAX_MESSAGE_LENGTH = 220
const quickReplies = ['Quiero sitio web', 'Quiero CompuNegocio', 'Quiero automatización', 'Quiero infraestructura']

const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'bot',
    text: 'Hola. Soy el asistente de NearTec. Dime qué quieres cotizar y te ayudo a identificar el servicio correcto.',
  },
]

function classifyLead(message: string) {
  const normalized = message.toLowerCase()

  if (
    normalized.includes('compunegocio') ||
    normalized.includes('punto de venta') ||
    normalized.includes('inventario') ||
    normalized.includes('caja')
  ) {
    return {
      area: 'CompuNegocio',
      fit: 'Buen encaje',
      step: 'Te conviene revisar punto de venta, estaciones, timbres y demo.',
      reply:
        'Si el dolor está en ventas, inventario o control, lo más probable es que necesites CompuNegocio. Puedes cotizarlo o pasarlo a demo.',
    }
  }

  if (
    normalized.includes('sitio') ||
    normalized.includes('pagina') ||
    normalized.includes('web') ||
    normalized.includes('ecommerce') ||
    normalized.includes('tienda en linea')
  ) {
    return {
      area: 'Sitio web',
      fit: 'Buen encaje',
      step: 'Te conviene revisar sitio web, estructura comercial y CTA.',
      reply:
        'Si necesitas que tu negocio se entienda y venda mejor en internet, NearTec te puede ayudar con sitio web, landing o ecommerce.',
    }
  }

  if (
    normalized.includes('automat') ||
    normalized.includes('crm') ||
    normalized.includes('lead') ||
    normalized.includes('seguimiento') ||
    normalized.includes('campaña')
  ) {
    return {
      area: 'Automatización comercial',
      fit: 'Buen encaje',
      step: 'Te conviene revisar CRM, seguimiento y filtrado de leads.',
      reply:
        'Si hoy te llegan prospectos pero no les das seguimiento rápido, la capa correcta es automatización comercial y CRM.',
    }
  }

  if (
    normalized.includes('hosting') ||
    normalized.includes('vps') ||
    normalized.includes('servidor') ||
    normalized.includes('correo') ||
    normalized.includes('cn7') ||
    normalized.includes('nube')
  ) {
    return {
      area: 'Infraestructura',
      fit: 'Buen encaje',
      step: 'Te conviene revisar hosting, respaldo, correo, VPS o CN7.',
      reply:
        'Si el problema está en hosting, correo o continuidad, lo mejor es revisar infraestructura y nube.',
    }
  }

  return {
    area: 'Diagnóstico general',
    fit: 'Por revisar',
    step: 'Te conviene empezar por servicios o cotizador.',
    reply:
      'NearTec vende sitios web, CompuNegocio, automatización, emailing e infraestructura. Si quieres, dime qué problema quieres resolver y te oriento.',
  }
}

function openWhatsApp(message: string) {
  const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function ChatWidget() {
  const [mode, setMode] = useState<'closed' | 'menu' | 'chat'>('closed')
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')
  const [currentLead, setCurrentLead] = useState(() => classifyLead(''))
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, mode])

  const escalationSummary = useMemo(
    () =>
      [
        'Hola, quiero ayuda de NearTec.',
        `Área detectada: ${currentLead.area}`,
        `Encaje: ${currentLead.fit}`,
        `Siguiente paso sugerido: ${currentLead.step}`,
      ].join('\n'),
    [currentLead]
  )

  function sendMessage(text: string) {
    const cleanText = text.trim()
    if (!cleanText) return

    const lead = classifyLead(cleanText)
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-user`, role: 'user', text: cleanText },
      { id: `${Date.now()}-bot`, role: 'bot', text: lead.reply },
    ])
    setCurrentLead(lead)
    setInput('')
    setMode('chat')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chat-widget">
      {mode === 'closed' ? (
        <button
          type="button"
          onClick={() => setMode('menu')}
          className="chat-widget__trigger"
          aria-label="Abrir opciones de contacto de NearTec"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M12 3C7.03 3 3 6.92 3 11.75c0 2.46 1.05 4.68 2.74 6.27L5 21l3.06-1.1c1.2.39 2.53.6 3.94.6 4.97 0 9-3.92 9-8.75S16.97 3 12 3Zm-3 9.1c-.64 0-1.15-.51-1.15-1.15S8.36 9.8 9 9.8s1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Z" />
          </svg>
        </button>
      ) : mode === 'menu' ? (
        <div className="chat-widget__menu-panel">
          <div className="chat-widget__menu-header">
            <p className="chat-widget__menu-title">¿Cómo quieres hablar con NearTec?</p>
            <button type="button" onClick={() => setMode('closed')} className="chat-widget__close" aria-label="Cerrar opciones">
              Cerrar
            </button>
          </div>

          <div className="chat-widget__menu-actions">
            <button
              type="button"
              onClick={() => openWhatsApp('Hola, quiero información de NearTec.')}
              className="chat-widget__menu-action"
            >
              <span>WhatsApp</span>
              <small>Hablar con ventas</small>
            </button>

            <button
              type="button"
              onClick={() => setMode('chat')}
              className="chat-widget__menu-action chat-widget__menu-action--dark"
            >
              <span>IA NearTec</span>
              <small>Identificar el servicio correcto</small>
            </button>
          </div>
        </div>
      ) : (
        <div className="chat-widget__panel">
          <div className="chat-widget__header">
            <div>
              <p className="chat-widget__eyebrow">Asistente NearTec</p>
              <h3 className="chat-widget__title">Te ayudo a encontrar el servicio correcto</h3>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => setMode('menu')} className="chat-widget__close" aria-label="Volver">
                Menú
              </button>
              <button type="button" onClick={() => setMode('closed')} className="chat-widget__close" aria-label="Cerrar">
                Cerrar
              </button>
            </div>
          </div>

          <div className="chat-widget__summary-box">
            <span className="chat-widget__summary-pill">{currentLead.fit}</span>
            <p className="chat-widget__summary-title">{currentLead.area}</p>
            <p className="chat-widget__summary-text">{currentLead.step}</p>
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
                placeholder="Ejemplo: quiero un sitio web para vender más"
                className="chat-widget__input"
                maxLength={MAX_MESSAGE_LENGTH}
              />
              <button type="submit" className="btn-primary chat-widget__submit">
                Enviar
              </button>
            </form>

            <button type="button" onClick={() => openWhatsApp(escalationSummary)} className="btn-secondary chat-widget__whatsapp">
              Pasar a WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  )
}