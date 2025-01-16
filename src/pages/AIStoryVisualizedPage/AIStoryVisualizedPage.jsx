import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../api"; // Your API client
import "./AIStoryVisualizedPage.css";
import Logo from "../../assets/logo/1.png";
import SubmitIcon from "../../assets/icons/Submit.png";

const AIStoryVisualizedPage = ({ childId }) => {
  const [theme, setTheme] = useState("");
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  const handleGenerateStory = async () => {
    try {
      const response = await API.post(`/child/2/ai-visualization`, {
        skill_id: 2, // Example skill ID (You can dynamically fetch based on context)
        theme,
        prompt,
      });
      console.log("Generated Visualization:", response.data);
      alert("Story generated successfully!");
    } catch (err) {
      console.error("Failed to generate story:", err);
      setError("Failed to generate story. Please try again.");
    }
  };

  return (
    <div className="ai-story-page">
      <Sidebar />
      <main className="main-content">
        <div className="background-section">
          <h1 className="title">"Create Your Customized Stories: Your AI Visualization Companion"</h1>
          <div className="center-content">
            <img src={Logo} alt="Logo" className="center-logo" />
            <p className="subtitle1">Let us create together an interactive story.</p>
            <p className="subtitle2">
              Enter your prompt with the skill needed and the theme you want to create a story from.
            </p>
          </div>
        </div>

        <div className="input-bar">
          <div className="input-container">
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="story-input"
              placeholder="Enter Theme"
            />
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="story-input"
              placeholder="Craft your story"
            />
            <button className="icon-button" onClick={handleGenerateStory}>
              <img src={SubmitIcon} alt="Submit" className="icon" />
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </main>
    </div>
  );
};

export default AIStoryVisualizedPage;
