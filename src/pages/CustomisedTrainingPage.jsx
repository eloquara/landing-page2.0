import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Target, PenTool, Zap, BarChart3, ArrowRight, CheckCircle2, XCircle, Sparkles, MessageSquare, Layers, Repeat, Search, Compass, Users, FileText, BookOpen, Layout, Edit, PieChart, TrendingUp, Activity, ClipboardList } from 'lucide-react';

const CustomisedTrainingPage = () => {
  const [activeTab, setActiveTab] = useState('immersive-delivery');

  const tabs = [
    { id: 'needs-discovery', label: 'Needs Discovery Sprint™', icon: Search },
    { id: 'tailored-curriculum', label: 'Tailored Curriculum Design™', icon: PenTool },
    { id: 'immersive-delivery', label: 'Immersive Delivery Models™', icon: Zap },
    { id: 'impact-mapping', label: 'Impact Mapping™', icon: BarChart3 },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-600">
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 border-b border-slate-100 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white border border-slate-200 text-brand-navy font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <Briefcase size={14} className="mr-2 text-brand-blue" /> Customised Training Programs
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight tracking-tight">
            Engineering <br />
            <span className="italic text-brand-blue font-light">Learning Ecosystems.</span>
          </h1>
          <p className="text-xl font-light text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We don’t just teach — we transport learners into transformation through experiential, systematised delivery.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-16 flex justify-center px-4">
            <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-lg overflow-x-auto max-w-full">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-500 whitespace-nowrap
                                ${isActive 
                                    ? 'bg-brand-navy text-white shadow-md transform scale-105' 
                                    : 'text-slate-400 hover:text-brand-blue hover:bg-slate-50'
                                }`}
                        >
                            <Icon size={16} className={`mr-2 ${isActive ? 'text-brand-lightBlue' : ''}`} />
                            {tab.label}
                        </button>
                    )
                })}
            </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="min-h-[800px] relative">

          {/* 1. NEEDS DISCOVERY SPRINT™ */}
          {activeTab === 'needs-discovery' && (
             <div className="animate-fade-in">
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                        <div className="lg:col-span-7">
                            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[0.9] tracking-tight">
                                Needs <br />
                                <span className="text-brand-blue italic font-light">Discovery Sprint™</span>
                            </h2>
                            <p className="text-2xl text-slate-500 font-light leading-relaxed mb-8 border-l-4 border-brand-blue pl-6">
                                Discover what your team truly needs — not just what they’ve been told they need.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                                Every great training begins with discovery. The Needs Discovery Sprint™ is Eloqaura’s fast, focused diagnostic that uncovers the real communication and performance challenges holding your organisation back — so your training solutions are not just customised, but precisely engineered.
                            </p>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-blue/10 rounded-[3rem] blur-2xl animate-pulse"></div>
                                <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
                                    <p className="text-slate-600 italic text-xl leading-relaxed">
                                        Through data, dialogue, and design thinking, we bridge the gap between perceived needs and real growth levers.
                                    </p>
                                    <div className="mt-8 flex items-center">
                                        <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white mr-4">
                                            <Compass size={20} />
                                        </div>
                                        <span className="font-bold text-brand-navy uppercase tracking-widest text-xs">Strategic Diagnostic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Experience Grid */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                            <h3 className="text-3xl font-serif text-slate-900">What You’ll Experience</h3>
                            <div className="hidden md:flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { 
                                    title: "360° Skill Mapping™", 
                                    desc: "Collect insights from leaders, peers, and teams to identify strengths and blind spots.",
                                    icon: Users,
                                    accent: "text-cyan-500"
                                },
                                { 
                                    title: "Behavioural Interviews", 
                                    desc: "Observe communication in context to surface hidden patterns.",
                                    icon: MessageSquare,
                                    accent: "text-indigo-500"
                                },
                                { 
                                    title: "Impact Gap Analysis™", 
                                    desc: "Compare desired outcomes with current behaviours to find leverage points.",
                                    icon: Activity,
                                    accent: "text-rose-500"
                                },
                                { 
                                    title: "Sprint Debrief Workshop™", 
                                    desc: "Translate findings into a clear action blueprint for your training program.",
                                    icon: FileText,
                                    accent: "text-emerald-500"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 rounded-[2rem] border border-slate-100 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full">
                                    <div className={`mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.accent}`}>
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Before -> After Transformation - Streamlined */}
                    <div className="py-16 bg-slate-900 rounded-[3rem] text-white px-6 md:px-12 mb-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10 border-b border-white/10 pb-6">
                            <div>
                                <p className="text-brand-lightBlue uppercase tracking-widest text-[10px] font-bold mb-2">The Eloqaura Impact</p>
                                <h3 className="text-3xl font-serif">Transformation Architecture</h3>
                            </div>
                            <div className="mt-4 md:mt-0 text-slate-400 text-sm italic">
                                From assumptions to data-driven design.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                            {/* Before */}
                            <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/5">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mr-3">
                                        <XCircle size={16} className="text-red-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-red-400">Before Discovery</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Training designed on assumptions",
                                        "Misalignment between leadership goals and learner reality",
                                        "Low post-training engagement",
                                        "Unclear measurement of success"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-slate-400 text-base border-b border-white/5 pb-3 last:border-0">
                                            <span className="mr-3 text-red-400/50">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* After */}
                            <div className="bg-brand-blue/[0.03] p-8 rounded-2xl border border-brand-blue/20 shadow-xl">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3">
                                        <CheckCircle2 size={16} className="text-brand-lightBlue" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue">After Discovery</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Data-driven clarity on what actually needs to change",
                                        "Leadership and team alignment on goals",
                                        "Training built around lived context and measurable outcomes",
                                        "A roadmap that connects learning to business impact"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-blue-50 text-base border-b border-brand-blue/10 pb-3 last:border-0 font-medium">
                                            <span className="mr-3 text-brand-lightBlue">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Impact Story (Case Vignette) - Creative Popup Style */}
                    <div className="relative mb-32 group/vignette">
                        {/* Abstract Background Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

                        <div className="max-w-5xl mx-auto px-4">
                            <div className="relative bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden group-hover/vignette:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700">
                                {/* Floating Accent */}
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl group-hover/vignette:bg-brand-blue/10 transition-colors"></div>
                                
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                                    {/* Left: Content */}
                                    <div className="lg:col-span-7">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-navy/20">
                                                <Target size={20} />
                                            </div>
                                            <span className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em]">Impact Snapshot</span>
                                        </div>
                                        
                                        <h3 className="text-3xl font-serif text-slate-900 mb-6">Manufacturing Leadership Case</h3>
                                        <p className="text-xl text-slate-500 leading-relaxed font-light italic mb-8">
                                            "The Needs Discovery Sprint™ revealed their true issue was cross-functional miscommunication. By addressing the root cause, productivity improved dramatically within months."
                                        </p>

                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-400 text-xs font-medium">
                                            <Sparkles size={14} className="text-brand-blue" />
                                            Insight turned into design intelligence
                                        </div>
                                    </div>

                                    {/* Right: Stats Popup-style card */}
                                    <div className="lg:col-span-5 relative">
                                        <div className="bg-brand-navy p-10 rounded-[2.5rem] text-white shadow-2xl transform lg:rotate-3 group-hover/vignette:rotate-0 transition-transform duration-700 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16"></div>
                                            
                                            <div className="space-y-8 relative z-10">
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">28%</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Productivity Increase</span>
                                                </div>
                                                <div className="h-px bg-white/10 w-full"></div>
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">2x</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Engagement Doubled</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiential Edge */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif text-slate-900 mb-4">Experiential Edge</h3>
                            <p className="text-slate-500">The Eloqaura methodology refined for discovery.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Empathy Mapping Boards", desc: "Visualise where teams struggle, feel, and succeed." },
                                { title: "Real-World Observation Labs", desc: "Experience behaviour patterns live, not in reports." },
                                { title: "Collaborative Design Jam™", desc: "Co-create training objectives with stakeholders." },
                                { title: "Priority Heatmaps™", desc: "Visual tools highlighting critical skill gaps and ROI zones." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-brand-blue transition-colors group">
                                    <h5 className="font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h5>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA for Tab */}
                    <div className="bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-100">
                        <h3 className="text-3xl font-serif text-slate-900 mb-8">Design Training That Matters</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all flex items-center justify-center">
                                Start Your Discovery Sprint <ArrowRight className="ml-2" size={18} />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-brand-navy rounded-full font-bold uppercase tracking-widest hover:border-brand-navy transition-all flex items-center justify-center">
                                Book a Consultation
                            </Link>
                        </div>
                        <p className="mt-8 text-slate-400 italic">
                             Eloqaura doesn’t just ask what you need — it helps you discover what truly drives transformation.
                        </p>
                    </div>
                </section>
             </div>
          )}

          {/* 2. TAILORED CURRICULUM DESIGN™ */}
          {activeTab === 'tailored-curriculum' && (
             <div className="animate-fade-in">
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                        <div className="lg:col-span-7">
                            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[0.9] tracking-tight">
                                Tailored <br />
                                <span className="text-brand-blue italic font-light">Curriculum Design™</span>
                            </h2>
                            <p className="text-2xl text-slate-500 font-light leading-relaxed mb-8 border-l-4 border-brand-blue pl-6">
                                Because one-size-fits-all never transforms anyone.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                                Once the insights are clear, design becomes the art. The Tailored Curriculum Design™ process transforms your organisational challenges into a structured, experiential learning journey.
                            </p>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-blue/10 rounded-[3rem] blur-2xl animate-pulse"></div>
                                <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
                                    <p className="text-slate-600 italic text-xl leading-relaxed">
                                        Built around your people, your culture, and your outcomes — every activity, story, and simulation is designed to make learning not just relevant, but unforgettable.
                                    </p>
                                    <div className="mt-8 flex items-center">
                                        <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white mr-4">
                                            <PenTool size={20} />
                                        </div>
                                        <span className="font-bold text-brand-navy uppercase tracking-widest text-xs">Architected Learning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Experience Grid */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                            <h3 className="text-3xl font-serif text-slate-900">What You’ll Experience</h3>
                            <div className="hidden md:flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { 
                                    title: "Blueprint Design Labs™", 
                                    desc: "Co-create the learning architecture that aligns to goals and real workplace challenges.",
                                    icon: Layout,
                                    accent: "text-cyan-500"
                                },
                                { 
                                    title: "Content Customisation", 
                                    desc: "Adapt Eloqaura’s proven frameworks, tools, and simulations to your team’s context.",
                                    icon: Edit,
                                    accent: "text-indigo-500"
                                },
                                { 
                                    title: "Scenario Storyboarding™", 
                                    desc: "Build immersive case studies and roleplays based on real communication moments.",
                                    icon: BookOpen,
                                    accent: "text-rose-500"
                                },
                                { 
                                    title: "Learning Flow Mapping™", 
                                    desc: "Sequence modules, pacing, and reflection loops for maximum retention.",
                                    icon: Layers,
                                    accent: "text-emerald-500"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 rounded-[2rem] border border-slate-100 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full">
                                    <div className={`mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.accent}`}>
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Before -> After Transformation - Streamlined */}
                    <div className="py-16 bg-slate-900 rounded-[3rem] text-white px-6 md:px-12 mb-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10 border-b border-white/10 pb-6">
                            <div>
                                <p className="text-brand-lightBlue uppercase tracking-widest text-[10px] font-bold mb-2">The Eloqaura Impact</p>
                                <h3 className="text-3xl font-serif">Transformation Architecture</h3>
                            </div>
                            <div className="mt-4 md:mt-0 text-slate-400 text-sm italic">
                                From generic to contextual.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                            {/* Before */}
                            <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/5">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mr-3">
                                        <XCircle size={16} className="text-red-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-red-400">Generic Training</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Generic modules disconnected from real challenges",
                                        "Content that feels theoretical or irrelevant",
                                        "Participants disengaged or resistant",
                                        "No linkage between learning and performance metrics"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-slate-400 text-base border-b border-white/5 pb-3 last:border-0">
                                            <span className="mr-3 text-red-400/50">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* After */}
                            <div className="bg-brand-blue/[0.03] p-8 rounded-2xl border border-brand-blue/20 shadow-xl">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3">
                                        <CheckCircle2 size={16} className="text-brand-lightBlue" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue">Tailored Design</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Learning designed for your culture and goals",
                                        "Scenarios that reflect real workplace situations",
                                        "Engaged learners who see themselves in the content",
                                        "Clear alignment between learning outcomes and business results"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-blue-50 text-base border-b border-brand-blue/10 pb-3 last:border-0 font-medium">
                                            <span className="mr-3 text-brand-lightBlue">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Impact Story (Case Vignette) - Creative Popup Style */}
                    <div className="relative mb-32 group/vignette">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

                        <div className="max-w-5xl mx-auto px-4">
                            <div className="relative bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden group-hover/vignette:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl group-hover/vignette:bg-brand-blue/10 transition-colors"></div>
                                
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                                    <div className="lg:col-span-7">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-navy/20">
                                                <Layout size={20} />
                                            </div>
                                            <span className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em]">Impact Snapshot</span>
                                        </div>
                                        
                                        <h3 className="text-3xl font-serif text-slate-900 mb-6">Global SaaS Case</h3>
                                        <p className="text-xl text-slate-500 leading-relaxed font-light italic mb-8">
                                            "A global SaaS company requested 'sales communication training.' Through Tailored Curriculum Design™, Eloqaura built a fully contextual simulation around their actual sales cycle."
                                        </p>

                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-400 text-xs font-medium">
                                            <Sparkles size={14} className="text-brand-blue" />
                                            Transformation isn’t accidental — it’s architected
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 relative">
                                        <div className="bg-brand-navy p-10 rounded-[2.5rem] text-white shadow-2xl transform lg:-rotate-3 group-hover/vignette:rotate-0 transition-transform duration-700 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16"></div>
                                            
                                            <div className="space-y-8 relative z-10">
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">35%</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conversion Increase</span>
                                                </div>
                                                <div className="h-px bg-white/10 w-full"></div>
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">Quarterly</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Learning Ritual Adopted</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiential Edge */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif text-slate-900 mb-4">Experiential Edge</h3>
                            <p className="text-slate-500">The Eloqaura methodology refined for design.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Co-Design Studios", desc: "Partner with facilitators to create context-specific learning paths." },
                                { title: "Visual Storyboards", desc: "Sketch learning flow as an experience map." },
                                { title: "Language Localisation Pods", desc: "Adapt tone and phrasing for cultural resonance." },
                                { title: "Prototype & Pilot Sessions", desc: "Test-run design before full rollout." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-brand-blue transition-colors group">
                                    <h5 className="font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h5>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA for Tab */}
                    <div className="bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-100">
                        <h3 className="text-3xl font-serif text-slate-900 mb-8">Design Learning That Fits</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all flex items-center justify-center">
                                Start Your Curriculum Build <ArrowRight className="ml-2" size={18} />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-brand-navy rounded-full font-bold uppercase tracking-widest hover:border-brand-navy transition-all flex items-center justify-center">
                                Book a Co-Design Session
                            </Link>
                        </div>
                        <p className="mt-8 text-slate-400 italic">
                            This stage proves that transformation isn’t accidental — it’s architected.
                        </p>
                    </div>
                </section>
             </div>
          )}

          {/* 3. IMMERSIVE DELIVERY MODELS™ */}
          {activeTab === 'immersive-delivery' && (
            <div className="animate-fade-in">
                {/* Hero Section for Tab */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                        <div className="lg:col-span-7">
                            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[0.9] tracking-tight">
                                Immersive <br />
                                <span className="text-brand-blue italic font-light">Delivery Models™</span>
                            </h2>
                            <p className="text-2xl text-slate-500 font-light leading-relaxed mb-8 border-l-4 border-brand-blue pl-6">
                                Because learning sticks when it’s experienced, not explained.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                                Real transformation doesn’t happen in slides — it happens in experiences. The Immersive Delivery Models™ approach turns Eloqaura’s training programs into fully engaging, multi-sensory experiences that participants remember, apply, and repeat.
                            </p>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-blue/10 rounded-[3rem] blur-2xl animate-pulse"></div>
                                <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
                                    <p className="text-slate-600 italic text-xl leading-relaxed">
                                        Each model blends psychology, technology, and facilitation design to ensure that learning translates directly into workplace performance.
                                    </p>
                                    <div className="mt-8 flex items-center">
                                        <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white mr-4">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="font-bold text-brand-navy uppercase tracking-widest text-xs">The Experiential Edge</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Experience Grid */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                            <h3 className="text-3xl font-serif text-slate-900">What You’ll Experience</h3>
                            <div className="hidden md:flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { 
                                    title: "Workshop Immersion Model™", 
                                    desc: "Facilitator-led sessions merging storytelling and simulations.",
                                    icon: MessageSquare,
                                    accent: "text-cyan-500"
                                },
                                { 
                                    title: "Hybrid Learning Tracks™", 
                                    desc: "Live sessions blended with digital practice modules.",
                                    icon: Layers,
                                    accent: "text-indigo-500"
                                },
                                { 
                                    title: "Scenario Simulation Engine™", 
                                    desc: "Adaptive, outcome-driven roleplay for real challenges.",
                                    icon: Target,
                                    accent: "text-rose-500"
                                },
                                { 
                                    title: "Digital Reflection Pods™", 
                                    desc: "Post-session feedback hubs for continuous growth.",
                                    icon: Repeat,
                                    accent: "text-emerald-500"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 rounded-[2rem] border border-slate-100 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full">
                                    <div className={`mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.accent}`}>
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Before -> After Transformation - Streamlined */}
                    <div className="py-16 bg-slate-900 rounded-[3rem] text-white px-6 md:px-12 mb-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10 border-b border-white/10 pb-6">
                            <div>
                                <p className="text-brand-lightBlue uppercase tracking-widest text-[10px] font-bold mb-2">The Eloqaura Impact</p>
                                <h3 className="text-3xl font-serif">Transformation Architecture</h3>
                            </div>
                            <div className="mt-4 md:mt-0 text-slate-400 text-sm italic">
                                Moving from static events to dynamic ecosystems.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                            {/* Before */}
                            <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/5">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mr-3">
                                        <XCircle size={16} className="text-red-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-red-400">Traditional Training</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Passive participants who forget after training",
                                        "One-time engagement with minimal change",
                                        "No system to reinforce or measure application",
                                        "Disconnected digital and live experiences"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-slate-400 text-base border-b border-white/5 pb-3 last:border-0">
                                            <span className="mr-3 text-red-400/50">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* After */}
                            <div className="bg-brand-blue/[0.03] p-8 rounded-2xl border border-brand-blue/20 shadow-xl">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3">
                                        <CheckCircle2 size={16} className="text-brand-lightBlue" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue">Immersive Ecosystem</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Active learners who practise, not just listen",
                                        "Retention through immersive repetition",
                                        "Built-in reinforcement through hybrid tools",
                                        "Seamless blend of human & digital journeys"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-blue-50 text-base border-b border-brand-blue/10 pb-3 last:border-0 font-medium">
                                            <span className="mr-3 text-brand-lightBlue">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Impact Story (Case Vignette) - Creative Popup Style */}
                    <div className="relative mb-32 group/vignette">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

                        <div className="max-w-5xl mx-auto px-4">
                            <div className="relative bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden group-hover/vignette:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl group-hover/vignette:bg-brand-blue/10 transition-colors"></div>
                                
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                                    <div className="lg:col-span-7">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-navy/20">
                                                <MessageSquare size={20} />
                                            </div>
                                            <span className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em]">Impact Snapshot</span>
                                        </div>
                                        
                                        <h3 className="text-3xl font-serif text-slate-900 mb-6">Insurance Leadership Case</h3>
                                        <p className="text-xl text-slate-500 leading-relaxed font-light italic mb-8">
                                            "A leading insurance firm’s leadership cohort treated workshops as ‘events.’ With Immersive Delivery Models™, learning turned into a 6-week blended experience — combining simulations, reflection pods, and coaching."
                                        </p>

                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-400 text-xs font-medium">
                                            <Sparkles size={14} className="text-brand-blue" />
                                            When learning becomes lived, it never leaves
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 relative">
                                        <div className="bg-brand-navy p-10 rounded-[2.5rem] text-white shadow-2xl transform lg:rotate-2 group-hover/vignette:rotate-0 transition-transform duration-700 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16"></div>
                                            
                                            <div className="space-y-8 relative z-10">
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">2x</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Application Rate</span>
                                                </div>
                                                <div className="h-px bg-white/10 w-full"></div>
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">Record</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leadership Satisfaction</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiential Edge */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif text-slate-900 mb-4">Experiential Edge</h3>
                            <p className="text-slate-500">The Eloqaura methodology refined for delivery.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Immersion Framework Canvas™", desc: "Map experience flow across cognitive, emotional, and behavioural layers." },
                                { title: "Experience Loops™", desc: "Reinforce learning through spaced reflection and real-world feedback." },
                                { title: "Gamified Retention Tools", desc: "Measure micro-engagement and motivation post-training." },
                                { title: "Facilitator Flowcards™", desc: "Keep delivery sharp, adaptive, and participant-centred." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-brand-blue transition-colors group">
                                    <h5 className="font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h5>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA for Tab */}
                    <div className="bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-100">
                        <h3 className="text-3xl font-serif text-slate-900 mb-8">Ready to Transfrom Training into Experience?</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all flex items-center justify-center">
                                Choose Your Delivery Model <ArrowRight className="ml-2" size={18} />
                            </Link>
                            <Link to="/discovery" className="px-8 py-4 bg-white border border-slate-200 text-brand-navy rounded-full font-bold uppercase tracking-widest hover:border-brand-navy transition-all flex items-center justify-center">
                                Book a Consultation
                            </Link>
                        </div>
                        <p className="mt-8 text-slate-400 italic">
                            Eloqaura isn’t just delivering sessions; it’s engineering learning ecosystems that learn back.
                        </p>
                    </div>
                </section>
            </div>
          )}

          {/* 4. IMPACT MAPPING™ */}
          {activeTab === 'impact-mapping' && (
             <div className="animate-fade-in">
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                        <div className="lg:col-span-7">
                            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[0.9] tracking-tight">
                                Impact <br />
                                <span className="text-brand-blue italic font-light">Mapping™</span>
                            </h2>
                            <p className="text-2xl text-slate-500 font-light leading-relaxed mb-8 border-l-4 border-brand-blue pl-6">
                                From learning moments to measurable outcomes.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                                Training without impact is activity. Impact Mapping™ ensures every Eloqaura program is directly tied to behavioural change, business priorities, and measurable outcomes. We don’t just ask “Did people like the training?” We ask “What changed because of it?”
                            </p>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-blue/10 rounded-[3rem] blur-2xl animate-pulse"></div>
                                <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
                                    <p className="text-slate-600 italic text-xl leading-relaxed">
                                        It is cause → behaviour → outcome clarity.
                                    </p>
                                    <div className="mt-8 flex items-center">
                                        <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white mr-4">
                                            <TrendingUp size={20} />
                                        </div>
                                        <span className="font-bold text-brand-navy uppercase tracking-widest text-xs">Measurable ROI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Experience Grid */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
                            <h3 className="text-3xl font-serif text-slate-900">What You’ll Experience</h3>
                            <div className="hidden md:flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { 
                                    title: "Outcome Definition", 
                                    desc: "Identify behavioural shifts and translate leadership intent into observable actions.",
                                    icon: Target,
                                    accent: "text-cyan-500"
                                },
                                { 
                                    title: "Business Mapping", 
                                    desc: "Link communication behaviours to real outcomes like decisions and performance.",
                                    icon: Briefcase,
                                    accent: "text-indigo-500"
                                },
                                { 
                                    title: "Impact Indicators™", 
                                    desc: "Define qualitative and quantitative signals to track progress effectively.",
                                    icon: PieChart,
                                    accent: "text-rose-500"
                                },
                                { 
                                    title: "Post-Program Review", 
                                    desc: "Compare original map with lived results and feed insights into future cycles.",
                                    icon: ClipboardList,
                                    accent: "text-emerald-500"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 rounded-[2rem] border border-slate-100 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full">
                                    <div className={`mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.accent}`}>
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Before -> After Transformation - Streamlined */}
                    <div className="py-16 bg-slate-900 rounded-[3rem] text-white px-6 md:px-12 mb-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10 border-b border-white/10 pb-6">
                            <div>
                                <p className="text-brand-lightBlue uppercase tracking-widest text-[10px] font-bold mb-2">The Eloqaura Impact</p>
                                <h3 className="text-3xl font-serif">Transformation Architecture</h3>
                            </div>
                            <div className="mt-4 md:mt-0 text-slate-400 text-sm italic">
                                From disconnected to evidence-backed.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                            {/* Before */}
                            <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/5">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mr-3">
                                        <XCircle size={16} className="text-red-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-red-400">Before Mapping</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Training feels disconnected from outcomes",
                                        "Success measured by attendance or feedback",
                                        "Leaders unsure if behaviour really changed",
                                        "No clear ROI narrative"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-slate-400 text-base border-b border-white/5 pb-3 last:border-0">
                                            <span className="mr-3 text-red-400/50">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* After */}
                            <div className="bg-brand-blue/[0.03] p-8 rounded-2xl border border-brand-blue/20 shadow-xl">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3">
                                        <CheckCircle2 size={16} className="text-brand-lightBlue" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue">After Mapping</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Clear line from learning → behaviour → results",
                                        "Shared language around impact",
                                        "Leadership confidence in training investments",
                                        "Evidence-backed transformation stories"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-blue-50 text-base border-b border-brand-blue/10 pb-3 last:border-0 font-medium">
                                            <span className="mr-3 text-brand-lightBlue">•</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Impact Story (Case Vignette) - Creative Popup Style */}
                    <div className="relative mb-32 group/vignette">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

                        <div className="max-w-5xl mx-auto px-4">
                            <div className="relative bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden group-hover/vignette:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl group-hover/vignette:bg-brand-blue/10 transition-colors"></div>
                                
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                                    <div className="lg:col-span-7">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-navy/20">
                                                <BarChart3 size={20} />
                                            </div>
                                            <span className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em]">Impact Snapshot</span>
                                        </div>
                                        
                                        <h3 className="text-3xl font-serif text-slate-900 mb-6">Executive Leadership Case</h3>
                                        <p className="text-xl text-slate-500 leading-relaxed font-light italic mb-8">
                                            "A leadership team struggled to justify training ROI. Using Impact Mapping™, they redefined success around decision quality and cross-team clarity. The shift was immediate and measurable."
                                        </p>

                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-400 text-xs font-medium">
                                            <Sparkles size={14} className="text-brand-blue" />
                                            No vanity metrics. Only meaningful signals.
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 relative">
                                        <div className="bg-brand-navy p-10 rounded-[2.5rem] text-white shadow-2xl transform lg:-rotate-2 group-hover/vignette:rotate-0 transition-transform duration-700 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16"></div>
                                            
                                            <div className="space-y-8 relative z-10">
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">31%</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Escalation Drop</span>
                                                </div>
                                                <div className="h-px bg-white/10 w-full"></div>
                                                <div>
                                                    <span className="block text-4xl md:text-5xl font-serif text-brand-lightBlue mb-1 tracking-tighter">8 Weeks</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time to Measured Results</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiential Edge */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif text-slate-900 mb-4">The Eloqaura Edge</h3>
                            <p className="text-slate-500">How this is different.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Behaviour-first", desc: "We focus on observable actions, not just theory." },
                                { title: "Designed Before", desc: "Impact is architected before training begins, not measured as an afterthought." },
                                { title: "Human Signals", desc: "Combining qualitative human signals with business outcomes." },
                                { title: "Integrated Delivery", desc: "Baked into every step of the curriculum design and delivery." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-brand-blue transition-colors group">
                                    <h5 className="font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h5>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA for Tab */}
                    <div className="bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-100">
                        <h3 className="text-3xl font-serif text-slate-900 mb-8">Map the Impact Before You Train</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all flex items-center justify-center">
                                Start Impact Mapping <ArrowRight className="ml-2" size={18} />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-brand-navy rounded-full font-bold uppercase tracking-widest hover:border-brand-navy transition-all flex items-center justify-center">
                                Book a Consultation
                            </Link>
                        </div>
                        <p className="mt-8 text-slate-400 italic">
                            No vanity metrics. Only meaningful signals.
                        </p>
                    </div>
                </section>
             </div>
          )}

      </div>
    </div>
  );
};

export default CustomisedTrainingPage;