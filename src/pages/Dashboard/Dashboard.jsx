import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api"; // Axios instance to call the backend
import "./Dashboard.css";
import createProfile from "../../assets/images/CreateProfile.png";
import skillSuggestion from "../../assets/images/SkillDevelopement.png";
import aiStory from "../../assets/images/StoryVisualization.png";
import progressTracking from "../../assets/images/ProgressTracking.png";
import exploreResources from "../../assets/images/Resouces.png";
import trackSkills from "../../assets/images/TrackSkill.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [parentName, setParentName] = useState(""); // State to store the parent's name
  const [error, setError] = useState(""); // State for error handling

  // Fetch the parent's name on component load
  useEffect(() => {
    const fetchParentName = async () => {
      try {
        const response = await API.get("/user"); // Call the `/user` API
        setParentName(response.data.user.username); // Update the parent's name
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        setError("Failed to load user data. Please login again."); // Set error message
        navigate("/login"); // Redirect to login page if authentication fails
      }
    };

    fetchParentName();
  }, [navigate]);

  const cardData = [
    {
      id: 1,
      imageUrl: createProfile,
      title: "Create a Profile",
      onClick: () => navigate("/Profile"),
    },
    {
      id: 2,
      imageUrl: skillSuggestion,
      title: "Skill Suggestion",
      onClick: () => navigate("/Skills"),
    },
    {
      id: 3,
      imageUrl: aiStory,
      title: "AI Story Visualization",
      onClick: () => navigate("/AIPage"),
    },
    {
      id: 4,
      imageUrl: progressTracking,
      title: "Progress Tracking",
    },
    {
      id: 5,
      imageUrl: exploreResources,
      title: "Explore Resources",
    },
    {
      id: 6,
      imageUrl: trackSkills,
      title: "Track Skill Development",
      onClick: () => navigate("/Reports"),
    },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        {error ? (
          <p className="dashboard-error">{error}</p>
        ) : (
          <h1>Welcome, {parentName || "Loading..."}!</h1>
        )}
      </header>
      <div className="dashboard-card-grid">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`dashboard-card ${
              card.isWide ? "dashboard-card-wide" : ""
            }`}
            onClick={card.onClick}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="dashboard-card-image"
            />
            <h3 className="dashboard-card-title">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
