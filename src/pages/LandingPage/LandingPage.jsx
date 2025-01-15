import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Features from '../../components/Features/Features';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Resources from '../../components/Resources/Resources';
import AboutUs from '../../components/AboutUs/AboutUs';
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <section id="features">
                <Features />
            </section>
            <section id="how-it-works">
                <HowItWorks />
            </section>
            <section id="resources">
                <Resources />
            </section>
            <section id="about-us">
                <AboutUs />
            </section>
            <Footer />
        </div>
    );
};

export default LandingPage;
