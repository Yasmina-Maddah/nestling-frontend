import React, { useState } from "react";
import API from "../../api";
import "./ProfileDetails.css";

// Import your icons
import NameIcon from "../../assets/icons/name.png";
import BirthDateIcon from "../../assets/icons/BirthDate.png";
import HobbiesIcon from "../../assets/icons/Hobbies.png";
import DreamCareerIcon from "../../assets/icons/DreamJob.png";

const ProfileDetails = ({ onChildCreated }) => {
  const [details, setDetails] = useState({
    name: "",
    dateOfBirth: "",
    hobbies: "",
    dreamCareer: "",
  });

  // Define the handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await API.post("/profiles", {
        name: details.name,
        date_of_birth: details.dateOfBirth,
        hobbies: details.hobbies,
        dream_job: details.dreamCareer,
      });
  
      console.log("API Response:", response.data); // Debugging backend response
  
      // Extract childId from the nested 'profile' object
      const childId = response.data.profile.id; 
      localStorage.setItem("childId", childId); // Save the childId to localStorage
      console.log("Saved Child ID to Local Storage:", childId); // Debugging
  
      alert("Child profile created successfully!");
      onChildCreated(childId); // Notify the parent component with the child ID
    } catch (error) {
      console.error("Error creating child profile:", error.response?.data || error.message);
      alert("Failed to create child profile.");
    }
  };
  
  return (
    <section className="profile-details">
      <h2 className="details-heading">Customize your intro</h2>
      <ul className="intro-list">
        {/* Name Field */}
        <li className="intro-item">
          <img src={NameIcon} alt="Name" className="intro-icon" />
          <input
            type="text"
            name="name"
            value={details.name}
            placeholder="Child's Name"
            onChange={handleChange} // Call handleChange
          />
        </li>

        {/* Date of Birth Field */}
        <li className="intro-item">
          <img src={BirthDateIcon} alt="Date of Birth" className="intro-icon" />
          <input
            type="date"
            name="dateOfBirth"
            value={details.dateOfBirth}
            onChange={handleChange} // Call handleChange
          />
        </li>

        {/* Hobbies Field */}
        <li className="intro-item">
          <img src={HobbiesIcon} alt="Hobbies" className="intro-icon" />
          <input
            type="text"
            name="hobbies"
            value={details.hobbies}
            placeholder="Favorite Hobbies"
            onChange={handleChange} // Call handleChange
          />
        </li>

        {/* Dream Career Field */}
        <li className="intro-item">
          <img src={DreamCareerIcon} alt="Dream Career" className="intro-icon" />
          <input
            type="text"
            name="dreamCareer"
            value={details.dreamCareer}
            placeholder="Dream Career"
            onChange={handleChange} // Call handleChange
          />
        </li>
      </ul>
      <div className="button-container">
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      </div>
    </section>
  );
};

export default ProfileDetails;
