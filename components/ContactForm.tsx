
import React, { useState } from 'react';

interface ContactFormProps {
  onClose: () => void;
  initialVehicle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onClose, initialVehicle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: initialVehicle || '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Send to Webhook (Google Sheets / Automation)
    try {
      await fetch("https://hook.us2.make.com/1e6p7ikjphoi31euq37rnzqh33ueubjb", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Website Contact Modal',
          timestamp: new Date().toISOString()
        }),
      });
    } catch (error) {
      console.error("Webhook submission failed", error);
      // We continue to mailto even if webhook fails, or show error? 
      // User wants both, so we proceed to mailto as fallback/second path.
    }

    // 2. Open Mailto (Email Client)
    const subject = encodeURIComponent(`New Lead: Car Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Interested Vehicle: ${formData.vehicle}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:testycareglobal@gmail.com?subject=${subject}&body=${body}`;

    setStatus('success');
    setTimeout(() => {
      onClose();
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>

      <div className="relative w-full max-w-xl glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden border-rose-600/20">
        <div className="absolute top-0 right-0 p-6">
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === 'success' ? (
          <div className="py-12 text-center animate-float">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Inquiry Sent!</h3>
            <p className="text-gray-400">Opening your email client to complete the send to testycareglobal@gmail.com</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-black tracking-tight mb-2">Connect with <span className="text-rose-600">Testycare</span></h2>
              <p className="text-gray-400 text-sm font-light">Tell us what you're looking for, and we'll get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-600 transition-colors"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-600 transition-colors"
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-600 transition-colors"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Interested Vehicle (Optional)</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-600 transition-colors"
                  placeholder="e.g. 2016 Toyota Highlander"
                  value={formData.vehicle}
                  onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Your Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-600 transition-colors h-24 resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-all duration-300 shadow-lg shadow-rose-900/20 transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-wait"
              >
                {status === 'sending' ? 'Sending...' : 'Send Inquiry to Mr. Olaoluwa'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
