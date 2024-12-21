import React from 'react';
import './Footer.css';
import Icon from "../../assets/icons/InstagramIcon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Stay updated by following us on Instagram
        </p>
        <a
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram-link"
        >
          <img
            src={Icon} 
            alt="Instagram"
            className="footer-instagram-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;