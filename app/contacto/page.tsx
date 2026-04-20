import CotizadorNearTec from '@/components/CotizadorNearTec'

const contactCards = [
  {
    title: 'WhatsApp',
    value: 'Atención directa',
    href: 'https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec.',
  },
  {
    title: 'Correo',
    value: 'info@neartec.com',
    href: 'mailto:info@neartec.com',
  },
  {
    title: 'Teléfono',
    value: '663 165 6898',
    href: 'tel:6631656898',
  },
]

export default function ContactoPage() {
  return (
    <div className="pb-8">
      <section className="section-shell">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Contacto</span>
          <h1 className="section-title">
            Cuéntanos qué necesitas y te ayudamos a avanzar con la mejor ruta.
          </h1>
          <p className="section-copy">
            Atención directa para resolver dudas, revisar tu proyecto y continuar
            con una propuesta clara.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {contactCards.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`premium-card cinematic-reveal delay-${index + 1}`}
            >
              <div className="premium-card__icon">+</div>
              <h2 className="premium-card__title">{item.title}</h2>
              <p className="premium-card__body">{item.value}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell section-shell--soft">
        <div className="section-heading cinematic-reveal">
          <span className="eyebrow">Cotizador</span>
          <h2 className="section-title">
            Recibe una base rápida y continúa con un asesor.
          </h2>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
