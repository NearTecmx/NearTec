import CotizadorNearTec from '@/components/CotizadorNearTec'

const contactCards = [
  {
    title: 'WhatsApp',
    body: 'Atención directa',
    href: 'https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec.',
  },
  {
    title: 'Correo',
    body: 'info@neartec.com',
    href: 'mailto:info@neartec.com',
  },
  {
    title: 'Teléfono',
    body: '663 165 6898',
    href: 'tel:6631656898',
  },
]

export default function ContactoPage() {
  return (
    <div className="pb-8">
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">Diagnóstico</span>
          <h1 className="nt-page-title">
            Elige canal, comparte contexto y continúa con una propuesta clara.
          </h1>
          <p className="nt-page-copy">
            Sin esperas largas. Sin vueltas innecesarias.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {contactCards.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`nt-layer-card cinematic-reveal delay-${index + 1}`}
            >
              <h2 className="nt-layer-card__title">{item.title}</h2>
              <p className="nt-layer-card__body">{item.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal max-w-2xl">
          <span className="nt-badge nt-badge--soft">Cotizador inteligente</span>
          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
            Descubre qué stack necesita tu empresa.
          </h2>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>
    </div>
  )
}
