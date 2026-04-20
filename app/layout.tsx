import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatWidget from '@/components/ChatWidget'
import Footer from '@/components/Footer'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NearTec',
  url: 'https://neartec.com',
  logo: 'https://neartec.com/images/neartec-logo.png',
  telephone: '+52 663 165 6898',
  email: 'info@neartec.com',
  description:
    'NearTec ofrece infraestructura, sistemas empresariales, continuidad operativa, soporte e implementación para empresas en México.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+52 663 165 6898',
      contactType: 'sales',
      areaServed: 'MX',
      availableLanguage: ['es', 'en'],
    },
  ],
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
  themeColor: '#9bc53d',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://neartec.com'),
  title: {
    default: 'NearTec | Technology Near You',
    template: '%s | NearTec',
  },
  description:
    'Infraestructura, sistemas empresariales, continuidad operativa, implementación y atención directa para empresas que necesitan operar mejor.',
  applicationName: 'NearTec',
  keywords: [
    'NearTec',
    'Technology Near You',
    'infraestructura empresarial',
    'sistemas empresariales',
    'cloud empresarial',
    'implementación',
    'continuidad operativa',
    'CompuNegocio',
    'CN7',
    'Tijuana',
    'México',
  ],
  authors: [{ name: 'NearTec' }],
  creator: 'NearTec',
  publisher: 'NearTec',
  category: 'technology',
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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://neartec.com',
    siteName: 'NearTec',
    title: 'NearTec | Technology Near You',
    description:
      'Infraestructura, sistemas empresariales, continuidad operativa, implementación y atención directa para empresas que necesitan operar mejor.',
    images: [
      {
        url: '/images/og-cover.jpg.png',
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
      'Infraestructura, sistemas empresariales, continuidad operativa, implementación y atención directa para empresas que necesitan operar mejor.',
    images: ['/images/og-cover.jpg.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
