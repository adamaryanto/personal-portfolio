import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import About from './About';
import PortfolioTabs from './PortfolioTabs';
import PortfolioContent from './PortfolioContent';
import ContactSection from './ContactSection';
import { portfolioData } from './data';

function HiroSection() {
  const [activeTab, setActiveTab] = useState('projects');
  const currentItems = portfolioData[activeTab] || [];

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="wrappperHiroSection" id="home">
        <section className="hero">
          <HeroContent />
        </section>
      </div>

      {/* ABOUT SECTION */}
      <About />

      {/* PORTFOLIO SECTION */}
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-header">
          <h1 className="portfolio-title">Portfolio Showcase</h1>
          <p className="portfolio-subtitle">
            Explore my journey through projects, certifications, and technical expertise.
          </p>

          {/* Tab Navigation */}
          <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Dynamic Content (Projects / Certificates / Tech Stack) */}
        <PortfolioContent currentItems={currentItems} activeTab={activeTab} />
      </section>

      {/* CONTACT SECTION */}
      <ContactSection />
    </>
  );
}

export default HiroSection;
