import React from "react";
import "./ProfileHeader.css";
import ProfilePhoto from "../../assets/images/ProfilePhoto.png";
import EditIcon from "../../assets/icons/pen.png"; // Example icon path

const ProfileHeader = () => {
  return (
    <header className="profile-header">
      <div className="cover-photo">
        <button className="edit-cover-button">Edit cover photo</button>
      </div>
      <div className="profile-picture-container">
        <img
          src={ProfilePhoto}
          alt="Child's Profile"
          className="profile-picture"
        />
        <button className="edit-profile-picture">
          <img src={EditIcon} alt="Edit Profile" />
        </button>
      </div>
      <h1 className="profile-name">Child's Name</h1>
    </header>
  );
};

export default ProfileHeader;
