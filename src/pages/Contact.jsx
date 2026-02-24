import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;
    const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:kiranlingaraj@eloqaura.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 font-sans text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-50 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 border border-slate-100">
                Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">Get in Touch</h1>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Ready to transform your organization's communication culture? We are here to help you define your needs and design a path forward.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Information */}
          <div className="space-y-10 animate-fade-up delay-100">
            <div className="glass-card p-10 rounded-[2.5rem]">
                <h3 className="text-2xl font-serif text-slate-900 mb-8">Contact Information</h3>
                <div className="space-y-8">
                    <div className="flex items-start group">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mr-6 group-hover:scale-110 transition-transform">
                            <Mail size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 mb-1">Email Us</p>
                            <a href="mailto:kiranlingaraj@eloqaura.com" className="text-slate-500 hover:text-brand-blue transition-colors text-lg">kiranlingaraj@eloqaura.com</a>
                            <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider">We typically reply within 24 hours.</p>
                        </div>
                    </div>
                    <div className="flex items-start group">
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mr-6 group-hover:scale-110 transition-transform">
                            <Phone size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 mb-1">Call Us</p>
                            <p className="text-slate-500 text-lg">+91 7824005002</p>
                        </div>
                    </div>
                    <div className="flex items-start group">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mr-6 group-hover:scale-110 transition-transform">
                            <MapPin size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 mb-1">Visit Us</p>
                            <p className="text-slate-500 leading-relaxed">
                                Ooty, Tamilnadu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 animate-fade-up delay-200">
            <h3 className="text-3xl font-serif text-slate-900 mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all duration-300 font-medium" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all duration-300 font-medium" placeholder="Doe" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all duration-300 font-medium" placeholder="john@company.com" required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                    <div className="relative group">
                        <select id="subject" value={formData.subject} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all duration-300 font-medium appearance-none text-slate-700 cursor-pointer hover:bg-white hover:shadow-md pr-12">
                            <option>General Inquiry</option>
                            <option>Request a Proposal</option>
                            <option>Training Programs</option>
                            <option>Executive Coaching</option>
                        </select>
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-brand-blue transition-colors duration-300">
                            <ChevronDown size={18} strokeWidth={2} />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea id="message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all duration-300 font-medium resize-none" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-navy text-white font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-1 flex items-center justify-center group">
                    Send Message <Send size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;