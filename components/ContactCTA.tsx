
import React from 'react';

export const ContactCTA: React.FC = () => {
  const WHATSAPP_URL = "https://wa.link/8w3fem";
  const JIJI_SHOP_URL = "https://jiji.ng/shop/ogunyemi-olaolu-emmanuel/cars";
  const WEBHOOK_URL = "https://hook.us2.make.com/1e6p7ikjphoi31euq37rnzqh33ueubjb";
  const CEO_THUMB = "/ceo_new.jpg";

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Send to Webhook (Google Sheets / Automation)
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Website Contact Form',
          timestamp: new Date().toISOString()
        }),
      });
    } catch (error) {
      console.error("Webhook submission failed", error);
    }

    // 2. Open Mailto (Email Client) - as requested by user previously
    const subject = encodeURIComponent(`New Lead: Car Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message:\n${formData.message}`
    );

    // We open mailto in a timeout to allow the UI to update first, 
    // or we can do it immediately. 
    // Usually opening a new window/tab for mailto is better done directly.
    window.location.href = `mailto:testycareglobal@gmail.com?subject=${subject}&body=${body}`;

    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto glass-card rounded-[3rem] p-8 md:p-12 relative z-10 border-rose-600/20 overflow-hidden">
        {/* Animated Background for CTA */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-black to-blue-900/10 -z-10 opacity-50"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Info & Links */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-8">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-rose-600 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
                <img
                  src={CEO_THUMB}
                  className="w-24 h-24 rounded-full border-4 border-white/10 relative z-10 object-cover shadow-2xl transition-all duration-500 group-hover:scale-110 bg-zinc-800"
                  alt="Mr. Olaoluwa Ogunyemi"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-2 rounded-xl z-20 shadow-lg shadow-emerald-900/50 border-2 border-white/20">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
                    <path d="M12 2L4.5 9L12 22L19.5 9L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
              Message <span className="text-rose-600">Mr. Olaoluwa</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">
              Experience direct dealership service. Chat with our CEO, <span className="text-white font-bold">Mr. Olaoluwa Ogunyemi</span>, or submit an inquiry to secure your next premium vehicle today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 transition-all duration-300 shadow-lg shadow-rose-900/20 flex items-center justify-center gap-2"
              >
                <span>WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.909 3.038 1.383 4.588 1.385 5.4 0 9.792-4.393 9.795-9.792.002-2.618-1.019-5.074-2.871-6.928s-4.312-2.873-6.932-2.873c-5.4 0-9.791 4.393-9.794 9.792-.001 1.83.479 3.611 1.39 5.193l-.935 3.414 3.494-.916zm10.702-7.041c-.29-.145-1.711-.844-1.976-.94s-.457-.145-.649.145c-.192.291-.744.94-.912 1.134-.167.194-.335.218-.625.073-.29-.145-1.223-.45-2.328-1.437-.86-.767-1.44-1.716-1.608-2.008-.168-.291-.018-.448.127-.592.13-.13.29-.34.435-.509.145-.17.194-.291.29-.485.097-.194.048-.364-.024-.509s-.649-1.562-.89-2.144c-.236-.569-.475-.492-.649-.501-.168-.008-.362-.01-.556-.01s-.509.073-.775.364c-.266.291-1.018.994-1.018 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.968 4.388.694.299 1.235.478 1.657.612.698.222 1.334.191 1.837.116.56-.083 1.711-.698 1.952-1.371.242-.672.242-1.25.17-1.371-.072-.12-.266-.194-.556-.34z" />
                </svg>
              </a>
              <a
                href={JIJI_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-card font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                Follow on Jiji
              </a>
            </div>
          </div>


          {/* Right Column: Contact Form */}
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative group">
            <div className="absolute inset-0 bg-rose-600/5 rounded-3xl blur-xl group-hover:bg-rose-600/10 transition-colors"></div>

            <h3 className="text-2xl font-bold mb-6 relative z-10">Make an Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all text-white placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all text-white placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all text-white placeholder-gray-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in the..."
                  required
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-rose-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  'Send Inquiry'
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-center text-sm mt-2 animate-fade-in-up">
                  Thank you! We'll be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-500 text-center text-sm mt-2 animate-fade-in-up">
                  Something went wrong. Please try again or use WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div >
    </section >
  );
};

