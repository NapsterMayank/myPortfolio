"use client";

import { motion } from "framer-motion";
import { ExternalLink, Flame } from "lucide-react";

interface Project {
  title: string;
  url: string;
  description: string;
  sarcasticComment: string;
  roast: string;
}

const projects: Project[] = [
  {
    title: "Crackalot.co",
    url: "https://crackalot.co",
    description: "Resume builder, cover letters, interview prep.",
    sarcasticComment: "Helping you gaslight recruiters professionally.",
    roast: "Because your actual skills aren't getting you hired."
  },
  {
    title: "SaaS Info",
    url: "https://saasinfo.in",
    description: "Promoting Micro SaaS products.",
    sarcasticComment: "A directory for products nobody asked for.",
    roast: "Where 'Hello World' apps go to die."
  },
  {
    title: "Site Sentinel",
    url: "https://sitesentinel.therealbeluga.com",
    description: "Security project fetching domain records.",
    sarcasticComment: "Stalking DNS records because I have no hobbies.",
    roast: "It's not 'hacking', it's just 'reading public data very aggressively'."
  },
  {
    title: "LazyCall.io",
    url: "https://lazycall.io",
    description: "Automatic calling AI agent.",
    sarcasticComment: "Automating human interaction because people exceed my RAM.",
    roast: "For when you want to annoy leads at scale."
  },
  {
    title: "AdWithChatGPT",
    url: "https://adwithchatgpt.com",
    description: "SEO, Geo, AIO agent services.",
    sarcasticComment: "Using AI to game Google's AI. It's stupider than it sounds.",
    roast: "SEO: Snake Oil Optimization."
  },
  {
    title: "Tinder Maker Yojna",
    url: "#",
    description: "Automated dating application helper.",
    sarcasticComment: "Government subsidies for getting no play?",
    roast: "Because your personality needs a backend update."
  },
   {
    title: "Job Dhundho Yojna",
    url: "#",
    description: "Job finding automation.",
    sarcasticComment: "Applying to 500 jobs to get rejected by 501.",
    roast: "The definition of insanity is applying via Workday twice."
  },
   {
    title: "ExtinctBook.com (Coming Soon)",
    url: "#",
    description: "Accounting & Ledger App. Currently absolute vaporware.",
    sarcasticComment: "It's not 'missing features', it's 'pre-alpha minimalism'.",
    roast: "Currently existing only in my VS Code and my dreams."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 container mx-auto relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mb-16 border-l-8 border-purple-500 pl-6">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-2 uppercase tracking-tighter">
          Empire of <span className="text-zinc-600 line-through">Dirt</span> Code
        </h2>
        <p className="text-xl text-gray-400 font-mono">
          Things I built instead of going to therapy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10, rotate: 1 }}
            className="group relative flex flex-col p-8 bg-zinc-950 border border-zinc-800 hover:border-purple-500 transition-all rounded-none shadow-[10px_10px_0px_0px_rgba(39,39,42,0.5)] hover:shadow-[10px_10px_0px_0px_rgba(168,85,247,0.5)]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-purple-400" />
            </div>
            
            <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 mb-6 font-mono text-sm border-l border-zinc-700 pl-3">
              {project.description}
            </p>
            
            <div className="mt-auto space-y-3">
              <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800/50">
                 <p className="text-xs font-mono text-purple-300">
                  <span className="text-purple-600 select-none">$ comment: </span> 
                  {project.sarcasticComment}
                </p>
              </div>
              
              <div className="p-3 bg-red-950/20 rounded border border-red-900/20 group-hover:border-red-500/50 transition-colors">
                 <p className="text-xs font-bold font-mono text-red-400 flex items-center gap-2">
                  <Flame className="w-3 h-3" />
                  ROAST: {project.roast}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
