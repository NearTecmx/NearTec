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
    CompuNegocio: 'Si buscas control de ventas, inventario o caja, conviene revisar CompuNegocio y el número de licencias que necesitas.',
    Infraestructura: 'Si el problema es hosting, correo, VPS o nube, la mejor ruta es infraestructura con respaldo y continuidad.',
    Automatización: 'Si quieres más orden comercial, la ruta correcta es CRM, automatización y seguimiento conectado a ventas.',
    'Sitio web': 'Si quieres vender mejor, empecemos por un sitio o landing que explique tu oferta y empuje el contacto.',
    'Integración fiscal': 'Si además necesitas timbrado o control fiscal, NearTec puede conectar la capa fiscal con iTimbre.',
    'Diagnóstico general': 'Cuéntame qué vendes y qué te está frenando. Con eso te digo qué servicio conviene primero.',
  }
  return { area, text: replies[area] }
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Zm6.3 10.2.9 2.2 2.2.9-2.2.9-.9 2.2-.9-2.2-2.2-.9 2.2-.9.9-2.2ZM5.5 14.5l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2.5A9.46 9.46 0 0 0 4 16.93L2.8 21.2l4.42-1.16A9.54 9.54 0 1 0 12.04 2.5Zm0 17.2a7.74 7.74 0 0 1-3.96-1.08l-.28-.16-2.63.69.7-2.57-.18-.27a7.75 7.75 0 1 1 6.35 3.39Zm4.3-5.8c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.11 3.65.57.24 1.02.38 1.37.48.58.18 1.12.15 1.54.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
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
                <span className="chat-widget__channel-icon" aria-hidden="true"><WhatsAppIcon /></span>
                <span>
                  <strong>WhatsApp</strong>
                  <small>Habla con un asesor</small>
                </span>
              </button>
              <button type="button" className="chat-widget__channel chat-widget__channel--ai" onClick={() => setMode('ai')}>
                <span className="chat-widget__channel-icon" aria-hidden="true"><SparkIcon /></span>
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
                  <button type="button" onClick={() => setMode('chooser')} className="btn-secondary">Canal</button>
                  <button type="button" onClick={() => openWhatsApp(whatsappSummary)} className="btn-primary">WhatsApp</button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <button type="button" onClick={() => { setIsOpen(true); setMode('chooser') }} className="chat-widget__trigger" aria-label="Abrir contacto NearTec">
          <span className="chat-widget__trigger-stack" aria-hidden="true">
            <span className="chat-widget__trigger-main"><SparkIcon /></span>
            <span className="chat-widget__trigger-mini"><WhatsAppIcon /></span>
          </span>
        </button>
      )}
    </div>
  )
}
