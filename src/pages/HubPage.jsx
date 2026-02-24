import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Users, Mic, Briefcase, UserCheck, TrendingUp } from 'lucide-react';

const HubPage = ({ title, description, items }) => {
  // Icon mapping
  const iconMap = {
    Target: Target,
    Users: Users,
    Mic: Mic,
    Briefcase: Briefcase,
    UserCheck: UserCheck,
    TrendingUp: TrendingUp
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-slate-900 tracking-tight">{title}</h1>
            <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-light border-l-4 border-brand-blue pl-6">
                {description}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => {
             const IconComponent = item.icon ? iconMap[item.icon] : null;

             return (
                <Link key={item.path} to={item.path} className="group block bg-white rounded-[2rem] p-10 border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-500 flex flex-col items-start">
                  {/* Icon Container - Only render if icon exists */}
                  {IconComponent && (
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                  )}

                  {/* If no icon, show a fallback visual or keep clean layout */}
                  {!IconComponent && (
                      <div className="h-56 w-full bg-slate-50 rounded-2xl relative overflow-hidden mb-6">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="absolute bottom-4 left-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold font-sans text-slate-900 shadow-sm uppercase tracking-wider">
                            Program
                        </div>
                      </div>
                  )}

                  <div className="w-full">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                    {/* Only show description if available or generic text */}
                    <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed font-light text-lg">
                      Explore our comprehensive curriculum designed to elevate your skills in {item.title.toLowerCase()}. Tailored for impact and immediate application.
                    </p>
                    <span className="inline-flex items-center text-slate-900 font-sans font-bold text-xs uppercase tracking-widest group-hover:text-brand-blue transition-colors">
                      View Details <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default HubPage;