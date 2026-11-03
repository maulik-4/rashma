import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, Compass, Shield } from 'lucide-react';

export default function BrandMarquee() {
  const items = [
    { label: "Bespoke Architecture", icon: Cpu },
    { label: "Zero Templates", icon: Terminal },
    { label: "Sub-Second Latency", icon: Sparkles },
    { label: "Swiss Typography", icon: Compass },
    { label: "Modern React & GSAP", icon: Code2 },
    { label: "Enterprise Security", icon: Shield },
    { label: "Editorial UI/UX", icon: Sparkles },
    { label: "Global Performance", icon: Cpu },
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-dark-900/60 py-5 backdrop-blur-md">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-12">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400/80" />
              <span>{item.label}</span>
              <span className="text-zinc-700 ml-4">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

