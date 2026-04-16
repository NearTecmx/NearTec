import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 bg-brand-light">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tight mb-4">
          Potenciamos tu <span className="text-brand-green">Infraestructura Digital</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          MADE IN TIJUANA. Selecciona la plataforma que impulsará el crecimiento de tu empresa hoy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Tarjeta NearTec */}
        <Link href="/neartec" className="group bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover-scale relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue opacity-5 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <h2 className="text-3xl font-bold text-brand-blue mb-4">NearTec</h2>
          <p className="text-gray-600 mb-8 text-lg">Tecnología Cerca de Ti. Servidores en la nube, hospedaje corporativo y el potente sistema ERP CompuNegocio.</p>
          <span className="text-brand-blue font-semibold group-hover:text-brand-green flex items-center gap-2">
            Explorar Soluciones <span className="text-xl">→</span>
          </span>
        </Link>

        {/* Tarjeta iTimbre */}
        <Link href="/itimbre" className="group bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover-scale relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green opacity-10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <h2 className="text-3xl font-bold text-brand-blue mb-4">iTimbre</h2>
          <p className="text-gray-600 mb-8 text-lg">Proveedor Autorizado de Certificación (PAC). Facturación electrónica 4.0, nómina y validación de CFDI.</p>
          <span className="text-brand-green font-semibold group-hover:text-brand-blue flex items-center gap-2">
            Ver Planes de Facturación <span className="text-xl">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
