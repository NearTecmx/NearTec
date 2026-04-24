import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'NearTec | Sitios web, automatización, CompuNegocio e infraestructura',
  description:
    'NearTec integra sitio web, CRM, automatización, CompuNegocio, nube, correo, hosting, VPS y soporte para que tu empresa venda y opere mejor.',
  openGraph: {
    title: 'NearTec | Tecnología para vender y operar mejor',
    description:
      'Diseño web, CRM, automatización, CompuNegocio, infraestructura cloud y soporte desde Tijuana.',
    url: 'https://neartec.com',
    siteName: 'NearTec',
    images: [{ url: '/images/og-cover-neartec.png', width: 1200, height: 630, alt: 'NearTec' }],
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
