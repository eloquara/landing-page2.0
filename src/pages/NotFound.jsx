import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-600 flex flex-col items-center justify-center px-4">
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist. Return to Eloqaura's homepage or explore our programs." noindex={true} />

      <div className="max-w-2xl mx-auto text-center animate-fade-up">
        <span className="text-[12rem] md:text-[16rem] font-serif font-bold text-slate-100 leading-none select-none">404</span>
        
        <div className="-mt-12 md:-mt-20 relative z-10">
          <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Compass size={32} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Page Not Found
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-lg mx-auto">
            The page you are looking for doesn't exist or has been moved. Let us help you find your way.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="inline-flex items-center px-8 py-4 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-xl hover:-translate-y-1">
              <Home size={18} className="mr-3" /> Back to Home
            </Link>
            <Link to="/programs-and-services" className="inline-flex items-center px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold uppercase tracking-widest hover:border-brand-navy hover:text-brand-navy transition-all">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
