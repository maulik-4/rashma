import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  Check, 
  Copy, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact({ prefilledService, prefilledCategory }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: 'Website Development',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize prefilled service selection from Services or Work components
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ 
        ...prev, 
        description: prev.description 
          ? prev.description 
          : `Interested in building a solution similar to the ${prefilledCategory} project.` 
      }));
    }
  }, [prefilledCategory]);

  const serviceOptions = [
    'Website Development',
    'UI/UX Design',
    'E-commerce Development',
    'Custom Software Development',
    'Full Digital Transformation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@rashma.live');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.description.trim()) {
      setErrorMessage('Please fill in your name, email, and a brief description of your project.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Construct the formatted WhatsApp message
    const message = 
      `*New Project Inquiry — RASHMA Agency*\n\n` +
      `👤 *Name:* ${formData.fullName.trim()}\n` +
      `📧 *Email:* ${formData.email.trim()}\n` +
      (formData.phone.trim() ? `📞 *Phone/WhatsApp:* ${formData.phone.trim()}\n` : '') +
      (formData.company.trim() ? `🏢 *Company / Brand:* ${formData.company.trim()}\n` : '') +
      `⚡ *Service Required:* ${formData.serviceRequired}\n\n` +
      `📝 *Project Brief:*\n${formData.description.trim()}\n\n` +
      `— Sent via rashma.live portfolio inquiry`;

    const targetUrl = `https://wa.me/918595640720?text=${encodeURIComponent(message)}`;
    setLastWhatsappUrl(targetUrl);

    // Launch WhatsApp directly
    setTimeout(() => {
      window.open(targetUrl, '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#38bdf8', '#10b981', '#a855f7']
      });
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceRequired: 'Website Development',
      description: '',
    });
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-dark-950 text-white overflow-hidden border-t border-white/[0.06]">
      
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.02] text-white">
            Have an Idea? <br />
            <span className="font-serif italic font-normal text-zinc-400">Let's Build It.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-normal leading-relaxed">
            Tell us about your project. Let's turn your idea into something exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct WhatsApp, Calling & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-dark-900/60 border border-white/10 backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Direct Channels
                </h3>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Now
                </span>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                Connect directly with our team for consultations, rapid project scoping, or instant technical discussions.
              </p>

              {/* Direct Calling Option */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-400/40 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-zinc-400">
                    <PhoneCall className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>Direct Calling</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Priority Line</span>
                </div>
                <a
                  href="tel:+918595640720"
                  className="inline-flex items-center gap-2 font-mono text-lg font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span>+91 85956 40720</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-[11px] text-zinc-500 mt-1">Direct phone line for project briefing & inquiries</p>
              </div>

              {/* WhatsApp Option */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-400/40 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-zinc-400">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp Chat</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Instant Reply</span>
                </div>
                <a
                  href="https://wa.me/918595640720?text=Hello%20RASHMA%20Agency,%20I%20would%20like%20to%20discuss%20a%20new%20digital%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-lg font-bold text-white hover:text-emerald-300 transition-colors"
                >
                  <span>+91 85956 40720</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-[11px] text-zinc-500 mt-1">Direct messaging on WhatsApp for quick scoping and files</p>
              </div>

              {/* Email Option */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-zinc-400">
                    <Mail className="w-4 h-4 text-zinc-300" />
                    <span>Direct Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.04] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:info@rashma.live"
                  className="font-mono text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  info@rashma.live
                </a>
                <p className="text-[11px] text-zinc-500 mt-1">Official agency inbox for RFPs, decks, and contracts</p>
              </div>

              {/* Instagram Option */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-400/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-zinc-400">
                    <InstagramIcon className="w-4 h-4 text-purple-400" />
                    <span>Instagram</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">Design Studio</span>
                </div>
                <a
                  href="https://instagram.com/rashmaverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-base font-semibold text-white hover:text-purple-300 transition-colors"
                >
                  <span>@rashmaverse</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
                <p className="text-[11px] text-zinc-500 mt-1">Follow visual design experiments and studio work</p>
              </div>

            </div>

            {/* Agency Assurance Box */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Client Privacy & NDA</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                All inquiries and technical discussions are protected under standard mutual non-disclosure agreements. We never share proprietary concept details.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-dark-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-10 px-4 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold text-white tracking-tight mb-2">
                      Inquiry Dispatched to WhatsApp!
                    </h3>
                    <p className="text-base text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your project brief for <span className="text-cyan-400 font-mono">{formData.serviceRequired}</span> is ready on WhatsApp (<span className="text-emerald-400 font-mono">+91 85956 40720</span>).
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {lastWhatsappUrl && (
                      <a
                        href={lastWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Open WhatsApp Conversation</span>
                      </a>
                    )}
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-all"
                    >
                      Send Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Project Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 85956 40720"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Lumina Global or Personal Brand"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                      Service Required <span className="text-cyan-400">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, serviceRequired: opt }))}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                            formData.serviceRequired === opt
                              ? 'bg-white text-black font-semibold border-white shadow-md'
                              : 'bg-white/[0.02] text-zinc-300 border-white/[0.08] hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                      Project Description <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your vision, core features, target audience, references or goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-white/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Routing Project Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500 font-mono mt-3">
                      <span>Instant confirmation</span>
                      <span>•</span>
                      <span>Or call / WhatsApp: +91 85956 40720</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
