import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Zap, 
  Shield, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Activity,
  Mic,
  Focus,
  Flame,
  Search,
  RefreshCw,
  TrendingUp,
  Brain
} from 'lucide-react';

const ExecutiveCoachingPage = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      id: 0,
      title: "Clarity in Action™",
      headline: "Simplify complexity. Sharpen your message. Drive decisions.",
      icon: Focus,
      color: "text-blue-500",
      bg: "bg-blue-50",
      accent: "border-blue-500",
      experience: [
        { title: "Message Distillation™", description: "Learn to strip away jargon and reduce complex ideas to their essence." },
        { title: "Decision Clarity Framework™", description: "Techniques to communicate options, risks, and outcomes with precision." },
        { title: "The 90-Second Pitch Drill™", description: "Practise delivering compelling clarity in time-pressured settings." },
        { title: "Clarity Feedback Loops", description: "Peer and coach reflections on whether your message truly lands." }
      ],
      before: [
        "Long-winded explanations that confuse audiences",
        "Critical points buried in details",
        "Decisions delayed by lack of clarity",
        "Audiences disengaged or lost"
      ],
      after: [
        "Concise, focused communication that cuts through noise",
        "Messages that highlight the \"so what\" immediately",
        "Faster decision-making from aligned understanding",
        "Audiences engaged, confident, and mobilised"
      ],
      story: "A leader once known for overloading presentations with detail mastered Clarity in Action™. Today, their concise, story-driven updates help senior stakeholders make swift, confident decisions.",
      cta: "Put Clarity Into Action — Book a Coaching Session"
    },
    {
      id: 1,
      title: "Power–Vulnerability Matrix™",
      headline: "Balance authority with empathy to unlock authentic influence.",
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      accent: "border-emerald-500",
      experience: [
        { title: "Matrix Mapping™", description: "Diagnose your default style: overpowered, overexposed, detached, or balanced." },
        { title: "Authority Anchoring", description: "Techniques to project confidence and decisiveness without intimidation." },
        { title: "Empathy Levers", description: "Learn how vulnerability and openness build trust with teams and stakeholders." },
        { title: "Adaptive Switching", description: "Practise shifting your style based on audience, context, and stakes." }
      ],
      before: [
        "Authority mistaken for arrogance",
        "Over-sharing that weakens respect",
        "Disconnected communication that misses impact",
        "Struggles to adapt style to context"
      ],
      after: [
        "Confident authority tempered with empathy",
        "Authentic openness that strengthens trust",
        "Communication that lands with clarity and respect",
        "Dynamic adaptability across leadership scenarios"
      ],
      story: "A director once seen as intimidating and unapproachable used the Matrix to adjust tone and openness. Within months, employee engagement scores rose, and peers described their presence as \"powerful yet deeply human.\"",
      cta: "Discover Your Matrix — Begin Coaching Today"
    },
    {
      id: 2,
      title: "Leadership Presence Lab™",
      headline: "Craft gravitas, charisma, and clarity that command trust and respect.",
      icon: UserCheck,
      color: "text-amber-500",
      bg: "bg-amber-50",
      accent: "border-amber-500",
      experience: [
        { title: "Presence Amplification Coaching", description: "Techniques to project confidence before you speak." },
        { title: "Charisma Framework™", description: "Blend storytelling, tone, and gestures to inspire connection." },
        { title: "Gravitas Training", description: "Balance authority and authenticity to be taken seriously at every level." },
        { title: "Mirror & Feedback Loops", description: "Real-time video analysis and peer feedback to refine delivery." }
      ],
      before: [
        "Nervous body language and filler words",
        "Presence that fades in meetings",
        "Messages easily overlooked",
        "Authority questioned or challenged"
      ],
      after: [
        "Poised, confident, and commanding presence",
        "Messages that stick in memory",
        "Calm authority that earns attention and respect",
        "Authentic charisma that builds influence naturally"
      ],
      story: "A senior manager who once struggled to gain recognition in cross-functional meetings became the go-to voice for clarity and confidence — trusted by peers and respected by executives.",
      cta: "Step Into Your Presence — Book a Lab Session"
    },
    {
      id: 3,
      title: "Influence Under Pressure™",
      headline: "Stay calm, clear, and convincing when the stakes are highest.",
      icon: Shield,
      color: "text-rose-500",
      bg: "bg-rose-50",
      accent: "border-rose-500",
      experience: [
        { title: "Crisis Simulations", description: "Mock press briefings, investor calls, and hostile Q&As that test real-time composure." },
        { title: "Boardroom Battle Drills", description: "Roleplay high-stakes decisions where clarity and confidence sway outcomes." },
        { title: "Message Under Fire™ Framework", description: "Learn to simplify, prioritise, and deliver your message under intense scrutiny." },
        { title: "Pressure Presence Coaching", description: "Techniques to regulate nerves, manage tone, and use body language strategically." }
      ],
      before: [
        "Reactive, defensive responses",
        "Messages lost under stress",
        "Visible nerves undermining authority",
        "Difficulty influencing tough stakeholders"
      ],
      after: [
        "Composed, centred, and strategic under fire",
        "Clear messages that drive decisions",
        "Confidence that reassures teams and stakeholders",
        "Authority balanced with empathy, even in conflict"
      ],
      story: "A senior executive facing a hostile media panel walked away not just intact — but admired. By applying Influence Under Pressure™, they shifted the conversation from blame to vision, regaining trust for the organisation.",
      cta: "Book a High-Stakes Simulation Session"
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-600">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.3]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-brand-navy text-white font-bold text-xs uppercase tracking-widest mb-8">
              <Target size={14} className="mr-2" /> Executive Communication Coaching
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight max-w-4xl">
              Executive leaders are not judged by what they know — <span className="text-brand-blue italic font-light">but by how clearly they can communicate what matters.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <p className="text-xl font-light text-slate-500 leading-relaxed">
                    In moments of pressure, ambiguity, or visibility, communication becomes more than expression. It becomes influence, alignment, and decision-making in motion.
                </p>
                <div className="border-l-4 border-brand-blue pl-8">
                    <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
                        Eloqaura’s Executive Communication Coaching is designed for leaders who operate where stakes are high and consequences are real.
                    </p>
                    <p className="text-slate-500">
                        We work beneath technique — strengthening clarity of thought, stability under pressure, and the balance between authority and empathy.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Tracks Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Explore the Signature Tracks</h2>
            <p className="text-xl text-slate-500 max-w-3xl font-light">
                Every leader faces different communication pressures. That’s why our coaching is structured around distinct but interconnected pathways — each designed to address a specific dimension of executive influence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
            {tracks.map((track, idx) => {
              const TrackIcon = track.icon;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(idx)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                    activeTrack === idx 
                      ? `${track.accent} bg-white shadow-xl translate-y-[-4px]` 
                      : 'border-transparent bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl ${track.bg} ${track.color} flex items-center justify-center mb-4`}>
                      <TrackIcon size={24} />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${activeTrack === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                      {track.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Track Detail */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Content */}
              <div className="p-8 md:p-16">
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${tracks[activeTrack].bg} ${tracks[activeTrack].color} text-[10px] font-bold uppercase tracking-widest mb-6`}>
                    {React.createElement(tracks[activeTrack].icon, { size: 12, className: "mr-2" })} Signature Track 0{activeTrack + 1}
                </div>
                <h3 className="text-4xl font-serif text-slate-900 mb-4">{tracks[activeTrack].title}</h3>
                <p className="text-xl text-brand-blue italic font-light mb-8">{tracks[activeTrack].headline}</p>
                
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">What You’ll Experience</h4>
                <div className="space-y-6 mb-10">
                    {tracks[activeTrack].experience.map((exp, i) => (
                        <div key={i} className="flex group">
                            <div className="mr-4 mt-1.5 flex-shrink-0">
                                <div className={`w-2 h-2 rounded-full ${tracks[activeTrack].bg} border border-current ${tracks[activeTrack].color}`}></div>
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-900 mb-1">{exp.title}</h5>
                                <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to="/discovery" className={`inline-flex items-center px-8 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-brand-blue transition-colors group`}>
                    {tracks[activeTrack].cta} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Transformation & Story */}
              <div className="bg-slate-50 p-8 md:p-16 border-l border-slate-100 flex flex-col justify-between">
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">The Transformation</h4>
                    <div className="grid grid-cols-1 gap-8 mb-12">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 mb-4 block">From</span>
                            <ul className="space-y-3">
                                {tracks[activeTrack].before.map((item, i) => (
                                    <li key={i} className="text-sm text-slate-500 flex items-start">
                                        <span className="mr-2 opacity-50">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`p-6 rounded-2xl bg-white border-l-4 ${tracks[activeTrack].accent} shadow-sm`}>
                            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${tracks[activeTrack].color} mb-4 block`}>To</span>
                            <ul className="space-y-3">
                                {tracks[activeTrack].after.map((item, i) => (
                                    <li key={i} className="text-sm text-slate-900 font-medium flex items-start">
                                        <CheckCircle2 size={14} className={`mr-2 mt-0.5 ${tracks[activeTrack].color}`} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                        <MessageSquare size={14} className="mr-2" /> Impact Story
                    </h4>
                    <p className="text-slate-600 italic leading-relaxed bg-white/50 p-4 rounded-xl border border-slate-200/50">
                        "{tracks[activeTrack].story}"
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Experiential Edge Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 block">The Experiential Edge</span>
                    <h2 className="text-4xl font-serif text-slate-900 mb-8">Where clarity becomes capability.</h2>
                    <p className="text-xl font-light text-slate-500 leading-relaxed mb-8">
                        Executive growth does not happen through theory alone. That’s why every coaching pathway is built on active practice.
                    </p>
                    <div className="space-y-8">
                        {[
                            { icon: Search, title: "Diagnostics", desc: "Proprietary tools to map your current impact and blind spots." },
                            { icon: RefreshCw, title: "Simulations", desc: "High-stakes scenarios tailored to your specific leadership context." },
                            { icon: MessageSquare, title: "Structured Feedback", desc: "Direct, objective reflection from coaches who understand executive pressure." },
                            { icon: TrendingUp, title: "Live Reflection", desc: "Ongoing analysis of real-world interactions as they happen." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mr-6 flex-shrink-0 text-brand-navy">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden flex items-center justify-center p-12 relative">
                        {/* Abstract visual representation of coaching */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                        <div className="relative z-10 text-center">
                            <Brain size={80} className="text-brand-blue mx-auto mb-8 animate-pulse" />
                            <h3 className="text-3xl font-serif text-white mb-4">Deepening Presence</h3>
                            <p className="text-blue-200/60 font-light">The shift from knowing what to do, to being able to do it when it counts.</p>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full"></div>
                        <div className="absolute bottom-20 left-10 w-32 h-32 border border-white/5 rounded-full"></div>
                    </div>
                    {/* Floating quote */}
                    <div className="absolute -bottom-10 -left-10 bg-brand-blue p-8 rounded-3xl shadow-2xl max-w-xs text-white">
                        <p className="font-serif italic text-lg mb-0">
                            "Influence isn’t volume. It’s precision, presence, and composure when it counts."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">If you are leading conversations that shape outcomes, this work is not optional — <span className="text-brand-blue italic">it is strategic.</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link to="/discovery" className="px-10 py-4 bg-white text-brand-navy font-bold rounded-full hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
                    Begin With Discovery
                </Link>
                <Link to="/programs-and-services" className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                    Explore All Tracks
                </Link>
            </div>
            <p className="mt-12 text-blue-200/60 font-light tracking-widest uppercase text-xs">
                Not delivery. Capability.
            </p>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveCoachingPage;
