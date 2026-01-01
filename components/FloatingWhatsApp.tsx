
import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const WHATSAPP_URL = "https://wa.link/8w3fem";

  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group"
      aria-label="Chat with CEO on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
      <div className="relative bg-[#25D366] p-4 rounded-full shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 border-2 border-white/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.909 3.038 1.383 4.588 1.385 5.4 0 9.792-4.393 9.795-9.792.002-2.618-1.019-5.074-2.871-6.928s-4.312-2.873-6.932-2.873c-5.4 0-9.791 4.393-9.794 9.792-.001 1.83.479 3.611 1.39 5.193l-.935 3.414 3.494-.916zm10.702-7.041c-.29-.145-1.711-.844-1.976-.94s-.457-.145-.649.145c-.192.291-.744.94-.912 1.134-.167.194-.335.218-.625.073-.29-.145-1.223-.45-2.328-1.437-.86-.767-1.44-1.716-1.608-2.008-.168-.291-.018-.448.127-.592.13-.13.29-.34.435-.509.145-.17.194-.291.29-.485.097-.194.048-.364-.024-.509s-.649-1.562-.89-2.144c-.236-.569-.475-.492-.649-.501-.168-.008-.362-.01-.556-.01s-.509.073-.775.364c-.266.291-1.018.994-1.018 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.968 4.388.694.299 1.235.478 1.657.612.698.222 1.334.191 1.837.116.56-.083 1.711-.698 1.952-1.371.242-.672.242-1.25.17-1.371-.072-.12-.266-.194-.556-.34z"/>
        </svg>
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-black/5">
        Chat with Mr. Olaoluwa
      </div>
    </a>
  );
};
