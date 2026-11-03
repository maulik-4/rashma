import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, PhoneCall, Mail } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' UTC'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Selected Work', href: '#work' },
    { name: 'Why RASHMA', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Client Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    'Website Development',
    'High-Converting Landing Pages',
    'UI/UX Design Systems',
    'E-commerce Development',
    'Custom Web Applications',
    'Dashboard Architecture',
  ];

  const socials = [
    { name: 'Twitter / X', href: 'https://twitter.com', icon: TwitterIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
    { name: 'GitHub', href: 'https://github.com', icon: GithubIcon },
    { name: 'Instagram', href: 'https://instagram.com/rashmaverse', icon: InstagramIcon },
  ];

  return (
    <footer className="relative bg-dark-950 text-white border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      
      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Giant Editorial Brand Banner */}
        <div className="pb-16 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center font-display font-black text-xl text-white">
                R
              </div>
              <span className="font-display font-extrabold text-3xl sm:text-4xl tracking-[0.2em] text-white">
                RASHMA
              </span>
            </div>
            <p className="font-serif italic text-2xl sm:text-3xl text-zinc-300 font-normal">
              "Crafting Digital Experiences. Building What's Next."
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/[0.08]">
          
          {/* Brand Info & Direct Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              RASHMA is a premium digital agency engineering modern websites, high-converting digital platforms, bespoke software, and editorial UI/UX design.
            </p>

            {/* Direct Calling & WhatsApp */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Direct Call:</span>
                <a href="tel:+918595640720" className="text-xs font-mono font-semibold text-white hover:text-cyan-400 transition-colors">
                  +91 85956 40720
                </a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">WhatsApp:</span>
                <a href="https://wa.me/918595640720" target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-semibold text-white hover:text-emerald-400 transition-colors">
                  +91 85956 40720
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email:</span>
                <a href="mailto:info@rashma.live" className="text-xs font-mono text-zinc-300 hover:text-white transition-colors">
                  info@rashma.live
                </a>
              </div>
            </div>

            <div className="pt-2 font-mono text-xs text-zinc-500">
              <p>Live Agency Clock: {currentTime}</p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Navigation</p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Services</p>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-zinc-400 hover:text-cyan-300 transition-colors"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Connect</p>
            <div className="flex flex-col space-y-2.5">
              {socials.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()} RASHMA Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
