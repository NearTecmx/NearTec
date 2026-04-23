import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-data'

export default function BlogPage() {
  const featured = BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0]
  const rest = BLOG_POSTS.filter((post) => post.slug !== featured.slug)

  return (
    <div className="pb-14">
      <section className="nt-page-hero">
        <div className="nt-page-hero__split">
          <div>
            <span className="nt-badge nt-badge--soft">Blog NearTec</span>
            <h1 className="nt-page-title">Noticias, artículos y guías para atraer leads y explicar mejor lo que sí vendes.</h1>
            <p className="nt-page-copy">
              Esta sección está pensada para captar tráfico, resolver dudas reales y llevar al lector hacia contacto, diagnóstico o cotización.
            </p>
            <div className="nt-page-hero__actions">
              <Link href="/cotizador" className="btn-primary">Cotizar</Link>
              <Link href="/contacto" className="btn-secondary">Hablar con ventas</Link>
            </div>
          </div>

          <article className="nt-insight-panel cinematic-reveal delay-2">
            <span className="nt-badge nt-badge--soft">Destacado</span>
            <h2 className="mt-4 text-[2rem] font-black leading-[1.04] text-[var(--brand-ink)]">{featured.title}</h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--brand-muted)]">{featured.excerpt}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#dce8bf] bg-[#f7faef] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#24303a]">{featured.tag}</span>
              <span className="rounded-full border border-[#e6e8ea] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#24303a]">{featured.dateLabel}</span>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post, index) => (
            <article key={post.slug} className={`nt-resource-card nt-resource-card--animated cinematic-reveal delay-${(index % 4) + 1}`}>
              <span className="nt-resource-card__type">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold text-[#24303a]">
                <span>{post.dateLabel}</span>
                <span>Próximamente</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <div className="nt-contact-band cinematic-reveal">
          <div>
            <span className="nt-badge nt-badge--dark">Objetivo comercial</span>
            <h2 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.05] text-white md:text-[2.3rem]">
              El blog no existe para rellenar el sitio. Existe para traer tráfico y convertir interés en contacto.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/cotizador" className="btn-primary">Cotizar</Link>
            <Link href="/contacto" className="btn-secondary btn-secondary--light">Hablar con NearTec</Link>
          </div>
        </div>
      </section>
    </div>
  )
}