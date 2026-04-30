import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import TechBackground from '@/components/TechBackground'
import { CONTACT } from '@/lib/neartec-pricing'

const siteUrl = 'https://neartec.com'
const ogImage = '/images/og-cover-neartec.png'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NearTec | Tecnología para vender, operar y crecer',
    template: '%s | NearTec',
  },
  description:
    'NearTec integra diseño web, automatización, CRM, CompuNegocio, CN7, hosting, VPS, correo corporativo, emailing, soporte remoto y conexión fiscal con iTimbre cuando aplica.',
  applicationName: 'NearTec',
  generator: 'Next.js',
  referrer: 'strict-origin-when-cross-origin',
  keywords: [
    'NearTec',
    'integrador tecnológico',
    'diseño web empresarial',
    'CRM',
    'automatización comercial',
    'CompuNegocio',
    'CN7',
    'hosting empresarial',
    'VPS',
    'correo corporativo',
    'emailing',
    'soporte remoto',
    'iTimbre',
    'Tijuana',
    'Baja California',
    'México',
  ],
  authors: [{ name: 'NearTec' }],
  creator: 'NearTec',
  publisher: 'NearTec',
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NearTec | Tecnología para vender, operar y crecer',
    description:
      'Web, automatización, CRM, punto de venta, nube, correo, emailing y soporte en una sola ruta tecnológica para empresas.',
    url: siteUrl,
    siteName: 'NearTec',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'NearTec integra tecnología empresarial, automatización, CompuNegocio, CN7, web, nube y soporte.',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec | Tecnología para vender, operar y crecer',
    description:
      'Soluciones tecnológicas para empresas: web, automatización, POS, nube, correo, emailing y soporte.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/neartec-logo-real.png',
    apple: '/images/neartec-logo-real.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#07110b',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: 'NearTec',
    alternateName: 'NearTec Technology Near You',
    url: siteUrl,
    logo: `${siteUrl}/images/neartec-logo-real.png`,
    image: `${siteUrl}${ogImage}`,
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Benito Juárez 2034 Int. 601, Zona Centro',
      addressLocality: 'Tijuana',
      addressRegion: 'Baja California',
      postalCode: '22000',
      addressCountry: 'MX',
    },
    areaServed: ['México', 'Tijuana', 'Baja California', 'Sur de Estados Unidos'],
    makesOffer: [
      'Diseño web empresarial',
      'Automatización comercial y CRM',
      'Sistema punto de venta CompuNegocio',
      'CN7 servidor y respaldo en nube',
      'Hosting, VPS y servidores FTP',
      'Correo corporativo y emailing',
      'Soporte remoto',
      'Conexión con iTimbre cuando aplica',
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'NearTec',
    url: siteUrl,
    inLanguage: 'es-MX',
    publisher: { '@id': `${siteUrl}/#localbusiness` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/#services`,
    name: 'Integración tecnológica empresarial NearTec',
    provider: { '@id': `${siteUrl}/#localbusiness` },
    areaServed: { '@type': 'Country', name: 'México' },
    serviceType: [
      'Diseño web',
      'Automatización comercial',
      'CRM',
      'Punto de venta',
      'Infraestructura cloud',
      'Correo corporativo',
      'Emailing',
      'Soporte remoto',
    ],
  }

  return (
    <html lang="es-MX">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <TechBackground />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}