import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Mic, Target, Zap, ChevronRight, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-32 md:pb-64">
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-2xl animate-blob -z-10 will-change-transform"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-2xl animate-blob animation-delay-2000 -z-10 will-change-transform"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight text-slate-900 leading-[1.05] mb-8 animate-fade-up delay-100">
                Master the Art of <br />
                <span className="text-brand-blue italic relative inline-block">
                  Influence.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue/10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-lg leading-relaxed font-light animate-fade-up delay-200 text-balance">
                Bridging the gap between intent and impact. We empower leaders to speak with clarity, conviction, and purpose.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up delay-300">
                <Link to="/programs-and-services" className="px-10 py-5 bg-brand-navy hover:bg-slate-800 text-white rounded-full font-sans font-bold text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 ring-4 ring-transparent hover:ring-brand-navy/20">
                  Explore Programs
                </Link>
                <Link to="/contact" className="px-10 py-5 bg-white border border-slate-200 hover:border-brand-navy text-slate-600 hover:text-brand-navy rounded-full font-sans font-bold text-sm uppercase tracking-widest transition-all hover:bg-slate-50">
                  Partner With Us
                </Link>
              </div>
            </div>
             
             {/* Abstract Visual */}
             <div className="md:w-5/12 relative hidden md:block animate-fade-up delay-400">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-[3rem] filter blur-lg transform scale-105"></div>
                <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border border-slate-100">
                   <div className="relative rounded-[2.5rem] overflow-hidden h-[600px] w-full group">
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <img 
                        src="/images/corporate-meeting.webp" 
                        alt="Corporate meeting" 
                        className="object-cover h-full w-full opacity-95 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                        loading="eager"
                      />
                      <div className="absolute bottom-8 left-8 z-20 text-white">
                        <p className="font-serif text-2xl italic">"Clarity is power."</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 md:flex md:justify-between md:items-end border-b border-slate-200 pb-10">
            <div className="md:w-2/3">
                <h2 className="text-brand-blue font-sans font-bold uppercase tracking-widest text-xs mb-4">Our Expertise</h2>
                <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">Comprehensive <br />Training Solutions</h3>
            </div>
            <div className="mt-8 md:mt-0">
                <Link to="/programs-and-services" className="group text-slate-900 font-sans font-bold text-sm uppercase tracking-widest hover:text-brand-blue flex items-center transition-colors">
                    View all programs <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                title: "Team Workshops", 
                desc: "Unlock collective intelligence. Build psychological safety and cohesive performance through our 'Listening Lab' series.",
                link: "/programs-and-services/team-communication-workshops",
                delay: "delay-0"
              },
              { 
                icon: Mic, 
                title: "Public Speaking", 
                desc: "Command the room. From 'Presence Amplifier' to 'Storytelling Blueprint,' we turn nervous speakers into captivating orators.",
                link: "/programs-and-services/public-speaking-mastery",
                delay: "delay-100"
              },
              { 
                icon: Target, 
                title: "Executive Coaching", 
                desc: "Precision guidance for top-tier leaders. Refine your executive presence and strategic communication style.",
                link: "/programs-and-services/executive-communication-coaching",
                delay: "delay-200"
              }
            ].map((service, idx) => (
              <div key={idx} className={`glass-card p-10 rounded-[2.5rem] group relative overflow-hidden animate-fade-up ${service.delay}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100%] transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-blue/5 -z-10"></div>
                
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-10 text-brand-navy shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-3xl font-serif text-slate-900 mb-6 group-hover:text-brand-blue transition-colors">{service.title}</h4>
                <p className="text-slate-500 mb-10 leading-relaxed font-light text-lg">
                  {service.desc}
                </p>
                
                <Link to={service.link} className="inline-flex items-center text-slate-900 font-sans font-bold text-xs uppercase tracking-widest group-hover:text-brand-blue transition-colors">
                  Learn more <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Teaser - Parallax-like Feel */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative order-2 lg:order-1">
                    <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-10 leading-[1.1]">
                        Communication is the <span className="italic text-brand-blue">Currency</span> of Leadership.
                    </h2>
                    <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light">
                        We believe that how you say it is just as important as what you say. Our philosophy is rooted in the psychology of connection. We don't just teach skills; we transform mindsets.
                    </p>
                    <Link to="/our-thinking" className="inline-block border-b-2 border-brand-navy text-brand-navy font-sans font-bold pb-1 hover:text-brand-blue hover:border-brand-blue transition-colors text-sm uppercase tracking-widest">
                        Read Our Thinking
                    </Link>
                </div>
                <div className="bg-slate-50 p-16 rounded-[3rem] relative order-1 lg:order-2 shadow-2xl border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-700">
                    <div className="text-brand-blue/10 absolute top-8 left-8 text-[12rem] leading-none font-serif select-none -z-10">"</div>
                    <blockquote className="text-3xl md:text-4xl font-serif text-slate-800 leading-tight mb-10 relative z-10">
                        The single biggest problem in communication is the illusion that it has taken place.
                    </blockquote>
                    <div className="flex items-center">
                        <div className="w-12 h-px bg-slate-300 mr-4"></div>
                        <cite className="not-italic font-sans font-bold text-slate-400 uppercase tracking-widest text-xs">George Bernard Shaw</cite>
                    </div>
                </div>
         </div>
         </div>
      </section>

      {/* Testimonials - Dark Contrast */}
      <section className="py-32 bg-brand-navy text-white rounded-t-[4rem] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cubes.png')] opacity-5"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-center font-serif text-4xl md:text-5xl mb-24">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {[
                    {
                        quote: "Eloqaura's 'Conflict to Collaboration' workshop was a turning point for our department. We went from siloed operations to a truly unified front.",
                        author: "Sarah Jenkins",
                        role: "VP of Operations, TechFlow Inc.",
                        initials: "SJ"
                    },
                    {
                        quote: "The executive coaching gave me the tools to navigate a complex merger. I learned to articulate my vision in a way that inspired confidence.",
                        author: "Michael Ross",
                        role: "CEO, Horizon Structures",
                        initials: "MR"
                    }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex mb-8 text-brand-lightBlue gap-1">
                            {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                        </div>
                        <p className="text-xl md:text-2xl text-slate-200 font-serif leading-relaxed mb-10">"{item.quote}"</p>
                        <div className="flex items-center">
                            <div className="w-16 h-16 bg-white text-brand-navy rounded-full mr-6 flex items-center justify-center font-bold text-xl font-serif shadow-lg">
                                {item.initials}
                            </div>
                            <div>
                                <p className="font-sans font-bold text-white tracking-wide">{item.author}</p>
                                <p className="text-xs font-sans text-brand-lightBlue uppercase tracking-wider mt-1">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* CTA - Big Impact */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-6xl md:text-8xl font-serif text-slate-900 mb-10 leading-[0.9] tracking-tighter">
                Ready to Elevate <br /><span className="text-brand-blue italic">Your Impact?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-16 max-w-xl mx-auto font-light leading-relaxed">
                Join the ranks of transformed leaders and cohesive teams. Let's start the conversation.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-navy text-white hover:scale-110 transition-transform duration-300 shadow-2xl hover:shadow-brand-blue/50 group">
                <ArrowRight size={32} className="group-hover:-rotate-45 transition-transform duration-500" />
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">Get Started</p>
        </div>
      </section>
    </div>
  );
};

export default Home;