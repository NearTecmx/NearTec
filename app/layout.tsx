import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://neartec.com'),
  title: 'NearTec | Tecnología empresarial, infraestructura y soporte',
  description:
    'NearTec ayuda a las empresas a operar mejor con infraestructura cloud, CompuNegocio, CN7, soporte técnico, implementación y desarrollo.',
  keywords: [
    'NearTec',
    'CompuNegocio',
    'CN7',
    'infraestructura cloud',
    'hosting empresarial',
    'soporte técnico',
    'desarrollo',
    'Tijuana',
    'México',
  ],
  openGraph: {
    title: 'NearTec | Tecnología empresarial, infraestructura y soporte',
    description:
      'Infraestructura, implementación, soporte y desarrollo para empresas que necesitan operar sin fricción.',
    url: 'https://neartec.com',
    siteName: 'NearTec',
    locale: 'es_MX',
    type: 'website',
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
    title: 'NearTec | Tecnología empresarial, infraestructura y soporte',
    description:
      'Infraestructura, implementación, soporte y desarrollo para empresas que necesitan operar sin fricción.',
    images: ['/images/og-cover.jpg.png'],
  },
  alternates: {
    canonical: '/',
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
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  )
}