import { useState } from 'react';
import './App.css';
import { SiteHeader } from './components/site-header';
import { HeroSection } from './components/hero-section';
import { MissionSection } from './components/mission-section';
import { BrandsSection } from './components/brand-section';
import { ServicesSection } from './components/services-section';
import WhyUsSection from './components/why-us-section';
import { ScrollProgressBar } from './components/scroll-progress-bar';
import { TeamSection } from './components/team-section';
import { Footer } from './components/site-footer';

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