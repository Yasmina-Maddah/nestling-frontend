import React, { useState } from "react";
import "./ProfileDetails.css";
import BirthDate from "../../assets/icons/BirthDate.png";
import Hobbies from "../../assets/icons/Hobbies.png";
import DreamJob from "../../assets/icons/DreamJob.png";
import MoodBoard from "../../assets/icons/MoodBoard.png";

const ProfileDetails = () => {
  const [details, setDetails] = useState({
    dateOfBirth: "",
    hobbies: "",
    dreamCareer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const introItems = [
    { icon: BirthDate, label: "Date of birth", name: "dateOfBirth" },
    { icon: Hobbies, label: "Favorite Hobby", name: "hobbies" },
    { icon: DreamJob, label: "Dream Career", name: "dreamCareer" },
    { icon: MoodBoard, label: "Customize your Own Mood Board" },
  ];

  return (
    <section className="profile-details">
      <h2 className="details-heading">Customize your intro</h2>
      <ul className="intro-list">
        {introItems.map((item, index) => (
          <li key={index} className="intro-item">
            <img src={item.icon} alt={item.label} className="intro-icon" />
            {item.name ? (
              <input
                type="text"
                name={item.name}
                value={details[item.name]}
                placeholder={item.label}
                onChange={handleChange}
                className="intro-input"
              />
            ) : (
              <span className="intro-label">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfileDetails;
