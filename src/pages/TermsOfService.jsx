import React from 'react';
import SEOHead from '../components/SEOHead';

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 font-sans text-slate-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-50 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 border border-slate-100">
            Legal
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: May 2026</p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none space-y-8 animate-fade-up delay-100">
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">1. Services</h2>
            <p>Eloqaura provides communication training, coaching, and consulting services including but not limited to executive coaching, team workshops, public speaking training, and customised learning programs (&ldquo;Services&rdquo;). All Services are delivered through private, direct engagements with clients.</p>
            <p>By engaging our Services, you agree to these Terms of Service. If you are engaging on behalf of an organisation, you represent that you have authority to bind that organisation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">2. Engagement and Scope</h2>
            <p>The specific scope, duration, deliverables, and fees for each engagement will be outlined in a separate agreement, statement of work, or proposal (&ldquo;Engagement Agreement&rdquo;) signed by both parties. In the event of any conflict between these Terms and an Engagement Agreement, the Engagement Agreement shall prevail.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">3. Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="space-y-2">
              <li>Provide accurate and complete information necessary for the delivery of Services</li>
              <li>Ensure participants attend scheduled sessions and engage actively</li>
              <li>Provide a safe and suitable environment for in-person workshops</li>
              <li>Pay all fees in accordance with the agreed payment schedule</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>All materials, frameworks, methodologies, tools, and content provided by Eloqaura during the course of our engagement (&ldquo;Eloqaura Materials&rdquo;) are the intellectual property of Eloqaura. You are granted a non-exclusive, non-transferable license to use Eloqaura Materials solely for your internal business purposes.</p>
            <p>You may not reproduce, distribute, modify, or create derivative works from Eloqaura Materials without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">5. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of all proprietary information shared during the engagement. This includes but is not limited to coaching session content, business strategies, personal development goals, and organisational data.</p>
            <p>Eloqaura will not disclose any client-identifiable information without prior written consent, except as required by law. Session recordings, notes, and materials are stored securely and accessed only by authorised Eloqaura personnel.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">6. Cancellation and Refund Policy</h2>
            <p>Cancellation terms will be specified in each Engagement Agreement. As a general policy:</p>
            <ul className="space-y-2">
              <li>Scheduled coaching sessions may be rescheduled with at least 24 hours&rsquo; notice</li>
              <li>Workshop cancellations made more than 14 days before the scheduled date are eligible for a full refund</li>
              <li>Cancellations made within 14 days of the workshop date are non-refundable but may be rescheduled subject to availability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>Eloqaura&rsquo;s liability for any claim arising out of or relating to our Services shall not exceed the total fees paid by you for the specific engagement giving rise to the claim. In no event shall Eloqaura be liable for any indirect, incidental, or consequential damages, including loss of profits or business opportunities.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">8. No Guarantee of Outcomes</h2>
            <p>While we are committed to delivering high-quality training and coaching, Eloqaura does not guarantee specific outcomes or results from our Services. Individual results depend on participant engagement, organisational context, and other factors beyond our control.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ooty, Tamilnadu.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">10. Contact</h2>
            <p>For questions about these Terms, please contact us:</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
              <p className="font-bold text-slate-900">Eloqaura</p>
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

export default TermsOfService;
