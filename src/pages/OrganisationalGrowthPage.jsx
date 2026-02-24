import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Shield, MessageSquare, Zap, Target, ArrowRight, CheckCircle2, Layers, BookOpen, Anchor, Compass } from 'lucide-react';

const OrganisationalGrowthPage = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const suiteModules = [
    {
      id: 1,
      title: "The Listening Lab™",
      layer: "Foundation Layer",
      icon: Users,
      color: "text-cyan-400",
      bg: "bg-cyan-500",
      border: "border-cyan-400",
      glow: "shadow-[0_0_30px_rgba(34,211,238,0.6)]",
      fix: "People talking past each other",
      outcome: "Shared attention & reduced friction",
      description: "No alignment is possible without listening discipline. We dismantle the habits of defensive listening and replace them with 'Generative Attention'—the ability to hear what is actually being said, not just what you expect to hear.",
      takeaways: [
        "The 4 Levels of Listening diagnostic",
        "Removing 'autobiographical' responses",
        "Techniques for de-escalating tension in real-time"
      ]
    },
    {
      id: 2,
      title: "Conflict to Collaboration™",
      layer: "Stability Layer",
      icon: Shield,
      color: "text-emerald-400",
      bg: "bg-emerald-500",
      border: "border-emerald-400",
      glow: "shadow-[0_0_30px_rgba(52,211,153,0.6)]",
      fix: "Avoided or explosive conflict",
      outcome: "Productive disagreement & trust",
      description: "This is where teams stop being 'nice' and start being honest. We teach teams how to separate the person from the problem and use friction as a source of creative energy rather than a relationship destroyer.",
      takeaways: [
        "Moving from 'positions' to 'interests'",
        "The Art of the Clean Challenge",
        "Repairing trust after a breach"
      ]
    },
    {
      id: 3,
      title: "Decision-Making Dialogues™",
      layer: "Velocity Layer",
      icon: Zap,
      color: "text-amber-400",
      bg: "bg-amber-500",
      border: "border-amber-400",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.6)]",
      fix: "Revisited decisions & ambiguity",
      outcome: "Faster execution & clear logic",
      description: "Decisions are conversations with consequences. We clear the fog around ownership and process, ensuring that when a decision is made, it stays made.",
      takeaways: [
        "Defining decision rights (RAPID/DACI)",
        "The 'Disagree and Commit' protocol",
        "Closing the loop on execution"
      ]
    },
    {
      id: 4,
      title: "Signals & Stories™",
      layer: "Meaning Layer",
      icon: Anchor,
      color: "text-purple-400",
      bg: "bg-purple-500",
      border: "border-purple-400",
      glow: "shadow-[0_0_30px_rgba(192,132,252,0.6)]",
      fix: "Cultural drift & misinterpretation",
      outcome: "Teams aligned around shared meaning",
      description: "Culture is what people infer when leaders speak. We help leaders master the signals they send—both verbal and non-verbal—to ensure their intent matches the team's interpretation.",
      takeaways: [
        "Audit your 'Leadership Shadow'",
        "Storytelling for strategic alignment",
        "Managing the narrative during change"
      ]
    },
    {
      id: 5,
      title: "The Clarity Sprint™",
      layer: "Integration Layer",
      icon: Compass,
      color: "text-rose-400",
      bg: "bg-rose-500",
      border: "border-rose-400",
      glow: "shadow-[0_0_30px_rgba(251,113,133,0.6)]",
      fix: "Insight without application",
      outcome: "Rapid convergence & follow-through",
      description: "This is where clarity becomes operational. A high-intensity sprint to take the principles learned and apply them to a specific, live business challenge the team is currently facing.",
      takeaways: [
        "Live problem solving on real issues",
        "Codifying new team norms",
        "Creating the 90-day integration roadmap"
      ]
    }
  ];

  const handleNodeClick = (id) => {
    setActiveModule(id);
    setIsPaused(true);
    
    // Clear any existing resume timer
    if (timerId) clearTimeout(timerId);
    
    // Set a new timer to resume after 10 seconds
    const newTimerId = setTimeout(() => {
        setIsPaused(false);
        setTimerId(null);
    }, 10000);
    
    setTimerId(newTimerId);
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveModule((prev) => (prev === 5 ? 1 : prev + 1));
      }, 1400); // 1.4s rapid cycle
    }
    return () => {
        if (interval) clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <div className="bg-white font-sans text-slate-600">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.3]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs uppercase tracking-widest mb-8 border border-brand-navy/10">
            <Users size={14} className="mr-2" /> Organisational Growth Suite™
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight">
            From Groups of People <br />
            <span className="text-brand-blue italic font-light">to Teams with Purpose</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Because growth isn’t just strategy — it’s how your people talk, connect, and act together.
          </p>
        </div>
      </section>

      {/* 2. The Core Narrative */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg text-slate-600 mx-auto">
                <p className="text-2xl font-serif text-slate-900 leading-relaxed mb-8">
                    Organisations rarely struggle because people lack skill. <br />
                    They struggle because <span className="text-brand-navy font-semibold">conversations break down.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-red-400">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                            <span>Misalignment creeps in.</span>
                        </div>
                        <div className="flex items-center space-x-3 text-red-400">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                            <span>Trust erodes quietly.</span>
                        </div>
                        <div className="flex items-center space-x-3 text-red-400">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                            <span>Decisions slow.</span>
                        </div>
                        <div className="flex items-center space-x-3 text-red-400">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                            <span>Execution fragments.</span>
                        </div>
                    </div>
                    <div className="text-lg leading-relaxed border-l-2 border-brand-blue pl-6">
                        <p className="mb-4">
                            At Eloqaura, we work at the conversational layer where culture is actually formed.
                        </p>
                        <p>
                            We help organisations turn communication into a shared operating system — one that connects strategy with day-to-day behaviour, and intent with action.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
                    <p className="text-xl font-serif text-brand-navy mb-0">
                        "Teams move from working alongside each other to thinking with each other."
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Transformation Visual (Before -> After) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif text-slate-900 mb-4">What Transformation Looks Like</h2>
                <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* Connector Arrow */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center border border-slate-100 shadow-sm">
                    <ArrowRight className="text-brand-blue" size={20} />
                </div>

                {/* Before State */}
                <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-200"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">Before</span>
                    <ul className="space-y-4">
                        <li className="flex items-start text-slate-500">
                            <span className="mr-3 text-slate-300">—</span> Conversations happening in silos
                        </li>
                        <li className="flex items-start text-slate-500">
                            <span className="mr-3 text-slate-300">—</span> Conflict avoided or mishandled
                        </li>
                        <li className="flex items-start text-slate-500">
                            <span className="mr-3 text-slate-300">—</span> Decisions revisited repeatedly
                        </li>
                        <li className="flex items-start text-slate-500">
                            <span className="mr-3 text-slate-300">—</span> Energy spent managing misunderstanding
                        </li>
                    </ul>
                </div>

                {/* After State */}
                <div className="bg-white p-10 rounded-3xl border border-brand-blue/20 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-6 block">After</span>
                    <ul className="space-y-4">
                        <li className="flex items-start text-slate-700 font-medium">
                            <CheckCircle2 size={18} className="mr-3 text-brand-blue flex-shrink-0" /> Shared language and clear intent
                        </li>
                        <li className="flex items-start text-slate-700 font-medium">
                            <CheckCircle2 size={18} className="mr-3 text-brand-blue flex-shrink-0" /> Healthy disagreement without erosion of trust
                        </li>
                        <li className="flex items-start text-slate-700 font-medium">
                            <CheckCircle2 size={18} className="mr-3 text-brand-blue flex-shrink-0" /> Faster, cleaner decision-making
                        </li>
                        <li className="flex items-start text-slate-700 font-medium">
                            <CheckCircle2 size={18} className="mr-3 text-brand-blue flex-shrink-0" /> Conversations that move work forward
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Impact Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-slate-900 mb-12 text-center">Impact Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <Layers className="text-brand-navy mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 mb-3">SaaS Cross-Functional Team</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Once paralysed by internal conflict, now delivers consistently through clear communication norms and decision ownership.
                    </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <TrendingUp className="text-brand-blue mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 mb-3">Mid-Sized Growth Firm</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Saw employee turnover reduce after leaders embedded clarity and empathy into everyday conversations during rapid scaling.
                    </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <Target className="text-brand-lightBlue mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 mb-3">Global Sales Team</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Improved close rates by aligning on collaborative storytelling across diverse markets and time zones.
                    </p>
                </div>
            </div>
            <p className="text-center mt-12 text-lg text-slate-500 italic">
                These shifts didn’t come from new tools. They came from clearer conversations.
            </p>
        </div>
      </section>

      {/* 5. The Suite Structure (Orbital Command Deck) */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 relative z-20">
                <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    The Organisational Growth Suite™
                </h2>
                <p className="text-xl text-blue-200/80 font-light max-w-2xl mx-auto">
                    The operating system for high-trust, high-velocity teams.
                </p>
            </div>

            <div className="flex flex-col items-center">
                {/* 1. Navigation Nodes (Satellites) - Wider Gap to Fix Overlap */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10 hidden md:block"></div>
                    
                    {suiteModules.map((item) => {
                        const isActive = activeModule === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNodeClick(item.id)}
                                className={`relative group flex flex-col items-center transition-all duration-300 outline-none
                                    ${isActive ? 'scale-110' : 'hover:scale-105 opacity-60 hover:opacity-100'}
                                `}
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10
                                    ${isActive 
                                        ? `${item.bg} ${item.border} ${item.glow} text-white` 
                                        : 'bg-slate-900 border-white/20 text-slate-400 group-hover:border-white/50'
                                    }
                                `}>
                                    {React.createElement(item.icon, { size: 24 })}
                                </div>
                                
                                {/* Label - Positioned to avoid overlap */}
                                <span className={`absolute -bottom-10 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300
                                    ${isActive ? item.color : 'text-slate-500 group-hover:text-slate-300'}
                                `}>
                                    {item.layer}
                                </span>
                                {isActive && (
                                    <div className={`absolute -bottom-12 w-1.5 h-1.5 rounded-full animate-bounce ${item.bg}`}></div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* 2. Main Command Card - Clicking anywhere pauses the timer for 10s */}
                <div className="w-full max-w-5xl relative cursor-pointer" onClick={() => handleNodeClick(activeModule)}>
                    <div className={`absolute -inset-1 bg-gradient-to-r from-transparent via-${suiteModules[activeModule-1].color.split('-')[1]}-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 transition-colors duration-1000`}></div>
                    <div className="relative bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
                        
                        {/* Watermark Number */}
                        <div className="absolute -top-6 -right-6 text-[150px] font-serif font-bold text-white/5 select-none pointer-events-none">
                            0{activeModule}
                        </div>

                        <div key={activeModule} className="animate-fade-in relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            
                            {/* Left: Core Content */}
                            <div>
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className={`px-3 py-1 rounded-full bg-white/5 ${suiteModules[activeModule-1].color} text-[10px] font-bold uppercase tracking-widest border border-white/10`}>
                                        {suiteModules[activeModule-1].layer}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                                    {suiteModules[activeModule-1].title}
                                </h3>
                                <p className="text-lg text-blue-100/80 leading-relaxed font-light mb-8">
                                    {suiteModules[activeModule-1].description}
                                </p>
                                
                                <div className="flex flex-col gap-4">
                                    <div className="bg-red-500/10 border-l-2 border-red-500 p-4 rounded-r-xl">
                                        <h4 className="text-xs font-bold uppercase text-red-400 mb-1 flex items-center">
                                            <span className="animate-pulse mr-2 w-1.5 h-1.5 rounded-full bg-red-500"></span> The Friction
                                        </h4>
                                        <p className="text-sm text-red-100/80">{suiteModules[activeModule-1].fix}</p>
                                    </div>
                                    <div className={`bg-${suiteModules[activeModule-1].color.split('-')[1]}-500/10 border-l-2 ${suiteModules[activeModule-1].border} p-4 rounded-r-xl`}>
                                        <h4 className={`text-xs font-bold uppercase ${suiteModules[activeModule-1].color} mb-1 flex items-center`}>
                                            <span className="animate-pulse mr-2 w-1.5 h-1.5 rounded-full bg-current"></span> The Flow
                                        </h4>
                                        <p className={`text-sm ${suiteModules[activeModule-1].color} opacity-80`}>{suiteModules[activeModule-1].outcome}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Key Takeaways */}
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/5 h-full flex flex-col justify-center relative group/box overflow-hidden">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center">
                                    <Layers size={16} className="mr-2" /> Module Components
                                </h4>

                                <ul className="space-y-4">
                                    {suiteModules[activeModule-1].takeaways.map((point, i) => (
                                        <li key={i} className="flex items-start group">
                                            <div className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:${suiteModules[activeModule-1].bg}/40 transition-colors`}>
                                                <div className={`w-2 h-2 rounded-full ${suiteModules[activeModule-1].bg}`}></div>
                                            </div>
                                            <span className="text-slate-300 group-hover:text-white transition-colors">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                    <Link to="/contact" className={`font-bold text-sm ${suiteModules[activeModule-1].color} hover:text-white transition-colors flex items-center justify-center`}>
                                        Book This Workshop <ArrowRight size={16} className="ml-2" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-serif text-slate-900 mb-8">Strengthen Your Teams</h2>
            <p className="text-xl text-slate-500 mb-12">
                Start with clarity. Not reorganisation.
            </p>
            <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-brand-navy text-white font-bold rounded-full shadow-xl hover:bg-brand-blue transition-all hover:-translate-y-1">
                Begin Organisational Growth <ArrowRight className="ml-2" size={18} />
            </Link>
            <div className="mt-16 border-t border-slate-100 pt-12">
                <p className="text-slate-400 font-serif italic text-lg">
                    "Clarity isn’t the end. It’s the beginning of organisational growth."
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default OrganisationalGrowthPage;