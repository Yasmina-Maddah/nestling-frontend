import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Features from '../../components/Features/Features';


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      {/* Add other sections as needed */}
    </div>
  );
};

export default LandingPage;


