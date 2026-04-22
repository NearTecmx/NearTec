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
    'NearTec integra crecimiento, operación e infraestructura para empresas que necesitan vender mejor, operar mejor y trabajar con más control.',
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
    'NearTec integra crecimiento, operación e infraestructura con sitio, CRM, automatización, CompuNegocio, cloud y continuidad para empresas que necesitan operar mejor.',
  applicationName: 'NearTec',
  authors: [{ name: 'NearTec' }],
  creator: 'NearTec',
  publisher: 'NearTec',
  keywords: [
    'NearTec',
    'Technology Near You',
    'infraestructura empresarial',
    'sistemas empresariales',
    'cloud empresarial',
    'CompuNegocio',
    'CN7',
    'automatización comercial',
    'hosting',
    'correo corporativo',
    'Tijuana',
    'México',
  ],
  alternates: {
    canonical: '/',
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
  },
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
    title: 'NearTec | Technology Near You',
    description:
      'Infraestructura, sistemas empresariales, continuidad operativa, implementación y atención directa para empresas que necesitan operar mejor.',
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
      'Infraestructura, sistemas empresariales, continuidad operativa, implementación y atención directa para empresas que necesitan operar mejor.',
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
        <WhatsAppButton />
      </body>
    </html>
  )
}