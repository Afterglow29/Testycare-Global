import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CAR_DATA } from '../constants';
import { SEO } from './SEO';

export const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = CAR_DATA.find(c => c.id === id);

  const [activeImage, setActiveImage] = useState<string>('');
  const [showFullGallery, setShowFullGallery] = useState(false);
  const WHATSAPP_URL = "https://wa.link/8w3fem";
  const CEO_IMAGE = "/ceo_new.jpg";

  useEffect(() => {
    if (car) {
      setActiveImage(car.imageUrl);
      window.scrollTo(0, 0);
    }
  }, [car]);

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Car Not Found</h2>
          <button onClick={() => navigate('/inventory')} className="text-rose-500 underline">Back to Inventory</button>
        </div>
      </div>
    );
  }

  const allImages = [car.imageUrl, ...(car.additionalImages || [])];

  // Construct SEO Schema for Product
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${car.year} ${car.make} ${car.model}`,
    "image": car.imageUrl,
    "description": car.description,
    "brand": {
      "@type": "Brand",
      "name": car.make
    },
    "offers": {
      "@type": "Offer",
      "url": `https://testycare-global.com/car/${car.id}`,
      "priceCurrency": "NGN",
      "price": car.price,
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Testycare Global Services"
      }
    }
  };

  const maxThumbnails = 7;
  const remainingImages = allImages.length - maxThumbnails;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4 md:px-6">
      <SEO
        title={`${car.year} ${car.make} ${car.model}`}
        description={`${car.year} ${car.make} ${car.model} in ${car.condition} condition. Located in ${car.location}. ${car.description.substring(0, 150)}...`}
        image={car.imageUrl}
        schema={productSchema}
      />
      {/* Full Screen Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-95 flex flex-col justify-center items-center animate-fade-in">
          <button
            onClick={() => setShowFullGallery(false)}
            className="absolute top-6 right-6 text-white text-xl p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all z-[70]"
          >
            ✕
          </button>

          <div className="w-full h-full p-4 md:p-12 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allImages.map((img, idx) => (
              <div key={`modal-img-${idx}`} className="relative group cursor-pointer" onClick={() => { setActiveImage(img); setShowFullGallery(false); }}>
                <img src={img} alt={`${car.name} view ${idx + 1}`} className="w-full h-auto rounded-xl border border-white/10 hover:border-rose-600 transition-colors" />
                <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Back Button & Title Area */}
        <button
          onClick={() => navigate('/inventory')}
          className="mb-8 flex items-center gap-2 text-rose-500 font-bold hover:text-rose-400 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Inventory
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Column */}
          <div className="flex-1 space-y-8">
            {/* Image Gallery */}
            <div className="glass-card rounded-[2.5rem] overflow-hidden p-3 relative">
              <div
                className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-black group/main cursor-pointer"
                onClick={() => setShowFullGallery(true)}
              >
                <img
                  src={activeImage}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-1000"
                />

                <div className="absolute bottom-6 right-6 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white border border-white/5">
                  {allImages.indexOf(activeImage) + 1} / {allImages.length} Photos
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 mt-4 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-rose-600/50 scrollbar-track-transparent">
                {allImages.slice(0, maxThumbnails).map((img, i) => {
                  const isLast = i === maxThumbnails - 1;
                  const showOverlay = isLast && remainingImages > 0;

                  return (
                    <div key={i} className="relative flex-shrink-0">
                      <button
                        onClick={() => {
                          if (showOverlay) {
                            setShowFullGallery(true);
                          } else {
                            setActiveImage(img);
                          }
                        }}
                        className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${activeImage === img && !showOverlay ? 'border-rose-600 shadow-lg shadow-rose-600/20' : 'border-white/10 hover:border-white/30'
                          }`}
                      >
                        <img
                          src={img}
                          alt={`${car.name} view ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay for +N images */}
                        {showOverlay && (
                          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                            <span className="text-2xl font-bold">+{remainingImages + 1}</span>
                            <span className="text-[10px] uppercase font-bold tracking-wider">images</span>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Title and Key Specs */}
            <div className="glass-card rounded-[2.5rem] p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">{car.name}</h1>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      {car.location}
                    </span>
                    <span>• Promoted</span>
                    <span>• 1 views</span>
                  </div>
                </div>
                <button className="p-3 glass-card rounded-full hover:bg-white/5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                </button>
              </div>

              {/* Specification Grid Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5">
                {[
                  { label: car.condition, sub: 'Condition', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                  { label: car.fuel, sub: 'Fuel Type', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { label: car.transmission, sub: 'Transmission', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
                  { label: car.mileage, sub: 'Mileage', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-rose-600/10 flex items-center justify-center text-rose-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{item.label}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specs List */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 py-8">
                {[
                  ['Make', car.make],
                  ['Model', car.model],
                  ['Year', car.year],
                  ['Engine', car.engine],
                  ['Body', car.bodyType],
                  ['Color', car.color]
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-sm">{label}</span>
                    <span className="text-white font-medium text-sm">{value}</span>
                  </div>
                ))}
              </div>

              {/* Features Tags */}
              <div className="py-8">
                <h3 className="text-lg font-bold mb-6">Key Features</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {car.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="py-8 border-t border-white/5">
                <h3 className="text-lg font-bold mb-4">Description</h3>
                <p className="text-gray-400 font-light leading-relaxed whitespace-pre-line">
                  {car.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="w-full lg:w-[400px] space-y-6">
            {/* Price Card */}
            <div className="glass-card rounded-[2.5rem] p-8">
              <div className="mb-2 text-3xl font-black text-white">{formatCurrency(car.price)}</div>
              <div className="text-xs text-gray-500 flex justify-between mb-8 pb-4 border-b border-white/5">
                <span>Market price:</span>
                <span className="font-bold">{formatCurrency(car.price * 0.95)} ~ {formatCurrency(car.price * 1.05)}</span>
              </div>

              <div className="space-y-4">
                <a href={WHATSAPP_URL} target="_blank" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.909 3.038 1.383 4.588 1.385 5.4 0 9.792-4.393 9.795-9.792.002-2.618-1.019-5.074-2.871-6.928s-4.312-2.873-6.932-2.873c-5.4 0-9.791 4.393-9.794 9.792-.001 1.83.479 3.611 1.39 5.193l-.935 3.414 3.494-.916zm10.702-7.041c-.29-.145-1.711-.844-1.976-.94s-.457-.145-.649.145c-.192.291-.744.94-.912 1.134-.167.194-.335.218-.625.073-.29-.145-1.223-.45-2.328-1.437-.86-.767-1.44-1.716-1.608-2.008-.168-.291-.018-.448.127-.592.13-.13.29-.34.435-.509.145-.17.194-.291.29-.485.097-.194.048-.364-.024-.509s-.649-1.562-.89-2.144c-.236-.569-.475-.492-.649-.501-.168-.008-.362-.01-.556-.01s-.509.073-.775.364c-.266.291-1.018.994-1.018 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.968 4.388.694.299 1.235.478 1.657.612.698.222 1.334.191 1.837.116.56-.083 1.711-.698 1.952-1.371.242-.672.242-1.25.17-1.371-.072-.12-.266-.194-.556-.34z" /></svg>
                  Start WhatsApp Chat
                </a>
                <a href={WHATSAPP_URL} target="_blank" className="w-full py-4 border border-rose-500 text-rose-500 font-bold rounded-2xl flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
                  Request Call Back
                </a>
              </div>
            </div>

            {/* Seller Info Card */}
            <div className="glass-card rounded-[2.5rem] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={CEO_IMAGE}
                    className="w-16 h-16 rounded-full object-cover border-2 border-rose-600/30 bg-zinc-800"
                    alt="Mr. Olaoluwa"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-md">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current"><path d="M12 2L4.5 9L12 22L19.5 9L12 2Z" /></svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Testycare Global</h4>
                  <p className="text-xs text-rose-500 font-medium uppercase tracking-widest">Verified Diamond Dealer</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Typically responds within a few hours
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  5+ years on Jiji Verified
                </div>
              </div>
              <a href="https://jiji.ng/shop/ogunyemi-olaolu-emmanuel/cars" target="_blank" className="block w-full text-center py-4 bg-white/5 rounded-2xl font-bold hover:bg-white/10 transition-colors text-sm">
                View All Seller Ads
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
