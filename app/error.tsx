'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center">
      <div className="surface-card max-w-xl p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
          Error
        </p>
        <h1 className="mt-3 text-4xl font-black text-brand-blue md:text-5xl">
          Algo salió mal
        </h1>
        <p className="mt-4 text-brand-muted">
          Hubo un problema al renderizar esta sección.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="btn-primary">
            Reintentar
          </button>
          <Link href="/" className="btn-secondary">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
