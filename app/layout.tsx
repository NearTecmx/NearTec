import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import { CONTACT } from '@/lib/neartec-pricing'

const siteUrl = 'https://neartec.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NearTec | Tecnología empresarial, sistemas, web, nube y soporte',
    template: '%s | NearTec',
  },
  description:
    'NearTec desarrolla e integra soluciones tecnológicas para empresas: diseño web, punto de venta, CompuNegocio, CN7, hosting, VPS, servidores FTP, correo corporativo, emailing, nube y soporte remoto.',
  keywords: [
    'NearTec',
    'tecnología empresarial',
    'soluciones integrales para empresas',
    'diseño web',
    'punto de venta',
    'CompuNegocio',
    'CN7',
    'hosting',
    'VPS',
    'shared servers',
    'servidores FTP',
    'correo corporativo',
    'emailing',
    'soporte TI',
    'Tijuana',
    'México',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NearTec | Tecnología para vender, operar y crecer',
    description:
      'Diseño web, punto de venta, CompuNegocio, CN7, hosting, VPS, FTP, correo, emailing y soporte remoto para empresas.',
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
    title: 'NearTec | Tecnología para vender, operar y crecer',
    description:
      'Soluciones tecnológicas para empresas: web, punto de venta, nube, servidores, correo, emailing y soporte.',
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
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Benito Juárez y/o Segunda CENTURY 2034, Zona Centro',
      addressLocality: 'Tijuana',
      addressRegion: 'Baja California',
      postalCode: '22000',
      addressCountry: 'MX',
    },
    areaServed: ['México', 'Tijuana', 'Baja California', 'Sur de Estados Unidos'],
    makesOffer: [
      'Soluciones integrales para empresas',
      'Diseño web',
      'Sistema de punto de venta',
      'CompuNegocio',
      'CN7',
      'Hosting',
      'VPS y shared servers',
      'Servidores FTP',
      'Correo corporativo',
      'Servicio de emailing',
      'Soporte remoto',
      'Conexión fiscal con iTimbre cuando aplique',
    ],
  }

  return (
    <html lang="es-MX">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="global-background" aria-hidden="true">
          <div className="depth-grid depth-grid-top" />
          <div className="depth-grid depth-grid-bottom" />
          <div className="tech-lines tech-lines-a" />
          <div className="tech-lines tech-lines-b" />
          <div className="particle-layer particle-layer-a" />
          <div className="particle-layer particle-layer-b" />
          <div className="light-orb light-orb-a" />
          <div className="light-orb light-orb-b" />
          <div className="background-vignette" />
        </div>

        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}