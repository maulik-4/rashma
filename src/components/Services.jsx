import React, { useState, useEffect, useRef } from 'react';
import { servicesData } from '../data/services';
import { 
  Code2, 
  Palette, 
  ShoppingBag, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ChevronDown,
  Terminal
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'web-dev': Code2,
  'ui-ux': Palette,
  'ecommerce': ShoppingBag,
  'custom-software': Cpu,
};

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleServiceSelect = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="relative py-28 lg:py-36 bg-dark-950 text-white overflow-hidden scroll-mt-20">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Core Disciplines</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
              Everything Your Business Needs to <span className="font-serif italic font-normal text-zinc-400">Grow Digitally.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm sm:text-base text-brand-muted max-w-sm font-normal leading-relaxed">
            Engineered for founders and companies who refuse to settle for generic templates. Every deliverable is bespoke, high-converting, and built for scale.
          </p>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.id] || Code2;
            return (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="service-card group relative rounded-3xl p-8 lg:p-10 bg-dark-900/60 border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-950/20 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle hover gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:text-cyan-400 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                        Service {service.number}
                      </span>
                    </div>

                    <button
                      onClick={() => handleServiceSelect(service.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.08] border border-white/10 transition-all group/btn"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-brand-muted leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Subcategories (Exact items required) */}
                  <div className="space-y-3 mb-8 pt-6 border-t border-white/[0.06]">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">Core Capabilities</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.subcategories.map((sub, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <p className="text-xs font-semibold text-white tracking-wide">{sub.name}</p>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech tags & Deliverables */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleServiceSelect(service.title)}
                    className="text-xs font-mono tracking-wider uppercase text-zinc-300 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Start {service.title.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

