import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { ProfileCard } from "@/components/bento/ProfileCard";
import { DebtCard } from "@/components/bento/DebtCard";
import { VibeCard } from "@/components/bento/VibeCard";
import { ProjectCard } from "@/components/bento/ProjectCard";
import { RemotionCard } from "@/components/bento/RemotionCard";
import { ClickMe } from "@/components/ClickMe";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database,
  Briefcase
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4 relative">
       {/* Background Grid */}
       <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
       
       <ClickMe />

       <BentoGrid className="max-w-6xl mx-auto relative z-10">
          
          {/* 1. Profile Card (Large: 2x2 on Desktop) */}
          <div className="md:col-span-2 md:row-span-2 rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-2xl p-6 md:p-10 relative group">
              <ProfileCard />
          </div>

          {/* 2. Debt Card (1x1) */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-xl p-4 md:p-6 relative">
              <DebtCard />
          </div>

          {/* 3. Vibe Controller (1x1) */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-xl relative">
              <VibeCard />
          </div>

          {/* 4. Tech Stack (1x1) */}
          <BentoGridItem
            title="Tech Stack"
            description="Tools I use to break production."
            header={
                <div className="flex flex-wrap gap-2 min-h-[6rem] items-center content-center">
                    {['Next.js', 'React', 'Node', 'AWS', 'Docker', 'AI'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-400">
                            {tech}
                        </span>
                    ))}
                </div>
            }
            icon={<Cpu className="h-4 w-4 text-purple-500" />}
            className="md:col-span-1"
          />

          {/* 5. Remotion Video (2x1) */}
          <div className="md:col-span-2 md:row-span-1 rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-xl relative">
             <RemotionCard />
          </div>

          {/* Projects Section - Mapped to Grid Items */}

          {/* Project 1: Site Sentinel */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-xl relative border border-zinc-900">
              <ProjectCard 
                 title="Site Sentinel"
                 description="Security analysis tool that probably flags itself."
                 tags={['Next.js', 'Security', 'Scanner']}
                 link="https://sitesentinel.therealbeluga.com"
                 color="bg-blue-950/20"
              />
          </div>

          {/* Project 2: LazyCall */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-xl relative border border-zinc-900">
              <ProjectCard 
                 title="LazyCall"
                 description="AI Agent that talks to people so I don't have to."
                 tags={['AI', 'Voice', 'Python']}
                 link="https://lazycall.io"
                 color="bg-green-950/20"
              />
          </div>

          {/* Project 3: Crackalot */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-xl relative border border-zinc-900">
             <ProjectCard 
                 title="Crackalot"
                 description="Resume builder for unemployed engineers."
                 tags={['React', 'PDF', 'Job']}
                 link="https://crackalot.co"
                 color="bg-yellow-950/20"
              />
          </div>
          
           {/* Project 4: AdWithChatGPT */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-xl relative border border-zinc-900">
             <ProjectCard 
                 title="AdWithChatGPT"
                 description="SEO tool because Google hates us."
                 tags={['SEO', 'GPT-4', 'Marketing']}
                 link="https://adwithchatgpt.com"
                 color="bg-pink-950/20"
              />
          </div>

       </BentoGrid>
       
       <footer className="text-center py-10 text-zinc-600 text-xs font-mono">
           <p>© {new Date().getFullYear()} Mayank Sharma. (THE REAL BELUGA)</p>
           <p>Deployed on Vercel (Please don't click too much, I'm poor).</p>
       </footer>
    </main>
  );
}
