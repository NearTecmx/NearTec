import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'NearTec & iTimbre | Soluciones Digitales y Facturación Electrónica',
  description: 'Infraestructura en la nube, sistemas ERP y Proveedor Autorizado de Certificación (PAC).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton />
        <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm mt-20">
          <p>© {new Date().getFullYear()} NearTec S de RL de CV & iTimbre. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  )
}
