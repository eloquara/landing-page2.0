import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Mic, 
  Zap, 
  Target, 
  Shield, 
  ArrowDown
} from 'lucide-react';

const IndividualTransformationPage = () => {
  return (
    <div className="bg-white font-sans text-slate-600">
      
      {/* 1. Hero Section - Tightened */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50/50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.4]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white border border-slate-200 text-brand-blue font-bold text-xs uppercase tracking-[0.2em] mb-8 shadow-sm animate-fade-in">
            Our Impact → Individual Transformation
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight tracking-tight animate-fade-up">
            From Finding a Voice to <br />
            <span className="text-brand-blue italic font-light">Making It Heard</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-slate-500 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-100">
            Because when one person transforms, everything around them changes. We help you move from hesitation to influence.
          </p>
          <div className="mt-10 animate-bounce">
            <ArrowDown className="mx-auto text-slate-300" size={24} />
          </div>
        </div>
      </section>

      {/* 2. Journey Copy - Tightened Layout */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif text-slate-900 leading-snug font-light">
                    Every individual carries a spark — yet too often it remains unheard. We help you move from self-doubt to clarity, and from silence to impact.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 text-red-400 font-bold uppercase tracking-widest text-[10px] mb-6">
                        <XCircle size={14} /> <span>The Starting Point</span>
                    </div>
                    <p className="text-xl italic text-slate-500 font-serif leading-relaxed mb-0">
                        "Struggling to express ideas, overlooked in meetings, lacking confidence in high-pressure situations."
                    </p>
                </div>
                <div className="bg-brand-navy p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 text-brand-lightBlue font-bold uppercase tracking-widest text-[10px] mb-6">
                        <CheckCircle2 size={14} /> <span>The Transformation</span>
                    </div>
                    <p className="text-xl font-medium font-serif leading-relaxed mb-0">
                        "Speaking with conviction, influencing decisions, and being recognised as a trusted voice of clarity."
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. The Path to Impact - Redesigned to fix blank space */}
      <section className="py-20 md:py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-3">The Journey of Becoming</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">A cohesive progression from voice to victory</p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 hidden lg:block"></div>

                <div className="space-y-8 md:space-y-12">
                    {[
                        { 
                            title: "Voice Found", 
                            desc: "Uncovering the authentic core beneath the hesitation. We help you identify the unique message that only you can deliver.", 
                            icon: Sparkles, 
                            color: "text-rose-500", 
                            bg: "bg-rose-50" 
                        },
                        { 
                            title: "Confidence Built", 
                            desc: "Replacing 'fake it till you make it' with grounded certainty. Build the internal composure that holds steady under pressure.", 
                            icon: Shield, 
                            color: "text-emerald-500", 
                            bg: "bg-emerald-50" 
                        },
                        { 
                            title: "Influence Gained", 
                            desc: "Learning the mechanics of persuasion and connection. Master the tools that turn ideas into collective movement.", 
                            icon: Zap, 
                            color: "text-purple-500", 
                            bg: "bg-purple-50" 
                        },
                        { 
                            title: "Impact Achieved", 
                            desc: "Driving outcomes and inspiring others to act. Recognition as a trusted voice of clarity in any room or stage.", 
                            icon: Target, 
                            color: "text-cyan-500", 
                            bg: "bg-cyan-50" 
                        }
                    ].map((step, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                            {/* Card */}
                            <div className="w-full lg:w-[45%]">
                                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${step.bg} rounded-bl-full opacity-50 -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150`}></div>
                                    <div className={`w-12 h-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 relative z-10`}>
                                        <step.icon size={24} />
                                    </div>
                                    <h4 className="text-2xl font-serif text-slate-900 mb-3">{step.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-light text-sm md:text-base">{step.desc}</p>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="hidden lg:flex w-[10%] justify-center relative z-20">
                                <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md transition-all duration-500 ${step.bg.replace('bg-', 'bg-') === 'bg-rose-50' ? 'bg-rose-500' : step.bg.replace('bg-', 'bg-') === 'bg-emerald-50' ? 'bg-emerald-500' : step.bg.replace('bg-', 'bg-') === 'bg-purple-50' ? 'bg-purple-500' : 'bg-cyan-500'}`}></div>
                            </div>

                            {/* Spacer */}
                            <div className="hidden lg:block lg:w-[45%]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. Impact Stories - Tightened */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-serif text-3xl md:text-4xl text-slate-900 mb-16 tracking-tight">Observable Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {[
                    { 
                        title: "Frontline Employee", 
                        text: "Once feared presentations, now confidently drives daily huddles, inspiring their team." 
                    },
                    { 
                        title: "Young Professional", 
                        text: "Felt invisible in client discussions; now leads pitches with clarity and wins trust." 
                    },
                    { 
                        title: "Executive Leader", 
                        text: "Shifted from defensive reactions to empathetic, outcome-driven dialogue — changing the deal’s trajectory." 
                    }
                ].map((story, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                            <Sparkles size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-3">{story.title}</h4>
                        <p className="text-slate-500 leading-relaxed font-light text-sm md:text-base">{story.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Final CTA - Light Theme for visibility */}
      <section className="py-24 md:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.4]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-slate-900">Ready to step onto <br />the path?</h2>
            <Link to="/individual-transformation/find-your-voice" className="inline-flex items-center px-10 py-5 bg-brand-navy text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue transition-all shadow-xl hover:-translate-y-1 group">
                Find Your Voice <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
        </div>
      </section>

    </div>
  );
};

export default IndividualTransformationPage;