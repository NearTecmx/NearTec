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
    <section className="ntx-section ntx-section--compact" aria-labelledby="clientes-heading">
      <div className="ntx-container">
        <div className="ntx-client-panel">
          <div className="ntx-client-panel__head">
            <span className="ntx-badge">Clientes y proyectos</span>
            <h2 id="clientes-heading">Experiencia real en operación, web y sistemas.</h2>
            <p>Logos y proyectos incluidos desde los assets reales del repo. La prueba social debe reforzar confianza, no decorar.</p>
          </div>
          <div className="ntx-client-marquee" aria-label="Clientes NearTec">
            <div className="ntx-client-marquee__track">
              {logos.map((logo, index) => (
                <div key={`${logo.src}-${index}`} className="ntx-client-card">
                  <Image src={logo.src} alt={logo.alt} width={260} height={120} className="ntx-client-card__image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
