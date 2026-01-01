
import React from 'react';

export const Footer: React.FC = () => {
  const JIJI_SHOP_URL = "https://jiji.ng/shop/ogunyemi-olaolu-emmanuel/cars";
  const FACEBOOK_URL = "https://web.facebook.com/olaolu.ogunyemi.71/friends";
  const INSTAGRAM_URL = "https://www.instagram.com/iamhorlarnice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-rose-600 rounded flex items-center justify-center">
            <span className="text-white text-[10px] font-black">T</span>
          </div>
          <span className="font-bold text-sm tracking-tight">TESTYCARE GLOBAL SERVICES ENT.</span>
        </div>

        <div className="text-gray-500 text-sm font-light">
          © {new Date().getFullYear()} Testycare Global Services. All rights reserved.
        </div>

        <div className="flex gap-6">
          {[
            { name: 'Instagram', url: INSTAGRAM_URL },
            { name: 'Facebook', url: FACEBOOK_URL },
            { name: 'Jiji', url: JIJI_SHOP_URL },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pixelpluse-98820a318/' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-rose-500 transition-colors text-sm font-medium"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
