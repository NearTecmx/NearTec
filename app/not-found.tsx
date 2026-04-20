import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full rounded-[34px] border border-[var(--brand-line)] bg-white p-8 text-center shadow-[var(--brand-shadow)] md:p-12">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--brand-muted)]">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-black text-[var(--brand-ink)] md:text-5xl">
          Página no encontrada
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--brand-muted)]">
          La ruta que intentaste abrir no existe dentro de esta versión de NearTec o fue movida
          durante la limpieza del proyecto.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>

          <a
            href="https://wa.me/526631656898?text=Hola,%20necesito%20ayuda%20para%20encontrar%20una%20secci%C3%B3n%20de%20NearTec."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--brand-line)] bg-white px-5 py-3 text-sm font-extrabold text-[var(--brand-ink)] transition hover:border-[var(--brand-green)]"
          >
            Pedir ayuda por WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}