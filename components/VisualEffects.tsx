
import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid Shimmer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Light Field / Beam Texture */}
      <div className="absolute -top-[10%] left-[20%] w-[60%] h-[40%] bg-rose-600/20 blur-[120px] rounded-full animate-float"></div>
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" style={{ animationDelay: '2s' }}></div>
      
      {/* Horizontal Beam */}
      <div className="absolute top-[15%] w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent overflow-hidden">
        <div className="w-1/3 h-full bg-rose-400 blur-sm animate-beam"></div>
      </div>

      {/* Particles (Simple CSS implementation) */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random(),
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
