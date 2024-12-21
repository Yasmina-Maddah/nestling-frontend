import React from 'react';
import './HowItWorks.css';
import chart from "../../assets/images/HowItWorks.png"

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="how-it-works-image-container">
        <img
          src={chart} 
          alt="How It Works"
          className="how-it-works-image"
        />
      </div>
    </section>
  );
};

export default HowItWorks;