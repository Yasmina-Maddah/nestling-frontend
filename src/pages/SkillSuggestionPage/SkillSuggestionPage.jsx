import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../api"; // Your API client
import Sidebar from "../../components/Sidebar/Sidebar";
import "./SkillSuggestionPage.css";

const SkillSuggestionPage = () => {
  const [skills, setSkills] = useState([]); // State to store fetched skills
  const location = useLocation();
  const navigate = useNavigate();

  // Get the child profile ID from location state or local storage
const childId = location.state?.childId || localStorage.getItem("childId");

useEffect(() => {
  if (!childId) {
    alert("Child profile is not selected or created.");
    navigate("/profile"); // Redirect to profile creation
  } else {
    console.log("Retrieved Child Profile ID:", childId); // Debugging
  }
}, [childId, navigate]);


  // Fetch skills from the backend
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await API.get("/skills"); // Fetch skills
        setSkills(response.data.skills); // Update skills state
      } catch (error) {
        console.error("Error fetching skills:", error.response?.data || error.message);
        alert("Failed to load skills. Please try again.");
      }
    };

    fetchSkills(); // Call fetchSkills function
  }, []);

  // Handle skill selection
  const handleSkillSelect = async (skillId) => {
    if (!childId) {
      alert("Child profile is not selected or created.");
      return;
    }

    console.log("Child Profile ID:", childId);

    try {
      // Make a POST request to assign a skill to the child
      await API.post(`/skills/assign`, {
        children_id: childId,
        skill_id: skillId,
      });

      alert("Skill selected successfully!"); // Success message
      navigate("/AIPage", { state: { childId, skillId } }); // Redirect to AI page
    } catch (error) {
      console.error("Error selecting skill:", error.response?.data || error.message);
      alert("Failed to select skill. Please try again.");
    }
  };

  return (
    <div className="watch-me-grow-layout">
      <Sidebar />
      <div className="watch-me-grow-container">
        <h1 className="skill-section-title">Watch me grow!</h1>
        <div className="skill-cards-container">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="skill-card"
              onClick={() => handleSkillSelect(skill.id)} // Trigger skill selection
            >
              <div className="skill-card-header">
                <img
                  src={skill.icon || "default-icon.png"} // Default icon fallback
                  alt={skill.skill_name}
                  className="skill-card-icon"
                />
                <h3 className="skill-card-title">{skill.skill_name}</h3>
              </div>
              <p className="skill-card-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSuggestionPage;
