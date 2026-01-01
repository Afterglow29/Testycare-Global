
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const WHATSAPP_URL = "https://wa.link/8w3fem";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-card rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-2xl shadow-rose-900/10' : ''} relative`}>
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-white font-black">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">TESTYCARE <span className="text-rose-600">GLOBAL</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link to="/inventory" className="hover:text-white transition-colors relative group">
              Inventory
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={onContactClick} className="hover:text-white transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:text-rose-600 transition-colors hidden sm:block"
            >
              Call Agent
            </a>
            <button
              onClick={onContactClick}
              className="hidden sm:block bg-white text-black text-xs font-bold px-5 py-2.5 rounded-full hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
            >
              GET IN TOUCH
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden animate-fade-in-down">
            <div className="glass-card rounded-2xl p-4 flex flex-col gap-4 shadow-2xl shadow-black/50 bg-black/90 backdrop-blur-xl border border-white/10">
              <button onClick={() => handleMobileNavClick('/inventory')} className="text-left py-2 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-white font-medium">
                Inventory
              </button>
              <button onClick={() => handleMobileNavClick('/about')} className="text-left py-2 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-white font-medium">
                About
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('testimonials');
                }}
                className="text-left py-2 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-white font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="text-left py-2 px-4 hover:bg-white/5 rounded-xl transition-colors text-gray-300 hover:text-white font-medium"
              >
                Contact
              </button>

              <div className="h-[1px] bg-white/10 my-2"></div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 bg-rose-600 text-white font-bold rounded-xl"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
