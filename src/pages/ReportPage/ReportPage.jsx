import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar"; // Assuming Sidebar is already coded
import "./ReportPage.css";
import ProfileImage from "../../assets/images/CreateProfile.png"; // Replace with your actual image path

const ChildProfilePage = () => {
  return (
    <div className="child-profile-layout">
      <Sidebar />
      <div className="child-profile-container">
        {/* Left Section */}
        <div className="profile-card">
          <img src={ProfileImage} alt="Child's Profile" className="profile-image" />
          <div className="profile-details">
            <p className="profile-name">Child's Name</p>
            <p className="profile-age">Age</p>
            <p className="profile-hobby">Favorite Hobby</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="message-card">
          <h2 className="message-title">Great job!</h2>
          <p className="message-text">
            You’ve unlocked amazing skills by solving challenges and exploring new ideas—
            keep going and let us try even bigger adventures to see what else you can achieve!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildProfilePage;
