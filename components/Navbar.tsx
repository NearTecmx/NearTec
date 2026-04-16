"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand / Título */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-slate-800 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Grupo Neartec
              </span>
            </Link>
          </div>

          {/* Links Centrales */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/neartec" 
              className={`text-sm font-semibold transition-colors duration-200 ${pathname === '/neartec' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              Tecnología y Software
            </Link>
            <Link 
              href="/itimbre" 
              className={`text-sm font-semibold transition-colors duration-200 ${pathname === '/itimbre' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
            >
              Facturación PAC
            </Link>
          </div>

          {/* Botón Call to Action */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://wa.me/526646300473" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-slate-800 transition shadow-lg"
            >
              Contacto Directo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}