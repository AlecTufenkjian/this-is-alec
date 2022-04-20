import React from 'react';
import HeroSection from '../components/HeroSection.js';
import AboutSection from '../components/AboutSection.js';
import ProjectSection from '../components/ProjectSection.js';

export default function Home() { 
    return (
      <div className='home-container'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    );
  }