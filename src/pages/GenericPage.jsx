import React from 'react';

const GenericPage = ({ title, subtitle, children }) => {
  return (
    <div className="pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-navy mb-6">{title}</h1>
          {subtitle && <p className="text-xl text-slate-500 mb-10 leading-relaxed">{subtitle}</p>}
          
          <div className="prose prose-lg prose-slate text-slate-600">
            {children ? children : (
              <>
                <p>
                  At Eloqaura, we are dedicated to excellence in every aspect of our work. This page outlines our commitment to {title.toLowerCase()} and how it impacts our clients.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3>Our Approach</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul>
                    <li>Strategic Alignment</li>
                    <li>Evidence-based Methodologies</li>
                    <li>Measurable Outcomes</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;