import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/neartec-data'
const routes = ['', '/landing', '/diagnostico', '/cotizador', '/compunegocio', '/cn7', '/crm-automatizacion', '/diseno-web', '/soporte', '/casos', '/recursos', '/contacto', '/privacidad', '/soluciones']
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: 'weekly', priority: route === '' ? 1 : 0.8 })) }
