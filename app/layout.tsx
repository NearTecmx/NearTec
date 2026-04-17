import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'NearTec | Infraestructura, Hosting, ERP y Desarrollo a Medida',
  description:
    'Soluciones tecnológicas profesionales: hosting en la nube, CN7, licencias CompuNegocio, soporte remoto y desarrollo personalizado para empresas en México.',
  metadataBase: new URL('https://neartec.com'),
  keywords: ['NearTec', 'hosting', 'infraestructura', 'ERP', 'CN7', 'CompuNegocio', 'soporte técnico', 'Tijuana', 'México'],
  authors: [{ name: 'NearTec S de RL de CV' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'NearTec | Infraestructura y Soluciones Tecnológicas',
    description: 'Hosting profesional, infraestructura en la nube y soporte técnico especializado.',
    type: 'website',
    url: 'https://neartec.com',
    images: [
      {
        url: 'https://neartec.com/images/og-cover.jpg.png',
        width: 1200,
        height: 630,
        alt: 'NearTec - Infraestructura Profesional',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#0a2540" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-brand-light text-brand-ink">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <ChatWidget />
        <WhatsAppButton />
        <footer className="border-t border-brand-line bg-white">
          <div className="section-shell py-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <p className="text-sm text-brand-muted">
                © {new Date().getFullYear()} NearTec S de RL de CV · Todos los derechos reservados.
              </p>
              <p className="text-sm text-brand-muted">
                Tijuana, Baja California · Atención comercial y soporte por WhatsApp
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
