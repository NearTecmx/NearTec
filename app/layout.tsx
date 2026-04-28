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
    default: 'NearTec | Desarrollo tecnológico, sistemas, web, nube y soporte para empresas',
    template: '%s | NearTec',
  },
  description:
    'NearTec desarrolla e integra soluciones tecnológicas para empresas: diseño web, punto de venta, CompuNegocio, CN7, hosting, VPS, FTP, correo corporativo, emailing, nube y soporte remoto.',
  keywords: [
    'NearTec',
    'tecnología empresarial',
    'solución total NearTec',
    'diseño web empresarial',
    'CompuNegocio',
    'CN7',
    'punto de venta',
    'desarrollo web',
    'servidores FTP',
    'VPS',
    'hosting empresarial',
    'correo corporativo',
    'emailing',
    'soporte TI',
    'Tijuana',
    'México',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NearTec | Tecnología para vender, operar y escalar',
    description:
      'Diseño web, punto de venta, CompuNegocio, CN7, hosting, VPS, FTP, correo, emailing y soporte remoto desde Tijuana.',
    url: siteUrl,
    siteName: 'NearTec',
    images: [
      {
        url: '/images/og-cover-neartec.png',
        width: 1200,
        height: 630,
        alt: 'NearTec tecnología empresarial',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec | Tecnología para vender, operar y escalar',
    description:
      'Desarrollo tecnológico, sistemas, web, cloud, correo, punto de venta y soporte para empresas que quieren crecer con orden.',
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
  themeColor: '#f8fbf4',
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
    email: 'info@neartec.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Benito Juárez 2034 601, Zona Centro',
      addressLocality: 'Tijuana',
      addressRegion: 'Baja California',
      postalCode: '22000',
      addressCountry: 'MX',
    },
    areaServed: ['México', 'Tijuana', 'Baja California', 'San Diego'],
    makesOffer: [
      'Solución Total NearTec',
      'Diseño web',
      'Sistema de punto de venta',
      'CompuNegocio',
      'CN7',
      'Infraestructura cloud',
      'Servidores FTP',
      'VPS y Shared Servers',
      'Hosting',
      'Correo corporativo',
      'Servicio de emailing',
      'Soporte TI',
    ],
  }

  return (
    <html lang="es-MX">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="global-background" aria-hidden="true">
          <div className="bg-depth bg-depth-top" />
          <div className="bg-depth bg-depth-floor" />
          <div className="bg-circuit bg-circuit-a" />
          <div className="bg-circuit bg-circuit-b" />
          <div className="bg-particles bg-particles-a" />
          <div className="bg-particles bg-particles-b" />
          <div className="bg-particles bg-particles-c" />
          <div className="bg-vignette" />
        </div>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}

