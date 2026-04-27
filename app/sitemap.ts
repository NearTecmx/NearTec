import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

const baseUrl = 'https://neartec.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/soluciones',
    '/automatizacion',
    '/compunegocio',
    '/infraestructura',
    '/diseno-web',
    '/emailing',
    '/sistemas',
    '/casos',
    '/recursos',
    '/blog',
    '/cotizador',
    '/diagnostico',
    '/contacto',
    '/nosotros',
  ]

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-04-25'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.74,
  })) as MetadataRoute.Sitemap

  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.68,
  })) as MetadataRoute.Sitemap

  return [...staticRoutes, ...posts]
}
