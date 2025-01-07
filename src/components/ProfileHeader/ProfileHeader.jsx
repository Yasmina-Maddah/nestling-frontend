import React from "react";
import "./ProfileHeader.css";

const ProfileHeader = () => {
  return (
    <header className="profile-header">
      <div className="cover-photo">
        <button className="edit-cover-button">Edit cover photo</button>
      </div>
      <div className="profile-picture-container">
        <img
          src="https://via.placeholder.com/150"
          alt="Child's Profile"
          className="profile-picture"
        />
      </div>
      <h1 className="profile-name">Child's Name</h1>
    </header>
  );
};

export default ProfileHeader;