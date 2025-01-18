import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [childId, setChildId] = useState(null); // Lift childId state to ProfilePage

  return (
    <div className="profile-page">
      <Sidebar />
      <main className="profile-main-content">
        {/* Pass childId and setChildId as props */}
        <ProfileHeader childId={childId} />
        <ProfileDetails setChildId={setChildId} />
      </main>
    </div>
  );
};

export default ProfilePage;
