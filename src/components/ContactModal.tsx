"use client";

import { X, Send, AlertCircle, Briefcase, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    salary: "",
    message: "",
    type: "hiring"
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using FormSubmit.co for email handling without backend SMTP
      const response = await fetch("https://formsubmit.co/ajax/support@therealbeluga.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Portfolio Inquiry: ${formData.type.toUpperCase()} from ${formData.name}`,
          _template: "table",
          ...formData
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: "", company: "", contact: "", salary: "", message: "", type: "hiring" });
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      // Fallback to mailto if API fails
      let subject = "";
      let body = "";

      if (formData.type === "freelance") {
        subject = `Freelance Inquiry from ${formData.name}`;
            body = `Name: ${formData.name}%0D%0AContact: ${formData.contact}%0D%0AProject Type: Freelance/Contract%0D%0ABudget: ${formData.salary}%0D%0A%0D%0ADetails:%0D%0A${formData.message}%0D%0A%0D%0APS: I know you're expensive, but I'm desperate.`;
      } else if (formData.type === "idea") {
            subject = `Collaboration App Idea from ${formData.name}`;
            body = `Name: ${formData.name}%0D%0AContact: ${formData.contact}%0D%0AType: "The Next Big Thing"%0D%0AEquity/Budget: ${formData.salary}%0D%0A%0D%0APitch:%0D%0A${formData.message}%0D%0A%0D%0APS: I will sign an NDA if you promise to actually build it.`;
      } else {
            subject = `Hiring Inquiry from ${formData.name} (${formData.company})`;
            body = `Name: ${formData.name}%0D%0AContact: ${formData.contact}%0D%0ACompany: ${formData.company}%0D%0ASalary Budget: ${formData.salary}%0D%0A%0D%0AMessage:%0D%0A${formData.message}%0D%0A%0D%0APS: I promise not to ask about SOLID principles.`;
      }
      window.location.href = `mailto:support@therealbeluga.com?subject=${subject}&body=${body}`;
      setStatus('idle');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-purple-500/30 rounded-lg shadow-[0_0_50px_rgba(168,85,247,0.1)] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-zinc-800">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-500" />
                Let's Do Business
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* The Rant Section */}
              <div className="bg-purple-900/10 border border-purple-500/20 p-5 rounded-lg space-y-4 min-h-[200px]">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                  <div className="space-y-3 text-sm md:text-base text-gray-300">
                    <p className="font-bold text-white">
                      {formData.type === 'hiring' && "⚠️ INTERVIEW PROTOCOL:"}
                      {formData.type === 'freelance' && "⚠️ FREELANCE TERMS:"}
                      {formData.type === 'idea' && "⚠️ REALITY CHECK:"}
                    </p>

                    {formData.type === 'hiring' && (
                      <div className="space-y-3">
                        <p>
                          Do <span className="text-red-400 font-bold decoration-red-500 underline decoration-wavy">NOT</span> ask me about SOLID principles.
                          I have <span className="text-purple-400 font-bold">3+ years of survival experience</span> across:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-zinc-400 font-mono text-xs">
                          <li>Service-based sweatshops (I survived).</li>
                          <li>Chaotic Startups (I fixed production on Fridays).</li>
                          <li>Product-based companies (I attended meetings).</li>
                        </ul>
                         <p className="italic border-l-2 border-purple-500 pl-3 py-1 bg-purple-500/5">
                            "This portfolio &gt; Your Resume parsing ATS."
                         </p>
                      </div>
                    )}

                    {formData.type === 'freelance' && (
                      <div className="space-y-3">
                        <p>
                          I deliver exactly what you ask for, plus 20% extra sarcasm.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-zinc-400 font-mono text-xs">
                           <li>If you want <strong>shit</strong>, I give you the <strong>worst shit</strong> possible.</li>
                           <li>If you want <strong>gold</strong>, I'll deliver <strong>diamond</strong> (and charge accordingly).</li>
                           <li>No "exposure" bucks. My landlord doesn't accept "good vibes".</li>
                        </ul>
                      </div>
                    )}

                     {formData.type === 'idea' && (
                      <div className="space-y-3">
                        <p>
                          I will listen to your "Next Facebook" idea, but I have conditions.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-zinc-400 font-mono text-xs">
                           <li>I will sign your NDA (No One Cares Agreement).</li>
                           <li>If it's "Uber for Hamsters", I'm doubling my rate.</li>
                           <li>I build MVP (Minimum Viable Product), not MFP (Maximum Fantasy Project).</li>
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 p-3 bg-red-950/30 border border-red-500/30 rounded text-xs text-red-200">
                      <p className="font-bold flex items-center gap-2">
                        <span className="line-through opacity-50">LinkedIn</span> (BANNED) 🚫
                      </p>
                      <p className="mt-1">
                         Banned for scraping/engineering. Email is the only way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1">
                   <label className="text-xs font-mono text-gray-500 uppercase">Why are you here?</label>
                   <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'hiring', label: 'Hire Me (Job)' },
                        { id: 'freelance', label: 'Freelance Gig' },
                        { id: 'idea', label: 'I Have an Idea' }
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({...formData, type: type.id})}
                          className={`p-3 text-xs font-bold uppercase tracking-wider border transition-all
                            ${formData.type === type.id 
                              ? 'bg-purple-600 text-white border-purple-600' 
                              : 'bg-zinc-950 text-gray-500 border-zinc-800 hover:border-purple-500/50'
                            }`}
                        >
                          {type.label}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-gray-500 uppercase">Who are you?</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded p-3 text-white outline-none transition-colors"
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-gray-500 uppercase">
                       {formData.type === 'idea' ? 'Project Name' : 'Company'}
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder={formData.type === 'idea' ? "Uber for Cats" : "Company Inc."}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded p-3 text-white outline-none transition-colors"
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">Contact Info</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Email / Phone Number" 
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded p-3 text-white outline-none transition-colors"
                    onChange={e => setFormData({...formData, contact: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">
                    {formData.type === 'freelance' ? 'Project Budget' : formData.type === 'idea' ? 'Equity / Budget' : 'Salary Budget'}
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="$1M (Be serious)" 
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-500/50 rounded p-3 text-white outline-none transition-colors"
                    onChange={e => setFormData({...formData, salary: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder={formData.type === 'idea' ? "Pitch me your billion dollar idea..." : "Tell me when I start..."}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded p-3 text-white outline-none transition-colors resize-none"
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-purple-400 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : status === 'success' ? (
                    <span>Sent! (Mocked)</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {formData.type === 'freelance' ? 'Send Freelance Offer' : formData.type === 'idea' ? 'Pitch Idea' : 'Send Job Offer'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
