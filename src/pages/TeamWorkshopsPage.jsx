import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Zap, 
  Shield, 
  MessageSquare, 
  Activity,
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Search,
  RefreshCw,
  TrendingUp,
  Clock,
  Mic,
  Volume2,
  Anchor,
  Compass,
  Monitor,
  Lightbulb,
  CheckCircle,
  Quote
} from 'lucide-react';

const TeamWorkshopsPage = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const workshops = [
    {
      id: 'listening-lab',
      title: "The Listening Lab™",
      headline: "Because listening is more than hearing — it’s leadership in action.",
      icon: Volume2,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      accent: "border-cyan-500",
      intro: "Most teams believe they listen. Few actually do. The Listening Lab™ is an immersive workshop that transforms everyday interactions into opportunities for clarity, empathy, and influence.",
      experience: [
        { title: "Active Acknowledgment Drills", description: "Practise reflecting what you’ve heard so others feel truly understood." },
        { title: "Interrupt & Reframe Simulations", description: "Manage overlaps, distractions, and difficult moments without losing connection." },
        { title: "Empathy Amplifiers™", description: "Roleplays that stretch emotional intelligence and perspective-taking." },
        { title: "Signal Spotting Exercises", description: "Train your ear to pick up the subtle cues (tone, pace, silence) that shape meaning." }
      ],
      before: [
        "Team members talk past each other",
        "Misunderstandings escalate into conflict",
        "People feel unheard, leading to disengagement",
        "Meetings drag on with little alignment"
      ],
      after: [
        "Conversations where everyone feels acknowledged",
        "Fewer conflicts, more constructive collaboration",
        "Higher trust, stronger team culture",
        "Meetings that run faster, with greater clarity"
      ],
      story: "A product team struggling with missed deadlines discovered that poor listening — not lack of skill — was the root issue. After The Listening Lab™, they adopted acknowledgment protocols that cut misunderstandings by half and boosted delivery confidence across the team.",
      edge: [
        { title: "Peer Feedback Cards", desc: "Instant reflections on listening effectiveness." },
        { title: "Real-Time Roleplays", desc: "Switch roles to practise both speaking and deep listening." },
        { title: "Debrief Circles", desc: "Guided reflections to connect insights to real-world scenarios." }
      ],
      cta: "Strengthen Team Trust — Join The Listening Lab™"
    },
    {
      id: 'conflict-to-collaboration',
      title: "Conflict to Collaboration™",
      headline: "Turn tension into teamwork. Transform disagreements into ideas that drive progress.",
      icon: Shield,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      accent: "border-emerald-500",
      intro: "Conflict isn’t the enemy — mismanaged conflict is. The Conflict to Collaboration™ workshop helps teams reframe disagreements as fuel for innovation, building stronger trust and alignment in the process.",
      experience: [
        { title: "Reframe Drills™", description: "Practise shifting conversations from blame to problem-solving." },
        { title: "Constructive Challenge Simulations", description: "Learn how to disagree productively without eroding trust." },
        { title: "Emotion-to-Action Framework™", description: "Techniques to manage emotional intensity and channel it into solutions." },
        { title: "Alignment Accelerators™", description: "Tools for finding common ground and shared priorities faster." }
      ],
      before: [
        "Conflicts escalate and damage relationships",
        "People avoid tough conversations",
        "Decisions stall due to unresolved tension",
        "Distrust lingers after disagreements"
      ],
      after: [
        "Healthy debates that strengthen respect",
        "Courage to address issues directly and constructively",
        "Faster decisions with greater buy-in",
        "Trust reinforced, not eroded, by disagreement"
      ],
      story: "A cross-functional project team paralysed by repeated clashes between engineering and sales learned to use the Conflict to Collaboration™ framework. Within weeks, conflicts shifted into productive debates that sped up decision-making and improved project delivery.",
      edge: [
        { title: "Role-Reversal Simulations", desc: "Experience the other side of a conflict." },
        { title: "Dialogue Mapping Cards", desc: "Visualise the flow of a disagreement to spot alignment points." },
        { title: "Rapid Mediation Games", desc: "Fast-paced exercises for resolving impasses under time pressure." },
        { title: "Reflection Circles", desc: "Debriefs that normalise vulnerability and strengthen team culture." }
      ],
      cta: "Turn Conflict Into Collaboration — Book a Workshop"
    },
    {
      id: 'signals-and-stories',
      title: "Signals & Stories™",
      headline: "Decode unspoken signals. Tell stories that unite and inspire.",
      icon: Anchor,
      color: "text-purple-500",
      bg: "bg-purple-50",
      accent: "border-purple-500",
      intro: "Every team sends signals — through tone, silence, body language, and everyday words. The Signals & Stories™ workshop trains teams to read these cues and respond with clarity, while mastering storytelling as the glue that builds trust and shared purpose.",
      experience: [
        { title: "Signal Awareness Drills™", description: "Learn to pick up subtle non-verbal and tonal cues in team dialogue." },
        { title: "Story Weaving Framework™", description: "Structure narratives that align teams and make ideas memorable." },
        { title: "Silent Signal Exercises", description: "Explore how pauses, eye contact, and presence influence conversations." },
        { title: "Collective Story Circles™", description: "Build and share team narratives that connect values with action." }
      ],
      before: [
        "Missed cues leading to misunderstandings",
        "Messages that fail to resonate emotionally",
        "Teams disconnected from a shared vision",
        "Ideas easily forgotten after meetings"
      ],
      after: [
        "Heightened awareness of unspoken signals",
        "Stories that inspire trust and alignment",
        "Stronger team identity and culture",
        "Ideas remembered, repeated, and acted upon"
      ],
      story: "A marketing team struggling with siloed communication discovered that their biggest issue was missed signals and disconnected storytelling. Through Signals & Stories™, they built a shared narrative around customer impact — and collaboration soared across departments.",
      edge: [
        { title: "Signal Spotting Games", desc: "Spot hidden emotions in roleplays." },
        { title: "Story Reframe Cards", desc: "Turn dull updates into compelling narratives." },
        { title: "Silent Listening Rounds", desc: "Practise the power of presence in communication." },
        { title: "Team Narrative Mapping", desc: "Visualise the stories shaping your team culture." }
      ],
      cta: "Decode Signals — Share Stories — Build Trust"
    },
    {
      id: 'decision-making-dialogues',
      title: "Decision-Making Dialogues™",
      headline: "Cut through the noise. Drive decisions with clarity, speed, and confidence.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50",
      accent: "border-amber-500",
      intro: "Decisions stall when conversations lack structure. Decision-Making Dialogues™ equips teams with frameworks to ask the right questions, focus on outcomes, and align faster — so choices move from talk to action.",
      experience: [
        { title: "Decision Clarity Framework™", description: "Structure conversations around options, risks, and trade-offs." },
        { title: "The 3-Question Drill™", description: "Practise focusing every dialogue on “What matters most?”" },
        { title: "Priority Alignment Games", description: "Fast-paced exercises that build consensus under time pressure." },
        { title: "Action Commit Cards", description: "Translate dialogue into clear commitments and next steps." }
      ],
      before: [
        "Endless debates with no resolution",
        "Decisions delayed or revisited repeatedly",
        "Lack of ownership for outcomes",
        "Meetings that drain energy instead of moving forward"
      ],
      after: [
        "Focused, structured dialogues that accelerate clarity",
        "Decisions made once, with confidence",
        "Clear ownership and accountability",
        "Meetings that energise and align teams"
      ],
      story: "A leadership team repeatedly delayed product launch decisions due to unclear priorities. After Decision-Making Dialogues™, they adopted the 3-Question Drill™ — and made aligned decisions in half the time, with greater confidence from all stakeholders.",
      edge: [
        { title: "Rapid-Fire Dialogues", desc: "Quick scenarios that force fast clarity." },
        { title: "Consensus Mapping Boards", desc: "Visual tools to track agreement and dissent." },
        { title: "Role-Play Debates", desc: "Practise handling opposing views productively." },
        { title: "Reflective Close-Outs", desc: "Reinforce learning by connecting to live workplace decisions." }
      ],
      cta: "Accelerate Decisions — Book a Workshop"
    },
    {
      id: 'clarity-sprint',
      title: "The Clarity Sprint™",
      headline: "Cut through complexity. Align fast. Deliver results.",
      icon: Compass,
      color: "text-rose-500",
      bg: "bg-rose-50",
      accent: "border-rose-500",
      intro: "When teams get lost in details, progress slows. The Clarity Sprint™ is a high-energy workshop designed to help teams strip away the noise, sharpen priorities, and create immediate alignment — all within time-pressured simulations.",
      experience: [
        { title: "Message-in-a-Minute Drills™", description: "Practise condensing complex ideas into concise, memorable points." },
        { title: "Alignment Races™", description: "Competitive exercises where teams must agree on priorities under strict time limits." },
        { title: "Decision Clarity Circuits™", description: "Rotating roleplays to test quick, structured decision-making." },
        { title: "Action Sprint Boards™", description: "Visual tools to translate dialogue into actionable next steps." }
      ],
      before: [
        "Long discussions with unclear outcomes",
        "Over-analysis leading to slow decisions",
        "Critical points buried in complexity",
        "Frustrated teams losing focus"
      ],
      after: [
        "Fast, focused communication",
        "Decisions made quickly with buy-in",
        "Clear, actionable priorities",
        "Energised teams with renewed momentum"
      ],
      story: "A technology team overwhelmed by endless planning meetings used The Clarity Sprint™. Within two sessions, they reduced discussion time by 40% and left every meeting with agreed priorities and next steps.",
      edge: [
        { title: "Time-Boxed Simulations", desc: "Create urgency and sharpen focus." },
        { title: "Peer Accountability Cards", desc: "Ensure commitments are clear and tracked." },
        { title: "Rapid Debrief Loops", desc: "Reflect quickly, apply instantly." },
        { title: "Visual Sprint Boards", desc: "Make clarity visible and measurable." }
      ],
      cta: "Cut Through the Noise — Join The Clarity Sprint™"
    }
  ];

  if (selectedWorkshop) {
    return (
      <div className="bg-white font-sans text-slate-600 animate-fade-in">
        {/* Detail Header */}
        <section className="relative pt-32 pb-12 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedWorkshop(null)}
              className="flex items-center text-slate-400 hover:text-brand-blue mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ArrowRight className="rotate-180 mr-2" size={14} /> Back to Workshop Overview
            </button>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${selectedWorkshop.bg} ${selectedWorkshop.color} text-[10px] font-bold uppercase tracking-widest mb-6`}>
                  {React.createElement(selectedWorkshop.icon, { size: 12, className: "mr-2" })} Team Experience
                </div>
                <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4">{selectedWorkshop.title}</h1>
                <p className="text-2xl text-brand-blue italic font-light">{selectedWorkshop.headline}</p>
              </div>
              <Link to="/discovery" className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-blue transition-all shadow-lg hover:-translate-y-1">
                Book for Your Team
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-2xl font-light text-slate-500 leading-relaxed text-center">
              {selectedWorkshop.intro}
            </p>
          </div>
        </section>

        {/* What You'll Experience & Transformation */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Experience */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10 flex items-center">
                  <Activity size={16} className="mr-2" /> Workshop Components
                </h4>
                <div className="space-y-8">
                  {selectedWorkshop.experience.map((exp, i) => (
                    <div key={i} className="flex group">
                      <div className="mr-6 mt-1 flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full ${selectedWorkshop.bg} border-2 ${selectedWorkshop.accent} group-hover:scale-125 transition-transform`}></div>
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-6 block">Initial Friction</span>
                  <ul className="space-y-4">
                    {selectedWorkshop.before.map((item, i) => (
                      <li key={i} className="text-slate-500 flex items-start text-sm">
                        <span className="mr-3 opacity-30">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-white p-8 rounded-3xl border-l-4 ${selectedWorkshop.accent} shadow-xl`}>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedWorkshop.color} mb-6 block`}>Operational Flow</span>
                  <ul className="space-y-4">
                    {selectedWorkshop.after.map((item, i) => (
                      <li key={i} className="text-slate-900 font-medium flex items-start text-sm">
                        <CheckCircle2 size={14} className={`mr-3 mt-0.5 ${selectedWorkshop.color}`} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Vignette */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Quote size={40} className="text-brand-blue/20 mx-auto mb-8" />
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Impact Vignette</h4>
            <p className="text-2xl font-serif text-slate-800 italic leading-relaxed mb-12">
              "{selectedWorkshop.story}"
            </p>
            <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Experiential Edge */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h4 className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-16 text-center">The Experiential Edge</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {selectedWorkshop.edge.map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h5 className="font-bold text-white mb-3 text-sm">{item.title}</h5>
                  <p className="text-xs text-blue-100/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-4xl font-serif text-slate-900 mb-8">Ready to strengthen your team?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/discovery" className="px-10 py-4 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-blue transition-all shadow-xl">
                {selectedWorkshop.cta}
              </Link>
              <button 
                onClick={() => setSelectedWorkshop(null)}
                className="px-8 py-4 text-slate-500 font-bold hover:text-brand-navy transition-colors"
              >
                Explore Other Workshops
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
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.3]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-brand-navy text-white font-bold text-xs uppercase tracking-widest mb-8">
            <Users size={14} className="mr-2" /> Team Communication Workshops
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight max-w-4xl">
            Where alignment <br />
            <span className="text-brand-blue italic font-light">stops being accidental</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
            <div className="prose prose-lg text-slate-500 font-light leading-relaxed">
              <p className="mb-6">Teams don’t struggle because people lack competence. They struggle because conversations lack structure.</p>
              <div className="space-y-2 text-slate-400 italic">
                <p>Misunderstandings compound.</p>
                <p>Decisions stall.</p>
                <p>Tension simmers beneath politeness.</p>
              </div>
            </div>
            <div className="border-l-4 border-brand-blue pl-8 text-left">
              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
                Eloqaura’s Team Communication Workshops are designed to strengthen the conversational infrastructure of teams — so collaboration becomes deliberate, not dependent on personality.
              </p>
              <p className="text-brand-navy font-bold">
                Because performance is not a motivation problem. It’s a clarity problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Focus Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif text-slate-900 mb-8">What We Focus On</h2>
              <p className="text-xl font-light text-slate-500 leading-relaxed mb-8">
                Every workshop is designed to address one critical dimension of team cognition:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "How teams listen",
                  "How they disagree",
                  "How they make decisions",
                  "How they interpret signals",
                  "How they translate strategy into everyday dialogue"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle size={18} className="text-brand-blue mr-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-lg text-brand-navy font-medium italic">
                  "We don’t teach teams to talk more. We help them talk better — especially when pressure rises."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 block">Before</span>
                <div className="grid grid-cols-2 gap-4">
                  {["Siloed thinking", "Defensive listening", "Conflict avoidance", "Revisited decisions", "Unspoken assumptions"].map((item, i) => (
                    <div key={i} className="text-sm text-slate-400 flex items-center">
                      <span className="w-1 h-1 bg-slate-300 rounded-full mr-2"></span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-navy p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <TrendingUp size={80} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-6 block">After</span>
                <div className="grid grid-cols-2 gap-4">
                  {["Shared language", "Decision ownership", "Healthy disagreement", "Reduced friction", "Faster execution"].map((item, i) => (
                    <div key={i} className="text-sm text-blue-100 flex items-center font-medium">
                      <CheckCircle2 size={14} className="text-brand-blue mr-2" /> {item}
                    </div>
                  ))}
                </div>
                <p className="mt-8 pt-8 border-t border-white/10 text-blue-200/60 italic text-sm">
                  The shift is not cosmetic. It is operational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Workshops Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-slate-900 mb-4">Our Core Workshop Experiences</h2>
            <p className="text-slate-500 font-light">Each workshop can stand alone or form part of a structured Organisational Growth Suite™.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((ws) => (
              <button 
                key={ws.id}
                onClick={() => setSelectedWorkshop(ws)}
                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-blue hover:shadow-2xl transition-all duration-500 text-left flex flex-col items-start"
              >
                <div className={`w-14 h-14 rounded-2xl ${ws.bg} ${ws.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {React.createElement(ws.icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">
                  {ws.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light line-clamp-2">
                  {ws.headline}
                </p>
                <span className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-brand-blue transition-colors">
                  Explore Experience <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden flex items-center justify-center p-12">
                 <div className="grid grid-cols-2 gap-4 w-full h-full">
                    {[RefreshCw, Activity, Search, Layers].map((Icon, i) => (
                       <div key={i} className="bg-white rounded-3xl shadow-sm flex items-center justify-center text-brand-navy">
                          <Icon size={32} />
                       </div>
                    ))}
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-blue p-8 rounded-3xl shadow-2xl text-white max-w-xs">
                <p className="font-serif italic mb-0">
                  "Learning that doesn’t change conversations is not learning."
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif text-slate-900 mb-8">Our Approach</h2>
              <p className="text-xl font-light text-slate-500 leading-relaxed mb-10">
                We design for real behaviour — not ideal behaviour. Every workshop integrates:
              </p>
              <div className="space-y-6">
                {[
                  { title: "Live simulations", desc: "Test skills in safe, high-pressure scenarios." },
                  { title: "Structured dialogue exercises", desc: "Frameworks that ensure every voice contributes." },
                  { title: "Reflective diagnostics", desc: "Map team dynamics in real-time." },
                  { title: "Behavioural mapping", desc: "Identify and adjust subtle communication habits." },
                  { title: "Immediate application", desc: "Tools you can use in your next meeting." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1.5 mr-4 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Who This Is For */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">Who This Is For</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Leadership teams", "Cross-functional project teams", "Scaling organisations", "High-growth environments", "Teams navigating complexity or tension"].map((item, i) => (
              <span key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 shadow-sm">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-12 text-xl text-slate-500 font-light italic max-w-2xl mx-auto">
            "If collaboration matters to your outcomes, this work matters to your system."
          </p>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-32 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-serif mb-10 leading-tight">
            Strengthen Your Teams — <br />
            <span className="text-brand-blue italic font-light">Begin Organisational Growth</span>
          </h2>
          <Link 
            to="/discovery"
            className="inline-flex items-center px-12 py-5 bg-white text-brand-navy font-bold rounded-full shadow-2xl hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1"
          >
            Start Your Growth Journey <ArrowRight size={20} className="ml-3" />
          </Link>
          <p className="mt-12 text-blue-200/60 font-light italic text-lg">
            Start with clarity. Not reorganisation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TeamWorkshopsPage;
