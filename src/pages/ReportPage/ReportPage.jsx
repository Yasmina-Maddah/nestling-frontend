import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import "./ReportPage.css";
import ProfileImage from "../../assets/images/ProfilePhoto.png"; 

const ChildProfilePage = () => {
  return (
    <div className="child-profile-layout">
      <Sidebar />
      <div className="child-profile-container">
        {/* Left Section */}
        <div className="report-profile-card">
          <img src={ProfileImage} alt="Child's Profile" className="report-profile-image" />
          <div className="report-profile-details">
            <p className="report-profile-name">Child's Name</p>
            <p className="report-profile-age">Age</p>
            <p className="report-profile-hobby">Favorite Hobby</p>
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
