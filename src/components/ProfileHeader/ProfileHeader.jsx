import React, { useState } from "react";
import "./ProfileHeader.css";
import API from "../../api";
import DefaultCoverPhoto from "../../assets/images/AIBackground.png";
import DefaultProfilePhoto from "../../assets/images/ProfilePhoto.png";
import EditIcon from "../../assets/icons/pen.png";

const ProfileHeader = ({ childId }) => {
  const [coverPhoto, setCoverPhoto] = useState(DefaultCoverPhoto);
  const [profilePhoto, setProfilePhoto] = useState(DefaultProfilePhoto);

  const uploadCoverPhoto = async (e) => {
    if (!childId) {
      alert("Please create a child profile first!");
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("cover_photo", file);

    try {
      const response = await API.post(`/child-profile/${childId}/upload-cover-photo`, formData);
      setCoverPhoto(`http://localhost:8000/storage/${response.data.path}`);
      alert("Cover photo updated successfully!");
    } catch (error) {
      console.error("Error uploading cover photo:", error.response?.data || error.message);
      alert("Failed to upload cover photo.");
    }
  };

  const uploadProfilePhoto = async (e) => {
    if (!childId) {
      alert("Please create a child profile first!");
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profile_photo", file);

    try {
      const response = await API.post(`/child-profile/${childId}/upload-profile-photo`, formData);
      setProfilePhoto(`http://localhost:8000/storage/${response.data.path}`);
      alert("Profile photo updated successfully!");
    } catch (error) {
      console.error("Error uploading profile photo:", error.response?.data || error.message);
      alert("Failed to upload profile photo.");
    }
  };

  return (
    <header className="profile-header">
      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
        <input
          id="cover-photo-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={uploadCoverPhoto}
        />
        <button
          className="edit-cover-button"
          onClick={() => document.getElementById("cover-photo-input").click()}
        >
          Edit cover photo
        </button>
      </div>
      <div className="profile-picture-container">
        <img
          src={profilePhoto}
          alt="Child's Profile"
          className="profile-picture"
        />
        <input
          id="profile-photo-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={uploadProfilePhoto}
        />
        <button
          className="edit-profile-picture"
          onClick={() => document.getElementById("profile-photo-input").click()}
        >
          <img src={EditIcon} alt="Edit Profile" />
        </button>
      </div>
      <h1 className="profile-name">Child's Name</h1>
    </header>
  );
};

export default ProfileHeader;
