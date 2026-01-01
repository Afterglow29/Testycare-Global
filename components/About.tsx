import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export const About: React.FC = () => {
    return (
        <div className="pt-24 pb-12 min-h-screen">
            <SEO
                title="About Us"
                description="Redefining Luxury Automotive Retail. Testycare Global Services provides meticulously inspected, premium foreign-used vehicles in Nigeria."
            />
            {/* Hero Section */}
            <section className="relative px-6 mb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in-up">Our Story</span>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in-up delay-100">
                            Redefining <span className="text-rose-600 text-glow">Luxury</span> <br />
                            Automotive Retail
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                            Testycare Global Services isn't just a dealership; it's a commitment to excellence, transparency, and the thrill of the drive.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 shadow-2xl animate-fade-in-up delay-300 group">
                        <img
                            src="/about-hero.png"
                            alt="Luxury Showroom"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-12 left-12 max-w-xl">
                            <h3 className="text-3xl font-bold mb-2">Excellence in Motion</h3>
                            <p className="text-gray-300">Curating the finest foreign-used vehicles for the Nigerian market since 2018.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px] group-hover:bg-rose-600/20 transition-all duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-rose-600/30">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-black mb-6">Our Mission</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To eliminate the uncertainty in buying foreign-used cars by providing meticulously inspected, high-quality vehicles with complete transparency and unmatched customer service.
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-600/10 transition-all duration-500">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] group-hover:bg-emerald-600/20 transition-all duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-600/30">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-black mb-6">Our Vision</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To become the most trusted name in Nigeria's automotive industry, setting the standard for quality, integrity, and premium automotive experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Promise */}
            <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto bg-zinc-900/50 border border-white/5 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 animate-fade-in-up">The Testycare Promise</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 rounded-2xl transition-colors duration-300 hover:bg-white/5 animate-fade-in-up delay-100">
                                <h4 className="text-xl font-bold text-white mb-2">360° Inspection</h4>
                                <p className="text-gray-500 text-sm">Every bolt, every sensor checked by certified engineers.</p>
                            </div>
                            <div className="p-6 rounded-2xl transition-colors duration-300 hover:bg-white/5 animate-fade-in-up delay-200">
                                <h4 className="text-xl font-bold text-white mb-2">Transparent Pricing</h4>
                                <p className="text-gray-500 text-sm">No hidden fees. The price you see is the price you pay.</p>
                            </div>
                            <div className="p-6 rounded-2xl transition-colors duration-300 hover:bg-white/5 animate-fade-in-up delay-300">
                                <h4 className="text-xl font-bold text-white mb-2">After-Sales Support</h4>
                                <p className="text-gray-500 text-sm">We don't just sell; we support your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to find your dream car?</h2>
                <Link
                    to="/inventory"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-block bg-rose-600 text-white font-bold py-4 px-12 rounded-full hover:bg-rose-700 transition-all transform hover:scale-105 shadow-xl shadow-rose-600/20"
                >
                    Explore Inventory
                </Link>
            </section>
        </div>
    );
};
