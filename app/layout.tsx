import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

// Fuente optimizada de Google
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neartec e iTimbre | Soluciones Empresariales 2026",
  description: "Ecosistema de soluciones tecnológicas, facturación electrónica y nómina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Navbar />
        {/* Aquí se renderiza la página que visite el usuario (Neartec, iTimbre o Home) */}
        {children} 
        <WhatsAppButton />
        
        {/* Footer Minimalista Global */}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Grupo Neartec - iTimbre PAC. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs opacity-70">
            Calle Benito Juárez 2034 601, Zona Centro, Tijuana, B.C. México
          </p>
        </footer>
      </body>
    </html>
  );
}