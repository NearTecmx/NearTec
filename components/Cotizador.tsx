"use client";
import { useState } from 'react';

export default function Cotizador() {
  const [servicio, setServicio] = useState('');
  const [licencias, setLicencias] = useState('1');
  const [total, setTotal] = useState(0);

  const calcularCotizacion = () => {
    let costo = 0;
    const numLicencias = parseInt(licencias);

    if (servicio === 'compunegocio') {
      if (numLicencias >= 1 && numLicencias <= 3) costo = 450 * numLicencias;
      else if (numLicencias >= 4 && numLicencias <= 8) costo = 400 * numLicencias;
      else if (numLicencias >= 9) costo = 350 * numLicencias;
    } else if (servicio === 'itimbre_mini') {
      costo = 862.92; // Precio Paquete Mini (con IVA)
    } else if (servicio === 'itimbre_basico') {
      costo = 1400.00; // Ejemplo basado en tu Excel
    }
    setTotal(costo);
  };

  const enviarWhatsApp = () => {
    const mensaje = `Hola, me interesa contratar el servicio de ${servicio} para ${licencias} licencias/paquetes. Mi cotización estimada es de $${total} MXN. ¿Podemos dar seguimiento?`;
    const url = `https://wa.me/526646300473?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg mx-auto border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cotizador Inteligente</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Selecciona tu Solución</label>
          <select 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-gray-50"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="">-- Elige un servicio --</option>
            <option value="compunegocio">CompuNegocio (Licencias Mensuales)</option>
            <option value="itimbre_mini">iTimbre - Paquete Mini</option>
            <option value="itimbre_basico">iTimbre - Plan Básico</option>
          </select>
        </div>

        {servicio === 'compunegocio' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Número de Estaciones/Licencias</label>
            <input 
              type="number" 
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-gray-50"
              value={licencias}
              onChange={(e) => setLicencias(e.target.value)}
            />
          </div>
        )}

        <button 
          onClick={calcularCotizacion}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Calcular Inversión
        </button>

        {total > 0 && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-center text-sm text-gray-600">Inversión Estimada</p>
            <p className="text-center text-3xl font-extrabold text-green-700">${total.toLocaleString()} MXN</p>
            <button 
              onClick={enviarWhatsApp}
              className="mt-4 w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 flex justify-center items-center gap-2"
            >
              <span>Continuar en WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.898-4.45 9.896-9.896 0-5.446-4.453-9.896-9.896-9.896-5.445 0-9.898 4.45-9.898 9.896 0 1.967.545 3.847 1.581 5.513l-1.037 3.791 3.862-1.002zm8.65-6.84c-.47-.235-2.778-1.371-3.208-1.528-.43-.157-.743-.235-1.057.235-.313.471-1.213 1.528-1.488 1.842-.275.314-.55.353-1.02.118-2.096-1.051-3.645-2.083-4.996-4.237-.275-.471.189-.434.646-1.332.118-.235.059-.47-.059-.666-.118-.196-1.057-2.55-1.448-3.491-.383-.918-.771-.794-1.057-.808-.275-.013-.588-.013-.902-.013-.314 0-.823.118-1.253.588-.43.471-1.644 1.609-1.644 3.924 0 2.315 1.684 4.552 1.918 4.866.235.314 3.328 5.08 8.056 7.121 1.127.487 2.006.777 2.695.995 1.13.36 2.158.309 2.971.187.913-.137 2.778-1.137 3.17-2.235.392-1.098.392-2.04.275-2.236-.118-.196-.43-.314-.9-.549z"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}