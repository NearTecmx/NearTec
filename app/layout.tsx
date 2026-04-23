import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import './final-fix.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NearTec',
  url: 'https://neartec.com',
  logo: 'https://neartec.com/images/neartec-logo-real.png',
  email: 'meta@itimbre.com',
  telephone: '+52 664 404 6194',
  description:
    'NearTec integra sitio web, ecommerce, CRM, automatización, CompuNegocio, nube, hosting, VPS, correo y emailing para empresas que necesitan vender más y operar con más orden.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    addressCountry: 'MX',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9ac43b',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://neartec.com'),
  title: {
    default: 'NearTec | Sitio, automatización, operación e infraestructura',
    template: '%s | NearTec',
  },
  description:
    'NearTec te ayuda con sitio web, CRM, automatización, CompuNegocio, nube, hosting, VPS, correo y emailing para vender más y operar sin fricción.',
  keywords: [
    'NearTec',
    'CompuNegocio',
    'CRM',
    'automatización',
    'hosting',
    'VPS',
    'correo corporativo',
    'emailing',
    'CN7',
    'Tijuana',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'NearTec',
    title: 'NearTec | Sitio, automatización, operación e infraestructura',
    description:
      'Diseño web, CRM, automatización, CompuNegocio, nube e infraestructura para vender mejor.',
    images: [{ url: '/images/og-cover-neartec.png', width: 1200, height: 630, alt: 'NearTec' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec | Sitio, automatización, operación e infraestructura',
    description:
      'Diseño web, CRM, automatización, CompuNegocio, nube e infraestructura para vender mejor.',
    images: ['/images/og-cover-neartec.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="site-vfx" aria-hidden="true">
          <span className="site-vfx__grid" />
          <span className="site-vfx__glow site-vfx__glow--one" />
          <span className="site-vfx__glow site-vfx__glow--two" />
          <span className="site-vfx__beam" />
          <span className="site-vfx__particles" />
        </div>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
