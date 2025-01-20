import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [childId, setChildId] = useState(null);
  const navigate = useNavigate();

  const handleChildCreated = (id) => {
    setChildId(id); // Save the created child ID
    navigate("/skills", { state: { childId: id } }); // Pass childId to SkillSuggestionPage
  };

  return (
    <div className="profile-page">
      <Sidebar />
      <main className="profile-main-content">
        <ProfileHeader childId={childId} />
        <ProfileDetails onChildCreated={handleChildCreated} />
      </main>
    </div>
  );
};

export default ProfilePage;
