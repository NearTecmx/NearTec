"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Asumiendo que el logo de NearTec es una imagen

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Zona de Identidad */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2" aria-label="Inicio NearTec">
              {/* Reemplaza src con la ruta de tu logo. El texto gris oscuro equilibra sin ser negro puro. */}
              <span className="text-2xl font-bold text-gray-800 tracking-tight">
                Near<span className="text-brand-primary">Tec</span>
              </span>
            </Link>
          </div>

          {/* Navegación Desktop - Limpia y Balanceada */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/plataforma" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Plataforma</Link>
            <Link href="/nosotros" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Nosotros</Link>
            <Link href="/casos-de-exito" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Casos de Éxito</Link>
            <Link href="/blog" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Blog</Link>
          </div>

          {/* Call to Actions (CTAs) Desktop - Motores de Negocio */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/diagnostico" className="text-brand-primary font-medium hover:text-brand-primary/80 transition-colors">
              Diagnóstico
            </Link>
            <Link 
              href="/cotizador" 
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-medium shadow-md shadow-brand-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Botón Menú Móvil (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú principal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil - Despliegue Suave */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            <Link href="/plataforma" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary rounded-md">Plataforma</Link>
            <Link href="/nosotros" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary rounded-md">Nosotros</Link>
            <Link href="/casos-de-exito" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary rounded-md">Casos de Éxito</Link>
            <Link href="/blog" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary rounded-md">Blog</Link>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
              <Link href="/diagnostico" className="w-full text-center text-brand-primary font-medium py-3 border border-brand-primary/20 rounded-lg hover:bg-brand-primary/5">
                Realizar Diagnóstico
              </Link>
              <Link href="/cotizador" className="w-full text-center bg-brand-primary text-white font-medium py-3 rounded-lg shadow-md">
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
