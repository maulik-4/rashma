import React, { useEffect, useRef } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  Cpu, 
  Smartphone, 
  Gauge, 
  MessageSquare, 
  Users, 
  Code 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyRashma() {
  const sectionRef = useRef(null);

  const pillars = [
    {
      number: "01",
      title: "Custom-Built Solutions",
      category: "Bespoke Architecture",
      description: "We write clean, semantic code tailored to your distinct business model. No bloated off-the-shelf templates, no lock-in, and zero technical debt.",
      icon: Code,
      highlight: "100% Handcrafted Code"
    },
    {
      number: "02",
      title: "Modern Technologies",
      category: "Future-Proof Stack",
      description: "Leveraging React, Vite, GSAP, and Edge infrastructure to guarantee fluid 60fps animations, instant state reactivity, and modern API readiness.",
      icon: Cpu,
      highlight: "Cutting-Edge Tooling"
    },
    {
      number: "03",
      title: "Responsive-First Development",
      category: "Adaptive Viewports",
      description: "Every layout is sculpted from mobile viewports upward. Designed to provide flawless tactile ergonomics across ultra-wide monitors, iPads, and phones.",
      icon: Smartphone,
      highlight: "Pixel-Precision Mobile"
    },
    {
      number: "04",
      title: "Performance Optimization",
      category: "Sub-Second Delivery",
      description: "We optimize image assets, minimize JavaScript bundle footprints, and calibrate caching headers to deliver 95+ Core Web Vitals and instant page transitions.",
      icon: Gauge,
      highlight: "99+ PageSpeed Score"
    },
    {
      number: "05",
      title: "Transparent Communication",
      category: "Radical Candor",
      description: "Direct access to your senior engineering lead. Weekly Loom walkthroughs, shared staging environments, and zero mysterious agency markups.",
      icon: MessageSquare,
      highlight: "Direct Engineer Access"
    },
    {
      number: "06",
      title: "Client-Focused Approach",
      category: "Partnership Mindset",
      description: "We treat your business outcomes as our sole benchmark of success. We don't just hand over a repository; we partner to move your commercial needle.",
      icon: Users,
      highlight: "Commercial Alignment"
    }
  ];

  const comparisons = [
    { feature: "Source Code Ownership", others: "Proprietary locks or template mess", rashma: "100% Yours, Fully Documented Git Repo" },
    { feature: "Performance & PageSpeed", others: "Bloated 4-8s slow page loads", rashma: "Sub-second, 95+ Core Web Vitals" },
    { feature: "Design Authenticity", others: "Recycled generic WordPress/Webflow themes", rashma: "Bespoke Swiss Editorial Design" },
    { feature: "Mobile Experience", others: "Clunky responsive afterthought", rashma: "Tactile Mobile-First Interaction" },
    { feature: "Engineering Stack", others: "Heavy legacy plugins & builders", rashma: "Modern React.js, Vite & GSAP" },
    { feature: "Post-Launch Warranty", others: "Radio silence after final invoice", rashma: "30-Day Active Launch Warranty & Support" },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.editorial-pillar', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36 bg-dark-950 text-white overflow-hidden border-t border-white/[0.06]">
      
      {/* Subtle radial ambient spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Agency Difference</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
            Not Just a Website. <br />
            <span className="font-serif italic font-normal text-zinc-400">A Better Digital Experience.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-normal leading-relaxed">
            Most digital agencies sell bloated templates packaged in hype. RASHMA operates at the intersection of Swiss editorial visual craft and rigorous modern software engineering.
          </p>
        </div>

        {/* 6 Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="editorial-pillar group relative p-8 rounded-3xl bg-dark-900/40 border border-white/[0.08] hover:border-white/25 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm tracking-widest text-cyan-400 font-bold">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.06]">
                      {pillar.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{pillar.highlight}</span>
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Distinction Table (Why Choose Us over Generic Alternatives) */}
        <div className="rounded-3xl bg-dark-900/60 border border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/[0.08]">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">Direct Comparison</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                The RASHMA Standard vs. The Industry Average
              </h3>
            </div>
            <p className="text-xs text-brand-subtle font-mono mt-2 md:mt-0">
              Clear benchmarks that protect your investment
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] text-xs font-mono uppercase tracking-widest text-zinc-400">
                  <th className="py-4 px-4 font-normal">Pillar / Metric</th>
                  <th className="py-4 px-4 font-normal text-zinc-500">Typical Freelancer / Agency</th>
                  <th className="py-4 px-4 font-semibold text-white bg-white/[0.03] rounded-t-xl">RASHMA Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-sm">
                {comparisons.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 px-4 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-zinc-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400/80 shrink-0" />
                      <span>{row.others}</span>
                    </td>
                    <td className="py-4 px-4 text-zinc-100 font-medium bg-white/[0.02]">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{row.rashma}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

