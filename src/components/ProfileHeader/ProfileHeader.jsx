import React, { useState } from "react";
import "./ProfileHeader.css";
import API from "../../api";
import DefaultCoverPhoto from "../../assets/images/AIBackground.png";
import DefaultProfilePhoto from "../../assets/images/ProfilePhoto.png";
import EditIcon from "../../assets/icons/pen.png";

const ProfileHeader = ({ childId }) => {
  const [coverPhoto, setCoverPhoto] = useState(DefaultCoverPhoto);
  const [profilePhoto, setProfilePhoto] = useState(DefaultProfilePhoto);

  const uploadPhoto = async (type, file) => {
    if (!childId) {
      alert("Please create a child profile first!");
      return;
    }

    const formData = new FormData();
    formData.append(type, file);

    try {
      const response = await API.put(`/profiles/${childId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (type === "cover_photo") {
        setCoverPhoto(response.data.cover_photo);
      } else {
        setProfilePhoto(response.data.profile_photo);
      }

      alert(`${type === "cover_photo" ? "Cover" : "Profile"} photo updated successfully!`);
    } catch (error) {
      console.error(`Error uploading ${type}:`, error.response?.data || error.message);
      alert(`Failed to upload ${type}.`);
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
          onChange={(e) => uploadPhoto("cover_photo", e.target.files[0])}
        />
        <button onClick={() => document.getElementById("cover-photo-input").click()}>
          Edit Cover Photo
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
          onChange={(e) => uploadPhoto("profile_photo", e.target.files[0])}
        />
        <button onClick={() => document.getElementById("profile-photo-input").click()}>
          Edit Profile Photo
        </button>
      </div>
    </header>
  );
};

export default ProfileHeader;
