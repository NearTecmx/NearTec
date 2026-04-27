import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog y recursos 2026',
  description:
    'Artículos de NearTec sobre ventas digitales, automatización, CompuNegocio, nube, seguridad, eCommerce y operación para PyMEs en México.',
}

export default function BlogPage() {
  return (
    <section className="section page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Blog NearTec</span>
          <h1>Ideas actuales para vender mejor y operar con más orden.</h1>
          <p>
            Recursos basados en tendencias reales de México 2026: mobile-first, Hot Sale, ciberseguridad, nube, CRM y seguimiento comercial.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card featured">
              <span>{post.category} · {post.readTime}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <small>Para: {post.audience}</small>
              <b>Leer artículo →</b>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
