'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  CONTACT,
  FAQ_SUGGESTIONS,
  CN7_BACKUP_MONTHLY_USD,
  CN7_HOSTED_MONTHLY_USD,
  IMPLEMENTATION_PRICE_MXN,
  SUPPORT_HOURLY_PRICE_MXN,
  DEVELOPMENT_HOURLY_PRICE_MXN,
} from '@/lib/neartec-pricing'

const QUICK_MENU_MESSAGE = 'Hola, quiero información y una propuesta de NearTec.'
const MAX_INPUT = 320

type MessageRole = 'bot' | 'user'
interface Message {
  id: string
  role: MessageRole
  text: string
}

interface FAQEntry {
  keys: string[]
  answer: string
}

const FAQ_BANK: FAQEntry[] = [
  {
    keys: ['que vende', 'qué vende', 'servicios', 'que hace neartec', 'qué hace neartec'],
    answer:
      'NearTec vende cinco líneas principales: sitio web y ecommerce, CRM y automatización, CompuNegocio, infraestructura cloud y servicios de nube CN7. Cuando el proyecto también necesita facturación o timbrado, NearTec puede conectarlo con iTimbre.',
  },
  {
    keys: ['compunegocio', 'punto de venta', 'inventario', 'caja'],
    answer:
      'CompuNegocio sirve para controlar ventas, inventario, usuarios por estación, timbres y operación diaria. El rango base inicia en $450 MXN por licencia al mes para 1 a 3 estaciones.',
  },
  {
    keys: ['cn7', 'respaldo', 'nube', 'base de datos'],
    answer:
      `NearTec maneja dos rutas principales de nube CN7: con respaldo por ${CN7_BACKUP_MONTHLY_USD} USD al mes y hospedado por ${CN7_HOSTED_MONTHLY_USD} USD al mes. Se usa para operar remoto y no depender de una sola máquina.`,
  },
  {
    keys: ['crm', 'automatizacion', 'automatización', 'lead', 'seguimiento', 'whatsapp', 'campaña'],
    answer:
      'NearTec puede ayudarte con CRM, filtros de leads, automatización comercial, agenda, secuencias y seguimiento para que ventas responda más rápido y con mejor contexto.',
  },
  {
    keys: ['sitio', 'landing', 'web', 'ecommerce', 'pagina', 'página'],
    answer:
      'NearTec desarrolla sitios web, landing pages y ecommerce con estructura para explicar mejor tu oferta, convertir más y conectar el sitio con seguimiento comercial.',
  },
  {
    keys: ['hosting', 'vps', 'correo', 'infraestructura', 'servidor'],
    answer:
      'En infraestructura, NearTec puede montar hosting, VPS, correo corporativo, continuidad operativa, respaldos y soporte técnico.',
  },
  {
    keys: ['precio', 'cuanto cuesta', 'cuánto cuesta', 'cotizacion', 'cotización'],
    answer:
      `Sí manejamos rangos base: CompuNegocio desde $450 MXN/mes, implementación base ${IMPLEMENTATION_PRICE_MXN.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })}, soporte ${SUPPORT_HOURLY_PRICE_MXN.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })} por hora y desarrollo ${DEVELOPMENT_HOURLY_PRICE_MXN.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })} por hora. Si quieres, te llevo a una cotización rápida.`,
  },
  {
    keys: ['implementacion', 'implementación', 'soporte', 'desarrollo'],
    answer:
      `La implementación base documentada arranca en ${IMPLEMENTATION_PRICE_MXN.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })}. El soporte técnico base es de ${SUPPORT_HOURLY_PRICE_MXN.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })} por hora y el desarrollo de ${DEVELOPMENT_HOURLY_PRICE_MXN.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })} por hora.`,
  },
  {
    keys: ['facturacion', 'facturación', 'timbrado', 'cfdi', 'itimbre', 'pac'],
    answer:
      'NearTec no se presenta como PAC, pero cuando el proyecto necesita facturación o timbrado puede integrarse con iTimbre, que maneja web service, autofacturación, nómina y otras rutas fiscales.',
  },
  {
    keys: ['demo', 'asesor', 'llamada', 'hablar', 'whats'],
    answer:
      'Sí. Si ya quieres avanzar, lo más rápido es mandarte a WhatsApp con el contexto listo para que un asesor continúe sin perder tiempo.',
  },
]

function createMessage(role: MessageRole, text: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    text,
  }
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function detectReply(text: string): { answer: string; matched: boolean } {
  const normalized = normalize(text)
  const match = FAQ_BANK.find((entry) => entry.keys.some((key) => normalized.includes(normalize(key))))

  if (match) {
    return { answer: match.answer, matched: true }
  }

  return {
    matched: false,
    answer:
      'Puedo ayudarte con servicios, rangos base, CompuNegocio, nube, CRM, sitio web o integración con iTimbre. Si tu caso ya es específico, te conviene pasar directo a WhatsApp para no perder el lead.',
  }
}

function openWhatsApp(text: string) {
  const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function ChatWidget() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    createMessage('bot', 'Hola, soy Neary AI. Puedo ayudarte con servicios, precios base y la mejor ruta para cotizar.'),
  ])
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setChatOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!panelRef.current) return
    panelRef.current.scrollTop = panelRef.current.scrollHeight
  }, [messages, chatOpen])

  const summaryForWhatsApp = useMemo(() => {
    const userContext = messages
      .filter((item) => item.role === 'user')
      .map((item) => item.text)
      .join(' | ')

    return [
      'Hola, quiero seguir con un asesor de NearTec.',
      '',
      `Contexto: ${userContext || 'Consulta general'}`,
      '',
      'Historial:',
      messages.map((item) => `${item.role === 'user' ? 'Cliente' : 'Neary AI'}: ${item.text}`).join('\n'),
    ].join('\n')
  }, [messages])

  function submitMessage(text: string) {
    const clean = text.trim().slice(0, MAX_INPUT)
    if (!clean) return

    const response = detectReply(clean)
    const nextMessages = [
      ...messages,
      createMessage('user', clean),
      createMessage('bot', response.answer),
    ]

    if (!response.matched) {
      nextMessages.push(
        createMessage('bot', 'Si quieres, te paso ahora mismo a WhatsApp para que ventas continúe con tu caso.'),
      )
    }

    setMessages(nextMessages.slice(-18))
    setInput('')
  }

  return (
    <div className="assist-dock">
      {chatOpen ? (
        <div className="assist-chat" role="dialog" aria-label="Neary AI">
          <div className="assist-chat__header">
            <div>
              <p className="assist-chat__eyebrow">Neary AI</p>
              <h3 className="assist-chat__title">Respuestas rápidas para no perder el lead</h3>
            </div>
            <button type="button" className="assist-chat__close" onClick={() => setChatOpen(false)}>
              Cerrar
            </button>
          </div>

          <div ref={panelRef} className="assist-chat__body">
            {messages.map((message) => (
              <div key={message.id} className={`assist-bubble ${message.role === 'user' ? 'assist-bubble--user' : 'assist-bubble--bot'}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="assist-chat__suggestions">
            {FAQ_SUGGESTIONS.map((question) => (
              <button key={question} type="button" className="assist-chip" onClick={() => submitMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          <form
            className="assist-chat__form"
            onSubmit={(event) => {
              event.preventDefault()
              submitMessage(input)
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, MAX_INPUT))}
              placeholder="Escribe tu pregunta en una frase"
              className="assist-chat__input"
            />
            <button type="submit" className="assist-chat__submit">
              Enviar
            </button>
          </form>

          <button type="button" className="assist-chat__whatsapp" onClick={() => openWhatsApp(summaryForWhatsApp)}>
            Pasar a WhatsApp
          </button>
        </div>
      ) : null}

      <div className={`assist-menu ${menuOpen ? 'assist-menu--open' : ''}`}>
        <button
          type="button"
          className="assist-option"
          onClick={() => {
            setChatOpen(false)
            setMenuOpen(false)
            openWhatsApp(QUICK_MENU_MESSAGE)
          }}
        >
          <span className="assist-option__icon">💬</span>
          <span>
            <strong>WhatsApp</strong>
            <small>Hablar ahora</small>
          </span>
        </button>
        <button
          type="button"
          className="assist-option"
          onClick={() => {
            setChatOpen(true)
            setMenuOpen(false)
          }}
        >
          <span className="assist-option__icon">✦</span>
          <span>
            <strong>Neary AI</strong>
            <small>Filtrar y cotizar</small>
          </span>
        </button>
      </div>

      <button
        type="button"
        className="assist-trigger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Abrir acciones rápidas"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '×' : '+'}
      </button>
    </div>
  )
}
