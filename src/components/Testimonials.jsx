import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Sparkles, ChevronLeft, ChevronRight, Quote, CheckCircle, Info } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-box',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-28 lg:py-36 bg-dark-950 text-white overflow-hidden border-t border-white/[0.06]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Client Voices</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
              What Our <span className="font-serif italic font-normal text-zinc-400">Clients Say.</span>
            </h2>
          </div>

          {/* Placeholder indicator badge as requested */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
            <Info className="w-3.5 h-3.5" />
            <span>Placeholder feedback — ready for genuine client testimonials</span>
          </div>
        </div>

        {/* Featured Testimonial Hero Showcase */}
        <div className="testimonial-box relative rounded-3xl bg-dark-900/60 border border-white/10 p-8 sm:p-12 lg:p-16 backdrop-blur-xl mb-12 shadow-2xl">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-white/[0.04] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Quote & Metric */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-400">
                <span>Result: {current.metric}</span>
              </div>

              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-relaxed tracking-tight">
                "{current.quote}"
              </p>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="font-display font-bold text-lg text-white leading-tight">
                    {current.author}
                  </h4>
                  <p className="text-xs text-brand-muted">
                    {current.role} • <span className="text-zinc-300 font-semibold">{current.company}</span>
                  </p>
                  <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                    {current.location} — {current.projectType}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation & Counter (Col 2) */}
            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end h-full pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-10">
              <div className="text-left lg:text-right mb-6">
                <span className="font-mono text-3xl font-extrabold text-white">0{currentIndex + 1}</span>
                <span className="font-mono text-lg text-zinc-500"> / 0{testimonialsData.length}</span>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mt-1">Verified Endorsement</p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3.5 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3.5 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mini Grid of All 4 Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonialsData.map((t, index) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? 'bg-white/[0.06] border-white/30 shadow-lg'
                  : 'bg-dark-900/30 border-white/[0.06] hover:border-white/15'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-cyan-400">0{index + 1}</span>
                <span className="text-xs font-semibold text-white truncate">{t.company}</span>
              </div>
              <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

