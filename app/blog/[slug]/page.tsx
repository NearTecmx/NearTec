import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost } from '@/lib/blog-data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo solicitado no existe o ya no está disponible.',
      alternates: { canonical: '/blog' },
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="section page article-page">
      <div className="container article-shell">
        <Link href="/blog" className="article-back">
          ← Blog NearTec
        </Link>

        <header className="article-hero">
          <span className="eyebrow">
            {post.category} · {post.readTime}
          </span>

          <h1>{post.title}</h1>

          <p>{post.excerpt}</p>

          <div className="article-meta">
            <span>
              Actualizado:{' '}
              {new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(
                new Date(`${post.date}T12:00:00`),
              )}
            </span>

            <span>{post.sourceLabel}</span>
          </div>
        </header>

        <section className="takeaway-panel">
          <h2>Lectura ejecutiva</h2>

          <div className="mini-grid">
            {post.takeaways.map((item) => (
              <article key={item}>
                <h3>Clave</h3>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="article-content">
          {post.body.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>

              {section.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="source-panel">
          <h2>Fuentes consultadas</h2>

          <div className="stack-list">
            {post.sources.map((source) => (
              <article key={source.url}>
                <h3>{source.label}</h3>

                <a href={source.url} target="_blank" rel="noreferrer">
                  Abrir fuente
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta article-cta">
          <span className="eyebrow light">NearTec</span>

          <h2>Convierte este diagnóstico en una ruta de implementación.</h2>

          <p>
            Revisa qué necesita tu empresa: web, automatización, CompuNegocio, CN7, nube o
            soporte.
          </p>

          <div className="button-row">
            <Link href="/cotizador" className="btn btn-green">
              Hacer diagnóstico
            </Link>

            <Link href="/contacto" className="btn btn-dark">
              Contacto
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}