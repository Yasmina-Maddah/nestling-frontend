import React from 'react';
import './AboutUs.css';
import Logo from "../../assets/logo/3.png";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-text">
          <h2 className="about-us-title">About Us</h2>
          <p className="about-us-description">
          At Nestling, we empower parents and caregivers to support their children’s growth through engaging and personalized tools. Using AI technology, we offer solutions like story visualizations, skill recommendations, and progress tracking to make learning fun and effective. With Nestling, you can nurture creativity, focus on key skills, and celebrate milestones while accessing curated resources to enhance your child’s journey. Together, we aim to unlock your child’s full potential and build a brighter future.
          </p>
        </div>
        <div className="about-us-image-container">
          <img
            src={Logo}
            alt="About Us"
            className="about-us-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;