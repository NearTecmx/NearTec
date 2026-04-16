import Cotizador from '../../components/Cotizador';

export default function ITimbrePage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Facturación 4.0, Nómina y más, <span className="text-indigo-600">Infinitamente Sencilla.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Como Proveedor Autorizado de Certificación (PAC), te brindamos las herramientas más robustas para facturación masiva, validación de CFDI y descarga SAT.
          </p>
          <a href="#cotizador-itimbre" className="inline-block bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition">
            Adquiere tus Timbres
          </a>
        </div>
      </section>

      {/* Main Content & Quoter Split */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Servicios Destacados</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex justify-center items-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Validador CFDI</h3>
                <p className="text-gray-600 mt-2">Comprueba la legalidad de los comprobantes fiscales que recibes. Evita facturación apócrifa y posibles multas.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex justify-center items-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Descarga Masiva SAT</h3>
                <p className="text-gray-600 mt-2">Recupera y concilia miles de comprobantes fiscales emitidos o recibidos en segundos, directo desde los servidores del SAT.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex justify-center items-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Desarrollo Personalizado</h3>
                <p className="text-gray-600 mt-2">Ajustes a tu sistema para tareas personalizadas. Nuestro personal calificado adapta el software a tus reglas de negocio.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cotizador Integrado */}
        <div id="cotizador-itimbre" className="sticky top-10">
          <Cotizador />
        </div>
      </section>
    </main>
  );
}