import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, BookOpen, Scale, Radio, Network, ArrowRight, Layers, CheckCircle2, Zap } from 'lucide-react';

const SocietalImpactPage = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const suiteModules = [
    {
      id: 1,
      title: "Narrative Literacy™",
      layer: "Foundation Layer",
      icon: BookOpen,
      color: "text-teal-200",
      bg: "bg-teal-900",
      border: "border-teal-700",
      glow: "shadow-[0_0_30px_rgba(45,211,174,0.3)]",
      address: "Manipulative narratives & oversimplified discourse",
      outcome: "Citizens & leaders who can read narrative structure",
      description: "If people can’t read narratives, they can’t resist them. We build the capacity to recognise narrative structures, emotional manipulation, and oversimplification in public discourse.",
      takeaways: [
        "Deconstructing 'Us vs Them' frames",
        "Identifying emotional contagion",
        "The architecture of viral misinformation"
      ]
    },
    {
      id: 2,
      title: "Dialogue Across Difference™",
      layer: "Bridging Layer",
      icon: Users,
      color: "text-indigo-200",
      bg: "bg-indigo-900",
      border: "border-indigo-700",
      glow: "shadow-[0_0_30px_rgba(129,140,248,0.3)]",
      address: "Polarisation & ideological rigidity",
      outcome: "Capacity to hold opposing views without collapse",
      description: "Societies don’t need agreement. They need dialogue that doesn’t destroy trust. We teach the specific protocols for maintaining connection while navigating profound disagreement.",
      takeaways: [
        "The protocol for 'Safe Uncertainty'",
        "Listening beyond the trigger",
        "Moving from debate to dialogue"
      ]
    },
    {
      id: 3,
      title: "Language & Power™",
      layer: "Awareness Layer",
      icon: Scale,
      color: "text-amber-200",
      bg: "bg-amber-900",
      border: "border-amber-700",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.3)]",
      address: "Unexamined authority & silenced voices",
      outcome: "Ethical use of influence & hierarchy awareness",
      description: "Power doesn’t disappear when ignored — it concentrates. We make the invisible dynamics of power in language visible, ensuring inclusion is structural, not just performative.",
      takeaways: [
        "Mapping power dynamics in discourse",
        "The ethics of persuasion",
        "Amplifying silenced signals"
      ]
    },
    {
      id: 4,
      title: "Public Sensemaking Labs™",
      layer: "Collective Cognition",
      icon: Network,
      color: "text-sky-200",
      bg: "bg-sky-900",
      border: "border-sky-700",
      glow: "shadow-[0_0_30px_rgba(56,189,248,0.3)]",
      address: "Information overload & fragmented understanding",
      outcome: "Shared frameworks for thinking through complexity",
      description: "Sensemaking is the missing civic skill of our time. We provide the spaces and frameworks for communities to process complex, uncertain information together without falling into conspiracy or apathy.",
      takeaways: [
        "Frameworks for complexity processing",
        "Collective reasoning protocols",
        "Navigating the 'epistemic commons'"
      ]
    },
    {
      id: 5,
      title: "Cultural Clarity Projects™",
      layer: "Integration Layer",
      icon: Globe,
      color: "text-emerald-200",
      bg: "bg-emerald-900",
      border: "border-emerald-700",
      glow: "shadow-[0_0_30px_rgba(52,211,153,0.3)]",
      address: "Values drift & narrative irrelevance",
      outcome: "Institutions aligned around explicit, lived values",
      description: "Culture is sustained through language — or it decays through neglect. We help institutions refresh their founding narratives to speak to who they are becoming, not just who they were.",
      takeaways: [
        "Aligning legacy with future intent",
        "Values as decision heuristics",
        "The language of institutional renewal"
      ]
    }
  ];

  const handleNodeClick = (id) => {
    setActiveModule(id);
    setIsPaused(true);
    if (timerId) clearTimeout(timerId);
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
      }, 1200);
    }
    return () => {
        if (interval) clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <div className="bg-slate-50 font-serif text-slate-700">
      
      {/* 1. Hero Section - Quietly Serious */}
      <section className="relative pt-32 pb-24 border-b border-slate-200 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(240,253,250,0.5))] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-800 text-xs font-sans font-bold tracking-widest uppercase mb-8 border border-teal-100">
            Societal Impact Suite™
          </span>
          <h1 className="text-5xl md:text-7xl text-slate-900 mb-8 leading-tight">
            Shaping how societies think, <br />
            <span className="text-teal-700 italic">decide, and relate.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-sans font-light max-w-3xl mx-auto leading-relaxed">
            To address breakdowns that don’t belong to one person or one organisation — but emerge at the collective level.
          </p>
        </div>
      </section>

      {/* 2. Core Narrative - The "Why" */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-xl mx-auto text-center">
                <p className="text-3xl text-slate-800 leading-normal font-medium mb-12">
                    Societies fracture not because people can’t speak, <br />
                    <span className="text-teal-700">but because shared meaning erodes.</span>
                </p>
                <div className="w-24 h-1 bg-teal-100 mx-auto mb-12 rounded-full"></div>
                <p className="font-sans text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                    This suite focuses on how narratives, discourse, and public conversations shape reality at scale. It is an architecture for <strong>Collective Clarity</strong>.
                </p>
            </div>
        </div>
      </section>

      {/* 3. The Suite Structure (Orbital Command Deck - Adapted for Society) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden font-sans">
        {/* Deep Earthy/Teal Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-teal-50">The Societal Impact Suite™</h2>
                <p className="text-teal-200/60 font-light tracking-wide">Systemic interventions for narrative & discourse.</p>
            </div>

            <div className="flex flex-col items-center">
                {/* 1. Navigation Nodes */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10 hidden md:block"></div>
                    {suiteModules.map((item) => {
                        const isActive = activeModule === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNodeClick(item.id)}
                                className={`relative group flex flex-col items-center transition-all duration-500 outline-none
                                    ${isActive ? 'scale-110' : 'hover:scale-105 opacity-60 hover:opacity-100'}
                                `}
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 bg-slate-900
                                    ${isActive ? `${item.border} ${item.color} shadow-[0_0_20px_rgba(255,255,255,0.1)]` : 'border-white/10 text-slate-500'}
                                `}>
                                    {React.createElement(item.icon, { size: 24 })}
                                </div>
                                <span className={`absolute -bottom-10 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300
                                    ${isActive ? 'text-teal-200' : 'text-slate-600'}
                                `}>
                                    {item.layer}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* 2. Main Command Card */}
                <div className="w-full max-w-5xl relative cursor-pointer" onClick={() => handleNodeClick(activeModule)}>
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl">
                        <div className="absolute -top-6 -right-6 text-[150px] font-serif font-bold text-white/5 select-none pointer-events-none">
                            0{activeModule}
                        </div>

                        <div key={activeModule} className="animate-fade-in relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className={`px-3 py-1 rounded-full bg-white/5 ${suiteModules[activeModule-1].color} text-[10px] font-bold uppercase tracking-widest border border-white/5`}>
                                        {suiteModules[activeModule-1].layer}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                                    {suiteModules[activeModule-1].title}
                                </h3>
                                <p className="text-lg text-slate-300 leading-relaxed font-light mb-8">
                                    {suiteModules[activeModule-1].description}
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="bg-red-900/20 border-l-2 border-red-800 p-4 rounded-r-xl">
                                        <h4 className="text-xs font-bold uppercase text-red-400 mb-1">Addresses</h4>
                                        <p className="text-sm text-red-200/70">{suiteModules[activeModule-1].address}</p>
                                    </div>
                                    <div className={`bg-teal-900/20 border-l-2 border-teal-800 p-4 rounded-r-xl`}>
                                        <h4 className="text-xs font-bold uppercase text-teal-400 mb-1">Outcome</h4>
                                        <p className="text-sm text-teal-200/70">{suiteModules[activeModule-1].outcome}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-8 border border-white/5 h-full flex flex-col justify-center">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center">
                                    <Layers size={16} className="mr-2" /> Core Mechanisms
                                </h4>
                                <ul className="space-y-4">
                                    {suiteModules[activeModule-1].takeaways.map((point, i) => (
                                        <li key={i} className="flex items-start text-slate-300">
                                            <CheckCircle2 size={16} className={`mr-3 mt-1 flex-shrink-0 ${suiteModules[activeModule-1].color}`} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Audience & Invitation */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="text-3xl font-serif text-slate-900 mb-6">Designed For</h3>
                    <p className="text-slate-500 mb-8 font-sans leading-relaxed">
                        This suite is built for those who steward the long-term health of institutions and communities. It deters casual browsers and attracts long-term collaborators.
                    </p>
                    <div className="grid grid-cols-2 gap-4 font-sans text-sm font-bold text-slate-700">
                        <div className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span> Educators</div>
                        <div className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span> Policy Thinkers</div>
                        <div className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span> Social Institutions</div>
                        <div className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span> Foundations</div>
                        <div className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span> Cultural Leaders</div>
                        <div className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span> Universities & NGOs</div>
                    </div>
                </div>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center">
                    <h3 className="text-2xl font-serif text-slate-900 mb-4">Start the Conversation</h3>
                    <p className="text-slate-500 mb-8 font-sans font-light">
                        Societal change doesn’t begin with louder voices. It begins with clearer thinking.
                    </p>
                    <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-teal-900 text-white font-sans font-bold text-sm rounded-full shadow-lg hover:bg-teal-800 transition-all">
                        Begin a Conversation on Collective Clarity <ArrowRight className="ml-2" size={16} />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* 5. System Completion Footer */}
      <section className="py-16 bg-slate-100 border-t border-slate-200 text-center font-sans">
        <div className="max-w-4xl mx-auto px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 block">The Eloqaura Architecture</span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 opacity-70">
                <span className="text-slate-500">Individual Transformation Suite™</span>
                <span className="hidden md:block text-slate-300">→</span>
                <span className="text-slate-500">Organisational Growth Suite™</span>
                <span className="hidden md:block text-slate-300">→</span>
                <span className="text-teal-700 font-bold">Societal Impact Suite™</span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default SocietalImpactPage;