import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'NearTec & iTimbre | Soluciones Digitales y Facturación Electrónica',
  description:
    'Infraestructura en la nube, ERP, facturación electrónica PAC, timbres, soporte y desarrollo a medida para empresas en México.',
  metadataBase: new URL('https://neartec.com'),
  openGraph: {
    title: 'NearTec & iTimbre',
    description:
      'Soluciones tecnológicas, facturación electrónica y cotización en tiempo real.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-brand-light text-brand-ink">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <ChatWidget />
        <WhatsAppButton />
        <footer className="border-t border-brand-line bg-white">
          <div className="section-shell py-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <p className="text-sm text-brand-muted">
                © {new Date().getFullYear()} NearTec S de RL de CV · iTimbre ·
                Todos los derechos reservados.
              </p>
              <p className="text-sm text-brand-muted">
                Tijuana, Baja California · Atención comercial y soporte por
                WhatsApp
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
