import Link from 'next/link';

export default function HomePortal() {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
      {/* Lado Neartec */}
      <Link 
        href="/neartec" 
        className="flex-1 bg-gradient-to-b from-slate-900 to-blue-900 flex flex-col justify-center items-center p-12 text-center group cursor-pointer relative overflow-hidden transition-all duration-500 hover:flex-[1.2]"
      >
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
          <span className="inline-block text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">División Tecnológica</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Neartec</h2>
          <p className="text-xl text-blue-100 max-w-md mx-auto">
            Sistemas administrativos (CompuNegocio), infraestructura en la nube y soporte técnico experto.
          </p>
          <span className="mt-10 inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg">
            Explorar Soluciones
          </span>
        </div>
      </Link>

      {/* Lado iTimbre */}
      <Link 
        href="/itimbre" 
        className="flex-1 bg-gradient-to-b from-indigo-50 to-white flex flex-col justify-center items-center p-12 text-center group cursor-pointer relative overflow-hidden transition-all duration-500 hover:flex-[1.2] border-t md:border-t-0 md:border-l border-gray-200"
      >
        <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
          <span className="inline-block text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">División Fiscal</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">iTimbre</h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Proveedor Autorizado de Certificación (PAC). Facturación 4.0, validación CFDI y descargas SAT.
          </p>
          <span className="mt-10 inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">
            Explorar Facturación
          </span>
        </div>
      </Link>
    </div>
  );
}