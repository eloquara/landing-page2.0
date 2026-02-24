import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../lib/data';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 rounded-t-[3rem] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: CTA & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 border-b border-white/10 pb-16">
            <div className="max-w-2xl mb-10 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-brand-lightBlue italic">
                    Ready to speak with <br />authority?
                </h2>
                <Link to="/contact" className="inline-flex items-center text-lg font-bold uppercase tracking-widest hover:text-brand-lightBlue transition-colors group">
                    Start a Conversation <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
            <div className="text-right">
                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-2">{siteData.site.name}</h3>
                <p className="text-slate-400 text-sm">Ooty, Tamilnadu</p>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-brand-lightBlue font-bold text-xs uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-slate-300">
              <li><Link to="/our-thinking" className="hover:text-white transition-colors">Our Thinking</Link></li>
              <li><Link to="/our-process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/our-impact" className="hover:text-white transition-colors">Our Impact</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-brand-lightBlue font-bold text-xs uppercase tracking-widest mb-6">Programs</h4>
             <ul className="space-y-4 text-sm font-light text-slate-300">
              <li><Link to="/programs-and-services/executive-communication-coaching" className="hover:text-white transition-colors">Executive Coaching</Link></li>
              <li><Link to="/programs-and-services/team-communication-workshops" className="hover:text-white transition-colors">Team Workshops</Link></li>
              <li><Link to="/programs-and-services/public-speaking-mastery" className="hover:text-white transition-colors">Public Speaking</Link></li>
             </ul>
          </div>

          <div>
            <h4 className="text-brand-lightBlue font-bold text-xs uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-slate-300">
              <li><a href="mailto:kiranlingaraj@eloqaura.com" className="hover:text-white">kiranlingaraj@eloqaura.com</a></li>
              <li>+91 7824005002</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-lightBlue font-bold text-xs uppercase tracking-widest mb-6">Social</h4>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteData.site.name}. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;