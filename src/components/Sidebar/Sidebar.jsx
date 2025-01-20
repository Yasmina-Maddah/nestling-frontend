import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

import logo from '../../assets/logo/1.png';
import homeIcon from '../../assets/icons/Home.png';
import userIcon from '../../assets/icons/Profile.png';
import chartIcon from '../../assets/icons/Chart.png';
import bookIcon from '../../assets/icons/Book.png';
import resourceIcon from '../../assets/icons/Resource.png';
import arrowRightIcon from '../../assets/icons/Arrow.png';
import skillsIcon from '../../assets/icons/skills.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('Dashboard'); 

  const handleNavClick = (path, linkName) => {
    setActiveLink(linkName); 
    navigate(path); 
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <div className="nav-section">
            <li>
              <button
                className={`nav-button ${activeLink === 'Dashboard' ? 'active' : ''}`}
                onClick={() => handleNavClick('/Dashboard', 'Dashboard')}
              >
                <img src={homeIcon} alt="Home" className="nav-icon" />
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeLink === 'Profile' ? 'active' : ''}`}
                onClick={() => handleNavClick('/Profile', 'Profile')}
              >
                <img src={userIcon} alt="Profile" className="nav-icon" />
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeLink === 'Skills' ? 'active' : ''}`}
                onClick={() => handleNavClick('/Skills', 'Skills')}
              >
                <img src={skillsIcon} alt="Skills" className="nav-icon" />
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeLink === 'AIPage' ? 'active' : ''}`}
                onClick={() => handleNavClick('/AIPage', 'AIPage')}
              >
                <img src={bookIcon} alt="Library" className="nav-icon" />
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeLink === 'Reports' ? 'active' : ''}`}
                onClick={() => handleNavClick('/Reports', 'Reports')}
              >
                <img src={chartIcon} alt="Analytics" className="nav-icon" />
              </button>
            </li>
          </div>
          <div className="nav-section">
            <li>
              <button
                className={`nav-button ${activeLink === 'Resources' ? 'active' : ''}`}
                onClick={() => handleNavClick('/Resources', 'Resources')}
              >
                <img src={resourceIcon} alt="Ideas" className="nav-icon" />
              </button>
            </li>
          </div>
        </ul>
      </nav>
      <div className="spacer" style={{ flexGrow: 1 }}></div>
      <div className="sidebar-footer">
        <button
          className={`nav-button ${activeLink === 'Logout' ? 'active' : ''}`}
          onClick={() => handleNavClick('/', 'Logout')}
        >
          <img src={arrowRightIcon} alt="Next" className="nav-icon" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
