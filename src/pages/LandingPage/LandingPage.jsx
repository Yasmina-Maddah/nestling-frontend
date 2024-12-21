import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Features from '../../components/Features/Features';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Resources from '../../components/Resources/Resources';
import AboutUs from '../../components/AboutUs/AboutUs';



const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Resources />
      <AboutUs />
      {/* Add other sections as needed */}
    </div>
  );
};

export default LandingPage;


