import Image from 'next/image'

const clientLogos = [
  { src: '/images/clientes/LogoGasmart-1536x559-1.png', alt: 'Gasmart', width: 210, height: 76 },
  { src: '/images/clientes/logoGusher.png', alt: 'Gusher', width: 180, height: 56 },
  { src: '/images/clientes/Tijuana.png', alt: 'Tijuana', width: 145, height: 54 },
  { src: '/images/clientes/Radio-Latina-Logo-480x268-1.png', alt: 'Radio Latina', width: 125, height: 70 },
  { src: '/images/clientes/500x200-300x120-1.png', alt: 'Cliente aliado', width: 150, height: 60 },
  { src: '/images/clientes/17309355_10154235752766536_1316533844752353531_n-917x675-1.png', alt: 'Cliente NearTec', width: 92, height: 68 },
]

export default function ClientLogoStrip() {
  const logos = [...clientLogos, ...clientLogos]

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="client-proof cinematic-reveal">
        <div className="client-proof__head">
          <div>
            <p className="client-proof__eyebrow">Prueba social</p>
            <h2 className="client-proof__title">Clientes y marcas con experiencia real en el ecosistema.</h2>
          </div>
          <p className="client-proof__copy">
            Estos assets ya existen en el proyecto y ayudan a reforzar que NearTec no parte de cero: ya ha trabajado con marcas, medios y operaciones reales.
          </p>
        </div>

        <div className="client-marquee" aria-label="Logos de clientes">
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
