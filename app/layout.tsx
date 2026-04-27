import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const siteUrl = 'https://neartec.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NearTec | Tecnología, automatización, CompuNegocio e infraestructura para empresas',
    template: '%s | NearTec',
  },
  description:
    'NearTec integra sitio web, automatización comercial, CompuNegocio, CN7, hosting, correo, nube, soporte y seguimiento para que las empresas vendan y operen con más orden.',
  keywords: [
    'NearTec',
    'tecnología empresarial',
    'automatización comercial',
    'CompuNegocio',
    'CN7',
    'punto de venta',
    'desarrollo web',
    'hosting empresarial',
    'soporte TI',
    'Tijuana',
    'México',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NearTec | Tecnología para vender y operar mejor',
    description:
      'Diseño web, CRM, automatización, CompuNegocio, infraestructura cloud, correo, hosting y soporte desde Tijuana.',
    url: siteUrl,
    siteName: 'NearTec',
    images: [{ url: '/images/og-cover-neartec.png', width: 1200, height: 630, alt: 'NearTec tecnología empresarial' }],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec | Tecnología para vender y operar mejor',
    description: 'Automatización, CompuNegocio, web, cloud y soporte para empresas que quieren crecer con orden.',
    images: ['/images/og-cover-neartec.png'],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#f7faf2',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NearTec',
    url: siteUrl,
    logo: `${siteUrl}/images/neartec-logo-real.png`,
    image: `${siteUrl}/images/og-cover-neartec.png`,
    telephone: '+52 664 630 0473',
    email: 'info@itimbre.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Benito Juárez 2034 601, Zona Centro',
      addressLocality: 'Tijuana',
      addressRegion: 'Baja California',
      postalCode: '22000',
      addressCountry: 'MX',
    },
    areaServed: ['México', 'Tijuana', 'Baja California'],
    makesOffer: [
      'Diseño web',
      'Automatización comercial',
      'CompuNegocio',
      'CN7',
      'Infraestructura cloud',
      'Soporte TI',
      'Correo corporativo',
    ],
  }

  return (
    <html lang="es-MX">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
