import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Target, 
  Zap, 
  Shield, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Activity,
  Search,
  RefreshCw,
  TrendingUp,
  Brain,
  Quote,
  FileText,
  BarChart,
  Sparkles,
  Volume2,
  BookOpen,
  Layout,
  Focus,
  PlayCircle,
  Eye,
  Layers,
  ChevronRight,
  Monitor
} from 'lucide-react';

const PublicSpeakingMasteryPage = () => {
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const suiteRef = useRef(null);

  const challenges = [
    { id: 'nervousness', label: 'Nervousness' },
    { id: 'flat-delivery', label: 'Flat delivery' },
    { id: 'unclear-messaging', label: 'Unclear messaging' },
    { id: 'poor-engagement', label: 'Poor engagement' },
    { id: 'lack-confidence', label: 'Lack of confidence' }
  ];

  const challengeInsights = {
    'nervousness': {
      insight: "Nervousness comes from cognitive overload — too much attention on yourself, not enough on your message. Unmanaged nerves reduce clarity, shrink presence, and weaken audience connection.",
      refinement: "Confidence grows when the body, breath, and message align.",
      cta: "Build calm, confident presence — explore your recommended modules below.",
      recommendations: ['presence-amplifier', 'stage-simulation-lab']
    },
    'flat-delivery': {
      insight: "Flat delivery happens when your voice doesn’t match your intention. It’s usually caused by unexpressed emotion, low vocal range, or a focus on content instead of connection.",
      refinement: "Your voice becomes compelling when you unlock rhythm, tone, and emotional presence.",
      cta: "Make your delivery unforgettable — explore your recommended modules below.",
      recommendations: ['voice-of-influence', 'storytelling-blueprint']
    },
    'unclear-messaging': {
      insight: "Unclear messaging happens when ideas are not distilled, structured, or sequenced with intention. The audience hears information — but not meaning.",
      refinement: "Clarity emerges when your message has structure, story, and a sharpened ‘so-what’.",
      cta: "Sharpen your message — explore your recommended modules below.",
      recommendations: ['clarity-in-action', 'storytelling-blueprint']
    },
    'poor-engagement': {
      insight: "Poor engagement happens when your audience can’t feel your intention, your energy, or their place in your message. Engagement drops when delivery has no emotional hook or interactive rhythm.",
      refinement: "Engagement grows when your delivery activates curiosity, story, and emotional connection.",
      cta: "Make your message impossible to ignore — explore your recommended modules below.",
      recommendations: ['storytelling-blueprint', 'voice-of-influence']
    },
    'lack-confidence': {
      insight: "Lack of confidence comes from disconnection — between your message, your body, and your inner state. When your inner narrative is uncertain, your outer delivery collapses.",
      refinement: "Confidence grows when you feel aligned, prepared, and grounded in your message.",
      cta: "Grow your confidence through presence and practice — explore your recommended modules below.",
      recommendations: ['presence-amplifier', 'stage-simulation-lab']
    }
  };

  const modules = [
    {
      id: 'presence-amplifier',
      title: "Presence Amplifier™",
      tagline: "Command the room before you speak.",
      icon: Focus,
      color: "text-blue-500",
      bg: "bg-blue-50",
      accent: "border-blue-500",
      intro: "The Presence Amplifier™ coaching experience helps you develop the non-verbal power that builds authority, trust, and attention — long before the first sentence leaves your mouth. You’ll discover how micro-behaviours, posture, and energy flow shape perception — and how to align what people see, hear, and feel into one cohesive message.",
      experience: [
        { title: "Energy Mapping", description: "Identify how your physical, emotional, and vocal energy influence others." },
        { title: "Posture-to-Presence Framework", description: "Train body language, stance, and eye contact for confidence and calm." },
        { title: "First 30 Seconds Simulation", description: "Practise owning the room within moments of stepping up." },
        { title: "Feedback Mirrors", description: "Receive real-time analysis from peers and facilitator on presence impact." }
      ],
      before: [
        "Nervous, hesitant energy that loses attention",
        "Over-reliance on words to gain credibility",
        "Disconnection between posture and message",
        "Uncertain first impressions"
      ],
      after: [
        "Centred, composed, and confident energy",
        "Authority established even before speaking",
        "Body language that amplifies clarity and credibility",
        "First impressions that invite trust and engagement"
      ],
      story: "A senior executive once known for tense body language and monotone delivery joined Presence Amplifier™. Within weeks, they replaced nervous energy with calm authority — leading to standing ovations at their next leadership address.",
      edge: [
        { title: "Mirror Stage Simulations", desc: "Controlled stage entries with immediate feedback." },
        { title: "Energy Flow Calibration", desc: "Breathing and micro-expression control exercises." },
        { title: "Presence Score Tracker", desc: "Self and peer-assessment metrics for improvement." },
        { title: "Video Replay Reflections", desc: "Observe your presence and refine your projection." }
      ],
      cta: "Amplify Your Presence"
    },
    {
        id: 'storytelling-blueprint',
        title: "Storytelling Blueprint™",
        tagline: "Craft narratives that persuade, inspire, and stick.",
        icon: BookOpen,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        accent: "border-emerald-500",
        intro: "Stories are the architecture of human memory. The Storytelling Blueprint™ helps leaders and professionals build narratives that not only capture attention but create belief. You’ll learn to structure your story around tension, transformation, and truth — blending data with emotion to influence decisions and ignite action.",
        experience: [
          { title: "Narrative Architecture Framework™", description: "Build stories around a 3-act emotional logic that leads audiences to clarity and conviction." },
          { title: "Data-to-Emotion Bridge™", description: "Transform facts and information into relatable human meaning." },
          { title: "Audience Journey Mapping™", description: "Craft your message to meet listeners where they are — and move them where they need to go." },
          { title: "Signature Story Sprint™", description: "Develop, test, and refine your personal leadership narrative in real time." }
        ],
        before: [
          "Overloaded slides and dry data dumps",
          "Inconsistent message flow and pacing",
          "Disconnected audience engagement",
          "Messages that inform but fail to move"
        ],
        after: [
          "Stories that anchor complex ideas in emotion and clarity",
          "Natural rhythm and narrative flow",
          "Presentations that inspire belief and action",
          "A distinct personal narrative that builds credibility and trust"
        ],
        story: "A leader in financial services turned quarterly updates into storytelling sessions using the Storytelling Blueprint™. The result? Engagement scores rose 3x, and their data presentations became the highlight of leadership meetings.",
        edge: [
          { title: "Story Dissection Circles", desc: "Analyse master storytellers to extract replicable techniques." },
          { title: "Blueprint Canvas Worksheets", desc: "Visual tools for structuring story arcs and emotional flow." },
          { title: "Peer Story Lab Sessions", desc: "Practise, record, and refine stories with feedback." },
          { title: "Emotional Arc Tracker™", desc: "Map how your story feels, not just what it says." }
        ],
        cta: "Design Your Narrative"
    },
    {
        id: 'voice-of-influence',
        title: "Voice of Influence™",
        tagline: "Find your tone. Shape perception. Move audiences.",
        icon: Volume2,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        accent: "border-indigo-500",
        intro: "Your voice is your signature. It doesn’t just deliver information — it transmits emotion, authority, and trust. The Voice of Influence™ program helps you master the science and psychology of vocal communication, teaching you to command attention, convey empathy, and persuade through tone and presence — not volume.",
        experience: [
          { title: "Vocal Presence Framework™", description: "Understand how pitch, pace, and pause shape emotional impact." },
          { title: "Tone Adaptability Drills™", description: "Practise shifting between confidence, empathy, and authority in real scenarios." },
          { title: "Resonance Mapping™", description: "Identify your authentic vocal range and learn to project powerfully without strain." },
          { title: "Silence & Space Technique™", description: "Use pauses and stillness to create tension, trust, and memorability." }
        ],
        before: [
          "Flat or inconsistent vocal delivery",
          "Nervous tone undermines authority",
          "Overly rehearsed or robotic speech",
          "Lack of emotional connection with audience"
        ],
        after: [
          "Dynamic, authentic vocal range",
          "Tone that builds trust and holds attention",
          "Confident rhythm that engages listeners",
          "Speech that feels human — not mechanical"
        ],
        story: "A senior manager whose presentations often felt mechanical discovered their natural tone through Voice of Influence™. Within a month, their confident, empathetic delivery made them the most requested presenter in their division.",
        edge: [
          { title: "Voice Resonance Labs", desc: "Audio-feedback sessions to perfect tone control." },
          { title: "Emotion-in-Tone Simulations", desc: "Apply tonal shifts in high-stakes speaking moments." },
          { title: "Pace & Pause Challenges", desc: "Learn the rhythm of persuasion." },
          { title: "Influence Playback Sessions", desc: "Hear your evolution and track your vocal signature." }
        ],
        cta: "Uncover Your Voice"
    },
    {
        id: 'stage-simulation-lab',
        title: "Stage Simulation Lab™",
        tagline: "Practise under pressure. Perform with purpose.",
        icon: Monitor,
        color: "text-rose-500",
        bg: "bg-rose-50",
        accent: "border-rose-500",
        intro: "Real confidence isn’t built in theory — it’s forged in simulation. The Stage Simulation Lab™ is a dynamic, high-stakes environment where participants rehearse, adapt, and refine their presence through realistic speaking scenarios. Here, you’ll experience what it means to deliver with composure when every eye — and every second — matters.",
        experience: [
          { title: "High-Stakes Roleplays™", description: "Simulate key moments: board meetings, investor pitches, press briefings, and team addresses." },
          { title: "360° Feedback Mirror™", description: "Receive structured feedback from audience, peers, and facilitator on tone, clarity, and presence." },
          { title: "Adaptive Scenario Engine™", description: "Shift mid-speech based on live prompts, audience questions, or unexpected curveballs." },
          { title: "Confidence Calibration Sessions™", description: "Deconstruct your performance, identify triggers, and rebuild composure through targeted drills." }
        ],
        before: [
          "Anxiety before every presentation",
          "Difficulty thinking clearly under pressure",
          "Disconnected delivery when unexpected challenges arise",
          "Limited feedback and unclear improvement path"
        ],
        after: [
          "Calm, confident delivery in unpredictable situations",
          "Sharp thinking and adaptability on stage",
          "Emotional regulation under scrutiny",
          "Actionable, data-backed improvement after each session"
        ],
        story: "A startup founder once paralysed by investor Q&A sessions joined Stage Simulation Lab™. After three simulation cycles, they delivered their pitch with clarity and composure — and secured full funding.",
        edge: [
          { title: "Live Audience Labs", desc: "Real feedback from diverse perspectives." },
          { title: "Simulation Replay Portal", desc: "Rewatch, review, and measure progress visually." },
          { title: "On-the-Spot Coaching™", desc: "Immediate instructor input during live practice." },
          { title: "Performance Growth Tracker™", desc: "Visual dashboard mapping confidence, clarity, and composure." }
        ],
        cta: "Step Into the Lab"
    },
    {
        id: 'persuasion-playbook',
        title: "Persuasion Playbook™",
        tagline: "Learn the science of influence — and the art of trust.",
        icon: Shield,
        color: "text-amber-500",
        bg: "bg-amber-50",
        accent: "border-amber-500",
        intro: "Every powerful communicator understands this truth: persuasion isn’t manipulation — it’s alignment. The Persuasion Playbook™ helps you master the frameworks, tactics, and emotional intelligence required to move people ethically and effectively, whether in boardrooms, negotiations, or keynote stages.",
        experience: [
          { title: "Influence Dynamics Framework™", description: "Master the balance of logic (logos), emotion (pathos), and credibility (ethos)." },
          { title: "Decision Framing Labs™", description: "Practise shaping audience perception through context and sequencing." },
          { title: "Ethical Persuasion Model™", description: "Learn to influence without manipulation — integrity first, impact second." },
          { title: "High-Stakes Scenario Practice™", description: "Apply persuasive strategy to real-world leadership challenges and pitches." }
        ],
        before: [
          "Struggles to make messages stick",
          "Logical but uninspiring delivery",
          "Misreads audience motivations",
          "Feels manipulative when trying to persuade"
        ],
        after: [
          "Inspires agreement without forcing compliance",
          "Balances logic and emotion with clarity",
          "Reads and responds to hidden audience cues",
          "Builds influence rooted in trust and authenticity"
        ],
        story: "A regional head who struggled to gain buy-in for new initiatives applied Persuasion Playbook™ techniques to restructure proposals. The result? Their project secured unanimous leadership approval and became a model for organisational rollouts.",
        edge: [
          { title: "Negotiation Simulations", desc: "Realistic influence scenarios with shifting stakeholder priorities." },
          { title: "Emotion Mapping Cards", desc: "Decode what drives decision-making beneath the surface." },
          { title: "Message Reframing Drills™", desc: "Practise turning resistance into resonance." },
          { title: "Ethical Debate Circles", desc: "Explore persuasion boundaries through guided dialogue." }
        ],
        cta: "Master Ethical Influence"
    }
  ];

  const scrollToSuite = () => {
    suiteRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChallengeClick = (id) => {
    setActiveChallenge(id);
    // Optional: auto-scroll to the insight or highlighted section
  };

  const handleModuleClick = (mod) => {
    setSelectedModule(mod);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedModule) {
    return (
        <div className="bg-white font-sans text-slate-600 animate-fade-in">
            {/* Detail View Header */}
            <section className="relative pt-32 pb-12 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button 
                        onClick={() => setSelectedModule(null)}
                        className="flex items-center text-slate-400 hover:text-brand-blue mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
                    >
                        <ArrowRight className="rotate-180 mr-2" size={14} /> Back to Mastery Hub
                    </button>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <div className={`inline-flex items-center px-3 py-1 rounded-full ${selectedModule.bg} ${selectedModule.color} text-[10px] font-bold uppercase tracking-widest mb-6`}>
                                {React.createElement(selectedModule.icon, { size: 12, className: "mr-2" })} Public Speaking Mastery
                            </div>
                            <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4">{selectedModule.title}</h1>
                            <p className="text-2xl text-brand-blue italic font-light">{selectedModule.tagline}</p>
                        </div>
                        <Link to="/discovery" className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-blue transition-all shadow-lg hover:-translate-y-1">
                            Begin This Track
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Copy */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-2xl font-light text-slate-500 leading-relaxed text-center">
                        {selectedModule.intro}
                    </p>
                </div>
            </section>

            {/* Content & Transformation */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Experience */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10 flex items-center">
                                <Activity size={16} className="mr-2" /> What You’ll Experience
                            </h4>
                            <div className="space-y-8">
                                {selectedModule.experience.map((exp, i) => (
                                    <div key={i} className="flex group">
                                        <div className="mr-6 mt-1 flex-shrink-0">
                                            <div className={`w-3 h-3 rounded-full ${selectedModule.bg} border-2 ${selectedModule.accent} group-hover:scale-125 transition-transform`}></div>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h5>
                                            <p className="text-slate-500 leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Transformation */}
                        <div className="space-y-12">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">Before → After</h4>
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-6 block">The Starting Point</span>
                                <ul className="space-y-4">
                                    {selectedModule.before.map((item, i) => (
                                        <li key={i} className="text-slate-500 flex items-start text-sm">
                                            <span className="mr-3 opacity-30">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`bg-white p-8 rounded-3xl border-l-4 ${selectedModule.accent} shadow-xl`}>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedModule.color} mb-6 block`}>The Mastery Point</span>
                                <ul className="space-y-4">
                                    {selectedModule.after.map((item, i) => (
                                        <li key={i} className="text-slate-900 font-medium flex items-start text-sm">
                                            <CheckCircle2 size={14} className={`mr-3 mt-0.5 ${selectedModule.color}`} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Story */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Quote size={40} className="text-brand-blue/20 mx-auto mb-8" />
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Impact Vignette</h4>
                    <p className="text-2xl font-serif text-slate-800 italic leading-relaxed mb-12">
                        "{selectedModule.story}"
                    </p>
                    <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Experiential Edge Bar */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <h4 className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-16 text-center">The Experiential Edge</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {selectedModule.edge.map((item, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <h5 className="font-bold text-white mb-3 text-sm">{item.title}</h5>
                                <p className="text-xs text-blue-100/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-4xl font-serif text-slate-900 mb-8">Ready to step into your power?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/discovery" className={`px-10 py-4 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-blue transition-all shadow-xl`}>
                            {selectedModule.cta}
                        </Link>
                        <button 
                            onClick={() => setSelectedModule(null)}
                            className="px-8 py-4 text-slate-500 font-bold hover:text-brand-navy transition-colors"
                        >
                            Explore Other Tracks
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
  }

  return (
    <div className="bg-white font-sans text-slate-600">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.4]"></div>
        <div className="absolute -top-24 -right-24 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center py-2 px-5 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-10 shadow-lg">
            <Mic size={14} className="mr-2" /> Public Speaking Mastery™
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-[1.05] tracking-tight">
            Where your voice <br />
            <span className="text-brand-blue italic font-light">becomes your superpower.</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-slate-500 max-w-4xl mx-auto leading-relaxed mb-12">
            Designed for leaders, professionals, and experts who speak to influence—not perform.
            <span className="block mt-4 text-lg md:text-xl text-slate-400">Master the art of presence, storytelling, influence, and performance — in high-stakes moments and everyday communication alike.</span>
          </p>
          <button 
            onClick={scrollToSuite}
            className="group inline-flex items-center px-12 py-5 bg-brand-navy text-white font-bold rounded-full shadow-2xl hover:bg-brand-blue transition-all hover:-translate-y-1"
          >
            Start Your Mastery Journey <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* 2. Short Diagnostic */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-serif text-slate-900 mb-4">What’s your biggest speaking challenge?</h3>
                <p className="text-slate-500 font-light">Select one for a personalised insight and recommendation.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {challenges.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => handleChallengeClick(c.id)}
                        className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                            activeChallenge === c.id 
                                ? 'bg-brand-navy border-brand-navy text-white shadow-xl scale-105' 
                                : 'bg-white border-slate-100 text-slate-500 hover:border-brand-blue hover:text-brand-blue'
                        }`}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            {/* Dynamic Insight Reveal */}
            {activeChallenge && (
                <div className="animate-fade-in">
                    <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group">
                        {/* Gold Glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10 transition-transform duration-1000 group-hover:scale-110"></div>
                        
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6 block">Eloqaura Insight</span>
                            <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed mb-8">
                                “{challengeInsights[activeChallenge].insight}”
                            </p>
                            <p className="text-xl text-brand-gold font-light italic mb-10">
                                {challengeInsights[activeChallenge].refinement}
                            </p>
                            
                            <div className="flex flex-col md:flex-row md:items-center gap-6 pt-8 border-t border-brand-gold/20">
                                <p className="text-slate-500 font-medium">
                                    {challengeInsights[activeChallenge].cta}
                                </p>
                                <button 
                                    onClick={scrollToSuite}
                                    className="inline-flex items-center text-brand-navy font-bold uppercase tracking-widest text-xs hover:text-brand-blue transition-colors"
                                >
                                    Explore Modules <ChevronRight size={14} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </section>

      {/* 3. The Public Speaking Mastery Suite */}
      <section ref={suiteRef} className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">The Mastery Suite™</h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                    Five distinct pathways to vocal, physical, and narrative power.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {modules.map((mod) => {
                    const isRecommended = activeChallenge && challengeInsights[activeChallenge].recommendations.includes(mod.id);
                    const Icon = mod.icon;

                    return (
                        <button
                            key={mod.id}
                            onClick={() => handleModuleClick(mod)}
                            className={`group text-left bg-white p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col items-start h-full
                                ${isRecommended 
                                    ? 'border-brand-blue shadow-2xl scale-[1.02] ring-4 ring-brand-blue/5' 
                                    : 'border-slate-100 hover:border-slate-300 hover:shadow-xl'
                                }
                            `}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <Icon size={32} />
                            </div>
                            
                            {isRecommended && (
                                <span className="mb-4 inline-flex items-center py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest">
                                    <Sparkles size={10} className="mr-1.5" /> Recommended for you
                                </span>
                            )}

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">
                                {mod.title}
                            </h3>
                            <p className="text-slate-500 mb-10 leading-relaxed font-light line-clamp-3">
                                {mod.tagline} {mod.intro.split('.')[0]}.
                            </p>
                            
                            <div className="mt-auto w-full flex items-center justify-between">
                                <span className="inline-flex items-center text-slate-900 font-sans font-bold text-xs uppercase tracking-widest group-hover:text-brand-blue transition-colors">
                                    Deep Dive <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="h-px flex-grow mx-4 bg-slate-100"></div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
      </section>

      {/* 4. Impact Metrics & Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="flex items-center text-brand-blue mb-6">
                            <BarChart size={32} />
                            <span className="text-5xl font-serif font-bold ml-4">92%</span>
                        </div>
                        <p className="text-lg text-slate-600 font-light">
                            report increased confidence after just <span className="font-bold text-slate-900">two sessions</span>.
                        </p>
                    </div>
                    <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="flex items-center text-brand-navy mb-6">
                            <TrendingUp size={32} />
                            <span className="text-5xl font-serif font-bold ml-4">2x</span>
                        </div>
                        <p className="text-lg text-slate-600 font-light">
                            Leaders perform <span className="font-bold text-slate-900">2x better</span> in high-stakes moments after the Simulation Lab.
                        </p>
                    </div>
                </div>
                <div className="bg-brand-navy text-white p-12 rounded-[2.5rem] relative overflow-hidden">
                    <Quote className="absolute -top-6 -left-6 text-white/5 w-32 h-32" />
                    <p className="text-xl font-serif italic mb-8 relative z-10 leading-relaxed">
                        “Eloqaura didn’t just teach me how to speak. They taught me how to inhabit the space and lead through presence.”
                    </p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mr-4">
                            <UserCheck className="text-brand-blue" size={20} />
                        </div>
                        <div>
                            <span className="block font-bold">Global Marketing Director</span>
                            <span className="block text-xs text-blue-200/60 uppercase tracking-widest">Tech Enterprise</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. CTA Conversion Section */}
      <section className="py-32 bg-slate-50 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-10 leading-tight">
                Your voice creates your future. <br />
                <span className="text-brand-blue italic font-light">Let’s unlock its full power.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link 
                    to="/discovery"
                    className="px-12 py-5 bg-brand-navy text-white font-bold rounded-full shadow-2xl hover:bg-brand-blue transition-all transform hover:-translate-y-1"
                >
                    Book a Speaking Strategy Call
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PublicSpeakingMasteryPage;
