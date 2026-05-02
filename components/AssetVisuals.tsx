import Image from 'next/image'

export function HomeHeroAsset(){
  return (
    <div className="asset-hero-shell" aria-label="Ecosistema tecnológico NearTec">
      <div className="asset-hero-stack asset-desktop">
        <Image
          src="/images/visuals/hero-home-desktop.webp"
          alt="Visual del ecosistema NearTec con web, CRM, automatización, nube, soporte y operación conectada"
          fill
          className="asset-hero-img"
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
      </div>

      <div className="asset-hero-stack asset-mobile">
        <Image
          src="/images/visuals/hero-home-mobile.webp"
          alt="Visual móvil del ecosistema NearTec"
          fill
          className="asset-hero-img"
          priority
          sizes="100vw"
        />
      </div>

      <div className="asset-hero-badge badge-a">Web y apps</div>
      <div className="asset-hero-badge badge-b">Automatización e IA</div>
      <div className="asset-hero-badge badge-c">Infraestructura y soporte</div>
    </div>
  )
}

export function ServiceShowcaseVisual(){
  const cards = [
    { src: '/images/visuals/visual-web.webp', title: 'Web y desarrollo', alt: 'Visual de web y desarrollo NearTec' },
    { src: '/images/visuals/visual-crm.webp', title: 'CRM y automatización', alt: 'Visual de CRM y automatización NearTec' },
    { src: '/images/visuals/visual-compunegocio.webp', title: 'CompuNegocio', alt: 'Visual de CompuNegocio NearTec' },
    { src: '/images/visuals/visual-cn7.webp', title: 'CN7 / nube', alt: 'Visual de CN7 y nube NearTec' },
  ]

  return (
    <div className="asset-service-showcase" aria-label="Visuales de soluciones NearTec">
      {cards.map(card => (
        <div key={card.title} className="asset-service-card">
          <div className="asset-service-image">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="asset-service-img"
              sizes="(max-width: 900px) 100vw, 24vw"
            />
          </div>
          <b>{card.title}</b>
        </div>
      ))}
    </div>
  )
}
