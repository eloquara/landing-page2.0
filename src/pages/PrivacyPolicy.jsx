import React from 'react';
import SEOHead from '../components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 font-sans text-slate-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-50 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 border border-slate-100">
            Legal
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: May 2026</p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none space-y-8 animate-fade-up delay-100">
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">1. Who We Are</h2>
            <p>Eloqaura is a communication training and coaching consultancy based in Ooty, Tamilnadu, India. We provide executive coaching, team workshops, public speaking training, and customised learning programs to individuals and organisations.</p>
            <p>We deliver our services through direct, private training sessions — we do not operate any public platform, online community, or data processing system that handles user-generated content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">2. Information We Collect</h2>
            <p>We collect only the information you choose to share with us directly:</p>
            <ul className="space-y-2">
              <li><strong>Contact information:</strong> name, email address, phone number, and organisation name when you submit our contact form or book a discovery call.</li>
              <li><strong>Communication data:</strong> notes, feedback, and materials shared during coaching sessions and workshops (with your explicit consent).</li>
              <li><strong>Website usage data:</strong> anonymous, aggregated analytics (page views, browser type) collected via standard hosting logs. We do not use cookies for tracking or marketing purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p>Your information is used solely for the purpose of delivering our training services:</p>
            <ul className="space-y-2">
              <li>To respond to your enquiries and book coaching sessions</li>
              <li>To deliver and improve our training programs</li>
              <li>To send administrative communications about your sessions</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties. We do <strong>not</strong> use your data for marketing automation or advertising.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">4. Data Storage and Security</h2>
            <p>All session materials, coaching notes, and personal information are stored securely and accessed only by authorised Eloqaura personnel. We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, or destruction.</p>
            <p>Session content and participant materials are retained only for the duration of our engagement and for a reasonable period thereafter to support follow-up coaching, unless otherwise agreed in writing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">5. No Public Data Processing</h2>
            <p>Eloqaura does <strong>not</strong> operate any public platform, forum, social network, or content management system that processes user-generated content. Our services are delivered entirely through private, direct training engagements. We do not collect, store, or process any data from the general public beyond the contact information voluntarily provided through our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:kiranlingaraj@eloqaura.com" className="text-brand-blue hover:underline">kiranlingaraj@eloqaura.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">7. Third-Party Services</h2>
            <p>Our website is hosted on GitHub Pages and uses Google Fonts for typography. These services have their own privacy policies. We do not integrate any third-party analytics, advertising, or tracking services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how your data is handled, please contact us:</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
              <p className="font-bold text-slate-900">Kiran Lingaraj</p>
              <p>Email: <a href="mailto:kiranlingaraj@eloqaura.com" className="text-brand-blue hover:underline">kiranlingaraj@eloqaura.com</a></p>
              <p>Phone: +91 7824005002</p>
              <p>Location: Ooty, Tamilnadu, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
