"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  color: string;
}

export function ProjectCard({ title, description, tags, link, color }: ProjectCardProps) {
  return (
    <div 
        onClick={() => window.open(link, '_blank')}
        className={`relative h-full flex flex-col justify-between p-4 cursor-pointer group overflow-hidden ${color}`}
    >
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-4">
        <ExternalLink className="w-4 h-4 text-white" />
      </div>

      <div className="z-10">
        <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-1">{title}</h3>
        <p className="text-xs text-white/70 font-mono leading-relaxed line-clamp-3">
            {description}
        </p>
      </div>

      <div className="z-10 flex flex-wrap gap-1 mt-4">
        {tags.map(tag => (
            <span key={tag} className="text-[9px] px-2 py-1 bg-black/20 text-white/90 rounded border border-white/10">
                {tag}
            </span>
        ))}
      </div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
