import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Sparkles, 
  Activity, 
  GraduationCap, 
  Building2, 
  HeartHandshake,
  Layers,
  Target,
  Shield,
  Zap,
  Anchor,
  Compass,
  BookOpen,
  MessageSquare,
  Search,
  Settings
} from 'lucide-react';

const ImpactPage = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [activeRipple, setActiveRipple] = useState('community');
  const [activeSuiteModule, setActiveSuiteModule] = useState(1);
  const [activeOrgSuiteModule, setActiveOrgSuiteModule] = useState(1);

  const tabs = [
    { id: 'individual', label: 'Individual Transformation', icon: User },
    { id: 'organisational', label: 'Organisational Growth', icon: Users },
    { id: 'societal', label: 'Societal Impact', icon: Globe },
  ];

  const orgSuiteModules = [
    {
      id: 1,
      title: "The Listening Lab™",
      layer: "Foundation Layer",
      icon: Users,
      fix: "People talking past each other",
      outcome: "Shared attention & reduced friction"
    },
    {
      id: 2,
      title: "Conflict to Collaboration™",
      layer: "Stability Layer",
      icon: Shield,
      fix: "Avoided or explosive conflict",
      outcome: "Productive disagreement & trust"
    },
    {
      id: 3,
      title: "Decision-Making Dialogues™",
      layer: "Velocity Layer",
      icon: Zap,
      fix: "Revisited decisions & ambiguity",
      outcome: "Faster execution & clear logic"
    },
    {
      id: 4,
      title: "Signals & Stories™",
      layer: "Meaning Layer",
      icon: Anchor,
      fix: "Cultural drift & misinterpretation",
      outcome: "Teams aligned around shared meaning"
    },
    {
      id: 5,
      title: "The Clarity Sprint™",
      layer: "Integration Layer",
      icon: Compass,
      fix: "Insight without application",
      outcome: "Rapid convergence & follow-through"
    }
  ];

  const societalPrograms = [
    {
      id: 1,
      title: "Narrative Literacy™",
      tag: "Foundation Program",
      icon: BookOpen,
      purpose: "To equip leaders, educators, and institutions with the ability to decode and critically evaluate public narratives.",
      who: ["Universities", "Educators", "Policy institutes", "Media organisations", "Youth leadership programs"],
      addresses: ["Manipulative narratives", "Oversimplified discourse", "Emotional reactivity", "Narrative weaponisation"],
      how: ["Deconstructing real-world cases", "Narrative mapping exercises", "Bias identification labs", "Trigger awareness"],
      outcomes: ["Identify narrative structure", "Distinguish story from manipulation", "Reduce polarisation susceptibility"],
      format: "1–2 day institutional workshop / University lecture series"
    },
    {
      id: 2,
      title: "Dialogue Across Difference™",
      tag: "Bridging Program",
      icon: MessageSquare,
      purpose: "To restore the capacity for civil discourse across ideological and identity divides.",
      who: ["Policy forums", "Interfaith groups", "Community organisations", "Academic institutions"],
      addresses: ["Polarisation", "Ideological rigidity", "Breakdown of dialogue", "Escalating hostility"],
      how: ["Structured dialogue frameworks", "Listening discipline training", "Conflict mapping", "High-stakes simulations"],
      outcomes: ["Hold disagreement without collapse", "Emotional regulation during opposition", "Constructive engagement protocols"],
      format: "Facilitated dialogue circles / Multi-session cohort programme"
    },
    {
      id: 3,
      title: "Language & Power™",
      tag: "Awareness Program",
      icon: Activity,
      purpose: "To examine how language constructs hierarchy, access, authority, and exclusion.",
      who: ["Institutional leaders", "DEI practitioners", "Policy makers", "Cultural organisations"],
      addresses: ["Unexamined authority", "Marginalised voices", "Performative inclusion", "Power imbalance"],
      how: ["Discourse analysis power-mapping", "Influence pattern diagnostics", "Language audit frameworks", "Ethical influence labs"],
      outcomes: ["Linguistic authority awareness", "Ethical influence competence", "Balanced communication mapping"],
      format: "Executive roundtables / Policy think tank sessions"
    },
    {
      id: 4,
      title: "Public Sensemaking Labs™",
      tag: "Collective Cognition Program",
      icon: Search,
      purpose: "To strengthen the capacity of groups to think clearly under information overload and uncertainty.",
      who: ["Public institutions", "NGOs", "Research bodies", "Civic platforms", "Media networks"],
      addresses: ["Misinformation", "Complexity paralysis", "Fragmented understanding", "Reactive discourse"],
      how: ["Structured sensemaking models", "Systems thinking workshops", "Scenario simulation labs", "Perspective integration"],
      outcomes: ["Organise complex information", "Separate signal from noise", "Facilitate public reasoning"],
      format: "Multi-session labs / Institutional advisory programmes"
    },
    {
      id: 5,
      title: "Cultural Clarity Projects™",
      tag: "Integration Program",
      icon: Settings,
      purpose: "To realign institutions or communities around explicit values and coherent language.",
      who: ["Universities", "Foundations", "Cultural institutions", "Organisations in transition"],
      addresses: ["Values drift", "Cultural incoherence", "Narrative stagnation", "Identity ambiguity"],
      how: ["Organisational language audit", "Values clarification workshops", "Cultural narrative reconstruction", "Identity articulation"],
      outcomes: ["Explicit value alignment", "Shared narrative clarity", "Sustainable identity articulation"],
      format: "3–6 month structured engagement / Institutional culture redesign"
    }
  ];

  const societalStories = [
    {
      id: 1,
      category: 'community',
      title: 'University Partnership',
      desc: 'Students once struggling with confidence now winning national debate recognition.',
      icon: GraduationCap,
      brandColor: 'bg-indigo-600',
      tag: 'Education'
    },
    {
      id: 2,
      category: 'society',
      title: 'Civic Programme',
      desc: 'Higher participation in local governance through training in clear dialogue.',
      icon: Building2,
      brandColor: 'bg-emerald-600',
      tag: 'Governance'
    },
    {
      id: 3,
      category: 'society',
      title: 'Non-Profit Impact',
      desc: 'Leaders influenced policy conversations and attracted new streams of funding.',
      icon: HeartHandshake,
      brandColor: 'bg-rose-600',
      tag: 'Philanthropy'
    }
  ];

  const rippleLevels = [
    { id: 'individual', title: 'Individual', desc: 'Change begins with one voice finding clarity.', icon: User },
    { id: 'community', title: 'Community', desc: 'Shared narratives create strengthened bonds.', icon: Users },
    { id: 'society', title: 'Society', desc: 'Collective action drives lasting progress.', icon: Globe },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-600">
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            Our Impact
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
            Real Change. <br />
            <span className="italic text-slate-400">Measurable Results.</span>
          </h1>
          <p className="text-xl font-light text-slate-500 max-w-2xl mx-auto">
            We don't just teach communication; we transform how individuals lead, teams collaborate, and societies connect.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-16 flex justify-center px-4">
            <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-sm overflow-x-auto max-w-full">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 whitespace-nowrap
                                ${isActive 
                                    ? 'bg-brand-navy text-white shadow-md transform scale-105' 
                                    : 'text-slate-500 hover:text-brand-blue hover:bg-slate-50'
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
      <div className="min-h-[800px]">
          {/* 1. INDIVIDUAL TRANSFORMATION */}
          {activeTab === 'individual' && (
            <div className="animate-fade-in">
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight">
                            From Finding a Voice to <br />
                            <span className="text-brand-blue italic">Making It Heard</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">
                            Because when one person transforms, everything around them changes.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div className="space-y-8">
                            <p className="text-2xl font-serif text-slate-900 leading-relaxed font-light">
                                Every individual carries a story, a message, a spark — yet too often it remains unheard. At Eloqaura, we help people move from hesitation to influence, from self-doubt to clarity, and from silence to impact.
                            </p>
                            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">What Transformation Looks Like</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-400 mr-6 flex-shrink-0">
                                            <XCircle size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Before</p>
                                            <p className="text-slate-500">Struggling to express ideas, overlooked in meetings, lacking confidence in high-pressure situations.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mr-6 flex-shrink-0">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">After</p>
                                            <p className="text-slate-600">Speaking with conviction, influencing decisions, and being recognised as a trusted voice of clarity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-brand-blue/10 via-brand-blue to-brand-blue/10 hidden md:block"></div>
                            <div className="space-y-12">
                                {[
                                    { step: "01", title: "Voice Found", desc: "Uncovering the authentic core beneath the hesitation." },
                                    { step: "02", title: "Confidence Built", desc: "Replacing 'fake it till you make it' with grounded certainty." },
                                    { step: "03", title: "Influence Gained", desc: "Learning the mechanics of persuasion and connection." },
                                    { step: "04", title: "Impact Achieved", desc: "Driving outcomes and inspiring others to act." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative pl-0 md:pl-24 group">
                                        <div className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-brand-blue rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>
                                        <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                                            <h4 className="text-xl font-serif text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-32">
                        <h3 className="text-center font-serif text-3xl mb-16">Real Stories of Transformation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                             {[
                                { title: "Frontline Employee", desc: "Once feared presentations, now confidently drives daily huddles, inspiring their team." },
                                { title: "Young Professional", desc: "Felt invisible in client discussions; now leads pitches with clarity and wins trust." },
                                { title: "Executive Leader", desc: "Shifted from defensive reactions to empathetic, outcome-driven dialogue — changing the deal's trajectory." }
                             ].map((story, i) => (
                                 <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100%] -mr-10 -mt-10 group-hover:bg-brand-blue/10 transition-colors duration-500"></div>
                                    <Sparkles size={32} className="text-slate-300 group-hover:text-brand-blue mb-6 transition-colors" />
                                    <h4 className="font-serif text-xl text-slate-900 mb-4 group-hover:text-brand-navy transition-colors">{story.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-light">{story.desc}</p>
                                 </div>
                             ))}
                        </div>
                    </div>
                    <div className="mt-24 text-center">
                         <Link to="/individual-transformation/find-your-voice" className="group relative inline-flex items-center justify-center px-12 py-5 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                            <span className="relative z-10 flex items-center">
                                Find Your Voice — Begin Your Transformation
                                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
                            </span>
                            <div className="absolute inset-0 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                         </Link>
                    </div>
                </section>
            </div>
          )}

          {/* 2. ORGANISATIONAL GROWTH */}
          {activeTab === 'organisational' && (
            <div className="animate-fade-in">
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight">
                            From Groups of People to <br />
                            <span className="text-brand-blue italic">Teams with Purpose</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">
                            Because growth isn’t just strategy — it’s how your people talk, connect, and act together.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div className="space-y-8">
                            <p className="text-3xl font-serif text-slate-900 leading-tight">
                                Organisations rarely struggle because people lack skill. <br />
                                <span className="text-brand-navy font-semibold italic">They struggle because conversations break down.</span>
                            </p>
                            <div className="space-y-4 border-l-2 border-slate-100 pl-8">
                                <p className="text-lg text-slate-400">Misalignment creeps in.</p>
                                <p className="text-lg text-slate-400">Trust erodes quietly.</p>
                                <p className="text-lg text-slate-400">Decisions slow.</p>
                                <p className="text-lg text-slate-400">Execution fragments.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                            <p className="text-xl leading-relaxed text-slate-600 font-light">
                                At Eloqaura, we work at the conversational layer where culture is actually formed. We help organisations turn communication into a shared operating system — one that connects strategy with day-to-day behaviour, and intent with action.
                            </p>
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <p className="text-xl font-serif text-slate-900 italic">
                                    "Teams move from working alongside each other to thinking with each other."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-32">
                        <h3 className="text-3xl font-serif text-center mb-16">What Transformation Looks Like</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl border border-white">
                            <div className="bg-slate-100 p-16">
                                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">The Friction</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Conversations happening in silos",
                                        "Conflict avoided or mishandled",
                                        "Decisions revisited repeatedly",
                                        "Energy spent managing misunderstanding"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-slate-500 italic">
                                            <span className="mr-4 opacity-50">—</span> {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-brand-navy p-16 text-white">
                                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-lightBlue mb-8">The Flow</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Shared language and clear intent",
                                        "Healthy disagreement without erosion of trust",
                                        "Faster, cleaner decision-making",
                                        "Conversations that move work forward"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle2 size={20} className="mr-4 text-brand-lightBlue flex-shrink-0" /> {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mb-32">
                        <h3 className="text-3xl font-serif text-center mb-16">Impact Stories & Observable Outcomes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Layers,
                                    title: "SaaS Alignment",
                                    desc: "A cross-functional team, once paralysed by internal conflict, now delivers consistently through clear communication norms."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Retention & Growth",
                                    desc: "Employee turnover reduced after leaders embedded clarity and empathy into everyday conversations during rapid scaling."
                                },
                                {
                                    icon: Target,
                                    title: "Sales Performance",
                                    desc: "A global sales team improved close rates by aligning on collaborative storytelling across diverse markets."
                                }
                            ].map((story, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-navy mb-6">
                                        <story.icon size={28} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-4">{story.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">{story.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-[4rem] p-16 text-slate-900 relative overflow-hidden mb-32 border border-slate-100">
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.3]"></div>
                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h3 className="text-4xl font-serif mb-6">The Organisational Growth Suite™</h3>
                                <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">To move organisations from fragmented conversations into aligned, decisive systems.</p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                                {orgSuiteModules.map((module) => (
                                    <div 
                                        key={module.id} 
                                        className={`p-8 rounded-3xl border transition-all duration-500 ${activeOrgSuiteModule === module.id ? 'bg-white border-brand-blue/20 shadow-xl scale-105 z-10' : 'bg-transparent border-transparent opacity-60 hover:opacity-100 cursor-pointer'}`}
                                        onMouseEnter={() => setActiveOrgSuiteModule(module.id)}
                                    >
                                        <div className="flex flex-col h-full">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${activeOrgSuiteModule === module.id ? 'bg-brand-navy text-white' : 'bg-slate-200/50 text-slate-400'}`}>
                                                {React.createElement(module.icon, { size: 24 })}
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2">{module.layer}</span>
                                            <h4 className="text-lg font-serif mb-4 text-slate-900">{module.title}</h4>
                                            {activeOrgSuiteModule === module.id && (
                                                <div className="mt-auto animate-fade-in pt-4 border-t border-slate-100">
                                                    <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-bold">Outcome</p>
                                                    <p className="text-sm font-medium text-slate-700">{module.outcome}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                         <Link to="/contact" className="inline-flex items-center bg-brand-navy text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-2xl hover:-translate-y-1 group">
                            Strengthen Your Teams — Begin Growth
                            <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={20} />
                         </Link>
                         <p className="mt-8 text-slate-400 font-serif italic text-lg">
                            "When teams think clearly together, performance becomes a natural outcome."
                         </p>
                    </div>
                </section>
            </div>
          )}

          {/* 3. SOCIETAL IMPACT */}
          {activeTab === 'societal' && (
             <div className="animate-fade-in">
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">From Voices in Isolation to <br /><span className="text-brand-blue italic">Movements That Matter</span></h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">
                            Because growth isn’t just strategy — it’s how your people talk, connect, and act together.
                        </p>
                    </div>

                    {/* Societal Narrative */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div className="space-y-8">
                            <p className="text-3xl font-serif text-slate-900 leading-tight">
                                Organisations rarely struggle because people lack skill. <br />
                                <span className="text-brand-navy font-semibold italic">They struggle because conversations break down.</span>
                            </p>
                            <div className="space-y-4 border-l-2 border-slate-100 pl-8">
                                <p className="text-lg text-slate-400">Misalignment creeps in.</p>
                                <p className="text-lg text-slate-400">Trust erodes quietly.</p>
                                <p className="text-lg text-slate-400">Decisions slow.</p>
                                <p className="text-lg text-slate-400">Execution fragments.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                            <p className="text-xl leading-relaxed text-slate-600 font-light">
                                At Eloqaura, we work at the conversational layer where culture is actually formed. We help organisations turn communication into a shared operating system — one that connects strategy with day-to-day behaviour, and intent with action.
                            </p>
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <p className="text-xl font-serif text-slate-900 italic">
                                    "Teams move from working alongside each other to thinking with each other."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Transformation Visual */}
                    <div className="mb-32">
                        <h3 className="text-3xl font-serif text-center mb-16">What Transformation Looks Like</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl border border-white">
                            <div className="bg-slate-100 p-16">
                                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Before</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Conversations happening in silos",
                                        "Conflict avoided or mishandled",
                                        "Decisions revisited repeatedly",
                                        "Energy spent managing misunderstanding"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start text-slate-500 italic">
                                            <span className="mr-4 opacity-50">—</span> {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-brand-navy p-16 text-white">
                                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-lightBlue mb-8">After</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Shared language and clear intent",
                                        "Healthy disagreement without erosion of trust",
                                        "Faster, cleaner decision-making",
                                        "Conversations that move work forward"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle2 size={20} className="mr-4 text-brand-lightBlue flex-shrink-0" /> {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Ripple Levels */}
                    <div className="relative py-16 mb-32">
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                            <div className={`transition-all duration-1000 ease-out border border-brand-blue/20 rounded-full ${activeRipple === 'individual' ? 'w-[200px] h-[200px]' : activeRipple === 'community' ? 'w-[400px] h-[400px]' : 'w-[800px] h-[800px]'}`}></div>
                            <div className="absolute w-[500px] h-[500px] border border-brand-blue/10 rounded-full animate-ping [animation-duration:3s] [animation-delay:0.5s]"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {rippleLevels.map((level) => {
                                const isActive = activeRipple === level.id;
                                const LevelIcon = level.icon;
                                return (
                                    <button
                                        key={level.id}
                                        onClick={() => setActiveRipple(level.id)}
                                        className={`text-center p-8 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden group
                                            ${isActive 
                                                ? 'bg-white shadow-xl scale-110 border-t-4 border-brand-blue z-20' 
                                                : 'bg-white/60 hover:bg-white hover:shadow-md border border-slate-100 scale-100'
                                            }`}
                                    >
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300
                                            ${isActive ? 'bg-brand-blue/10 text-brand-blue' : 'bg-slate-50 text-slate-400 group-hover:text-brand-blue'}`}>
                                            <LevelIcon size={32} />
                                        </div>
                                        <h3 className={`font-serif text-xl mb-3 ${isActive ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>{level.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{level.desc}</p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Program Structures - NEW TABLE DESIGN */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif text-slate-900 mb-4">Program Structures</h3>
                            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                        </div>

                        <div className="overflow-x-auto pb-8">
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="py-6 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 w-[20%]">Program</th>
                                        <th className="py-6 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 w-[25%]">Purpose & For Whom</th>
                                        <th className="py-6 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 w-[20%]">Focus Areas</th>
                                        <th className="py-6 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 w-[20%]">Methodology</th>
                                        <th className="py-6 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 w-[15%]">Ideal Format</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {societalPrograms.map((program) => (
                                        <tr key={program.id} className="group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                                            <td className="py-8 px-4 align-top">
                                                <div className="flex items-center space-x-4 mb-3">
                                                    <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                                        <program.icon size={18} />
                                                    </div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">{program.tag}</span>
                                                </div>
                                                <h4 className="text-xl font-serif font-bold text-slate-900 leading-tight">{program.title}</h4>
                                            </td>
                                            <td className="py-8 px-4 align-top">
                                                <p className="text-sm text-slate-700 font-medium mb-4 leading-relaxed">{program.purpose}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {program.who.map((item, i) => (
                                                        <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-md">{item}</span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="py-8 px-4 align-top">
                                                <ul className="space-y-2">
                                                    {program.addresses.map((item, i) => (
                                                        <li key={i} className="flex items-center text-xs text-slate-500">
                                                            <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="py-8 px-4 align-top">
                                                <ul className="space-y-2">
                                                    {program.how.map((item, i) => (
                                                        <li key={i} className="flex items-center text-xs text-slate-600 font-medium">
                                                            <CheckCircle2 size={12} className="text-brand-blue mr-2" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="py-8 px-4 align-top">
                                                <p className="text-xs text-slate-500 leading-relaxed italic">{program.format}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Case Stories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto min-h-[400px]">
                        {societalStories.map((story) => (
                            <div key={story.id} className={`animate-fade-up bg-white p-10 rounded-[2.5rem] border shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-700 group relative flex flex-col ${activeRipple === story.category ? 'border-brand-blue/30 ring-4 ring-brand-blue/5' : 'border-slate-100 opacity-80 hover:opacity-100'}`}>
                                <div className="flex items-center mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${story.brandColor} transform group-hover:rotate-6 transition-transform duration-500`}>
                                        <story.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="ml-4">
                                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{story.tag}</span>
                                        <div className="h-1 w-6 bg-slate-100 mt-1"></div>
                                    </div>
                                </div>
                                <h4 className="font-serif text-2xl text-slate-900 mb-4 leading-tight group-hover:text-brand-blue transition-colors">{story.title}</h4>
                                <p className="text-slate-500 leading-relaxed font-light text-lg">{story.desc}</p>
                                <div className="mt-auto pt-8">
                                    <div className="w-full h-px bg-slate-50 mb-6"></div>
                                    <Link 
                                        to={`/impact/case-study/${story.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-xs font-bold uppercase tracking-widest text-brand-navy flex items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:text-brand-blue"
                                    >
                                        Read Case Study <ArrowRight size={14} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                         <Link to="/contact" className="inline-flex items-center bg-white border border-slate-200 text-slate-600 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:border-brand-navy hover:text-brand-navy transition-all group">
                            Shape Society — Be the Voice of Change
                            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
                         </Link>
                    </div>
                </section>
             </div>
          )}
      </div>
    </div>
  );
};

export default ImpactPage;