import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AIStoryVisualizedPage.css";
import Logo from "../../assets/logo/1.png";
import SubmitIcon from "../../assets/icons/Submit.png";
import { toast } from "react-toastify";
import API from "../../api";

const AIStoryVisualizedPage = ({ childId }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!prompt.trim()) {
      toast.error("Please enter a valid prompt.");
      return;
    }
  
    setLoading(true);
    setResponse('');
  
    try {
      const res = await API.post(`/child/${childId}/generate-story`, { prompt });
      const { story, challenges } = res.data.ai_visualization;
      setResponse(`${story}\n\nChallenges:\n- ${challenges.join('\n- ')}`);
      toast.success("Story generated successfully!");
    } catch (error) {
      toast.error("Something went wrong while generating the story.");
      console.error("Error generating story:", error.response?.data || error.message);
    } finally {
      setLoading(false);
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
              className="story-input"
              placeholder="Craft your story"
              value={prompt}
              onChange={handleInputChange}
              disabled={loading}
            />
            <button className="icon-button" onClick={handleSubmit} disabled={loading}>
              {loading ? "Loading..." : <img src={SubmitIcon} alt="Submit" className="icon" />}
            </button>
          </div>
        </div>

        {response && (
          <div className="response-section">
            <h2>Your Story:</h2>
            <p>{response}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AIStoryVisualizedPage;
