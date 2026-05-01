import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingAssist from '@/components/FloatingAssist'
import { siteUrl } from '@/lib/neartec-data'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#fbfdf8' }
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'NearTec | Web, CRM, CompuNegocio, CN7 y operación comercial', template: '%s | NearTec' },
  description: 'NearTec conecta web, CRM, WhatsApp, CompuNegocio, CN7, nube, correo y soporte para captar, filtrar, cotizar y cerrar más ventas.',
  keywords: ['NearTec', 'CompuNegocio', 'CN7', 'CRM', 'diseño web', 'automatización comercial', 'Tijuana', 'iTimbre'],
  openGraph: { type: 'website', locale: 'es_MX', url: siteUrl, siteName: 'NearTec', title: 'NearTec | Tecnología conectada para vender y operar mejor', description: 'Web, CRM, CompuNegocio, CN7, nube, correo y soporte en una ruta comercial clara.', images: ['/images/og-cover-neartec.png'] },
  twitter: { card: 'summary_large_image', title: 'NearTec', description: 'Tecnología conectada para vender y operar mejor.', images: ['/images/og-cover-neartec.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es-MX" className={inter.variable}><body><div className="site-bg" aria-hidden="true"/><Navbar/><main>{children}</main><Footer/><FloatingAssist/></body></html>
}
