import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader"; 
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails"; 
import "./ProfilePage.css"; 

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />
      <main className="profile-main-content">
        <ProfileHeader />
        <ProfileDetails />
      </main>
    </div>
  );
};

export default ProfilePage;