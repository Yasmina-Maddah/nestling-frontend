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
            We are a platform dedicated to empowering individuals and families by providing
            tools, resources, and experiences that foster growth and learning. Our mission is
            to make a positive impact in every home we touch.
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