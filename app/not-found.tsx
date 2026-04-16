import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center">
      <div className="surface-card max-w-xl p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
          404
        </p>
        <h1 className="mt-3 text-4xl font-black text-brand-blue md:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-brand-muted">
          La ruta solicitada no existe o fue movida. Regresa al inicio o entra
          a una de las dos marcas.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Ir al inicio
          </Link>
          <Link href="/neartec" className="btn-secondary">
            NearTec
          </Link>
          <Link href="/itimbre" className="btn-secondary">
            iTimbre
          </Link>
        </div>
      </div>
    </main>
  )
}
