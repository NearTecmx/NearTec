'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="section page">
      <div className="container">
        <div className="nt-card contact-card" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Error</span>
          <h1>Algo salió mal.</h1>
          <p className="lead">La sección no cargó correctamente. Puedes reintentar o volver al inicio.</p>
          <div className="button-row" style={{ justifyContent: 'center' }}>
            <button type="button" onClick={reset} className="btn btn-green">
              Reintentar
            </button>
            <Link href="/" className="btn btn-outline">
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
