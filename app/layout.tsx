import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Sora } from 'next/font/google'
import './globals.css'
import './v5.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingAssist from '@/components/FloatingAssist'
import { CONTACT, siteUrl } from '@/lib/site-data'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], display: 'swap', variable: '--font-display' })
const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7fbf2',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NearTec | Desarrollo, automatización e infraestructura para empresas',
    template: '%s | NearTec',
  },
  description:
    'NearTec desarrolla e integra sitios web, apps, CRM, automatización, IA, CompuNegocio, CN7, nube, respaldo, hosting, VPS, correo, soporte e infraestructura para empresas.',
  keywords: [
    'NearTec',
    'desarrollo web',
    'apps',
    'automatización',
    'CRM',
    'inteligencia artificial',
    'CompuNegocio',
    'CN7',
    'nube',
    'hosting',
    'VPS',
    'correo corporativo',
    'soporte remoto',
    'Tijuana',
    'iTimbre',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteUrl,
    siteName: 'NearTec',
    title: 'NearTec | Tecnología desarrollada e integrada para empresas',
    description:
      'Web, apps, automatización, IA, CRM, CompuNegocio, CN7, nube, correo, soporte e infraestructura en una ruta tecnológica clara.',
    images: ['/images/og/og-home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearTec',
    description: 'Desarrollo, automatización e infraestructura para empresas.',
    images: ['/images/og/og-home.png'],
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
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: CONTACT.legalName,
  alternateName: 'NearTec',
  url: siteUrl,
  telephone: '+52 664 404 6194',
  email: CONTACT.email,
  taxID: CONTACT.rfc,
  foundingDate: '2004-09-29',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Benito Juárez 2034 601, Zona Centro',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    postalCode: '22000',
    addressCountry: 'MX',
  },
  areaServed: ['Tijuana', 'Baja California', 'México'],
  description:
    'Servicios de desarrollo tecnológico, automatización, CRM, IA, CompuNegocio, CN7, nube, correo, hosting, soporte remoto e infraestructura para empresas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <body>
        <div className="v5-site-bg" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingAssist />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  )
}
