"use client";

import { motion } from "framer-motion";
import { Terminal, Code, ExternalLink } from "lucide-react";

export function VibeLeetCard() {
  return (
    <div 
      onClick={() => window.open('https://vibeleet.xyz', '_blank')}
      className="relative h-full flex flex-col justify-between p-4 bg-zinc-950 border border-zinc-800 hover:border-purple-500 transition-all group cursor-pointer overflow-hidden"
    >
      <div className="flex justify-between items-start z-10">
        <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
          <Terminal className="w-5 h-5 text-purple-400" />
        </div>
        <div className="flex gap-1 items-center">
          <Code className="w-3 h-3 text-zinc-500 animate-pulse" />
          <div className="w-1 h-3 bg-purple-500 rounded-full" />
        </div>
      </div>

      <div className="z-10 mt-4">
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-purple-400 transition-colors">
          VibeLeet
        </h3>
        <p className="text-[10px] text-zinc-500 font-mono mt-1">
          leetcode.vibe // status: purely_aesthetic
        </p>
      </div>

      <div className="z-10 mt-auto flex justify-between items-end">
        <div className="text-[10px] text-zinc-400 font-mono italic">
          "Don't optimize your code, optimize your setup."
        </div>
        <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-white transition-colors" />
      </div>

      {/* Decorative pulse background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/10 transition-colors pointer-events-none" />
    </div>
  );
}
