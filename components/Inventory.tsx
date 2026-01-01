import React from 'react';
import { Link } from 'react-router-dom';
import { CAR_DATA } from '../constants';
import { SEO } from './SEO';

interface InventoryProps {
  limit?: number;
}

export const Inventory: React.FC<InventoryProps> = ({ limit }) => {
  const displayedCars = limit ? CAR_DATA.slice(0, limit) : CAR_DATA;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="inventory" className={`py-24 px-6 ${limit ? 'bg-black/50' : 'bg-black'}`}>
      {!limit && (
        <SEO
          title="Premium Inventory"
          description="Explore our collection of premium foreign-used cars. Toyota, Lexus, Mercedes, and more. Verified history and quality guaranteed."
        />
      )}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              {limit ? 'Featured' : 'Available'} <span className="text-rose-600">Inventory</span>
            </h2>
            <p className="text-gray-400 font-light">
              {limit
                ? "Handpicked premium vehicles from our current collection."
                : "Explore our full range of curated vehicles ready for immediate delivery."}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">All</button>
            <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">Toyota</button>
            <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">SUV</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedCars.map((car) => (
            <Link
              key={car.id}
              to={`/car/${car.id}`}
              className="group glass-card rounded-[2rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(225,29,72,0.15)] flex flex-col cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                  {car.condition}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold group-hover:text-rose-500 transition-colors line-clamp-1 mb-1">{car.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{car.year} • {car.location}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {car.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-[9px] bg-white/5 px-2 py-1 rounded-md text-gray-400 font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xl font-black tracking-tight text-white group-hover:text-rose-400 transition-colors">
                    {formatCurrency(car.price)}
                  </div>
                  <button className="p-2.5 bg-white text-black rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="mt-20 text-center">
            <Link
              to="/inventory"
              className="inline-block px-10 py-5 rounded-2xl border border-rose-500/30 font-bold text-rose-500 hover:bg-rose-600 hover:text-white transition-all duration-500 hover:shadow-2xl hover:shadow-rose-900/40"
            >
              View All {CAR_DATA.length} Vehicles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
