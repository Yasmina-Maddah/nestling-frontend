import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar/Sidebar';
import './AIStoryVisualizedPage.css';
import Logo from '../../assets/logo/1.png';
import SubmitIcon from '../../assets/icons/Submit.png';
import { toast } from 'react-toastify'; // Ensure react-toastify is installed and imported

const AIStoryVisualizedPage = ({ script, setScript }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error("Please enter a valid prompt.");
      return;
    }

    setLoading(true);
    setResponse('');
    const selectedAction = "Visualize stories"; // Assuming this is the default action
    toast.info("Generating 🌠");

    const systemMessage =
      selectedAction === "Visualizes stories"
        ? "Visualize answers into storytellings, and always accept just knowledge, problem-solving, creative and communication skills."
        : "Visualize answers into storytellings, and always accept just knowledge, problem-solving, creative and communication skills.";

    const userMessage = `\n${prompt}`;
    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            { role: "system", content: systemMessage },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((res) => {
        setResponse(res.data.choices[0].message.content);
        toast.success("Story generated successfully!");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Something went wrong 🫠");
        console.error(err);
        setLoading(false);
      });

    setClicked(!clicked);
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
