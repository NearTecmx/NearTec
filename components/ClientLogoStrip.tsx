import Image from 'next/image'

const clientLogos = [
  { src: '/images/clientes/LogoGasmart-1536x559-1.png', alt: 'Gasmart' },
  { src: '/images/clientes/Radio-Latina-Logo-480x268-1.png', alt: 'Radio Latina' },
  { src: '/images/clientes/Tijuana.png', alt: 'Tijuana' },
  { src: '/images/clientes/logoGusher.png', alt: 'Gusher' },
  { src: '/images/clientes/500x200-300x120-1.png', alt: 'Cliente NearTec' },
  { src: '/images/clientes/17309355_10154235752766536_1316533844752353531_n-917x675-1.png', alt: 'Cliente NearTec' },
]

export default function ClientLogoStrip() {
  const logos = [...clientLogos, ...clientLogos]
  return (
    <section className="section compact client-strip-section-v3">
      <div className="container client-panel client-panel-v3">
        <div className="section-head left">
          <span className="eyebrow">Clientes y proyectos</span>
          <h2>Experiencia real en web, operación y sistemas.</h2>
          <p>Trayectoria aplicada en proyectos comerciales, infraestructura y soluciones digitales para negocios.</p>
        </div>
        <div className="logo-marquee logo-marquee-v3" aria-label="Clientes NearTec">
          <div className="logo-track logo-track-v3">
            {logos.map((logo, index) => (
              <div className="logo-card logo-card-v3" key={`${logo.src}-${index}`}>
                <Image src={logo.src} alt={logo.alt} width={180} height={72} sizes="180px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
