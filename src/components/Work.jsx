import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Sparkles, ExternalLink, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Work({ onSelectProjectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = [
    'All',
    '3D & Web3 Platform',
    'Media Streaming',
    'On-Demand Mobility',
    'EdTech & Coaching',
    'HealthTech & Enterprise'
  ];

  const categoryLabels = {
    'All': 'All Projects (5)',
    '3D & Web3 Platform': 'Magma (3D & Web3)',
    'Media Streaming': 'Vidmo (Streaming)',
    'On-Demand Mobility': 'JSKGO (Mobility)',
    'EdTech & Coaching': 'MG Classes (EdTech)',
    'HealthTech & Enterprise': 'Significo (HealthTech)'
  };

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-item').forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section id="work" ref={sectionRef} className="relative py-28 lg:py-36 bg-dark-950 text-white overflow-hidden">
      
      {/* Background illumination */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Shipped Production Work</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
              Selected Work. <span className="font-serif italic font-normal text-zinc-400">Real Impact.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm sm:text-base text-brand-muted max-w-sm font-normal leading-relaxed">
            Real live production websites engineered with precision, high-speed responsiveness, and immersive interactive design.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-16 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isSelected
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            );
          })}
        </div>

        {/* Projects Showcase - Alternating Engaging Cards */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="project-item group relative rounded-3xl bg-dark-900/40 border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Visual Preview / Screenshot Mockup (Col 1) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      onClick={() => setActiveModalProject(project)}
                      className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-dark-800 border border-white/10 cursor-pointer group/img shadow-2xl shadow-black/80"
                    >
                      {/* Project image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Ambient Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />

                      {/* Top Badges: Live Link + Case Study */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-cyan-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span>Live on Vercel</span>
                        </span>

                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 group-hover/img:border-cyan-400/50 group-hover/img:text-white transition-all">
                          <span>Inspect Deep Dive</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Stats ticker on bottom of image */}
                      <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center justify-between gap-2 p-3 rounded-xl bg-dark-950/85 backdrop-blur-md border border-white/10">
                        {project.stats?.slice(0, 2).map((s, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <span className="text-cyan-400 font-mono font-bold">{s.value}</span>
                            <span className="text-zinc-400">{s.label}</span>
                          </div>
                        ))}
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details (Col 2) */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <div>
                      {/* Client & Category Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                          {project.category}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs font-mono text-zinc-400">
                          {project.year}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      {/* Tagline / Subtitle */}
                      <p className="text-sm font-medium text-zinc-300 mb-4 leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Short Description */}
                      <p className="text-sm text-brand-muted leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="mb-8">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">Technologies Used</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions: Live Website + View Project Case Study + Inquire */}
                    <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                      {/* Primary Live Website Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all shadow-md group/btn"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>

                      {/* Case Study Modal Trigger */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-all"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {/* Inquire */}
                      <button
                        onClick={() => {
                          const contactEl = document.getElementById('contact');
                          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                          if (onSelectProjectCategory) onSelectProjectCategory(project.category);
                        }}
                        className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-cyan-300 transition-colors ml-auto sm:ml-0"
                      >
                        Build Similar →
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquireSimilar={(cat) => {
          if (onSelectProjectCategory) onSelectProjectCategory(cat);
          const contactEl = document.getElementById('contact');
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  );
}
