"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Instagram, Facebook, ExternalLink, Code, Shield, CheckCircle, Zap } from 'lucide-react';
import Footer from './components/Footer';
import Contact from './components/sections/Contact';
import Navigation from './components/Navbar';
import HeroSection from './components/sections/Hero';
import ProjectsSection from './components/sections/Projects';
import SkillsSection from './components/sections/Skills';
import AboutSection from './components/sections/About';
import FadeInSection from './components/FadeInSection';
import StarryBackground from './components/StarryBackground';


const Portfolio = () => {

  return (
    <div className="text-white font-sans">
      <StarryBackground />
      <Navigation />
      <HeroSection />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />

      <Footer />

    </div>
  );
};

export default Portfolio;