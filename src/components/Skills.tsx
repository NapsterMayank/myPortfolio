"use client";

const skills = [
  "Agentic AI", "Machine Learning", "Mobile Dev", "Web Dev", "DevOps", "Automation", 
  "Sleep Deprivation", "Centering Divs", "Breaking Prod", "Google Fu", "StackOverflow Copy-Paste", 
  "Turning It Off & On Again"
];

export function Skills() {
  return (
    <div className="py-10 bg-black border-y border-white/10 overflow-hidden relative">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-purple-500 transition-colors uppercase cursor-default select-none">
            {skill} •
          </span>
        ))}
      </div>
    </div>
  );
}
