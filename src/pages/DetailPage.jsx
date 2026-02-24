import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Mic, 
  Zap, 
  Target, 
  Shield, 
  ChevronRight, 
  Layers, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

const DetailPage = ({ title: propsTitle }) => {
  const { slug } = useParams();
  
  const programData = useMemo(() => {
    const data = {
      'clarity-in-action': {
        title: "Clarity in Action™",
        tagline: "Simplify complexity. Sharpen your message. Drive decisions.",
        icon: Target,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        experience: [
          { title: "Message Distillation™", desc: "Learn to strip away jargon and reduce complex ideas to their essence." },
          { title: "Decision Clarity Framework™", desc: "Techniques to communicate options, risks, and outcomes with precision." },
          { title: "The 90-Second Pitch Drill™", desc: "Practise delivering compelling clarity in time-pressured settings." },
          { title: "Clarity Feedback Loops", desc: "Peer and coach reflections on whether your message truly lands." }
        ],
        before: [
          "Long-winded explanations that confuse audiences",
          "Critical points buried in details",
          "Decisions delayed by lack of clarity",
          "Audiences disengaged or lost"
        ],
        after: [
          "Concise, focused communication that cuts through noise",
          "Messages that highlight the “so what” immediately",
          "Faster decision-making from aligned understanding",
          "Audiences engaged, confident, and mobilised"
        ],
        vignette: "A leader once known for overloading presentations with detail mastered Clarity in Action™. Today, their concise, story-driven updates help senior stakeholders make swift, confident decisions.",
        cta: "Put Clarity Into Action — Book a Coaching Session"
      },
      'power-vulnerability-matrix': {
        title: "Power–Vulnerability Matrix™",
        tagline: "Balance authority with empathy to unlock authentic influence.",
        icon: Shield,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        experience: [
          { title: "Matrix Mapping™", desc: "Diagnose your default style: overpowered, overexposed, detached, or balanced." },
          { title: "Authority Anchoring", desc: "Techniques to project confidence and decisiveness without intimidation." },
          { title: "Empathy Levers", desc: "Learn how vulnerability and openness build trust with teams and stakeholders." },
          { title: "Adaptive Switching", desc: "Practise shifting your style based on audience, context, and stakes." }
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
        vignette: "A director once seen as intimidating and unapproachable used the Matrix to adjust tone and openness. Within months, employee engagement scores rose, and peers described their presence as “powerful yet deeply human.”",
        cta: "Discover Your Matrix — Begin Coaching Today"
      },
      'presence-amplifier': {
        title: "Presence Amplifier™",
        tagline: "Command the room before you speak.",
        intro: "The Presence Amplifier™ coaching experience helps you develop the non-verbal power that builds authority, trust, and attention — long before the first sentence leaves your mouth.",
        icon: Mic,
        color: "text-rose-500",
        bg: "bg-rose-50",
        border: "border-rose-200",
        experience: [
          { title: "Energy Mapping", desc: "Identify how your physical, emotional, and vocal energy influence others." },
          { title: "Posture-to-Presence Framework", desc: "Train body language, stance, and eye contact for confidence and calm." },
          { title: "First 30 Seconds Simulation", desc: "Practise owning the room within moments of stepping up." },
          { title: "Feedback Mirrors", desc: "Receive real-time analysis from peers and facilitator on presence impact." }
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
        vignette: "A senior executive once known for tense body language and monotone delivery joined Presence Amplifier™. Within weeks, they replaced nervous energy with calm authority — leading to standing ovations at their next leadership address.",
        edge: [
          { title: "Mirror Stage Simulations", desc: "Controlled stage entries with immediate feedback." },
          { title: "Energy Flow Calibration", desc: "Breathing and micro-expression control exercises." },
          { title: "Presence Score Tracker", desc: "Self and peer-assessment metrics for improvement." },
          { title: "Video Replay Reflections", desc: "Observe your presence and refine your projection." }
        ],
        cta: "Amplify Your Presence — Start Your Coaching Session"
      },
      'voice-of-influence': {
        title: "Voice of Influence™",
        tagline: "Find your tone. Shape perception. Move audiences.",
        intro: "The Voice of Influence™ program helps you master the science and psychology of vocal communication, teaching you to command attention, convey empathy, and persuade through tone and presence — not volume.",
        icon: Zap,
        color: "text-purple-500",
        bg: "bg-purple-50",
        border: "border-purple-200",
        experience: [
          { title: "Vocal Presence Framework™", desc: "Understand how pitch, pace, and pause shape emotional impact." },
          { title: "Tone Adaptability Drills™", desc: "Practise shifting between confidence, empathy, and authority in real scenarios." },
          { title: "Resonance Mapping™", desc: "Identify your authentic vocal range and learn to project powerfully without strain." },
          { title: "Silence & Space Technique™", desc: "Use pauses and stillness to create tension, trust, and memorability." }
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
        vignette: "A senior manager whose presentations often felt mechanical discovered their natural tone through Voice of Influence™. Within a month, their confident, empathetic delivery made them the most requested presenter in their division.",
        edge: [
          { title: "Voice Resonance Labs", desc: "Audio-feedback sessions to perfect tone control." },
          { title: "Emotion-in-Tone Simulations", desc: "Apply tonal shifts in high-stakes speaking moments." },
          { title: "Pace & Pause Challenges", desc: "Learn the rhythm of persuasion." },
          { title: "Influence Playback Sessions", desc: "Hear your evolution and track your vocal signature." }
        ],
        cta: "Uncover Your Voice — Begin the Voice of Influence™ Journey"
      }
    };

    // If slug matches, return program data
    if (slug && data[slug]) return data[slug];
    
    // Fallback if title matches (for direct links from sitemap)
    // Normalize dashes and special chars
    const slugFromTitle = propsTitle?.toLowerCase()
      .replace(/[–—]/g, '-') // Normalize en-dash and em-dash to hyphen
      .replace(/[^a-z0-9-]/g, ' ') // Remove non-alphanumeric except hyphen
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-'); // Ensure single hyphens

    if (slugFromTitle && data[slugFromTitle]) return data[slugFromTitle];
    
    // Check if any key exists in the normalized title
    const foundKey = Object.keys(data).find(key => slugFromTitle?.includes(key));
    if (foundKey) return data[foundKey];
    
    return null;
  }, [slug, propsTitle]);

  if (!programData) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h1 className="text-4xl font-serif mb-8">{propsTitle || "Program Details"}</h1>
        <p className="text-slate-500 mb-12">Detailed curriculum for this track is currently under refinement.</p>
        <Link to="/programs-and-services" className="text-brand-blue font-bold uppercase tracking-widest text-xs">Back to Programs</Link>
      </div>
    );
  }

  const { title, tagline, intro, icon: Icon, color, bg, border, experience, before, after, vignette, edge, cta } = programData;

  return (
    <div className="bg-white font-sans text-slate-600 min-h-screen">
      
      {/* 1. Header Section */}
      <section className={`pt-48 pb-24 ${bg} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/individual-transformation/find-your-voice" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-brand-navy transition-colors mb-12 group">
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Suite
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
                <span className={`inline-flex items-center py-2 px-4 rounded-full bg-white ${color} text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/50 shadow-sm`}>
                    <Icon size={14} className="mr-2" /> Individual Transformation Suite
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">{title}</h1>
                <p className="text-2xl md:text-3xl font-light text-slate-500 leading-relaxed italic">{tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro & Experience */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-5">
                    <h2 className="text-3xl font-serif text-slate-900 mb-8">What You’ll Experience</h2>
                    {intro && <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">{intro}</p>}
                    <div className="space-y-6">
                        {experience.map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7">
                    {/* Before/After Transformation */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-serif text-slate-900 mb-12 text-center">Transformation Journey</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                            <div className="bg-slate-50 p-12">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center">
                                    <X size={14} className="mr-2" /> Before
                                </h4>
                                <ul className="space-y-6">
                                    {before.map((text, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-500 italic">
                                            <span className="mr-3 opacity-50">—</span> {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-brand-navy p-12 text-white">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-lightBlue mb-8 flex items-center">
                                    <CheckCircle2 size={14} className="mr-2" /> After
                                </h4>
                                <ul className="space-y-6">
                                    {after.map((text, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <ChevronRight size={14} className="mr-3 text-brand-lightBlue flex-shrink-0 mt-0.5" /> {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Impact Story */}
                    <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 relative overflow-hidden group">
                        <Sparkles size={40} className="absolute top-10 right-10 text-brand-blue/10 group-hover:text-brand-blue/30 transition-colors" />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center">
                            <Layers size={16} className="mr-2" /> Impact Story
                        </h3>
                        <p className="text-xl font-serif text-slate-900 leading-relaxed italic">
                            "{vignette}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Experiential Edge (if applicable) */}
      {edge && (
        <section className="py-32 bg-slate-50 border-y border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-serif text-slate-900 mb-4">Experiential Edge</h2>
                    <p className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">The Eloqaura Difference</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {edge.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all duration-500 group">
                            <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-brand-navy group-hover:${color} group-hover:${bg} transition-colors`}>
                                <Sparkles size={20} />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* 4. Final CTA */}
      <section className="py-40 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif text-slate-900 mb-12 leading-tight">{cta}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-2xl hover:-translate-y-2">
                    Start Transformation <ArrowRight className="ml-4" size={24} />
                </Link>
                <Link to="/programs-and-services" className="inline-flex items-center px-12 py-6 bg-white text-slate-400 border border-slate-200 rounded-full font-bold uppercase tracking-widest hover:border-brand-navy hover:text-brand-navy transition-all">
                    Explore Coaching Tracks
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default DetailPage;