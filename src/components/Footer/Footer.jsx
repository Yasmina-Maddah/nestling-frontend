import React from "react";
import "./Footer.css";
import InstagramIcon from "../../assets/icons/InstagramIcon.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import Logo from "../../assets/logo/1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={Logo} alt="Nestling Logo" className="footer-logo" />
        </div>

        {/* Social Media Section */}
        <div className="footer-social-section">
          <p className="footer-text">Stay connected with us:</p>
          <div className="footer-social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src={InstagramIcon} alt="Instagram" className="footer-icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src={FacebookIcon} alt="Facebook" className="footer-icon" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <p className="footer-text">Contact us:</p>
          <p className="footer-email">maddahyasmina@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nestling. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
