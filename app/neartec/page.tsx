import Cotizador from '../../components/Cotizador';

export default function NeartecPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6">
              Soluciones Integrales y <span className="text-blue-400">Tecnología Cerca de Ti</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Transformamos la infraestructura fiscal y operativa de tu empresa. Conectamos tu negocio con el futuro mediante software administrativo inteligente y soporte experto.
            </p>
            <div className="flex gap-4">
              <a href="#cotizador" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition">
                Cotizar Ahora
              </a>
              <a href="#servicios" className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition">
                Nuestros Servicios
              </a>
            </div>
          </div>
          {/* Aquí insertamos el cotizador directamente en el Hero para máxima conversión */}
          <div id="cotizador">
            <Cotizador />
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Ecosistema de Soluciones</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">CompuNegocio</h3>
            <p className="text-slate-600">Control total para crecer y gestionar tu negocio con más de 10 años en el mercado. Reportes, inventarios y ventas en una interfaz rápida.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Implementación en la Nube</h3>
            <p className="text-slate-600">Servidores y bases de datos alojados en la nube con respaldos automáticos, asegurando disponibilidad 24/7 para tus operaciones.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Soporte Técnico Especializado</h3>
            <p className="text-slate-600">Pólizas de mantenimiento que incluyen actualizaciones menores, configuraciones CSD y capacitación constante.</p>
          </div>
        </div>
      </section>
    </main>
  );
}