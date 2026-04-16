import Cotizador from '@/components/Cotizador';

export default function iTimbrePage() {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 text-center max-w-5xl mx-auto">
        <span className="bg-brand-green/20 text-brand-green px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 inline-block">MADE IN TIJUANA</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-blue mb-6 leading-tight">
          Facturación Electrónica <span className="text-brand-green">Inteligente</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Como Proveedor Autorizado de Certificación (PAC), garantizamos el cumplimiento fiscal de tu empresa con herramientas de emisión, validación y descarga masiva SAT.
        </p>
        <a href="#cotizador" className="bg-brand-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00b88d] transition-colors shadow-lg">
          Cotizar Timbres
        </a>
      </section>

      {/* Modules/Features */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-16">Ecosistema Fiscal 4.0</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover-scale bg-white">
              <h3 className="text-xl font-bold text-brand-blue mb-3">iFacturapp Web</h3>
              <p className="text-gray-600 mb-4">Plataforma en la nube con todas las funciones básicas para administrar la facturación en versión 4.0, complementos de pago y nómina.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover-scale bg-white">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Validador CFDI</h3>
              <p className="text-gray-600 mb-4">Comprueba la legalidad de los comprobantes que recibes. Evita facturación apócrifa y detecta irregularidades al instante.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover-scale bg-white">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Descarga Masiva SAT</h3>
              <p className="text-gray-600 mb-4">Recupera y sincroniza miles de comprobantes emitidos o recibidos directamente desde los servidores del SAT a tu sistema.</p>
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
