import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [assistantName, setAssistantName] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const quickQueries = [
    "How can I contact you?",
    "Tell me about your methodology",
    "What courses do you offer?",
    "Do you offer executive coaching?",
    "I want to improve public speaking",
    "Where is your office located?",
    "Book a diagnostic call",
    "View your impact stories"
  ];

  useEffect(() => {
    const names = ['Sarah', 'Michael', 'Emma', 'James', 'Olivia', 'Robert', 'Sophia', 'David', 'Isabella', 'John', 'Mia', 'William'];
    let storedName = sessionStorage.getItem('eloqaura_assistant');
    
    if (!storedName) {
        storedName = names[Math.floor(Math.random() * names.length)];
        sessionStorage.setItem('eloqaura_assistant', storedName);
    }
    setAssistantName(storedName);
    setMessages([{ id: 1, type: 'bot', text: `Hello! I am ${storedName}. How can I help you transform your communication today?` }]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Add User Message
    const userMsg = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate Bot Response
    setTimeout(() => {
      let botResponse = { text: "I'd love to help with that. Could you tell me a bit more about your specific needs?", action: null };
      const lowerText = text.toLowerCase();
      
      // Logic for Navigation & Rich Responses
      if (lowerText.includes("course") || lowerText.includes("offer") || lowerText.includes("training") || lowerText.includes("program")) {
        botResponse = {
            text: "We offer four main types of training to help you communicate better:\n\n**1. For Executives:** Coaching to help leaders speak with authority.\n**2. For Teams:** Workshops to help coworkers trust each other and collaborate.\n**3. Public Speaking:** Training to help you present without fear.\n**4. Custom:** We can build a specific plan just for your company.",
            action: { label: "See Full List", path: "/programs-and-services" }
        };
      } else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("reach") || lowerText.includes("office")) {
        botResponse = {
            text: "You can reach us directly via email or phone. We are here to help.\n\n**Email:** kiranlingaraj@eloqaura.com\n**Phone:** +91 7824005002",
            action: { label: "Go to Contact Page", path: "/contact" }
        };
      } else if (lowerText.includes("benefit") || lowerText.includes("value") || lowerText.includes("why")) {
        botResponse = {
            text: "Here is how we help you:\n\n**1. Less Stress:** We teach you how to think clearly so you don't panic under pressure.\n**2. Better Results:** When you speak clearly, people listen and act.\n**3. Stronger Teams:** We fix the misunderstandings that slow projects down.",
            action: { label: "See Real Results", path: "/our-impact" }
        };
      } else if (lowerText.includes("book") || lowerText.includes("schedul") || lowerText.includes("consult") || lowerText.includes("diagnostic")) {
        botResponse = {
            text: "The best way to start is a quick chat. We call it a 'Diagnostic'.\n\nIt's a 30-minute call where we listen to your challenges and tell you if we can help. No pressure.",
            action: { label: "Book a Call", path: "/contact" }
        };
      } else if (lowerText.includes("method") || lowerText.includes("think") || lowerText.includes("philosophy") || lowerText.includes("approach")) {
        botResponse = {
            text: "Most training focuses on **what to say**. We focus on **how you think**.\n\nIf your thinking is clear, your speech will be clear. We help you organize your thoughts before you even open your mouth.",
            action: { label: "Read Our Philosophy", path: "/our-thinking" }
        };
      } else if (lowerText.includes("exec") || lowerText.includes("leader") || lowerText.includes("coach")) {
        botResponse = {
            text: "**Executive Coaching** is for leaders who need to influence others.\n\nWe help you stop rambling and start speaking with precision, so your team understands your vision immediately.",
            action: { label: "View Executive Details", path: "/programs-and-services/executive-communication-coaching" }
        };
      } else if (lowerText.includes("public") || lowerText.includes("speak") || lowerText.includes("present")) {
        botResponse = {
            text: "**Public Speaking** isn't about memorizing a script. It's about connecting.\n\nWe teach you how to tell stories that keep people listening, so you can walk onto any stage with confidence.",
            action: { label: "View Speaking Program", path: "/programs-and-services/public-speaking-mastery" }
        };
      } else if (lowerText.includes("team") || lowerText.includes("workshop") || lowerText.includes("collab")) {
        botResponse = {
            text: "**Team Workshops** are for groups that aren't working well together.\n\nWe fix the 'silos' where people don't talk to each other. We teach your team how to disagree without fighting.",
            action: { label: "View Team Options", path: "/programs-and-services/team-communication-workshops" }
        };
      } else if (lowerText.includes("impact") || lowerText.includes("result") || lowerText.includes("story") || lowerText.includes("case")) {
        botResponse = {
            text: "We have helped thousands of people.\n\n• Employees who were afraid to speak up now lead meetings.\n• Executives who were too aggressive are now great listeners.\n• Non-profits are getting more funding because they tell better stories.",
            action: { label: "Read Success Stories", path: "/our-impact" }
        };
      } else if (lowerText.includes("process") || lowerText.includes("work") || lowerText.includes("step")) {
        botResponse = {
            text: "Our process is simple:\n\n1. **Listen:** We learn about your problem.\n2. **Plan:** We build a specific training for you.\n3. **Train:** We practice in real-life scenarios.\n4. **Check:** We make sure the skills stick.",
            action: { label: "See The Steps", path: "/our-process" }
        };
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', ...botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end font-sans pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`bg-white/90 backdrop-blur-md border border-white/50 shadow-2xl rounded-[2rem] overflow-hidden w-[350px] md:w-[400px] mb-4 transition-all duration-500 origin-bottom-right will-change-[transform,opacity]
        ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-brand-navy p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center relative">
                    <Sparkles size={20} className="text-brand-lightBlue" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-brand-navy"></div>
                </div>
                <div>
                    <h3 className="font-serif font-bold text-lg leading-none text-white">{assistantName}</h3>
                    <span className="text-xs text-brand-lightBlue uppercase tracking-wider font-bold mt-1 block">Online</span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={20} />
            </button>
        </div>

        {/* Messages Area */}
        <div className="h-[400px] overflow-y-auto p-6 bg-slate-50 space-y-4 scroll-smooth">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                        ${msg.type === 'user' 
                            ? 'bg-brand-blue text-white rounded-br-none' 
                            : 'bg-white text-slate-600 border border-slate-100 rounded-bl-none'
                        }`}
                    >
                        {msg.text.split('\n').map((line, i) => (
                            <span key={i} className="block min-h-[1.2em]">
                                {line.split(/(\*\*.*?\*\*)/).map((part, j) => 
                                    part.startsWith('**') && part.endsWith('**') 
                                        ? <strong key={j} className="font-bold text-slate-900">{part.slice(2, -2)}</strong> 
                                        : part
                                )}
                            </span>
                        ))}
                    </div>
                    {/* Render Action Button if exists */}
                    {msg.action && (
                        <button 
                            onClick={() => handleNavigation(msg.action.path)}
                            className="mt-2 ml-2 flex items-center space-x-2 px-4 py-2 bg-brand-navy text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-blue transition-all shadow-md hover:shadow-lg animate-fade-up"
                        >
                            <span>{msg.action.label}</span>
                            <ArrowRight size={12} />
                        </button>
                    )}
                </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-100 flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Quick Queries */}
        <div className="px-6 py-3 bg-white border-t border-slate-100 overflow-x-auto flex space-x-2 scrollbar-hide">
            {quickQueries.map((q, i) => (
                <button 
                    key={i} 
                    onClick={() => handleSend(q)}
                    className="flex-shrink-0 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
                >
                    {q}
                </button>
            ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder={`Ask ${assistantName}...`}
                className="flex-grow bg-slate-50 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-slate-400"
            />
            <button 
                onClick={() => handleSend(input)}
                className="p-3 bg-brand-navy text-white rounded-xl hover:bg-brand-blue transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
            >
                <Send size={18} />
            </button>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group relative
            ${isOpen ? 'bg-white text-slate-900 rotate-90' : 'bg-brand-navy text-white hover:bg-brand-blue'}`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="fill-current" />}
        
        {/* Pulse Effect */}
        {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-20 duration-1000"></span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
