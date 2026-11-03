import React, { useState, useEffect, useRef } from 'react';
import { processSteps } from '../data/process';
import { Sparkles, CheckCircle2, ArrowRight, Compass, Palette, Code2, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stepIcons = [Compass, Palette, Code2, Rocket];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.process-step-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative py-28 lg:py-36 bg-dark-950 text-white overflow-hidden border-t border-white/[0.06]">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>How We Collaborate</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
              A Four-Step Path from <br />
              <span className="font-serif italic font-normal text-zinc-400">Concept to Market Dominance.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm sm:text-base text-brand-muted max-w-sm font-normal leading-relaxed">
            Transparent milestones, rapid iteration cycles, and weekly prototype updates ensure zero surprises from kickoff to launch.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => {
            const Icon = stepIcons[index] || Compass;
            const isSelected = activeStep === index;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`process-step-card group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-dark-900 border-white/30 shadow-2xl shadow-cyan-950/20'
                    : 'bg-dark-900/30 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-4xl font-extrabold tracking-tight text-white/40 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Tagline */}
                  <div className="mb-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">Phase {item.step}</p>
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      {item.phase}
                    </h3>
                  </div>

                  {/* Summary & Description */}
                  <p className="text-sm font-medium text-zinc-200 mb-3 leading-snug">
                    {item.summary}
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-6 border-t border-white/[0.06] space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Milestone Deliverables</p>
                  {item.deliverables.slice(0, 3).map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-zinc-300">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span className="leading-tight">{del}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Process Assurance */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs sm:text-sm text-zinc-300 font-mono">
              Typical sprint turnaround: 2 to 6 weeks depending on product scope
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-cyan-300 transition-colors"
          >
            <span>Discuss your timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

