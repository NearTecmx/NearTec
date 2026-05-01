import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingAssist from '@/components/FloatingAssist'
import { siteUrl } from '@/lib/neartec-data'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const space = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-display' })

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f7fbf2' }
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'NearTec | Tecnología comercial para captar, cotizar y cerrar', template: '%s | NearTec' },
  description: 'NearTec conecta web, CRM, WhatsApp, CompuNegocio, CN7, nube, correo y soporte para convertir prospectos en ventas con una operación clara.',
  keywords: ['NearTec', 'CompuNegocio', 'CN7', 'CRM', 'diseño web', 'automatización comercial', 'Tijuana', 'iTimbre', 'soporte remoto'],
  alternates: { canonical: siteUrl },
  openGraph: { type: 'website', locale: 'es_MX', url: siteUrl, siteName: 'NearTec', title: 'NearTec | Tecnología comercial conectada', description: 'Web, CRM, WhatsApp, CompuNegocio, CN7, nube y soporte en una ruta comercial lista para vender.', images: ['/images/og-cover-neartec.png'] },
  twitter: { card: 'summary_large_image', title: 'NearTec', description: 'Tecnología comercial para captar, filtrar, cotizar y cerrar.', images: ['/images/og-cover-neartec.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NearTec',
  url: siteUrl,
  telephone: '+52 664 404 6194',
  email: 'meta@itimbre.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Benito Juárez 2034 601, Zona Centro',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    postalCode: '22000',
    addressCountry: 'MX',
  },
  areaServed: ['Tijuana', 'Baja California', 'México'],
  description: 'Servicios de tecnología comercial, web, CRM, CompuNegocio, CN7, nube, correo y soporte remoto.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es-MX" className={`${inter.variable} ${space.variable}`}><body><div className="site-bg" aria-hidden="true"/><Navbar/><main>{children}</main><Footer/><FloatingAssist/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} /></body></html>
}
