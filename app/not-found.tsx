import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <span className="nt-badge nt-badge--soft">404</span>
      <h1 className="mt-5 text-4xl font-black text-[var(--brand-ink)] sm:text-5xl">Esta sección no está disponible.</h1>
      <p className="mt-5 text-[15px] leading-8 text-[var(--brand-muted)]">
        Vuelve al inicio o entra por contacto si necesitas que te guiemos directo a la ruta correcta.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">Ir al inicio</Link>
        <Link href="/contacto" className="btn-secondary">Contacto</Link>
      </div>
    </div>
  )
}
