import Image from 'next/image'
import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'

type CardIcon = 'infra' | 'cloud' | 'support' | 'deploy'

function FeatureIcon({ type }: { type: CardIcon }) {
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

  if (type === 'cloud') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
        <path
          d="M8.4 18.5H17a3.5 3.5 0 0 0 .4-7A5.2 5.2 0 0 0 7.2 10a3.8 3.8 0 0 0 1.2 8.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'support') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
        <path
          d="M12 3.5 6.5 5.6v5.2c0 4 2.3 7 5.5 9.2 3.2-2.2 5.5-5.2 5.5-9.2V5.6L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d="M5 7h5v4H5V7Zm9 0h5v4h-5V7ZM5 13h5v4H5v-4Zm9-2h5v6h-5v-6ZM10 9h4v2h-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const features = [
  {
    icon: 'infra' as const,
    title: 'Infraestructura',
    body: 'Base tecnológica más estable para operar mejor.',
  },
  {
    icon: 'cloud' as const,
    title: 'Cloud',
    body: 'Continuidad y acceso con menos fricción.',
  },
  {
    icon: 'support' as const,
    title: 'Soporte',
    body: 'Atención directa para resolver rápido.',
  },
  {
    icon: 'deploy' as const,
    title: 'Implementación',
    body: 'Arranque guiado y operación más clara.',
  },
]

const softwareChips = [
  'CompuNegocio',
  'CN7',
  'Punto de venta',
  'Hosting',
  'Mailing',
  'Implementación',
]

const topChips = ['Cloud', 'Sistemas', 'Soporte', 'Atención directa']

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden pb-8">
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/images/neartec-tech-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,197,61,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(15,17,21,0.08),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fbf4_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-16 lg:pt-14">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[rgba(155,197,61,0.24)] bg-[#f3f9e8] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0f1115]">
              Technology Near You
            </span>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-black leading-[0.94] text-[#0f1115] sm:text-[3.4rem] lg:text-[4.25rem]">
              Software, infraestructura y cloud para una operación más inteligente.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#66726c] sm:text-base">
              Soluciones empresariales con atención directa, implementación clara y mejor ritmo.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#cotizador" className="btn-primary">
                Cotizar ahora
              </a>

              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {topChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[rgba(15,17,21,0.08)] bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#0f1115] shadow-[0_12px_24px_rgba(15,17,21,0.05)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="cinematic-reveal delay-2">
            <div className="overflow-hidden rounded-[32px] border border-[rgba(155,197,61,0.12)] bg-[radial-gradient(circle_at_top_right,rgba(155,197,61,0.14),transparent_24%),linear-gradient(180deg,#12161d_0%,#1a2029_100%)] p-4 shadow-[0_24px_50px_rgba(15,17,21,0.16)]">
              <div className="relative hidden aspect-[1.02/1] overflow-hidden rounded-[24px] md:block">
                <Image
                  src="/images/neartec-hero.jpg"
                  alt="NearTec software e infraestructura"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,21,0.1)_0%,rgba(15,17,21,0.42)_100%),linear-gradient(120deg,rgba(255,255,255,0.04)_0%,transparent_46%,rgba(155,197,61,0.12)_100%)]" />
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] md:hidden">
                <Image
                  src="/images/neartec-hero-mobile.jpg"
                  alt="NearTec software e infraestructura móvil"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,21,0.08)_0%,rgba(15,17,21,0.38)_100%),linear-gradient(120deg,rgba(255,255,255,0.04)_0%,transparent_46%,rgba(155,197,61,0.12)_100%)]" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Infraestructura', 'Software', 'Cloud'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(155,197,61,0.18)] bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="cinematic-reveal delay-2 grid gap-3 rounded-[28px] border border-[rgba(226,236,218,0.9)] bg-white/90 p-4 shadow-[0_12px_32px_rgba(15,17,21,0.05)] sm:grid-cols-[160px_1fr] sm:items-center">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#66726c]">
            NearTec
          </span>

          <div className="flex flex-wrap gap-2">
            {['Operación', 'Continuidad', 'Implementación', 'Soporte'].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#f3f9e8] px-4 py-2 text-[12px] font-extrabold text-[#0f1115]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal max-w-2xl">
          <span className="inline-flex rounded-full border border-[rgba(155,197,61,0.24)] bg-[#f3f9e8] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0f1115]">
            Soluciones
          </span>

          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
            Todo más claro desde el primer vistazo.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <article
              key={item.title}
              className={`cinematic-reveal delay-${(index % 4) + 1} rounded-[28px] border border-[rgba(226,236,218,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,251,243,0.92)_100%)] p-6 shadow-[0_12px_32px_rgba(15,17,21,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(155,197,61,0.36)] hover:shadow-[0_20px_38px_rgba(15,17,21,0.08)]`}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#141922_0%,#1b212b_100%)] text-[#9bc53d]">
                <FeatureIcon type={item.icon} />
              </div>

              <h3 className="mt-5 text-[1.08rem] font-black text-[#0f1115]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#66726c]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="software" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[34px] border border-[rgba(226,236,218,0.66)] bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(243,249,232,0.72)_100%)] p-6 sm:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "url('/images/neartec-tech-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="cinematic-reveal">
              <span className="inline-flex rounded-full border border-[rgba(155,197,61,0.24)] bg-[#f3f9e8] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0f1115]">
                Software
              </span>

              <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
                Un ecosistema moderno, limpio y profesional.
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-7 text-[#66726c]">
                Sistemas y servicios listos para operar mejor.
              </p>
            </div>

            <div className="cinematic-reveal delay-2 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-[rgba(15,17,21,0.08)] bg-[#11151c]">
                <Image
                  src="/images/neartec-software-abstract.png"
                  alt="Ecosistema de software NearTec"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,21,0.12)_0%,rgba(15,17,21,0.28)_100%)]" />
              </div>

              <div className="flex flex-wrap gap-3 lg:max-w-[280px]">
                {softwareChips.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(15,17,21,0.08)] bg-white/90 px-4 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#0f1115] shadow-[0_12px_24px_rgba(15,17,21,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(155,197,61,0.36)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cotizador" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal max-w-2xl">
          <span className="inline-flex rounded-full border border-[rgba(155,197,61,0.24)] bg-[#f3f9e8] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0f1115]">
            Cotizador
          </span>

          <h2 className="mt-4 text-[2rem] font-black leading-[1.02] text-[#0f1115] md:text-[2.3rem]">
            Precios reales. Respuesta rápida.
          </h2>

          <p className="mt-4 max-w-md text-[15px] leading-7 text-[#66726c]">
            Calcula una base y continúa con un asesor.
          </p>
        </div>

        <div className="mt-8 cinematic-reveal delay-2">
          <CotizadorNearTec />
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="cinematic-reveal grid gap-6 rounded-[36px] bg-[radial-gradient(circle_at_top_right,rgba(155,197,61,0.18),transparent_25%),linear-gradient(135deg,#171b22_0%,#1f2530_100%)] p-8 shadow-[0_24px_50px_rgba(15,17,21,0.16)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[rgba(255,255,255,0.14)] bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white">
              Contacto
            </span>

            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              Habla con NearTec y continúa con una solución más sólida.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary btn-secondary--light">
              Ir a contacto
            </Link>

            <a
              href="https://wa.me/526631656898?text=Hola,%20quiero%20asesor%C3%ADa%20de%20NearTec."
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
