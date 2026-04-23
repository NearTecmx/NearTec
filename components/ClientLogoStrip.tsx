import Image from 'next/image'

const clientLogos = [
  { src: '/images/clientes/LogoGasmart-1536x559-1.png', alt: 'Gasmart', width: 210, height: 76 },
  { src: '/images/clientes/logoGusher.png', alt: 'Gusher', width: 180, height: 56 },
  { src: '/images/clientes/Tijuana.png', alt: 'Tijuana', width: 145, height: 54 },
  { src: '/images/clientes/Radio-Latina-Logo-480x268-1.png', alt: 'Radio Latina', width: 125, height: 70 },
  { src: '/images/clientes/500x200-300x120-1.png', alt: 'Cliente', width: 150, height: 60 },
  { src: '/images/clientes/17309355_10154235752766536_1316533844752353531_n-917x675-1.png', alt: 'Cliente aliado', width: 90, height: 66 },
]

export default function ClientLogoStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[var(--brand-line)] bg-white/90 px-5 py-5 shadow-[var(--brand-shadow-soft)] backdrop-blur-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-muted)]">Clientes y marcas que han confiado</p>
            <h2 className="mt-2 text-2xl font-black text-[var(--brand-ink)]">Experiencia real en sectores distintos.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--brand-muted)]">
            NearTec ha trabajado con marcas, operaciones y negocios que necesitaban vender mejor, operar con más orden o conectar su parte comercial con su base tecnológica.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="client-logo-card">
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="client-logo-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
