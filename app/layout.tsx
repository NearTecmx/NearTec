import type { Metadata, Viewport } from "next";
// Utilizamos una tipografía moderna, limpia y altamente legible (Inter es el estándar actual en tech de alto nivel)
import { Inter } from "next/font/google"; 
import Navbar from "@/components/Navbar"; // Ajusta la ruta según tu estructura
import "./neartec-sales-engine.css"; // Tu motor de estilos principal

// Optimización de carga de fuente (Lighthouse lo exige)
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configuración estricta de Viewport para Puntuación Perfecta en Móviles
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Permite accesibilidad visual
  themeColor: "#ffffff", // Adapta la barra superior de navegadores móviles
};

// Metadatos Dinámicos para SEO Superior
export const metadata: Metadata = {
  title: {
    default: "NearTec | Soluciones Tecnológicas e Infraestructura",
    template: "%s | NearTec"
  },
  description: "Evolucionamos la infraestructura y tecnología de tu empresa. Diagnósticos precisos y cotizaciones a medida para llevar tu negocio al siguiente nivel.",
  keywords: ["tecnología", "infraestructura IT", "mantenimiento de servidores", "desarrollo", "NearTec"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.neartec.com",
    title: "NearTec | Soluciones Tecnológicas de Alto Nivel",
    description: "Evolucionamos la infraestructura y tecnología de tu empresa.",
    siteName: "NearTec",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // El atributo lang es vital para la accesibilidad y SEO
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-gray-800 bg-gray-50 flex flex-col min-h-screen">
        {/* Inyectamos la navegación optimizada */}
        <Navbar />
        
        {/* 
          El contenido principal se inyecta aquí. 
          El padding-top (pt-20) asegura que el Navbar fijo no cubra el contenido.
          flex-grow asegura que el footer siempre quede abajo aunque haya poco contenido.
        */}
        <main className="flex-grow pt-20 w-full">
          {children}
        </main>

        {/* Footer Base (Se puede expandir después, pero mantiene la estructura intacta) */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} NearTec. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
