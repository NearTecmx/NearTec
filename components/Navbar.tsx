import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-black tracking-tighter text-brand-blue">
              Ecosistema<span className="text-brand-green">.</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/neartec" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">NearTec</Link>
              <Link href="/itimbre" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">iTimbre</Link>
            </div>
          </div>
          <div className="flex items-center">
            <a href="https://panel.itimbre.com" target="_blank" className="text-brand-blue font-semibold hover:text-brand-green transition-colors mr-4">
              Portal Clientes
            </a>
            <Link href="#cotizador" className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#081b2e] transition-colors">
              Cotizar Solución
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
