import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Layers, Microscope, Target, Mic, UserCheck, ArrowRight, RotateCw, Sparkles } from 'lucide-react';

const FlipCard = ({ number, title, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 w-full h-[250px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden bg-white rounded-3xl overflow-hidden transition-all duration-500 ease-out
          ${!isFlipped ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.25)] hover:-translate-y-2' : ''}
          border border-slate-100/50
        `}>
          {/* Decorative Elements */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 group-hover:scale-125 transition-all duration-700"></div>
          
          <div className="relative h-full flex flex-col p-8 z-10">
            <div className="flex justify-between items-start">
               <div className="p-3 bg-slate-50/80 backdrop-blur-sm rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                  <Layers size={20} strokeWidth={1.5} />
               </div>
               <span className="text-6xl font-serif text-slate-100 font-bold opacity-50 group-hover:opacity-100 group-hover:text-slate-200/80 transition-all duration-500 select-none absolute top-4 right-6 pointer-events-none">
                  {number}
               </span>
            </div>
            
            <div className="mt-auto relative">
                <h3 className="text-2xl font-serif text-slate-900 leading-tight group-hover:-translate-y-6 transition-transform duration-500 will-change-transform">
                {title}
                </h3>
                
                <div className="absolute -bottom-2 left-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 flex items-center text-xs font-bold uppercase tracking-widest text-brand-blue">
                    <span>Reveal Insight</span>
                    <ArrowRight size={14} className="ml-2" />
                </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden bg-brand-navy border border-white/5 shadow-2xl relative">
           {/* Top Accent Line */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-blue-400 to-brand-navy"></div>
           
           {/* Ambient Glow */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-blue/10 blur-3xl pointer-events-none"></div>

           <div className="relative h-full flex flex-col justify-center items-center p-8 text-center z-10">
              <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent mb-5"></div>
              <p className="text-slate-300 leading-relaxed font-light text-sm">
                {content}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

const PhilosophyPage = () => {
  return (
    <div className="bg-white font-sans text-slate-600">
      {/* 1. Hero Section - Transformative Communication */}
      <section className="relative pt-32 pb-24 border-b border-slate-100 overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.2]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/5 rounded-full blur-2xl -z-10 pointer-events-none will-change-transform"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white border border-slate-100 text-brand-blue font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
            <Brain size={14} className="mr-2" /> Our Thinking
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-[0.9] tracking-tight">
            Transformative <br />
            <span className="italic text-slate-400 font-light">Communication</span>
          </h1>
          <div className="w-24 h-1 bg-brand-navy mx-auto mb-8"></div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-700 mb-8 leading-relaxed">
            Build Clarity. Earn Trust. Drive Change.
          </h2>
          <p className="text-xl font-sans font-light text-slate-500 leading-relaxed max-w-3xl mx-auto mb-10">
            Serious learning for serious leaders. Eloqaura's diagnostic-driven programs turn communication into an immersive, precise, and measurable capability — even under pressure.
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy - Cognition in Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="order-2 md:order-1">
                    <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">The Eloqaura Difference</h3>
                        <h4 className="text-3xl font-serif text-slate-900 mb-6">Cognition in Action</h4>
                        <p className="text-lg leading-relaxed mb-6">
                            At Eloqaura, we don’t treat communication as a skill to be polished, but as <strong className="text-brand-navy">cognition in action</strong> — the visible expression of how people perceive, interpret, decide, and relate.
                        </p>
                        <p className="text-lg leading-relaxed">
                            This difference matters because when communication fails, it’s rarely a speaking problem; <span className="text-brand-blue font-serif italic text-xl">it’s a thinking problem showing up in language.</span>
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
                        How Eloqaura Thinks <br />About Communication
                    </h3>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">
                        Most people think communication is a skill. <strong className="text-brand-navy">We don’t.</strong>
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Communication doesn’t start with words. It starts with what you notice, what you prioritize, what you assume, and what you avoid. Especially under pressure.
                    </p>
                     <div className="border-l-2 border-brand-navy pl-6">
                        <p className="text-lg text-slate-900 font-serif italic">
                            "Words don’t just express thought; they reveal how thought is structured."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. The Quote - Iconic Manifesto */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.3] tracking-tight">
                &ldquo;We don’t train people to <br className="hidden md:block" />
                speak better. <br className="hidden md:block" />
                We help them <span className="italic text-brand-blue font-semibold underline decoration-brand-blue/20 underline-offset-8">think</span> with <br className="hidden md:block" />
                more clarity. <br className="hidden md:block" />
                So speech follows naturally.&rdquo;
            </h2>
        </div>
      </section>

      {/* 4. Why Skills Alone Fail - Modern Editorial */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:justify-between md:items-end mb-16 border-b border-slate-100 pb-8">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-serif text-slate-900 mb-4">Why Skills Alone Fail</h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Most training works—until pressure appears. Here is why surface-level techniques collapse when stakes are high.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <FlipCard 
                    number="01"
                    title="Scripts Collapse"
                    content="Memorization is brittle. It fails the moment a conversation takes an unexpected turn."
                 />
                 <FlipCard 
                    number="02"
                    title="Confidence Fluctuates"
                    content="Without cognitive grounding, executive presence wavers under scrutiny."
                 />
                 <FlipCard 
                    number="03"
                    title="Techniques Fade"
                    content="Surface skills don't survive pressure. Only deep-rooted thinking patterns do."
                 />
            </div>

            <div className="mt-24 relative pb-12 flex justify-center">
                <Link to="/methodology/roadmap" className="group relative w-full max-w-4xl h-32 rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 hover:-translate-y-2">
                    {/* Continuous Moving Stream Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-blue to-cyan-400 w-[200%] animate-[shimmer_3s_linear_infinite]"></div>
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/5 transition-colors duration-300"></div>
                    
                    {/* Content Container */}
                    <div className="absolute inset-0 flex items-center justify-between px-12 md:px-24">
                        <div className="flex flex-col">
                             <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Methodology</span>
                             <h3 className="text-3xl md:text-4xl font-serif text-white font-bold tracking-tight animate-pulse">
                                Explore the Full <br className="md:hidden" /> Cognitive Roadmap
                             </h3>
                        </div>
                        
                        {/* Icon/Arrow Area */}
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-md group-hover:scale-110 group-hover:bg-white group-hover:text-brand-blue transition-all duration-500">
                             <ArrowRight size={32} className="text-white group-hover:text-brand-blue transition-colors" />
                        </div>
                    </div>

                    {/* Decorative Speed Lines */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></div>
                </Link>
            </div>
        </div>
      </section>

      {/* 5. Select Your Focus - Clean Light Design */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Select Your Focus</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                    Choose the path that aligns with your current challenge.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link to="/programs-and-services/organisational-growth" className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <Target size={48} className="text-slate-300 group-hover:text-brand-blue transition-colors mb-8" strokeWidth={1} />
                    <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">Organizational Growth</h3>
                    <p className="text-slate-500 leading-relaxed font-light">Inspire alignment. Drive cultural clarity. Create high-performance teams.</p>
                </Link>

                <Link to="/programs-and-services/public-speaking-mastery" className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-navy transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <Mic size={48} className="text-slate-300 group-hover:text-brand-navy transition-colors mb-8" strokeWidth={1} />
                    <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-brand-navy transition-colors">Public Speaking Mastery</h3>
                    <p className="text-slate-500 leading-relaxed font-light">Become a persuasive speaker under pressure. Influence audiences with confidence.</p>
                </Link>

                <Link to="/individual-transformation" className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-lightBlue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <UserCheck size={48} className="text-slate-300 group-hover:text-brand-lightBlue transition-colors mb-8" strokeWidth={1} />
                    <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-brand-lightBlue transition-colors">Individual Transformation</h3>
                    <p className="text-slate-500 leading-relaxed font-light">Cultivate clear, adaptive thinking. Become a communicator others trust.</p>
                </Link>
            </div>
         </div>
      </section>

      {/* 6. Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="flex items-center space-x-4 mb-6">
                        <Microscope size={32} className="text-brand-blue" />
                        <h2 className="text-3xl font-serif text-slate-900">Diagnostics Come Before Training</h2>
                    </div>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        We don’t start with content; we start with patterns. Before designing anything or offering solutions, we look for where clarity breaks down and apply these principles:
                    </p>
                    <Link to="/contact" className="inline-block border-b-2 border-brand-navy text-brand-navy font-bold pb-1 hover:text-brand-blue hover:border-brand-blue transition-colors">
                        Book a Diagnostic
                    </Link>
                </div>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 mr-4 flex-shrink-0"></span>
                            <div>
                                <strong className="block text-slate-900 mb-1">Reduce designs: Foster as decisions.</strong>
                                <span className="text-slate-500 text-sm">Simplifying complexity into actionable choice.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 mr-4 flex-shrink-0"></span>
                            <div>
                                <strong className="block text-slate-900 mb-1">Prioritize thinking clarity over speaking polish.</strong>
                                <span className="text-slate-500 text-sm">Substance determines style.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 mr-4 flex-shrink-0"></span>
                            <div>
                                <strong className="block text-slate-900 mb-1">Design for real environments, not ideal conditions.</strong>
                                <span className="text-slate-500 text-sm">Training that survives contact with reality.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyPage;