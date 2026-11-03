import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Services from './components/Services';
import Work from './components/Work';
import WhyRashma from './components/WhyRashma';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const handleSelectProjectCategory = (category) => {
    setSelectedProjectCategory(category);
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-brand-light font-sans selection:bg-white selection:text-black">
      {/* Luxury Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* Full-Screen Hero */}
        <Hero />

        {/* Global Disciplines & Standards Marquee */}
        <BrandMarquee />

        {/* Core Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Featured Projects / Selected Work */}
        <Work onSelectProjectCategory={handleSelectProjectCategory} />

        {/* Why Choose RASHMA? (Editorial Distinction) */}
        <WhyRashma />

        {/* 4-Step Process Timeline */}
        <Process />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Interactive Contact & Inquiry Section */}
        <Contact 
          prefilledService={selectedService} 
          prefilledCategory={selectedProjectCategory} 
        />
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer />
    </div>
  );
}
