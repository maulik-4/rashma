import React, { useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowRight, ShieldCheck, Sparkles, Terminal, Zap, Globe, Layers } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const visualCardRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.8,
        delay: 0.2
      })
      .from(headlineRef.current?.querySelectorAll('.hero-line'), {
        opacity: 0,
        y: 45,
        duration: 1,
        stagger: 0.15,
      }, '-=0.5')
      .from(subtextRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, '-=0.6')
      .from(ctaRef.current?.children, {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.7,
      }, '-=0.6')
      .from(visualCardRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: 'power2.out'
      }, '-=0.8');

      // Subtle float animation on visual composition cards
      gsap.to('.hero-float-1', {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.hero-float-2', {
        y: 10,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden bg-dark-950 bg-grid-subtle"
    >
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Availability Indicator */}
            <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md w-fit mb-8 shadow-inner shadow-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                Available for New Projects
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs font-mono text-zinc-400">Q2 2026</span>
            </div>

            {/* Main Headline */}
            <div ref={headlineRef} className="font-display font-extrabold text-white tracking-tighter leading-[0.95] mb-8 text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
              <div className="overflow-hidden">
                <span className="hero-line block">Your Vision.</span>
              </div>
              <div className="overflow-hidden mt-1 sm:mt-2">
                <span className="hero-line block text-zinc-400">
                  Our <span className="text-white underline decoration-white/20 underline-offset-8 font-serif italic font-normal tracking-tight">Digital Craft.</span>
                </span>
              </div>
            </div>

            {/* Supporting Text */}
            <p
              ref={subtextRef}
              className="text-lg sm:text-xl text-brand-muted max-w-xl font-normal leading-relaxed mb-10"
            >
              We design and develop powerful digital experiences that help brands stand out, connect with customers, and grow online.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14">
              <button
                onClick={() => scrollTo('#services')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold tracking-wide uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-white/25 hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('#work')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium tracking-wide text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>Selected Work</span>
                <ArrowDownRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium tracking-wide text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowDownRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">100%</p>
                <p className="text-xs text-brand-subtle uppercase tracking-wider font-mono mt-1">Bespoke Code</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">99+</p>
                <p className="text-xs text-brand-subtle uppercase tracking-wider font-mono mt-1">PageSpeed Core</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">14+</p>
                <p className="text-xs text-brand-subtle uppercase tracking-wider font-mono mt-1">Global Markets</p>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract 3D-Inspired Studio Composition */}
          <div ref={visualCardRef} className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Center Canvas Card */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-8 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col justify-between overflow-hidden">
              
              {/* Top Bar inside card */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>rashma.engine.v2</span>
                </div>
              </div>

              {/* Central Geometric Kinetic Ring & Typography */}
              <div className="relative my-auto flex flex-col items-center justify-center text-center py-6">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Concentric rotating rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow" />
                  <div className="absolute inset-4 rounded-full border border-white/10 animate-reverse-spin" />
                  <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/20 blur-md" />
                  
                  {/* Core Monogram */}
                  <div className="relative flex flex-col items-center">
                    <span className="font-display font-black text-6xl tracking-widest text-white">R</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 mt-1">Est. 2024</span>
                  </div>
                </div>

                <p className="mt-4 text-xs font-mono tracking-widest uppercase text-zinc-400">
                  Precision Digital Architecture
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  React • GSAP • Tailwind • Micro-Interactions
                </p>
              </div>

              {/* Bottom Card Telemetry */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    Interaction Latency
                  </span>
                  <span className="text-emerald-400 font-semibold">&lt; 16ms (60fps)</span>
                </div>
                <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[94%] rounded-full" />
                </div>
              </div>

              {/* Floating Satellite Card 1 (Top Left offset) */}
              <div className="hero-float-1 absolute -top-4 -left-6 hidden sm:flex items-center gap-3 bg-dark-900/90 border border-white/15 px-4 py-3 rounded-2xl backdrop-blur-xl shadow-xl shadow-black/60">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Client Reach</p>
                  <p className="text-xs font-semibold text-white">Global Deployment</p>
                </div>
              </div>

              {/* Floating Satellite Card 2 (Bottom Right offset) */}
              <div className="hero-float-2 absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-dark-900/90 border border-white/15 px-4 py-3 rounded-2xl backdrop-blur-xl shadow-xl shadow-black/60">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Delivery Guarantee</p>
                  <p className="text-xs font-semibold text-white">100% Satisfaction SLA</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom subtle scroll indicator */}
      <div
        onClick={() => scrollTo('#services')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Scroll to Services</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

