import React, { useState } from "react";
import API from "../../api";
import "./ProfileDetails.css";

const ProfileDetails = ({ setChildId }) => {
  const [details, setDetails] = useState({
    name: "",
    dateOfBirth: "",
    hobbies: "",
    dreamCareer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await API.post("/child-profile", {
        name: details.name,
        date_of_birth: details.dateOfBirth,
        hobbies: details.hobbies,
        dream_career: details.dreamCareer,
      });
      setChildId(response.data.child.id); // Save child ID dynamically
      alert("Child profile created successfully!");
    } catch (error) {
      console.error("Error creating child profile:", error.response?.data || error.message);
      alert("Failed to create child profile.");
    }
  };

  

  return (
    <section className="profile-details">
      <h2 className="details-heading">Customize your intro</h2>
      <ul className="intro-list">
        <li>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={details.name}
            placeholder="Child's Name"
            onChange={handleChange}
          />
        </li>
        <li>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={details.dateOfBirth}
            onChange={handleChange}
          />
        </li>
        <li>
          <label>Hobbies</label>
          <input
            type="text"
            name="hobbies"
            value={details.hobbies}
            placeholder="Favorite Hobbies"
            onChange={handleChange}
          />
        </li>
        <li>
          <label>Dream Career</label>
          <input
            type="text"
            name="dreamCareer"
            value={details.dreamCareer}
            placeholder="Dream Career"
            onChange={handleChange}
          />
        </li>
      </ul>
      <button onClick={handleSave} className="save-button">
        Save
      </button>
    </section>
  );
};

export default ProfileDetails;
