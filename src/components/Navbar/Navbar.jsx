import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo/1.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Nestling Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#about-us">About Us</a></li>
            </ul>
            <div className="navbar-buttons">
                <button className="navbar-button login-button">Login</button>
                <button className="navbar-button signup-button">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;
