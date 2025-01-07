import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import AIStoryVisualizedPage from './pages/AIStoryVisualizedPage/AIStoryVisualizedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/AIPage" element={<AIStoryVisualizedPage />} />

    </Routes>
  );
};

export default App;