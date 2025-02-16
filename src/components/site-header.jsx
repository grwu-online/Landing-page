import { useState } from 'react';

export function SiteHeader() {
  const [storyDropdown, setStoryDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close dropdowns after clicking
    setStoryDropdown(false);
    setServicesDropdown(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white mt-2">
      <div className="container flex h-16 items-center px-4">
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }} className="font-semibold text-xl">
          grwu.online
        </a>
        <nav className="ml-auto flex gap-6 items-center">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }} className="text-sm font-medium">
            Home
          </a>
          
          {/* Our Story Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-sm font-medium"
              onClick={() => setStoryDropdown(!storyDropdown)}
            >
              Our Story 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            {storyDropdown && (
              <div className="absolute top-full mt-2 w-48 rounded-md bg-white shadow-lg">
                <a href="#mission" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('mission');
                  }} 
                  className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Our Mission
                </a>
                <a href="#team" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('team');
                  }} 
                  className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Team
                </a>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-sm font-medium"
              onClick={() => setServicesDropdown(!servicesDropdown)}
            >
              Services 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            {servicesDropdown && (
              <div className="absolute top-full mt-2 w-48 rounded-md bg-white shadow-lg">
                <a href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }} 
                  className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Our Services
                </a>
                <a href="#why-us" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('why-us');
                  }} 
                  className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Why Choose Us
                </a>
              </div>
            )}
          </div>

          <a href="#brands" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('brands');
            }} 
            className="text-sm font-medium">
            Our Work
          </a>
          
          <button className="px-4 py-2 rounded-md bg-[#FEA250] hover:bg-[#E4A853]/90 text-white text-sm font-medium">
            Book a call with us
          </button>
        </nav>
      </div>
    </header>
  );
}