import Image from 'next/image'

const logos = [
  { src: '/images/clientes/LogoGasmart-1536x559-1.png', alt: 'Gasmart', width: 1536, height: 559 },
  { src: '/images/clientes/logoGusher.png', alt: 'Gusher', width: 603, height: 186 },
  { src: '/images/clientes/Radio-Latina-Logo-480x268-1.png', alt: 'Radio Latina', width: 480, height: 268 },
  { src: '/images/clientes/Tijuana.png', alt: 'Tijuana', width: 364, height: 138 },
  { src: '/images/clientes/500x200-300x120-1.png', alt: 'Cliente NearTec', width: 300, height: 120 },
]

export default function ClientLogoStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="nt-logo-strip">
        <div className="nt-logo-strip__head">
          <span className="nt-badge nt-badge--soft">Empresas que ya operan con NearTec</span>
          <h2 className="nt-logo-strip__title">Más claridad, más control y mejor operación en empresas reales.</h2>
        </div>

        <div className="nt-logo-strip__grid">
          {logos.map((logo) => (
            <div key={logo.src} className="nt-logo-tile">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="nt-logo-tile__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
