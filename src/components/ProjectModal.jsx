import React from 'react';
import { X, ExternalLink, ArrowUpRight, CheckCircle2, Shield, Sparkles, Layers, Globe } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, onInquireSimilar }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      {/* Background click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black z-10 my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-900/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Case Study</span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-mono text-zinc-400">{project.client}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-500/20 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Live Deployment</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Main Visual Header */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1 block">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg self-start sm:self-auto"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.stats?.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-amber-400">
                <Shield className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">Production Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-dark-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-mono">
            Inspired by {project.title}? Let's architect your platform.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-all"
            >
              <span>Visit Vercel App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                onClose();
                if (onInquireSimilar) onInquireSimilar(project.category);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>Build Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
