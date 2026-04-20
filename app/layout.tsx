import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatWidget from '@/components/ChatWidget'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NearTec',
  url: 'https://neartec.com',
  logo: 'https://neartec.com/images/neartec-logo.png',
  telephone: '+52 663 165 6898',
  description:
    'NearTec ofrece licenciamiento, infraestructura, CN7, soporte, implementación y desarrollo para empresas en México.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+52 663 165 6898',
      contactType: 'sales',
      areaServed: 'MX',
      availableLanguage: ['es'],
    },
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9bc53d',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://neartec.com'),
  title: {
    default: 'NearTec | Tecnología empresarial, infraestructura, CN7 y soporte',
    template: '%s | NearTec',
  },
  description:
    'NearTec ayuda a empresas a operar mejor con licenciamiento, CN7, infraestructura, soporte remoto, implementación y desarrollo.',
  applicationName: 'NearTec',
  keywords: [
    'NearTec',
    'CompuNegocio',
    'CN7',
    'infraestructura',
    'hosting empresarial',
    'soporte técnico',
    'implementación',
    'desarrollo',
    'Tijuana',
    'México',
  ],
  authors: [{ name: 'NearTec' }],
  creator: 'NearTec',
  publisher: 'NearTec',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://neartec.com',
    siteName: 'NearTec',
    title: 'NearTec | Tecnología empresarial, infraestructura, CN7 y soporte',
    description:
      'Licenciamiento, infraestructura, CN7, soporte, implementación y desarrollo para empresas que necesitan operar sin fricción.',
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
    title: 'NearTec | Tecnología empresarial, infraestructura, CN7 y soporte',
    description:
      'Licenciamiento, infraestructura, CN7, soporte, implementación y desarrollo para empresas que necesitan operar sin fricción.',
    images: ['/images/og-cover.jpg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <ChatWidget />
        <WhatsAppButton />

        <footer className="border-t border-[var(--brand-line)] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div>
                <p className="text-sm font-bold text-[var(--brand-ink)]">
                  © {new Date().getFullYear()} NearTec
                </p>
                <p className="mt-1 text-sm text-[var(--brand-muted)]">
                  Tecnología empresarial, infraestructura, CN7, soporte e implementación.
                </p>
              </div>

              <div className="text-sm text-[var(--brand-muted)]">
                <p>Atención comercial: 663 165 6898</p>
                <p>Tijuana, Baja California, México</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}