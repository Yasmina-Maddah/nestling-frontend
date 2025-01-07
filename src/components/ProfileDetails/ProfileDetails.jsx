import React from "react";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const introItems = [
    { icon: "📅", label: "Date of birth" },
    { icon: "🎨", label: "Favorite Hobbies" },
    { icon: "🎓", label: "Your Dream Career" },
    { icon: "🖼️", label: "Customize your Own Mood Board" },
  ];

  return (
    <section className="profile-details">
      <h2 className="details-heading">Customize your intro</h2>
      <ul className="intro-list">
        {introItems.map((item, index) => (
          <li key={index} className="intro-item">
            <span className="intro-icon">{item.icon}</span>
            <span className="intro-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfileDetails;