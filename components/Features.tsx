
import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: 'Verified Inventory',
      desc: 'Every vehicle undergoes a rigorous 150-point inspection to ensure mechanical and aesthetic perfection.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Global Sourcing',
      desc: 'Direct foreign imports from trusted partners in Europe and America, ensuring genuine mileage and zero accidents.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Seamless Transactions',
      desc: 'From test drive to final documentation, we handle everything. Transparent pricing with no hidden fees.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group glass-card p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 border-transparent hover:border-rose-600/30">
              <div className="w-14 h-14 bg-rose-600/10 rounded-2xl flex items-center justify-center text-rose-500 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-rose-500 transition-colors">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
