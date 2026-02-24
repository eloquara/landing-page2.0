import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Target, PenTool, Zap, RotateCw, ArrowLeft } from 'lucide-react';

const ProcessingView = () => (
  <div className="flex flex-col items-center justify-center h-full w-full bg-white/50 backdrop-blur-sm rounded-[3rem] animate-pulse">
      <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 border-t-2 border-brand-blue rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-r-2 border-brand-navy/30 rounded-full animate-spin-reverse"></div>
          <div className="w-2 h-2 bg-brand-blue rounded-full animate-ping"></div>
      </div>
      <span className="mt-8 text-sm font-serif text-slate-400 tracking-[0.2em] uppercase">Calibrating</span>
  </div>
);

const RoadmapPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [randomCard, setRandomCard] = useState(null);

  const methodologyInsights = [
    { title: "The Narrative Gap", desc: "Identify the distance between what is said and what is heard." },
    { title: "Cognitive Resonance", desc: "Aligning internal thought patterns with external delivery." },
    { title: "Frictionless Feedback", desc: "Designing loops that encourage honesty under pressure." },
    { title: "The Authority Anchor", desc: "Establishing presence without sacrificing accessibility." },
    { title: "Silent Influence", desc: "Mastering the mechanics of non-verbal conviction." },
    { title: "The Trust Equation", desc: "Consistency plus vulnerability equals accelerated trust." },
    { title: "Strategic Silence", desc: "Using the pause to compel the other side to reveal more." },
    { title: "Micro-Agreements", desc: "Building consensus through small, undeniable truths." },
    { title: "Framing Control", desc: "Setting the context before the content is delivered." },
    { title: "Emotional contagion", desc: "Regulating your own state to stabilize the room." }
  ];

  const handleSpin = () => {
    setIsSpinning(true);
    setRandomCard(null); 
    
    setTimeout(() => {
        setIsSpinning(false);
        let newCard;
        do {
            newCard = methodologyInsights[Math.floor(Math.random() * methodologyInsights.length)];
        } while (randomCard && newCard.title === randomCard.title);
        
        setRandomCard(newCard);
    }, 600);
  };

  const steps = [
    {
      id: 0,
      title: "Observe",
      icon: Microscope,
      tagline: "The Diagnostic Phase",
      desc: "We don't guess; we observe. We analyze communication patterns in real-time environments to detect the gap between intent and impact.",
      details: ["Live Environment Audits", "Stakeholder Interviews", "Psychological Safety Assessment"]
    },
    {
      id: 1,
      title: "Identify",
      icon: Target,
      tagline: "The Root Cause Analysis",
      desc: "We isolate the specific cognitive blockers—fear, habit, or misalignment—that are disrupting clarity.",
      details: ["Cognitive Pattern Mapping", "Friction Point Identification", "Leadership Style Decoding"]
    },
    {
      id: 2,
      title: "Design",
      icon: PenTool,
      tagline: "The Strategic Blueprint",
      desc: "We craft a tailored intervention architecture. No generic scripts; only bespoke frameworks designed for your specific reality.",
      details: ["Curriculum Architecture", "Scenario Construction", "Success Metric Definition"]
    },
    {
      id: 3,
      title: "Practice",
      icon: Zap,
      tagline: "The Simulation Lab",
      desc: "High-pressure, low-risk environments where leaders test new skills. We replace theory with muscle memory.",
      details: ["Real-time Simulation", "Video Analysis & Feedback", "Micro-Drill Repetitions"]
    },
    {
      id: 4,
      title: "Integrate",
      icon: RotateCw,
      tagline: "The Habit Formation",
      desc: "We ensure the new capability survives contact with reality, embedding it into daily workflow and culture.",
      details: ["Behavioral Nudges", "Peer Accountability Systems", "Long-term Impact Tracking"]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-600 overflow-hidden flex flex-col">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.4] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-2xl pointer-events-none will-change-transform"></div>
      
      {/* Navigation */}
      <div className="absolute top-8 left-8 z-50">
        <Link to="/our-thinking" className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-navy transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm">
            <ArrowLeft size={16} className="mr-2" /> Return to Philosophy
        </Link>
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center relative z-10 py-20">
        
        {/* LEFT SIDE: The Spinner */}
        <div className="flex items-center justify-center h-full relative">
            <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] flex items-center justify-center">
                
                {/* 1. Base Ring (Always Visible) */}
                <div className={`absolute inset-0 border-2 border-slate-100 rounded-full transition-all duration-1000 ${isSpinning ? 'opacity-50' : 'opacity-100'}`}></div>

                {/* 2. Multi-Color Spin Rings (Visible mainly during spin) */}
                <div className={`absolute inset-0 rounded-full border-[4px] border-transparent border-t-cyan-400 border-l-purple-400 blur-md transition-opacity duration-300
                    ${isSpinning ? 'opacity-100 animate-[spin_0.15s_linear_infinite]' : 'opacity-0'}
                `}></div>
                <div className={`absolute inset-4 rounded-full border-[4px] border-transparent border-r-pink-400 border-b-brand-blue blur-md transition-opacity duration-300
                    ${isSpinning ? 'opacity-100 animate-[spin_0.2s_linear_infinite_reverse]' : 'opacity-0'}
                `}></div>

                {/* 3. Slow Idle Ring (Visible when NOT spinning fast) */}
                <div className={`absolute inset-0 border-2 border-transparent border-t-brand-blue/20 rounded-full transition-opacity duration-300
                    ${isSpinning ? 'opacity-0' : 'opacity-100 animate-[spin_20s_linear_infinite]'}
                `}></div>

                {/* 4. Center Button (Glowing Touch) */}
                <button 
                    onClick={handleSpin}
                    disabled={isSpinning}
                    className={`relative z-30 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] flex flex-col items-center justify-center transition-all duration-500 group outline-none
                        ${isSpinning ? 'scale-90' : 'hover:scale-105 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]'}
                    `}
                >
                    {/* Continuous Glowing Aura */}
                    <div className={`absolute inset-0 rounded-full bg-brand-blue/5 animate-[pulse_3s_infinite] scale-105`}></div>
                    <div className={`absolute inset-0 rounded-full border-2 border-brand-blue/20 group-hover:border-brand-blue/40 transition-colors duration-500`}></div>
                    
                    {/* Inner Pulse */}
                    <div className={`absolute w-full h-full rounded-full bg-brand-blue/10 animate-ping opacity-70 duration-[2000ms] ${isSpinning ? 'hidden' : ''}`}></div>

                    <span className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-brand-blue transition-colors mb-2">
                        {isSpinning ? 'Syncing...' : 'The Cycle'}
                    </span>
                    <h1 className="relative z-10 text-2xl md:text-4xl font-serif text-slate-900 group-hover:text-brand-navy transition-colors">
                        Methodology
                    </h1>
                </button>

                {/* 5. Orbiting Nodes (Hidden/Blurred while spinning fast) */}
                {steps.map((step, index) => {
                    const angle = (index * (360 / steps.length)) - 90;
                    const radius = window.innerWidth < 768 ? 170 : 250;
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);
                    const isActive = activeStep === index;

                    return (
                        <button
                            key={index}
                            onClick={() => { setActiveStep(index); setRandomCard(null); }}
                            className={`absolute w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all duration-500 z-20 shadow-md
                                ${isActive ? 'bg-brand-navy border-brand-navy scale-110 text-white' : 'bg-white border-slate-100 text-slate-400 hover:border-brand-blue hover:text-brand-blue'}
                                ${isSpinning ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
                            `}
                            style={{ 
                                top: `calc(50% + ${y}px)`, 
                                left: `calc(50% + ${x}px)`,
                                marginLeft: window.innerWidth < 768 ? '-28px' : '-32px',
                                marginTop: window.innerWidth < 768 ? '-28px' : '-32px',
                            }}
                        >
                            <step.icon size={20} />
                        </button>
                    );
                })}
            </div>
        </div>

        {/* RIGHT SIDE: Single Square Box Content */}
        <div className="flex items-center justify-center h-full relative">
            <div className="w-full max-w-[500px] aspect-square bg-white/60 backdrop-blur-md rounded-[3rem] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 md:p-12 relative overflow-hidden transition-all duration-500 flex flex-col justify-center">
                
                {isSpinning ? (
                    <ProcessingView />
                ) : !randomCard ? (
                    // Default View: Phase Details
                    <div key={activeStep} className="animate-fade-in flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-5xl font-serif font-bold text-slate-200">0{activeStep + 1}</span>
                            <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest">Phase {activeStep + 1}</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">{steps[activeStep].title}</h2>
                        <h3 className="text-sm text-slate-400 font-medium mb-6 uppercase tracking-wide">{steps[activeStep].tagline}</h3>
                        
                        <p className="text-slate-600 leading-relaxed mb-auto border-l-2 border-slate-200 pl-4 text-sm md:text-base">
                            {steps[activeStep].desc}
                        </p>

                        <div className="mt-8 space-y-4 border-t border-slate-100 pt-8">
                            {steps[activeStep].details.map((detail, i) => (
                                <div key={i} className="flex items-center text-base md:text-lg text-slate-700 font-medium group/item hover:translate-x-1 transition-transform">
                                    <div className="w-2.5 h-2.5 bg-brand-blue rounded-full mr-4 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover/item:scale-125 transition-transform"></div>
                                    {detail}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Random Result View (Insight Content)
                    <div className="animate-[fadeIn_0.5s_ease-out] flex flex-col h-full items-center justify-center relative z-10 text-center px-4">
                        {/* Background Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl -z-10"></div>
                        
                        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight drop-shadow-sm">
                            {randomCard.title}
                        </h2>
                        
                        <div className="w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-blue rounded-full mb-8"></div>
                        
                        <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-lg mx-auto">
                            {randomCard.desc}
                        </p>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default RoadmapPage;