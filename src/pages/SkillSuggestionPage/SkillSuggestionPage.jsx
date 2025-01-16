import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api"; // Your API client
import Sidebar from "../../components/Sidebar/Sidebar";
import "./SkillSuggestionPage.css";
import PuzzleIcon from "../../assets/icons/problem-solving.png";
import WonderIcon from "../../assets/icons/knowledge.png";
import CreateIcon from "../../assets/icons/creativity.png";
import ListenIcon from "../../assets/icons/communication.png";

const cards = [
  {
    id: 1,
    icon: PuzzleIcon,
    title: "Puzzle and Solve",
    description: "I enjoy discovering how things work...",
    skillId: 1, // Assign corresponding skill ID
  },
  {
    id: 2,
    icon: WonderIcon,
    title: "Wonder and Learn",
    description: "I love imagining new ideas...",
    skillId: 2, // Assign corresponding skill ID
  },
  {
    id: 3,
    icon: CreateIcon,
    title: "Create and Explore",
    description: "I’m always curious about how things work...",
    skillId: 3, // Assign corresponding skill ID
  },
  {
    id: 4,
    icon: ListenIcon,
    title: "Listen and Express",
    description: "I enjoy talking to people...",
    skillId: 4, // Assign corresponding skill ID
  },
];

const SkillSuggestionPage = ({ childId }) => {
  const navigate = useNavigate();

  const handleSkillSelect = async (skillId) => {
    try {
      await API.post(`/child/${childId}/skill/select`, { skill_id: skillId });
      alert("Skill selected successfully!");
      navigate("/AIPage");
    } catch (error) {
      console.error("Error selecting skill:", error);
      alert("Failed to select skill.");
    }
  };

  return (
    <div className="watch-me-grow-layout">
      <Sidebar />
      <div className="watch-me-grow-container">
        <h1 className="skill-section-title">Watch me grow!</h1>
        <div className="skill-cards-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className="skill-card"
              onClick={() => handleSkillSelect(card.skillId)}
            >
              <div className="skill-card-header">
                <img src={card.icon} alt={card.title} className="skill-card-icon" />
                <h3 className="skill-card-title">{card.title}</h3>
              </div>
              <p className="skill-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSuggestionPage;
