import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './AIStoryVisualizedPage.css';
import Logo from '../../assets/logo/1.png';
import SubmitIcon from '../../assets/icons/Submit.png';

const AIStoryVisualizedPage = () => {
  return (
    <div className="ai-story-page">
      <Sidebar />

      <main className="main-content">
        <div className="background-section">
          <h1 className="title">"Create Your Customized Stories: Your AI Visualization Companion"</h1>
          <div className="center-content">
            <img src={Logo} alt="Logo" className="center-logo" />
            <p className="subtitle1">
              Let us create together an interactive story.
            </p>
            <p className="subtitle2">
               Enter your prompt with the skill needed and 
            </p>
            <p className='subtitle2'>
               the theme you want to create a story from.
            </p>
          </div>
        </div>

        <div className="input-bar">
          <div className="input-container">
            <input type="text" className="story-input" placeholder="Craft your story" />
            <button className="icon-button">
             <img src={SubmitIcon} alt="Submit" className="icon" />
            </button>        
         </div>
        </div>
      </main>
    </div>
  );
};

export default AIStoryVisualizedPage;