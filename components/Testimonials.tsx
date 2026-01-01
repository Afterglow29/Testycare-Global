
import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Wall of <span className="text-rose-600">Trust</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">Testycare powers high-impact driving experiences across Lagos and beyond.</p>
          <div className="mt-8 flex items-center justify-center gap-1 text-yellow-500">
             {[...Array(5)].map((_, i) => (
               <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
             ))}
             <span className="ml-2 text-white font-bold">4.9 on Jiji</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 group border-white/5 hover:border-rose-600/20">
              <p className="text-gray-300 mb-8 italic font-light leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-rose-500/20" />
                <div>
                  <h4 className="font-bold text-white group-hover:text-rose-500 transition-colors">{t.author}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
