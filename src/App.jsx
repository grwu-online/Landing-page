import { useState } from 'react';
import './App.css';
import { SiteHeader } from './components/site-header.jsx';
import { HeroSection } from './components/hero-section.jsx';
import { MissionSection } from './components/mission-section.jsx';
import { BrandsSection } from './components/brand-section.jsx';
import { ServicesSection } from './components/services-section.jsx';
import WhyUsSection from './components/why-us-section.jsx';
import { ScrollProgressBar } from './components/scroll-progress-bar.jsx';
import { TeamSection } from './components/team-section.jsx';
import { Footer } from './components/site-footer.jsx';

function App() {

  return (
    <>
      <div className="flex min-h-screen flex-col w-full">
        <ScrollProgressBar />
        <SiteHeader />
        <main className="">
          <HeroSection />
          <MissionSection />
          <BrandsSection />
          <ServicesSection />
          <WhyUsSection />
          <TeamSection/>
          <Footer/>
        </main>
      </div>
    </>
  );
}

export default App;