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

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [notes, setNotes] = useState<{ id: number; x: number; delay: number }[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initial Auto-play attempt & Interaction Fallback
  useEffect(() => {
    const startAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          // Only remove listeners if play succeeded
          cleanupListeners();
        } catch (error) {
          console.log("Autoplay blocked, waiting for interaction");
          setIsPlaying(false);
        }
      }
    };

    const cleanupListeners = () => {
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
        window.removeEventListener('play-music', handleInteraction);
    };

    const handleInteraction = () => {
      if (audioRef.current && !audioRef.current.paused) return;
      startAudio();
    };

    // Try immediate play
    startAudio();

    // Add listeners
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    window.addEventListener('play-music', handleInteraction);

    return () => {
      cleanupListeners();
    };

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  // Handle Track Change & Note Animation Trigger
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Play failed:", e));
      triggerNoteExplosion();
    }
  }, [currentSongIndex]);

  // Occasional floating notes while playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        addNote();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        triggerNoteExplosion();
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

  const addNote = () => {
    const id = Date.now() + Math.random();
    setNotes(prev => [...prev, { id, x: Math.random() * 40 - 20, delay: 0 }]);
    setTimeout(() => {
      setNotes(prev => prev.filter(n => n.id !== id));
    }, 2000);
  };

  const triggerNoteExplosion = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => addNote(), i * 200);
    }
  };

  return (

    <div className="fixed bottom-4 left-4 md:top-24 md:bottom-auto md:left-4 z-50 group flex items-center md:items-start gap-4">
      {/* Floating Notes Container */}
      <div className="absolute top-0 left-4 pointer-events-none">
        <AnimatePresence>
          {notes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0], y: -60, x: note.x, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-0"
            >
              <MusicIcon className="w-4 h-4 text-purple-400 fill-purple-400/50" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative flex items-center bg-black/80 backdrop-blur border border-zinc-800 rounded-full pr-1 hover:border-purple-500/50 transition-all hover:pr-4">
        {/* Spinning CD */}
        <div className="relative p-2 cursor-pointer" onClick={togglePlay}>
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className={`w-10 h-10 rounded-full bg-zinc-900 border-2 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]
              ${isPlaying ? 'border-purple-500' : 'border-zinc-700'}`}
          >
            <Disc className={`w-6 h-6 ${isPlaying ? 'text-purple-400' : 'text-zinc-600'}`} />
            {/* Inner Ring for CD look */}
            <div className="absolute w-2 h-2 bg-black rounded-full border border-zinc-700" />
          </motion.div>

          {/* Play/Pause Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full">
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
          </div>
        </div>

        {/* Compact Controls (Revealed on Hover or Click) */}
        <div className="w-0 overflow-hidden group-hover:w-auto peer-checked:w-auto transition-all duration-300 flex items-center gap-2">
            <div className="flex flex-col px-2 min-w-[100px]">
                <span className="text-[10px] font-mono text-purple-300 truncate max-w-[100px] leading-tight select-none">
                    {PLAYLIST[currentSongIndex].title}
                </span>
                <span className="text-[8px] text-zinc-500 uppercase tracking-wider select-none animate-pulse text-purple-400 font-bold">
                    {isPlaying ? 'Now Playing' : 'Click Anywhere to Start'}
                </span>
            </div>

            <div className="flex items-center gap-1 border-l border-zinc-800 pl-2">
                <button onClick={prevSong} className="p-1 hover:text-purple-400 text-zinc-400 transition-colors">
                    <SkipBack className="w-3 h-3" />
                </button>
                <button onClick={nextSong} className="p-1 hover:text-purple-400 text-zinc-400 transition-colors">
                    <SkipForward className="w-3 h-3" />
                </button>
            </div>
        </div>
      </div>

      {/* Visible Credit Text */}
      <div className="hidden md:block mt-2">
          <p className="text-[10px] text-zinc-500 font-mono leading-tight">
             Yes, I created these beats. <br/>
             <span className="text-zinc-600 text-[9px]">
               (It's not your Spotify or YouTube—it's me.)
             </span> <br/>
             <span className="text-purple-400">Hire me before I go strictly vinyl.</span>
          </p>
      </div>


      <audio 
        ref={audioRef}
        src={PLAYLIST[currentSongIndex].src}
        onEnded={nextSong}
      />
    </div>
  );
}
