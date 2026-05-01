import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/neartec-data'
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${siteUrl}/sitemap.xml` } }
