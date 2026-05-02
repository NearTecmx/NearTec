'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, Send, X } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

export default function FloatingAssist() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const send = () => {
    const text = message.trim() || 'Hola NearTec, quiero orientación para mi empresa.'
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="v52-assist">
      {open && (
        <div className="v52-assist-panel">
          <div className="v52-assist-head">
            <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={46} height={46} />
            <div>
              <b>Neary AI</b>
              <span>Asistente tecnológico</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar Neary">
              <X />
            </button>
          </div>

          <div className="v52-assist-body">
            <p>
              Soy Neary AI. Te ayudo a ubicar si necesitas web, app, CRM,
              automatización, IA, CompuNegocio, CN7, nube, soporte o desarrollo a medida.
            </p>
            <div>
              <button type="button" onClick={() => setMessage('Necesito una web o app para mi empresa.')}>
                Web o app
              </button>
              <button type="button" onClick={() => setMessage('Quiero automatizar procesos y seguimiento.')}>
                Automatización
              </button>
              <button type="button" onClick={() => setMessage('Quiero revisar CompuNegocio, CN7 o soporte.')}>
                Operación
              </button>
            </div>
          </div>

          <div className="v52-assist-input">
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Cuéntame qué necesitas..."
            />
            <button type="button" onClick={send} aria-label="Enviar por WhatsApp">
              <Send />
            </button>
          </div>
        </div>
      )}

      <div className="v52-assist-dock">
        <a
          className="v52-wa-fab"
          href={`https://wa.me/${CONTACT.whatsappNumber}`}
          aria-label="WhatsApp NearTec"
        >
          <MessageCircle />
        </a>
        <button className="v52-ai-fab" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir Neary AI">
          <Image src="/images/brand/neary-symbol.webp" alt="Neary AI" width={52} height={52} />
        </button>
      </div>
    </div>
  )
}
