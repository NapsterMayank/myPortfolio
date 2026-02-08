"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContactModal } from "../ContactModal";
import { useState } from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function ProfileCard() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      <div className="relative h-full flex flex-col justify-between overflow-hidden">
        {/* Animated Noise Background */}
        <div className="absolute inset-0 bg-grid-white/[0.05] z-0 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-red-950/30 border border-red-500/30 rounded-full text-[10px] text-red-400 font-mono uppercase tracking-widest mb-4">
            ⚠ Warning: Ego overflow
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[0.9]">
            THE REAL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient bg-[length:200%_auto]">
              BELUGA
            </span>
          </h1>

          <p className="mt-4 text-zinc-400 text-sm font-mono leading-relaxed">
             Full Stack Dev. <br/>
             Cloud Architect (I burn money). <br/>
             AI Enthusiast (I write prompts). <br/>
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col gap-4">
            <div className="flex gap-3">
                 <button 
                   onClick={() => setIsContactOpen(true)}
                   className="flex-1 bg-white text-black font-bold uppercase text-xs py-3 hover:bg-purple-400 transition-colors"
                 >
                   Hire Me
                 </button>
                 <button 
                    onClick={() => window.open('https://github.com/NapsterMayank', '_blank')}
                    className="p-3 bg-zinc-900 border border-zinc-800 hover:border-white transition-colors text-white"
                 >
                    <Github className="w-4 h-4" />
                 </button>
                 <button 
                    onClick={() => window.open('https://twitter.com', '_blank')} // Placeholder
                    className="p-3 bg-zinc-900 border border-zinc-800 hover:border-blue-400 transition-colors text-white"
                 >
                    <Twitter className="w-4 h-4" />
                 </button>
            </div>
            
            <p className="text-[10px] text-zinc-600 font-mono">
               * I promise not to delete prod. (Terms apply)
            </p>
        </div>
      </div>
    </>
  );
}
