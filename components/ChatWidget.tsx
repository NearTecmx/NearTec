'use client'

import { useMemo, useState } from 'react'

type Message = {
  role: 'bot' | 'user'
  text: string
}

const WHATSAPP_NUMBER = '526646300473'

function openWhatsApp(text: string) {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
    '_blank',
    'noopener,noreferrer'
  )
}

function getReply(input: string) {
  const text = input.toLowerCase()

  if (text.includes('precio') || text.includes('costo') || text.includes('cotiz')) {
    return 'Sí. Te preparo una cotización guiada por servicio. En NearTec cotizamos infraestructura, soporte, desarrollo y CN7. En iTimbre cotizamos paquetes, timbres y módulos fiscales.'
  }

  if (text.includes('timbre') || text.includes('cfdi') || text.includes('pac') || text.includes('factur')) {
    return 'iTimbre cubre facturación electrónica, PAC, timbres, módulos fiscales y herramientas de validación. Puedo llevarte directo al cotizador o a WhatsApp con un asesor.'
  }

  if (text.includes('compunegocio') || text.includes('erp') || text.includes('hosting') || text.includes('servidor') || text.includes('cloud') || text.includes('cn7')) {
    return 'NearTec cubre infraestructura, hosting, CN7, licencias CompuNegocio y desarrollo a medida. Si me dices cuántas licencias o qué necesitas, te dejo el recorrido listo.'
  }

  if (text.includes('soporte') || text.includes('asesor') || text.includes('humano') || text.includes('vendedor')) {
    return 'Te paso con un asesor por WhatsApp. Ahí te dan seguimiento real, sin vueltas.'
  }

  if (text.includes('distribuidor') || text.includes('revender') || text.includes('comision')) {
    return 'El flujo de distribuidores se apoya en licencias, timbres y seguimiento comercial. Escribe qué vendes o qué cartera tienes y te guío al canal correcto.'
  }

  return 'Cuéntame qué necesitas: NearTec, iTimbre, timbres, licencias, soporte o desarrollo. Te respondo con la ruta correcta.'
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Hola. Soy el asistente virtual. Te guío para cotizar NearTec o iTimbre y te llevo con un asesor cuando ya tengas claro lo que necesitas.',
    },
  ])

  const quickReplies = useMemo(
    () => [
      'Quiero ver precios',
      'Necesito timbres',
      'Necesito CompuNegocio',
      'Hablar con asesor',
    ],
    []
  )

  const sendMessage = (text: string) => {
    const clean = text.trim()
    if (!clean) return

    const reply = getReply(clean)

    setMessages((prev) => [...prev, { role: 'user', text: clean }, { role: 'bot', text: reply }])
    setInput('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {open ? (
        <div className="mb-3 flex h-[520px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-[28px] border border-brand-line bg-white shadow-lift">
          <div className="flex items-start justify-between gap-3 border-b border-brand-line bg-brand-surface px-4 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
                Asistente virtual
              </p>
              <h3 className="text-lg font-black text-brand-blue">NearTec / iTimbre</h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-brand-line px-3 py-1 text-sm font-semibold text-brand-muted transition hover:text-brand-blue"
              aria-label="Cerrar asistente"
            >
              Cerrar
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                  message.role === 'bot'
                    ? 'bg-brand-light text-brand-ink'
                    : 'ml-auto bg-brand-blue text-white'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t border-brand-line p-4">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => sendMessage(label)}
                  className="rounded-full border border-brand-line bg-white px-3 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-green hover:text-brand-green"
                >
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu necesidad..."
                className="input-base flex-1 rounded-2xl"
              />
              <button type="submit" className="btn-primary rounded-2xl px-4">
                Enviar
              </button>
            </form>

            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  'Hola, quiero seguimiento directo para una cotización de NearTec / iTimbre.'
                )
              }
              className="btn-secondary w-full"
            >
              Pasarme a WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-2xl transition hover:scale-105"
          aria-label="Abrir asistente virtual"
          title="Asistente virtual"
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 3C7.03 3 3 6.92 3 11.75c0 2.46 1.05 4.68 2.74 6.27L5 21l3.06-1.1c1.2.39 2.53.6 3.94.6 4.97 0 9-3.92 9-8.75S16.97 3 12 3zm-3 9.1c-.64 0-1.15-.51-1.15-1.15S8.36 9.8 9 9.8s1.15.51 1.15 1.15S9.64 12.1 9 12.1zm3 0c-.64 0-1.15-.51-1.15-1.15S11.36 9.8 12 9.8s1.15.51 1.15 1.15S12.64 12.1 12 12.1zm3 0c-.64 0-1.15-.51-1.15-1.15S14.36 9.8 15 9.8s1.15.51 1.15 1.15S15.64 12.1 15 12.1z" />
          </svg>
        </button>
      )}
    </div>
  )
}
