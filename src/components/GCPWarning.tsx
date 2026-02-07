"use client";

import { AlertTriangle, X, Receipt, Skull } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function GCPWarning() {
  const [showProof, setShowProof] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-red-950 border-b border-red-600/30 p-3 backdrop-blur-md relative z-50 overflow-hidden"
      >
        {/* Animated background warning stripes */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.05)_10px,rgba(255,0,0,0.05)_20px)] pointer-events-none" />

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-red-200 text-center relative z-10">
          <div className="flex items-center gap-3 animate-pulse">
            <Skull className="w-5 h-5 text-red-500" />
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest">
              Financial Status: <span className="font-black text-red-500">CRITICAL FAILURE</span>
            </span>
          </div>
          
          <span className="font-mono text-xs md:text-sm">
             I am currently burning <span className="font-bold text-white bg-red-600 px-1">$200/day</span> on GCP. 
             If this site is down, I have defaulted on my payments.
          </span>

          <button 
            onClick={() => setShowProof(true)}
            className="group flex items-center gap-2 text-xs bg-black text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 uppercase font-bold tracking-wider border border-red-600 transition-all shadow-[4px_4px_0px_0px_rgba(220,38,38,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <Receipt className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            Witness the stupidity
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showProof && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={() => setShowProof(false)}
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
