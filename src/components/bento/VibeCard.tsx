"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Disc, Music as MusicIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PLAYLIST = [
  { title: "AI Aayega Naukri Khayega", src: "/ai aayega naukri khayega.mp3" },
  { title: "City Lights", src: "/City lights are flickering on.mp3" },
  { title: "No Limits Tonight", src: "/No Limits Tonight.mp3" },
  { title: "Scene On Hai", src: "/Scene On hai.mp3" },
  { title: "Boom Boom Room", src: "/boom boom room.mp3" },
  { title: "Loved By Clown", src: "/loved by clown.mp3" },
  { title: "Portfolio Theme", src: "/portfolio.mp3" },
];

export function VibeCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initial Auto-play attempt & Interaction Fallback
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
    };

    const handleInteraction = () => {
      if (audioRef.current && !audioRef.current.paused) return;
      startAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    startAudio();

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('scroll', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  return (
    <div className="relative h-full flex flex-col justify-between p-4 bg-zinc-900 overflow-hidden group">
      <div className="flex justify-between items-start z-10">
        <div className="p-2 bg-purple-500/10 rounded-full">
            <MusicIcon className="w-4 h-4 text-purple-400" />
        </div>
        <div className="flex gap-1">
             <div className="w-1 h-3 bg-purple-500 rounded-full animate-[bounce_1s_infinite]" />
             <div className="w-1 h-3 bg-purple-500 rounded-full animate-[bounce_1.2s_infinite]" />
             <div className="w-1 h-3 bg-purple-500 rounded-full animate-[bounce_0.8s_infinite]" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center z-10 flex-1">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            onClick={togglePlay}
            className={`w-24 h-24 rounded-full bg-zinc-950 border-4 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] cursor-pointer relative
              ${isPlaying ? 'border-purple-500' : 'border-zinc-800'}`}
          >
            <Disc className={`w-12 h-12 ${isPlaying ? 'text-purple-400' : 'text-zinc-700'}`} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-full">
                 {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
            </div>
          </motion.div>
      </div>

      <div className="z-10 space-y-2">
           <div className="flex justify-between items-center text-zinc-400">
               <button onClick={prevSong} className="hover:text-white transition-colors"><SkipBack className="w-5 h-5" /></button>
               <div className="text-center">
                   <p className="text-xs font-bold text-white truncate max-w-[120px]">{PLAYLIST[currentSongIndex].title}</p>
                   <p className="text-[9px] text-zinc-500 uppercase tracking-widest">{isPlaying ? 'Playing' : 'Paused'}</p>
               </div>
               <button onClick={nextSong} className="hover:text-white transition-colors"><SkipForward className="w-5 h-5" /></button>
           </div>
      </div>

      <audio 
        ref={audioRef}
        src={PLAYLIST[currentSongIndex].src}
        onEnded={nextSong}
      />
    </div>
  );
}
