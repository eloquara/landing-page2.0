import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';

const CaseStudyDetail = () => {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock Data for the prototype (in a real app, this would come from a backend)
  const caseStudies = {
    'university-partnership': {
      title: 'University Partnership',
      subtitle: 'From Classroom Anxiety to National Recognition',
      challenge: 'Students possessed brilliant academic minds but struggled to articulate complex arguments under pressure. Confidence gaps were leading to missed opportunities in competitive debates and future career interviews.',
      solution: 'Eloqaura implemented a "Cognitive Resilience" curriculum, focusing on structuring thought before speaking. We introduced simulated high-pressure environments and peer-feedback loops to normalize public speaking anxiety.',
      results: [
        { label: 'National Award', value: '1st Place' },
        { label: 'Student Confidence', value: '+85%' },
        { label: 'Program Growth', value: '3x' }
      ],
      quote: "This program didn't just teach us how to debate; it taught us how to believe in our own voices."
    },
    'civic-programme': {
      title: 'Civic Programme',
      subtitle: 'Bridging the Gap Between Citizens and Governance',
      challenge: 'Local town hall meetings were unproductive, dominated by conflict and misunderstanding. Citizens felt unheard, and officials struggled to communicate complex policies effectively.',
      solution: 'We deployed the "Dialogue for Democracy" framework. Training both officials and community leaders in active listening and structured argumentation transformed town halls from battlegrounds into collaborative workshops.',
      results: [
        { label: 'Meeting Attendance', value: '+40%' },
        { label: 'Policy Approval', value: 'Fast-Tracked' },
        { label: 'Public Trust Score', value: 'High' }
      ],
      quote: "Finally, we are speaking the same language. The gridlock is gone."
    },
    'non-profit-impact': {
      title: 'Non-Profit Impact',
      subtitle: 'Scaling Influence Through Strategic Storytelling',
      challenge: 'A vital NGO was struggling to secure long-term funding due to inconsistent messaging. Their impact was real, but their story was lost in technical jargon and dry reports.',
      solution: 'Eloqaura worked with leadership to craft a "Core Narrative." We trained their team to shift from reporting stats to telling human-centric stories that resonated emotionally with donors and policymakers.',
      results: [
        { label: 'Funding Secured', value: '$2.5M' },
        { label: 'Donor Retention', value: '+60%' },
        { label: 'Media Mentions', value: '15+' }
      ],
      quote: "Our work hasn't changed, but the world's perception of it has transformed completely."
    }
  };

  const story = caseStudies[id] || caseStudies['university-partnership'];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-600">
      {/* 1. Cinematic Hero - Light Editorial Style */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 will-change-transform"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center animate-fade-up">
            <Link to="/our-impact" className="inline-flex items-center text-slate-400 hover:text-brand-navy transition-colors mb-12 text-xs font-bold uppercase tracking-widest">
                <ArrowLeft size={16} className="mr-2" /> Back to Impact
            </Link>
            <span className="block text-brand-blue font-serif italic text-2xl mb-6">Case Study</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 font-bold mb-8 leading-tight tracking-tight">{story.title}</h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                {story.subtitle}
            </p>
        </div>
      </section>

      {/* 2. Challenge vs Solution */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mr-4">
                        <Target size={24} />
                    </div>
                    <h2 className="text-3xl font-serif text-slate-900">The Challenge</h2>
                </div>
                <p className="text-lg leading-relaxed text-slate-600">
                    {story.challenge}
                </p>
            </div>
            
            <div>
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mr-4">
                        <CheckCircle2 size={24} />
                    </div>
                    <h2 className="text-3xl font-serif text-slate-900">The Solution</h2>
                </div>
                <p className="text-lg leading-relaxed text-slate-600">
                    {story.solution}
                </p>
            </div>
        </div>
      </section>

      {/* 3. Impact Metrics */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">Measurable Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {story.results.map((result, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm text-center border border-slate-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                        <span className="block text-5xl md:text-6xl font-serif font-bold text-brand-blue mb-2">{result.value}</span>
                        <span className="text-slate-500 font-medium">{result.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. Testimonial */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-6xl text-brand-blue/20 font-serif mb-8">&ldquo;</div>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                {story.quote}
            </h2>
            <div className="w-12 h-1 bg-brand-blue mx-auto"></div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-brand-navy text-center">
        <h2 className="text-white text-3xl font-serif mb-8">Ready to write your own success story?</h2>
        <Link to="/contact" className="inline-block bg-brand-blue text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-xl">
            Start Your Project
        </Link>
      </section>
    </div>
  );
};

export default CaseStudyDetail;