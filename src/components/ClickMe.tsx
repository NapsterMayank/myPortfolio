"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick } from "lucide-react";

export function ClickMe() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-auto lg:top-1/2 lg:right-8 lg:-translate-y-1/2 z-40">
      <AnimatePresence mode="wait">
        {!clicked ? (
          <motion.div
            key="click-me"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            onClick={() => {
                setClicked(true);
                window.dispatchEvent(new Event("play-music"));
            }}
            className="cursor-pointer group flex items-center gap-3"
          >
             <span className="font-handwriting text-2xl text-white -rotate-12 group-hover:text-purple-400 transition-colors">
                Click Here
             </span>
             <div className="bg-white p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all">
                <MousePointerClick className="w-6 h-6 text-black" />
             </div>
             {/* Arrow hand-drawn style line could go here via SVG if needed, but font-handwriting does the heavy lifting */}
          </motion.div>
        ) : (
          <motion.div
            key="genius"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="max-w-[200px] text-right"
          >
             <p className="font-handwriting text-xl text-purple-300 leading-relaxed">
               "See? You're a <span className="text-yellow-400 font-bold">genius</span> in doodling!"
             </p>
             <p className="text-[10px] text-zinc-500 font-mono mt-2">
               (Music started. You're welcome.)
             </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
