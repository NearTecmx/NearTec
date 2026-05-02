'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { CONTACT } from '@/lib/neartec-data'
import { QUICK_SUGGESTIONS, getNearyAnswer } from '@/lib/neary-knowledge'

type Message = { id: string; role: 'bot' | 'user'; text: string }
const id = () => Math.random().toString(16).slice(2)

function NearyMark(){
  return (
    <span className="neary-mark">
      <Image
        src="/images/brand/neary-symbol.webp"
        alt="Neary AI"
        width={28}
        height={28}
      />
    </span>
  )
}

function WaIcon(){
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.02 2C6.56 2 2.12 6.44 2.12 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.12-2.87-7.01Z"/>
    </svg>
  )
}

export default function FloatingAssist(){
  const [menu,setMenu]=useState(false)
  const [chat,setChat]=useState(false)
  const [input,setInput]=useState('')
  const [messages,setMessages]=useState<Message[]>([
    {
      id:id(),
      role:'bot',
      text:'Soy Neary AI. Te ayudo a decidir si necesitas web, apps, automatización, CRM, CompuNegocio, CN7, nube, soporte o desarrollo tecnológico a medida.'
    }
  ])

  const ref=useRef<HTMLDivElement>(null)

  const wa=useMemo(
    ()=>`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola NearTec, quiero una cotización o diagnóstico para un proyecto tecnológico.')}`,
    []
  )

  useEffect(()=>{
    ref.current?.scrollTo({top:ref.current.scrollHeight,behavior:'smooth'})
  },[messages,chat])

  function send(text:string){
    const clean=text.trim()
    if(!clean) return
    const res=getNearyAnswer(clean)
    setMessages(m=>[
      ...m,
      {id:id(),role:'user',text:clean},
      {id:id(),role:'bot',text:res.answer}
    ])
    setInput('')
  }

  return (
    <div className="assist">
      {chat && (
        <section className="assist-chat" aria-label="Chat Neary AI">
          <header>
            <div className="assist-headline">
              <NearyMark />
              <div>
                <b>Neary AI</b>
                <small>Asistente tecnológico NearTec</small>
              </div>
            </div>
            <button onClick={()=>setChat(false)}>×</button>
          </header>

          <div className="assist-body" ref={ref}>
            {messages.map(m=><p key={m.id} className={m.role}>{m.text}</p>)}
          </div>

          <div className="assist-chips">
            {QUICK_SUGGESTIONS.slice(0,4).map(s=>
              <button key={s} onClick={()=>send(s)}>{s}</button>
            )}
          </div>

          <form onSubmit={e=>{e.preventDefault();send(input)}}>
            <input
              value={input}
              onChange={e=>setInput(e.target.value)}
              placeholder="Cuéntame qué necesitas..."
            />
            <button>Enviar</button>
          </form>
        </section>
      )}

      <div className={`assist-menu ${menu?'open':''}`}>
        <a href={wa} target="_blank" rel="noreferrer">
          <WaIcon/>WhatsApp directo
        </a>
        <button onClick={()=>{setChat(true);setMenu(false)}}>
          <NearyMark/>Hablar con Neary AI
        </button>
      </div>

      <button
        className="assist-trigger"
        aria-label="Abrir Neary AI y WhatsApp"
        onClick={()=> chat ? setChat(false) : setMenu(v=>!v)}
      >
        <NearyMark/>
      </button>
    </div>
  )
}
