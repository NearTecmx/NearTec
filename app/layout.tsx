import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import './v5.css'
import './v52.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingAssist from '@/components/FloatingAssist'
import { CONTACT, SITE, siteUrl } from '@/lib/site-data'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE.title,
    template: '%s | NearTec',
  },
  description: SITE.description,
  applicationName: 'NearTec',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'NearTec',
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    images: [
      {
        url: '/images/og/og-home.png',
        width: 1200,
        height: 630,
        alt: 'NearTec | Tecnología para vender, operar y escalar',
      },
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'NearTec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    images: ['/images/og/og-home.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'contact:phone_number': CONTACT.phoneDisplay,
    'contact:email': CONTACT.email,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className={`${sora.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingAssist />
      </body>
    </html>
  )
}
