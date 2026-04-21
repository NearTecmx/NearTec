import Image from 'next/image'
import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'

type IconType = 'growth' | 'ops' | 'infra' | 'fiscal'

function Icon({ type }: { type: IconType }) {
  if (type === 'growth') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
        <path
          d="M5 16.5 10 11.5l3 3L19 8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 8.5H19v4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'ops') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
        <rect x="4" y="5" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="5" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="13" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="7" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  if (type === 'infra') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
        <rect x="4" y="5" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="14" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8" cy="7.5" r="1" fill="currentColor" />
        <circle cx="8" cy="16.5" r="1" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d="M7 6h10M7 12h10M7 18h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="5" cy="6" r="1" fill="currentColor" />
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="5" cy="18" r="1" fill="currentColor" />
    </svg>
  )
}

const modules = [
  {
    icon: 'growth' as const,
    title: 'Crecimiento',
    body: 'Sitios, ecommerce, captación y automatización comercial.',
  },
  {
    icon: 'ops' as const,
    title: 'Operación',
    body: 'CRM, seguimiento, punto de venta y procesos conectados.',
  },
  {
    icon: 'infra' as const,
    title: 'Infraestructura',
    body: 'Hosting, VPS, correo, nube y continuidad operativa.',
  },
  {
    icon: 'fiscal' as const,
    title: 'Conexión fiscal',
    body: 'Integración con iTimbre para facturación y cumplimiento.',
  },
]

const industries = ['PyMEs', 'Retail', 'Servicios', 'Manufactura', 'Binacional']

const bento = [
  'Sitios web y ecommerce',
  'Infraestructura cloud',
  'CRM + automatización',
  'Emailing corporativo',
  'CompuNegocio / POS',
  'Facturación con iTimbre',
]

const problems = [
  {
    title: 'Vender más',
    text: 'Captación, seguimiento y presencia digital en un mismo flujo.',
  },
  {
    title: 'Operar mejor',
    text: 'Menos fricción entre áreas, herramientas y responsables.',
  },
  {
    title: 'Tener control',
    text: 'Infraestructura estable, visibilidad y continuidad.',
  },
]

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden pb-8">
      <section className="nt-hero-section">
        <div className="nt-hero-section__grid" />
        <div className="nt-hero-section__glow nt-hero-section__glow--left" />
        <div className="nt-hero-section__glow nt-hero-section__glow--right" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-16 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="nt-badge nt-badge--soft">Technology Near You</span>

            <h1 className="mt-5 max-w-4xl text-[2.55rem] font-black leading-[0.92] text-[#0f1115] sm:text-[3.45rem] lg:text-[4.4rem]">
              Centraliza crecimiento, operación e infraestructura en un solo ecosistema.
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#66726c] sm:text-base">
              Sitios web, automatización, correo, emailing, CRM, infraestructura cloud,
              punto de venta y conexión fiscal. Menos fricción, más control.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/soluciones" className="btn-primary">
                Explorar soluciones
              </Link>

              <Link href="/contacto" className="btn-secondary">
                Iniciar diagnóstico
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {industries.map((chip) => (
                <span key={chip} className="nt-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <div className="nt-hero-visual">
              <div className="nt-hero-visual__media hidden md:block">
                <Image
                  src="/images/neartec-hero.jpg"
                  alt="NearTec plataforma empresarial"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="nt-hero-visual__overlay" />
              </div>

              <div className="nt-hero-visual__media md:hidden">
                <Image
                  src="/images/neartec-hero-mobile.jpg"
                  alt="NearTec plataforma empresarial móvil"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="nt-hero-visual__overlay" />
              </div>

              <div className="nt-hero-visual__hud">
                {['Web', 'CRM', 'Infraestructura', 'Facturación'].map((item) => (
                  <span key={item} className="nt-hud">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="nt-trust-strip cinematic-reveal delay-2">
          <span className="nt-trust-strip__label">Señales</span>

          <div className="nt-trust-strip__items">
            {['12+ años', 'Operación binacional', 'Integración con iTimbre', 'Acompañamiento operativo'].map((item) => (
              <span key={item} className="nt-trust-strip__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal max-w-2xl">
          <span className="nt-badge nt-badge--soft">Qué resuelve</span>

          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
            NearTec no vende piezas sueltas. Ordena toda la operación.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {problems.map((item, index) => (
            <article key={item.title} className={`nt-problem-card cinematic-reveal delay-${index + 1}`}>
              <h3 className="nt-problem-card__title">{item.title}</h3>
              <p className="nt-problem-card__body">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="soluciones" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal max-w-2xl">
          <span className="nt-badge nt-badge--soft">Plataforma</span>

          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
            Una arquitectura digital completa para empresas que ya no quieren improvisar.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((item, index) => (
            <article key={item.title} className={`nt-feature-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="nt-feature-card__icon">
                <Icon type={item.icon} />
              </div>

              <h3 className="mt-5 text-[1.08rem] font-black text-[#0f1115]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#66726c]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="software" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-software-band">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "url('/images/neartec-tech-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="cinematic-reveal">
              <span className="nt-badge nt-badge--soft">Módulos</span>

              <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
                Un stack conectado, no un menú aislado de servicios.
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-7 text-[#66726c]">
                Web, CRM, emailing, nube, POS e integración fiscal dentro de una sola lógica.
              </p>
            </div>

            <div className="cinematic-reveal delay-2 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative min-h-[280px] overflow-hidden rounded-[28px] border border-[rgba(15,17,21,0.08)] bg-[#11151c]">
                <Image
                  src="/images/neartec-software-abstract.png"
                  alt="Stack de software NearTec"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,21,0.12)_0%,rgba(15,17,21,0.28)_100%)]" />
              </div>

              <div className="flex flex-wrap gap-3 lg:max-w-[310px]">
                {bento.map((item) => (
                  <span key={item} className="nt-soft-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-before-after cinematic-reveal">
          <div className="nt-before-after__col">
            <span className="nt-before-after__tag">Antes</span>
            <ul className="nt-before-after__list">
              <li>Proveedores separados</li>
              <li>Hosting suelto</li>
              <li>Ventas sin trazabilidad</li>
              <li>Correos aislados</li>
            </ul>
          </div>

          <div className="nt-before-after__col nt-before-after__col--accent">
            <span className="nt-before-after__tag">Después</span>
            <ul className="nt-before-after__list">
              <li>Stack integrado</li>
              <li>Seguimiento automatizado</li>
              <li>Infraestructura conectada</li>
              <li>Control operativo real</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal max-w-2xl">
          <span className="nt-badge nt-badge--soft">Diagnóstico inteligente</span>

          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
            Descubre qué stack necesita tu empresa en menos de 2 minutos.
          </h2>

          <p className="mt-4 max-w-md text-[15px] leading-7 text-[#66726c]">
            Base sugerida, rango de inversión y siguiente paso recomendado.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Contacto</span>

            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Recibe una propuesta guiada y continúa con una ruta clara.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Agendar llamada
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20una%20propuesta%20guiada%20de%20NearTec."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
