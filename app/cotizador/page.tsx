import CotizadorNearTec from '@/components/CotizadorNearTec'

export default function CotizadorPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-3xl text-center cinematic-reveal">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Cotizador NearTec
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
            Cotiza de forma clara y sin rodeos.
          </h1>
          <p className="mt-6 text-[15px] leading-8 text-[#67717a] sm:text-base">
            Elige el servicio, revisa una base real cuando aplica y envía el resumen a ventas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}