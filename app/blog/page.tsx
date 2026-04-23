import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPage() {
  return (
    <div>
      <section className="nt-page-hero">
        <div className="nt-page-hero__inner">
          <span className="nt-badge nt-badge--soft">Blog NearTec</span>
          <h1 className="nt-page-title">Contenido útil para atraer leads y cerrar con más claridad.</h1>
          <p className="nt-page-copy">
            Noticias, artículos y guías sobre sitios web, automatización, cloud, sistemas y operación empresarial.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className={`nt-service-card cinematic-reveal delay-${(index % 4) + 1}`}>
              <div className="nt-service-card__accent" />
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">{post.category} · {post.date}</p>
              <h2 className="mt-3 text-[1.35rem] font-black leading-[1.1] text-[#0f1115]">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#67717a]">{post.excerpt}</p>
              <div className="mt-5">
                <Link href="/contacto" className="btn-secondary">Leer más</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
