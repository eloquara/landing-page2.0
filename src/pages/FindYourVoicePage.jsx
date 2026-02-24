import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Zap, 
  Mic, 
  Shield, 
  CheckCircle2, 
  ArrowDown,
  MessageSquare,
  FileText,
  Calendar
} from 'lucide-react';

const FindYourVoicePage = () => {
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentResult, setAssessmentResult] = useState('');

  const handleAssessment = (answer) => {
    let result = '';
    if (answer === 'A') result = "You thrive in clarity but need tools for composure under pressure.";
    if (answer === 'B') result = "You have the ideas; we will help you find the authority to command the room.";
    if (answer === 'C') result = "You are ready for influence—let's refine your vocal signature.";
    
    setAssessmentResult(result);
    setAssessmentStep(1);
  };

  const programs = [
    {
      title: "Presence Amplifier™",
      tagline: "Build composure & gravitas",
      icon: Mic,
      path: "/programs-and-services/public-speaking-mastery/presence-amplifier",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Voice of Influence™",
      tagline: "Find your authentic tone",
      icon: Zap,
      path: "/programs-and-services/public-speaking-mastery/voice-of-influence",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Clarity in Action™",
      tagline: "Simplify complex thoughts",
      icon: Target,
      path: "/programs-and-services/executive-communication-coaching/clarity-in-action",
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      title: "Power–Vulnerability Matrix™",
      tagline: "Balance empathy with authority",
      icon: Shield,
      path: "/programs-and-services/executive-communication-coaching/power-vulnerability-matrix",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.4]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight tracking-tight">
            Your voice isn’t missing — <br />
            <span className="text-brand-blue italic font-light">it’s waiting to be heard.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-slate-500 max-w-3xl mx-auto leading-relaxed mb-10">
            Start your personal transformation journey with Eloqaura’s experiential coaching and reflection tools.
          </p>
          <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-xl hover:-translate-y-1">
            Book Your Discovery Call <ArrowRight className="ml-3" size={20} />
          </Link>
          <div className="mt-12 animate-bounce">
            <ArrowDown className="mx-auto text-slate-300" size={24} />
          </div>
        </div>
      </section>

      {/* 2. Interactive Self-Assessment */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm text-center">
                <Sparkles size={40} className="text-brand-blue mx-auto mb-8" />
                
                {assessmentStep === 0 ? (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-serif text-slate-900 mb-6">How confident are you in expressing your ideas under pressure?</h2>
                        <div className="grid grid-cols-1 gap-4 mt-12">
                            <button onClick={() => handleAssessment('A')} className="p-6 bg-white border border-slate-200 rounded-2xl text-left hover:border-brand-blue hover:text-brand-blue transition-all font-medium">
                                I know what to say, but I lose my composure.
                            </button>
                            <button onClick={() => handleAssessment('B')} className="p-6 bg-white border border-slate-200 rounded-2xl text-left hover:border-brand-blue hover:text-brand-blue transition-all font-medium">
                                I stay calm, but I struggle to command the room.
                            </button>
                            <button onClick={() => handleAssessment('C')} className="p-6 bg-white border border-slate-200 rounded-2xl text-left hover:border-brand-blue hover:text-brand-blue transition-all font-medium">
                                I communicate well, but I want more authentic influence.
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-up">
                        <h2 className="text-4xl font-serif text-slate-900 mb-8">Your Insight</h2>
                        <div className="text-2xl text-brand-blue font-light italic leading-relaxed mb-12">
                            "{assessmentResult}"
                        </div>
                        <button onClick={() => setAssessmentStep(0)} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-brand-navy transition-colors">
                            Take it again
                        </button>
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* 3. Individual Transformation Suite Overview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
                <h2 className="text-4xl font-serif text-slate-900 mb-6">The Individual Transformation Suite</h2>
                <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">Focused tracks to move you from hesitation to impact.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program, idx) => (
                    <Link 
                        key={idx} 
                        to={program.path}
                        className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-blue/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${program.bg} ${program.color} flex items-center justify-center mb-8 transition-colors group-hover:bg-brand-navy group-hover:text-white`}>
                            <program.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">{program.title}</h3>
                        <p className="text-slate-500 font-light mb-8 flex-grow">{program.tagline}</p>
                        <div className="pt-6 border-t border-slate-50 flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-navy">
                            Explore Curriculum <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 4. Impact Highlights */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl mb-16">Real Stories of Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { 
                        title: "Frontline Employee", 
                        before: "Feared presentations, felt unheard.", 
                        after: "Confidently drives daily huddles, inspiring their team." 
                    },
                    { 
                        title: "Young Professional", 
                        before: "Felt invisible in client discussions.", 
                        after: "Leads pitches with clarity and wins trust." 
                    },
                    { 
                        title: "Executive Leader", 
                        before: "Used defensive reactions in negotiations.", 
                        after: "Shifted to empathetic, outcome-driven dialogue." 
                    }
                ].map((story, i) => (
                    <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col">
                        <h4 className="font-bold text-slate-900 mb-8">{story.title}</h4>
                        <div className="space-y-6 flex-grow">
                            <div className="text-sm">
                                <span className="block uppercase tracking-widest font-bold text-red-400 text-[10px] mb-2">Before</span>
                                <p className="text-slate-500 italic">"{story.before}"</p>
                            </div>
                            <div className="text-sm">
                                <span className="block uppercase tracking-widest font-bold text-emerald-500 text-[10px] mb-2">After</span>
                                <p className="text-slate-900 font-medium">"{story.after}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Conversion Section - Light Theme for visibility */}
      <section className="py-24 md:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-100 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.4]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-slate-900">Transformation begins <br />with a conversation.</h2>
            <div className="flex justify-center mt-12">
                <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-xl hover:-translate-y-1">
                    <Calendar className="mr-3" size={18} /> Book Your Discovery Call
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default FindYourVoicePage;