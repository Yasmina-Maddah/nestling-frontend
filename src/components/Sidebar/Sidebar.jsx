import React from 'react';
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

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <div className="nav-section">
            <li>
              <button className="nav-button"
                onClick={() => navigate('/Dashboard')} 
              >
                <img src={homeIcon} alt="Home" className="nav-icon" />
              </button>
            </li>
            <li>
              <button className="nav-button"
                onClick={() => navigate('/Profile')} 
              >
                <img src={userIcon} alt="Profile" className="nav-icon" />
              </button>
            </li>
            <li>
              <button className="nav-button"
                onClick={() => navigate('/Skills')} 
              >
                <img src={skillsIcon} alt="skills" className="nav-icon" />
              </button>
            </li>
            <li>
              <button className="nav-button"
                onClick={() => navigate('/AIPage')} 
              >
                <img src={bookIcon} alt="Library" className="nav-icon" />
              </button>
            </li>
            <li>
              <button className="nav-button">
                <img src={chartIcon} alt="Analytics" className="nav-icon" />
              </button>
            </li>
          </div>
          <div className="nav-section">
            <li>
              <button className="nav-button"
              >
                <img src={resourceIcon} alt="Ideas" className="nav-icon" />
              </button>
            </li>
          </div>
        </ul>
      </nav>
      <div className="spacer" style={{ flexGrow: 1 }}></div> 
      <div className="sidebar-footer">
        <button className="nav-button"
          onClick={() => navigate('/')} 
        >
          <img src={arrowRightIcon} alt="Next" className="nav-icon" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;