import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
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
    'NearTec integra diseño web, CRM, automatización, CompuNegocio, cloud e infraestructura para empresas que necesitan vender y operar mejor.',
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
    default: 'NearTec | Crecimiento, operación e infraestructura',
    template: '%s | NearTec',
  },
  description:
    'NearTec vende sitio web, CRM y automatización, CompuNegocio, cloud, CN7 e infraestructura para empresas que quieren vender más y operar con más orden.',
  keywords: [
    'NearTec',
    'CompuNegocio',
    'CRM',
    'automatización',
    'infraestructura cloud',
    'sitio web',
    'CN7',
    'Tijuana',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'NearTec',
    title: 'NearTec | Crecimiento, operación e infraestructura',
    description: 'Diseño, automatización, sistemas e infraestructura para vender mejor.',
    images: [{ url: '/images/og-cover-neartec.png', width: 1200, height: 630, alt: 'NearTec' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec | Crecimiento, operación e infraestructura',
    description: 'Diseño, automatización, sistemas e infraestructura para vender mejor.',
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
