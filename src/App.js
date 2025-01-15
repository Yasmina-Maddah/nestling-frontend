import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AIStoryVisualizedPage from './pages/AIStoryVisualizedPage/AIStoryVisualizedPage';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path ="/SignUp" element={<SignUpPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/AIPage" element={<AIStoryVisualizedPage />} />
      <Route path="/Resources" element={<ResourcesPage />} />
    </Routes>
  );
};

export default App;