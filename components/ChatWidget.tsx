'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const WHATSAPP_NUMBER = '526644046194'
const MAX_MESSAGE_LENGTH = 420

type Mode = 'chooser' | 'ai'
type MessageRole = 'bot' | 'user'

interface Message {
  id: string
  role: MessageRole
  text: string
}

function createMessage(role: MessageRole, text: string): Message {
  return { id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, role, text }
}

function openWhatsApp(text: string) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}

function classifyArea(text: string) {
  const lower = text.toLowerCase()
  if (lower.includes('compunegocio') || lower.includes('inventario') || lower.includes('punto de venta')) return 'CompuNegocio'
  if (lower.includes('hosting') || lower.includes('vps') || lower.includes('servidor') || lower.includes('correo') || lower.includes('nube')) return 'Infraestructura'
  if (lower.includes('crm') || lower.includes('automat') || lower.includes('lead') || lower.includes('seguimiento') || lower.includes('whatsapp')) return 'Automatización'
  if (lower.includes('sitio') || lower.includes('landing') || lower.includes('ecommerce') || lower.includes('pagina')) return 'Sitio web'
  if (lower.includes('factura') || lower.includes('timbre') || lower.includes('fiscal')) return 'Integración fiscal'
  return 'Diagnóstico general'
}

function aiReply(text: string) {
  const area = classifyArea(text)
  const replies: Record<string, string> = {
    'CompuNegocio': 'Si lo tuyo es control de ventas, inventario o caja, conviene revisar CompuNegocio y el número de licencias que necesitas.',
    'Infraestructura': 'Si el problema es hosting, correo, VPS o nube, la ruta correcta es infraestructura con respaldo y continuidad.',
    'Automatización': 'Si quieres más orden comercial, la mejor ruta es CRM, automatización y seguimiento conectado a ventas.',
    'Sitio web': 'Si quieres vender mejor, empecemos por un sitio o landing que explique tu oferta y empuje el contacto.',
    'Integración fiscal': 'Si además necesitas timbrado o control fiscal, NearTec puede conectar la capa fiscal con iTimbre.',
    'Diagnóstico general': 'Cuéntame qué vendes y qué te está frenando. Con eso te digo cuál servicio conviene primero.',
  }
  return { area, text: replies[area] }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('chooser')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    createMessage('bot', 'Hola, soy Neary AI. Cuéntame qué necesitas y te diré qué servicio te conviene primero.'),
  ])
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!bodyRef.current) return
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, isOpen, mode])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const lastUserText = [...messages].reverse().find((item) => item.role === 'user')?.text ?? ''
  const lastArea = useMemo(() => classifyArea(lastUserText), [lastUserText])

  const whatsappSummary = useMemo(
    () =>
      [
        'Hola, quiero hablar con NearTec.',
        `Área detectada: ${lastArea}`,
        '',
        ...messages.map((message) => `${message.role === 'user' ? 'Cliente' : 'Neary AI'}: ${message.text}`),
      ].join('\n'),
    [lastArea, messages],
  )

  function sendMessage(text: string) {
    const clean = text.trim().slice(0, MAX_MESSAGE_LENGTH)
    if (!clean) return
    const reply = aiReply(clean)
    setMessages((current) => [...current, createMessage('user', clean), createMessage('bot', reply.text)])
    setInput('')
  }

  return (
    <div className={`chat-widget chat-widget--premium ${isOpen ? 'chat-widget--open' : ''}`}>
      {isOpen ? (
        <div className="chat-widget__panel chat-widget__panel--chooser" role="dialog" aria-label="Contacto NearTec">
          <div className="chat-widget__header">
            <div>
              <p className="chat-widget__eyebrow">Contacto rápido</p>
              <h3 className="chat-widget__title">NearTec</h3>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="chat-widget__close" aria-label="Cerrar panel">
              Cerrar
            </button>
          </div>

          {mode === 'chooser' ? (
            <div className="chat-widget__chooser">
              <button type="button" className="chat-widget__channel chat-widget__channel--whatsapp" onClick={() => openWhatsApp('Hola, quiero información y cotización de NearTec.') }>
                <span className="chat-widget__channel-icon">WA</span>
                <span>
                  <strong>WhatsApp</strong>
                  <small>Habla con un asesor</small>
                </span>
              </button>
              <button type="button" className="chat-widget__channel chat-widget__channel--ai" onClick={() => setMode('ai')}>
                <span className="chat-widget__channel-icon">AI</span>
                <span>
                  <strong>Neary AI</strong>
                  <small>Te guía al servicio correcto</small>
                </span>
              </button>
            </div>
          ) : (
            <>
              <div ref={bodyRef} className="chat-widget__body" aria-live="polite" role="log">
                {messages.map((message) => (
                  <div key={message.id} className={message.role === 'bot' ? 'chat-bubble chat-bubble--bot' : 'chat-bubble chat-bubble--user'}>
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="chat-widget__footer">
                <div className="chat-widget__quick-replies">
                  {['Quiero sitio web', 'Quiero CRM', 'Quiero CompuNegocio', 'Quiero nube'].map((reply) => (
                    <button key={reply} type="button" onClick={() => sendMessage(reply)} className="chat-chip">{reply}</button>
                  ))}
                </div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault()
                    sendMessage(input)
                  }}
                  className="chat-widget__form"
                >
                  <input type="text" value={input} onChange={(event) => setInput(event.target.value.slice(0, MAX_MESSAGE_LENGTH))} placeholder="Escribe tu necesidad..." className="chat-widget__input" maxLength={MAX_MESSAGE_LENGTH} />
                  <button type="submit" className="btn-primary chat-widget__submit">Enviar</button>
                </form>
                <div className="rounded-[18px] border border-[rgba(12,75,255,0.1)] bg-[var(--brand-surface)] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                  Área detectada: <span className="text-[var(--brand-ink)]">{lastArea}</span>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <button type="button" onClick={() => setMode('chooser')} className="btn-secondary">Cambiar canal</button>
                  <button type="button" onClick={() => openWhatsApp(whatsappSummary)} className="btn-primary">Pasar a WhatsApp</button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <button type="button" onClick={() => { setIsOpen(true); setMode('chooser') }} className="chat-widget__trigger" aria-label="Abrir contacto NearTec">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M12 3C7.03 3 3 6.92 3 11.75c0 2.46 1.05 4.68 2.74 6.27L5 21l3.06-1.1c1.2.39 2.53.6 3.94.6 4.97 0 9-3.92 9-8.75S16.97 3 12 3Zm-3 9.1c-.64 0-1.15-.51-1.15-1.15S8.36 9.8 9 9.8s1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Zm3 0c-.64 0-1.15-.51-1.15-1.15s.51-1.15 1.15-1.15 1.15.51 1.15 1.15-.51 1.15-1.15 1.15Z" />
          </svg>
        </button>
      )}
    </div>
  )
}
