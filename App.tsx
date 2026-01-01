import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BackgroundEffects } from './components/VisualEffects';
import { PageTransition } from './components/PageTransition';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Inventory } from './components/Inventory';
import { CEOSection } from './components/CEOSection';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CarDetails } from './components/CarDetails';
import { ContactForm } from './components/ContactForm';
import { Car } from './types';
import { SEO } from './components/SEO';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  // LocalBusiness Structured Data for Homepage
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Testycare Global Services",
    "image": "https://testycare-global.com/ceo_new.jpg",
    "@id": "https://testycare-global.com",
    "url": "https://testycare-global.com",
    "telephone": "+2348012345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lagos, Nigeria",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    // ... (rest of schema same as before)
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <SEO schema={location.pathname === '/' ? localBusinessSchema : undefined} />
      <BackgroundEffects />

      <Navbar onContactClick={() => setIsContactModalOpen(true)} />

      {isContactModalOpen && (
        <ContactForm onClose={() => setIsContactModalOpen(false)} />
      )}

      <main>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <CEOSection />
                <Inventory limit={4} />
                <Testimonials />
                <ContactCTA />
              </>
            } />
            <Route path="/inventory" element={
              <div className="pt-24">
                <Inventory />
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/car/:id" element={<CarDetails />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
