"use client";

import { motion, Variants } from "framer-motion";

const glitchAnimation: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

import { ContactModal } from "./ContactModal";
import { useState } from "react";

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={glitchAnimation}
        className="relative z-10"
      >
        <div className="mb-8 inline-block px-4 py-2 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 text-xs font-mono uppercase tracking-widest animate-pulse">
          ⚠ Warning: Ego overflow detected
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-6 text-white leading-none">
          THE REAL <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient bg-[length:200%_auto]">
            BELUGA
          </span>
        </h1>

        <p className="text-sm md:text-base text-purple-400 font-mono mb-4 tracking-widest uppercase">
          Created by <span className="font-bold text-white border-b-2 border-purple-500">Mayank Sharma</span> (The Real Human)
        </p>
        
        <p className="text-xl md:text-3xl text-gray-400 font-mono mb-10 max-w-3xl mx-auto leading-relaxed">
          I turn caffeine into <span className="line-through decoration-red-500">code</span> legacy debt.
        </p>

        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 max-w-2xl mx-auto mb-10 text-left font-mono text-sm md:text-base text-gray-300 shadow-2xl">
          <p className="mb-2 text-purple-400 font-bold">$ whoami</p>
          <ul className="space-y-3 list-disc pl-5 marker:text-purple-600">
            <li>Full Stack Dev (I can center a div AND crash a database).</li>
            <li>AI Enthusiast (I write prompts and pretend it's engineering).</li>
            <li>Cloud Architect (I build things that cost $200/day to idle).</li>
            <li>Professional Googler (StackOverflow is my co-pilot).</li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <button 
               onClick={() => setIsContactOpen(true)}
               className="group w-full sm:w-auto px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-purple-400 transition-colors border-2 border-transparent hover:border-black skew-x-[-10deg] shadow-[5px_5px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none translate-x-0 hover:translate-x-[5px] hover:translate-y-[5px]"
             >
               <span className="skew-x-[10deg] inline-block">Hire Me (I'm Broke)</span>
             </button>
             <button 
               onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
               className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-black uppercase tracking-widest border-2 border-white/20 hover:border-purple-500 hover:text-purple-400 transition-all skew-x-[-10deg]"
             >
               <span className="skew-x-[10deg] inline-block">Judge My Spagetti Code</span>
             </button>
        </div>
        
        <p className="mt-8 text-xs text-gray-600 font-mono">
          * Terms and conditions: I am not responsible if my code gains sentience and deletes your production data.
        </p>
      </motion.div>
    </section>
  );
}
