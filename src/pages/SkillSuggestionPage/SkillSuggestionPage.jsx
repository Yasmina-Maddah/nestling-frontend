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
    description: "I enjoy discovering how things work and finding solutions when something doesn’t go as planned. Whether it’s fixing a broken toy, solving a tricky puzzle, or coming up with a new way to do something, I love the challenge of thinking through problems and figuring them out.",
    skillId: 1,
  },
  {
    id: 2,
    icon: WonderIcon,
    title: "Wonder and Learn",
    description: "I love imagining new ideas and turning them into something real. Whether it’s drawing, building, writing stories, or making up games, I enjoy expressing myself in fun and different ways. It’s exciting to see what I can create when I let my imagination lead the way.",
    skillId: 2,
  },
  {
    id: 3,
    icon: CreateIcon,
    title: "Create and Explore",
    description: "I’m always curious about how things work and why they happen. I love reading, asking questions, and exploring new topics. Learning new things makes me feel excited, and I enjoy sharing what I’ve learned with others too.",
    skillId: 3,
  },
  {
    id: 4,
    icon: ListenIcon,
    title: "Listen and Express",
    description: "I enjoy talking to people and sharing my ideas, whether it’s telling a story, asking questions, or working with friends on a project. I like listening to others, learning from them, and finding ways to work together to make things even better.",
    skillId: 4,
  },
];

const SkillSuggestionPage = ({ childId }) => {
  const navigate = useNavigate();

  const handleSkillSelect = async (skillId) => {
    try {
      const response = await API.post(`/child/${childId}/skill/select`, { skill_id: skillId });
      console.log("Skill Selection Response:", response.data);
      alert("Skill selected successfully!");
      navigate("/AIPage");
    } catch (error) {
      console.error("Error selecting skill:", error.response?.data || error.message);
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
