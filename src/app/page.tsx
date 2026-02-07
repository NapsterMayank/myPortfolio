import { GCPWarning } from "@/components/GCPWarning";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <GCPWarning />
      </div>
      
      <Hero />
      <Skills />
      <Projects />
      
      <footer className="py-8 text-center text-zinc-600 text-sm">
        <p>© {new Date().getFullYear()} Mayank Sharma (The Real Beluga). No rights reserved. Steal this code.</p>
        <p className="text-xs mt-2 opacity-50">Powered by Caffeine and Anxiety.</p>
        <p className="text-[10px] mt-4 text-red-400/50 hover:text-red-400 transition-colors cursor-help" title="Help me unban it please">
          (LinkedIn Status: Banned for being too efficient)
        </p>
      </footer>
    </main>
  );
}
