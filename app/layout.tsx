import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import WhatsAppButton from '@/components/WhatsAppButton'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NearTec',
  url: 'https://neartec.com',
  logo: 'https://neartec.com/images/neartec-logo.png',
  email: 'info@neartec.com',
  telephone: '+52 663 165 6898',
  description:
    'Software, infraestructura, cloud, soporte e implementación para empresas que necesitan operar mejor.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    addressCountry: 'MX',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+52 663 165 6898',
      contactType: 'sales',
      areaServed: 'MX',
      availableLanguage: ['es', 'en'],
    },
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9bc53d',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://neartec.com'),
  title: {
    default: 'NearTec | Technology Near You',
    template: '%s | NearTec',
  },
  description:
    'Software, infraestructura, cloud, soporte e implementación para empresas que necesitan operar mejor.',
  applicationName: 'NearTec',
  keywords: [
    'NearTec',
    'Technology Near You',
    'software empresarial',
    'infraestructura',
    'cloud',
    'sistemas empresariales',
    'implementación',
    'soporte técnico',
    'Tijuana',
    'México',
  ],
  authors: [{ name: 'NearTec' }],
  creator: 'NearTec',
  publisher: 'NearTec',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/images/neartec-logo.png', type: 'image/png' },
    ],
    shortcut: '/icon.svg',
    apple: '/images/neartec-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://neartec.com',
    siteName: 'NearTec',
    title: 'NearTec | Technology Near You',
    description:
      'Software, infraestructura, cloud, soporte e implementación para empresas que necesitan operar mejor.',
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
    title: 'NearTec | Technology Near You',
    description:
      'Software, infraestructura, cloud, soporte e implementación para empresas que necesitan operar mejor.',
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
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
      </body>
    </html>
  )
}
