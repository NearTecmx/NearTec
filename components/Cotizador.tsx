'use client';

import { useState } from 'react';

export default function Cotizador() {
  const [servicio, setServicio] = useState('compunegocio');
  const [cantidad, setCantidad] = useState(1);
  const [customRequest, setCustomRequest] = useState('');

  // Lógica de cálculo basada en las listas de precios operativas
  const calcularTotal = () => {
    let total = 0;
    if (servicio === 'compunegocio') {
      if (cantidad >= 1 && cantidad <= 3) total = cantidad * 450;
      else if (cantidad >= 4 && cantidad <= 8) total = cantidad * 400;
      else if (cantidad >= 9) total = cantidad * 350;
    } else if (servicio === 'itimbre_paquetes') {
      // Precio promedio ilustrativo por paquete de timbres
      total = cantidad * 1400; 
    }
    return total;
  };

  const handleWhatsAppRedirect = () => {
    const total = calcularTotal();
    const numeroWhatsApp = "526646300473"; // Número de la oficina central
    const mensaje = `Hola, me interesa una cotización.%0A%0AServicio: ${servicio === 'compunegocio' ? 'Licencias CompuNegocio' : 'Paquetes iTimbre'}%0ACantidad: ${cantidad}%0A*Total Estimado: $${total} MXN*%0A%0ADetalles adicionales: ${customRequest}%0A%0A¿Podría un asesor contactarme para dar seguimiento?`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto hover-scale">
      <h3 className="text-2xl font-bold text-brand-blue mb-6 text-center">Cotizador en Tiempo Real</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Selecciona el Servicio Principal</label>
          <select 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="compunegocio">Licencias CompuNegocio / ERP</option>
            <option value="itimbre_paquetes">Paquetes de Timbres Fiscales (PAC)</option>
            <option value="desarrollo">Desarrollo Web / Infraestructura Personalizada</option>
          </select>
        </div>

        {servicio !== 'desarrollo' && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {servicio === 'compunegocio' ? 'Número de Estaciones/Licencias' : 'Cantidad de Paquetes'}
            </label>
            <input 
              type="number" 
              min="1"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Requerimientos Específicos o Personalizados</label>
          <textarea 
            rows={3}
            placeholder="Ej. Requiero migración de servidor, validación CSD y facturación 4.0..."
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none"
            value={customRequest}
            onChange={(e) => setCustomRequest(e.target.value)}
          ></textarea>
        </div>

        {servicio !== 'desarrollo' && (
          <div className="bg-brand-light p-4 rounded-lg flex justify-between items-center border border-brand-blue/10">
            <span className="text-gray-600 font-medium">Inversión Estimada:</span>
            <span className="text-3xl font-bold text-brand-blue">${calcularTotal().toLocaleString('es-MX')} <span className="text-sm font-normal text-gray-500">MXN</span></span>
          </div>
        )}

        <button 
          onClick={handleWhatsAppRedirect}
          className="w-full bg-brand-green hover:bg-[#00b88d] text-white font-bold py-4 px-6 rounded-lg shadow-md transition-colors flex justify-center items-center gap-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          Solicitar Cotización por WhatsApp
        </button>
      </div>
    </div>
  );
}
