import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Compass, Target, Sparkles, ArrowRight } from 'lucide-react';

const DiscoveryPage = () => {
  return (
    <div className="bg-white min-h-screen text-slate-600 font-sans overflow-x-hidden">
      
      {/* 1. Hero: Asymmetric Split */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background Art */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-blob"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-7 animate-fade-up">
                <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white border border-slate-100 text-brand-blue font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                    <Compass size={12} className="mr-2" /> The Starting Point
                </span>
                <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.9] tracking-tight mb-8">
                    Excellence <br />
                    <span className="italic text-slate-400 font-light">in Action.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 max-w-2xl text-balance">
                    Most believe communication is just a skill to be polished. We know it is <strong className="text-brand-navy font-semibold">cognition in action.</strong>
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        Begin Discovery
                    </Link>
                </div>
            </div>
            
            {/* Floating Glass Card */}
            <div className="lg:col-span-5 relative animate-fade-up delay-200">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-[3rem] blur-xl transform rotate-3 scale-105"></div>
                <div className="glass-card p-10 rounded-[3rem] relative rotate-2 hover:rotate-0 transition-transform duration-700">
                    <h3 className="text-3xl font-serif text-slate-900 mb-6">Diagnosing the "Why"</h3>
                    <p className="text-lg leading-relaxed mb-6">
                        We don’t start with content; we start with patterns. Before offering solutions, we look for exactly where clarity breaks down under pressure.
                    </p>
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-blue">
                        <p className="text-sm font-semibold text-brand-navy">
                            "When communication fails, it is rarely a speaking problem—it is a thinking problem showing up in language."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. The Pillars: Horizontal Scroll / Grid */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900">The Eloqaura Pillars</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors duration-500"></div>
                    <Target size={40} className="text-slate-300 group-hover:text-brand-blue transition-colors mb-8" strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif text-slate-900 mb-4">Strategic Alignment</h3>
                    <p className="text-slate-500 leading-relaxed font-light">
                        We help teams move beyond "confidence hacks" to create high-performance environments where everyone is moving toward the same goal.
                    </p>
                </div>

                {/* Pillar 2 */}
                <div className="group bg-brand-navy p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-10"></div>
                    <Search size={40} className="text-brand-lightBlue mb-8" strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif text-white mb-4">Evidence-Based</h3>
                    <p className="text-slate-300 leading-relaxed font-light mb-6">
                        Our process follows a rigorous path:
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-brand-lightBlue">
                        <span>Observe</span> &rarr; <span>Identify</span> &rarr; <span>Design</span> &rarr; <span>Integrate</span>
                    </div>
                </div>

                {/* Pillar 3 */}
                <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors duration-500"></div>
                    <Sparkles size={40} className="text-slate-300 group-hover:text-brand-blue transition-colors mb-8" strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif text-slate-900 mb-4">Measurable Outcomes</h3>
                    <p className="text-slate-500 leading-relaxed font-light">
                        We turn communication into a precise, measurable capability that doesn't collapse when the stakes get high.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Final Thought: Action & Future */}
      <section className="py-40 bg-white relative overflow-hidden text-center">
        {/* Creative Diagram: Abstract Compass/Direction */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-10">
            <div className="absolute inset-0 border border-brand-blue rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-12 border border-dashed border-brand-navy rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute inset-32 border border-slate-200 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-px bg-slate-200 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 h-full w-px bg-slate-200 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-10">
                <div className="w-20 h-20 bg-brand-navy rounded-full flex items-center justify-center shadow-2xl text-white">
                    <Compass size={40} strokeWidth={1} />
                </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight tracking-tight mb-8">
                The future belongs to those <br />
                who <span className="italic text-brand-blue">communicate it.</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-sans text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Your transformation begins not with a speech, but with a decision to be understood.
            </p>

            <div className="mt-16">
                <Link to="/contact" className="inline-flex items-center text-brand-navy font-bold uppercase tracking-widest text-sm hover:text-brand-blue transition-colors border-b-2 border-brand-navy hover:border-brand-blue pb-1">
                    Start Your Journey <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default DiscoveryPage;