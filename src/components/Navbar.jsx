import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'services', 'work', 'about', 'process', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl shadow-black/60'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="group flex items-center gap-2.5 text-white tracking-widest transition-transform duration-300"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 group-hover:border-white/40 transition-all duration-300">
              <span className="font-display font-bold text-lg text-white">R</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-[0.25em] text-white group-hover:text-cyan-400 transition-colors">
                RASHMA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase -mt-1 hidden sm:block">
                Digital Agency
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-5 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-brand-muted hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 bg-dark-950/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-between pt-28 pb-10 px-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <p className="text-[11px] font-mono text-brand-muted tracking-widest uppercase">Navigation</p>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="font-display text-3xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors py-2 border-b border-white/[0.06]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs text-brand-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Accepting new client engagements for Q2 2026</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all text-center"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="flex flex-col gap-2 pt-2 text-center text-xs font-mono">
            <a href="tel:+918595640720" className="text-cyan-400 hover:underline">
              Call: +91 85956 40720
            </a>
            <a href="https://wa.me/918595640720" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              WhatsApp: +91 85956 40720
            </a>
            <p className="text-zinc-500">info@rashma.live</p>
          </div>
        </div>
      </div>
    </>
  );
}

