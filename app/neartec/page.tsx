import Cotizador from '@/components/Cotizador';

export default function NeartecPage() {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 text-center max-w-5xl mx-auto">
        <span className="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 inline-block">MADE IN TIJUANA</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-blue mb-6 leading-tight">
          El motor de tu <span className="text-brand-green">Operación Empresarial</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Gestiona, administra y escala tu negocio con los sistemas de la familia CompuNegocio y nuestra robusta infraestructura de servidores en la nube.
        </p>
        <a href="#cotizador" className="bg-brand-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#081b2e] transition-colors shadow-lg">
          Configurar mi Entorno
        </a>
      </section>

      {/* Modules/Features */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-16">Arquitectura de Soluciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover-scale">
              <div className="w-14 h-14 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">ERP</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">CompuNegocio</h3>
              <p className="text-gray-600">Control total de inventarios, compras, traspasos y facturación. Hospedado en la nube con respaldos automáticos (CN7).</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover-scale">
              <div className="w-14 h-14 bg-brand-green text-white rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">☁️</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Servidores VPS</h3>
              <p className="text-gray-600">Alta disponibilidad para tu infraestructura. Mantenimiento especializado y planes de recuperación de desastres (DRP).</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover-scale">
              <div className="w-14 h-14 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">⚙️</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Soporte Continuo</h3>
              <p className="text-gray-600">Pólizas de mantenimiento que incluyen actualizaciones menores, configuraciones de CSD y soporte técnico remoto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quote Section */}
      <section id="cotizador" className="py-24 px-4 bg-brand-light">
        <Cotizador />
      </section>
    </div>
  );
}
