import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo/1.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(''); // State to track the active link

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleLinkClick = (link) => {
        setActiveLink(link); // Update the active link
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Nestling Logo" />
            </div>
            <ul className="navbar-links">
                <li>
                    <a
                        href="#features"
                        className={activeLink === 'features' ? 'active' : ''}
                        onClick={() => handleLinkClick('features')}
                    >
                        Features
                    </a>
                </li>
                <li>
                    <a
                        href="#how-it-works"
                        className={activeLink === 'how-it-works' ? 'active' : ''}
                        onClick={() => handleLinkClick('how-it-works')}
                    >
                        How It Works
                    </a>
                </li>
                <li>
                    <a
                        href="#resources"
                        className={activeLink === 'resources' ? 'active' : ''}
                        onClick={() => handleLinkClick('resources')}
                    >
                        Resources
                    </a>
                </li>
                <li>
                    <a
                        href="#about-us"
                        className={activeLink === 'about-us' ? 'active' : ''}
                        onClick={() => handleLinkClick('about-us')}
                    >
                        About Us
                    </a>
                </li>
            </ul>
            <div className="navbar-buttons">
                <button className="navbar-button login-button" onClick={handleLoginClick}>
                    Login
                </button>
                <button className="navbar-button signup-button" onClick={handleSignUpClick}>
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
