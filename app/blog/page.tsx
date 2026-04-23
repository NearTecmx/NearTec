import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

const categories = ['Ventas', 'Operación', 'CompuNegocio', 'Automatización', 'Cloud', 'Integración']

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[36px] border border-[var(--brand-line)] bg-white/90 p-6 shadow-[var(--brand-shadow)] backdrop-blur-sm sm:p-8">
        <span className="nt-badge nt-badge--soft">Blog NearTec</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] text-[var(--brand-ink)] sm:text-5xl">
          Noticias, guías y temas que ayudan a vender mejor y operar con más orden.
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[var(--brand-muted)]">
          Este espacio está pensado para dueños, operaciones, comercial y marketing que necesitan entender qué conviene mover primero dentro de su empresa.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="service-pill service-pill--soft">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, index) => (
          <article key={post.slug} className={`service-card cinematic-reveal delay-${(index % 4) + 1}`}>
            <div className="flex items-center justify-between gap-3">
              <span className="nt-badge nt-badge--soft">{post.category}</span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-muted)]">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h2 className="service-card__title mt-5">{post.title}</h2>
            <p className="service-card__copy">{post.excerpt}</p>
            <Link href="/contacto" className="service-card__link">
              Pedir información
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
