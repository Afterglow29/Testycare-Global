
import React from 'react';

export const CEOSection: React.FC = () => {
  const CEO_IMAGE = "/ceo_new.jpg";

  return (
    <section id="ceo" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative group lg:w-1/2">
            <div className="absolute inset-0 bg-rose-600/20 blur-[100px] rounded-full group-hover:bg-rose-600/30 transition-colors"></div>
            <div className="relative z-10 p-4 glass-card rounded-[3rem] transform hover:scale-[1.02] transition-transform duration-700">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900">
                <img
                  src={CEO_IMAGE}
                  alt="Mr. Olaoluwa Ogunyemi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 animate-float border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/40">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M12 2L4.5 9L12 22L19.5 9L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none mb-1">Authenticated</div>
                    <div className="text-sm font-bold text-black uppercase tracking-widest">Diamond Dealer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-rose-600/10 border border-rose-500/20 mb-6">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">A Message from the CEO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              "At Testycare, <span className="text-rose-600 text-glow">Your Trust</span> is Our Greatest Asset."
            </h2>
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
              <p>
                I am Mr. Olaoluwa Ogunyemi, and my mission with Testycare Global Services is to redefine car buying in Nigeria. We don't just import vehicles; we curate experiences built on transparency and mechanical excellence.
              </p>
              <p>
                Every "Diamond Verified" car on this platform has passed my personal inspection. When you buy from us, you aren't just a customer—you become part of a legacy of quality.
              </p>
            </div>
            <div className="mt-12">
              <h4 className="text-3xl font-black text-white mb-1">Mr. Olaoluwa Ogunyemi</h4>
              <p className="text-rose-500 font-medium text-sm uppercase tracking-[0.2em]">CEO & Founder, Testycare Global</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
