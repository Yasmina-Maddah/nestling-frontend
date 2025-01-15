import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Dashboard.css";
import createProfile from "../../assets/images/CreateProfile.png";
import skillSuggestion from "../../assets/images/SkillDevelopement.png";
import aiStory from "../../assets/images/StoryVisualization.png";
import progressTracking from "../../assets/images/ProgressTracking.png";
import exploreResources from "../../assets/images/Resouces.png";
import trackSkills from "../../assets/images/TrackSkill.png";

const Dashboard = () => {
  const navigate = useNavigate(); 

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
    },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, [Parent's Name]!</h1>
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
