"use client";

import { motion } from "framer-motion";
import { TrendingDown, Receipt, Skull } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, AlertTriangle } from "lucide-react";

export function DebtCard() {
  const [showProof, setShowProof] = useState(false);

  return (
    <>
      <div 
        onClick={() => setShowProof(true)}
        className="relative h-full flex flex-col justify-between cursor-pointer group hover:bg-red-950/10 transition-colors"
      >
        <div className="flex justify-between items-start">
             <div className="p-2 bg-red-950/20 rounded-lg border border-red-500/20">
                <Skull className="w-5 h-5 text-red-500" />
             </div>
             <div className="px-2 py-1 bg-red-500/10 rounded text-[10px] text-red-500 font-bold uppercase animate-pulse">
                Live Burn
             </div>
        </div>

        <div>
            <div className="text-4xl font-mono font-black text-red-500 tracking-tighter">
                -$26,736
            </div>
            <div className="flex items-center gap-1 text-xs text-red-400/60 font-mono mt-1">
                <TrendingDown className="w-3 h-3" />
                <span>+9,145% vs last month</span>
            </div>
        </div>

        <div className="text-[10px] text-zinc-500 leading-tight">
             My GCP bill is higher than my self-esteem. <br/>
             <span className="text-zinc-400 group-hover:text-red-400 transition-colors underline decoration-dotted">
                Click to witness stupidity.
             </span>
        </div>
      </div>

       <AnimatePresence>
        {showProof && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={(e) => {
                e.stopPropagation();
                setShowProof(false);
            }}
          >
            <motion.div 
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              className="relative max-w-3xl w-full bg-zinc-900 border-2 border-red-600 rounded-none shadow-[20px_20px_0px_0px_rgba(185,28,28,0.2)] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 border-b-2 border-red-600/30 flex justify-between items-center bg-red-950/20 sticky top-0 bg-zinc-900 z-10">
                <h3 className="text-xl font-black text-red-500 flex items-center gap-2 uppercase tracking-tighter">
                  <AlertTriangle className="w-5 h-5 animate-bounce" />
                  My Bank Account is weeping
                </h3>
                <button 
                  onClick={() => setShowProof(false)}
                  className="p-1 hover:bg-red-600 hover:text-white text-red-600 rounded-none transition-colors border border-red-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="relative aspect-video w-full bg-black border-y-2 border-red-600/30">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm flex-col gap-2">
                  <Skull className="w-10 h-10 mb-2 opacity-50" />
                  <span>Loading proof of my poor life choices...</span>
                </div>
                <Image 
                  src="/gcp-bill.png" 
                  alt="GCP Bill of $26,736" 
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="p-4 bg-zinc-950 grid md:grid-cols-2 gap-4 text-xs md:text-sm">
                <div>
                   <h4 className="text-red-500 font-bold mb-1 uppercase">Analysis:</h4>
                   <p className="text-gray-400 font-mono leading-relaxed">
                    &gt; Total Cost: <span className="text-white">$26,736</span> <br/>
                    &gt; ROI: <span className="text-white">Zero</span>.<br/>
                    &gt; Why? No auto-scaling.<br/>
                    &gt; Increase: <span className="text-red-500 font-bold">9,145%</span>.
                  </p>
                </div>
                <div className="border-l border-zinc-800 pl-4 flex items-center">
                    <p className="text-lg font-black text-zinc-700 italic">
                      "I am financially recovering from this website."
                    </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
