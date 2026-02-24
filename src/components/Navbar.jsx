import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteData } from '../lib/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNav = siteData.site.sitemap.filter(item => ['Our Thinking', 'Our Process', 'Our Impact'].includes(item.nav.label));
  const programNav = siteData.site.sitemap.find(item => item.nav.label === 'Programs & Services');
  const actionNav = siteData.site.sitemap.find(item => item.nav.label === 'Discovery');

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-[100] pointer-events-none pt-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`pointer-events-auto relative flex justify-between items-center bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-full px-4 py-3 transition-all duration-500 ${scrolled ? 'md:py-2.5 md:px-4 shadow-xl border-slate-300/50' : 'md:py-3 md:px-6'}`}>
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-4">
            <Link 
              to="/" 
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-xl font-serif font-bold tracking-tighter uppercase text-slate-900 hover:text-brand-blue transition-colors whitespace-nowrap"
            >
              {siteData.site.name}
            </Link>
          </div>
          
          {/* Desktop Center Menu */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {mainNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${location.pathname.startsWith(item.path) ? 'text-brand-navy bg-brand-blue/5' : 'text-slate-400 hover:text-brand-navy'}`}
                >
                  <span className="relative z-10">{item.nav.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
            ))}
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-2 ml-auto">
            {/* Programs Dropdown */}
            <div className="relative group">
                <button className={`flex items-center px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${location.pathname.startsWith(programNav.path) ? 'text-brand-blue bg-brand-blue/5' : 'text-slate-600 hover:text-brand-blue'}`}>
                    <span>Programs & Services</span>
                    <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                {/* Dropdown Panel */}
                <div className="absolute right-0 top-full mt-2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto z-[110]">
                    {/* Invisible Bridge */}
                    <div className="absolute top-0 left-0 w-full h-4 -mt-4 bg-transparent"></div>
                    
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6">
                        <div className="grid grid-cols-2 gap-4">
                            {programNav.children.filter(child => child.nav && child.nav.visible).map(child => (
                                <Link 
                                    key={child.path} 
                                    to={child.path}
                                    className="block p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 group/item"
                                >
                                    <span className="block text-sm font-bold text-slate-900 group-hover/item:text-brand-blue transition-colors">{child.nav.label}</span>
                                    <span className="block text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Explore Curriculum</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-px h-5 bg-slate-200"></div>

            {/* Discovery Link */}
            <Link 
                to="/discovery"
                className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${location.pathname === '/discovery' ? 'bg-white border border-slate-100 shadow-sm text-brand-navy' : 'text-slate-600 hover:text-brand-blue'}`}
            >
                Discovery
            </Link>

            {/* Contact Button */}
            <Link 
                to="/contact" 
                className="bg-brand-navy text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-brand-blue/30 hover:bg-brand-blue transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
                Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-x-4 top-24 bottom-4 bg-white/98 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/20 transition-all duration-500 transform pointer-events-auto ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} overflow-y-auto z-[120]`}>
          <div className="p-8 space-y-2">
            {[...mainNav, programNav, actionNav].map((item) => (
                <div key={item.path} className="border-b border-slate-100 py-2 last:border-0">
                    {item.children && item.children.length > 0 ? (
                        <div className="py-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 block">{item.nav.label}</span>
                            <div className="space-y-2 pl-4 border-l-2 border-slate-50">
                                {item.children.filter(child => child.nav && child.nav.visible).map(child => (
                                    <Link
                                        key={child.path}
                                        to={child.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 text-lg font-serif font-bold text-slate-900"
                                    >
                                        {child.nav.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                         <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-4 text-2xl font-serif font-bold text-slate-900"
                        >
                            {item.nav.label}
                        </Link>
                    )}
                </div>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-10 px-6 py-5 bg-brand-navy text-white rounded-2xl font-bold text-lg uppercase tracking-widest shadow-xl"
            >
                Contact Us
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;