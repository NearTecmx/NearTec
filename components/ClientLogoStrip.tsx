import Image from 'next/image'

const clientLogos = [
  { src: '/images/clientes/LogoGasmart-1536x559-1.png', alt: 'Gasmart', width: 220, height: 80 },
  { src: '/images/clientes/logoGusher.png', alt: 'Gusher', width: 180, height: 58 },
  { src: '/images/clientes/Tijuana.png', alt: 'Tijuana', width: 150, height: 54 },
  { src: '/images/clientes/Radio-Latina-Logo-480x268-1.png', alt: 'Radio Latina', width: 126, height: 70 },
  { src: '/images/clientes/500x200-300x120-1.png', alt: 'Cliente aliado', width: 150, height: 60 },
  { src: '/images/clientes/17309355_10154235752766536_1316533844752353531_n-917x675-1.png', alt: 'Cliente NearTec', width: 94, height: 68 },
]

export default function ClientLogoStrip() {
  const logos = [...clientLogos, ...clientLogos]

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="client-proof cinematic-reveal">
        <div className="client-proof__head">
          <div>
            <p className="client-proof__eyebrow">Prueba social</p>
            <h2 className="client-proof__title">Marcas y operaciones que ya confiaron en NearTec.</h2>
          </div>
          <p className="client-proof__copy">
            Experiencia real en medios, retail, soluciones fiscales, ecommerce y operaciones con más exigencia técnica.
          </p>
        </div>

        <div className="client-marquee" aria-label="Logos de clientes y marcas">
          <div className="client-marquee__track">
            {logos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="client-logo-card">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="client-logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
