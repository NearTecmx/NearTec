import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
        Página no encontrada
      </span>
      <h1 className="mt-6 text-4xl font-black text-[#0f1115]">La ruta no existe.</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#67717a]">
        Vuelve al inicio o entra al cotizador para encontrar el servicio correcto.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Ir al inicio
        </Link>
        <Link href="/cotizador" className="btn-secondary">
          Cotizar
        </Link>
      </div>
    </div>
  )
}