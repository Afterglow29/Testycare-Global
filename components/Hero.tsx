
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-500/20 mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span className="text-xs font-bold text-rose-500 tracking-wider uppercase">Verified Jiji Gold Dealer</span>
        </div>

        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tighter leading-none mb-6">
          Experience the Power of <span className="text-rose-600 text-glow">Precision</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Premium foreign used vehicles curated for those who demand excellence.
          Verified history, accident-free, and meticulously inspected by our CEO.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/inventory"
            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-rose-600 hover:text-white transition-all duration-500 transform hover:-translate-y-1 shadow-2xl relative overflow-hidden group flex items-center justify-center"
          >
            <span className="relative z-10 uppercase tracking-widest text-sm">View Inventory</span>
            <div className="absolute inset-0 bg-rose-600 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
          </Link>
          <button className="w-full sm:w-auto px-10 py-5 glass-card font-bold rounded-2xl hover:border-white/40 transition-all duration-500 group flex items-center justify-center gap-2">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-20 w-full max-w-5xl px-6">
        <div className="relative rounded-[3rem] overflow-hidden glass-card p-2 transform hover:scale-[1.01] transition-transform duration-700 shadow-2xl shadow-rose-900/10">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Car"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-[2.5rem] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-wrap gap-6 md:gap-12">
            {[
              { l: '5+', v: 'Years Experience' },
              { l: '100%', v: 'Accident Free' },
              { l: '8+', v: 'Current Stock' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xl md:text-3xl font-black text-white">{stat.l}</div>
                <div className="text-[8px] md:text-[10px] font-bold text-rose-500 tracking-widest uppercase">{stat.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
