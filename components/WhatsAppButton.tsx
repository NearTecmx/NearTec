export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/526646300473" // Número oficial que venía en los documentos
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.898-4.45 9.896-9.896 0-5.446-4.453-9.896-9.896-9.896-5.445 0-9.898 4.45-9.898 9.896 0 1.967.545 3.847 1.581 5.513l-1.037 3.791 3.862-1.002zm8.65-6.84c-.47-.235-2.778-1.371-3.208-1.528-.43-.157-.743-.235-1.057.235-.313.471-1.213 1.528-1.488 1.842-.275.314-.55.353-1.02.118-2.096-1.051-3.645-2.083-4.996-4.237-.275-.471.189-.434.646-1.332.118-.235.059-.47-.059-.666-.118-.196-1.057-2.55-1.448-3.491-.383-.918-.771-.794-1.057-.808-.275-.013-.588-.013-.902-.013-.314 0-.823.118-1.253.588-.43.471-1.644 1.609-1.644 3.924 0 2.315 1.684 4.552 1.918 4.866.235.314 3.328 5.08 8.056 7.121 1.127.487 2.006.777 2.695.995 1.13.36 2.158.309 2.971.187.913-.137 2.778-1.137 3.17-2.235.392-1.098.392-2.04.275-2.236-.118-.196-.43-.314-.9-.549z"/>
      </svg>
      {/* Tooltip Hover */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-max shadow-lg pointer-events-none">
        ¿Te asesoramos?
      </span>
    </a>
  );
}