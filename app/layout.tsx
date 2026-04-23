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
  logo: 'https://neartec.com/images/neartec-logo.png',
  email: 'meta@itimbre.com',
  telephone: '+52 664 404 6194',
  description:
    'NearTec vende sitios web, sistemas empresariales, automatización e infraestructura para empresas que quieren vender y operar mejor.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    addressCountry: 'MX',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+52 664 404 6194',
      contactType: 'sales',
      areaServed: 'MX',
      availableLanguage: ['es', 'en'],
    },
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9ac43b',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://neartec.com'),
  title: {
    default: 'NearTec | Sitios web, sistemas, automatización e infraestructura',
    template: '%s | NearTec',
  },
  description:
    'NearTec vende sitios web, CompuNegocio, automatización, infraestructura, correo corporativo y soluciones para operar mejor.',
  applicationName: 'NearTec',
  authors: [{ name: 'NearTec' }],
  creator: 'NearTec',
  publisher: 'NearTec',
  keywords: [
    'NearTec',
    'sitios web',
    'CompuNegocio',
    'automatización',
    'infraestructura',
    'correo corporativo',
    'hosting',
    'Tijuana',
    'México',
  ],
  alternates: { canonical: '/' },
  category: 'technology',
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/images/neartec-logo.png', type: 'image/png' }],
    shortcut: '/images/neartec-logo.png',
    apple: '/images/neartec-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://neartec.com',
    siteName: 'NearTec',
    title: 'NearTec | Sitios web, sistemas, automatización e infraestructura',
    description:
      'Una forma más clara de vender, operar y sostener tu empresa con sitio web, sistemas y soporte real.',
    images: [
      {
        url: '/images/og-cover-neartec.png',
        width: 1200,
        height: 630,
        alt: 'NearTec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec | Sitios web, sistemas, automatización e infraestructura',
    description:
      'NearTec vende sitios web, sistemas empresariales, automatización e infraestructura para empresas que quieren crecer con orden.',
    images: ['/images/og-cover-neartec.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}