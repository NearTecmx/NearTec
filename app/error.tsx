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
    <main className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full rounded-[34px] border border-[var(--brand-line)] bg-white p-8 text-center shadow-[var(--brand-shadow)] md:p-12">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--brand-muted)]">
          Error
        </p>
        <h1 className="mt-3 text-4xl font-black text-[var(--brand-green)] md:text-5xl">
          Algo salió mal
        </h1>
        <p className="mt-4 text-[var(--brand-muted)]">
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
