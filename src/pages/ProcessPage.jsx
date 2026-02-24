import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PenTool, Zap, RotateCw, ArrowDown } from 'lucide-react';

const ProcessPage = () => {
  const steps = [
    {
      id: '01',
      title: 'Discover',
      tagline: 'Listen. Explore. Understand.',
      desc: 'We begin by uncovering needs, challenges, and aspirations — bringing clarity to what truly matters.',
      icon: Search,
      color: 'bg-blue-50 text-brand-blue'
    },
    {
      id: '02',
      title: 'Design',
      tagline: 'Shape. Strategise. Align.',
      desc: 'Together, we craft experiential programmes and tools tailored to your people, culture, and goals.',
      icon: PenTool,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      id: '03',
      title: 'Deliver',
      tagline: 'Engage. Empower. Transform.',
      desc: 'Through workshops, simulations, and coaching, we bring learning to life — ensuring knowledge becomes action.',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      id: '04',
      title: 'Reflect',
      tagline: 'Measure. Adapt. Evolve.',
      desc: 'We look back to move forward — assessing impact, refining strategies, and building lasting influence.',
      icon: RotateCw,
      color: 'bg-emerald-50 text-emerald-600'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-50 text-brand-navy font-bold text-xs uppercase tracking-widest mb-6">
            Methodology
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
            Our Process: <br />
            <span className="italic text-brand-blue">Turning Insight Into Impact</span>
          </h1>
          <p className="text-xl text-slate-500 font-serif max-w-2xl mx-auto leading-relaxed">
            Every transformation follows a path. Here’s how we guide yours.
          </p>
        </div>
      </section>

      {/* The Path Visualization */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Content Side */}
                <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pl-16' : 'md:pr-16'} text-center md:text-left mb-8 md:mb-0`}>
                  <div className="inline-flex items-center space-x-2 text-slate-400 font-sans font-bold text-sm tracking-widest uppercase mb-4">
                    <span>Step</span>
                    <span>{step.id}</span>
                  </div>
                  <h3 className="text-4xl font-serif text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-brand-blue font-serif italic text-lg mb-6">{step.tagline}</p>
                  <p className="text-slate-500 text-lg leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Center Icon/Marker */}
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center py-6 md:py-0">
                   <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 ${step.color}`}>
                      <step.icon size={32} strokeWidth={1.5} />
                   </div>
                </div>

                {/* Spacer Side (Empty to balance the grid) */}
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
          
          {/* Connecting Arrow at Bottom */}
          <div className="flex justify-center mt-20 md:mt-32">
             <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center animate-bounce text-slate-400">
                <ArrowDown size={20} />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif text-slate-900 mb-8">Ready to begin your journey?</h2>
            <Link to="/contact" className="inline-block bg-brand-navy text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start Discovery
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;