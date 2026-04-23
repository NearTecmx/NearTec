import Image from 'next/image'

const logos = [
  { src: '/images/clientes/500x200-300x120-1.png', alt: 'Cliente corporativo destacado de NearTec', className: 'w-[132px] sm:w-[148px]' },
  { src: '/images/clientes/LogoGasmart-1536x559-1.png', alt: 'Gasmart', className: 'w-[156px] sm:w-[188px]' },
  { src: '/images/clientes/Radio-Latina-Logo-480x268-1.png', alt: 'Radio Latina', className: 'w-[110px] sm:w-[128px]' },
  { src: '/images/clientes/Tijuana.png', alt: 'Marca Tijuana', className: 'w-[124px] sm:w-[146px]' },
  { src: '/images/clientes/logoGusher.png', alt: 'Gusher', className: 'w-[138px] sm:w-[166px]' },
  { src: '/images/clientes/17309355_10154235752766536_1316533844752353531_n-917x675-1.png', alt: 'Cliente destacado NearTec', className: 'w-[92px] sm:w-[108px]' },
] as const

export default function ClientLogoStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="client-proof-panel cinematic-reveal delay-2">
        <div className="client-proof-panel__copy">
          <span className="nt-badge nt-badge--soft">Clientes</span>
          <h2 className="client-proof-panel__title">Empresas que ya han trabajado con NearTec.</h2>
          <p className="client-proof-panel__text">Esta franja existe para dar confianza rápido y reforzar que NearTec ya ha entregado trabajo real.</p>
        </div>
        <div className="client-logo-grid" aria-label="Logos de clientes">
          {logos.map((logo) => (
            <div key={logo.src} className="client-logo-card">
              <Image src={logo.src} alt={logo.alt} width={220} height={100} className={`client-logo-image ${logo.className}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}